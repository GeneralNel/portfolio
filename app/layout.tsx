import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono-var",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mushfiq Rashid — Software Engineer",
  description:
    "Full-stack software engineer specializing in streaming media platforms. Building world-class experiences at Crunchyroll (Sony).",
  icons: {
    icon: "/hacker-pic.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable} antialiased`}>
        <SmoothScroll>
          <div className="grain">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
