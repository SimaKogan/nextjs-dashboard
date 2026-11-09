# Acme Dashboard

Invoices and customers dashboard: Next.js 14 (App Router), Tailwind CSS, Postgres (Neon / Vercel Postgres).

## Setup

```bash
npm install
cp .env.example .env      # then fill in POSTGRES_URL and AUTH_SECRET
npm run seed              # creates tables and demo data
npm run dev
```

- `POSTGRES_URL` — pooled Postgres connection string.
- `AUTH_SECRET` — session signing secret (`openssl rand -base64 32`).

Open http://localhost:3000 and log in with the demo account `user@nextmail.com` / `123456`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | development server |
| `npm run build` | production build |
| `npm start` | run the production build |
| `npm run seed` | create tables and insert demo data |
