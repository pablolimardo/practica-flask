import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barberhood - El Calafate | Barbería & Tattoo Studio Street',
  description: 'Barbería urbana y tattoo studio en El Calafate. Cortes, barba, tatuajes y estilo callejero. Patrocinio Lara 163.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Permanent+Marker&family=Poppins:wght@300;400;600;700;900&family=Rubik+Spray+Paint&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
