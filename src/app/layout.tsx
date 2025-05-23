import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jakbytes",
  description: "Next-Generation Spatial Computing Apps and Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-RS4Q9DYC6M" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
