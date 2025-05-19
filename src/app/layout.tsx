import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capitol Hospitality – Travel & Tours",
  description: "Explore premium tours, hotels, and cultural destinations with Capitol Hospitality.",
  openGraph: {
    title: "Capitol Hospitality – Travel & Tours",
    description: "Explore premium tours, hotels, and cultural destinations with Capitol Hospitality.",
    url: "https://www.capitolhospitality.info",
    siteName: "Capitol Hospitality",
    images: [
      {
        url: "/23.png", // Ensure this image exists at /public/gg/1.png
        width: 1200,
        height: 630,
        alt: "Capitol Hospitality Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.capitolhospitality.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
