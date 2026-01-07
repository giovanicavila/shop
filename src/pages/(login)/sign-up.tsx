import { createFileRoute, Link } from "@tanstack/react-router";
import { Pizza } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useSignUp } from "@/api/login/sign-up/mutations/sign-up-mutations";
import {
	Cursor,
	CursorFollow,
	CursorProvider,
} from "@/components/animate-ui/components/animate/cursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/(login)/sign-up")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Pizza Shop | cadastro" },
			{ name: "description", content: "Cadastre-se na pizza shop" },
		],
	}),
});

const signUpForm = z.object({
	restaurantName: z.string(),
	managerName: z.string(),
	phone: z.string(),
	email: z.email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

function RouteComponent() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignUpForm>();

	const { RegisterRestaurant, isLoadingRegisterRestaurant } = useSignUp();

	const handleSignUp = async (data: SignUpForm) => {
		await RegisterRestaurant(data);
	};

	return (
		<div className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
			<aside
				aria-label="pizza shop logo"
				className="flex flex-col justify-between border-r-foreground bg-muted p-10 text-muted-foreground"
			>
				<div className="flex items-center gap-3 text-foreground text-lg">
					<Pizza className="h-5 w-5" />
					<span className="font-semibold">Pizza.shop</span>
				</div>
				<CursorProvider>
					<Cursor />
					<CursorFollow>Mama mia</CursorFollow>
				</CursorProvider>
				<footer className="text-muted-foreground text-sm">
					Todos direitos reservados
				</footer>
			</aside>

			<main className="flex max-w-full items-center justify-center gap-8">
				<section className="w-full space-y-5 px-10 2xl:px-48">
					<div className="text-center">
						<h1 className="font-semibold text-2xl tracking-tight">
							Cadastrar restaurante
						</h1>
						<p className="text-muted-foreground text-sm">
							Crie uma conta para acessar a aplicação
						</p>
					</div>
					<form
						aria-label="Formulário de login"
						className="space-y-4"
						onSubmit={handleSubmit(handleSignUp)}
					>
						<div className="space-y-2">
							<Label htmlFor="email">Seu e-mail</Label>
							<Input
								autoComplete="email"
								id="email"
								placeholder="exemplo@email.com"
								required
								type="email"
								{...register("email")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="restaurantName">Nome do estabelecimento</Label>
							<Input
								id="restaurantName"
								required
								type="text"
								{...register("restaurantName")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="managerName">Nome do gerente</Label>
							<Input
								id="managerName"
								required
								type="text"
								{...register("managerName")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Telefone</Label>
							<Input id="phone" required type="text" {...register("phone")} />
						</div>
						<Button
							className="w-full"
							disabled={isLoadingRegisterRestaurant}
							type="submit"
						>
							{isSubmitting ? "Finalizando..." : "Finalizar Cadastro"}
						</Button>
					</form>
					<aside aria-label="Link para retornar para a página de login">
						Ir para o login
						<Button asChild className="pl-2" variant="ghost">
							<Link className="hover:underline" to="/login">
								Voltar
							</Link>
						</Button>
					</aside>
				</section>
			</main>
		</div>
	);
}
