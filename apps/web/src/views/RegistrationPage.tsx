import { useState } from 'react';
import { Spinner, BackButton } from '../components';
import { registerWithPasskey } from '../features';
import type { KernelAccount, KernelClient } from '../types';

interface RegistrationPageProps {
  onBack: () => void;
  onSuccess: (account: KernelAccount | null, client: KernelClient | null) => void;
}

export const RegistrationPage = ({ onBack, onSuccess }: RegistrationPageProps) => {
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");

  const handlePasskeyRegister = async () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    setIsRegistering(true);
    
    try {
      const { kernelAccount, kernelClient } = await registerWithPasskey(username);
      setAccountAddress(kernelAccount.address);
      onSuccess(kernelAccount, kernelClient);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsRegistering(false);
    }
  };

  const handleOpenWallet = () => {
    onSuccess(null, null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
        <div className="text-center mb-8">
          <BackButton onClick={onBack} />
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Set up your secure passkey wallet</p>
        </div>

        {!accountAddress ? (
          <>
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="reg-username" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose a username
                </label>
                <input
                  id="reg-username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-500"
                  disabled={isRegistering}
                />
              </div>
            </div>

            <button
              onClick={handlePasskeyRegister}
              disabled={isRegistering}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isRegistering ? (
                <>
                  <Spinner />
                  <span className="ml-2">Creating Passkey...</span>
                </>
              ) : (
                <>
                  <span className="mr-2">🔑</span>
                  Create Passkey
                </>
              )}
            </button>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-medium text-blue-900 mb-2">What is a passkey?</h3>
              <p className="text-xs text-blue-700">
                A passkey uses your device&apos;s biometric authentication (fingerprint, face, etc.) 
                to securely access your wallet. No passwords needed!
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-4">Your secure wallet is ready to use</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-500 mb-1">Your wallet address:</p>
              <p className="font-mono text-sm text-gray-800 break-all">{accountAddress}</p>
            </div>

            <button
              onClick={handleOpenWallet}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
            >
              Open Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};