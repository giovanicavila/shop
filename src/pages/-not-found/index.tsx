import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardContent className="flex flex-col items-center gap-6 pt-6">
					<div className="flex flex-col items-center gap-2 text-center">
						<h1 className="font-bold text-6xl text-primary">404</h1>
						<h2 className="font-semibold text-2xl">Página não encontrada</h2>
						<p className="text-muted-foreground">
							A página que você está procurando não existe ou foi movida.
						</p>
					</div>

					<Separator className="w-full" />

					<div className="flex gap-3">
						<Button asChild variant="default">
							<Link to="/dashboard">Ir para o Dashboard</Link>
						</Button>
						<Button asChild variant="outline">
							<Link to="/login">Voltar ao Login</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
