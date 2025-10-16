import './globals.css';

export const metadata = {
  title: 'LuxEstate | Lüks Emlak Portföyünüz',
  description:
    'LuxEstate, seçkin konutlar ve ticari mülklerle premium gayrimenkul deneyimi sunar.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-sand text-slate-900">
        {children}
      </body>
    </html>
  );
}
