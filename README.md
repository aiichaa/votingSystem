# Blockchain-based voting system

This Application is the implementation of our paper, this is a proof-of-concept application and therefore cannot be used in a real life election. 

## Project Overview

![alt text](https://github.com/aiichaa/votingSystem/tree/master/captures/client-app.gif "Client Side")

## Dependencies
This project used a collection of technologies and tools, to run the application, you need to install the following dependencies:

1. [Node Package Manager](https://nodejs.org/en/) that comes with Node.js
2. [Truffle Framework](https://www.trufflesuite.com/) : it will allow us to build decentralized applications on the Ethereum blockchain, it comes with a suite of tools that allow writing smart contracts with Solidity programming language, test smart contracts and deploy them to the blockchain, develop client-side application.
3. [Ganache](http://truffleframework.com/ganache) : a local in-memoryblockchain. it come with 10 external accounts with addresses on the local Ethereum blockchain, each account with 100 fake ether.
4. [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) : a chrome extension, allow us to connect to the blockchain with local accounts.


## Project structure

* **contracts directory**: contains smart contracts, plus a Migration contract that handles migrations 
* **migrations directory**: contains migration files. migrations are similar to other web development frameworks that require migrations to change the state of a database. whenever a smart contract is deployed, we update the blockchain's state and therefore need a migration.
* **node_modules directory**: all the node dependecies.
* **test directory**: tests for smart contracts
* **truffle.js file**: main configuration file for the truffle project.

## Run Project
 * Clone the project
 ```
 git clone https://github.com/aiichaa/votingSystem.git
 ```
 * Install dependencies
  ```
  $ cd votingSystem
  $ npm install
  ```
 * Run Ganache GUI client in your machine, it will start with 10 accounts each with 100 ETH
 
 * Compile and Deploy Smart Contracts by running : 
 ```
 $ truffle migrate --reset
```
This will generate the build/contracts json files
* Run the Front End application with lite-server with command:
 ```
 $ npm run dev
```
This will open a new tab in your browser with url : http://localhost:3000
* Configure [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) will allow you to switch ganache accounts and validate transactions.
