import { type KeyboardEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/Input";

function Names() {
	const [Name, setName] = useState("Everybody");
	const [inputValue, setInputValue] = useState("");
	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setName(inputValue);
			setInputValue("");
		}
	};
	return (
		<div>
			<div className="w-full text-center flex justify-center items-center p-5 text-2xl">
				Hello {Name}, Youssef loves You 😍😍😍😍
			</div>
			<div className="flex px-5 gap-1 md:px-20 md:gap-5">
				<Input
					value={inputValue}
					placeholder="Enter Your Name"
					onKeyDown={(e) => {
						handleEnter(e);
					}}
					onChange={(e) => {setInputValue(e.target.value); console.log(e.target.value)}}
				/>
				<Button
					onClick={() => {
						setName(inputValue);
						setInputValue("");
					}}
				>
					Enter Name
				</Button>
			</div>
		</div>
	);
}

export default Names;
