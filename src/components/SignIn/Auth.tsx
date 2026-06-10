import { useState } from "react";
import Alerts from "./Alerts";
import Forms from "./Forms";

function Auth() {
	const [Eror, setError] = useState(false);
	return (
		<div>
			<Forms setError={setError} />
			<Alerts setError={setError} Eror={Eror} />
		</div>
	);
}

export default Auth;
