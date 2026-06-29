import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TechGrid } from "@/src/components/layout/TechGrid";
import { TechGridBackground } from "@/src/components/TechGridBackground";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

// Configure the fonts
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  style: ['italic'],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: "Adapta Labs | AI-Powered Acquisition",
  description: "Next-gen AI infrastructure and automation for modern agencies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${playfair.variable} font-sans antialiased`}>
        <TechGrid />
        <TechGridBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
