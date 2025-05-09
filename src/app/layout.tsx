import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "../style/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--poppins",
});

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata: Metadata = {
  title: 'Mobile application development in iOS and Android, Web application development in Node.js, ReactJS, Next.js, PHP and Services in CMS, ERP and e-Commerce | Technovatic Solutions',
  description: 'Technovatic Solutions is one of the trusted partners for web and mobile application development and maintenance...',
  keywords: "android, iphone, mobile application, ...",
  openGraph: {
    title: 'Mobile application development...',
    description: 'Technovatic Solutions is one of the trusted partners...',
    url: 'https://www.technovaticsolutions.com/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Technovatic Solutions',
    images: [
      {
        url: 'https://www.technovaticsolutions.com/logo-1200X630.png',
        width: 1200,
        height: 630,
        alt: 'Technovatic Solutions'
      }
    ]
  }
};

// ✅ NEW: define this separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
