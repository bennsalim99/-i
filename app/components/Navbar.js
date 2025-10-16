import Link from 'next/link';

const links = [
  { href: '#collections', label: 'Portföy' },
  { href: '#experience', label: 'Deneyim' },
  { href: '#services', label: 'Hizmetler' },
  { href: '#contact', label: 'İletişim' }
];

export default function Navbar() {
  return (
    <header className="card" style={{ position: 'sticky', top: '1.5rem', zIndex: 20 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        <Link href="#" style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.08em' }}>
          LUXESTATE
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="badge" style={{ background: 'transparent' }}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem' }}>
            Randevu Al
          </Link>
        </nav>
      </div>
    </header>
  );
}
