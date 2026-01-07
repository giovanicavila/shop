import { api } from "@/api/base-url";

export async function signIn(email: string) {
	await api.post("/authenticate", { email });
}
