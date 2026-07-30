import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  status: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappLink: string;
  tel: string;
  email: string;
  schedule: string;
}
