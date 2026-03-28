import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import { properties } from './data/properties';

const experiences = [
  {
    title: 'Yaşam Tasarımı Atölyesi',
    description:
      'İç mimarlar ve sanat danışmanlarıyla mülkünüzü kişiselleştirirken dijital twin teknolojisiyle her odada yürüyün.'
  },
  {
    title: 'Varlık Yönetimi Partnerliği',
    description:
      'Yatırım danışmanlarımız portföy çeşitliliği için uluslararası vergi planlaması ve kiralama yönetimi sağlar.'
  },
  {
    title: 'Gastronomi & Wellness Concierge',
    description:
      'Şef ortaklıkları, özel spa programları ve üyelik kulüpleriyle yaşam konforunuzu bir üst seviyeye taşır.'
  }
];

const services = [
  {
    title: 'Dijital İmza Töreni',
    detail: 'Uzaktan hukuk danışmanlığı ve güvenli imza süreciyle işleminizi dakikalar içinde tamamlayın.'
  },
  {
    title: 'Mimari Restorasyon',
    detail: 'Tarihi yapı uzmanlarımızla, kültürel mirası koruyarak modern yaşam standartlarını yakalayın.'
  },
  {
    title: 'Premium Pazarlama',
    detail: '360° sanal turlar, yaşam tarzı film prodüksiyonları ve global lansman etkinlikleriyle kitlenizi büyütün.'
  }
];

const marqueeBrands = [
  'Forbes Global Properties',
  'Christie’s International Real Estate',
  'Sotheby’s Concierge Auctions',
  'Four Seasons Private Residences',
  'Mandarin Oriental Exclusive Homes',
  'Bulgari Residential Collection'
];

const portfolioMetrics = [
  {
    value: '96 saat',
    label: 'İlk sunum süremiz',
    detail: 'Talebinizden 4 gün sonra kişisel sunum dosyanız hazır.'
  },
  {
    value: '%87',
    label: 'Yatırımcı tekrar oranı',
    detail: 'Portföyümüzden ikinci mülkünü alan danışan oranı.'
  },
  {
    value: '3 kıta',
    label: 'Concierge koordinasyonu',
    detail: 'İstanbul, Londra, Dubai ofisleriyle 24 saat dilimi kapsama.'
  }
];

const globalHighlights = [
  { icon: '🛥️', text: '30 metrelik süperyat charter ve heli-pad senkronizasyonu' },
  { icon: '🎨', text: 'Sanat danışmanlığı ve global müzayede temsilciliği' },
  { icon: '🌿', text: 'Sıfır karbonlu yaşam çözümleri ve sürdürülebilir yatırım teşvikleri' },
  { icon: '🏛️', text: 'UNESCO korumalı yapılarda restorasyon lisans desteği' }
];

const globalMetrics = [
  { value: '12', label: 'yaşam tarzı laboratuvarı' },
  { value: '58', label: 'özel üyelik anlaşması' },
  { value: '%99', label: 'portföy gizlilik skoru' }
];

const legacy = [
  {
    year: '2004',
    title: 'İstanbul kökenli lüks butik',
    description: 'İlk yalı satışımızla Boğaz hattında kişisel danışmanlık modelini başlattık.'
  },
  {
    year: '2012',
    title: 'Uluslararası concierge ağı',
    description: 'Londra ve Dubai ofisleriyle küresel yatırım koordinasyonunu aynı çatı altında topladık.'
  },
  {
    year: '2018',
    title: 'Dijital twin laboratuvarı',
    description: 'Metaverse uyumlu 4K turlarla mülk deneyimini fiziksel sınırların ötesine taşıdık.'
  },
  {
    year: '2024',
    title: 'Sürdürülebilirlik programı',
    description: 'LEED ve WELL sertifikalı projelerle yatırım portföyüne yeşil prim kazandırıyoruz.'
  }
];

const advisors = [
  {
    name: 'Selin Karaca',
    role: 'Mimari küratör · Eski Pritzker jürisi',
    bio: 'İmza projelerde uluslararası ödüllü mimarlarla yaratıcı süreçleri yönetiyor.'
  },
  {
    name: 'Arman Soydan',
    role: 'Varlık yöneticisi · CFA',
    bio: 'Global vergi planlama, gayrimenkul fonları ve aile ofisleriyle yatırım stratejilerini kuruyor.'
  },
  {
    name: 'Mira Batur',
    role: 'Yaşam tarzı tasarımcısı',
    bio: 'Gastronomi, wellness ve kültürel deneyimleri kişiye özel concierge paketlerine dönüştürüyor.'
  }
];

