import { Layout } from '@/containers/Layout'
import { AuthContext } from '@/contexts/auth'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'

const client = new ApolloClient({
	uri: "https://api.escuelajs.co/graphql",
	cache: new InMemoryCache()
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
