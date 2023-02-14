import { TOKEN_NAME } from "@/globals"
import { useFetchCurrentUser } from "@/hooks/useFetchCurrentUser"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Profile = () => {
	const { user, status } = useFetchCurrentUser()

	const router = useRouter()
	const handleLogout = () => {
		window.sessionStorage.removeItem(TOKEN_NAME)
		window.location.replace("/")
	}

	useEffect(() => {
		if (status === "error") {
			router.push("/")
		}
	}, [status])

	return (
		<>
			<Head>
				<title>{status === "success" ? user?.name : "Loading..."}</title>
			</Head>

			{status === "success" && (
				<>
					<Link href="/products/add">
						Add a new Product
					</Link>
					<br />
					<br />
					<button onClick={handleLogout}>
						Logout
					</button>
				</>
			)}
		</>
	)
}

export default Profile