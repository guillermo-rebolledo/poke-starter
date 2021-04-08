export default function handler(req, res) {
	const { text } = req.query;
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>${text}</title>
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    background-color: black;
                }
                #og-image {
                    width: 100%;
                    height: 100%;
                    color: black;
                    font-size: 72px;
                    padding: 0 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-weight: bold;
                    font-family: 'Helvetica Neue', Helvetica, sans-serif, Arial;
                    color: yellow;
                }
            </style>
        </head>
        <body>
            <div id="og-image">${text}</div>
        </body>
    </html>
  `);
}
