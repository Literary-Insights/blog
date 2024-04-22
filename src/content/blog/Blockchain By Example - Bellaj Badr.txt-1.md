---
title: Blockchain By Example - Bellaj Badr
slug: deep-summary-blockchain-by-example-bellaj-badr
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---

BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=blockchain-by-example-bellaj-badr)



 Here is a summary of the Table of Contents:

The book covers various topics related to blockchain technology and building blockchain applications. 

Chapter 1 provides an introduction to blockchain concepts like cryptocurrency and what blockchain is. It also provides instructions on how to interact with the Bitcoin blockchain.

Chapter 2 focuses on building a Bitcoin payment system and covers topics like transactions, mining, and building a payment gateway. 

Chapter 3 guides the reader in building their own cryptocurrency by cloning the Bitcoin codebase and making customizations. 

Chapter 4 presents how to build a peer-to-peer auction application on Ethereum. 

Chapter 5 covers more advanced Ethereum concepts like building a Tontine game application using Truffle and Drizzle.

Chapter 6 discusses integrating blockchain into existing business and applications by presenting a blockchain-based futures system.

Chapter 7 examines using blockchains in business contexts like private Ethereum chains. 

Chapter 8 provides a guide to launching an initial coin offering (ICO) project.

Chapter 9 introduces distributed storage options for blockchain applications like IPFS and Swarm.

Chapter 10 demonstrates how to create a supply chain application on Hyperledger.

Chapter 11 presents developing letter of credit applications on Hyperledger.

So in summary, the book progresses from basic blockchain concepts to building various real-world applications across platforms like Bitcoin, Ethereum and Hyperledger. It covers topics from cryptocurrencies, payments, smart contracts to business use cases.

 Here is a summary:

- Blockchains solve the problem of having a centralized authority to manage trust and prevent fraud in payment systems. However, early decentralized systems lacked trust without a central authority. 

- Cryptography techniques like proof-of-work helped address this by allowing transactions to be validated in a decentralized manner without a single point of control.

- Bitcoin was the first successful implementation of this, using cryptography, peer-to-peer networks, and a distributed public ledger called the blockchain. 

- The blockchain provides a transparent and shared record of all validated transactions. Nodes on the network independently validate transactions and build consensus on the transaction history through proof-of-work.

- Key elements of blockchains include encryption to prove ownership, blocks which bundle transactions, smart contracts to automate terms, and the linking of blocks in a chronological chain protected by cryptography.

- The guide then demonstrates setting up bitcoin clients and constructing a basic transaction to store a "hello world" message in the blockchain, as one way data can be embedded within bitcoin transactions.

 Here is a summary:

- The summary explains how to set up a Bitcoin testnet node using Bitcoin Core and Electrum clients without needing to download the entire blockchain. 

- For Bitcoin Core, it shows how to run it in pruned mode by setting the "prune" configuration parameter, which limits the storage space used to a few GB instead of the full 200+ GB blockchain. 

- It also demonstrates how to generate a new address to receive testnet coins using Bitcoin Core's RPC interface.

- For Electrum, it shows how to run it in thin client mode, which connects to Electrum servers instead of hosting a full node. A new wallet is also generated.

- Both clients are then funded using a testnet bitcoin faucet to receive some small amounts of testnet coins. 

- The available unspent transaction outputs (UTXOs) are listed for the funded addresses using the clients' APIs.

- Finally, it provides the steps to create a raw transaction spending one of the UTXOs as input, and creating a new output with an encoded "hello world" message as the value. This demonstrates the basic process of building and sending transactions programmatically.

 Here are the key steps to build a raw bitcoin transaction in JavaScript:

1. Install dependencies

```
npm install bitcoinjs-lib@5.1.2
```

2. Import bitcoinjs-lib

```js
const bitcoin = require('bitcoinjs-lib');
``` 

3. Create a network object for testnet

```js 
const network = bitcoin.networks.testnet;
```

4. Create a transaction builder

