import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/home/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Pizza Shop | Home" },
			{ name: "description", content: "Página home da pizza shop" },
		],
	}),
});

function RouteComponent() {
	return <div>Hello "/_authenticated/home/"!</div>;
}
