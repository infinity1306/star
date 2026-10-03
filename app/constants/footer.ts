import { FooterLink } from "../types";

export const FOOTER_LINKS: FooterLink[] = [
  {
    name: 'Contact',
    hoverText: 'info@starchainlabs.in',
    icon: 'icons/file.svg',
    url: 'mailto:info@starchainlabs.in',
  },
  {
    name: 'Founder',
    hoverText: 'infinity1306it Pandey',
    icon: 'icons/linkedin.svg',
    action: () => {
      import('@stores').then(({ useFounderStore }) => {
        useFounderStore.getState().openFounder();
      });
    },
  },
  {
    name: 'LinkedIn',
    hoverText: 'Follow our journey',
    icon: 'icons/linkedin.svg',
    url: 'https://www.linkedin.com/company/star-chain-labs',
  },
  {
    name: 'Instagram',
    hoverText: '@star.chainlabs',
    icon: 'icons/instagram.svg',
    url: 'https://www.instagram.com/star.chainlabs/',
  },
  {
    name: 'GitHub',
    hoverText: 'Open Source',
    icon: 'icons/github.svg',
    url: 'https://github.com/Star-Chain-Labs',
  },
  {
    name: 'Phone',
    hoverText: 'Call Us',
    icon: 'icons/file.svg',
    url: 'tel:+917772961169',
  }
];