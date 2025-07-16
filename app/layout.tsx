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
    icon: [{ url: "/favicon/favicon.ico", sizes: "32x32" }],
    other: [
      { url: "/favicon/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Rajat Chandarana",
    description: "Rajat Chandarana's portfolio showcasing product design work",
    url: "https://rajatchandarana.com",
    siteName: "Rajat Chandarana",
    // images: [
    //   {
    //     url: "/images/og.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Rajat Chandarana Portfolio",
    //   },
    // ],
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
