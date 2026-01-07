import type { RestaurantInfo } from "@/@types/login";
import { api } from "@/api/base-url";

export async function signUp(body: RestaurantInfo) {
	await api.post("/restaurants", body);
}
