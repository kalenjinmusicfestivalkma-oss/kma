import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kalenjin Music Awards (KMA)",
    template: "%s | Kalenjin Music Awards",
  },
  description: "The premier platform celebrating excellence in Kalenjin music and culture.",
  keywords: ["Kalenjin", "Music", "Awards", "Rift Valley", "KMA", "Kenya"],
  openGraph: {
    title: "Kalenjin Music Awards",
    description: "Celebrating excellence in Kalenjin music and culture.",
    url: "https://kma2026.example.com",
    siteName: "Kalenjin Music Awards",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalenjin Music Awards",
    description: "Celebrating excellence in Kalenjin music and culture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
