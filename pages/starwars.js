import Head from 'next/head';
import { useText } from '@context/TextContext';

export default function StarWars() {
	const { state } = useText();

	console.log(state.text);
	console.log(unescape(state.text));

	return (
		<>
			<Head>
				<html lang="en" />
				<title>"Awesome Star Wars Text"</title>
				<meta name="description" content="Hello world!" />
				<meta property="og:site_name" content="Awesome Star Wars Text" />
				<meta
					property="og:image"
					content={`${process.env.BASE_URL}/api/preview?text=hello`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Awesome Star Wars Text" />
				<meta name="twitter:description" content="Hello world!" />
				<meta
					name="twitter:image"
					content={`${process.env.BASE_URL}/api/preview?text=hello`}
				/>
			</Head>
			<div className="text-bg">
				<div className="fade"></div>

				<section className="star-wars">
					<div className="crawl">
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
