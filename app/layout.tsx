import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  style: "normal",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Dwyane Sido Portfolio",
  description: "Next.js Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}