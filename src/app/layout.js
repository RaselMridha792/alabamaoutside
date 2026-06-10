import { Cormorant_Garamond, Inter } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import FloatingContact from '@/components/shared/FloatingContact';

// Cormorant Garamond ফন্ট সেটআপ
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif', // এই ভ্যারিয়েবলটি মনে রাখুন
});

// Inter ফন্ট সেটআপ
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans', // এই ভ্যারিয়েবলটি মনে রাখুন
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* এখানে body ট্যাগে দুটি ভ্যারিয়েবলই ক্লাস হিসেবে দেওয়া হয়েছে */}
      <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}>

        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <FloatingContact></FloatingContact>
      </body>
    </html>
  );
}