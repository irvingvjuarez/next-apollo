import { API_ROOT } from "@/globals"
import { useEffect, useState } from "react"

export const useFetchCurrentUser = () => {
	const [user, setUser] = useState<User | null>(null)
	const [status, setStatus] = useState<Status>("idle")
	const validate = async () => {
		const token = window.sessionStorage.getItem("_token_")
		if (!token) {
			setStatus("success")
		} else {
			const res = await fetch(API_ROOT + "/auth/login", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				}
			})
			const data = await res.json()
			setUser(data)
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