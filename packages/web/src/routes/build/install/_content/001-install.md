## Install hcup

Execute the appropriate command below (depending on your operating system) in a shell terminal:

Linux:<br>
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.sh)"
```
<br>
<br>

MacOS:<br>
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.sh)"
```
<br>
<br>

Windows:<br>
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force;
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/holochain/hcup/master/hcup-bootstrap.ps1'))
```
<br>
<br>

## Install holochain executable & the hc development tool

Execute the command below in a shell terminal (on Linux, MacOS, or Windows):<br>
```shell
hcup install holochain-dev
```
<br>
<br>

Rust:<br>
```shell
// TODO
```
<br>
<br>

npm:<br>
```shell
// TODO
```
<br>
<br>

<!--Testing Syntax highlighting-->
TODO: remove - demonstrating syntax highlighting
```javascript
function foobar() {
	const v = 123
	console.info(v)
}
```

## All right… That’s it!

You’re ready to start programming.

TODO - next sections