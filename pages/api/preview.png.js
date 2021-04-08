import pup from 'puppeteer';

export default async function handler(req, res) {
	try {
		const { text } = req.query;
		const urlencodedText = encodeURIComponent(text);
		const browser = await pup.launch();
		const page = await browser.newPage();
		await page.goto(
			`https://dazzling-fermi-cdaf6e.netlify.app/api/image?text=${urlencodedText}`,
		);
		const ogImageElement = await page.$('#og-image');
		const image = await ogImageElement.screenshot({
			type: 'png',
			encoding: 'binary',
		});
		await page.close();
		await browser.close();

		res.send(image);
	} catch (e) {
		res.send('There was an error trying to get the preview. ' + e.message);
	}
}
