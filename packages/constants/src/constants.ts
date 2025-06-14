import { parseAbi } from 'viem';
import { sepolia } from 'viem/chains';
import { getEntryPoint, KERNEL_V3_1 } from '@zerodev/sdk/constants';

// Network Configuration
export const USDC_CONTRACT_ADDRESS = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
export const SEPOLIA_CHAIN_ID = 11155111;
export const CHAIN = sepolia;
export const ENTRY_POINT = getEntryPoint('0.7');
export const KERNEL_VERSION = KERNEL_V3_1;

// ZeroDev Configuration
export const ZERODEV_PROJECT_ID = 'b4bb59f8-71ab-45d7-b225-3b3be4e39db0';
export const BUNDLER_URL = `https://rpc.zerodev.app/api/v3/${ZERODEV_PROJECT_ID}/chain/11155111`;
export const PAYMASTER_URL = `https://rpc.zerodev.app/api/v3/${ZERODEV_PROJECT_ID}/chain/11155111`;
export const PASSKEY_SERVER_URL = `https://passkeys.zerodev.app/api/v3/${ZERODEV_PROJECT_ID}`;

// Contract ABIs
export const USDC_ABI = parseAbi([
  'function balanceOf(address owner) external view returns (uint256)',
  'function decimals() external view returns (uint8)',
  'function symbol() external view returns (string)',
  'function transfer(address to, uint256 amount) external returns (bool)',
]);

// UI Constants
export const USDC_DECIMALS = 6;
export const DEFAULT_PASSKEY_NAME = 'beepboop-wallet';

// Animation and Timing
export const TRANSACTION_SUCCESS_DELAY = 3000;
export const BALANCE_REFRESH_INTERVAL = 30000;