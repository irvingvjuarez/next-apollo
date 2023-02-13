import { Layout } from '@/containers/Layout'
import { AuthContext } from '@/contexts/auth'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	const state = useFetchCurrentUser()

  return (
		<AuthContext.Provider value={state}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContext.Provider>
  )
}
