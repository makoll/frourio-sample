import { Country } from '$prisma/client'

export type Methods = {
  get: {
    resBody: Country[]
  }
}
