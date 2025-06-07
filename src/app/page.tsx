"use client";

import {
  createKernelAccount,
  createKernelAccountClient,
  createZeroDevPaymasterClient,
} from "@zerodev/sdk";
import {
  PasskeyValidatorContractVersion,
  WebAuthnMode,
  toPasskeyValidator,
  toWebAuthnKey,
} from "@zerodev/passkey-validator";
import { getEntryPoint, KERNEL_V3_1 } from "@zerodev/sdk/constants";
import React, { useState, useEffect } from 'react';
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { ENTRYPOINT_ADDRESS_V07_TYPE } from "permissionless/types"

// ZeroDev configuration
//const projectId = process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID || "b4bb59f8-71ab-45d7-b225-3b3be4e39db0";
const BUNDLER_URL =
    "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111"
const PAYMASTER_URL =
    "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111"
const PASSKEY_SERVER_URL =
    "https://passkeys.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0"
const CHAIN = sepolia
const entryPoint = getEntryPoint("0.7");
const kernelVersion = KERNEL_V3_1;

const contractAddress = "0x34bE7f35132E97915633BC1fc020364EA5134863"
const contractABI = parseAbi([
    "function mint(address _to) public",
    "function balanceOf(address owner) external view returns (uint256 balance)"
])

const publicClient = createPublicClient({
    transport: http(BUNDLER_URL)
})

let kernelAccount: KernelSmartAccount<ENTRYPOINT_ADDRESS_V07_TYPE>
let kernelClient: any

const BeepBoopWallet = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'register', 'login', 'wallet'
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRegister = () => {
    setCurrentPage('register');
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    // TODO: Implement passkey login
    console.log("Logging in");
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false);
      alert("Login successful! (Demo)");
    }, 2000);
  };

  // Spinner component for loading states
  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Registration Page Component
  const RegistrationPage = () => {
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
        // TODO: Integrate ZeroDev passkey registration
        console.log("Creating passkey for username:", username);
        
        // Simulate passkey creation and account setup
        setTimeout(() => {
          const mockAddress = "0x" + Math.random().toString(16).substr(2, 40);
          setAccountAddress(mockAddress);
          setIsRegistering(false);
          alert("Passkey created successfully! Account ready.");
        }, 3000);
        
      } catch (error) {
        console.error("Registration failed:", error);
        setIsRegistering(false);
        alert("Registration failed. Please try again.");
      }
    };

    const goBack = () => {
      setCurrentPage('welcome');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={goBack}
              className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back
            </button>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">Set up your secure passkey wallet</p>
          </div>

          {!accountAddress ? (
            <>
              {/* Username Input */}
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

              {/* Create Passkey Button */}
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

              {/* Info Section */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-900 mb-2">What is a passkey?</h3>
                <p className="text-xs text-blue-700">
                  A passkey uses your device's biometric authentication (fingerprint, face, etc.) 
                  to securely access your wallet. No passwords needed!
                </p>
              </div>
            </>
          ) : (
            /* Success State */
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
                onClick={() => setCurrentPage('wallet')}
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

  // Welcome Page Component
  const WelcomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">beepboop</h1>
          <p className="text-gray-600">Your secure stablecoin wallet</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleRegister}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Register
          </button>

          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoggingIn ? (
              <>
                <Spinner />
                <span className="ml-2">Signing In...</span>
              </>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </div>
    </div>
  );

  // Render current page
  if (currentPage === 'register') {
    return <RegistrationPage />;
  }

  return <WelcomePage />;
};

export default BeepBoopWallet;