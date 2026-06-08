import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import { useProducts } from "./Context/ShoppingCartContext";

function ShowError() {
	const {error} = useProducts()
	return (
    <div className={cn("w-full flex justify-center items-center pb-3 px-10", error ? "block": "hidden")}>
			<Alert className='w-fit flex flex-col items-center mx-auto gap-2 justify-center p-5'>
				<InfoIcon />
				<AlertTitle>Error !!</AlertTitle>
				<AlertDescription>
					There is a problem in the api try again later
				</AlertDescription>
			</Alert>
    </div>
	);
}

export default ShowError;
