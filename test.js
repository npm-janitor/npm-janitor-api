const test = require('ava');
const listen = require('test-listen').default;
const micro = require('micro');
const request = require('request-promise');
const api = require('./api');

test('GET /:username', async t => {
	let server = micro(api);
	let url = await listen(server);
	let body = await request(`${url}/siddharthkp`);
	t.true(body.length > 0);
});
