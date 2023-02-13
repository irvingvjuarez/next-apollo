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
					<Link href="/profile">
						<span>{user.name}</span>
					</Link>
				)}
			</nav>
		</header>
	)
}