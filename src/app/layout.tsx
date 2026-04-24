import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperbuilder.co"),
  title: "Hyperbuilder",
  description: "Hyperbuilder",
  icons: {
    icon: "/simple-logo-hyperbuilder.svg",
  },
  robots: "all",
  openGraph: {
    title: "Hyperbuilder",
    description: "Hyperbuilder",
    url: "https://hyperbuilder.co",
    siteName: "Hyperbuilder",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hyperbuilder",
    description: "Hyperbuilder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
