import { useEffect, useRef, useState } from "react";
import Cards from "./Cards/Cards";
import ShowError from "./ShowError";
import Spin from "./Spin";

function Api() {
	const [data, setData] = useState<string[]>([]);
	const [state, setState] = useState(true);
	const [error, setError] = useState(false);
	const api = useRef(true);
	useEffect(() => {
		async function getData() {
			if (api.current) {
				api.current = !api.current;
				try {
					const res = await fetch("https://api.escuelajs.co/api/v1/products");
					const data = await res.json();
					if (res.status === 200) {
						setData(data.slice(0, 6));
						setState(false);
					}
                    console.log(data.slice(0, 6))
				} catch {
					setState(false);
					setError(true);
				}
			}
		}
		getData();
	}, []);
	return (
		<div>
			<Cards data={data} />
			<Spin state={state} />
			<ShowError erorr={error} />
		</div>
	);
}

export default Api;
