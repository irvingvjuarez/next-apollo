import { AuthContext } from "@/contexts/auth"
import Link from "next/link"
import { useContext } from "react"

export const Header = () => {
	const { user } = useContext(AuthContext)

	return (
		<header>
			<nav>
				{user === null ? (
						<Link href="/me">
							Login
						</Link>
				) : (
					<span>{user.name}</span>
				)}
			</nav>
		</header>
	)
}