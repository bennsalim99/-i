import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';

export const metadata = {
  title: 'LuxEstate | Lüks Emlak Portföyünüz',
  description:
    'LuxEstate, seçkin konutlar ve ticari mülklerle premium gayrimenkul deneyimi sunar.'
};

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
