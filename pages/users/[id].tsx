import Head from 'next/head'
// import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/User.module.css'
// import { apiClient } from '~/utils/apiClient'
import { useRouter } from 'next/router'
// import type { User } from '$prisma/client'
import dynamic from 'next/dynamic'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { Stayed } from '~/server/types'
const MapView = dynamic(() => import('~/components/MapView'), { ssr: false })

const user = { name: 'hirose' }
type TUser = { name: string }
const UserContainer = () => {
  const { data: stayeds } = useAspidaSWR(apiClient.stayeds)

  const router = useRouter()
  const queryUserId = router.query.id as string
  console.log(10, queryUserId)

  // if (error) return <div>failed to load</div>
  // if (!users) return <div>loading...</div>

  return <UserPresentation user={user} stayeds={stayeds ?? []} />
}

const UserPresentation = ({
  user,
  stayeds
}: {
  user: TUser
  stayeds: Stayed[]
}) => {
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
          <Countries stayeds={stayeds} />
        </div>
      </main>
    </div>
  )
}

const Countries = ({ stayeds }: { stayeds: Stayed[] }) => {
  return (
    <table className={styles.countries}>
      <thead>
        <tr className={styles.countriesHeader}>
          <th>Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {stayeds.map((stayed, i) => (
          <Country stayed={stayed} key={i} />
        ))}
      </tbody>
    </table>
  )
}

const Country = ({ stayed }: { stayed: Stayed }) => {
  return (
    <tr>
      <td>{stayed.name}</td>
      <td>{stayed.count}</td>
    </tr>
  )
}
export default UserContainer
