<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/build/install.json')
		const json = await response.json()
		const { a1__content__md__dir } = json
		return {
			a1__content__md__dir
		}
	}
</script>

<script>
	export let a1__content__md__dir
</script>

<h1>Install Holochain</h1>

{#each a1__content__md__dir as content__md__dir}
	{@html content__md__dir.html}
{/each}
