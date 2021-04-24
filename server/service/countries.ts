import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { Country } from '$prisma/client'

const prisma = new PrismaClient()

export const getCountries = depend(
  { prisma: prisma as { country: { findMany(): Promise<Country[]> } } },
  async ({ prisma }, limit?: number) =>
    (await prisma.country.findMany()).slice(0, limit)
)
