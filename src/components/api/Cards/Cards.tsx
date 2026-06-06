import { CardImage } from "./Card";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Cards({ data }: { data: any[] }) {
	return (
			<div className="grid grid-cols-2 xl:grid-cols-3 p-4 gap-4">
				{data.slice(0, 6).map((item) => (
					<CardImage
						key={item.title}
						src={item.images[0]}
						title={item.title}
						price={item.price}
					/>
				))}
			</div>
	);
}

export default Cards;
