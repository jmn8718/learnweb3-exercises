export { abi as whitelistContractAbi } from '../../artifacts/contracts/Whitelist.sol/Whitelist.json';
export { abi as cryptoDevsContractAbi } from '../../artifacts/contracts/CryptoDevs.sol/CryptoDevs.json';
export { abi as cryptoDevTokenContractAbi } from '../../artifacts/contracts/CryptoDevToken.sol/CryptoDevToken.json';
export { abi as cryptoDevNftMarketplaceContractAbi } from '../../artifacts/contracts/FakeNFTMarketplace.sol/FakeNFTMarketplace.json';
export { abi as cryptoDevDaoContractAbi } from '../../artifacts/contracts/CryptoDevsDAO.sol/CryptoDevsDAO.json';

export const WHITELIST_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS!;
export const NFT_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS!;
export const TOKEN_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS!;
export const NFT_MARKETPLACE_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_CRYPTODEVS_NFT_MARKETPLACE_CONTRACT_ADDRESS!;
export const DAO_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_CRYPTODEVS_DAO_CONTRACT_ADDRESS!;
