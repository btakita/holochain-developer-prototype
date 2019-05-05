import { _has__dom } from '@ctx-core/dom'
import { tick } from '@ctx-core/function'
import hljs from 'highlight.js/lib/highlight'
import js__highlight from 'highlight.js/lib/languages/javascript'
import json__highlight from 'highlight.js/lib/languages/json'
import rust__highlight from 'highlight.js/lib/languages/rust'
import shell__highlight from 'highlight.js/lib/languages/shell'
import typescript__highlight from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('javascript', js__highlight)
hljs.registerLanguage('js', js__highlight)
hljs.registerLanguage('json', json__highlight)
hljs.registerLanguage('rust', rust__highlight)
hljs.registerLanguage('shell', shell__highlight)
hljs.registerLanguage('typescript', typescript__highlight)
if (_has__dom()) {
	window.hljs = hljs
}
export { hljs }
export function refresh__initHighlighting(hljs) {
	if (_has__dom()) {
		hljs.initHighlighting.called = false
		tick(hljs.initHighlighting)
	}
}