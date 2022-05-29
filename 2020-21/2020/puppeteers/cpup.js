const puppeteer = require('puppeteer')

(async function main() {
	try {
		const browser = await puppeteer.launch({ headless: true })
		const page = await browser.newPage()
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0')
	}
	catch(e) {
		console.log('our error', e)
	}
})
