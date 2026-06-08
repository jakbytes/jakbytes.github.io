import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

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
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <GoogleTagManager gtmId="G-RS4Q9DYC6M" />
      <body className="font-main">{children}</body>
    </html>
  );
}
