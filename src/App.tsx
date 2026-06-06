import Counter from "./components/Counter/Counter";
import Hello from "./components/Hello";
import Names from "./components/Names";
import Auth from "./components/SignIn/Auth";

async function getData() {
	try {
		const res = await fetch("../ata.json");
		const data = await res.json();
		console.log(data);
	} catch {
		console.log("error happend");
	}
}

export function App() {
	return (
		<>
			<Hello />
			<Counter />
			<Names />
			<Auth />
		</>
	);
}

export default App;
