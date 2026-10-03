import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "StarChain Labs",
  description: "Technology-driven company focused on the IT and Web3 ecosystem. We provide scalable MLM software, frontend/backend development, and practical mentorship.",
  keywords: "StarChain Labs, Blockchain, Web3, Full-stack Engineering, MLM Software, IT Mentorship, Digital Platforms",
  authors: [{ name: "StarChain Labs" }],
  creator: "StarChain Labs",
  publisher: "StarChain Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "StarChain Labs - Technology Company",
    description: "Technology-driven company focused on the IT and Web3 ecosystem. We provide scalable MLM software, frontend/backend development, and practical mentorship.",
    siteName: "StarChain Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarChain Labs - Technology Company",
    description: "Technology-driven company focused on the IT and Web3 ecosystem. We provide scalable MLM software, frontend/backend development, and practical mentorship.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
