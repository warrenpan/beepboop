export interface UserOperation {
  callData: string;
}

export interface UserOpReceipt {
  userOpHash: string;
  receipt: {
    transactionHash: string;
  };
}

export class UserOperationUtils {
  static formatUserOpHash(userOpHash: string): string {
    return userOpHash;
  }

  static createJiffyScanUrl(userOpHash: string, network: string = 'sepolia'): string {
    return `https://jiffyscan.xyz/userOpHash/${userOpHash}?network=${network}`;
  }

  static async waitForUserOperationReceipt(kernelClient: any, hash: string): Promise<UserOpReceipt> {
    return kernelClient.waitForUserOperationReceipt({ hash });
  }

  static async sendUserOperation(kernelClient: any, userOp: UserOperation): Promise<string> {
    return kernelClient.sendUserOperation(userOp);
  }
}