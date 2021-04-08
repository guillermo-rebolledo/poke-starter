import { useRouter } from 'next/router';
import { useState } from 'react';
import { useText } from '@context/TextContext';
import Input from '@components/Input';
import Title from '@components/Title';

export default function Home() {
	const router = useRouter();
	const { state, dispatch } = useText();
	const [inputValue, setInputValue] = useState(state.text || '');

	return (
		<div className="generate__container">
			<Title>Hello there! Type your message below.</Title>
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				className="generate__button"
				onClick={() => {
					dispatch({
						type: 'UPDATE',
						payload: inputValue,
					});
					router.push('/starwars');
				}}
			>
				Enter Hyperspace!
			</button>
		</div>
	);
}
