import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { User } from '$prisma/client'

const prisma = new PrismaClient()

export const getUsers = depend(
  { prisma: prisma as { user: { findMany(): Promise<User[]> } } },
  async ({ prisma }, limit?: number) =>
    (await prisma.user.findMany()).slice(0, limit)
)
