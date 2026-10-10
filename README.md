# Nexora

Professional company website for an AI & blockchain studio.

**Stack:** Next.js (App Router) + Express API  
**Team:** 50 specialists  
**Focus:** Blockchain & tokens · AI + on-chain products · Smart contracts

## Quick start

```bash
npm install
npm install --prefix backend
npm install --prefix frontend

npm run dev
```

- Web: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:4000](http://localhost:4000)

## Project structure

```
backend/     Express API (content + contact)
frontend/    Next.js company site
```

## Environment

Copy examples and adjust as needed:

- `backend/.env` — `PORT`, `FRONTEND_ORIGIN`
- `frontend/.env.local` — `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/company` | Company profile |
| GET | `/api/solutions` | Services |
| GET | `/api/products` | Product explainers |
| GET | `/api/differentiators` | Why Nexora |
| GET | `/api/insights` | Insights |
| GET | `/api/careers` | Careers content |
| POST | `/api/contact` | Contact form |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | API + web in development |
| `npm run build` | Production frontend build |
| `npm start` | Run production API + web |
| `npm run lint` | Lint frontend |
