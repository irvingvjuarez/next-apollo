import { API_ROOT, TOKEN_NAME } from "@/globals";
import { useState } from "react"

type LoginProps = {
	email: string;
	password: string;
}

export const useLogin = () => {
	const login = async ({ email, password }: LoginProps) => {
		const res = await fetch(API_ROOT + "/auth/login", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				email, password
			}),
			method: "POST"
		})
		if (!res.ok) return "error"
		const data = await res.json()

		window.sessionStorage.setItem(TOKEN_NAME, data.access_token)
		window.location.replace("/")
	}

	return {
		login
	}
}