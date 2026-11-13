import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilias Kharbouch — Portfolio",
  description:
    "Portfolio d'Ilias Kharbouch — Génie Digital & IA appliquée à la santé, Full-Stack, Software Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" suppressHydrationWarning>
      <body className={`${sans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
