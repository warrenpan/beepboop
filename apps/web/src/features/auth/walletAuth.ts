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
import { createPublicClient, http } from "viem";
import {
  BUNDLER_URL,
  PAYMASTER_URL,
  PASSKEY_SERVER_URL,
  CHAIN,
  ENTRY_POINT,
  KERNEL_VERSION,
  DEFAULT_PASSKEY_NAME,
} from "@beepboop/constants";

const publicClient = createPublicClient({
  transport: http(),
  chain: CHAIN,
});

export const registerWithPasskey = async (username: string) => {
  console.log("Creating passkey for username:", username);
  
  const webAuthnKey = await toWebAuthnKey({
    passkeyName: username,
    passkeyServerUrl: PASSKEY_SERVER_URL,
    mode: WebAuthnMode.Register,
  });

  const passkeyValidator = await toPasskeyValidator(publicClient, {
    webAuthnKey,
    kernelVersion: KERNEL_VERSION,
    entryPoint: ENTRY_POINT,
    validatorContractVersion: PasskeyValidatorContractVersion.V0_0_2,
  });

  const kernelAccount = await createKernelAccount(publicClient, {
    entryPoint: ENTRY_POINT,
    kernelVersion: KERNEL_VERSION,
    plugins: {
      sudo: passkeyValidator,
    },
  });

  const kernelClient = createKernelAccountClient({
    account: kernelAccount,
    chain: CHAIN,
    bundlerTransport: http(BUNDLER_URL),
    paymaster: {
      getPaymasterData: async (userOperation) => {
        const zeroDevPaymaster = createZeroDevPaymasterClient({
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
  return { 
    kernelAccount: kernelAccount as import('../../types').KernelAccount, 
    kernelClient: kernelClient as import('../../types').KernelClient 
  };
};

export const loginWithPasskey = async () => {
  console.log("Attempting passkey login");
  
  const webAuthnKey = await toWebAuthnKey({
    passkeyName: DEFAULT_PASSKEY_NAME,
    passkeyServerUrl: PASSKEY_SERVER_URL,
    mode: WebAuthnMode.Login,
  });

  const passkeyValidator = await toPasskeyValidator(publicClient, {
    webAuthnKey,
    kernelVersion: KERNEL_VERSION,
    entryPoint: ENTRY_POINT,
    validatorContractVersion: PasskeyValidatorContractVersion.V0_0_2,
  });

  const kernelAccount = await createKernelAccount(publicClient, {
    entryPoint: ENTRY_POINT,
    kernelVersion: KERNEL_VERSION,
    plugins: {
      sudo: passkeyValidator,
    },
  });

  const kernelClient = createKernelAccountClient({
    account: kernelAccount,
    chain: CHAIN,
    bundlerTransport: http(BUNDLER_URL),
    paymaster: {
      getPaymasterData: async (userOperation) => {
        const zeroDevPaymaster = createZeroDevPaymasterClient({
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
  return { 
    kernelAccount: kernelAccount as import('../../types').KernelAccount, 
    kernelClient: kernelClient as import('../../types').KernelClient 
  };
};