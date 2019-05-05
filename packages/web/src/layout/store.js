import { writable } from 'svelte/store'
export const __title = writable()
export const __class__layout = writable()
export const __subheader = writable()
export const __prepend__footer = writable()
export const __url__edit__source =
	writable('https://github.com/btakita/holochain-developer-prototype/edit/master')