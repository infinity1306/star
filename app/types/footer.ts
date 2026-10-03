export interface FooterLink {
  name: string;
  hoverText?: string;
  url?: string;
  action?: () => void;
  icon: string;
}