```js
const txBuilder = new bitcoin.TransactionBuilder(network);
```

5. Add input(s) from existing unspent transaction(s) 

```js
txBuilder.addInput(txId, index);
```

6. Add output(s)
   - For OP_RETURN:

```js
txBuilder.addOutput({
  data: Buffer.from('Hello World'), 
  script: bitcoin.scripts.OP_RETURN 
});
```

   - To send coins:

```js
txBuilder.addOutput(address, amount); 
```

7. Sign inputs 

```js
txBuilder.sign(0, privateKey, redeemScript);
```

8. Build and serialize transaction

```js
const tx = txBuilder.build();
const hex = tx.toHex();
```

9. Broadcast transaction 

```js
const response = await fetch('https://api.../pushtx', {
  method: 'POST',
  body: hex
});
```

This demonstrates the basic flow to create, sign and broadcast a raw bitcoin transaction with OP_RETURN and standard outputs programmatically in Node.js.

 Here is a summary:

- The post describes building a basic Bitcoin payment system and smart contract using Node.js, bitcore-lib, BitcoinJ, and Rootstock.

- It introduces Bitcoin and explains that it is a peer-to-peer electronic cash system based on blockchain technology. The Bitcoin protocol defines the rules for validating transactions, mining new coins, and preventing double spends.

- The first part of the chapter builds a BIP 70 payment system using Node.js and bitcore-lib. BIP 70 defines the Bitcoin payment protocol.

- The second part builds a Bitcoin client application using BitcoinJ, a Java Bitcoin library. This allows programmatic interaction with the Bitcoin network. 

- The third part covers writing and deploying smart contracts on Bitcoin using Rootstock. Rootstock extends the Bitcoin protocol to support Turing-complete smart contracts.

- The goal is to acquire technical knowledge about how Bitcoin works under the hood and build basic Bitcoin applications using common programming languages like JavaScript and Java.

- Coding examples are provided hands-on to help the reader understand and implement the concepts discussed.

So in summary, it outlines building different components that interface with Bitcoin - a payment system, client, and smart contracts - to demonstrate programming with the Bitcoin protocol.

 Here is a summary of the key points about getting started with Bitcoin as a platform:

- Bitcoin is a pioneer in electronic payments and has one of the most accessible systems worldwide. Transactions are faster than some other payment channels and don't allow for chargebacks. The Bitcoin network is also very secure.

- For learning and testing purposes, it's better to use Bitcoin's testnet or the regtest mode of the Bitcoin Core client. Regtest mode allows setting up a local private blockchain for instant validation and creating test bitcoins. 

- Basic commands like generating blocks, checking balances, and interacting via RPC calls are demonstrated using the Bitcoin Core client and bitcoin-cli.

- Key concepts explained include mining (how transactions are validated and added to the blockchain), and Bitcoin scripts (how the cryptocurrency is programmable using scripts in transactions).

- A simple JavaScript example is given to build a basic P2PKH script using the bitcore library to construct a "pay to public key hash" output script for a given Bitcoin address. 

- Custom scripts can also be defined, although they may require miner support to be validated on the blockchain. Scripting allows programming novel transaction types.

So in summary, it provides an introduction to getting started technically with the Bitcoin platform and core concepts like transactions, scripts and the blockchain validation process. The focus is on using the Bitcoin Core client and JavaScript libraries for learning purposes.

 Here is a summary of the key points:

- The project aims to build a Bitcoin payment gateway using the Bitcoin Payment Protocol (BIP70) to enable direct Bitcoin payments on an e-commerce website. 

- BIP70 specifies how a merchant server can generate custom payment URLs/QR codes that allow customers to checkout and pay directly from their Bitcoin wallet without filling forms. 

- The process involves the merchant server generating a signed payment request, the customer's wallet validating and authorizing the payment, and the merchant acknowledging receipt of payment.

- The project will be built with Node.js on the merchant server side using the Bitcore library, with a JavaScript frontend and a Java BitcoinJ client.

