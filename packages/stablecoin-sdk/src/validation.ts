import { isAddress } from "viem";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class ValidationUtils {
  static validateAddress(address: string): ValidationResult {
    if (!address.trim()) {
      return { isValid: false, error: "Address is required" };
    }
    
    if (!isAddress(address)) {
      return { isValid: false, error: "Invalid Ethereum address" };
    }
    
    return { isValid: true };
  }

  static validateAmount(amount: string, maxAmount?: string): ValidationResult {
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

  static validateTransferForm(recipient: string, amount: string, balance: string) {
    const recipientValidation = this.validateAddress(recipient);
    const amountValidation = this.validateAmount(amount, balance);

    return {
      recipient: recipientValidation.error || "",
      amount: amountValidation.error || "",
      isValid: recipientValidation.isValid && amountValidation.isValid,
    };
  }
}