import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TechGrid } from "@/src/components/layout/TechGrid";
import { TechGridBackground } from "@/src/components/TechGridBackground";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

// Configure the font with subsets
const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta', // Allows for CSS variable usage if needed
});

export const metadata: Metadata = {
  title: "AI Agency Engine",
  description: "Next-gen AI infrastructure and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <TechGrid />
        <TechGridBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
