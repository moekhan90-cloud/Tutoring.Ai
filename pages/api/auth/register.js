import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email, username, name, password } = req.body || {};
  if (!email || !username || !password) return res.status(400).json({ error: 'Missing fields' });

  const exists = await prisma.user.findFirst({ where: { OR: [{ email }, { username }] } });
  if (exists) return res.status(409).json({ error: 'Email or username already in use' });

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, username, name: name || username, passwordHash },
    select: { id: true },
  });
  return res.status(201).json({ ok: true, id: user.id });
}
