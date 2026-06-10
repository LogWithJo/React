import { useState } from "react";
import { Button } from "./ui/button";

function Memo() {
	const [salary, setSalary] = useState<number>(100000);
	const [age, setAge] = useState<number>(16);

	return (
		<div className="p-5 flex flex-col gap-4">
			<Header />
			
			<div>
				<Button
					onClick={() => {
						setSalary((prev) => prev + 10000);
					}}
				>
					inc Salary
				</Button>
				<Button
					onClick={() => {
						setSalary((prev) => prev - 10000);
					}}
				>
					dec Salary
				</Button>
			</div>
			<div>
				<Button
					onClick={() => {
						setAge((prev) => prev + 1);
					}}
				>
					inc age
				</Button>
				<Button
					onClick={() => {
						setAge((prev) => prev - 1);
					}}
				>
					dec age
				</Button>
			</div>
		</div>
	);
}

export default Memo;

function Header() {
	return (<div className="text-2xl">React.Memo</div>)
}

function Show({state, data}: {state: string, data: string | number}) {
	if (state === "name") {
		console.log("name")
		return (<div>name: {data}</div>)
	} else {
		console.log("age")
		return (<div>age: {data}</div>)
	}
}