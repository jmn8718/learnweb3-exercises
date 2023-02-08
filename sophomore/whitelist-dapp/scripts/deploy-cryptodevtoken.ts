import { ethers } from "hardhat";

// Address of the Crypto Devs NFT contract that you deployed
const CRYPTO_DEVS_NFT_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS!;

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  // deploy the contract
  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );

  await deployedCryptoDevsTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Crypto Devs Token Contract Address:",
    deployedCryptoDevsTokenContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
