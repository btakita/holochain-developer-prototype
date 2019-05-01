<h2>Holochain in 100 Words</h2>
<p>
	Holochain provides a data structure that can be used to build decentralized apps.
	You have your own chain, which you can add data to, including financial transactions.
	The chains can merge, split, and interact in complex ways.
	The data is stored in a decentralized way (like Bittorrent).
	The data has a hash, which is a mathematical fingerprint that corresponds to the data.
	If someone tampers with the data, the mismatch between the data and the hash will be noticed,
		and the data rejected as invalid. Digital signatures guarantee the authorship of the data.
	It’s Bittorrent plus git plus digital signatures.
</p>

<h2>Holochain in 500 words</h2>
<p>Holochain combines hashing, digital signatures, and DHTs to form a tamper-proof distributed ledger.</p>
<p>Hashing is a technique that collapses a bunch of data into a fingerprint that looks like this:</p>
<blockquote>6d28d7cf56c26dd99752b0cafc1b14865846e660</blockquote>
<p>
	If you change just one byte in the data, it no longer matches the hash.
	If you download a software program, and make sure what you downloaded has the proper hash,
		then you know that no one has inserted any malware or funny stuff.
</p>
<p>
	Dual-key cryptography is a basic cryptographic technique, used in all sorts of ways in computer science.
	There is a public key (like a username) that is shared with the world,
		and a private key (like a password) that is not.
</p>
<p>
	Dual-key cryptography is used to create digital signatures.
	Digital signatures work like this: I take a message,
		combine it with my private key, and stir it with some mathematics to create a signature.
	You can look at the signature, the message and my public key,
		and verify that the owner of the corresponding private key signed that message.
	If the message was altered, the signature wouldn’t check out.
	If someone tried to sign it without knowing my private key (which I store offline),
		it wouldn’t check out. I trust a software publisher, I know their public key,
		and so I download the software and check they’ve signed it.
	That confirms that the software really came from them, and hasn’t been altered since they signed it.
</p>
<p>
	If I stream video from YouTube, the video is stored on YouTube’s computers.
	I point my browser to a particular URL, and it downloads whatever file is sitting there.
	I am a recipient only. By contrast, a distributed hash table (DHT) is a thing
		that allows you to download data from your neighbours.
	With a DHT, I ask peers on the network, “Who has the file with the hash 23ae47x?”,
		download chunks of it from whoever has it near me, and then combine them to form a full file.
</p>
<p>
	DHT downloads are faster and more resilient than downloading from a server.
	They also put less strain on the network.
	Imagine a group of friends all watch a viral video on YouTube.
	Every time one of them watches it, the server&#8202;—&#8202;
		which may be on the other side of the world&#8202;—&#8202;has to send it again.
	If they were watching using a peer-to-peer system like a DHT, once one of them had it,
		he could send it to his neighbours.
</p>
<p>
	Because content on a DHT is identified by its hash, I always get exactly what I asked for;
		it’s impossible for an attacker to replace it with something fishy.
</p>
<p>
	These are the tools that build holochains.
	Digital signatures ensure no one can mess with my ledger without leaving a trail of signatures.
	Hashing ensures the data transferred is exactly what was requested.
	A DHT decentralizes the storage of this data, so that it’s hosted by the community rather than a company.
	This makes it a secure, distributed, tamper-proof ledger.
</p>