import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const departureMono = localFont({
  variable: "--font-departure-mono",
  src: "/fonts/DepartureMono-Regular.woff2",
});

export const metadata: Metadata = {
  title: "August Drakton",
  description: "August's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${departureMono.variable} antialiased p-6 md:p-0 md:py-6`}
      >
        {children}
      </body>
    </html>
  );
}
