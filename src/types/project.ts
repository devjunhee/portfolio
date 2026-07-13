export type Project = {
  slug: string;
  title: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  scale: string;
  category: string;
  techs: string[];
  systems: string[];
  highlights: string[];
  impact?: string;
  problem?: string;
  solution?: string[];
  image?: string;
  gallery?: string[];
};
