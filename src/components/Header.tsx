import Link from "next/link"

export const Header = () => {
	return (
		<header>
			<nav>
				<Link href="/me">
					Login
				</Link>
			</nav>
		</header>
	)
}