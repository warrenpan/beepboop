import { formatUnits, parseUnits, encodeFunctionData } from "viem";
import { USDC_CONTRACT_ADDRESS, USDC_ABI, USDC_DECIMALS } from "@beepboop/constants";

export interface StablecoinConfig {
  contractAddress: string;
  decimals: number;
  symbol: string;
}

export interface TransferParams {
  to: string;
  amount: string;
}

export class Stablecoin {
  private config: StablecoinConfig;

  constructor(config?: Partial<StablecoinConfig>) {
    this.config = {
      contractAddress: USDC_CONTRACT_ADDRESS,
      decimals: USDC_DECIMALS,
      symbol: "USDC",
      ...config,
    };
  }

  getContractAddress(): string {
    return this.config.contractAddress;
  }

  getDecimals(): number {
    return this.config.decimals;
  }

  getSymbol(): string {
    return this.config.symbol;
  }

  formatBalance(balance: bigint): string {
    return formatUnits(balance, this.config.decimals);
  }

  parseAmount(amount: string): bigint {
    return parseUnits(amount, this.config.decimals);
  }

  encodeTransfer(params: TransferParams): string {
    return encodeFunctionData({
      abi: USDC_ABI,
      functionName: "transfer",
      args: [params.to as `0x${string}`, this.parseAmount(params.amount)],
    });
  }

  createTransferCall(params: TransferParams) {
    return {
      to: this.config.contractAddress,
      value: BigInt(0),
      data: this.encodeTransfer(params),
    };
  }
}