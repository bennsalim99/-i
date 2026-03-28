import Image from 'next/image';

const stats = [
  { value: '€1.8B', label: 'Yönetilen portföy hacmi' },
  { value: '42', label: 'Boğaz hattı imza mülk' },
  { value: '12', label: 'Global concierge ofisi' }
];

const curation = [
  'Gizli katalogda üyeye özel 18 mülk',
  'Yapay zekâ destekli yatırım senaryosu analizi',
  'Özel sanat & gastronomi kürasyonu'
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
        <span className="section-eyebrow">Koleksiyon Düzeyi Gayrimenkul</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(2.6rem, 2rem + 2vw, 3.6rem)' }}>
          Lüks yaşam stilini, yatırım vizyonuyla buluşturuyoruz.
        </h1>
        <p className="section-subtitle">
          Boğaz manzaralı rezidanslardan tarihi yalı restorasyonlarına kadar her mülkümüz,
          zarafet, mimari değer ve sürdürülebilirlik standartlarını bir arada sunar. Kişisel
          portföy danışmanınız hayalinizi gerçeğe dönüştürsün.
        </p>
        <ul className="hero-curation">
          {curation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-actions">
          <a href="#featured" className="btn btn-primary">
            Koleksiyonu Keşfet
          </a>
          <a href="#contact" className="btn btn-outline">
            Concierge ile Görüş
          </a>
        </div>
        <a href="#featured" className="hero-scroll">
          Özel portföyümüze kayın
        </a>
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
        <div className="hero-gallery">
          <div className="hero-primary">
            <Image
              src="https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=1200&q=80"
              width={600}
              height={800}
              alt="Boğaz manzaralı lüks rezidans"
              priority
            />
          </div>
          <div className="hero-secondary">
            <Image
              src="https://images.unsplash.com/photo-1505691967810-0d3c35aa196d?auto=format&fit=crop&w=800&q=80"
              width={320}
              height={420}
              alt="Mimaride detaylı merdiven"
            />
            <div className="chip" style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'white', background: 'rgba(16, 19, 32, 0.72)', borderColor: 'rgba(255,255,255,0.2)' }}>
              4K Dijital Twin Tur
            </div>
          </div>
        </div>
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
