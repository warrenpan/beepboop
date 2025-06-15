"use client";

import React, { useState, useEffect } from 'react';
import { WelcomePage, RegistrationPage, WalletPage, SendUSDCPage } from '../views';
import { loginWithPasskey } from '../features';
import type { KernelAccount, KernelClient } from '../types';

let kernelAccount: KernelAccount | null = null;
let kernelClient: KernelClient | null = null;

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
      const { kernelAccount: account, kernelClient: client } = await loginWithPasskey();
      kernelAccount = account;
      kernelClient = client;
      setCurrentPage('wallet');
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again or register a new account.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleRegistrationSuccess = (account: KernelAccount | null, client: KernelClient | null) => {
    if (account && client) {
      kernelAccount = account;
      kernelClient = client;
    }
    setCurrentPage('wallet');
  };

  // Render current page
  if (currentPage === 'register') {
    return (
      <RegistrationPage 
        onBack={() => setCurrentPage('welcome')}
        onSuccess={handleRegistrationSuccess}
      />
    );
  }

  if (currentPage === 'send' && kernelAccount && kernelClient) {
    return (
      <SendUSDCPage 
        kernelAccount={kernelAccount}
        kernelClient={kernelClient}
        onBack={() => setCurrentPage('wallet')}
      />
    );
  }

  if (currentPage === 'wallet' && kernelAccount) {
    return (
      <WalletPage 
        kernelAccount={kernelAccount}
        onSendUSDC={() => setCurrentPage('send')}
        onSignOut={() => setCurrentPage('welcome')}
      />
    );
  }

  return (
    <WelcomePage 
      onRegister={handleRegister}
      onLogin={handleLogin}
      isLoggingIn={isLoggingIn}
    />
  );
};

export default BeepBoopWallet;