import { USDC_CONTRACT_ADDRESS, USDC_ABI } from "@beepboop/constants";
import { Stablecoin } from "./stablecoin";

export interface BalanceQuery {
  address: string;
  contractAddress?: string;
}

export class BalanceManager {
  private stablecoin: Stablecoin;

  constructor(stablecoin?: Stablecoin) {
    this.stablecoin = stablecoin || new Stablecoin();
  }

  async getBalance(publicClient: any, address: string): Promise<string> {
    try {
      console.log("Fetching USDC balance for:", address);
      
      const balance = await publicClient.readContract({
        address: this.stablecoin.getContractAddress(),
        abi: USDC_ABI,
        functionName: "balanceOf",
        args: [address],
      });

      const formattedBalance = this.stablecoin.formatBalance(balance);
      console.log("USDC Balance:", formattedBalance);
      
      return parseFloat(formattedBalance).toFixed(2);
    } catch (error) {
      console.error("Error fetching USDC balance:", error);
      throw error;
    }
  }

  async getFormattedBalance(publicClient: any, address: string): Promise<string> {
    const balance = await this.getBalance(publicClient, address);
    return `$${balance} ${this.stablecoin.getSymbol()}`;
  }

  formatBalanceForDisplay(balance: string): string {
    return `$${parseFloat(balance).toFixed(2)}`;
  }
}