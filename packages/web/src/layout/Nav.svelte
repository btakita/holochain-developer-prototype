<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import Header_Logo from './Header_Logo.svelte'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.html'
	import Content__Nav from '@ctx-core/nav/Content__Nav.html'
	import Item__Nav from '@ctx-core/nav/Item__Nav.html'
	$: beginners_selected = $__path__sapper && $__path__sapper.startsWith('/beginners')
	$: use_selected = $__path__sapper && $__path__sapper.startsWith('/use')
	$: learn_selected = $__path__sapper && $__path__sapper.startsWith('/learn')
	$: build_selected = $__path__sapper && $__path__sapper.startsWith('/build')
</script>

<Handle__Nav class="Handle__Nav__Holochain"></Handle__Nav>
<Content__Nav class="content-wrap">
	<Item__Nav href="/" class="container__logo">
		<img src="/favicon.ico" alt="Holochain">&nbsp;developers
	</Item__Nav>
	<Item__Nav href="/beginners" selected="{beginners_selected}">Beginners</Item__Nav>
	<Item__Nav href="/use" selected="{use_selected}">Use</Item__Nav>
	<Item__Nav href="/learn" selected="{learn_selected}">Learn</Item__Nav>
	<Item__Nav href="/build" selected="{build_selected}">Build</Item__Nav>
</Content__Nav>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Handle__Nav();
	@include Content__Nav();
	@include Content__Nav__selected__underline($background: $color__text);
	@media(max-width: #{$width__widescreen}) {
		@include Content__Nav__selected__background($background: mix($color__body, $color__header, 10%));
		@include Content__Nav__cancel__selected__underline();
	}
	@include Content__Nav__slide_from_right();
	:global(.Handle__Nav) {
		fill: $color__link__mid;
		@media(max-width: #{$width__widescreen}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
	:global(.Content__Nav.content-wrap) {
		height: auto;
		z-index: 1;
		@media(max-width: #{$width__widescreen}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__body, $color__header, 50%);
		}
		:global(.dialog) {
			:global(.container) {
				display: flex;
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
