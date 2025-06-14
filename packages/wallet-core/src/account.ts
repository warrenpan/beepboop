import { ENTRY_POINT, KERNEL_VERSION } from "@beepboop/constants";

export interface AccountConfig {
  entryPoint: any;
  kernelVersion: any;
  plugins: {
    sudo: any;
  };
}

export class AccountManager {
  static async createKernelAccount(publicClient: any, validator: any) {
    const config: AccountConfig = {
      entryPoint: ENTRY_POINT,
      kernelVersion: KERNEL_VERSION,
      plugins: {
        sudo: validator,
      },
    };

    // This would be imported from @zerodev/sdk in the actual implementation
    // For now, we'll return the config for external use
    return { config, publicClient };
  }

  static getDefaultAccountConfig(validator: any): AccountConfig {
    return {
      entryPoint: ENTRY_POINT,
      kernelVersion: KERNEL_VERSION,
      plugins: {
        sudo: validator,
      },
    };
  }
}