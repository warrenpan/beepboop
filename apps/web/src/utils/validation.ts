import { isAddress } from "viem";

export interface ValidationErrors {
  recipient: string;
  amount: string;
}

export const validateSendForm = (
  recipient: string,
  amount: string,
  currentBalance: string
): { isValid: boolean; errors: ValidationErrors } => {
  const errors: ValidationErrors = { recipient: "", amount: "" };
  let isValid = true;

  if (!recipient.trim()) {
    errors.recipient = "Recipient address is required";
    isValid = false;
  } else if (!isAddress(recipient)) {
    errors.recipient = "Invalid Ethereum address";
    isValid = false;
  }

  if (!amount.trim()) {
    errors.amount = "Amount is required";
    isValid = false;
  } else {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      errors.amount = "Amount must be greater than 0";
      isValid = false;
    } else if (numAmount > parseFloat(currentBalance)) {
      errors.amount = "Insufficient balance";
      isValid = false;
    }
  }

  return { isValid, errors };
};