import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Cards from "./Cards/Cards";
import { useProducts } from "./Context/ShoppingCartContext";
import EmptyCart from "./EmptyCart";
import { Button } from "../ui/button";

function Cart() {
	const { cart } = useProducts();

	return (
		<Dialog>
			<DialogTrigger><Button>Open Cart</Button></DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cart</DialogTitle>
					<DialogDescription>There is a popup</DialogDescription>
				</DialogHeader>
					<div className="overflow-y-scroll max-h-[60vh]">
						{cart.length > 0 ? <Cards cart={true} /> : <EmptyCart />}
					</div>
			</DialogContent>
		</Dialog>
	);
}

export default Cart;
