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
import { createPublicClient, http, formatUnits, parseAbi, parseUnits, encodeFunctionData, isAddress } from "viem";
import { sepolia } from "viem/chains";

// ZeroDev configuration - Replace with your actual project ID
const BUNDLER_URL = "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111";
const PAYMASTER_URL = "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111";
const PASSKEY_SERVER_URL = "https://passkeys.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0";

const CHAIN = sepolia;
const entryPoint = getEntryPoint("0.7");
const kernelVersion = KERNEL_V3_1;

// USDC contract on Sepolia testnet
const USDC_CONTRACT_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Sepolia USDC
const USDC_ABI = parseAbi([
  "function balanceOf(address owner) external view returns (uint256)",
  "function decimals() external view returns (uint8)",
  "function symbol() external view returns (string)",
  "function transfer(address to, uint256 amount) external returns (bool)",
]);

const publicClient = createPublicClient({
  transport: http(),
  chain: CHAIN,
});

let kernelAccount: any;
let kernelClient: any;

const BeepBoopWallet = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'register', 'login', 'wallet', 'send'
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
    
    try {
      console.log("Attempting passkey login");
      
      // Create WebAuthn key for login
      const webAuthnKey = await toWebAuthnKey({
        passkeyName: "beepboop-wallet", // Use a consistent name for login
        passkeyServerUrl: PASSKEY_SERVER_URL,
        mode: WebAuthnMode.Login,
      });

      // Create passkey validator
      const passkeyValidator = await toPasskeyValidator(publicClient, {
        webAuthnKey,
        kernelVersion,
        entryPoint,
        validatorContractVersion: PasskeyValidatorContractVersion.V0_0_2,
      });

      // Create kernel account
      kernelAccount = await createKernelAccount(publicClient, {
        entryPoint,
        kernelVersion,
        plugins: {
          sudo: passkeyValidator,
        },
      });

      // Create kernel client with paymaster
      kernelClient = createKernelAccountClient({
        account: kernelAccount,
        chain: CHAIN,
        bundlerTransport: http(BUNDLER_URL),
        paymaster: {
          getPaymasterData: async (userOperation) => {
            const zeroDevPaymaster = await createZeroDevPaymasterClient({
              chain: CHAIN,
              transport: http(PAYMASTER_URL),
            });
            return zeroDevPaymaster.sponsorUserOperation({
              userOperation,
            });
          },
        },
      });

      console.log("Login successful, account:", kernelAccount.address);
      setCurrentPage('wallet');
      
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again or register a new account.");
    } finally {
      setIsLoggingIn(false);
    }
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
        console.log("Creating passkey for username:", username);
        
        // Create WebAuthn key for registration
        const webAuthnKey = await toWebAuthnKey({
          passkeyName: username,
          passkeyServerUrl: PASSKEY_SERVER_URL,
          mode: WebAuthnMode.Register,
        });

        // Create passkey validator
        const passkeyValidator = await toPasskeyValidator(publicClient, {
          webAuthnKey,
          kernelVersion,
          entryPoint,
          validatorContractVersion: PasskeyValidatorContractVersion.V0_0_2,
        });

        // Create kernel account
        kernelAccount = await createKernelAccount(publicClient, {
          entryPoint,
          kernelVersion,
          plugins: {
            sudo: passkeyValidator,
          },
        });

        // Create kernel client with paymaster
        kernelClient = createKernelAccountClient({
          account: kernelAccount,
          chain: CHAIN,
          bundlerTransport: http(BUNDLER_URL),
          paymaster: {
            getPaymasterData: async (userOperation) => {
              const zeroDevPaymaster = await createZeroDevPaymasterClient({
                chain: CHAIN,
                transport: http(PAYMASTER_URL),
              });
              return zeroDevPaymaster.sponsorUserOperation({
                userOperation,
              });
            },
          },
        });

        console.log("Account created successfully:", kernelAccount.address);
        setAccountAddress(kernelAccount.address);
        
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      } finally {
        setIsRegistering(false);
      }
    };

    const goBack = () => {
      setCurrentPage('welcome');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
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

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Powered by ZeroDev passkeys and account abstraction
          </p>
        </div>
      </div>
    </div>
  );

  // Send USDC Page Component - Improved version modeled after tutorial
  const SendUSDCPage = () => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [currentBalance, setCurrentBalance] = useState("0");
    const [userOpHash, setUserOpHash] = useState("");
    const [userOpStatus, setUserOpStatus] = useState("");
    const [errors, setErrors] = useState({
      recipient: "",
      amount: "",
    });

    // Fetch current balance for validation
    useEffect(() => {
      const fetchBalance = async () => {
        if (!kernelAccount?.address) return;
        
        try {
          const balance = await publicClient.readContract({
            address: USDC_CONTRACT_ADDRESS,
            abi: USDC_ABI,
            functionName: "balanceOf",
            args: [kernelAccount.address],
          });
          setCurrentBalance(formatUnits(balance, 6));
        } catch (error) {
          console.error("Error fetching balance for send:", error);
        }
      };
      
      fetchBalance();
    }, []);

    // Validation function
    const validateForm = () => {
      const newErrors = { recipient: "", amount: "" };
      let isValid = true;

      if (!recipient.trim()) {
        newErrors.recipient = "Recipient address is required";
        isValid = false;
      } else if (!isAddress(recipient)) {
        newErrors.recipient = "Invalid Ethereum address";
        isValid = false;
      }

      if (!amount.trim()) {
        newErrors.amount = "Amount is required";
        isValid = false;
      } else {
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
          newErrors.amount = "Amount must be greater than 0";
          isValid = false;
        } else if (numAmount > parseFloat(currentBalance)) {
          newErrors.amount = "Insufficient balance";
          isValid = false;
        }
      }

      setErrors(newErrors);
      return isValid;
    };

    // Handle send transaction - modeled after tutorial's sendUserOp
    const handleSendUSDC = async () => {
      if (!validateForm()) return;
      
      setIsSending(true);
      setUserOpStatus("Sending USDC...");
      setUserOpHash("");

      try {
        console.log(`Sending ${amount} USDC to ${recipient}`);

        // Send UserOp with USDC transfer - following tutorial pattern
        const userOpHash = await kernelClient.sendUserOperation({
          callData: await kernelAccount.encodeCalls([
            {
              to: USDC_CONTRACT_ADDRESS,
              value: BigInt(0),
              data: encodeFunctionData({
                abi: USDC_ABI,
                functionName: "transfer",
                args: [recipient as `0x${string}`, parseUnits(amount, 6)],
              }),
            },
          ]),
        });

        console.log("UserOp submitted:", userOpHash);
        setUserOpHash(userOpHash);
        setUserOpStatus("Transaction submitted, waiting for confirmation...");

        // Wait for the UserOp to be included on-chain - following tutorial pattern
        const receipt = await kernelClient.waitForUserOperationReceipt({
          hash: userOpHash,
        });

        console.log("UserOp confirmed:", receipt.userOpHash);
        console.log("TxHash:", receipt.receipt.transactionHash);
        
        // Update status with success message including link
        const successMessage = `✅ Transaction confirmed! <a href="https://jiffyscan.xyz/userOpHash/${userOpHash}?network=sepolia" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">View on JiffyScan</a>`;
        setUserOpStatus(successMessage);

        // Optional: Auto-navigate back after a delay
        setTimeout(() => {
          setRecipient("");
          setAmount("");
          setUserOpHash("");
          setUserOpStatus("");
          setCurrentPage('wallet');
        }, 3000);

      } catch (error) {
        console.error("Send transaction failed:", error);
        setUserOpStatus("❌ Transaction failed. Please try again.");
      } finally {
        setIsSending(false);
      }
    };

    const goBack = () => {
      setCurrentPage('wallet');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={goBack}
              className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back
            </button>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
              <span className="text-2xl">📤</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Send USDC</h1>
            <p className="text-gray-600">Transfer USDC to another wallet</p>
          </div>

          {/* Balance Display */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Available Balance</span>
              <span className="text-lg font-bold text-blue-600">${currentBalance} USDC</span>
            </div>
          </div>

          {/* Send Form */}
          <div className="space-y-4">
            {/* Recipient Address */}
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

            {/* Amount */}
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

            {/* Send Button */}
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

            {/* UserOp Status Display - Following tutorial pattern */}
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

            {/* Transaction Info */}
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

  // Wallet Page Component
  const WalletPage = () => {
    const [usdcBalance, setUsdcBalance] = useState("0.00");
    const [isLoadingBalance, setIsLoadingBalance] = useState(true);

    // Function to fetch USDC balance
    const fetchUSDCBalance = async () => {
      if (!kernelAccount?.address) return;
      
      setIsLoadingBalance(true);
      try {
        console.log("Fetching USDC balance for:", kernelAccount.address);
        
        // Read USDC balance from contract
        const balance = await publicClient.readContract({
          address: USDC_CONTRACT_ADDRESS,
          abi: USDC_ABI,
          functionName: "balanceOf",
          args: [kernelAccount.address],
        });

        // Format balance (USDC has 6 decimals)
        const formattedBalance = formatUnits(balance, 6);
        setUsdcBalance(parseFloat(formattedBalance).toFixed(2));
        
        console.log("USDC Balance:", formattedBalance);
      } catch (error) {
        console.error("Error fetching USDC balance:", error);
        setUsdcBalance("Error");
      } finally {
        setIsLoadingBalance(false);
      }
    };

    // Fetch balance when component mounts
    useEffect(() => {
      fetchUSDCBalance();
    }, [kernelAccount]);

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
            {/* USDC Balance Display */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">USDC Balance</span>
                  {isLoadingBalance && (
                    <div className="ml-2">
                      <svg className="animate-spin h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-blue-600">${usdcBalance}</span>
                  <button
                    onClick={fetchUSDCBalance}
                    disabled={isLoadingBalance}
                    className="ml-2 p-1 text-blue-500 hover:text-blue-700 disabled:opacity-50"
                    title="Refresh balance"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Network Info */}
              <div className="mt-2 text-xs text-gray-500">
                Sepolia Testnet • Contract: {USDC_CONTRACT_ADDRESS.slice(0, 8)}...
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('send')}
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
            onClick={() => setCurrentPage('welcome')}
            className="w-full mt-6 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  };

  // Render current page
  if (currentPage === 'register') {
    return <RegistrationPage />;
  }

  if (currentPage === 'send') {
    return <SendUSDCPage />;
  }

  if (currentPage === 'wallet') {
    return <WalletPage />;
  }

  return <WelcomePage />;
};

export default BeepBoopWallet;