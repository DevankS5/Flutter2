import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flutterbyte.dev"),
  title: "FlutterByte — Premium Flutter Development Agency",
  description:
    "We build high-performance Flutter apps for startups and enterprises. From MVP to full-cycle development — ship faster, launch sooner, grow smarter.",
  keywords: [
    "Flutter development",
    "Flutter agency",
    "mobile app development",
    "cross-platform apps",
    "Flutter developer",
    "app development company",
  ],
  authors: [{ name: "FlutterByte" }],
  openGraph: {
    type: "website",
    title: "FlutterByte — Premium Flutter Development Agency",
    description: "We build high-performance Flutter apps that ship fast.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlutterByte — Premium Flutter Development Agency",
    description: "Flutter apps that ship fast.",
    images: ["/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased font-sans overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
