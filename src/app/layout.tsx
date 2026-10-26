import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naelle Noutong Nangmo | Full Stack & Data Engineering",
  description:
    "Portfolio 3D interactif de Naelle Noutong Nangmo. Développeuse Full Stack & Ingénierie des Données. 'I build systems. I connect worlds.'",
  keywords: [
    "Naelle Noutong Nangmo",
    "Full Stack Developer",
    "Data Engineering",
    "NestJS",
    "Angular",
    "TypeScript",
    "Laravel",
    "Cloud & DevOps",
    "Three.js",
    "React Three Fiber",
  ],
  authors: [{ name: "Naelle Noutong Nangmo" }],
  creator: "Naelle Noutong Nangmo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://naellenangmo.dev",
    title: "Naelle Noutong Nangmo | Full Stack & Data Engineering",
    description: "I build systems. I connect worlds. Explore interactive 3D portfolio.",
    siteName: "Naelle Noutong Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naelle Noutong Nangmo | Portfolio 3D",
    description: "I build systems. I connect worlds.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-space-black text-cold-white antialiased min-h-screen">
        <LanguageProvider defaultLocale="fr">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
