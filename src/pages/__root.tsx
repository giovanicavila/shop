import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthContextType } from "@/context/auth";

type RouterContext = {
	auth: AuthContextType;
};

function RootLayout() {
	return (
		<>
			<HeadContent />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}

export const Route = createRootRouteWithContext<RouterContext>()({
	beforeLoad: ({ context, location }) => {
		if (location.pathname === "/") {
			throw redirect({
				to: context.auth.isAuthenticated ? "/dashboard" : "/login",
			});
		}
	},
	component: RootLayout,
});
