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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="featured" style={{ marginTop: '4rem' }}>
        <h2 className="section-title">İmza Portföyümüz</h2>
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
        <h2 className="section-title">Yaşam Deneyimini Tasarlıyoruz</h2>
        <p className="section-subtitle">
          Emlak alım satımının ötesine geçerek, yaşam stilinizi tasarlıyor ve her aşamada butik bir ekip
          sunuyoruz. Mimari danışmanlıktan sanat kürasyonuna kadar uçtan uca hizmet veriyoruz.
        </p>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <article key={exp.title} className="card">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services">
        <h2 className="section-title">Butik Hizmetlerimiz</h2>
        <div className="grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
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
