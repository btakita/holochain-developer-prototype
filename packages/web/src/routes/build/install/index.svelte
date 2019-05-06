<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/build/install/json')
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

<h1>Install Holochain</h1>

{#each a1__content__md as content__md,i}
	{@html content__md.html}
	<A__Edit href="/build/install/_content/{a1__name[i]}.md"></A__Edit>
{/each}

