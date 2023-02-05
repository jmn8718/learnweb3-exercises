# whitelist-dapp

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## requirements

Create a `.env` file

```
QUICKNODE_HTTP_URL="add-quicknode-http-provider-url-here"

PRIVATE_KEY="add-the-private-key-here"
```

## contrct deployment

Compile the contract:

```shell
whitelist-dapp % npm run compile

> whitelist-dapp@1.0.0 compile
> hardhat compile

Generating typings for: 1 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 6 typings!
Compiled 1 Solidity file successfully
```

Deploy the contract to goerli network

```shell
whitelist-dapp % npm run deploy

> whitelist-dapp@1.0.0 deploy
> hardhat run scripts/deploy.ts --network goerli

Whitelist Contract Address: xxx
```

Now add the whitelist contract address value to the `.env` file so we can use in the nextjs client

```
NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS=xxx
```

## frontend

It uses nextjs for the frontend, it requires to have compiled the contract in order to generate the Whitelist.json and use the `abi` from the generated file.

Execute `npm run dev` to start the client