export default function Home() {
  const marqueeItems = [...marqueeBrands, ...marqueeBrands];

  return (
    <main>
      <Navbar />
      <Hero />

      <section className="marquee-section">
        <span className="section-eyebrow">Global iş birlikleri</span>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((brand, index) => (
              <span key={`${brand}-${index}`} className="marquee-item">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" style={{ marginTop: '4rem' }}>
        <span className="section-eyebrow">İmza Portföyümüz</span>
        <h2 className="section-title">Kapalı devre satışa çıkan koleksiyonluk mülkler</h2>
        <p className="section-subtitle">
          Sadece davetle açılan portföyümüzde, her mülk ayrı bir hikâye anlatır. Geliştirme sürecinin
          her adımını belgeleyerek şeffaflık sağlıyor, yatırımcılarımızı özel etkinliklerde ağırlıyoruz.
        </p>
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <span className="section-eyebrow">Butik yaklaşım</span>
        <h2 className="section-title">Yaşam Deneyimini Tasarlıyoruz</h2>
        <p className="section-subtitle">
          Emlak alım satımının ötesine geçerek, yaşam stilinizi tasarlıyor ve her aşamada butik bir ekip
          sunuyoruz. Mimari danışmanlıktan sanat kürasyonuna kadar uçtan uca hizmet veriyoruz.
        </p>
        <div className="experience-layout">
          <article className="card experience-overview">
            <h3 style={{ fontSize: '1.6rem' }}>Manifestomuz</h3>
            <p>
              Her yeni üyemize, yatırım profilini ve yaşam vizyonunu analiz eden veri destekli bir keşif
              oturumu düzenliyoruz. Elde ettiğimiz içgörüleri, seçkin partner ağımızla birlikte kişiye
              özel deneyim katmanlarına dönüştürüyoruz.
            </p>
            <div className="metrics-grid">
              {portfolioMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.7rem' }}>
                    {metric.label}
                  </span>
                  <p style={{ marginTop: '0.5rem' }}>{metric.detail}</p>
                </div>
              ))}
            </div>
          </article>
          <div className="experience-grid">
            {experiences.map((exp) => (
              <article key={exp.title} className="card">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="world">
        <span className="section-eyebrow">Küresel concierge atlası</span>
        <h2 className="section-title">İstanbul&apos;dan Rivieraya uzanan kusursuz koordinasyon</h2>
        <div className="grid world-grid">
          <article className="card">
            <h3 style={{ fontSize: '1.6rem' }}>Öne çıkan deneyimler</h3>
            <ul>
              {globalHighlights.map((item) => (
                <li key={item.text}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card" style={{ display: 'grid', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.6rem' }}>Global ağ sayıları</h3>
            <div className="metrics-grid">
              {globalMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.72rem' }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            <p>
              Concierge ekiplerimiz, kültür sanat takvimleri ve uluslararası etkinliklerle senkronize
              çalışarak yaşam stilinizi tek noktadan yönetir.
            </p>
          </article>
        </div>
      </section>

      <section id="services">
        <span className="section-eyebrow">Butik Hizmetlerimiz</span>
        <h2 className="section-title">Yatırım döngüsünü tek dokunuşla yönetin</h2>
        <div className="grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <span className="section-eyebrow">Mirasımız</span>
        <h2 className="section-title">Lüks gayrimenkulde 20 yılı aşkın kürasyon deneyimi</h2>
        <article className="card" style={{ padding: '2.5rem 2.5rem 2rem' }}>
          <ol className="timeline">
            {legacy.map((item) => (
              <li key={item.year} className="timeline-item">
                <time>{item.year}</time>
                <h3 style={{ fontSize: '1.3rem', margin: '0.4rem 0' }}>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section>
        <span className="section-eyebrow">Danışma Kurulumuz</span>
        <h2 className="section-title">Her mülk için multidisipliner uzmanlık</h2>
        <div className="grid advisor-grid">
          {advisors.map((advisor) => (
            <article key={advisor.name} className="card advisor-card">
              <strong>{advisor.name}</strong>
              <span>{advisor.role}</span>
              <p>{advisor.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <h2 className="section-title" style={{ color: 'white', marginBottom: '0.5rem' }}>
          Concierge ekibimizle özel bir keşif turu planlayın
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)' }}>
          İhtiyaçlarınızı birkaç soruda tanıyalım, size özel portföyümüzü video tur, helikopter keşfi veya
          gastronomi eşliğinde sunalım.
        </p>
        <div className="cta-actions">
          <a href="tel:+908508851000" className="btn btn-primary">
            <span role="img" aria-label="phone">
              📞
            </span>
            +90 850 885 10 00
          </a>
          <a href="mailto:concierge@luxestate.com" className="btn btn-outline" style={{ color: 'white' }}>
            <span role="img" aria-label="email">
              📧
            </span>
            concierge@luxestate.com
          </a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} LuxEstate. Her hakkı saklıdır. Kişiye özel gösterimlerimiz için randevu alın.
      </footer>
    </main>
  );
}
