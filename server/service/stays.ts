import { PrismaClient } from '@prisma/client'
import type { User } from '$prisma/client'

const prisma = new PrismaClient()

export const getStays = (id: User['id']) =>
  prisma.stay.findMany({
    where: { userId: id },
    include: {
      country: true
    }
  })
