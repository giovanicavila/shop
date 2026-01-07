import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthContextType } from "@/context/auth";
import { ThemeProvider } from "@/context/theme-provider";
import { NotFound } from "./-not-found";

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
	/* beforeLoad: ({ context, location }) => {
		if (location.pathname === "/") {
			throw redirect({
				to: context.auth.isAuthenticated ? "/dashboard" : "/login",
			});
		}
	}, */
	notFoundComponent: () => <NotFound />,
	component: RootLayout,
});
