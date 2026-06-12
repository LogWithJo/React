// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	// <StrictMode>
		<ThemeProvider>
			<Toaster />
				<App />
		</ThemeProvider>
	// </StrictMode>,
);
