export interface User {
  name: string;
  email: string;
  id?: string; // Adicionei id opcional
  points: number;
}

export interface LapRecord {
  userId: string;
  name: string;
  email: string;
  time: number; // time in seconds
  completed: boolean;
  emissionF1: number;
  emissionFE: number;
  difference: number;
  date: string;
}

export interface RacingData {
  users: User[];
  laps: LapRecord[];
}

export type Vehicle = {
  id: number;
  name: string;
  brand: string;
  category: string;
  engine: string;
  power: number;
  torque: number;
  traction: string;
  transmission: string;
  averagePrice: number;
  highlight: string;
  idealUse: string;
  image: string;
};