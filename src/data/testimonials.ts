export interface Testimonial {
  name: string;
  service: string;
  rating: number; // 1-5
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aslı K.',
    service: 'Balyaj',
    rating: 5,
    text: 'Balyajımı yıllardır bu kadar doğal yaptıramamıştım. Defne Hanım tam istediğim tonu yakaladı, saçlarım hiç yıpranmadı.',
  },
  {
    name: 'Merve T.',
    service: 'Hydrafacial',
    rating: 5,
    text: 'Tek seansta cildim resmen ışıldadı. Mekânın atmosferi de bambaşka, kendinizi şımartılmış hissediyorsunuz.',
  },
  {
    name: 'Zeynep A.',
    service: 'Gelin Makyajı',
    rating: 5,
    text: 'Düğünümde makyajım gece boyunca hiç bozulmadı. Ece Hanım prova sürecinde her detayı dinledi. Çok teşekkürler!',
  },
  {
    name: 'Buket S.',
    service: 'Kalıcı Oje',
    rating: 5,
    text: 'Üç hafta geçti, hâlâ ilk günkü gibi parlak. Hijyene verdikleri önem içimi rahatlattı.',
  },
  {
    name: 'Elif D.',
    service: 'Saç Kesimi',
    rating: 4,
    text: 'Yüzüme çok yakışan bir kesim oldu. Randevu saatine de tam uyuldu, beklemedim bile.',
  },
  {
    name: 'Gizem Y.',
    service: 'Anti-Aging Bakım',
    rating: 5,
    text: 'Cildimdeki sıkılaşmayı birkaç seansta gözle görür şekilde fark ettim. Selin Hanım işinin gerçekten ehli.',
  },
  {
    name: 'Pınar M.',
    service: 'Nail Art',
    rating: 5,
    text: 'Naz’ın tasarladığı tırnaklar herkesin dikkatini çekti. Hayal ettiğimden çok daha güzel oldu.',
  },
  {
    name: 'Ceren B.',
    service: 'Keratin Bakımı',
    rating: 5,
    text: 'Saçlarım artık çok daha kolay şekilleniyor ve ipek gibi. Kesinlikle tavsiye ediyorum.',
  },
];
