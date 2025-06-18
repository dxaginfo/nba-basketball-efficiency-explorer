import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const TeamEfficiencyPage: React.FC = () => {
  const { teams, metrics, loading, error } = useData();
  const [selectedMetric, setSelectedMetric] = useState<string>('');
  const [selectedConference, setSelectedConference] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nba-blue border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">Loading team data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-medium">Error Loading Data</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  // Filter teams by conference and search query
  const filteredTeams = teams.filter(team => {
    const matchesConference = selectedConference === 'all' || team.conference === selectedConference;
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         team.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesConference && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Team Efficiency Dashboard</h1>
      
      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="metric-select" className="block text-sm font-medium text-gray-700 mb-1">Select Metric</label>
            <select 
              id="metric-select"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            >
              <option value="">Select a metric</option>
              {metrics.map(metric => (
                <option key={metric.id} value={metric.id}>{metric.name} ({metric.fullName})</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="conference-select" className="block text-sm font-medium text-gray-700 mb-1">Filter by Conference</label>
            <select 
              id="conference-select"
              value={selectedConference}
              onChange={(e) => setSelectedConference(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            >
              <option value="all">All Conferences</option>
              <option value="East">Eastern Conference</option>
              <option value="West">Western Conference</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="team-search" className="block text-sm font-medium text-gray-700 mb-1">Search Teams</label>
            <input 
              id="team-search"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter team name or city..."
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            />
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map(team => (
          <div key={team.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {team.logoUrl ? (
                  <img src={team.logoUrl} alt={team.name} className="h-full w-full object-contain" />
                ) : (
                  <span className="text-2xl text-gray-400">{team.abbreviation}</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{team.city} {team.name}</h3>
                <p className="text-sm text-gray-500">{team.conference} Conference | {team.division} Division</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 gap-2">
              <div className="text-center p-2 bg-gray-50 rounded flex justify-between">
                <span className="stat-label">Conference Rank:</span>
                <span className="font-medium">TBD</span>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded flex justify-between">
                <span className="stat-label">Division Rank:</span>
                <span className="font-medium">TBD</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full text-center py-2 text-nba-blue font-medium hover:bg-gray-50 rounded-md transition-colors duration-200">
                View Team Metrics
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No teams match your current filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default TeamEfficiencyPage;
