import { _a1__content__md__dir } from '@holochain-developer-prototype/web/src/markdown/lib'
export async function get(req, res) {
	let json
	const a1__content__md__dir = await _a1__content__md__dir('src/routes/beginners/_content')
	json = JSON.stringify({ a1__content__md__dir })
	const headers = {
		'Content-Type': 'application/json',
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(json)
}