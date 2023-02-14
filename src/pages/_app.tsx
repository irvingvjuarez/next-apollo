import { Layout } from '@/containers/Layout'
import { AuthContext } from '@/contexts/auth'
import { TOKEN_NAME } from '@/globals'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from "@apollo/client/link/context"
import type { AppProps } from 'next/app'

const apiLink = createHttpLink({
	uri: "https://api.escuelajs.co/graphql"
})

const authLink = setContext(async (_, { headers }) => {
	if (typeof window) {
		const token = sessionStorage.getItem(TOKEN_NAME)
		headers = {
			...headers,
			Authorization: `Bearer ${token}`
		}
	}

	return { headers }
})

const client = new ApolloClient({
	link: authLink.concat(apiLink),
	cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
	const state = useFetchCurrentUser()

  return (
		<ApolloProvider client={client}>
			<AuthContext.Provider value={state}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContext.Provider>
		</ApolloProvider>
  )
}
