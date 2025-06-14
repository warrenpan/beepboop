import { Stablecoin } from "./stablecoin";
export interface BalanceQuery {
    address: string;
    contractAddress?: string;
}
export declare class BalanceManager {
    private stablecoin;
    constructor(stablecoin?: Stablecoin);
    getBalance(publicClient: any, address: string): Promise<string>;
    getFormattedBalance(publicClient: any, address: string): Promise<string>;
    formatBalanceForDisplay(balance: string): string;
}
