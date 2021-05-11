import type { Stay } from '$/types'

export type Methods = {
  get: {
    query: {
      id: number
    }
    resBody: Stay[]
  }
}
