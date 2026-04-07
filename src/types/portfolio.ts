import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StrengthItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ThinkingItem {
  value: string;
  title: string;
  content: string;
}

export interface CapabilityItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface WritingItem {
  id: string;
  title: string;
  preview: string;
  content: string;
}

export interface ProjectItem {
  name: string;
  summary: string;
  problem: string;
  design: string[];
  services: string[];
  outcomes: string[];
}
