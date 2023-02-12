import { gql } from "@apollo/client"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { client } from "@/services/client.apollo"
import { GET_SINGLE_COUNTRY } from "@/services/queries.graphql"

export const getStaticPaths = async () => {
	const { data } = await client.query({
    query: gql`
      query {
        countries {
          name
          code
          capital
          currency
          emoji
        }
      }
    `
  })

	const countries = (data.countries as Country[]).slice(0, 10).map(country => ({
		params: {
			id: country.code
		}
	}))

	return {
		paths: countries,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps<{ country: Country }> = async ({ params }) => {
	const code = params?.id

	const { data } = await client.query({
		query: GET_SINGLE_COUNTRY,
		variables: { code }
	})

	return {
		props: { country: data.country }
	}
}

const CountryDetail: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ country }) => {
	return (
		<h2>Country: {country?.name}</h2>
	)
}

export default CountryDetail