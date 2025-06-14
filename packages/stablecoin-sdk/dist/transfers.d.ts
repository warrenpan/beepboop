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
export declare class TransferManager {
    private stablecoin;
    constructor(stablecoin?: Stablecoin);
    validateTransfer(recipient: string, amount: string, currentBalance: string): TransferValidation;
    createTransferCall(params: TransferParams): {
        to: string;
        value: bigint;
        data: string;
    };
    sendTransfer(kernelAccount: any, kernelClient: any, params: TransferParams): Promise<string>;
    waitForTransferConfirmation(kernelClient: any, userOpHash: string): Promise<any>;
    createJiffyScanUrl(userOpHash: string, network?: string): string;
    formatSuccessMessage(userOpHash: string): string;
}
