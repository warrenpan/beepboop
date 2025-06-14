"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferManager = void 0;
const viem_1 = require("viem");
const stablecoin_1 = require("./stablecoin");
class TransferManager {
    constructor(stablecoin) {
        this.stablecoin = stablecoin || new stablecoin_1.Stablecoin();
    }
    validateTransfer(recipient, amount, currentBalance) {
        const errors = { recipient: "", amount: "" };
        let isValid = true;
        if (!recipient.trim()) {
            errors.recipient = "Recipient address is required";
            isValid = false;
        }
        else if (!(0, viem_1.isAddress)(recipient)) {
            errors.recipient = "Invalid Ethereum address";
            isValid = false;
        }
        if (!amount.trim()) {
            errors.amount = "Amount is required";
            isValid = false;
        }
        else {
            const numAmount = parseFloat(amount);
            if (isNaN(numAmount) || numAmount <= 0) {
                errors.amount = "Amount must be greater than 0";
                isValid = false;
            }
            else if (numAmount > parseFloat(currentBalance)) {
                errors.amount = "Insufficient balance";
                isValid = false;
            }
        }
        return { isValid, errors };
    }
    createTransferCall(params) {
        return this.stablecoin.createTransferCall(params);
    }
    async sendTransfer(kernelAccount, kernelClient, params) {
        console.log(`Sending ${params.amount} ${this.stablecoin.getSymbol()} to ${params.to}`);
        const transferCall = this.createTransferCall(params);
        const userOpHash = await kernelClient.sendUserOperation({
            callData: await kernelAccount.encodeCalls([transferCall]),
        });
        console.log("UserOp submitted:", userOpHash);
        return userOpHash;
    }
    async waitForTransferConfirmation(kernelClient, userOpHash) {
        const receipt = await kernelClient.waitForUserOperationReceipt({
            hash: userOpHash,
        });
        console.log("UserOp confirmed:", receipt.userOpHash);
        console.log("TxHash:", receipt.receipt.transactionHash);
        return receipt;
    }
    createJiffyScanUrl(userOpHash, network = 'sepolia') {
        return `https://jiffyscan.xyz/userOpHash/${userOpHash}?network=${network}`;
    }
    formatSuccessMessage(userOpHash) {
        const jiffyScanUrl = this.createJiffyScanUrl(userOpHash);
        return `✅ Transaction confirmed! <a href="${jiffyScanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">View on JiffyScan</a>`;
    }
}
exports.TransferManager = TransferManager;
