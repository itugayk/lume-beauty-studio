# Lume Beauty Studio

Premium **güzellik & bakım salonu** demo sitesi — saç, cilt bakımı, makyaj ve tırnak.
Astro + Tailwind CSS v4 + GSAP ile geliştirilmiş, statik (SSG) bir showcase.

> Canlı demo hedefi: `guzellik.demo.dijifa.com`

---

## ✨ Öne çıkanlar

- **Tasarım:** pudra/nude + sıcak beyaz + gül kurusu + koyu kahve paleti, Fraunces/Marcellus serif başlıklar + Poppins gövde, yumuşak gradyanlar ve grain dokusu.
- **Animasyon:** GSAP ScrollTrigger ile scroll-reveal, Lenis ile pürüzsüz kaydırma, hero ışık-partikül `<canvas>` efekti, hover mikro-etkileşimler.
- **Öncesi/Sonrası:** sürükle-karşılaştır slider (pointer + klavye + dokunmatik).
- **Hizmet kartları:** hover'da açılan detay + ikon animasyonu (mobilde dokunarak).
- **Yorum carousel:** çift yönlü otomatik kayan marquee + yıldız puanları.
- **Fiyat listesi:** kategorili akordeon (tek seferde tek açık).
- **Online randevu:** 4 adımlı sihirbaz (hizmet → uzman → tarih/saat → bilgi), canlı özet, demo validasyon ve **WhatsApp**'a iletim.
- **WhatsApp randevu butonu** (sabit, animasyonlu).
- Tamamen **responsive**, `prefers-reduced-motion` desteği, SEO/OG meta, erişilebilir mobil menü.

## 📄 Sayfalar

| Yol | Açıklama |
|-----|----------|
| `/` | Ana sayfa (hero, hizmetler, öncesi/sonrası, ekip, yorumlar, instagram, CTA) |
| `/hizmetler` | Hizmet detayları (Saç / Cilt / Makyaj / Tırnak) |
| `/ekip` | Uzman ekip + değerler |
| `/galeri` | Filtrelenebilir öncesi/sonrası galerisi + instagram |
| `/fiyatlar` | Kategorili fiyat akordeonu |
| `/randevu` | Çok adımlı online randevu formu |
| `/iletisim` | İletişim kartları, mesaj formu, harita |

## 🛠️ Teknoloji

- [Astro 5](https://astro.build) — statik site üretimi
- [Tailwind CSS v4](https://tailwindcss.com) — `@tailwindcss/vite` eklentisi
- [GSAP + ScrollTrigger](https://gsap.com) — animasyon
- [Lenis](https://lenis.darkroom.engineering) — pürüzsüz kaydırma

## 🚀 Geliştirme

```bash
npm install      # bağımlılıklar
npm run dev      # http://localhost:4321
npm run build    # ./dist içine statik çıktı
npm run preview  # build çıktısını önizle
```

## 🐳 Docker ile dağıtım

Çok aşamalı `Dockerfile` (Node ile build → nginx ile servis):

```bash
docker build -t lume-beauty .
docker run -p 8080:80 lume-beauty
# http://localhost:8080
```

`nginx.conf`; gzip, statik varlık önballeği (`/_astro` için 1 yıl, immutable),
güvenlik başlıkları ve `try_files` ile temiz URL yönlendirmesini içerir.
Sunucu adı `guzellik.demo.dijifa.com` olarak ayarlanmıştır.

## 📁 Yapı

```
src/
├─ layouts/Layout.astro        # <head>, fontlar, GSAP+Lenis motoru
├─ components/                 # Hero, ServiceCards, BeforeAfter, Team,
│                              # Testimonials, InstagramGrid, CTABand,
│                              # PriceAccordion, AppointmentForm, Header, Footer …
├─ pages/                      # index + 6 sayfa + 404
├─ data/                       # site, services, team, testimonials, prices, gallery
└─ lib/images.ts               # görsel kataloğu + Unsplash yardımcısı
```

## ⚙️ İçerik / özelleştirme

- **Marka, iletişim, sosyal, WhatsApp numarası:** `src/data/site.ts`
  (WhatsApp için `whatsapp` alanını `90XXXXXXXXXX` formatında girin).
- **Hizmetler / fiyatlar / ekip / yorumlar / galeri:** `src/data/*.ts`
- **Görseller:** `src/lib/images.ts` — şu an Unsplash CDN kullanılır; her görsel,
  yüklenemezse palet uyumlu bir gradyana zarifçe geri düşer (`Figure.astro`).
  Kendi fotoğraflarınızı `public/` altına koyup ID'leri tam URL ile değiştirebilirsiniz.

## 📝 Notlar

- Randevu ve iletişim formları **demodur**; gerçek bir kayıt/gönderim yapmaz,
  randevu talebi WhatsApp mesajına dönüştürülür.
- Harita, anahtarsız Google Maps embed kullanır.

---

© 2026 Lume Beauty Studio — demo amaçlı tasarım.
