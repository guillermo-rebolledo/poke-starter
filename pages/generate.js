import Link from 'next/link';
import { useState } from 'react';
import { useText } from '@context/TextContext';
import Input from '@components/Input';

export default function Home() {
	const { state, dispatch } = useText();
	const [inputValue, setInputValue] = useState(state.text || '');

	return (
		<div>
			<main>Generate your very own Star Wars crawl text!</main>
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				onClick={() => {
					dispatch({
						type: 'UPDATE',
						payload: inputValue,
					});
				}}
			>
				Save
			</button>
			<Link href="/starwars">
				<button>LET ME IN!</button>
			</Link>

			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}
