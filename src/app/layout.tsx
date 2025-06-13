import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shiny Vive - Custom Hair Care",
  description: "Customize your own hair care products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} font-sans bg-brand-bg text-brand-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
