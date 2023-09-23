import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reflections 2023 - 2024 | Endeavour PTSA',
  description: 'Site for the Endeavour PTSA Reflections 2023 - 2024 program.',
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang="en" className="bg-slate-50">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
