<script>
	import Code from '@holochain-developer-prototype/web/src/highlight.js/Code.svelte'
</script>

<h1>Core Concepts - How to Develop Holochain Apps (hApps)</h1>
<p>So you want to build Holochain apps? Let’s explore some essential knowledge for developers.</p>
<p>
	For your quick reference during our journey,
		here is a <a href="/cheat-sheet">Cheat Sheet of Holochain Commands</a>.
</p>

<h2>Getting Started (Setup)</h2>

<h3>Install hcup</h3>
<p>Execute the appropriate command below (depending on your operating system) in a shell terminal:</p>
<Code title="Linux" lang="shell">
	sh -c "$(curl -fsSL https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.sh)"
</Code>
<Code title="MacOS" lang="shell">
	sh -c "$(curl -fsSL https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.sh)"
</Code>
<Code title="Windows" lang="shell">
	Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.ps1'))
</Code>

<h3>Install holochain executable & the hc development tool</h3>
<Code
	title="Execute the command below in a shell terminal (on Linux, MacOS, or Windows)"
	lang="shell"
>
	hcup install holochain-dev
</Code>
<Code
	title="Rust"
	lang="shell"
>
	// TODO
</Code>
<Code
	title="npm"
	lang="shell"
>
	// TODO
</Code>

<h3>All right… That’s it!</h3>
<p>You’re ready to start programming.</p>
