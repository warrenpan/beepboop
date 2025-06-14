import { PasskeyValidatorContractVersion } from "@zerodev/passkey-validator";
export interface AuthConfig {
    passkeyServerUrl: string;
    entryPoint: any;
    kernelVersion: any;
    validatorContractVersion?: PasskeyValidatorContractVersion;
}
export declare class PasskeyAuth {
    private config;
    constructor(config?: Partial<AuthConfig>);
    register(username: string): Promise<import("@zerodev/webauthn-key").WebAuthnKey>;
    login(passkeyName?: string): Promise<import("@zerodev/webauthn-key").WebAuthnKey>;
    createValidator(publicClient: any, webAuthnKey: any): Promise<{
        address: import("abitype").Address;
        nonceManager?: import("viem").NonceManager | undefined;
        sign?: ((parameters: {
            hash: import("viem").Hash;
        }) => Promise<import("viem").Hex>) | undefined | undefined;
        signAuthorization?: ((parameters: import("viem").AuthorizationRequest) => Promise<import("viem/_types/accounts/utils/signAuthorization").SignAuthorizationReturnType>) | undefined | undefined;
        signMessage: ({ message }: {
            message: import("viem").SignableMessage;
        }) => Promise<import("viem").Hex>;
        signTransaction: <serializer extends import("viem").SerializeTransactionFn<import("viem").TransactionSerializable> = import("viem").SerializeTransactionFn<import("viem").TransactionSerializable>, transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]>(transaction: transaction, options?: {
            serializer?: serializer | undefined;
        } | undefined) => Promise<import("viem").IsNarrowable<import("viem").TransactionSerialized<import("viem").GetTransactionType<transaction>>, import("viem").Hex> extends true ? import("viem").TransactionSerialized<import("viem").GetTransactionType<transaction>> : import("viem").Hex>;
        signTypedData: <const typedData extends import("abitype").TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(parameters: import("viem").TypedDataDefinition<typedData, primaryType>) => Promise<import("viem").Hex>;
        publicKey: import("viem").Hex;
        source: "WebAuthnValidator";
        type: "local";
    } & {
        validatorType: import("@zerodev/sdk/_types/types/kernel").ValidatorType;
        supportedKernelVersions: string;
        getNonceKey: (accountAddress?: import("abitype").Address, customNonceKey?: bigint) => Promise<bigint>;
        getStubSignature(userOperation: import("viem/_types/account-abstraction").UserOperation, pluginEnableSignature?: import("viem").Hex): Promise<import("viem").Hex>;
        signUserOperation: (userOperation: import("viem/_types/account-abstraction").UserOperation & {
            chainId?: number | undefined;
        }, pluginEnableSignature?: import("viem").Hex) => Promise<import("viem").Hex>;
        getEnableData(accountAddress?: import("abitype").Address): Promise<import("viem").Hex>;
        isEnabled(accountAddress: import("abitype").Address, selector: import("viem").Hex): Promise<boolean>;
        getIdentifier: () => import("viem").Hex;
    } & {
        getSerializedData: () => string;
    }>;
}
