import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Input } from './ui/Input';

function FormSubmition() {
	return (
		<form action={'send-data'} className="flex">
			<Input placeholder="enter your salary" />
			<SubBtn />
		</form>
	);
}

export default FormSubmition;


function SubBtn() {
  const {pending} = useFormStatus()
	return <Button disabled={pending}>{pending ? 'Loading...' : 'Enter'}</Button>;
}
