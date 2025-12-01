import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/header/Header";

export const Route = createFileRoute("/_authenticated")({
	//comentando por enquanto
	/* beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({ to: "/login" });
		}
	}, */
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen">
			<Header />
			<div className="p-5">
				<Outlet />
			</div>
		</div>
	);
}
