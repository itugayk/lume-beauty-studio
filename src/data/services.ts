import { IMG } from '../lib/images';

export interface ServiceItem {
  name: string;
  desc: string;
  duration?: string;
}

export interface ServiceCategory {
  slug: string;
  icon: 'hair' | 'skin' | 'makeup' | 'nails';
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: string; // gradient
  items: ServiceItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    slug: 'sac',
    icon: 'hair',
    name: 'Saç',
    tagline: 'Kesim · Renk · Bakım',
    description:
      'Yüz hatlarına özel kesimden ışıltılı balyaja, saç sağlığını koruyan bakımlardan keratin dolgunluğuna kadar uzman saç tasarımı.',
    image: IMG.hair,
    accent: 'linear-gradient(135deg,#f6e9e3,#c9a0a0)',
    items: [
      { name: 'Saç Kesimi & Şekillendirme', desc: 'Yüz analizine göre kişiye özel kesim ve fön.', duration: '45 dk' },
      { name: 'Balyaj & Ombre', desc: 'Doğal geçişli, ışıltılı renk teknikleri.', duration: '150 dk' },
      { name: 'Komple Boya', desc: 'Amonyaksız, bakım odaklı renklendirme.', duration: '90 dk' },
      { name: 'Keratin Bakımı', desc: 'Pürüzsüzlük ve uzun süreli parlaklık.', duration: '120 dk' },
      { name: 'Saç Botoksu', desc: 'Yıpranmış saçlar için yoğun onarım.', duration: '90 dk' },
    ],
  },
  {
    slug: 'cilt-bakimi',
    icon: 'skin',
    name: 'Cilt Bakımı',
    tagline: 'Hydrafacial · Anti-aging',
    description:
      'Cilt tipine özel analizle başlayan, derinlemesine temizlik, nemlendirme ve yenileyici bakımlarla camsı bir ışıltı.',
    image: IMG.skin,
    accent: 'linear-gradient(135deg,#fbf1ea,#e2cda1)',
    items: [
      { name: 'Hydrafacial', desc: 'Derin temizlik + nemlendirme, anında ışıltı.', duration: '60 dk' },
      { name: 'Klasik Cilt Bakımı', desc: 'Temizlik, peeling ve maske ritüeli.', duration: '50 dk' },
      { name: 'Anti-Aging Bakım', desc: 'Sıkılaştırıcı, kırışıklık karşıtı protokol.', duration: '70 dk' },
      { name: 'Leke & Aydınlatma', desc: 'Ton eşitleyici, leke karşıtı bakım.', duration: '60 dk' },
      { name: 'Dermapen', desc: 'Mikro iğneleme ile cilt yenileme.', duration: '60 dk' },
    ],
  },
  {
    slug: 'makyaj',
    icon: 'makeup',
    name: 'Makyaj',
    tagline: 'Gündüz · Gece · Gelin',
    description:
      'Doğal güzelliği öne çıkaran gündüz makyajından, özel günlere ve gelinliğe uzanan uzun süre kalıcı profesyonel uygulamalar.',
    image: IMG.makeup,
    accent: 'linear-gradient(135deg,#f6e9e3,#b3848a)',
    items: [
      { name: 'Gündüz Makyajı', desc: 'Doğal, taze ve aydınlık bir görünüm.', duration: '40 dk' },
      { name: 'Gece / Davet Makyajı', desc: 'Yoğun, etkileyici, kalıcı uygulama.', duration: '60 dk' },
      { name: 'Gelin Makyajı', desc: 'Prova dahil, güne özel kusursuz makyaj.', duration: '120 dk' },
      { name: 'Kirpik & Kaş Tasarımı', desc: 'İpek kirpik ve kaş şekillendirme.', duration: '45 dk' },
      { name: 'Makyaj Dersi', desc: 'Birebir kişisel makyaj eğitimi.', duration: '90 dk' },
    ],
  },
  {
    slug: 'tirnak',
    icon: 'nails',
    name: 'Tırnak',
    tagline: 'Manikür · Kalıcı Oje · Nail Art',
    description:
      'Hijyenik ortamda profesyonel el ve ayak bakımı, kalıcı oje, protez tırnak ve özel tasarım nail art uygulamaları.',
    image: IMG.nails,
    accent: 'linear-gradient(135deg,#efddd3,#c9a0a0)',
    items: [
      { name: 'Manikür', desc: 'Bakım, şekillendirme ve nemlendirme.', duration: '40 dk' },
      { name: 'Pedikür', desc: 'Rahatlatıcı ayak bakımı ritüeli.', duration: '50 dk' },
      { name: 'Kalıcı Oje', desc: '3 haftaya kadar pürüzsüz parlaklık.', duration: '50 dk' },
      { name: 'Protez Tırnak', desc: 'Doğal görünümlü uzatma uygulaması.', duration: '90 dk' },
      { name: 'Nail Art', desc: 'Kişiye özel el yapımı tasarımlar.', duration: '60 dk' },
    ],
  },
];
