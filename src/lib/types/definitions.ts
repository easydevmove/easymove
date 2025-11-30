import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon?: LucideIcon;
  imageUrl?: string;
  title: string;
  description: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
    id: string;
    description: string;
    imageUrl: string;
    imageHint: string;
};