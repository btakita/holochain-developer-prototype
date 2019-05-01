<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/beginners.json')
		const json = await response.json()
		const { a1__content__md__dir } = json
		return {
			a1__content__md__dir
		}
	}
</script>

<script>
	import A__Edit from '@holochain-developer-prototype/web/src/layout/A__Edit.svelte'
	export let a1__content__md__dir
</script>

<h1>👋 Welcome</h1>

{#each a1__content__md__dir as content__md__dir}
	{@html content__md__dir.html}
{/each}

<A__Edit href="/beginners/_content"></A__Edit>