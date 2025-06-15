export interface KernelAccount {
  address: string;
  encodeCalls: (calls: Array<{ to: string; value: bigint; data: string }>) => Promise<string>;
}

export interface KernelClient {
  sendUserOperation: (params: { callData: string }) => Promise<string>;
  waitForUserOperationReceipt: (params: { hash: string }) => Promise<{
    userOpHash: string;
    receipt: { transactionHash: string };
  }>;
}