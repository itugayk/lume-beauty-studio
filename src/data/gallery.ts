import { IMG } from '../lib/images';

export interface BeforeAfter {
  id: string;
  title: string;
  category: string;
  /** Tek görsel kullanılır; "öncesi" CSS filtresiyle mat gösterilir. */
  image: string;
}

/**
 * Öncesi/Sonrası demoları: aynı görsel iki katmanda kullanılır.
 * "Öncesi" katmanı CSS filtresiyle (mat/soğuk) işlenir, "Sonrası" tam ışıltıdır.
 */
export const BEFORE_AFTER: BeforeAfter[] = [
  { id: 'ba1', title: 'Doğal Balyaj Dönüşümü', category: 'Saç', image: IMG.ba1 },
  { id: 'ba2', title: 'Camsı Cilt Bakımı', category: 'Cilt', image: IMG.ba2 },
  { id: 'ba3', title: 'Işıltılı Gece Makyajı', category: 'Makyaj', image: IMG.makeupLook },
  { id: 'ba4', title: 'Soğuk Sarı Renk', category: 'Saç', image: IMG.hairColor },
  { id: 'ba5', title: 'Aydınlatıcı Cilt Ritüeli', category: 'Cilt', image: IMG.ba3 },
  { id: 'ba6', title: 'Gelin Hazırlığı', category: 'Makyaj', image: IMG.ba4 },
];

export interface GramItem {
  image: string;
  caption: string;
  likes: number;
}

export const INSTAGRAM: GramItem[] = [
  { image: IMG.nailArt, caption: 'Minimal nail art ✨', likes: 248 },
  { image: IMG.hair, caption: 'Yeni sezon kesimleri', likes: 512 },
  { image: IMG.makeup, caption: 'Davet hazırlığı 💄', likes: 389 },
  { image: IMG.g1, caption: 'Stüdyodan kareler', likes: 176 },
  { image: IMG.skin, caption: 'Hydrafacial sonrası ışıltı', likes: 421 },
  { image: IMG.g2, caption: 'Renk denemeleri', likes: 297 },
  { image: IMG.nailHand, caption: 'Kalıcı oje sezonu', likes: 333 },
  { image: IMG.g3, caption: 'Detaylarda gizli zarafet', likes: 205 },
  { image: IMG.salonInterior, caption: 'Lume atmosferi 🤍', likes: 468 },
  { image: IMG.g4, caption: 'Balyaj tonları', likes: 354 },
  { image: IMG.g5, caption: 'Gelin denemesi 👰', likes: 612 },
  { image: IMG.makeupLook, caption: 'Akşam makyajı', likes: 287 },
];
