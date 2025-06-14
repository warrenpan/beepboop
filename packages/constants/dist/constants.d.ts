export declare const USDC_CONTRACT_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
export declare const SEPOLIA_CHAIN_ID = 11155111;
export declare const CHAIN: {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
            readonly apiUrl: "https://api-sepolia.etherscan.io/api";
        };
    };
    blockTime?: number | undefined | undefined;
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 751532;
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
            readonly blockCreated: 5317080;
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 11155111;
    name: "Sepolia";
    nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sepolia.drpc.org"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
};
export declare const ENTRY_POINT: import("@zerodev/sdk/types/kernel").EntryPointType<"0.7">;
export declare const KERNEL_VERSION: import("@zerodev/sdk/types/kernel").KERNEL_V3_VERSION_TYPE;
export declare const ZERODEV_PROJECT_ID = "b4bb59f8-71ab-45d7-b225-3b3be4e39db0";
export declare const BUNDLER_URL = "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111";
export declare const PAYMASTER_URL = "https://rpc.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0/chain/11155111";
export declare const PASSKEY_SERVER_URL = "https://passkeys.zerodev.app/api/v3/b4bb59f8-71ab-45d7-b225-3b3be4e39db0";
export declare const USDC_ABI: readonly [{
    readonly name: "balanceOf";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "owner";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "decimals";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly name: "symbol";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly name: "transfer";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "to";
    }, {
        readonly type: "uint256";
        readonly name: "amount";
    }];
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}];
export declare const USDC_DECIMALS = 6;
export declare const DEFAULT_PASSKEY_NAME = "beepboop-wallet";
export declare const TRANSACTION_SUCCESS_DELAY = 3000;
export declare const BALANCE_REFRESH_INTERVAL = 30000;
