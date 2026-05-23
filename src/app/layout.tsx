import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCursor from "@/components/ui/SpotlightCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish Sharma | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in building high-performance web systems, Django backend APIs, scalable React frontends, PostgreSQL, and AWS architectures. Currently developing at HLTHTek Optimus.",
  keywords: [
    "Anish Sharma",
    "Full Stack Web Developer",
    "React.js",
    "JavaScript",
    "Python",
    "Django",
    "AWS",
    "PostgreSQL",
    "REST APIs",
    "CI/CD",
    "Postman",
    "Software Developer",
    "Kolkata",
  ],
  authors: [{ name: "Anish Sharma", url: "https://github.com/Anish2905" }],
  creator: "Anish Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anish Sharma | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Django, PostgreSQL, and AWS. Check out my projects and get in touch!",
    siteName: "Anish Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Sharma | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Django, PostgreSQL, and AWS.",
    creator: "@anish_log",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#030014" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SpotlightCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
