import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { AccountMenu } from "../dropdown/account-menu";
import { NavLink } from "../navlink/nav-link";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { Separator } from "../ui/separator";

export function Header() {
	return (
		<header className="border-b p-5">
			<div className="flex flex-wrap items-center justify-between gap-5">
				<div className="flex items-center gap-5">
					<Pizza aria-label="Logo da pizzaria" className="h-6 w-6" />
					<Separator
						aria-hidden="true"
						className="h-6"
						orientation="vertical"
					/>
					<nav aria-label="Navegação principal">
						<ul className="flex list-none items-center gap-6">
							<li>
								<NavLink to="/home">
									<Home aria-hidden="true" className="h-4 w-4" />
									Início
								</NavLink>
							</li>
							<li>
								<NavLink to="/orders">
									<UtensilsCrossed aria-hidden="true" className="h-4 w-4" />
									Pedidos
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex items-center gap-3">
					<ThemeToggle />
					<AccountMenu aria-label="Botão de menu de ações" />
				</div>
			</div>
		</header>
	);
}
