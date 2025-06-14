export interface WalletAccount {
    address: string;
    encodeCalls: (calls: any[]) => Promise<string>;
}
export interface WalletClient {
    sendUserOperation: (userOp: any) => Promise<string>;
    waitForUserOperationReceipt: (params: {
        hash: string;
    }) => Promise<any>;
}
export interface WalletConfig {
    account?: WalletAccount;
    client?: WalletClient;
}
export declare class Wallet {
    private account?;
    private client?;
    constructor(config?: WalletConfig);
    setAccount(account: WalletAccount): void;
    setClient(client: WalletClient): void;
    getAccount(): WalletAccount | undefined;
    getClient(): WalletClient | undefined;
    getAddress(): string | undefined;
    isReady(): boolean;
    sendTransaction(callData: string): Promise<string>;
    waitForTransactionReceipt(hash: string): Promise<any>;
}
