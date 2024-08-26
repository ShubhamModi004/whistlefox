import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whistlefox Industries Private Limited - Quality Clothing from New Zealand",
  description: "Whistlefox Industries Private Limited, based in Auckland, New Zealand, is a leading name in the clothing industry. With 8 years of experience, we specialize in delivering high-quality, innovative fashion solutions that meet the needs of our customers.",
  keywords: "Whistlefox Industries, clothing, fashion, New Zealand, quality clothing, innovative fashion, Auckland",
  authors: {name: "Whistlefox Industries Private Limited" },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
