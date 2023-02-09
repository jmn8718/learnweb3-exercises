import { BigNumber, Contract } from "ethers";
import { Provider } from "../types";
import {
  exchangeContractAbi,
  EXCHANGE_CONTRACT_ADDRESS,
  cryptoDevTokenContractAbi,
  TOKEN_CONTRACT_ADDRESS,
} from "../constants";

/**
 * getEtherBalance: Retrieves the ether balance of the user or the contract
 */
export const getEtherBalance = async (provider: Provider, address?: string, contract = false): Promise<BigNumber> => {
  let balance = BigNumber.from('0');
  try {
    // If the caller has set the `contract` boolean to true, retrieve the balance of
    // ether in the `exchange contract`, if it is set to false, retrieve the balance
    // of the user's address
    if (contract) {
      balance = await provider.getBalance(EXCHANGE_CONTRACT_ADDRESS);
    } else if (address) {
      balance = await provider.getBalance(address);
    }
  } catch (err) {
    console.error(err);
  }
  return balance;
};

/**
 * getCDTokensBalance: Retrieves the Crypto Dev tokens in the account
 * of the provided `address`
 */
export const getCDTokensBalance = async (provider: Provider, address: string) => {
  try {
    const tokenContract = new Contract(
      TOKEN_CONTRACT_ADDRESS,
      cryptoDevTokenContractAbi,
      provider
    );
    const balanceOfCryptoDevTokens = await tokenContract.balanceOf(address);
    return balanceOfCryptoDevTokens;
  } catch (err) {
    console.error(err);
  }
};

/**
 * getLPTokensBalance: Retrieves the amount of LP tokens in the account
 * of the provided `address`
 */
export const getLPTokensBalance = async (provider: Provider, address: string) => {
  try {
    const exchangeContract = new Contract(
      EXCHANGE_CONTRACT_ADDRESS,
      exchangeContractAbi,
      provider
    );
    const balanceOfLPTokens = await exchangeContract.balanceOf(address);
    return balanceOfLPTokens;
  } catch (err) {
    console.error(err);
  }
};

/**
 * getReserveOfCDTokens: Retrieves the amount of CD tokens in the
 * exchange contract address
 */
export const getReserveOfCDTokens = async (provider: Provider) => {
  try {
    const exchangeContract = new Contract(
      EXCHANGE_CONTRACT_ADDRESS,
      exchangeContractAbi,
      provider
    );
    const reserve = await exchangeContract.getReserve();
    return reserve;
  } catch (err) {
    console.error(err);
  }
};