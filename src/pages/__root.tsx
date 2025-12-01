import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthContextType } from "@/context/auth";
import { ThemeProvider } from "@/context/theme-provider";

type RouterContext = {
	auth: AuthContextType;
};

function RootLayout() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<HeadContent />
			<Outlet />
			<TanStackRouterDevtools />
		</ThemeProvider>
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
