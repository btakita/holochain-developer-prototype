import hljs from 'highlight.js/lib/highlight'
import js__highlight from 'highlight.js/lib/languages/javascript'
import json__highlight from 'highlight.js/lib/languages/json'
import rust__highlight from 'highlight.js/lib/languages/rust'
import shell__highlight from 'highlight.js/lib/languages/shell'
import typescript__highlight from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('js', js__highlight)
hljs.registerLanguage('json', json__highlight)
hljs.registerLanguage('rust', rust__highlight)
hljs.registerLanguage('shell', shell__highlight)
hljs.registerLanguage('typescript', typescript__highlight)
export { hljs }
