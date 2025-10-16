export const properties = [
  {
    slug: 'bogaz-yalisi-nisantasi-atelier',
    title: 'Boğaz Yalısı Atelier',
    tagline: 'Mimaride Haute Couture',
    description:
      'Nişantaşı ve Boğaz silüetini bir araya getiren, özel tasarım atriuma sahip üç katlı yalı.',
    price: '€4.6M',
    location: 'Nişantaşı · İstanbul',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80'
    ],
    features: ['980 m²', '5+2', 'Özel iskele', 'Akıllı ev'],
    highlights: [
      'Üç kat boyunca uzanan cam atrium ve heykelsi merdiven',
      'Koleksiyonluk sanat eserleri için iklim kontrollü galeri',
      'Her katta panoramik Boğaz manzarası ve geniş teraslar',
      'Spa, hamam ve fitness katında gün ışığı alan wellness alanı'
    ]
  },
  {
    slug: 'sky-lounge-levent-residence',
    title: 'Sky Lounge Levent',
    tagline: 'Penthouse Collection',
    description:
      'Levent skyline üzerinde konumlanan, 270° panoramik İstanbul manzaralı penthouse rezidans.',
    price: '€3.2M',
    location: 'Levent · İstanbul',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80&sat=-100',
    gallery: [
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1600&q=80'
    ],
    features: ['620 m²', '4+1', 'Özel lift', 'Sky spa'],
    highlights: [
      'Yer seviyesinden rezidansa uzanan özel asansör ve lobby',
      'Sky spa katında açık hava hamamı ve yıldız izleme terası',
      'Şef mutfak, şarap kileri ve miksoloji laboratuvarı',
      'Akustik izolasyonlu ev sineması ve performans salonu'
    ]
  },
  {
    slug: 'bodrum-sand-and-stone',
    title: 'Sand & Stone Bodrum Retreat',
    tagline: 'Sürdürülebilir Lüks',
    description:
      'Gölköy yamacında konumlanan, yerel taş mimarisi ve LEED Gold sertifikasına sahip villa.',
    price: '€2.8M',
    location: 'Gölköy · Bodrum',
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512914890250-353c97f01689?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1568600891621-2b9a9c91f1aa?auto=format&fit=crop&w=1600&q=80'
    ],
    features: ['450 m²', '4+2', 'Infinity havuz', 'Enerji yönetimi'],
    highlights: [
      'Güneş panelleriyle %80 enerji verimliliği sağlayan sistem',
      'Akdeniz peyzajlı zen bahçeleri ve açık hava sineması',
      'Misafir pavilyonu, yoga deck ve biyofilik tasarım detayları',
      'Özel plaj kulübü üyeliği ve sürüş hizmeti'
    ]
  }
];

export function getProperty(slug) {
  return properties.find((property) => property.slug === slug);
}
