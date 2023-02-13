type Country = {
	name: string;
	capital: string;
	currency: string;
	code: string;
	emoji: string;
}

type User = {
	id: number;
	email: string;
	password: string;
	name: string;
	role: string;
	avatar: string;
	creationAt: string;
	updatedAt: string;
}

type Status =
	| "idle"
	| "success"
	| "error"