- It will be set up on the Bitcoin testnet for development purposes, with wallets generated for the merchant and customer loaded with testnet coins. 

- SSL certificates will be used to secure the payment requests as specified in BIP70 for verification of the merchant's identity.

- The key steps are setting up the project directories, installing dependencies, generating keys/certificates, building the merchant server, frontend, and client.

So in summary, it outlines building a Bitcoin payment gateway to enable easy checkout payments from a customer's wallet directly to a merchant site using the Bitcoin Payment Protocol standard.

 Here is a summary:

- The code is setting up an HTTPS server using Node.js and Express to handle Bitcoin payment requests using the Payment Protocol (BIP70/BIP72). 

- It generates a self-signed certificate to enable HTTPS.

- Defines routes to handle different steps of the payment flow: checkout, generate payment request URI, request payment details, receive payment.

- Uses the bitcore-lib library to generate addresses, create signed payment requests and parse incoming payments. 

- Composes a valid BIP21/BIP72 payment URI pointing back to the server. 

- Handles incoming requests by building a PaymentRequest message as defined by BIP70 with relevant details like outputs, expiry etc. 

- Signs the request and sends the raw serialized format or base64 encoded depending on the requester.

- Parses incoming payment transactions using the PaymentProtocol library to generate a PaymentACK.

So in summary, it demonstrates implementing a basic Bitcoin payment server handling the Payment Protocol standard on the merchant side.

 Here is a summary:

- The code is implementing a Bitcoin payment system that allows customers to pay for online purchases with Bitcoin using the Bitcoin Payment Protocol (BIP70).

- On the backend, a Node.js server is used to generate payment requests, broadcast transactions to the network, and acknowledge payments. Bitcore-lib is used to work with Bitcoin transactions and the payment protocol. 

- On the frontend, a basic online store UI is created using HTML/JS. Bitcore and a QR code library are used to display the payment request URL and QR code to the customer. 

- When the customer clicks to pay, the frontend requests a payment request from the server which is rendered with the URL and QR code. 

- The customer can then pay using their Bitcoin wallet by scanning the QR code or opening the payment URL. Their wallet will connect to the server to get payment details.

- Once paid, the wallet sends the transaction to the network and the server sends a payment ACK back to the wallet/customer.

- The last part discusses implementing a Java Bitcoin wallet using BitcoinJ that can interact with the server, allowing mobile payments without relying on installed wallets.

So in summary, it shows how to build a full-stack Bitcoin payment system using the Bitcoin Payment Protocol for online purchases. Both backend server implementations and basic frontend UI are covered.

 Here is a summary:

The steps to set up and run a Java client using BitcoinJ to communicate with a Node.js server that supports BIP70 payments are:

1. Install Java 8 and Eclipse IDE. 

2. Create a Maven project in Eclipse and add BitcoinJ and SLF4J dependencies to the pom.xml file.

3. Create a class with a main method to start the BitcoinJ wallet kit and synchronize it with the Bitcoin network. 

4. Generate a receiving address for the wallet and check the balance.

5. Parse the BIP70 payment URL provided by the server and retrieve the payment request details. 

6. Validate the merchant's identity from the certificate in the payment request. 

7. Use the payment request to create and fund a transaction to the merchant, adding a change address and memo. 

8. Send the signed transaction to the server for broadcast over the Bitcoin network.

9. Wait for an acknowledgement from the server and commit the transaction to the local wallet.

The key steps involve setting up the BitcoinJ libraries, interacting with the BIP70 payment request, creating and funding a transaction, and communicating it to the Node.js server for processing the payment on-chain.

 Here is a summary of the key steps:

1. Install the RSKJ Java implementation to run an RSK node. Configure the node to enable account creation, CORS access, and pruning. 

2. Start the RSK node as a service and interact with it using the utilities console, which provides a wrapper for the Web3 API. 

