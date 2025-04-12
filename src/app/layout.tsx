import type { Metadata } from "next";

import {Inter, Newsreader} from "next/font/google"
import "./globals.css";


const inter = Inter({
 subsets: ["latin"],
 weight: ["300","400","600"],
  variable: '--font-inter',
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400","600"],
  style: ["italic","normal"],
   variable: '--font-newsreader',
   display: "swap",
    adjustFontFallback: false,
  
}); 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${newsreader.variable}  antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
