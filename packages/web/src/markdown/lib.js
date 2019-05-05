import fs from 'fs'
import { join, extname } from 'path'
import { promisify } from 'util'
import { map } from '@ctx-core/array'
import { _andand } from '@ctx-core/function'
import { hljs } from '@holochain-developer-prototype/web/src/highlight.js/lib'
import {
	_obj__metadata__content,
	_html__content__markdown,
} from '@ctx-core/markdown'
const exists = promisify(fs.exists)
const readFile__promise = promisify(fs.readFile)
const promise__readdir = promisify(fs.readdir)
export async function _content__md__file(relative_path) {
	if (extname(relative_path) !== '.md') return
	const txt__path = join(process.cwd(), relative_path)
	if (!(await exists(txt__path))) return
	const markdown = await readFile__promise(txt__path, 'utf-8')
	const { content, metadata } = _obj__metadata__content(markdown)
	const html = _html__content__markdown(content, hljs)
	return {
		html,
		date: new Date(metadata.date),
	}
}
export async function _a1__content__md__dir(dir) {
	const a1__file = await promise__readdir(dir)
	const a1__relative_path = map(a1__file,
		file => join(dir, file))
	const a1__promise__content__md__file = map(a1__relative_path, _content__md__file)
	return Promise.all(a1__promise__content__md__file)
}
export async function _html__md__dir(dir) {
	const a1__content__md__dir = await _a1__content__md__dir(dir)
	const a1__html__md__dir = map(a1__content__md__dir, _andand('html'))
	return a1__html__md__dir.join('\n\n')
}
export function _get__md__dir(dir) {
	return async (req, res) => {
		let json
		const a1__content__md__dir = await _a1__content__md__dir(dir)
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
}