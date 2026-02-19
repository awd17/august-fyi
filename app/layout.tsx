import type { Metadata } from "next";
import { Fira_Mono, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaMono.variable} ${geistMono.variable} ${inter.variable} ${departureMono.variable} antialiased p-6 md:p-0 md:py-6 absolute inset-0`}
      >
        {children}
      </body>
    </html>
  );
}
