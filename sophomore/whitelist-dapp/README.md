# whitelist-dapp

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## requirements

Create a `.env` file

```
QUICKNODE_HTTP_URL="add-quicknode-http-provider-url-here"

PRIVATE_KEY="add-the-private-key-here"
```

## contrct deployment

1. Compile the contract:

```shell
whitelist-dapp % npm run compile

> whitelist-dapp@1.0.0 compile
> hardhat compile

Generating typings for: 1 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 6 typings!
Compiled 1 Solidity file successfully
```

2. Deploy the whitelist contract to goerli network

```shell
whitelist-dapp % npm run deploy:whitelist

> whitelist-dapp@1.0.0 deploy
> hardhat run scripts/deploy-whitelist.ts --network goerli

Whitelist Contract Address: xxx
```

3. Now add the whitelist contract address value to the `.env` file so we can use in the codebase, we add `NEXT_PUBLIC_` prefix so we can use it on the nextjs client

```
NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS=xxx
```

4. Recompile again

```shell
whitelist-dapp % npm run compile  

> whitelist-dapp@1.0.0 compile
> hardhat compile

Generating typings for: 15 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 44 typings!
Compiled 15 Solidity files successfully
```

5. Deploy the nft contract to goerli network

```shell
whitelist-dapp % npm run deploy:cryptodevs

> whitelist-dapp@1.0.0 deploy:cryptodevs
> hardhat run scripts/deploy-cryptodevs.ts --network goerli

Crypto Devs Contract Address: yyy
```

6. Now add the nft contract address value to the `.env` file so we can use in the codebase

```
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=yyy
```

7. Publish the code to github and deploy to vercel. Replace the `.env` file the value to point to our deployed app domain

```
METADATA_URL="https://learnweb3-whitelist-dapp-one.vercel.app/"
```

5. Deploy again the nft contract to goerli network so the metadata points to the deployed app domain

```shell
whitelist-dapp % npm run deploy:cryptodevs

> whitelist-dapp@1.0.0 deploy:cryptodevs
> hardhat run scripts/deploy-cryptodevs.ts --network goerli

Crypto Devs Contract Address: yyy
```


## frontend

It uses nextjs for the frontend, it requires to have compiled the contract in order to generate the Whitelist.json and use the `abi` from the generated file.

Execute `npm run dev` to start the client