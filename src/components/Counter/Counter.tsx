import { useReducer } from "react";
import { Button } from "../ui/button";

const Actions = {
	inc: "inc",
	inc10: "inc10",
	dec: "dec",
	dec10: "dec10",
	reset: "reset",
} as const;

type Actions = (typeof Actions)[keyof typeof Actions];

const reducer = (count: number, set: Actions) => {
	switch (set) {
		case Actions.inc:
			return count + 1;
		case Actions.dec:
			return count - 1;
		case Actions.dec10:
			return count - 10;
		case Actions.inc10:
			return count + 10;
		case Actions.reset:
			return 0;
	}
};

function Counter() {
	const [count, set] = useReducer(reducer, 0);
	return (
		<div>
			<div className="w-full flex justify-center items-center">{count}</div>
			<div className="w-full justify-center items-center flex gap-5 p-5">
				<Button
					onClick={() => {set(Actions.dec10);}}
				>
					- (10)
				</Button>
				<Button
					onClick={() => {
						set(Actions.dec);
					}}
				>
					-
				</Button>
				<Button
					onClick={() => {
						set(Actions.reset);
					}}
				>
					reset
				</Button>
				<Button
					onClick={() => {
						set(Actions.inc);
					}}
				>
					+
				</Button>
				<Button
					onClick={() => {
						set(Actions.inc10);
					}}
				>
					+ (10)
				</Button>
			</div>
		</div>
	);
}

export default Counter;
