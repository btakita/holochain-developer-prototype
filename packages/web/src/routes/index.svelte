<script>
	import Header_Logo from '@holochain-developer-prototype/web/src/layout/Header_Logo.svelte'
</script>

<svelte:head>
	<title>Holochain developer portal</title>
</svelte:head>

<div class="hero">
	<Header_Logo></Header_Logo>
	<p>
		Holochain is a framework for buliding & running secure, fully peer-to-peer distributed apps.
	</p>
</div>

<div class="nav_grid">
	<a href="/beginners" class="beginners">
		<div>→ Beginners</div>
		<ul>
			<li class="highlight">Completely new to Holochain?</li>
			<li>What is Holochain?</li>
			<li>Why should I care?</li>
		</ul>
	</a>
	<a href="/use" class="use">
		<div>→ Use</div>
		<ul>
			<li>What can I do with Holochain today?</li>
			<li>How do I get Holo (HOT)?</li>
			<li>How does Holochain bring hosting?</li>
		</ul>
	</a>
	<a href="/learn" class="learn">
		<div>→ Learn</div>
		<ul>
			<li>Non-technical & beginner resources</li>
			<li>How Holochain works</li>
			<li>holochain-rust</li>
		</ul>
	</a>
	<a href="/build" class="build">
		<div>→ Build</div>
		<ul>
			<li>Getting started guides</li>
			<li>Learn to program hApps</li>
			<li>Find the latest developer tools</li>
		</ul>
	</a>
</div>

<style type="text/scss">
	.hero {
		text-align: center;
	}
	.nav_grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		> a {
			display: block;
			text-decoration: none;
			flex: 0;
			margin-bottom: 2rem;
			min-width: 50%;
			max-width: 50%;
		}
	}
</style>
