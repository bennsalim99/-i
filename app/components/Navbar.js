import Link from 'next/link';

const links = [
  { href: '#collections', label: 'Portföy' },
  { href: '#experience', label: 'Deneyim' },
  { href: '#services', label: 'Hizmetler' },
  { href: '#contact', label: 'İletişim' }
];

export default function Navbar() {
  return (
    <header className="card navbar">
      <div className="navbar-inner">
        <Link href="#" className="navbar-brand">
          LUXESTATE PRIVÉ
        </Link>
        <nav className="navbar-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="badge" style={{ background: 'transparent' }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-contact">
          <a href="tel:+908508851000" className="chip nav-chip">
            24/7 Concierge · +90 850 885 10 00
          </a>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem' }}>
            Randevu Al
          </Link>
        </div>
      </div>
    </header>
  );
}
