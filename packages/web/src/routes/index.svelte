<script>
	import Header_Logo from '@holochain-developer-prototype/web/src/layout/Header_Logo.svelte'
</script>

<svelte:head>
	<title>Holochain developer portal</title>
</svelte:head>

<div class="hero">
	<div class="container__Header_Logo">
		<Header_Logo></Header_Logo>
	</div>
	<h1>Endless scaling opportunity</h1>
	<p>
		Holochain is a framework for buliding & running secure, fully peer-to-peer distributed apps.
	</p>
</div>

<div class="nav_grid centerig">
	<a href="/beginners/" class="beginners">
		<div>→ Beginners</div>
		<ul>
			<li class="highlight">Completely new to Holochain?</li>
			<li>What is Holochain?</li>
			<li>Why should I care?</li>
		</ul>
	</a>
	<a href="/use/" class="use">
		<div>→ Use</div>
		<ul>
			<li>What can I do with Holochain today?</li>
			<li>How do I get Holo (HOT)?</li>
			<li>How does Holochain bring hosting?</li>
		</ul>
	</a>
	<a href="/learn/" class="learn">
		<div>→ Learn</div>
		<ul>
			<li>Non-technical & beginner resources</li>
			<li>How Holochain works</li>
			<li>holochain-rust</li>
		</ul>
	</a>
	<a href="/build/" class="build">
		<div>→ Build</div>
		<ul>
			<li>Getting started guides</li>
			<li>Learn to program hApps</li>
			<li>Find the latest developer tools</li>
		</ul>
	</a>
</div>

<style type="text/scss">
	@import '~@holochain-developer-prototype/web/src/css/variables';
	.hero {
		text-align: center;
		.container__Header_Logo {
			margin-bottom: 5rem;
		}
		h1 {
			font-family: Helvetica Arial SansSerif;
			font-size: 2.8rem;
			margin-bottom: 6rem;
		}
	}
	.nav_grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		@media (max-width: $width__centering) {
			display: block;
		}
		> a {
			display: block;
			text-decoration: none;
			flex: 0;
			margin-bottom: 2rem;
			min-width: 50%;
			max-width: 50%;
			@media (max-width: $width__centering) {
				min-width: auto;
				max-width: none;
			}
		}
	}
</style>
