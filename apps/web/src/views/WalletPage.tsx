import { useBalance } from '../hooks';
import { USDC_CONTRACT_ADDRESS } from "@beepboop/constants";
import type { KernelAccount } from '../types';

interface WalletPageProps {
  kernelAccount: KernelAccount;
  onSendUSDC: () => void;
  onSignOut: () => void;
}

export const WalletPage = ({ kernelAccount, onSendUSDC, onSignOut }: WalletPageProps) => {
  const { balance, isLoading, refetch } = useBalance(kernelAccount.address);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Wallet</h1>
          <p className="text-gray-600">Welcome to your secure stablecoin wallet</p>
        </div>

        {kernelAccount && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-1">Wallet Address:</p>
            <p className="font-mono text-sm text-gray-800 break-all">{kernelAccount.address}</p>
          </div>
        )}

        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">USDC Balance</span>
                {isLoading && (
                  <div className="ml-2">
                    <svg className="animate-spin h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-600">${balance}</span>
                <button
                  onClick={refetch}
                  disabled={isLoading}
                  className="ml-2 p-1 text-blue-500 hover:text-blue-700 disabled:opacity-50"
                  title="Refresh balance"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-2 text-xs text-gray-500">
              Sepolia Testnet • Contract: {USDC_CONTRACT_ADDRESS.slice(0, 8)}...
            </div>
          </div>

          <button
            onClick={onSendUSDC}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
          >
            Send USDC
          </button>

          <button
            onClick={() => alert("Receive functionality coming soon!")}
            className="w-full px-4 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Receive USDC
          </button>
        </div>

        <button
          onClick={onSignOut}
          className="w-full mt-6 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};