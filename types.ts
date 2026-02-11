
export interface Project {
  id: string;
  title: string;
  category: 'Game' | 'Asset' | 'Tool';
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  priceStart?: string;
  icon: React.ReactNode;
}
