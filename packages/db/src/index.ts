const { PrismaClient } = require('@prisma/client');

declare global {
  // eslint-disable-next-line no-var
  var prisma: typeof PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export * from '@prisma/client'; 