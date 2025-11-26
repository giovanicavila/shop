import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";

export const Route = createFileRoute("/(login)/login")({
	beforeLoad: ({ context }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { login, isLoading } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			await login(email, password);
			await navigate({ to: "/" });
		} catch {
			setError("Erro ao fazer login. Tente novamente.");
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
				<h1 className="mb-6 text-center font-bold text-2xl">Login</h1>

				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label
							className="block font-medium text-gray-700 text-sm"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							required
							type="email"
							value={email}
						/>
					</div>

					<div>
						<label
							className="block font-medium text-gray-700 text-sm"
							htmlFor="password"
						>
							Senha
						</label>
						<input
							className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							required
							type="password"
							value={password}
						/>
					</div>

					{error && (
						<div className="rounded-md bg-red-50 p-3 text-red-800 text-sm">
							{error}
						</div>
					)}

					<Button className="w-full" disabled={isLoading} type="submit">
						{isLoading ? "Carregando..." : "Entrar"}
					</Button>
				</form>
			</div>
		</div>
	);
}
