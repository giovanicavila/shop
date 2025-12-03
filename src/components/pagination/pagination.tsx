import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
	pageIndex: number; //para mostrar o item atual
	totalPages: number; // para mostrar a quantidade  total de paginas
	perPage: number; // saber a quantidade de itens por página
};

export function CustomPagination({
	pageIndex,
	totalPages,
	/* perPage, */
}: PaginationProps) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious aria-disabled={pageIndex === 1} href="#" />
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>

				<PaginationItem>
					<PaginationNext aria-disabled={pageIndex === totalPages} href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