3. Create a new account in the console and request testnet Smart Bitcoins (SBTC) from an online faucet to fund the account. 

4. Write a basic smart contract in Solidity to store a message string. This defines a public Message variable and a set() method to edit its value.

5. Deploy the smart contract to RSK by compiling it to bytecode and sending a transaction to create the contract on the blockchain. 

6. Interact with the deployed contract using the call() and sendTransaction() methods to get and set the Message value by calling the public getter and set() method.

7. The RSK node allows running EVM smart contracts on the Bitcoin blockchain using the Rootstock sidechain, which pegs Bitcoin to the RSK network through a two-way bridge. This enables Turing-complete smart contracting capabilities on Bitcoin.

So in summary, it sets up an RSK node, deploys a sample smart contract, and demonstrates basic interactions to get a sense of how to write and execute smart contracts on the Bitcoin blockchain using the Rootstock platform.

 Here is a summary of the key points:

- We build the Bitcoin source code to understand the process before making any modifications for our own cryptocurrency. 

- We install dependencies like OpenSSL, Boost, libevent, Miniupnpc, BerkeleyDB, and QT (if building the GUI version).

- We clone the Bitcoin Core source code repository from GitHub. 

- We run the autogen.sh, configure, and make commands to build the Bitcoin code. The configure step allows options like enabling the GUI or debugging.

- Building compiles all the C++ code and links the dependencies. It can take a significant amount of time. 

- Once built, we will have the Bitcoin Core software without any changes yet. 

- This prepares our development environment and lets us familiarize with the build process before customizing the code for our own cryptocurrency.

So in summary, we are compiling the original Bitcoin code from source to understand the building steps and dependencies, which will help us when modifying the code later to create our own cryptocurrency clone.

 Here is a summary of the key steps to compile Bitcoin from source code and build a new altcoin called ReaderCoin:

- Install build tools and dependencies 
- Clone the Bitcoin 0.15 source code
- Remove Bitcoin repository links and initialize a new git repo
- Rename all "bitcoin" references to "readercoin" in files and code
- Change default ports for P2P and RPC to avoid conflicts 
- Increment the pchMessageStart magic bytes to differentiate the network
- Use a Python script to generate a new genesis block replacing Bitcoin's
- Make any other desired changes like block times, rewards, etc.  
- Compile the code using make to build theReaderCoin binaries
- optionall install binaries using make install
- Test running theReaderCoind and readercoin-qt clients

The process involved taking the Bitcoin 0.15 source code as a base, removing ties to the Bitcoin repo, extensively rebranding filenames and references to ReaderCoin, customizing network parameters like ports and magic bytes, and generating a new genesis block. Compiling and testing ensures the new altcoin ReaderCoin was successfully built from Bitcoin's codebase to operate as an independent cryptocurrency.

 Here is a summary of the key steps needed to set up a new genesis block for a blockchain based on the Bitcoin codebase:

1. Generate a new genesis block using a script like genesis.py. Specify a timestamp, passphrase, nonce, difficulty, block reward, etc. to define the unique attributes of the first block. 

2. Update the chainparams.cpp file with values from the new genesis block like the timestamp, nonce, difficulty target, and block reward amount. 

3. Replace the existing genesis block hash assertions with the new hash value. 

4. Update the Merkle root value to match the new genesis block.

5. Remove any hardcoded seed nodes/IPs that are providing other nodes to connect to on startup. 

6. Disable checkpoints that expect blocks at certain heights to exist. 

7. Modify the ChainTxData structure to reflect the starting state using values from the new genesis block.

8. Change subsidy/reward parameters like the initial coin reward amount and halving interval schedule.

9. Recompile and run the new node software to integrate the custom genesis block attributes and initialization of the independent blockchain.

The key steps focus on replacing SAToshi's hardcoded genesis block values with the new customized ones defined through the genesis block generation. This establishes a independent initial state for the new blockchain.

 Here is a summary:

