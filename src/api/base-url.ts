import axios from "axios";
import { z } from "zod";

export const envSchema = z.object({
	VITE_API_URL: z.url(),
});

const env = envSchema.parse(import.meta.env);

export const api = axios.create({
	baseURL: env.VITE_API_URL,
});
