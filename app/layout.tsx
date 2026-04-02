// Next.js
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Schibsted_Grotesk, Azeret_Mono } from "next/font/google";

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

const tiemposText = localFont({
  src: [
    {
      path: "../public/font/TiemposText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/TiemposText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-text",
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
        url: "https://rajatchandarana.com/favicon/logo.png",
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
        className={`${azeretMono.variable} ${tiemposText.variable} ${schibstedGrotesk.variable} antialiased bg-background min-h-screen`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
