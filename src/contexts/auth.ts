import { createContext } from "react";
type AuthContextType = {
	user: User | null;
	status: Status;
}

const defaultAuthContext: AuthContextType = {
	user: null,
	status: "idle"
}

export const AuthContext = createContext(defaultAuthContext)