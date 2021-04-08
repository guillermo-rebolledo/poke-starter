import '@styles/globals.css';
import TextProvider from '@context/TextContext';

function Application({ Component, pageProps }) {
	return (
		<TextProvider>
			<Component {...pageProps} />
		</TextProvider>
	);
}

export default Application;
