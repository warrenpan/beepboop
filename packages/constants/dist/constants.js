"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BALANCE_REFRESH_INTERVAL = exports.TRANSACTION_SUCCESS_DELAY = exports.DEFAULT_PASSKEY_NAME = exports.USDC_DECIMALS = exports.USDC_ABI = exports.PASSKEY_SERVER_URL = exports.PAYMASTER_URL = exports.BUNDLER_URL = exports.ZERODEV_PROJECT_ID = exports.KERNEL_VERSION = exports.ENTRY_POINT = exports.CHAIN = exports.SEPOLIA_CHAIN_ID = exports.USDC_CONTRACT_ADDRESS = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const constants_1 = require("@zerodev/sdk/constants");
// Network Configuration
exports.USDC_CONTRACT_ADDRESS = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
exports.SEPOLIA_CHAIN_ID = 11155111;
exports.CHAIN = chains_1.sepolia;
exports.ENTRY_POINT = (0, constants_1.getEntryPoint)('0.7');
exports.KERNEL_VERSION = constants_1.KERNEL_V3_1;
// ZeroDev Configuration
exports.ZERODEV_PROJECT_ID = 'b4bb59f8-71ab-45d7-b225-3b3be4e39db0';
exports.BUNDLER_URL = `https://rpc.zerodev.app/api/v3/${exports.ZERODEV_PROJECT_ID}/chain/11155111`;
exports.PAYMASTER_URL = `https://rpc.zerodev.app/api/v3/${exports.ZERODEV_PROJECT_ID}/chain/11155111`;
exports.PASSKEY_SERVER_URL = `https://passkeys.zerodev.app/api/v3/${exports.ZERODEV_PROJECT_ID}`;
// Contract ABIs
exports.USDC_ABI = (0, viem_1.parseAbi)([
    'function balanceOf(address owner) external view returns (uint256)',
    'function decimals() external view returns (uint8)',
    'function symbol() external view returns (string)',
    'function transfer(address to, uint256 amount) external returns (bool)',
]);
// UI Constants
exports.USDC_DECIMALS = 6;
exports.DEFAULT_PASSKEY_NAME = 'beepboop-wallet';
// Animation and Timing
exports.TRANSACTION_SUCCESS_DELAY = 3000;
exports.BALANCE_REFRESH_INTERVAL = 30000;
