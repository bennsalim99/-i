import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.slug}`} className="card property-card">
      <div className="cover">
        <Image src={property.image} alt={property.title} width={520} height={390} />
        <div className="price-tag">{property.price}</div>
      </div>
      <div className="badge" style={{ background: 'rgba(200, 155, 60, 0.18)' }}>
        {property.tagline}
      </div>
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <ul>
        {property.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </Link>
  );
}
