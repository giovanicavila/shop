import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { OrderModalDetail } from "@/components/modals/order-detail";
import { CustomPagination } from "@/components/pagination/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_authenticated/orders/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Pizza Shop | Pedidos" },
			{ name: "description", content: "Página de pedidos da Pizza Shop" },
		],
	}),
});

function RouteComponent() {
	const [perPage, _setPerpage] = useState<number>(10);
	const totalItems = 100; // mock
	const totalPages = Math.ceil(totalItems / perPage) || 1;

	return (
		<div>
			<h1 className="font-semibold text-2xl tracking-tight">Pedidos</h1>
			<section
				aria-label="Filtragem da lista"
				className="mt-6 flex max-w-xl items-center gap-2"
			>
				<Label className="text-muted-foreground text-sm" htmlFor="filter">
					Filtros:
				</Label>
				<Input id="filter" placeholder="Nome do cliente" />
			</section>
			<Table className="mt-10">
				<TableHeader>
					<TableRow>
						<TableHead className="w-16"> </TableHead>
						<TableHead>Identificador</TableHead>
						<TableHead>Realizado há</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Cliente</TableHead>
						<TableHead>Total do pedido</TableHead>
						<TableHead> </TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.from({ length: perPage }, (_, i) => (
						//biome-ignore lint: this works fine rn -> mock data
						<TableRow key={i}>
							<TableCell>
								<OrderModalDetail />
							</TableCell>
							<TableCell className="font-medium font-mono text-muted-foreground">
								absdechje213hfb324
							</TableCell>
							<TableCell className="font-normal text-muted-foreground">
								Há 15 minutos
							</TableCell>
							<TableCell>
								<Badge variant="pending">Pendente</Badge>
							</TableCell>
							<TableCell className="font-medium">Giovani C. Avila</TableCell>
							<TableCell className="font-medium">R$ 149,90</TableCell>
							<TableCell className="flex items-center justify-end gap-2">
								<Button size="sm" variant="outline">
									Aprovar
								</Button>
								<Button size="sm" variant="ghost">
									Cancelar
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<section aria-label="Paginação dos pedidos" className="mt-10">
				<CustomPagination
					pageIndex={1}
					perPage={perPage}
					totalPages={totalPages}
				/>
			</section>
		</div>
	);
}
