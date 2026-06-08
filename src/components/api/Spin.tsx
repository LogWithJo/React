import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { useProducts } from "./Context/ShoppingCartContext";

function Spin() {
	const {state} = useProducts()
	return (
		<div
			className={cn(
				"w-full justify-center flex-col items-center text-center pb-3 px-10",
				state ? "block" : "hidden",
			)}
		>
			<Spinner />
			<div className="pt-3">fetching data</div>
		</div>
	);
}

export default Spin;
