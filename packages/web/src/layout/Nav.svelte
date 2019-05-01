<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import Header_Logo from './Header_Logo.svelte'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.html'
	import Content__Nav from '@ctx-core/nav/Content__Nav.html'
	import Item__Nav from '@ctx-core/nav/Item__Nav.html'
</script>

<Handle__Nav class="Handle__Nav__Holochain"></Handle__Nav>
<Content__Nav class="content-wrap">
	<Item__Nav href="/" class="container__logo">
		<Header_Logo></Header_Logo>
	</Item__Nav>
	<Item__Nav href="/start" selected="{$__path__sapper === '/start'}">Start</Item__Nav>
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
					padding: 0.2rem 0;
					flex: 0;
					&.container__logo {
						margin-right: 1.5rem;
					}
					&.container__Links__SocialMedia {
						flex: 1;
						:global(.Links__SocialMedia) {
							display: flex;
							justify-content: flex-end;
							width: 100%;
							padding: 0 0.4rem;
							@media(max-width: #{$width__widescreen}) {
								justify-content: center;
							}
							:global(ul) {
								width: auto;
							}
						}
					}
					:global(a) {
						margin-right: 0.8rem;
						fill: $color__text;
						&.selected {
							box-shadow: 0 2px 0 $color__link__mid;
						}
						&.default_a {

						}
					}
				}
			}
		}
	}
</style>
