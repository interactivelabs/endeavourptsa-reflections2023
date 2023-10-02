import Footer from '@/components/sections/Footer';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/sections/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Reflections 2023 - 2024 | Endeavour PTSA',
  description: 'Site for the Endeavour PTSA Reflections 2023 - 2024 program.',
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => (
  <html
    lang="en"
    className={clsx(
      'h-full bg-white antialiased',
      inter.variable,
      dmSans.variable,
    )}
  >
    <body className="min-h-full">
      <Header />
      <div className="flex w-full flex-col">{children}</div>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
