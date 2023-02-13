import Head from "next/head"

const Me = () => {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<section>
				<form>
					<div>
						<label htmlFor="username">User Name</label>
						<input type="text" id="username" />
					</div>

					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button>Submit</button>
				</form>
			</section>
		</>
	)
}

export default Me