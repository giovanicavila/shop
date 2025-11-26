import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Pizza Shop | Product",
			},
			{
				name: "description",
				content: "products list",
			},
		],
	}),
});

function RouteComponent() {
	return <div>Hello "/product/"!</div>;
}
