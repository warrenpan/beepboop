"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
const constants_1 = require("@beepboop/constants");
class AccountManager {
    static async createKernelAccount(publicClient, validator) {
        const config = {
            entryPoint: constants_1.ENTRY_POINT,
            kernelVersion: constants_1.KERNEL_VERSION,
            plugins: {
                sudo: validator,
            },
        };
        // This would be imported from @zerodev/sdk in the actual implementation
        // For now, we'll return the config for external use
        return { config, publicClient };
    }
    static getDefaultAccountConfig(validator) {
        return {
            entryPoint: constants_1.ENTRY_POINT,
            kernelVersion: constants_1.KERNEL_VERSION,
            plugins: {
                sudo: validator,
            },
        };
    }
}
exports.AccountManager = AccountManager;
