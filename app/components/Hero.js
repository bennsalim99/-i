import Image from 'next/image';

const stats = [
  { value: '250+', label: 'Seçkin Portföy' },
  { value: '98%', label: 'Memnuniyet Oranı' },
  { value: '24/7', label: 'Concierge Hizmeti' }
];

export default function Hero() {
  return (
    <section className="hero" id="collections">
      <div className="hero-content">
        <div className="badge" style={{ alignSelf: 'flex-start' }}>
          <span role="img" aria-label="sparkle">
            ✨
          </span>
          İstanbul&apos;un en ayrıcalıklı gayrimenkulleri
        </div>
        <h1 className="section-title" style={{ fontSize: 'clamp(2.6rem, 2rem + 2vw, 3.6rem)' }}>
          Lüks yaşam stilini, yatırım vizyonuyla buluşturuyoruz.
        </h1>
        <p className="section-subtitle">
          Boğaz manzaralı rezidanslardan tarihi yalı restorasyonlarına kadar her mülkümüz,
          zarafet, mimari değer ve sürdürülebilirlik standartlarını bir arada sunar. Kişisel
          portföy danışmanınız hayalinizi gerçeğe dönüştürsün.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#featured" className="btn btn-primary">
            Koleksiyonu Keşfet
          </a>
          <a href="#contact" className="btn btn-outline">
            Concierge ile Görüş
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <Image
          src="https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=1200&q=80"
          width={600}
          height={800}
          alt="Boğaz manzaralı lüks rezidans"
          priority
        />
        <div className="floating-card">
          <strong>Özel Portföy Danışmanlığı</strong>
          <p>
            Premium üyelerimize gizli satışlar, yatırım analizleri ve mimari concierge paketleri sunuyoruz.
          </p>
          <a href="#contact" className="btn btn-outline" style={{ justifyContent: 'center' }}>
            Detaylı Bilgi
          </a>
        </div>
      </div>
    </section>
  );
}
