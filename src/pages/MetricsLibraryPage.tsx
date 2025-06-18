import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const MetricsLibraryPage: React.FC = () => {
  const { metrics, loading, error } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nba-blue border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">Loading metrics data...</p>
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

  // Filter metrics by category and search query
  const filteredMetrics = metrics.filter(metric => {
    const matchesCategory = selectedCategory === 'all' || metric.category === selectedCategory;
    const matchesSearch = metric.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         metric.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'offensive', 'defensive', 'overall', 'advanced'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Efficiency Metrics Library</h1>
      <p className="text-gray-600">Comprehensive guide to basketball efficiency metrics and their interpretations.</p>
      
      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
            <select 
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="metric-search" className="block text-sm font-medium text-gray-700 mb-1">Search Metrics</label>
            <input 
              id="metric-search"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-nba-blue focus:border-nba-blue"
            />
          </div>
        </div>
      </div>

      {/* Metrics List */}
      <div className="space-y-4">
        {filteredMetrics.map(metric => (
          <div key={metric.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{metric.name} <span className="font-normal">({metric.fullName})</span></h3>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs mr-2">
                    {metric.category.charAt(0).toUpperCase() + metric.category.slice(1)}
                  </span>
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs">
                    {metric.isHigherBetter ? 'Higher is better' : 'Lower is better'}
                  </span>
                </p>
              </div>
              <button className="text-nba-blue hover:text-nba-red transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-3">
              <p className="text-gray-700">{metric.description}</p>
            </div>
            
            {metric.formula && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Formula:</h4>
                <div className="bg-gray-50 p-2 rounded-md">
                  <code className="text-sm">{metric.formula}</code>
                </div>
              </div>
            )}
            
            {metric.interpretation && (
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Interpretation:</h4>
                <p className="text-sm text-gray-700">{metric.interpretation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredMetrics.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No metrics match your current filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default MetricsLibraryPage;
