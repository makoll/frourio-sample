import type { User } from '$/types'

export type Methods = {
  get: {
    query: {
      id: number
    }
    resBody: User | null
  }
}
