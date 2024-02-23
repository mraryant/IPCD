'use client'

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image'
import Headroom from "react-headroom";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Headroom >
          <Navbar />
        </Headroom>
        {children}   {/* page commponent  */}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
