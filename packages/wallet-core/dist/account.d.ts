export interface AccountConfig {
    entryPoint: any;
    kernelVersion: any;
    plugins: {
        sudo: any;
    };
}
export declare class AccountManager {
    static createKernelAccount(publicClient: any, validator: any): Promise<{
        config: AccountConfig;
        publicClient: any;
    }>;
    static getDefaultAccountConfig(validator: any): AccountConfig;
}
