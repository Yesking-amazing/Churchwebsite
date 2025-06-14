import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divine Trinity Church - Wetzikon, Switzerland",
  description: "Welcome to Divine Trinity Church in Wetzikon, Switzerland. Join our spiritual family for worship, fellowship, and service as we grow together in faith and love.",
  keywords: "church, Wetzikon, Switzerland, worship, faith, community, Divine Trinity, Christian",
  authors: [{ name: "Divine Trinity Church" }],
  openGraph: {
    title: "Divine Trinity Church - Wetzikon, Switzerland",
    description: "Join our spiritual family for worship, fellowship, and service as we grow together in faith and love.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}