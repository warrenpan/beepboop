"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationUtils = void 0;
class UserOperationUtils {
    static formatUserOpHash(userOpHash) {
        return userOpHash;
    }
    static createJiffyScanUrl(userOpHash, network = 'sepolia') {
        return `https://jiffyscan.xyz/userOpHash/${userOpHash}?network=${network}`;
    }
    static async waitForUserOperationReceipt(kernelClient, hash) {
        return kernelClient.waitForUserOperationReceipt({ hash });
    }
    static async sendUserOperation(kernelClient, userOp) {
        return kernelClient.sendUserOperation(userOp);
    }
}
exports.UserOperationUtils = UserOperationUtils;
