import { API_ROOT, TOKEN_NAME } from "@/globals";
import { useState } from "react"

type LoginProps = {
	email: string;
	password: string;
}

export const useLogin = () => {
	const login = async ({ email, password }: LoginProps) => {
		try {

			const res = await fetch(API_ROOT + "/auth/login", {
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				method: "POST",
				body: JSON.stringify({
					email, password
				})
			})
			if (!res.ok) throw new Error()

			const data = await res.json()

			window.sessionStorage.setItem(TOKEN_NAME, data.access_token)
			window.location.replace("/")
		} catch(err) {
			console.log(err)
		}
	}

	return {
		login
	}
}