"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceManager = void 0;
const constants_1 = require("@beepboop/constants");
const stablecoin_1 = require("./stablecoin");
class BalanceManager {
    constructor(stablecoin) {
        this.stablecoin = stablecoin || new stablecoin_1.Stablecoin();
    }
    async getBalance(publicClient, address) {
        try {
            console.log("Fetching USDC balance for:", address);
            const balance = await publicClient.readContract({
                address: this.stablecoin.getContractAddress(),
                abi: constants_1.USDC_ABI,
                functionName: "balanceOf",
                args: [address],
            });
            const formattedBalance = this.stablecoin.formatBalance(balance);
            console.log("USDC Balance:", formattedBalance);
            return parseFloat(formattedBalance).toFixed(2);
        }
        catch (error) {
            console.error("Error fetching USDC balance:", error);
            throw error;
        }
    }
    async getFormattedBalance(publicClient, address) {
        const balance = await this.getBalance(publicClient, address);
        return `$${balance} ${this.stablecoin.getSymbol()}`;
    }
    formatBalanceForDisplay(balance) {
        return `$${parseFloat(balance).toFixed(2)}`;
    }
}
exports.BalanceManager = BalanceManager;
