import type { Metadata } from "next";
import { Jost, Karla } from "next/font/google";
import "./globals.css";

// Wayfinder fonts: Jost acts as Enreal (thin, geometric sans)
const enreal = Jost({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-enreal",
});

// Karla acts as Ciutadella-Medium (tight line-height, texturally quiet)
const ciutadella = Karla({ 
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-ciutadella",
});

export const metadata: Metadata = {
  title: {
    default: "Kalenjin Music Awards (KMA)",
    template: "%s | Kalenjin Music Awards",
  },
  description: "Celebrating excellence in Kalenjin music and culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${enreal.variable} ${ciutadella.variable} font-enreal tracking-cinematic bg-void-black text-bone-white antialiased`}>
        {/* Full-viewport canvas. No Navbar, no Footer. */}
        <main className="relative w-screen h-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
