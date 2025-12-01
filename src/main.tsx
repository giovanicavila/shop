import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, useAuth } from "./context/auth";
import "./index.css";
import { Toaster } from "sonner";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {
		auth: undefined as never,
	},
	defaultPreload: "intent",
	defaultNotFoundComponent: () => <div>Not Found</div>,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	//biome-ignore lint/style/useConsistentTypeDefinitions: this works fine
	interface Register {
		router: typeof router;
	}
}

function App() {
	const auth = useAuth();
	return <RouterProvider context={{ auth }} router={router} />;
}

// Render the app
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<AuthProvider>
				<Toaster />
				<App />
			</AuthProvider>
		</StrictMode>
	);
}
