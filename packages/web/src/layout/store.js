import { writable, derived } from 'svelte/store'
import { __path__sapper } from '@ctx-core/sapper/store'
import { _eql } from '@ctx-core/function'
export const __title = writable()
export const __class__layout = writable()
export const __subheader = writable()
export const __prepend__footer = writable()
export const __path__home = derived(__path__sapper, _eql('/'))