import type { Metadata } from "next";
import { Outfit, Inter, Jost, Karla } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
// Wayfinder display fonts
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-enreal" });
const karla = Karla({ subsets: ["latin"], weight: ["300"], variable: "--font-ciutadella" });

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
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${jost.variable} ${karla.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
