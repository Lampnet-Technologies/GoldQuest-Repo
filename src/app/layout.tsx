import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Radley } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/theme-provider";
import Footer from "@/components/Reuseable/Footer";
import Header from "@/components/Reuseable/Header";
import ScrollToTop from "@/components/Reuseable/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const radley = Radley({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-radley",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Goal Quest Academy",
  description: "Goal Quest Academy is a premier business training and management consulting firm committed to empowering the next generation of leaders and entrepreneurs. Established in 2021 and headquartered in Enugu, Nigeria, we are dedicated to fostering innovation, leadership, and entrepreneurship through world-class training, coaching, and consulting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${radley.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop/>
        </ThemeProvider>
      </body>
    </html>
  );
}
