import { useState } from "react";

function useCount(): [number, typeof inc, typeof dec, typeof reset] {
	const [count, setCount] = useState<number>(0);
	function inc() {
		setCount((prev) => prev + 1);
	}
	function dec() {
		setCount((prev) => prev - 1);
	}
	function reset() {
		setCount(0);
	}
	return [count, inc, dec, reset];
}

export default useCount;
