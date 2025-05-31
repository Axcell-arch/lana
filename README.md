# Web Jualan Full Project

## Struktur

- `public/index.html` → Frontend form responsif pakai TailwindCSS
- `server.js` → Backend Node.js + Express API
- `.env.example` → Contoh environment variable (DATABASE_URL)
- `orders.sql` → SQL buat tabel orders di PostgreSQL
- `package.json` → Dependencies dan script start

## Cara pakai

1. Buat project PostgreSQL gratis di [Supabase](https://supabase.io)  
2. Buat tabel orders pakai `orders.sql` di Supabase SQL Editor  
3. Copy connection string DATABASE_URL dari Supabase  
4. Buat file `.env` di root project dan isi DATABASE_URL  

```
DATABASE_URL=postgres://user:password@host:5432/db
```

5. Deploy backend ke [Render](https://render.com) (free tier) dengan repo ini  
6. Ganti URL backend di `public/index.html` pada bagian fetch dengan URL render backendmu  
7. Deploy folder `public` ke Netlify atau hosting static site lain  

## Notes

- Jangan push `.env` ke GitHub karena berisi password  
- Pastikan backend bisa akses database Supabase dengan SSL enabled  
- Bisa dikembangkan sesuai kebutuhan
