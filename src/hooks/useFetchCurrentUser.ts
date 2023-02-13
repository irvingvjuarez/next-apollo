import { API_ROOT, TOKEN_NAME } from "@/globals"
import { useEffect, useState } from "react"

export const useFetchCurrentUser = () => {
	const [user, setUser] = useState<User | null>(null)
	const [status, setStatus] = useState<Status>("idle")
	const validate = async () => {
		const token = window.sessionStorage.getItem(TOKEN_NAME)
		if (!token) {
			setStatus("error")
		} else {
			const res = await fetch(API_ROOT + "/auth/profile", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				}
			})
			const data = await res.json()
			setUser(data)
			setStatus("success")
		}
	}

	useEffect(() => {
		validate()
	}, [])

	return {
		user,
		status
	}
}