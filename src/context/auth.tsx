import { createContext, type ReactNode, useContext, useState } from "react";

export type User = {
	id: string;
	email: string;
	name: string;
};

export type AuthContextType = {
	user: User | null;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
	children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	//*TODO Usar minha funcao de login com tanstack query depois 
	const login = async (email: string, _password: string): Promise<void> => {
		setIsLoading(true);
		try {
			// Simula uma chamada de API
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Aqui você faria a chamada real para sua API
			// const response = await fetch('/api/login', { ... })

			// Mock de usuário autenticado
			const mockUser: User = {
				id: "1",
				email,
				name: "Usuário Teste",
			};

			setUser(mockUser);
			localStorage.setItem("user", JSON.stringify(mockUser));
		} catch (error) {
			console.error("Erro no login:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	const value: AuthContextType = {
		user,
		isAuthenticated: user !== null,
		login,
		logout,
		isLoading,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
