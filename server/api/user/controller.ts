import { getUser } from '$/service/user'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ query }) => {
    const user = await getUser(query.id)
    return { status: 200, body: user }
  }
}))
