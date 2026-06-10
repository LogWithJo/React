/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react"; 

interface ShoppingCartContextType {
	setCart: Dispatch<SetStateAction<string[]>>;
	setData: Dispatch<SetStateAction<string[]>>;
	setState: Dispatch<SetStateAction<boolean>>;
	setError: Dispatch<SetStateAction<boolean>>;
	setShowCart: Dispatch<SetStateAction<boolean>>;
	cart: string[];
	data: string[];
	state: boolean;
	error: boolean;
	showCart: boolean;
}

export const ShoppingCartContext =
	createContext<ShoppingCartContextType | null>(null);

export default function ShoppingCartProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const initialCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
		? JSON.parse(localStorage.getItem("cartItems") || "[]")
		: [];

	const [cart, setCart] = useState(initialCartItems);
	const [data, setData] = useState<string[]>([]);
	const [state, setState] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [showCart, setShowCart] = useState<boolean>(false);

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cart));
	}, [cart]);

	return (
		<ShoppingCartContext
			value={{
				setCart,
				setData,
				setState,
				setError,
				setShowCart,
				cart,
				data,
				state,
				error,
				showCart,
			}}
		>
			{children}
		</ShoppingCartContext>
	);
}

export function useProducts() {
	const context = useContext(ShoppingCartContext);

	if (!context) {
		throw new Error("useProducts must be used inside ProductsProvider");
	}

	return context;
}
