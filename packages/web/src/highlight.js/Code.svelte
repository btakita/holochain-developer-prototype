<script>
	import { onMount, onDestroy } from 'svelte'
	import { hljs } from '@holochain-developer-prototype/web/src/highlight.js/lib'
	export let lang = 'shell'
	export let title = ''
	let dom__code
	let active = true
	onMount(() => {
//		hljs.highlightBlock(dom__code)
	})
	onDestroy(() => {
		active = false
	})
</script>

<p>
	{title}:<br>
	<code bind:this="{dom__code}" class="hljs {lang}">
		<slot></slot>
	</code>
</p>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	code {
		display: block;
		padding: 1em;
		background: $color__background__code;
		border-width: 1px;
		border-style: solid;
		border-color: #400 #700 #700 #400;
	}
</style>