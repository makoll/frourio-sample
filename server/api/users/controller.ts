import { defineController } from './$relay'
import { getUsers } from '$/service/users'

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await getUsers()
  })
}))
