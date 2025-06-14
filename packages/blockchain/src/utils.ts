import { createPublicClient, http } from "viem";
import { createZeroDevPaymasterClient } from "@zerodev/sdk";
import { CHAIN, PAYMASTER_URL } from "@beepboop/constants";

export interface BlockchainConfig {
  chain: typeof CHAIN;
  bundlerUrl: string;
  paymasterUrl: string;
  passkeyServerUrl: string;
}

export class BlockchainUtils {
  static createPublicClient() {
    return createPublicClient({
      transport: http(),
      chain: CHAIN,
    });
  }

  static createPaymasterClient() {
    return createZeroDevPaymasterClient({
      chain: CHAIN,
      transport: http(PAYMASTER_URL),
    });
  }

  static async getPaymasterData(userOperation: any) {
    const paymasterClient = BlockchainUtils.createPaymasterClient();
    return paymasterClient.sponsorUserOperation({
      userOperation,
    });
  }
}