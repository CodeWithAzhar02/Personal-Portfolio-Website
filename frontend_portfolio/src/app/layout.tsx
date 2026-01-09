import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/outfit/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A showcase of my work and skills",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

