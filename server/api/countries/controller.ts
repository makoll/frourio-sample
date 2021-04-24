import { defineController } from './$relay'
import { getCountries } from '$/service/countries'

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await getCountries()
  })
}))
