"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stablecoin = void 0;
const viem_1 = require("viem");
const constants_1 = require("@beepboop/constants");
class Stablecoin {
    constructor(config) {
        this.config = {
            contractAddress: constants_1.USDC_CONTRACT_ADDRESS,
            decimals: constants_1.USDC_DECIMALS,
            symbol: "USDC",
            ...config,
        };
    }
    getContractAddress() {
        return this.config.contractAddress;
    }
    getDecimals() {
        return this.config.decimals;
    }
    getSymbol() {
        return this.config.symbol;
    }
    formatBalance(balance) {
        return (0, viem_1.formatUnits)(balance, this.config.decimals);
    }
    parseAmount(amount) {
        return (0, viem_1.parseUnits)(amount, this.config.decimals);
    }
    encodeTransfer(params) {
        return (0, viem_1.encodeFunctionData)({
            abi: constants_1.USDC_ABI,
            functionName: "transfer",
            args: [params.to, this.parseAmount(params.amount)],
        });
    }
    createTransferCall(params) {
        return {
            to: this.config.contractAddress,
            value: BigInt(0),
            data: this.encodeTransfer(params),
        };
    }
}
exports.Stablecoin = Stablecoin;
