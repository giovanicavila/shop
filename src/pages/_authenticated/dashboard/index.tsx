import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Pizza shop | dashboard" },
			{ name: "description", content: "Área de acesso ao dashboard" },
		],
	}),
});

function RouteComponent() {
	return <div>Hello "/dashboard/"!</div>;
}
