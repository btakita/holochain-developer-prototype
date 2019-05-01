**Holochain in 300 words**

Holochain provides a data structure that can be used to build decentralized apps.
You have your own chain, which you can add data to, including financial transactions.
The chains can merge, split, and interact in complex ways.
The data is stored in a decentralized way (like Bittorrent).
The data has a hash, which is a mathematical fingerprint that corresponds to the data.
If someone tampers with the data, the mismatch between the data and the hash will be noticed,
	and the data rejected as invalid.
Digital signatures guarantee the authorship of the data.
It’s Bittorrent plus git plus digital signatures.

Holochain is a more efficient alternative to blockchain.
The Ethereum blockchain burns through huge amounts of computational power.
It does that to achieve a universal consensus,
	to make sure everyone agrees on where all the coins are.

Holochain has no native currency, it’s a “roll your own currency” crypto-accounting platform.
Instead of watching coins, we keep an eye on accounts.
Invalid transactions (increasing balance illicitly) simply get rejected by the network.

This eliminates the need for consensus,
	and that allows us to make our computing much more efficient.
We reckon it will be at least 10,000 times more efficient than Ethereum.

There is huge interest in developing decentralized applications,
	but sooner or later they run into the inherent problems of blockchain.
Besides being inefficient, Ethereum uses a unique programming language called Solidity.
Solidity developers are in short supply,
	and I have seen many projects delayed by this shortage.
Holochain supports Javascript and Lisp.
There are many Javascript developers to every Solidity developer,
	so the development of distributed applications will move along quicker.