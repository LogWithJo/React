import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { Input } from "./ui/Input";

function Names() {
	const inputRefFirst = useRef<null | HTMLInputElement>(null)
	const inputRefLast = useRef<null | HTMLInputElement>(null)
	const [Name, setName] = useState<{firstName: string, lastName: string}>({firstName: "Yousef", lastName: "Ashraf"});
	const [inputValue, setInputValue] = useState<{firstName: string, lastName: string}>({firstName: "", lastName: ""});
	const handleEnter = (e: KeyboardEvent<HTMLInputElement>, action: string) => {
		if (e.key === "Enter") {
			if (action === "first") {
				setName((prev) => ({...prev, firstName: inputValue.firstName}));
				if (!inputRefLast.current) return 
				inputRefLast.current.focus()
			} else {
				setName((prev) => ({...prev, lastName: inputValue.lastName}))
			}
			setInputValue({firstName: "", lastName: ""});
		}
	};
	useEffect(() => {
		if (!inputRefFirst.current) return;
		inputRefFirst.current.focus()
	}, [])
	return (
		<div>
			<div className="w-full text-center flex justify-center items-center p-5 text-2xl">
				Hello {Name.firstName} {Name.lastName}, Youssef loves You 😍😍😍😍
			</div>
			<div className="flex px-5 gap-1 md:px-20 md:gap-5">
				<Input
					value={inputValue.firstName}
					placeholder="Enter Your first Name"
					onKeyDown={(e) => {
						handleEnter(e, "first");
					}}
					ref={inputRefFirst}
					onChange={(e) => {setInputValue((prev) => ({...prev, firstName: e.target.value}))}}
				/>
				<Input
					value={inputValue.lastName}
					placeholder="Enter Your last Name"
					onKeyDown={(e) => {
						handleEnter(e, "last");
					}}
					ref={inputRefLast}
					onChange={(e) => {setInputValue((prev) => ({...prev, lastName: e.target.value}))}}
				/>
			</div>
		</div>
	);
}

export default Names;
