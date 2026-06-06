/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */
import { useState } from "react";
import Alerts from "./Alerts";
import Forms from "./Forms";

function Auth() {
	const [Error, setError] = useState(false);
	return (
		<div>
			<Forms setError={setError} />
			<Alerts setError={setError} Error={Error} />
		</div>
	);
}

export default Auth;
