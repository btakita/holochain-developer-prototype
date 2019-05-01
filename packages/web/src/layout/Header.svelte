<script>
	import Nav from './Nav.svelte'
</script>

<header>
	<Nav></Nav>
</header>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	header {
		padding: 1rem 0;
		background: $color__header;
	}
	:global(._layout.invert) {
		header {
			background: $color__header__invert;
		}
	}
</style>