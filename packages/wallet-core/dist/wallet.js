"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(config = {}) {
        this.account = config.account;
        this.client = config.client;
    }
    setAccount(account) {
        this.account = account;
    }
    setClient(client) {
        this.client = client;
    }
    getAccount() {
        return this.account;
    }
    getClient() {
        return this.client;
    }
    getAddress() {
        return this.account?.address;
    }
    isReady() {
        return !!(this.account && this.client);
    }
    async sendTransaction(callData) {
        if (!this.client) {
            throw new Error('Wallet client not initialized');
        }
        return this.client.sendUserOperation({ callData });
    }
    async waitForTransactionReceipt(hash) {
        if (!this.client) {
            throw new Error('Wallet client not initialized');
        }
        return this.client.waitForUserOperationReceipt({ hash });
    }
}
exports.Wallet = Wallet;
