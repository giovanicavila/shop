import { createFileRoute } from "@tanstack/react-router";
import { DashboardCard } from "./-components/card";

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
	return (
		<div className="flex flex-wrap items-center gap-5">
			<DashboardCard
				description="R$ 1284,00"
				percentage="2%"
				percentageText="em relação ao mês passado"
				title="Receita total"
			/>
			<DashboardCard
				description="R$ 284,00"
				percentage="6%"
				percentageText="em relação ao mês passado"
				title="Pedidos (mês)"
			/>
			<DashboardCard
				description="R$ 124,00"
				percentage="-4%"
				percentageText="em relação a ontem"
				title="Pedidos (dia) "
			/>
			<DashboardCard
				description="R$ 84,00"
				percentage="-2%"
				percentageText="em relação ao mês passado"
				title="Cancelamento (mês)"
			/>
		</div>
	);
}
