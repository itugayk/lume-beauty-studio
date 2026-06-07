export const SITE = {
  name: 'Lume Beauty Studio',
  shortName: 'Lume',
  tagline: 'Işıltını ortaya çıkaran bakım sanatı',
  description:
    'Lume Beauty Studio — şehir merkezinde saç, cilt bakımı, makyaj ve tırnak alanında premium hizmet sunan güzellik ve bakım stüdyosu.',
  domain: 'guzellik.demo.dijifa.com',
  url: 'https://guzellik.demo.dijifa.com',

  phoneDisplay: '+90 212 000 00 00',
  phone: '+902120000000',
  whatsapp: '905555555555', // wa.me formatı (ülke kodu + numara, + işareti olmadan)
  email: 'merhaba@lumebeauty.com',

  address: {
    line: 'Teşvikiye Cd. No:42, Şişli',
    city: 'İstanbul',
    full: 'Teşvikiye Cd. No:42, Şişli / İstanbul',
  },

  hours: [
    { day: 'Pazartesi – Cuma', time: '10:00 – 20:00' },
    { day: 'Cumartesi', time: '10:00 – 19:00' },
    { day: 'Pazar', time: '12:00 – 18:00' },
  ],

  socials: {
    instagram: 'https://instagram.com',
    pinterest: 'https://pinterest.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
  },
} as const;

export const NAV = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Ekip', href: '/ekip' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Fiyat Listesi', href: '/fiyatlar' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

/** WhatsApp randevu derin bağlantısı oluşturur. */
export function waLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? `Merhaba ${SITE.name}, randevu almak istiyorum.`,
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
