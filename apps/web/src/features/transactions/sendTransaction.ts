import { encodeFunctionData, parseUnits } from "viem";
import {
  USDC_CONTRACT_ADDRESS,
  USDC_ABI,
  USDC_DECIMALS,
} from "@beepboop/constants";
import type { KernelAccount, KernelClient } from '../../types';

export interface SendTransactionParams {
  kernelAccount: KernelAccount;
  kernelClient: KernelClient;
  recipient: string;
  amount: string;
  onStatusUpdate: (status: string) => void;
  onHashUpdate: (hash: string) => void;
}

export const sendUSDCTransaction = async ({
  kernelAccount,
  kernelClient,
  recipient,
  amount,
  onStatusUpdate,
  onHashUpdate,
}: SendTransactionParams) => {
  console.log(`Sending ${amount} USDC to ${recipient}`);
  onStatusUpdate("Sending USDC...");

  const userOpHash = await kernelClient.sendUserOperation({
    callData: await kernelAccount.encodeCalls([
      {
        to: USDC_CONTRACT_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: USDC_ABI,
          functionName: "transfer",
          args: [recipient as `0x${string}`, parseUnits(amount, USDC_DECIMALS)],
        }),
      },
    ]),
  });

  console.log("UserOp submitted:", userOpHash);
  onHashUpdate(userOpHash);
  onStatusUpdate("Transaction submitted, waiting for confirmation...");

  const receipt = await kernelClient.waitForUserOperationReceipt({
    hash: userOpHash,
  });

  console.log("UserOp confirmed:", receipt.userOpHash);
  console.log("TxHash:", receipt.receipt.transactionHash);
  
  const successMessage = `✅ Transaction confirmed! <a href="https://jiffyscan.xyz/userOpHash/${userOpHash}?network=sepolia" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">View on JiffyScan</a>`;
  onStatusUpdate(successMessage);

  return { userOpHash, receipt };
};