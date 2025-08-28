import { getToken } from 'next-auth/jwt';
import { prisma } from '../../../lib/prisma';

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const { age, subject, score, total, avgTimeSec, results } = req.body || {};
  if (![age, subject, score, total].every(v => v !== undefined)) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const attempt = await prisma.attempt.create({
    data: {
      userId: token.sub,
      age, subject, score, total, avgTimeSec: avgTimeSec ?? 0,
      questionResults: {
        create: (results || []).map(r => ({
          questionId: r.id,
          topic: r.topic || null,
          correct: !!r.correct,
          timeSec: r.time || 0
        }))
      }
    },
    include: { questionResults: true }
  });

  return res.status(201).json({ ok: true, id: attempt.id });
}
