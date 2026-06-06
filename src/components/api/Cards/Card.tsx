import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function CardImage({src, title, price}: {src: string, title: string, price: number}) {
	return (
		<Card className="relative mx-auto w-full max-w-sm pt-0">
			<div className="absolute inset-0 z-30 aspect-video" />
			<img
				src={src}
				alt="Event cover"
				className="relative z-20 aspect-video w-full object-cover  dark:brightness-40"
			/>
			<CardHeader>
				<CardAction>
					<Badge>In Stock</Badge>
				</CardAction>
				<CardTitle>{title}</CardTitle>
				<CardDescription>
					${price}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
