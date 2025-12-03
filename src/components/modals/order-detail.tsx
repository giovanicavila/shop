import { Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

export function OrderModalDetail() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					aria-label="Botão para abrir o modal de detalhes do pedido"
					size="icon"
					variant="outline"
				>
					<Search className="h-4 w-4" />
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader aria-label="Cabeçalho de informação do pedid">
					<DialogTitle>Pedido: i1jdnd n12312</DialogTitle>
					<DialogDescription>Detalhes do pedido</DialogDescription>
				</DialogHeader>
				<Table aria-label="Tabela de informações do client">
					<TableBody>
						<TableRow className="flex justify-between">
							<TableCell className="text-muted-foreground">Status</TableCell>
							<TableCell>
								<Badge variant="pending">Pendente</Badge>
							</TableCell>
						</TableRow>
						<TableRow className="flex justify-between">
							<TableCell className="text-muted-foreground">Cliente</TableCell>
							<TableCell>
								<Badge variant="secondary">Giovani Avila</Badge>
							</TableCell>
						</TableRow>
						<TableRow className="flex justify-between">
							<TableCell className="text-muted-foreground">Telefone</TableCell>
							<TableCell>
								<span>(11)199998-8489</span>
							</TableCell>
						</TableRow>
						<TableRow className="flex justify-between">
							<TableCell className="text-muted-foreground">Email</TableCell>
							<TableCell>
								<span>giovanicavila@gmail.com</span>
							</TableCell>
						</TableRow>
						<TableRow className="flex justify-between">
							<TableCell className="text-muted-foreground">
								Realizado há
							</TableCell>
							<TableCell>
								<span>15 minutos</span>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Table aria-label="tabela de informações das quantidade e valores do pedido">
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead className="text-right">Qtd.</TableHead>
							<TableHead className="text-right">Preço</TableHead>
							<TableHead className="text-right">Subtotal</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Pizza Pepperoni</TableCell>
							<TableCell className="text-right">2</TableCell>
							<TableCell className="text-right">R$ 69,90</TableCell>
							<TableCell className="text-right">R$ 139,80</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Pizza Mussarela</TableCell>
							<TableCell className="text-right">1</TableCell>
							<TableCell className="text-right">R$ 59,90</TableCell>
							<TableCell className="text-right">R$ 59,90</TableCell>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total do pedido:</TableCell>
							<TableCell className="text-right font-medium">
								R$ 199,80
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</DialogContent>
		</Dialog>
	);
}
