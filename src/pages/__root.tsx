import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { AuthContextType } from "@/context/auth";

type RouterContext = {
	auth: AuthContextType;
};

function RootLayout() {
	return (
		<>
			<head>
				<HeadContent />
			</head>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
		meta: [
			{
				name: "description",
				content: "this is a pizza shop management",
			},
			{
				title: "Pizza Shop",
			},
		],
		links: [
			{
				rel: "",
				href: "/",
			},
		],
	}),
	component: RootLayout,
});
