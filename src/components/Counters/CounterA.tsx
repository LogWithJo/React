import useCount from "@/hooks/useCount";
import { Button } from "../ui/button";

function CounterA() {
	const [count, inc, dec, reset] = useCount();
	return (
		<div>
			<div>{count}</div>
			<Button
				onClick={inc}
			>
				+
			</Button>
			<Button
				onClick={dec}
			>
				-
			</Button>
			<Button
				onClick={reset}
			>
				reset
			</Button>
		</div>
	);
}

export default CounterA;
