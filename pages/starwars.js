import Head from 'next/head';
import { useState } from 'react';
import { useText } from '@context/TextContext';

export default function StarWars() {
	const [animationState, setAnimationState] = useState('running');
	const { state } = useText();

	const handleAnimationEnd = () => {
		setTimeout(() => {
			setAnimationState('end');
		}, 3000);
	};

	if (animationState === 'running') {
		return (
			<>
				<div className="text-bg" key="text-container">
					<div className="fade"></div>

					<section className="star-wars">
						<div
							className="crawl"
							key="crawl-text"
							onAnimationEnd={() => setAnimationState('end')}
						>
							<div className="title">
								<p>Episode IV</p>
								<h1>A New Hope</h1>
							</div>

							<p>{unescape(state.text)}</p>
						</div>
					</section>
				</div>
			</>
		);
	}

	return (
		<div className="generate__container">
			<button
				className="generate__button"
				onClick={() => setAnimationState('running')}
			>
				Play Again
			</button>
		</div>
	);
}
