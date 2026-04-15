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

export interface ProjectDecisionItem {
  title: string;
  before: string;
  issue: string;
  after: string;
  takeaway: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  summary: string;
  problem: string;
  insight: string;
  design: string[];
  services: string[];
  outcomes: string[];
  decisions: ProjectDecisionItem[];
  role?: string;
  isTeam?: boolean;
  techStack?: string[];
  gitlabUrl?: string;
  githubUrl?: string;
}
