import Counter from "./components/Counter/Counter";
import Hello from "./components/Hello";
import Names from "./components/Names";
import Auth from "./components/SignIn/Auth";
import Api from "./components/api/Api";

export function App() {

	return (
		<>
			<Hello />
			<Counter />
			<Names />
			<Auth />
			<Api />
		</>
	);
}

export default App;
