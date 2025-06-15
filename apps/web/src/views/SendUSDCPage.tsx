import { useState } from 'react';
import { Spinner, BackButton } from '../components';
import { useBalance } from '../hooks';
import { validateSendForm, type ValidationErrors } from '../utils';
import { sendUSDCTransaction } from '../features';
import { TRANSACTION_SUCCESS_DELAY } from "@beepboop/constants";
import type { KernelAccount, KernelClient } from '../types';

interface SendUSDCPageProps {
  kernelAccount: KernelAccount;
  kernelClient: KernelClient;
  onBack: () => void;
}

export const SendUSDCPage = ({ kernelAccount, kernelClient, onBack }: SendUSDCPageProps) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [userOpHash, setUserOpHash] = useState("");
  const [userOpStatus, setUserOpStatus] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({
    recipient: "",
    amount: "",
  });

  const { balance: currentBalance } = useBalance(kernelAccount.address);

  const handleSendUSDC = async () => {
    const { isValid, errors: validationErrors } = validateSendForm(recipient, amount, currentBalance);
    setErrors(validationErrors);
    
    if (!isValid) return;
    
    setIsSending(true);
    setUserOpHash("");

    try {
      await sendUSDCTransaction({
        kernelAccount,
        kernelClient,
        recipient,
        amount,
        onStatusUpdate: setUserOpStatus,
        onHashUpdate: setUserOpHash,
      });

      setTimeout(() => {
        setRecipient("");
        setAmount("");
        setUserOpHash("");
        setUserOpStatus("");
        onBack();
      }, TRANSACTION_SUCCESS_DELAY);

    } catch (error) {
      console.error("Send transaction failed:", error);
      setUserOpStatus("❌ Transaction failed. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
        <div className="text-center mb-8">
          <BackButton onClick={onBack} />
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <span className="text-2xl">📤</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Send USDC</h1>
          <p className="text-gray-600">Transfer USDC to another wallet</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Available Balance</span>
            <span className="text-lg font-bold text-blue-600">${currentBalance} USDC</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
              Recipient Address
            </label>
            <input
              id="recipient"
              type="text"
              placeholder="0x..."
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-500 ${
                errors.recipient ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              disabled={isSending}
            />
            {errors.recipient && (
              <p className="mt-1 text-sm text-red-600">{errors.recipient}</p>
            )}
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount (USDC)
            </label>
            <div className="relative">
              <input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-500 ${
                  errors.amount ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500'
                }`}
                disabled={isSending}
              />
              <button
                onClick={() => setAmount(currentBalance)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-blue-500 hover:text-blue-700 font-medium"
                disabled={isSending}
              >
                MAX
              </button>
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
            )}
          </div>

          <button
            onClick={handleSendUSDC}
            disabled={isSending || !recipient.trim() || !amount.trim()}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSending ? (
              <>
                <Spinner />
                <span className="ml-2">Sending...</span>
              </>
            ) : (
              <>
                <span className="mr-2">📤</span>
                Send USDC
              </>
            )}
          </button>

          {userOpHash && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm">
                <p className="font-medium text-gray-900 mb-2">Transaction Status:</p>
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: userOpStatus
                  }}
                />
                {userOpHash && (
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">UserOp Hash:</p>
                    <p className="font-mono text-xs text-gray-800 break-all">{userOpHash}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-900 mb-2">Transaction Details</h3>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• Network: Sepolia Testnet</li>
              <li>• Gas fees: Sponsored by paymaster</li>
              <li>• Transaction is irreversible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};