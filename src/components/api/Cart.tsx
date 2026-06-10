import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Cards from "./Cards/Cards";
import { useProducts } from "./Context/ShoppingCartContext";
import EmptyCart from "./EmptyCart";

function Cart() {
	const { cart } = useProducts();

	return (
		<Dialog>
			<DialogTrigger>
				OPEN CART
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cart</DialogTitle>
					<DialogDescription>There is a popup</DialogDescription>
					<DialogContent className="overflow-y-scroll max-h-[60vh]">
						{cart.length > 0 ? <Cards cart={true} /> : <EmptyCart />}
					</DialogContent>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default Cart;
