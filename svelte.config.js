import adapter from '@sveltejs/adapter-auto';
import google from 'googleapis';
import QRCode from 'qrcode.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;