/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import Cards from "./Cards/Cards";
import Cart from "./Cart";
import { useProducts } from "./Context/ShoppingCartContext";
import ShowError from "./ShowError";
import Spin from "./Spin";

function Api() {
	const { setData, setState, setError } = useProducts();
	const api = useRef(true);
	useEffect(() => {
		async function getData() {
			if (api.current) {
				api.current = !api.current;
				try {
					const res = await fetch("https://api.escuelajs.co/api/v1/products");
					const data = await res.json();
					if (res.status === 200) {
						setData(data.slice(0, 8));
						setState(false);
					}
				} catch {
					setState(false);
					setError(true);
				}
			}
		}
		getData();
	}, [setData, setError, setState]);

	return (
		<div>
			<Cart />
			<Cards cart={false} />
			<Spin />
			<ShowError />
		</div>
	);
}

export default Api;
