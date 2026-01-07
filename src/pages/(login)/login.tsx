import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Pizza } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useSignIn } from "@/api/login/sign-in/mutations/sign-in-mutation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/(login)/login")({
	beforeLoad: ({ context }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: "/dashboard" });
		}
	},
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Pizza Shop | Login",
			},
			{
				name: "description",
				content: "Acesse o painel de vendas da Pizza Shop",
			},
		],
	}),
});

const signInForm = z.object({
	email: z.email(),
});

type SignInForm = z.infer<typeof signInForm>;

function RouteComponent() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInForm>();

	const { SignIn, isLoadingSignIn } = useSignIn();

	async function handleSignIn(data: SignInForm) {
		await SignIn(data.email);
		toast.success("Enviamos um link de autenticação para seu email");
	}

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
				<footer className="text-muted-foreground text-sm">
					Todos direitos reservados
				</footer>
			</aside>

			<main className="flex items-center justify-center gap-8 px-10">
				<section className="w-[60%] space-y-5">
					<div className="text-center">
						<h1 className="font-semibold text-2xl tracking-tight">
							Acessar Painel
						</h1>
						<p className="text-muted-foreground text-sm">
							Acompanhe suas vendas pelo painel parceiro!
						</p>
					</div>
					<form
						aria-label="Formulário de login"
						className="space-y-4"
						onSubmit={handleSubmit(handleSignIn)}
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
						<Button className="w-full" disabled={isLoadingSignIn} type="submit">
							{isSubmitting ? "Acessando..." : "Acessar painel"}
						</Button>
					</form>
					<aside aria-label="link para cadastro de conta" className="text-sm">
						Não tem uma conta?
						<Button asChild className="pl-2" variant="ghost">
							<Link className="hover:underline" to="/sign-up">
								Cadastre-se
							</Link>
						</Button>
					</aside>
				</section>
			</main>
		</div>
	);
}
