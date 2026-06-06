/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Buttons from "./Buttons";

function Counter() {
	const [count, set] = useState(0);
	return (
		<div>
			<div className="w-full flex justify-center items-center">{count}</div>
			<Buttons set={set} />
		</div>
	);
}

export default Counter;
