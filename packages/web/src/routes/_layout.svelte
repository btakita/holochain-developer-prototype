<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/version')
		const version = (await response.text()).trim()
		return {
			version
		}
	}
</script>

<script>
	import { getSession, page } from '@sapper/app'
	import { _no__dom } from '@ctx-core/dom'
	import { tick } from '@ctx-core/function'
	import { andand } from '@ctx-core/function'
	import { _html__webfont__fout } from '@ctx-core/google/html'
	import { __VERSION } from '@ctx-core/env/store'
	import {
		__session__sapper,
		__page__sapper,
	} from '@ctx-core/sapper/store'
	import {
		__title,
		__class__layout,
		__prepend__footer,
	} from '@holochain-developer-prototype/web/src/layout/store'
	import { __theme__invert } from '@ctx-core/theme/store'
	import Header from '@holochain-developer-prototype/web/src/layout/Header.svelte'
	import Footer from '@holochain-developer-prototype/web/src/layout/Footer.svelte'
	import { hljs } from '../highlight.js/lib'
	import { refresh__initHighlighting } from '@ctx-core/highlight.js'
	const session = getSession()
	export let version
	__VERSION.set(version)
	__session__sapper.set(session)
	$: __page__sapper.set($page)
	$: {
		$page
		__prepend__footer.set('')
		refresh__initHighlighting(hljs)
	}
</script>

<svelte:head>
	<title>{$__title ? `${$__title} — ` : ''}Holochain Developer Prototype</title>
</svelte:head>

{#if _no__dom()}
{@html _html__webfont__fout({ families: ['Source Sans Pro'] })}
{/if}

<div
	{version}
	class="_layout {$__class__layout||''}"
	class:invert="{$__theme__invert}"
>
	<Header></Header>

	<main class="content">
		<div class="content-wrap">
			<slot></slot>
		</div>
	</main>

	<Footer></Footer>
</div>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	:global(*) {
		@import '~highlight.js/styles/dracula';
	};
	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		opacity: 0;
		&.wf-active {
			opacity: 1;
		}
	}
	:global(body) {
		font-family: 'Source Code Pro', arial, sans-serif;
		font-size: 16px;
		line-height: 1.52;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	:global(._layout) {
		position: relative;
		background-color: $color__layout;
		color: $color__text;
		min-height: 100vh;
		&.invert {
			background-color: $color__layout__invert;
			color: $color__text__invert;
			:global(a) {
				color: $color__a__invert;
			}
		}
		main {
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			min-height: 600px;
			padding: 0;
			margin: 0 auto;
			box-sizing: border-box;
			z-index: 0;
		}
	}
	:global(a) {
		text-decoration: none;
		color: $color__a;
	}
	:global(.content-wrap) {
		width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	:global(h1, h2, h3, h4, h5, h6, p, body, a, img, blockquote, pre) {
		margin: 0;
		padding: 0;
		border: 0;
	}
	:global(h1) {
		font-size: 1.8em;
		margin-bottom: 1em;
	}
	:global(h2) {
		font-size: 1.6em;
		font-weight: 400;
		line-height: 1.43;
	}
	:global(h3) {
		font-style: italic;
		font-weight: 400;
		font-size: 1.4em;
		margin-top: 1.8em;
		margin-bottom: 0.8em;
	}
	:global(.centerig) {
		margin: auto;
		width: $width__centering;
		@media (max-width: $width__centering) {
			width: 100%;
		}
	}
	:global(blockquote) {
		margin: 1.2em 3em;
		padding-left: 1em;
		font-style: italic;
	}
	:global(hr) {
		border: 0;
		border-top: 1px dashed #d2d2d2;
		height: 0;
		margin: 1.6em 0;
	}
	:global(iframe) {
		display: block;
		margin: 0 auto;
	}
	:global(p, ul) {
		margin-bottom: 1.52em;
	}
	:global(ul) {
		padding: 0;
		list-style: none;
		:global(li:before) {
			content: '— ';
		}
	}
	:global(a) {
		&:hover {
			text-decoration: underline;
		}
	}
	:global(img) {
		width: 100%;
	}
	:global(code) {
		font-family: 'Anonymous Pro', monospace;
		display: block;
		padding: 1em;
		background: $color__background__code;
		color: $color__text;
		border-width: 1px;
		border-style: solid;
		border-color: $indigo $purple $purple $indigo;
		&.lang-markdown {
			color: #424242;
			.header, .strong {
				font-weight: bold;
			}
			&.emphasis {
				font-style: italic;
			}
			.horizontal_rule, .link_label, .code, .header, .link_url {
				color: #555;
			}
			.blockquote, .bullet {
				color: #bbb;
			}
		}
	}
	:global(._layout.invert) {
		:global(code) {
			background: $color__background__code__invert;
			color: $color__text__invert;
		}
	}
	:global(.post) {
		margin: 1em 0 2.5em;
	}
</style>
