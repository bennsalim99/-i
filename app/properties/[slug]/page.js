import Image from 'next/image';
import Link from 'next/link';
import { getProperty, properties } from '../../data/properties';

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export function generateMetadata({ params }) {
  const property = getProperty(params.slug);
  if (!property) {
    return { title: 'Mülk bulunamadı | LuxEstate' };
  }

  return {
    title: `${property.title} | LuxEstate`,
    description: `${property.tagline} · ${property.location}`
  };
}

export default function PropertyDetail({ params }) {
  const property = getProperty(params.slug);

  if (!property) {
    return (
      <main style={{ width: 'min(960px, 92vw)', margin: '0 auto', padding: '4rem 0' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h1>Mülk Bulunamadı</h1>
          <p>Aradığınız mülk arşivimize taşınmış veya yalnızca davetlilere görünür durumda olabilir.</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Portföyü Keşfet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ width: 'min(1100px, 92vw)', margin: '0 auto', padding: '4rem 0 6rem' }}>
      <Link href="/" className="badge" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        ← Portföye Dön
      </Link>

      <section className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem 2.5rem 0', display: 'grid', gap: '1.5rem' }}>
          <span className="badge" style={{ background: 'rgba(200, 155, 60, 0.18)', alignSelf: 'flex-start' }}>
            {property.tagline}
          </span>
          <h1 className="section-title" style={{ marginBottom: 0 }}>
            {property.title}
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="badge">{property.location}</span>
            <span className="badge" style={{ background: 'rgba(27, 31, 42, 0.8)', color: 'white' }}>
              {property.price}
            </span>
          </div>
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
            {property.description}
          </p>
          <blockquote
            className="signature-callout"
            style={{ margin: '0 0 1.5rem', fontSize: '1.05rem', color: 'rgba(27, 31, 42, 0.75)' }}
          >
            “{property.signature}”
          </blockquote>
          <div className="detail-metrics">
            <div className="detail-metric">
              <span>İç Getiri Oranı</span>
              <strong>{property.investment.irr}</strong>
            </div>
            <div className="detail-metric">
              <span>Yıllık Gelir</span>
              <strong>{property.investment.yield}</strong>
            </div>
            <div className="detail-metric">
              <span>Değer Artışı</span>
              <strong>{property.investment.appreciation}</strong>
            </div>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {property.features.map((feature) => (
              <li key={feature} className="badge">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.8rem',
            padding: '0 2.5rem 2.5rem'
          }}
        >
          {property.gallery.map((src) => (
            <div key={src} style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden' }}>
              <Image src={src} alt={property.title} width={680} height={520} style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="grid detail-panels">
          <article className="card">
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Seçkin Ayrıcalıklar
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
              {property.highlights.map((highlight) => (
                <li key={highlight} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <span role="img" aria-label="diamond">
                    💎
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card" style={{ display: 'grid', gap: '1.2rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Concierge ile Özel Tur
            </h2>
            <p>
              Portföy danışmanlarımız, yatırım profilinizi analiz ederek sizin için özel bir sunum hazırlar.
              Helikopter ile keşif, Michelin rehberli gastronomi eşleşmeleri ve sanat danışmanlığı içeren
              paketlerimiz hakkında bilgi alın.
            </p>
            <ul className="concierge-list">
              {property.concierge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+908508851000" className="btn btn-primary">
                Keşif Planla
              </a>
              <a href="mailto:concierge@luxestate.com" className="btn btn-outline">
                Bilgi Talep Et
              </a>
            </div>
          </article>

          <article className="card" style={{ display: 'grid', gap: '1rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Yaşam Alanı İmkanları
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.9rem' }}>
              {property.amenities.map((amenity) => (
                <li key={amenity} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                  <span role="img" aria-label="leaf">
                    🌟
                  </span>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
