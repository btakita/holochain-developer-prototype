<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import { __path__home } from '@holochain-developer-prototype/web/src/layout/store'
	import Header_Logo from './Header_Logo.svelte'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.html'
	import Content__Nav from '@ctx-core/nav/Content__Nav.html'
	import Item__Nav from '@ctx-core/nav/Item__Nav.html'
	$: beginners_selected = $__path__sapper.startsWith('/beginners')
	$: use_selected = $__path__sapper.startsWith('/use')
	$: learn_selected = $__path__sapper.startsWith('/learn')
	$: build_selected = $__path__sapper.startsWith('/build')
</script>

<Handle__Nav class="Handle__Nav__Holochain"></Handle__Nav>
<div class="container__Content__Nav" class:path__home="{$__path__home}">
	<Content__Nav class="content-wrap">
		<Item__Nav href="/" class="container__logo">
			<img src="/favicon.ico" alt="Holochain">&nbsp;developers
		</Item__Nav>
		{#if !$__path__home}
			<Item__Nav
				href="/beginners"
				selected="{beginners_selected}"
				class="child_nav"
			>Beginners</Item__Nav>
			<Item__Nav
				href="/use"
				selected="{use_selected}"
				class="child_nav"
			>Use</Item__Nav>
			<Item__Nav
				href="/learn"
				selected="{learn_selected}"
				class="child_nav"
			>Learn</Item__Nav>
			<Item__Nav
				href="/build"
				selected="{build_selected}"
				class="child_nav"
			>Build</Item__Nav>
		{/if}
	</Content__Nav>
</div>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Handle__Nav($width__wide: $width__max__tablet);
	@include Content__Nav($width__wide: $width__max__tablet);
	@include Content__Nav__selected__underline($background: $color__a);
	@media(max-width: #{$width__max__tablet}) {
		@include Content__Nav__selected__background(
			$background: mix($color__body, $color__header, 10%)
		);
		@include Content__Nav__cancel__selected__underline();
	}
	@include Content__Nav__slide_from_right($width__wide: $width__max__tablet);
	:global(.Handle__Nav) {
		fill: $color__link__mid;
		@media(max-width: #{$width__max__tablet}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
	:global(.Content__Nav.content-wrap) {
		height: auto;
		z-index: 1;
		@media(max-width: #{$width__max__tablet}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__body, $color__header, 50%);
		}
		:global(.dialog) {
			:global(.container) {
				display: flex;
				&.path__home {
					:global(.child_nav) {
						display: none;
						@media(max-width: #{$width__max__tablet}) {
							display: block;
						}
					}
				}
				:global(.Item__Nav) {
					flex: 0;
					&.container__logo {
						margin-right: 1.5rem;
					}
					img {
						height: 20px;
						width: 20px;
					}
					:global(a) {
						margin-right: 0.8rem;
						fill: $color__text;
						&.selected {
							box-shadow: 0 2px 0 $color__link__mid;
						}
					}
				}
			}
		}
	}
</style>
