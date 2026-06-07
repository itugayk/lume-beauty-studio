import { IMG } from '../lib/images';

export interface Member {
  name: string;
  role: string;
  image: string;
  tags: string[];
  bio: string;
  instagram?: string;
}

export const TEAM: Member[] = [
  {
    name: 'Defne Yıldız',
    role: 'Kurucu & Saç Tasarımcısı',
    image: IMG.team1,
    tags: ['Kesim', 'Balyaj', 'Renk Düzeltme'],
    bio: '15 yılı aşkın deneyimiyle Lume’nin kurucusu; yüz hatlarına özel kesim ve doğal renk geçişlerinde uzman.',
    instagram: '#',
  },
  {
    name: 'Selin Aydın',
    role: 'Cilt Bakım Uzmanı',
    image: IMG.team2,
    tags: ['Hydrafacial', 'Anti-Aging', 'Cilt Analizi'],
    bio: 'Dermokozmetik eğitimleriyle her cilt tipine özel protokoller hazırlar; camsı cilt etkisinin ustası.',
    instagram: '#',
  },
  {
    name: 'Ece Demir',
    role: 'Makyaj Sanatçısı',
    image: IMG.team3,
    tags: ['Gelin', 'Editoryal', 'Kirpik'],
    bio: 'Gelin ve davet makyajında imza tarzıyla tanınır; doğal ışıltıyı öne çıkaran tekniklerde uzman.',
    instagram: '#',
  },
  {
    name: 'Naz Korkmaz',
    role: 'Nail Artist',
    image: IMG.team4,
    tags: ['Nail Art', 'Kalıcı Oje', 'Protez'],
    bio: 'Minimalden gösterişliye uzanan el yapımı tasarımlar; hijyen ve detaylara verdiği önemle fark yaratır.',
    instagram: '#',
  },
  {
    name: 'Melis Arslan',
    role: 'Renk Uzmanı (Colorist)',
    image: IMG.team5,
    tags: ['Sarışın', 'Ton on Ton', 'Bakım'],
    bio: 'Soğuk ve sıcak sarı tonlarında ileri renk teknikleriyle saç sağlığını koruyarak ışıltı yakalar.',
    instagram: '#',
  },
];
