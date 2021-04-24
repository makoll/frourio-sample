import Head from 'next/head'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Countries.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'

const Countries = () => {
  const { data: countries, error } = useAspidaSWR(apiClient.countries)
  if (error) return <div>failed to load</div>
  if (!countries) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>countries</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <UserBanner />

        <h1 className={styles.title}>Countries</h1>

        <div>
          <ul className={styles.countries}>
            {countries.map((country) => (
              <li key={country.id}>{country.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Countries
