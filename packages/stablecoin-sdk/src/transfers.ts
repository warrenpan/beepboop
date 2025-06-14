import { isAddress } from "viem";
import { Stablecoin, TransferParams } from "./stablecoin";

export interface TransferValidation {
  isValid: boolean;
  errors: {
    recipient: string;
    amount: string;
  };
}

export interface TransferResult {
  userOpHash: string;
  receipt?: any;
}

export class TransferManager {
  private stablecoin: Stablecoin;

  constructor(stablecoin?: Stablecoin) {
    this.stablecoin = stablecoin || new Stablecoin();
  }

  validateTransfer(recipient: string, amount: string, currentBalance: string): TransferValidation {
    const errors = { recipient: "", amount: "" };
    let isValid = true;

    if (!recipient.trim()) {
      errors.recipient = "Recipient address is required";
      isValid = false;
    } else if (!isAddress(recipient)) {
      errors.recipient = "Invalid Ethereum address";
      isValid = false;
    }

    if (!amount.trim()) {
      errors.amount = "Amount is required";
      isValid = false;
    } else {
      const numAmount = parseFloat(amount);
      if (isNaN(numAmount) || numAmount <= 0) {
        errors.amount = "Amount must be greater than 0";
        isValid = false;
      } else if (numAmount > parseFloat(currentBalance)) {
        errors.amount = "Insufficient balance";
        isValid = false;
      }
    }

    return { isValid, errors };
  }

  createTransferCall(params: TransferParams) {
    return this.stablecoin.createTransferCall(params);
  }

  async sendTransfer(kernelAccount: any, kernelClient: any, params: TransferParams): Promise<string> {
    console.log(`Sending ${params.amount} ${this.stablecoin.getSymbol()} to ${params.to}`);

    const transferCall = this.createTransferCall(params);
    
    const userOpHash = await kernelClient.sendUserOperation({
      callData: await kernelAccount.encodeCalls([transferCall]),
    });

    console.log("UserOp submitted:", userOpHash);
    return userOpHash;
  }

  async waitForTransferConfirmation(kernelClient: any, userOpHash: string): Promise<any> {
    const receipt = await kernelClient.waitForUserOperationReceipt({
      hash: userOpHash,
    });

    console.log("UserOp confirmed:", receipt.userOpHash);
    console.log("TxHash:", receipt.receipt.transactionHash);
    
    return receipt;
  }

  createJiffyScanUrl(userOpHash: string, network: string = 'sepolia'): string {
    return `https://jiffyscan.xyz/userOpHash/${userOpHash}?network=${network}`;
  }

  formatSuccessMessage(userOpHash: string): string {
    const jiffyScanUrl = this.createJiffyScanUrl(userOpHash);
    return `✅ Transaction confirmed! <a href="${jiffyScanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">View on JiffyScan</a>`;
  }
}