import { getStays } from '$/service/stays'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ query }) => {
    const stays = await getStays(query.id)
    const body = stays.map((ss) => {
      return { name: ss.country?.name ?? '', count: ss.count }
    })
    return { status: 200, body }
  }
}))
