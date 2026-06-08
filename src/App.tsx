import Api from "./components/api/Api";
import ShoppingCartProvider from "./components/api/Context/ShoppingCartContext";
import Counter from "./components/Counter/Counter";
import Hello from "./components/Hello";
import Names from "./components/Names";
import Auth from "./components/SignIn/Auth";
import { ThemeProvider } from "./components/theme-provider";

export function App() {
	return (
		<>
			<Hello />
			<Counter />
			<Names />
			<Auth />
			<ShoppingCartProvider>
				<Api />
			</ShoppingCartProvider>
		</>
	);
}

export default App;
