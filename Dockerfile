# ─── Aşama 1: Build ───────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# bağımlılıkları kur (önbellek dostu)
COPY package.json package-lock.json* ./
RUN npm install

# kaynakları kopyala ve statik siteyi üret
COPY . .
RUN npm run build

# ─── Aşama 2: Serve (nginx) ──────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# özel nginx yapılandırması
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# üretilen statik dosyalar
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# nginx:alpine BusyBox wget kullanır — GNU'ya özgü --spider/--no-verbose desteklenmez
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
