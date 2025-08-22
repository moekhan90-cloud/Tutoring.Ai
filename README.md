# Tutoring AI (Next.js + OpenAI)

A minimal tutoring chatbot you can deploy on Vercel.

## Local setup

1. Install deps:
   ```bash
   npm install
   ```
2. Create a `.env.local` file:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. Run dev:
   ```bash
   npm run dev
   ```
4. Visit http://localhost:3000

## Deploy on Vercel

- Create a new project from this repo.
- In **Settings → Environment Variables**, add:
  - `OPENAI_API_KEY` = your key
- Redeploy.

## Files

- `pages/index.js` — simple chat UI.
- `pages/api/chat.js` — serverless function that calls OpenAI.
