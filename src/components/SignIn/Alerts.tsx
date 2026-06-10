import clsx from "clsx";

import { InfoIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "../ui/button";

function Alerts({
	setError,
	Eror,
}: {
	setError: Dispatch<SetStateAction<boolean>>;
	Eror: boolean;
}) {
	const appearance = Eror ? "block" : "hidden";
	return (
		<div className={clsx("fixed w-full h-full top-0 left-0", appearance)}>
			<div className="layout backdrop-blur-2xl absolute left-0 w-full h-full"></div>
			<div className="absolute top-1/2 left-1/2 -translate-1/2">
				<Alert>
					<InfoIcon />
					<AlertTitle>HWrite a correct Password Please!</AlertTitle>
					<AlertDescription>Don't forget it's secuired</AlertDescription>
					<AlertAction>
						<Button
							onClick={() => {
								setError(false);
							}}
						>
							ok
						</Button>
					</AlertAction>
				</Alert>
			</div>
		</div>
	);
}

export default Alerts;
