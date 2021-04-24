import Head from 'next/head'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Countries.module.css'
import { apiClient } from '~/utils/apiClient'

const Countries = () => {
  const { data: users, error } = useAspidaSWR(apiClient.users)
  if (error) return <div>failed to load</div>
  if (!users) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Users</h1>

        <div>
          <ul className={styles.countries}>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Countries
