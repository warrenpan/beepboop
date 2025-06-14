import { createKernelAccountClient, createKernelAccount } from "@zerodev/sdk";
import { http } from "viem";
import { CHAIN, BUNDLER_URL } from "@beepboop/constants";
import { BlockchainUtils } from "./utils";

export interface KernelClientConfig {
  account: any;
}

export class ZeroDevClient {
  static createKernelAccountClient(config: KernelClientConfig) {
    return createKernelAccountClient({
      account: config.account,
      chain: CHAIN,
      bundlerTransport: http(BUNDLER_URL),
      paymaster: {
        getPaymasterData: BlockchainUtils.getPaymasterData,
      },
    });
  }

  static async createKernelAccount(publicClient: any, config: { entryPoint: any; kernelVersion: any; plugins: any }) {
    return createKernelAccount(publicClient, config);
  }
}