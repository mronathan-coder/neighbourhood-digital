import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neighbourhood Digital — // your website, sorted.",
  description:
    "Clean, fast websites for small businesses and local shops in Johannesburg. No tech-speak. No hidden fees. Live in 1–2 weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
