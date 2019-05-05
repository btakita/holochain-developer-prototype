import { derived } from 'svelte/store'
import { __path__sapper } from '@ctx-core/sapper/store'
import { _eql } from '@ctx-core/function'
export const __path__home = derived(__path__sapper, _eql('/'))