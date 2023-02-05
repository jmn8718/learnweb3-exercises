import { ethers } from "hardhat";

// Address of the Whitelist Contract that you deployed
const WHITELIST_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS!;
// URL to extract Metadata for a Crypto Dev NFT
const METADATA_URL: string = process.env.METADATA_URL!;

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    METADATA_URL,
    WHITELIST_CONTRACT_ADDRESS
  );

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
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
