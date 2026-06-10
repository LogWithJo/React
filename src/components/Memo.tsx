import { useState } from "react";
import { Button } from "./ui/button";

function Memo() {
	const [salary, setSalary] = useState<number>(100000);
	const [age, setAge] = useState<number>(16);

	return (
		<div className="p-5 flex flex-col gap-4">
			<Header />
			<div>age: {age}</div>
			<div>salary: {salary}</div>
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
