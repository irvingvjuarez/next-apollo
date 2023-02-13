import { Header } from "@/components/Header"

type LayoutProps = {
	children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}