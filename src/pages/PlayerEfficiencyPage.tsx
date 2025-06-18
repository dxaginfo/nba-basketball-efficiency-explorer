import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const PlayerEfficiencyPage: React.FC = () => {
  const { players, metrics, loading, error } = useData();
  const [selectedMetric, setSelectedMetric] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nba-blue border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">Loading player data...</p>
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

  // Filter players by position and search query
  const filteredPlayers = players.filter(player => {
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  const positions = ['all', 'G', 'F', 'C', 'G-F', 'F-C'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Player Efficiency Dashboard</h1>
      
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
            <label htmlFor="position-select" className="block text-sm font-medium text-gray-700 mb-1">Filter by Position</label>
            <select 
              id="position-select"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            >
              {positions.map(position => (
                <option key={position} value={position}>{position === 'all' ? 'All Positions' : position}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="player-search" className="block text-sm font-medium text-gray-700 mb-1">Search Players</label>
            <input 
              id="player-search"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter player name..."
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            />
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map(player => (
          <div key={player.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {player.imageUrl ? (
                  <img src={player.imageUrl} alt={player.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-2xl text-gray-400">{player.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
                <p className="text-sm text-gray-500">{player.position} | {player.team} | #{player.jerseyNumber}</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="text-center p-2 bg-gray-50 rounded">
                <p className="stat-value">{player.age}</p>
                <p className="stat-label">Age</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <p className="stat-value">{player.experience}</p>
                <p className="stat-label">Exp.</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full text-center py-2 text-nba-blue font-medium hover:bg-gray-50 rounded-md transition-colors duration-200">
                View Detailed Stats
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No players match your current filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PlayerEfficiencyPage;
