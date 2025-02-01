export type UserType = 'athlete' | 'organization';

export interface User {
  id: string;
  type: UserType;
  name: string;
  email: string;
  avatar?: string;
}

export interface AthleteProfile extends User {
  sports: string[];
  achievements: Achievement[];
  stats: Record<string, string | number>;
  bio: string;
  location: string;
  fundingCampaigns: FundingCampaign[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  medal?: 'gold' | 'silver' | 'bronze';
}

export interface FundingCampaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  deadline: string;
  status: 'active' | 'completed' | 'cancelled';
}