"use client";
import React, { useState, useEffect } from 'react';

const BeepBoopWallet = () => {
  const [mounted, setMounted] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRegister = async () => {
    setIsRegistering(true);
    // TODO: Implement passkey registration
    console.log("Registering new account");
    
    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      alert("Registration successful! (Demo)");
    }, 2000);
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

  return (
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
            disabled={isRegistering || isLoggingIn}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isRegistering ? (
              <>
                <Spinner />
                <span className="ml-2">Creating Account...</span>
              </>
            ) : (
              "Register"
            )}
          </button>

          <button
            onClick={handleLogin}
            disabled={isRegistering || isLoggingIn}
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
};

export default BeepBoopWallet;