import { gql } from "@apollo/client"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { client } from "@/services/client.apollo"
import { GET_SINGLE_COUNTRY } from "@/services/queries.graphql"
import { GetCountryDocument, Country, GetCountriesDocument } from "@/services/graphql"
import Head from "next/head"

export const getStaticPaths = async () => {
	const { data } = await client.query({
    query: GetCountriesDocument
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
	const code = params?.id as string

	const { data } = await client.query({
		query: GetCountryDocument,
		variables: { code }
	})

	return {
		props: { country: data.country as Country }
	}
}

const CountryDetail: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ country }) => {
	return (
		<>
			<Head>
				<title>{country?.name} | Countries</title>
			</Head>

			<h2>Country: {country?.name}</h2>
		</>
	)
}

export default CountryDetail