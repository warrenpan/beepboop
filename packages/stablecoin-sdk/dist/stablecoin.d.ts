export interface StablecoinConfig {
    contractAddress: string;
    decimals: number;
    symbol: string;
}
export interface TransferParams {
    to: string;
    amount: string;
}
export declare class Stablecoin {
    private config;
    constructor(config?: Partial<StablecoinConfig>);
    getContractAddress(): string;
    getDecimals(): number;
    getSymbol(): string;
    formatBalance(balance: bigint): string;
    parseAmount(amount: string): bigint;
    encodeTransfer(params: TransferParams): string;
    createTransferCall(params: TransferParams): {
        to: string;
        value: bigint;
        data: string;
    };
}
