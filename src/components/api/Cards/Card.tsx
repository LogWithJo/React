/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useProducts } from "../Context/ShoppingCartContext";

function CardImage({
	item,
	src,
	title,
	price,
	cart,
}: {
	item: any;
	src: string;
	title: string;
	price: number;
	cart: boolean;
}) {
	const {setCart} = useProducts()
	function handleClick() {
		toast("Added to cart");
		setCart((prev: any) => ([...prev, item]));
	}
	return (
		<Card className="relative mx-auto w-full gap-4 flex *:w-full flex-col max-w-sm pt-0">
			<div className="absolute inset-0 z-30 aspect-video" />
			<img
				src={src}
				alt="Event cover"
				className="relative z-20 aspect-video w-full object-cover  dark:brightness-40"
			/>
			<CardHeader className="flex flex-col gap-4">
				<div className="flex justify-between items-center w-full px-2">
					<CardTitle>{title}</CardTitle>
					<CardAction>
						<Badge>In Stock</Badge>
					</CardAction>
				</div>
				<CardDescription className="px-2 w-full ">${price}</CardDescription>
				<Button
					onClick={() => {
						handleClick();
					}}
					className={cn("w-full", cart ? "hidden" : "")}
				>
					Add to cart
				</Button>
			</CardHeader>
		</Card>
	);
}

export default CardImage;
