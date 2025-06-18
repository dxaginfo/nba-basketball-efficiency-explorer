import axios from 'axios';
import { Player, Team, Metric } from '../types/dataTypes';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchPlayers = async (): Promise<Player[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

export const fetchPlayerById = async (id: string): Promise<Player> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching player with id ${id}:`, error);
    throw error;
  }
};

export const fetchTeams = async (): Promise<Team[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teams`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

export const fetchTeamById = async (id: string): Promise<Team> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching team with id ${id}:`, error);
    throw error;
  }
};

export const fetchMetrics = async (): Promise<Metric[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/metrics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};

export const fetchPlayerMetrics = async (playerId: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/player-metrics?playerId=${playerId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching metrics for player ${playerId}:`, error);
    throw error;
  }
};

export const fetchTeamMetrics = async (teamId: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team-metrics?teamId=${teamId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching metrics for team ${teamId}:`, error);
    throw error;
  }
};
