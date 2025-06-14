"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroDevClient = void 0;
const sdk_1 = require("@zerodev/sdk");
const viem_1 = require("viem");
const constants_1 = require("@beepboop/constants");
const utils_1 = require("./utils");
class ZeroDevClient {
    static createKernelAccountClient(config) {
        return (0, sdk_1.createKernelAccountClient)({
            account: config.account,
            chain: constants_1.CHAIN,
            bundlerTransport: (0, viem_1.http)(constants_1.BUNDLER_URL),
            paymaster: {
                getPaymasterData: utils_1.BlockchainUtils.getPaymasterData,
            },
        });
    }
    static async createKernelAccount(publicClient, config) {
        return (0, sdk_1.createKernelAccount)(publicClient, config);
    }
}
exports.ZeroDevClient = ZeroDevClient;
