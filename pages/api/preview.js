import pup from 'puppeteer';

export default async function handler(req, res) {
	const { text } = req.query;
	const urlencodedText = encodeURIComponent(text);
	const browser = await pup.launch();
	const page = await browser.newPage();
	await page.goto(`http://localhost:3001/api/image?text=${urlencodedText}`);
	const ogImageElement = await page.$('#og-image');
	const image = await ogImageElement.screenshot();
	await page.close();

	res.send(image);
}
