import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMB Solutions',
  description: 'Websites and hosting for local businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
