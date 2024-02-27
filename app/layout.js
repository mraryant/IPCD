
// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Oxanium, Montserrat } from 'next/font/google';
// import Headroom from "react-headroom";

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

export const metadata = {
  title: "IPCD",
  description: "INSTITUTE OF PERSONNEL AND CORPORATE DEVELOPMENT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} ${montserrat.variable}`} >

        {children}

      </body>
    </html>
  );
}
