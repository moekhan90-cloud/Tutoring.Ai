// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

// 🔑 Export the config so pages like /dashboard can import it
export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(creds) {
        const { identifier, password } = creds;
        const user = await prisma.user.findFirst({
          where: { OR: [{ email: identifier }, { username: identifier }] }
        });
        if (!user) return null;
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;
        return { id: user.id, name: user.name || user.username, email: user.email };
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
