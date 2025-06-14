"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = void 0;
const viem_1 = require("viem");
class ValidationUtils {
    static validateAddress(address) {
        if (!address.trim()) {
            return { isValid: false, error: "Address is required" };
        }
        if (!(0, viem_1.isAddress)(address)) {
            return { isValid: false, error: "Invalid Ethereum address" };
        }
        return { isValid: true };
    }
    static validateAmount(amount, maxAmount) {
        if (!amount.trim()) {
            return { isValid: false, error: "Amount is required" };
        }
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount)) {
            return { isValid: false, error: "Amount must be a valid number" };
        }
        if (numAmount <= 0) {
            return { isValid: false, error: "Amount must be greater than 0" };
        }
        if (maxAmount && numAmount > parseFloat(maxAmount)) {
            return { isValid: false, error: "Insufficient balance" };
        }
        return { isValid: true };
    }
    static validateTransferForm(recipient, amount, balance) {
        const recipientValidation = this.validateAddress(recipient);
        const amountValidation = this.validateAmount(amount, balance);
        return {
            recipient: recipientValidation.error || "",
            amount: amountValidation.error || "",
            isValid: recipientValidation.isValid && amountValidation.isValid,
        };
    }
}
exports.ValidationUtils = ValidationUtils;
