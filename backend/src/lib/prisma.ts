import { PrismaClient } from '@prisma/client';
import envConfig from '../config/envConfig';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClient = globalThis.prisma || new PrismaClient();

if (envConfig.node_env !== 'production') globalThis.prisma = prismaClient;

export default prismaClient;
