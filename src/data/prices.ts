export interface PriceRow {
  name: string;
  price: string;
  note?: string;
}

export interface PriceGroup {
  slug: string;
  icon: 'hair' | 'skin' | 'makeup' | 'nails';
  title: string;
  note?: string;
  rows: PriceRow[];
}

export const PRICES: PriceGroup[] = [
  {
    slug: 'sac',
    icon: 'hair',
    title: 'Saç',
    note: 'Saç uzunluğu ve yoğunluğuna göre fiyat değişiklik gösterebilir.',
    rows: [
      { name: 'Saç Kesimi & Fön', price: '₺850' },
      { name: 'Fön & Şekillendirme', price: '₺550' },
      { name: 'Komple Boya', price: '₺1.450', note: 'amonyaksız' },
      { name: 'Balyaj / Ombre', price: '₺2.900', note: 'tek seans' },
      { name: 'Keratin Bakımı', price: '₺3.200' },
      { name: 'Saç Botoksu', price: '₺1.800' },
    ],
  },
  {
    slug: 'cilt',
    icon: 'skin',
    title: 'Cilt Bakımı',
    rows: [
      { name: 'Hydrafacial', price: '₺1.900' },
      { name: 'Klasik Cilt Bakımı', price: '₺950' },
      { name: 'Anti-Aging Bakım', price: '₺1.600' },
      { name: 'Leke & Aydınlatma', price: '₺1.400' },
      { name: 'Dermapen', price: '₺1.750', note: 'seans' },
    ],
  },
  {
    slug: 'makyaj',
    icon: 'makeup',
    title: 'Makyaj',
    rows: [
      { name: 'Gündüz Makyajı', price: '₺900' },
      { name: 'Gece / Davet Makyajı', price: '₺1.300' },
      { name: 'Gelin Makyajı', price: '₺3.500', note: 'prova dahil' },
      { name: 'Kirpik & Kaş Tasarımı', price: '₺650' },
      { name: 'Birebir Makyaj Dersi', price: '₺1.500' },
    ],
  },
  {
    slug: 'tirnak',
    icon: 'nails',
    title: 'Tırnak',
    rows: [
      { name: 'Manikür', price: '₺450' },
      { name: 'Pedikür', price: '₺600' },
      { name: 'Kalıcı Oje', price: '₺700' },
      { name: 'Protez Tırnak', price: '₺1.200' },
      { name: 'Nail Art (adet)', price: '₺80', note: 'tırnak başı' },
    ],
  },
];
