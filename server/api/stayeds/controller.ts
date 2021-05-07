import { defineController } from './$relay'

export default defineController(() => ({
  get: ({ user }) => ({ status: 200, body: [{ name: 'USA', count: 3 }] })
}))
