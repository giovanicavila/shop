import { createFileRoute, redirect } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";

export const Route = createFileRoute("/")({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({ to: "/login" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { user, logout } = useAuth();

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
			<div className="rounded-lg bg-white p-8 shadow-md">
				<h1 className="mb-4 font-bold text-3xl">Bem-vindo!</h1>
				<p className="mb-2 text-gray-600">
					Você está logado como: <strong>{user?.email}</strong>
				</p>
				<p className="mb-6 text-gray-600">Nome: {user?.name}</p>
				<Button onClick={logout} variant="outline">
					Sair
				</Button>
			</div>
		</div>
	);
}
