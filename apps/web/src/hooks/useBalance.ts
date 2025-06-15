import { useState, useEffect, useCallback } from 'react';
import { createPublicClient, http, formatUnits } from "viem";
import { 
  CHAIN, 
  USDC_CONTRACT_ADDRESS, 
  USDC_ABI, 
  USDC_DECIMALS 
} from "@beepboop/constants";
import { formatBalance } from '../utils';

const publicClient = createPublicClient({
  transport: http(),
  chain: CHAIN,
});

export const useBalance = (accountAddress?: string) => {
  const [balance, setBalance] = useState("0.00");
  const [isLoading, setIsLoading] = useState(true);

  const fetchBalance = useCallback(async () => {
    if (!accountAddress) return;
    
    setIsLoading(true);
    try {
      console.log("Fetching USDC balance for:", accountAddress);
      
      const balance = await publicClient.readContract({
        address: USDC_CONTRACT_ADDRESS,
        abi: USDC_ABI,
        functionName: "balanceOf",
        args: [accountAddress as `0x${string}`],
      });

      const formattedBalance = formatUnits(balance, USDC_DECIMALS);
      setBalance(formatBalance(formattedBalance));
      
      console.log("USDC Balance:", formattedBalance);
    } catch (error) {
      console.error("Error fetching USDC balance:", error);
      setBalance("Error");
    } finally {
      setIsLoading(false);
    }
  }, [accountAddress]);

  useEffect(() => {
    fetchBalance();
  }, [accountAddress, fetchBalance]);

  return { balance, isLoading, refetch: fetchBalance };
};