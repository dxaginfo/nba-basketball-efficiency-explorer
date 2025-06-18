import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const ComparisonPage: React.FC = () => {
  const { players, metrics, loading, error } = useData();
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nba-blue border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">Loading comparison data...</p>
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

  const handlePlayerSelection = (playerId: string) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      if (selectedPlayers.length < 3) {
        setSelectedPlayers([...selectedPlayers, playerId]);
      }
    }
  };

  const handleMetricSelection = (metricId: string) => {
    if (selectedMetrics.includes(metricId)) {
      setSelectedMetrics(selectedMetrics.filter(id => id !== metricId));
    } else {
      setSelectedMetrics([...selectedMetrics, metricId]);
    }
  };

  const selectedPlayerObjects = players.filter(player => selectedPlayers.includes(player.id));
  const selectedMetricObjects = metrics.filter(metric => selectedMetrics.includes(metric.id));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Player Comparison</h1>
      <p className="text-gray-600">Compare efficiency metrics between up to 3 players.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Player Selection Panel */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Players (max 3)</h2>
          
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search for players..." 
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            />
          </div>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {players.slice(0, 10).map(player => (
              <div 
                key={player.id} 
                className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-50 ${selectedPlayers.includes(player.id) ? 'bg-blue-50 border border-blue-200' : ''}`}
                onClick={() => handlePlayerSelection(player.id)}
              >
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mr-3">
                  {player.imageUrl ? (
                    <img src={player.imageUrl} alt={player.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-lg text-gray-400">{player.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium">{player.name}</p>
                  <p className="text-xs text-gray-500">{player.position} | {player.team}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Metrics Selection Panel */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Metrics to Compare</h2>
          
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search for metrics..." 
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            />
          </div>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {metrics.map(metric => (
              <div 
                key={metric.id} 
                className={`p-2 rounded-md cursor-pointer hover:bg-gray-50 ${selectedMetrics.includes(metric.id) ? 'bg-blue-50 border border-blue-200' : ''}`}
                onClick={() => handleMetricSelection(metric.id)}
              >
                <p className="font-medium">{metric.name} <span className="font-normal">({metric.fullName})</span></p>
                <p className="text-xs text-gray-500">{metric.category.charAt(0).toUpperCase() + metric.category.slice(1)} | {metric.isHigherBetter ? 'Higher is better' : 'Lower is better'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Results */}
      {selectedPlayerObjects.length > 0 && selectedMetricObjects.length > 0 ? (
        <div className="card mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Comparison Results</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                  {selectedPlayerObjects.map(player => (
                    <th key={player.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {player.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedMetricObjects.map(metric => (
                  <tr key={metric.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{metric.name}</div>
                      <div className="text-xs text-gray-500">{metric.fullName}</div>
                    </td>
                    {selectedPlayerObjects.map(player => (
                      <td key={player.id} className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">TBD</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="btn-primary">Export Comparison</button>
          </div>
        </div>
      ) : (
        selectedPlayerObjects.length > 0 || selectedMetricObjects.length > 0 ? (
          <div className="card mt-6 text-center py-8">
            <p className="text-gray-500">
              {selectedPlayerObjects.length === 0 ? 'Please select at least one player.' : 'Please select at least one metric.'}
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ComparisonPage;
