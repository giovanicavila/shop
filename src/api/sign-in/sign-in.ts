import { api } from "../base-url";

export async function signIn(email: string) {
	await api.post("/authenticate", { email });
}
