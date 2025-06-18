export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  jerseyNumber: string;
  height: string;
  weight: string;
  age: number;
  experience: number;
  college?: string;
  imageUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  conference: 'East' | 'West';
  division: string;
  city: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export interface Metric {
  id: string;
  name: string;
  fullName: string;
  description: string;
  category: 'offensive' | 'defensive' | 'overall' | 'advanced';
  formula?: string;
  interpretation?: string;
  unit?: string;
  isHigherBetter: boolean;
}

export interface PlayerMetric {
  playerId: string;
  metricId: string;
  value: number;
  season: string;
  percentile?: number;
}

export interface TeamMetric {
  teamId: string;
  metricId: string;
  value: number;
  season: string;
  percentile?: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}
