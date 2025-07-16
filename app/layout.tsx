// Next.js
import type { Metadata } from "next";
import { Schibsted_Grotesk, Prata, Azeret_Mono } from "next/font/google";

// Third-party packages
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Local styles
import "./globals.css";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-azeret-mono",
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajat Chandarana",
  description: "Rajat Chandarana's portfolio showcasing product design work",
  icons: {
    icon: [{ url: "/favicon/logo.svg", sizes: "32x32" }],
  },
  openGraph: {
    title: "Rajat Chandarana",
    description: "Rajat Chandarana's portfolio showcasing product design work",
    url: "https://rajatchandarana.com",
    siteName: "Rajat Chandarana",
    images: [
      {
        url: "/favicon/logo.svg",
        width: 1200,
        height: 1200,
        alt: "Rajat Chandarana Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${azeretMono.variable} ${prata.variable} ${schibstedGrotesk.variable} antialiased bg-background min-h-screen`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
