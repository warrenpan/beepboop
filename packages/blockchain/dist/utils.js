"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainUtils = void 0;
const viem_1 = require("viem");
const sdk_1 = require("@zerodev/sdk");
const constants_1 = require("@beepboop/constants");
class BlockchainUtils {
    static createPublicClient() {
        return (0, viem_1.createPublicClient)({
            transport: (0, viem_1.http)(),
            chain: constants_1.CHAIN,
        });
    }
    static createPaymasterClient() {
        return (0, sdk_1.createZeroDevPaymasterClient)({
            chain: constants_1.CHAIN,
            transport: (0, viem_1.http)(constants_1.PAYMASTER_URL),
        });
    }
    static async getPaymasterData(userOperation) {
        const paymasterClient = BlockchainUtils.createPaymasterClient();
        return paymasterClient.sponsorUserOperation({
            userOperation,
        });
    }
}
exports.BlockchainUtils = BlockchainUtils;
