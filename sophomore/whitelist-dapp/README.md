# whitelist-dapp

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## requirements

Create a `.env` file

```
QUICKNODE_HTTP_URL="add-quicknode-http-provider-url-here"
PRIVATE_KEY="add-the-private-key-here"

NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS=xxx
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=yyy

METADATA_URL="https://learnweb3-whitelist-dapp-one.vercel.app/api/"
```

## dapp requirements

- [Part I](https://learnweb3.io/courses/c1d7081b-63a9-4c6e-b35c-9fcbbad418b2/lessons/acd04999-1230-4533-b6de-6b4e4978914c)

- [ ] Whitelist access should be given to the first 10 users for free who want to get in.
- [ ] There should be a website where people can go and enter into the whitelist.

- [Part II](https://learnweb3.io/courses/c1d7081b-63a9-4c6e-b35c-9fcbbad418b2/lessons/7411199b-6463-4ffa-803d-80afa30585ec)

- [ ] There should only exist 20 Crypto Dev NFT's and each one of them should be unique.
- [ ] User's should be able to mint only 1 NFT with one transaction.
- [ ] Whitelisted users, should have a 5 min presale period before the actual sale where they are guaranteed 1 NFT per transaction.
- [ ] There should be a website for your NFT Collection.

- [Part III](https://learnweb3.io/courses/c1d7081b-63a9-4c6e-b35c-9fcbbad418b2/lessons/502e4f94-4197-4d51-a654-bac7112cd2fb)

- [ ] There should be a max of `10,000 CD` tokens.
- [ ] Every `Crypto Dev NFT` holder should get 10 tokens for free but they would have to pay the gas fees.
- [ ] The price of one CD at the time of ICO should be `0.001 ether`.
- [ ] There should be a website that users can visit for the ICO.

## contract deployment

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
METADATA_URL="https://learnweb3-whitelist-dapp-one.vercel.app/api/"
```

8. Deploy again the nft contract to goerli network so the metadata points to the deployed app domain

```shell
whitelist-dapp % npm run deploy:cryptodevs

> whitelist-dapp@1.0.0 deploy:cryptodevs
> hardhat run scripts/deploy-cryptodevs.ts --network goerli

Crypto Devs Contract Address: yyy
```

9. Deploy CryptoDevToekn to goerli network

```shell
whitelist-dapp % npm run deploy:cryptodevtoken

> whitelist-dapp@1.0.0 deploy:cryptodevtoken
> hardhat run scripts/deploy-cryptodevtoken.ts --network goerli

Crypto Devs Token Contract Address: zzz
```

10. Now add the token contract address value to the `.env` file so we can use in the codebase

```
NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS=zzz
```


## frontend

It uses nextjs for the frontend, it requires to have compiled the contract in order to generate the Whitelist.json and use the `abi` from the generated file.

Execute `npm run dev` to start the client.

## NFT

Once you have deployed the app and joined and minted a NFT, you will be able to verify it on opensea, visit `https://testnets.opensea.io/assets/goerli/zzz/1`, and replace `zzz` with your nft smartcontract. You can check my nft [here](https://testnets.opensea.io/assets/goerli/0xfB43253344B05aB408D82B0EF52dCb82Ca9c92FE/1)