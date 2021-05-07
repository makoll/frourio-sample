import Head from 'next/head'
// import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/User.module.css'
// import { apiClient } from '~/utils/apiClient'
import { useRouter } from 'next/router'
// import type { User } from '$prisma/client'
import dynamic from 'next/dynamic'
const MapView = dynamic(() => import('~/components/MapView'), { ssr: false })

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

type TStayedSummary = {
  name: string
  code: string
  count: number
  isLiving: boolean
  isLived: boolean
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
        <title>{`${user.name}'s stayed countries`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{`${user.name}'s stayed countries`}</h1>

        <div className={styles.contents}>
          <MapView />
          <Countries countries={countries} />
        </div>
      </main>
    </div>
  )
}

const Countries = ({ countries }: { countries: TStayedSummary[] }) => {
  return (
    <table className={styles.countries}>
      <thead>
        <tr className={styles.countriesHeader}>
          <th>Name</th>
          <th>Count</th>
          <th>Living</th>
          <th>Lived</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, i) => (
          <Country country={country} key={i} />
        ))}
      </tbody>
    </table>
  )
}

const Country = ({ country }: { country: TStayedSummary }) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.isLiving ? '-' : country.count}</td>
      <td>{country.isLiving ? '◯' : '-'}</td>
      <td>{!country.isLiving && country.isLived ? '◯' : '-'}</td>
    </tr>
  )
}
export default UserContainer