- The blockchain reward halving mechanism is defined by the GetBlockSubsidy function. It determines the reward amount based on the block height and a halving interval parameter. 

- The reward halves after every halving interval blocks, causing the total circulating supply to asymptotically approach the initial reward times the number of halving intervals. 

- Bitcoin is designed to have a total supply of about 21 million bitcoins through this halving mechanism.

- The proof-of-work target is a hash value that miners must meet or exceed when mining new blocks. It adjusts over time to aim for a 10-minute block time.

- Difficulty refers to how difficult it is to meet the target compared to the initial target. It is adjusted every 2,016 blocks based on the time it took to mine the previous 2,015 blocks.

- The GetNextWorkRequired function is responsible for recalculating the difficulty and target to keep block times close to the desired interval. 

- Coinbase maturity is set at 100 blocks to prevent spending newly mined coins until they are sufficiently deep in the chain to avoid reorgs. 

- The original Bitcoin block size was 1MB but Readercoin will utilize the segwit approach and measure block "weight" instead of size, allowing for larger blocks.

 Here is a summary of the key steps described:

- The src\consensus\consensus.h file sets the maximum block size to 1MB excluding witness data. After SegWit activation, weight parameters were defined to allow blocks up to theoretically 8MB. 

- BIPs (Bitcoin Improvement Proposals) are how new features are introduced to the Bitcoin protocol. Important early BIPs like BIP34/65/66 were checkpoints defined in chainparams.cpp.

- When creating a new chain, these BIP activation heights/hashes can be set from the genesis block. Parameters like the retargeting period and activation thresholds for soft forks are also specified. 

- The code was compiled and tested by running autogen.sh, configure, and make commands. This built the readercoind and readercoin-qt executables. 

- Graphical elements like the logo, icon, and splash screen were customized by editing files in the src/qt/res directory. The testnet background color was also changed. 

- The Bitcoin-Qt wallet interfaces could be redesigned by modifying the .ui dialog form files in src/qt/forms.

- Qt Creator IDE was used to import and modify the project. Both it and Qt Designer can be used to edit the GUI. 

- A Readercoin network was built by installing the software on two nodes (Node A and B), configuring them to connect to each other via addnode calls or in the readercoin.conf file, and verifying they were connected using getpeerinfo.

 Here is a summary of the key points:

- You can run RPC commands from the ReaderCoin GUI without using the terminal by accessing the debug window and console. 

- Mining is required to generate ReaderCoins since the nodes don't have any coins yet. Cpuminer can be used as a CPU miner with the coinbase address option to direct rewards. 

- Transactions can be sent once 50 blocks have been mined since coinbase maturity is set to 50. 

- An explorer like Iquidus provides a web interface to view the blockchain and transaction data. It needs to be configured and connected to the ReaderCoin node database. 

- The Iquidus sync script keeps the explorer in sync with new blocks from the node. Txindex needs to be enabled on the node for transaction data retrieval.

- An exchange like Peatio can be used to build a market for ReaderCoins to enable trading. 

- Key considerations in creating an altcoin include having a useful purpose/idea and not just doing it for financial motives. The goal should be improving on existing blockchain technology.

 Here is a summary:

The chapter provided an introduction to building a basic cryptocurrency by cloning Bitcoin. It aimed to increase understanding of the Bitcoin protocol and source code at a beginner level. A GitHub repository was shared that contains the code for a simple cryptocurrency called Readercoin. 

While only scratching the surface, it was an opportunity to learn more about how Bitcoin works under the hood. The chapter concluded the introductory excursion into Bitcoin. 

Moving forward, the next chapter will dive deeper into Ethereum, which is often referred to as Blockchain 2.0. Future chapters will cover topics like peer to peer auctions on Ethereum, decentralized applications using Truffle and Drizzle, blockchain-based futures systems, integrating blockchains into business, creating an initial coin offering (ICO), distributed storage with IPFS and Swarm, supply chains on Hyperledger, and implementing letters of credit on Hyperledger.