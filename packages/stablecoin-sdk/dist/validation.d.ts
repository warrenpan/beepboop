export interface ValidationResult {
    isValid: boolean;
    error?: string;
}
export declare class ValidationUtils {
    static validateAddress(address: string): ValidationResult;
    static validateAmount(amount: string, maxAmount?: string): ValidationResult;
    static validateTransferForm(recipient: string, amount: string, balance: string): {
        recipient: string;
        amount: string;
        isValid: boolean;
    };
}
