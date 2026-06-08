import { cn } from "@/lib/utils";
import { useProducts } from "../Context/ShoppingCartContext";
import CardImage from "./Card";


/* eslint-disable @typescript-eslint/no-explicit-any */
function Cards({  cart }: { cart: boolean }) {
	const {data} = useProducts()
	return (
			<div className={cn("grid p-4 gap-4", cart ? "grid-cols-2" : "grid-cols-2 xl:grid-cols-4 lg:grid-cols-3" )}>
				{data.slice(0, 6).map((item) => (
					<CardImage
						key={item.title}
						item={item}
						src={item.images[0]}
						title={item.title}
						price={item.price}
						cart={cart}
					/>
				))}
			</div>
	);
}

export default Cards;
