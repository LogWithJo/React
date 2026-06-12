import { memo, useCallback, useState } from 'react';
import { Button } from './ui/button';

function Memo() {
	const [salary, setSalary] = useState<number>(100000);
	const [age, setAge] = useState<number>(16);

	const getFunc = useCallback((state: string, edge: string): void => {
		if (edge === 'salary') {
			setSalary((prev: number) => (state === 'inc' ? prev + 10000 : prev - 10000));
		} else if (edge === 'age') {
			setAge((prev: number) => (state === 'inc' ? prev + 1 : prev - 1));
		}
	}, [])

	return (
		<div className="p-5 flex flex-col gap-4">
			<Header />
			<Age age={age} />
			<Salary salary={salary} />
			<div>
				<Btn state={'inc'} action={'salary'} func={getFunc} />
				<Btn state={'dec'} action={'salary'} func={getFunc} />
			</div>
			<div>
				<Btn state={'inc'} action={'age'} func={getFunc} />
				<Btn state={'dec'} action={'age'} func={getFunc} />
			</div>
		</div>
	);
}

export default Memo;

const Header = memo(() => {
	return <div className="text-2xl">React.Memo</div>;
})

const Age = memo(({ age }: { age: number }) => {
	return <div>age: {age}</div>;
})

const Salary = memo(({ salary }: { salary: number }) => {
	return <div>salary: {salary}</div>;
})

const Btn = memo(({ state, action, func }: { state: string; action: string; func: (state: string, edge: string) => void }) => {
	return (
		<Button
			onClick={() => {
				func(state, action);
			}}
		>
			{state} {action}
		</Button>
	);
}
)