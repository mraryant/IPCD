'use client'

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image'
import Headroom from "react-headroom";
import { Oxanium, Montserrat } from 'next/font/google';

const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oxanium',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

// ...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} ${montserrat.variable}`} >

        <Headroom style={{ zIndex: 99 }}>
          <Navbar />
        </Headroom>
        {children}

      </body>
    </html>
  );
}