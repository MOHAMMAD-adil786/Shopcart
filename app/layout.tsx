import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickViewModal from '@/components/QuickViewModal';
import LoginModal from '@/components/LoginModal';
import CartDrawer from '@/components/CartDrawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopCart | AI-Powered E-Commerce Marketplace',
  description: 'Premium shopping experience with AI-powered recommendations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <QuickViewModal />
        <LoginModal />
        <CartDrawer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
