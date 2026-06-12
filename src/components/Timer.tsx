import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const ButtonState = {
	pause: "pause",
	continue: "continue",
} as const;

type ButtonState = (typeof Button)[keyof typeof Button];

function Timer() {
	const intervalRef = useRef<number | undefined>(undefined);
	const [timer, setTimer] = useState(0);
	const [start, setStart] = useState(false);
	useEffect(() => {
		if (!start) return;
		intervalRef.current = setInterval(() => {
			setTimer((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [start]);
	return (
		<div className="w-full flex flex-col text-2xl gap-4 p-10 justify-center items-center">
		<div>useRef</div>
			<div>{timer}</div>
			<div className="w-full flex justify-center items-center gap-3 capitalize">
				<Button
					onClick={() => {
						setTimer(0);
					}}
				>
					Reset
				</Button>
				<Button
					onClick={() => {
						setStart((prev) => !prev);
					}}
				>
					{start ? ButtonState.pause : ButtonState.continue || "error"}
				</Button>
			</div>
		</div>
	);
}

export default Timer;
