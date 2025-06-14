export interface UserOperation {
    callData: string;
}
export interface UserOpReceipt {
    userOpHash: string;
    receipt: {
        transactionHash: string;
    };
}
export declare class UserOperationUtils {
    static formatUserOpHash(userOpHash: string): string;
    static createJiffyScanUrl(userOpHash: string, network?: string): string;
    static waitForUserOperationReceipt(kernelClient: any, hash: string): Promise<UserOpReceipt>;
    static sendUserOperation(kernelClient: any, userOp: UserOperation): Promise<string>;
}
