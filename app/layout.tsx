import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} flex flex-col h-full`}>
        <Navbar />
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>

        <script src="//code.tidio.co/sulrykxmtehnqfxuu1st6o1lxgqk7fjr.js" async></script>
        <Footer/>
      </body>
    </html>
  );
}
