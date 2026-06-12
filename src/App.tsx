import Api from "./components/api/Api";
import ShoppingCartProvider from "./components/api/Context/ShoppingCartContext";
import Counter from "./components/Counter/Counter";
import ThreeCounters from "./components/Counters/ThreeCounters";
import FormSubmition from "./components/FormSubmition";
import Hello from "./components/Hello";
import Memo from "./components/Memo";
import Names from "./components/Names";
import Auth from "./components/SignIn/Auth";
import Timer from "./components/Timer";

export function App() {
	return (
		<>
			<Hello />
			<main>
				<FormSubmition />
				<Counter />
				<Names />
				<Auth />
				<ShoppingCartProvider>
					<Api />
				</ShoppingCartProvider>
				<Timer />
				<ThreeCounters />
				<Memo />
			</main>
		</>
	);
}

export default App;
