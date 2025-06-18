import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const HomePage: React.FC = () => {
  const { loading, error } = useData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nba-blue border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-medium">Error Loading Data</p>
        <p className="text-sm">{error}</p>
        <button className="mt-2 text-sm bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition-colors duration-200">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="bg-gradient-to-r from-nba-blue to-nba-red text-white rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">NBA Basketball Efficiency Explorer</h1>
        <p className="text-lg opacity-90 mb-4">Analyze, compare, and visualize player and team efficiency metrics</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/players" className="bg-white text-nba-blue px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200">
            Explore Players
          </Link>
          <Link to="/teams" className="bg-white text-nba-blue px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200">
            Explore Teams
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Access Cards */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Player Efficiency</h2>
          <p className="text-gray-600 mb-4">Analyze individual player performance metrics and efficiency ratings.</p>
          <Link to="/players" className="text-nba-blue font-medium hover:underline">View Player Dashboard →</Link>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Team Efficiency</h2>
          <p className="text-gray-600 mb-4">Explore team-level metrics and discover which teams are most efficient.</p>
          <Link to="/teams" className="text-nba-blue font-medium hover:underline">View Team Dashboard →</Link>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Player Comparison</h2>
          <p className="text-gray-600 mb-4">Compare efficiency metrics between multiple players side by side.</p>
          <Link to="/compare" className="text-nba-blue font-medium hover:underline">Compare Players →</Link>
        </div>
      </div>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Basketball Efficiency</h2>
        <p className="text-gray-600 mb-4">
          Efficiency metrics in basketball provide deeper insights beyond traditional box score statistics. 
          They help quantify a player's impact and effectiveness across various aspects of the game.
        </p>
        <Link to="/metrics" className="text-nba-blue font-medium hover:underline">Learn More About Metrics →</Link>
      </section>
    </div>
  );
};

export default HomePage;
