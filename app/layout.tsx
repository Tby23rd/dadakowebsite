import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dadako",
  description: "Dadako Software Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}
      <script src="//code.tidio.co/sulrykxmtehnqfxuu1st6o1lxgqk7fjr.js" async></script>
      </body>
    </html>
  );
}
