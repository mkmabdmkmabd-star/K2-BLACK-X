export interface ServiceItem {
  id: string;
  sectionId: number;
  title: string;
  description: string;
  deliverables?: string[];
  tools?: string[];
  duration?: string;
  badge?: string;
}

export interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  color: {
    bg: string;
    border: string;
    text: string;
    glow: string;
    gradient: string;
  };
  summary: string;
  services: ServiceItem[];
  featuredTool?: {
    name: string;
    type: string;
    description: string;
  };
}

export interface SelectedService {
  serviceId: string;
  sectionId: number;
  sectionTitle: string;
  serviceTitle: string;
  notes?: string;
}
