import Head from 'next/head'
// import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/User.module.css'
// import { apiClient } from '~/utils/apiClient'
import { useRouter } from 'next/router'
// import type { User } from '$prisma/client'

const user = { name: 'hirose' }
type TUser = { name: string }
const UserContainer = () => {
  const router = useRouter()
  const queryUserId = router.query.id as string
  console.log(10, queryUserId)

  // const { data: users, error } = useAspidaSWR(apiClient.users)
  // if (error) return <div>failed to load</div>
  // if (!users) return <div>loading...</div>

  return <UserPresentation user={user} />
}

const UserPresentation = ({ user }: { user: TUser }) => {
  const countries = [
    { name: 'Japan', code: 'JP', count: 1, isLiving: true, isLived: true },
    { name: 'USA', code: 'US', count: 3, isLiving: false, isLived: false },
    { name: 'Taiwan', code: 'TW', count: 4, isLiving: false, isLived: true }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>User</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>User</h1>

        <div className={styles.contents}>
          <div>Name: {user.name}</div>
          <div>
            Detail:
            <ul className={styles.countries}>
              {countries.map((country) => (
                <div className={styles.countryInfo} key={country.code}>
                  <div>Country name: {country.name} </div>
                  {country.isLiving && <div>在住</div>}
                  {!country.isLiving && (
                    <div>Visit count: {country.count}回</div>
                  )}
                  {!country.isLiving && country.isLived && (
                    <div>滞在歴あり</div>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div>Map: </div>
        </div>
      </main>
    </div>
  )
}

export default UserContainer
