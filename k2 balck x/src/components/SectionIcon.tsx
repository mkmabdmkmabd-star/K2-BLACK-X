import React from 'react';
import {
  ShieldCheck,
  SearchCheck,
  Terminal,
  Code2,
  Globe,
  Cpu,
  Sparkles,
  BarChart3,
  MonitorCheck,
  HardDrive,
  Wrench,
  GraduationCap,
  BookOpen,
  Palette,
  Laptop,
  Layers,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  SearchCheck,
  Terminal,
  Code2,
  Globe,
  Cpu,
  Sparkles,
  BarChart3,
  MonitorCheck,
  HardDrive,
  Wrench,
  GraduationCap,
  BookOpen,
  Palette,
  Laptop,
  Layers
};

interface Props {
  name: string;
  className?: string;
}

export const SectionIcon: React.FC<Props> = ({ name, className = 'w-5 h-5' }) => {
  const IconComponent = iconMap[name] || Layers;
  return <IconComponent className={className} />;
};
