import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchPlayers, fetchTeams, fetchMetrics } from '../services/api';
import { Player, Team, Metric } from '../types/dataTypes';

interface DataContextType {
  players: Player[];
  teams: Team[];
  metrics: Metric[];
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({} as DataContextType);

export const useData = () => useContext(DataContext);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [playersData, teamsData, metricsData] = await Promise.all([
          fetchPlayers(),
          fetchTeams(),
          fetchMetrics(),
        ]);
        
        setPlayers(playersData);
        setTeams(teamsData);
        setMetrics(metricsData);
        setError(null);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ players, teams, metrics, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
