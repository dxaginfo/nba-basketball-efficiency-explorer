import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <nav className="p-4 space-y-1">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-gray-100 text-nba-blue font-medium' : 'text-gray-700'}`
          }
          end
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/players" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-gray-100 text-nba-blue font-medium' : 'text-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Player Efficiency</span>
        </NavLink>
        
        <NavLink 
          to="/teams" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-gray-100 text-nba-blue font-medium' : 'text-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Team Efficiency</span>
        </NavLink>
        
        <NavLink 
          to="/compare" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-gray-100 text-nba-blue font-medium' : 'text-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Comparison</span>
        </NavLink>
        
        <NavLink 
          to="/metrics" 
          className={({ isActive }) => 
            `flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-gray-100 text-nba-blue font-medium' : 'text-gray-700'}`
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Metrics Library</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
