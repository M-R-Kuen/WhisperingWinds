import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "@/components/UI/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whispering Winds Outdoors - Discover the Beauty of Nature",
  description:
    "Explore outdoor adventures, hiking tips, and gear recommendations with Whispering Winds Outdoors.",
  keywords: "outdoors, hiking, adventure, nature, camping, outdoor gear",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "64x64",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://www.whisperingwindsoutdoors.com",
    title: "Whispering Winds Outdoors - Empowering adventurous souls",
    description:
      "Your go-to source for outdoor adventures, hiking tips, and gear recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Metadata and links to stylesheets or scripts go here */}</head>
      <body className={inter.className}>
        <NextUIProvider>
          {/* <NavbarComponent /> */}
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
