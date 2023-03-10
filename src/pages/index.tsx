import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { client } from '@/services/client.apollo'
import { gql } from "@apollo/client"
import Link from 'next/link'
import { GET_ALL_COUNTRIES } from '@/services/queries.graphql'
import { GetCountriesDocument } from '@/services/graphql'

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  countries: Country[]
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GetCountriesDocument
  })

  return {
    props: {
      countries: data.countries.slice(0, 10)
    }
  }
}

const Home: React.FC<HomeProps> = ({ countries }) => {
  return (
    <>
      <Head>
        <title>Countries info app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {countries?.map(country => (
            <div key={country.code} className={styles.card}>
              <h3>
								<Link href={`/countries/${country.code}`}>
									{country.name}
								</Link>
							</h3>
              <p>
                {country.code} - {country.emoji}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home