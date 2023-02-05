import { abi as contractAbi } from '../../artifacts/contracts/Whitelist.sol/Whitelist.json';

export const WHITELIST_CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS!;
export const abi = contractAbi;
