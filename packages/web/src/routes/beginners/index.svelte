<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/beginners/json')
		const json = await response.json()
		const { a1__name, a1__content__md } = json
		return {
			a1__name,
			a1__content__md
		}
	}
</script>

<script>
	import A__Edit from '@holochain-developer-prototype/web/src/layout/A__Edit.svelte'
	export let a1__name
	export let a1__content__md
</script>

<h1>👋 Welcome</h1>

{#each a1__content__md as content__md__dir, i}
	{@html content__md__dir.html}
	<A__Edit href="/beginners/_content/{a1__name[i]}.md"></A__Edit>
{/each}
