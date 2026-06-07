/**
 * Unsplash CDN görsel yardımcısı.
 * Tüm görseller graceful gradient fallback ile sarmalanır (bkz. Figure.astro),
 * böylece bir görsel yüklenmezse zarif bir gradyan kalır.
 */
export function ph(id: string, w = 1200, h?: number, q = 80): string {
  const base = `https://images.unsplash.com/photo-${id}`;
  const params = h
    ? `auto=format&fit=crop&w=${w}&h=${h}&q=${q}`
    : `auto=format&fit=crop&w=${w}&q=${q}`;
  return `${base}?${params}`;
}

/** Palet uyumlu gradyan fallback'ler (görsel yüklenmezse görünür). */
export const GRADIENTS = [
  'linear-gradient(135deg,#f6e9e3,#ddbcbc)',
  'linear-gradient(135deg,#efddd3,#c9a0a0)',
  'linear-gradient(135deg,#fbf1ea,#e2cda1)',
  'linear-gradient(135deg,#ddbcbc,#7a6151)',
  'linear-gradient(135deg,#f6e9e3,#b3848a)',
  'linear-gradient(135deg,#efddd3,#5a4234)',
];

/**
 * Kataloglanmış görseller — her anahtar, kullanıldığı bağlama göre
 * içeriği görsel olarak doğrulanmış bir fotoğrafa eşlenir.
 */
export const IMG = {
  heroPortrait: '1487412947147-5cebf100ffc2', // güzellik / makyaj yüz çekimi
  salonInterior: '1633681926022-84c23e8cb2d6', // modern salon iç mekânı

  // hizmetler
  hair: '1562322140-8baeececf3df', // kuaförde saç uygulaması
  hairColor: '1560869713-7d0a29430803', // uzun, parlak saç
  skin: '1570172619644-dfd03ed5d881', // cilt bakımı / yüz uygulaması
  makeup: '1632345031435-8727f6897d53', // makyaj uygulaması
  makeupLook: '1616683693504-3ea7e9ad6fec', // kırmızı ruj, güzellik portresi
  nails: '1604902396830-aca29e19b067', // pudra tonu manikür
  nailArt: '1610992015732-2449b76344bc', // pembe nail art
  nailHand: '1519014816548-bf5fe059798b', // kırmızı oje, eller

  // ekip portreleri (kadın portreleri)
  team1: '1494790108377-be9c29b29330',
  team2: '1438761681033-6461ffad8d80',
  team3: '1534528741775-53994a69daeb',
  team4: '1499952127939-9bbf5af6c51c',
  team5: '1521146764736-56c929d59c83',

  // öncesi/sonrası özneler
  ba1: '1595959183082-7b570b7e08e2', // uzun saç (balyaj)
  ba2: '1554151228-14d9def656e4', // yüz yakın çekim (cilt)
  ba3: '1531123897727-8f129e1688ce', // güzellik portresi (cilt)
  ba4: '1488426862026-3ee34a7d66df', // portre (gelin)

  // galeri / instagram
  g1: '1559599101-f09722fb4948', // stüdyodan grup karesi
  g2: '1607779097040-26e80aa78e66', // manikür uygulaması
  g3: '1522338242992-e1a54906a8da', // kozmetik ürünler
  g4: '1595959183082-7b570b7e08e2', // saç tonları
  g5: '1544005313-94ddf0286df2', // portre (gelin denemesi)
} as const;
