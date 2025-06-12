# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BeepBoop is a Next.js-based stablecoin wallet application built as a Turborepo monorepo. It uses Account Abstraction with passkey authentication to provide a gasless, secure wallet experience for USDC transactions on Sepolia testnet.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build all apps and packages
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Clean build artifacts
npm run clean
```

## Architecture

### Monorepo Structure
- `apps/web/` - Next.js web application (main wallet interface)
- `packages/ui/` - Shared React component library

### Core Technologies
- **Next.js 15** with React 19 and TypeScript
- **Account Abstraction** via ZeroDev SDK
- **Passkey authentication** for secure, passwordless access
- **Tailwind CSS 4** for styling
- **Turborepo** for monorepo management

### Key Web3 Integration
- **ZeroDev SDK** (`@zerodev/sdk`, `@zerodev/passkey-validator`, `@zerodev/permissions`)
- **Permissionless** for user operations
- **Viem/Ox** for Ethereum interactions
- **Sepolia testnet** for development and testing

### Application Flow
The main application logic is in `apps/web/src/app/page.tsx` (~755 lines) and handles:
1. Passkey registration and authentication
2. Account abstraction wallet creation
3. USDC balance retrieval and display
4. Send USDC functionality with sponsored transactions

### State Management
The app uses React state management with multiple pages/modes:
- Welcome (register/login options)
- Wallet dashboard (balance display)
- Send transaction interface
- Transaction confirmation and success states

## Development Notes

- All transactions are sponsored (gasless) via ZeroDev paymaster
- Passkey authentication eliminates need for seed phrases or passwords
- Currently configured for Sepolia testnet
- USDC contract address is hardcoded for testnet: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
- Uses Geist fonts (Sans and Mono) loaded from Google Fonts