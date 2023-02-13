import { useLogin } from "@/hooks/useLogin"
import Head from "next/head"
import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, useRef } from "react"

const Me = () => {
	const { login } = useLogin()
	const emailRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		try {
			login({
				email: emailRef.current?.value as string,
				password: passwordRef.current?.value as string
			})
		} catch(err) {
			console.log("Error ocurred")
		}
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<section>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">Email</label>
						<input type="text" id="username" ref={emailRef} required />
					</div>

					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" ref={passwordRef} required />
					</div>
					<button>Submit</button>
				</form>
			</section>
		</>
	)
}

export default Me