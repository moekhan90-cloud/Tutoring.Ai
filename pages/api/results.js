export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { userId, subject, summary } = req.body;
  // TODO: save to DB (Supabase/Prisma). For now, just echo.
  return res.status(200).json({ ok: true });
}
