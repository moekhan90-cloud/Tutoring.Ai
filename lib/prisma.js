// lib/prisma.js
import { PrismaClient } from '@prisma/client';

let prisma;
if (process.env.DATABASE_URL) {
  // normal client
  const g = globalThis;
  prisma = g.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== 'production') g.prisma = prisma;
} else {
  // stub so imports don't crash when DB env is missing
  prisma = {
    user: { findUnique: async () => null, findFirst: async () => null },
    attempt: { findMany: async () => [], create: async () => ({}) },
  };
}

export { prisma };
