module.exports = {

"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/getAccountNonce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/public/getAccountNonce.ts
__turbopack_context__.s({
    "getAccountNonce": (()=>getAccountNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
;
;
const getAccountNonce = async (client, args)=>{
    const { address, entryPointAddress, key = BigInt(0) } = args;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"], "readContract")({
        address: entryPointAddress,
        abi: [
            {
                inputs: [
                    {
                        name: "sender",
                        type: "address"
                    },
                    {
                        name: "key",
                        type: "uint192"
                    }
                ],
                name: "getNonce",
                outputs: [
                    {
                        name: "nonce",
                        type: "uint256"
                    }
                ],
                stateMutability: "view",
                type: "function"
            }
        ],
        functionName: "getNonce",
        args: [
            address,
            key
        ]
    });
}; //# sourceMappingURL=getAccountNonce.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/getSenderAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/public/getSenderAddress.ts
__turbopack_context__.s({
    "InvalidEntryPointError": (()=>InvalidEntryPointError),
    "getSenderAddress": (()=>getSenderAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/simulateContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
;
;
;
class InvalidEntryPointError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, entryPointAddress } = {}){
        super(`The entry point address (\`entryPoint\`${entryPointAddress ? ` = ${entryPointAddress}` : ""}) is not a valid entry point. getSenderAddress did not revert with a SenderAddressResult error.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidEntryPointError"
        });
    }
}
const getSenderAddress = async (client, args)=>{
    const { initCode, entryPointAddress, factory, factoryData } = args;
    if (!initCode && !factory && !factoryData) {
        throw new Error("Either `initCode` or `factory` and `factoryData` must be provided");
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateContract"], "simulateContract")({
            address: entryPointAddress,
            abi: [
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }
                    ],
                    name: "SenderAddressResult",
                    type: "error"
                },
                {
                    inputs: [
                        {
                            internalType: "bytes",
                            name: "initCode",
                            type: "bytes"
                        }
                    ],
                    name: "getSenderAddress",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }
            ],
            functionName: "getSenderAddress",
            args: [
                initCode || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                    factory,
                    factoryData
                ])
            ]
        });
    } catch (e) {
        const revertError = e.walk((err)=>err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcRequestError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputRpcError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownRpcError"]);
        if (!revertError) {
            // biome-ignore lint/suspicious/noExplicitAny:
            const cause = e.cause;
            const errorName = cause?.data?.errorName ?? "";
            if (errorName === "SenderAddressResult" && cause?.data?.args && cause?.data?.args[0]) {
                return cause.data?.args[0];
            }
        }
        if (revertError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"]) {
            const errorName = revertError.data?.errorName ?? "";
            if (errorName === "SenderAddressResult" && revertError.data?.args && revertError.data?.args[0]) {
                return revertError.data?.args[0];
            }
        }
        if (revertError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcRequestError"]) {
            const hexStringRegex = /0x[a-fA-F0-9]+/;
            // biome-ignore lint/suspicious/noExplicitAny:
            const match = revertError.cause.data.match(hexStringRegex);
            if (!match) {
                throw new Error("Failed to parse revert bytes from RPC response");
            }
            const data = match[0];
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                abi: [
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            }
                        ],
                        name: "SenderAddressResult",
                        type: "error"
                    }
                ],
                data
            });
            return error.args[0];
        }
        if (revertError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputRpcError"]) {
            const { data: data_ } = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContractError"] ? e : e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] ? e.walk((err)=>"data" in err) || e.walk() : {};
            const data = typeof data_ === "string" ? data_ : data_?.data;
            if (data === undefined) {
                throw new Error("Failed to parse revert bytes from RPC response");
            }
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                abi: [
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            }
                        ],
                        name: "SenderAddressResult",
                        type: "error"
                    }
                ],
                data
            });
            return error.args[0];
        }
        if (revertError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownRpcError"]) {
            const parsedBody = JSON.parse(// biome-ignore lint/suspicious/noExplicitAny:
            revertError.cause.body);
            const revertData = parsedBody.error.data;
            const hexStringRegex = /0x[a-fA-F0-9]+/;
            const match = revertData.match(hexStringRegex);
            if (!match) {
                throw new Error("Failed to parse revert bytes from RPC response");
            }
            const data = match[0];
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                abi: [
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            }
                        ],
                        name: "SenderAddressResult",
                        type: "error"
                    }
                ],
                data
            });
            return error.args[0];
        }
        throw e;
    }
    throw new InvalidEntryPointError({
        entryPointAddress
    });
}; //# sourceMappingURL=getSenderAddress.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelModuleAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KernelModuleInstallAbi": (()=>KernelModuleInstallAbi),
    "KernelModuleIsInitializedAbi": (()=>KernelModuleIsInitializedAbi),
    "KernelModuleIsModuleInstalledAbi": (()=>KernelModuleIsModuleInstalledAbi)
});
const KernelModuleIsInitializedAbi = [
    {
        type: "function",
        name: "isInitialized",
        inputs: [
            {
                name: "smartAccount",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    }
];
const KernelModuleInstallAbi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "moduleType",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "module",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "initData",
                type: "bytes"
            }
        ],
        stateMutability: "payable",
        type: "function",
        name: "installModule"
    }
];
const KernelModuleIsModuleInstalledAbi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "moduleType",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "module",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "additionalContext",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function",
        name: "isModuleInstalled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ]
    }
]; //# sourceMappingURL=KernelModuleAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/isPluginInstalled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPluginInstalled": (()=>isPluginInstalled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelModuleAbi.js [app-ssr] (ecmascript)");
;
;
;
const isPluginInstalled = async (client, args)=>{
    const { address, plugin } = args;
    const { type, address: pluginAddress, data = "0x" } = plugin;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"], "readContract")({
            address,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelModuleIsModuleInstalledAbi"],
            functionName: "isModuleInstalled",
            args: [
                BigInt(type),
                pluginAddress,
                data
            ]
        });
    } catch (error) {
        return false;
    }
}; //# sourceMappingURL=isPluginInstalled.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CALL_TYPE": (()=>CALL_TYPE),
    "DUMMY_ECDSA_SIG": (()=>DUMMY_ECDSA_SIG),
    "EXEC_TYPE": (()=>EXEC_TYPE),
    "FACTORY_ADDRESS_V0_6": (()=>FACTORY_ADDRESS_V0_6),
    "FACTORY_ADDRESS_V0_6_INIT_CODE_HASH": (()=>FACTORY_ADDRESS_V0_6_INIT_CODE_HASH),
    "KERNEL_7702_DELEGATION_ADDRESS": (()=>KERNEL_7702_DELEGATION_ADDRESS),
    "KERNEL_IMPLEMENTATION_SLOT": (()=>KERNEL_IMPLEMENTATION_SLOT),
    "KERNEL_NAME": (()=>KERNEL_NAME),
    "KERNEL_V0_2": (()=>KERNEL_V0_2),
    "KERNEL_V2_2": (()=>KERNEL_V2_2),
    "KERNEL_V2_3": (()=>KERNEL_V2_3),
    "KERNEL_V2_4": (()=>KERNEL_V2_4),
    "KERNEL_V3_0": (()=>KERNEL_V3_0),
    "KERNEL_V3_1": (()=>KERNEL_V3_1),
    "KERNEL_V3_2": (()=>KERNEL_V3_2),
    "KERNEL_V3_3": (()=>KERNEL_V3_3),
    "KERNEL_V3_3_BETA": (()=>KERNEL_V3_3_BETA),
    "KernelFactoryToInitCodeHashMap": (()=>KernelFactoryToInitCodeHashMap),
    "KernelVersionToAddressesMap": (()=>KernelVersionToAddressesMap),
    "MAGIC_VALUE_SIG_REPLAYABLE": (()=>MAGIC_VALUE_SIG_REPLAYABLE),
    "ONLY_ENTRYPOINT_HOOK_ADDRESS": (()=>ONLY_ENTRYPOINT_HOOK_ADDRESS),
    "PLUGIN_TYPE": (()=>PLUGIN_TYPE),
    "TOKEN_ACTION": (()=>TOKEN_ACTION),
    "VALIDATOR_MODE": (()=>VALIDATOR_MODE),
    "VALIDATOR_TYPE": (()=>VALIDATOR_TYPE),
    "getEntryPoint": (()=>getEntryPoint),
    "safeCreateCallAddress": (()=>safeCreateCallAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/constants/address.js [app-ssr] (ecmascript)");
;
;
const DUMMY_ECDSA_SIG = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
const MAGIC_VALUE_SIG_REPLAYABLE = "0x0555ad2729e8da1777a4e5020806f8bf7601c3db6bfe402f410a34958363a95a";
const FACTORY_ADDRESS_V0_6 = "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3";
const FACTORY_ADDRESS_V0_6_INIT_CODE_HASH = "0xee9d8350bd899dd261db689aafd87eb8a30f085adbaff48152399438ff4eed73";
const KernelVersionToAddressesMap = {
    "0.0.2": {
        accountImplementationAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
        factoryAddress: "0xaee9762ce625e0a8f7b184670fb57c37bfe1d0f1"
    },
    "0.2.2": {
        accountImplementationAddress: "0x0DA6a956B9488eD4dd761E59f52FDc6c8068E6B5",
        factoryAddress: FACTORY_ADDRESS_V0_6,
        initCodeHash: FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.2.3": {
        accountImplementationAddress: "0xD3F582F6B4814E989Ee8E96bc3175320B5A540ab",
        factoryAddress: FACTORY_ADDRESS_V0_6,
        initCodeHash: FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.2.4": {
        accountImplementationAddress: "0xd3082872F8B06073A021b4602e022d5A070d7cfC",
        factoryAddress: FACTORY_ADDRESS_V0_6,
        initCodeHash: FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.3.0": {
        accountImplementationAddress: "0x94F097E1ebEB4ecA3AAE54cabb08905B239A7D27",
        factoryAddress: "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0x6fe6e6ea30eddce942b9618033ab8429f9ddac594053bec8a6744fffc71976e2"
    },
    "0.3.1": {
        accountImplementationAddress: "0xBAC849bB641841b44E965fB01A4Bf5F074f84b4D",
        factoryAddress: "0xaac5D4240AF87249B3f71BC8E4A2cae074A3E419",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0x85d96aa1c9a65886d094915d76ccae85f14027a02c1647dde659f869460f03e6"
    },
    "0.3.2": {
        accountImplementationAddress: "0xD830D15D3dc0C269F3dBAa0F3e8626d33CFdaBe1",
        factoryAddress: "0x7a1dBAB750f12a90EB1B60D2Ae3aD17D4D81EfFe",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0xc7c48c9dd12de68b8a4689b6f8c8c07b61d4d6fa4ddecdd86a6980d045fa67eb"
    },
    "0.3.3": {
        accountImplementationAddress: "0xd6CEDDe84be40893d153Be9d467CD6aD37875b28",
        factoryAddress: "0x2577507b78c2008Ff367261CB6285d44ba5eF2E9",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0xc452397f1e7518f8cea0566ac057e243bb1643f6298aba8eec8cdee78ee3b3dd"
    }
};
const KERNEL_V0_2 = "0.0.2";
const KERNEL_V2_2 = "0.2.2";
const KERNEL_V2_3 = "0.2.3";
const KERNEL_V2_4 = "0.2.4";
const KERNEL_V3_0 = "0.3.0";
const KERNEL_V3_1 = "0.3.1";
const KERNEL_V3_2 = "0.3.2";
const KERNEL_V3_3_BETA = "0.3.3";
const KERNEL_V3_3 = "0.3.3";
const TOKEN_ACTION = "0x2087C7FfD0d0DAE80a00EE74325aBF3449e0eaf1";
const ONLY_ENTRYPOINT_HOOK_ADDRESS = "0xb230f0A1C7C95fa11001647383c8C7a8F316b900";
const KERNEL_NAME = "Kernel";
const VALIDATOR_TYPE = {
    SUDO: "0x00",
    SECONDARY: "0x01",
    PERMISSION: "0x02"
};
var VALIDATOR_MODE;
(function(VALIDATOR_MODE) {
    VALIDATOR_MODE["DEFAULT"] = "0x00";
    VALIDATOR_MODE["ENABLE"] = "0x01";
})(VALIDATOR_MODE || (VALIDATOR_MODE = {}));
var CALL_TYPE;
(function(CALL_TYPE) {
    CALL_TYPE["SINGLE"] = "0x00";
    CALL_TYPE["BATCH"] = "0x01";
    CALL_TYPE["DELEGATE_CALL"] = "0xFF";
})(CALL_TYPE || (CALL_TYPE = {}));
var EXEC_TYPE;
(function(EXEC_TYPE) {
    EXEC_TYPE["DEFAULT"] = "0x00";
    EXEC_TYPE["TRY_EXEC"] = "0x01";
})(EXEC_TYPE || (EXEC_TYPE = {}));
const PLUGIN_TYPE = {
    VALIDATOR: 1,
    EXECUTOR: 2,
    FALLBACK: 3,
    HOOK: 4,
    POLICY: 5,
    SIGNER: 6
};
const safeCreateCallAddress = "0x9b35Af71d77eaf8d7e40252370304687390A1A52";
const KernelFactoryToInitCodeHashMap = {
    "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3": "0xee9d8350bd899dd261db689aafd87eb8a30f085adbaff48152399438ff4eed73",
    "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f": "0x6fe6e6ea30eddce942b9618033ab8429f9ddac594053bec8a6744fffc71976e2"
};
const KERNEL_IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
const getEntryPoint = (entryPointVersion)=>{
    if (entryPointVersion === "0.6") return {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint06Address"],
        version: entryPointVersion
    };
    return {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint07Address"],
        version: entryPointVersion
    };
};
const KERNEL_7702_DELEGATION_ADDRESS = "0xd6CEDDe84be40893d153Be9d467CD6aD37875b28"; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KERNEL_FEATURES": (()=>KERNEL_FEATURES),
    "KERNEL_FEATURES_BY_VERSION": (()=>KERNEL_FEATURES_BY_VERSION),
    "deepHexlify": (()=>deepHexlify),
    "fixSignedData": (()=>fixSignedData),
    "getERC20PaymasterApproveCall": (()=>getERC20PaymasterApproveCall),
    "getExecMode": (()=>getExecMode),
    "hasKernelFeature": (()=>hasKernelFeature),
    "satisfiesRange": (()=>satisfiesRange),
    "validateKernelVersionWithEntryPoint": (()=>validateKernelVersionWithEntryPoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$parseSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parseSignature__as__hexToSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/parseSignature.js [app-ssr] (ecmascript) <export parseSignature as hexToSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__serializeSignature__as__signatureToHex$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-ssr] (ecmascript) <export serializeSignature as signatureToHex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
var KERNEL_FEATURES;
(function(KERNEL_FEATURES) {
    KERNEL_FEATURES["ERC1271_SIG_WRAPPER"] = "ERC1271_SIG_WRAPPER";
    KERNEL_FEATURES["ERC1271_WITH_VALIDATOR"] = "ERC1271_WITH_VALIDATOR";
    KERNEL_FEATURES["ERC1271_SIG_WRAPPER_WITH_WRAPPED_HASH"] = "ERC1271_SIG_WRAPPER_WITH_WRAPPED_HASH";
    KERNEL_FEATURES["ERC1271_REPLAYABLE"] = "ERC1271_REPLAYABLE";
})(KERNEL_FEATURES || (KERNEL_FEATURES = {}));
const KERNEL_FEATURES_BY_VERSION = {
    [KERNEL_FEATURES.ERC1271_SIG_WRAPPER]: ">=0.2.3 || >=0.3.0-beta",
    [KERNEL_FEATURES.ERC1271_WITH_VALIDATOR]: ">=0.3.0-beta",
    [KERNEL_FEATURES.ERC1271_SIG_WRAPPER_WITH_WRAPPED_HASH]: ">=0.3.0-beta",
    [KERNEL_FEATURES.ERC1271_REPLAYABLE]: ">=0.3.2"
};
const hasKernelFeature = (feature, version)=>{
    if (!(feature in KERNEL_FEATURES_BY_VERSION)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(version, KERNEL_FEATURES_BY_VERSION[feature]);
};
const getERC20PaymasterApproveCall = async (client, { gasToken, approveAmount, entryPoint })=>{
    const response = await client.request({
        method: "zd_pm_accounts",
        params: [
            {
                chainId: client.chain?.id,
                entryPointAddress: entryPoint.address
            }
        ]
    });
    return {
        to: gasToken,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
            functionName: "approve",
            args: [
                response[0],
                approveAmount
            ]
        }),
        value: 0n
    };
};
const fixSignedData = (sig)=>{
    let signature = sig;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(signature)) {
        signature = `0x${signature}`;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(signature)) {
            throw new Error(`Invalid signed data ${sig}`);
        }
    }
    let { r, s, v } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$parseSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parseSignature__as__hexToSignature$3e$__["hexToSignature"])(signature);
    if (v === 0n || v === 1n) v += 27n;
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const joined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__serializeSignature__as__signatureToHex$3e$__["signatureToHex"])({
        r,
        s,
        v: v
    });
    return joined;
};
const getExecMode = ({ callType, execType })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        callType,
        execType,
        "0x00000000",
        "0x00000000",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])("0x00000000", {
            size: 22
        })
    ]);
};
const validateKernelVersionWithEntryPoint = (entryPointVersion, kernelVersion)=>{
    if (entryPointVersion === "0.6" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(kernelVersion, ">=0.2.2 || <=0.2.4") || entryPointVersion === "0.7" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(kernelVersion, ">=0.3.0")) {
        throw new Error("KernelVersion should be >= 0.2.2 and <= 0.2.4 for EntryPointV0.6 and >= 0.3.0 for EntryPointV0.7");
    }
};
const satisfiesRange = (version, range)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(version, range);
};
function deepHexlify(obj) {
    if (typeof obj === "function") {
        return undefined;
    }
    if (obj == null || typeof obj === "string" || typeof obj === "boolean") {
        return obj;
    }
    if (typeof obj === "bigint") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(obj);
    }
    if (obj._isBigNumber != null || typeof obj !== "object") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(obj).replace(/^0x0/, "0x");
    }
    if (Array.isArray(obj)) {
        return obj.map((member)=>deepHexlify(member));
    }
    return Object.keys(obj).reduce(// biome-ignore lint/suspicious/noExplicitAny: it's a recursive function, so it's hard to type
    (set, key)=>{
        set[key] = deepHexlify(obj[key]);
        return set;
    }, {});
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils/toSigner.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/utils/toOwner.ts
__turbopack_context__.s({
    "toSigner": (()=>toSigner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-ssr] (ecmascript)");
;
;
;
async function toSigner({ signer, address }) {
    if ("type" in signer && signer.type === "local") {
        return signer;
    }
    let walletClient = undefined;
    if ("request" in signer && !signer?.account) {
        if (!address) {
            address = (await Promise.any([
                signer.request({
                    method: "eth_requestAccounts"
                }),
                signer.request({
                    method: "eth_accounts"
                })
            ]))[0];
        }
        if (!address) {
            // For TS to be happy
            throw new Error("address is required");
        }
        walletClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account: address,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(signer)
        });
    }
    if (!walletClient) {
        walletClient = signer;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])({
        address: walletClient.account.address,
        async signMessage ({ message }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(walletClient, {
                message
            });
        },
        async signTypedData (typedData) {
            const { primaryType, domain, message, types } = typedData;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTypedData"])(walletClient, {
                primaryType,
                domain,
                message,
                types
            });
        },
        async signTransaction (_) {
            throw new Error("Smart account signer doesn't need to sign transactions");
        },
        async signAuthorization (authorization) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signAuthorization"])(walletClient, authorization);
        }
    });
} //# sourceMappingURL=toSigner.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/addressToEmptyAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addressToEmptyAccount": (()=>addressToEmptyAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
;
function addressToEmptyAccount(address) {
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])({
        address,
        async signMessage () {
            throw new Error("Method not supported");
        },
        async signTransaction (_transaction) {
            throw new Error("Method not supported");
        },
        async signTypedData (_typedData) {
            throw new Error("Method not supported");
        }
    });
    return {
        ...account,
        publicKey: "0x",
        source: "empty"
    };
} //# sourceMappingURL=addressToEmptyAccount.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/utils/signerTo7702Validator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signerTo7702Validator": (()=>signerTo7702Validator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getUserOperationHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2f$toSigner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils/toSigner.js [app-ssr] (ecmascript)");
;
;
;
;
async function signerTo7702Validator(client, { signer, entryPoint, kernelVersion }) {
    const viemSigner = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2f$toSigner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSigner"])({
        signer
    });
    // Fetch chain id
    const chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client);
    // Build the EOA Signer
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])({
        address: viemSigner.address,
        async signMessage ({ message }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(client, {
                account: viemSigner,
                message
            });
        },
        async signTransaction (_, __) {
            throw new Error("Smart account signer doesn't need to sign transactions");
        },
        async signTypedData (typedData) {
            return viemSigner.signTypedData(typedData);
        }
    });
    return {
        ...account,
        supportedKernelVersions: kernelVersion,
        validatorType: "SECONDARY",
        address: viemSigner.address,
        source: "EIP7702Validator",
        getIdentifier () {
            return "0x";
        },
        async getEnableData () {
            return viemSigner.address;
        },
        async getNonceKey (_accountAddress, customNonceKey) {
            if (customNonceKey) {
                return customNonceKey;
            }
            return 0n;
        },
        // Sign a user operation
        async signUserOperation (userOperation) {
            const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$getUserOperationHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationHash"])({
                userOperation: {
                    ...userOperation,
                    signature: "0x"
                },
                entryPointAddress: entryPoint.address,
                entryPointVersion: entryPoint.version,
                chainId: chainId
            });
            const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(client, {
                account: viemSigner,
                message: {
                    raw: hash
                }
            });
            return signature;
        },
        // Get simple dummy signature
        async getStubSignature () {
            return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
        },
        async isEnabled (_kernelAccountAddress, _selector) {
            return false;
        }
    };
} //# sourceMappingURL=signerTo7702Validator.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * The exeute abi, used to execute a transaction on the kernel smart account
 */ __turbopack_context__.s({
    "KernelAccountAbi": (()=>KernelAccountAbi),
    "KernelExecuteAbi": (()=>KernelExecuteAbi),
    "KernelInitAbi": (()=>KernelInitAbi)
});
const KernelExecuteAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
            {
                internalType: "enum Operation",
                name: "",
                type: "uint8"
            }
        ],
        name: "execute",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }
                ],
                internalType: "struct Call[]",
                name: "calls",
                type: "tuple[]"
            }
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "executeDelegateCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
];
const KernelInitAbi = [
    {
        inputs: [
            {
                internalType: "contract IKernelValidator",
                name: "_defaultValidator",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
];
const KernelAccountAbi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "AlreadyInitialized",
        type: "error"
    },
    {
        inputs: [],
        name: "DisabledMode",
        type: "error"
    },
    {
        inputs: [],
        name: "NotAuthorizedCaller",
        type: "error"
    },
    {
        inputs: [],
        name: "NotEntryPoint",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldValidator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newValidator",
                type: "address"
            }
        ],
        name: "DefaultValidatorChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
            },
            {
                indexed: true,
                internalType: "address",
                name: "executor",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "validator",
                type: "address"
            }
        ],
        name: "ExecutionChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "Received",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newImplementation",
                type: "address"
            }
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        stateMutability: "payable",
        type: "fallback"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_disableFlag",
                type: "bytes4"
            }
        ],
        name: "disableMode",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "eip712Domain",
        outputs: [
            {
                internalType: "bytes1",
                name: "fields",
                type: "bytes1"
            },
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "version",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "verifyingContract",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32"
            },
            {
                internalType: "uint256[]",
                name: "extensions",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
            {
                internalType: "enum Operation",
                name: "",
                type: "uint8"
            }
        ],
        name: "execute",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }
                ],
                internalType: "struct Call[]",
                name: "calls",
                type: "tuple[]"
            }
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "executeDelegateCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "getDefaultValidator",
        outputs: [
            {
                internalType: "contract IKernelValidator",
                name: "validator",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getDisabledMode",
        outputs: [
            {
                internalType: "bytes4",
                name: "disabled",
                type: "bytes4"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_selector",
                type: "bytes4"
            }
        ],
        name: "getExecution",
        outputs: [
            {
                components: [
                    {
                        internalType: "ValidAfter",
                        name: "validAfter",
                        type: "uint48"
                    },
                    {
                        internalType: "ValidUntil",
                        name: "validUntil",
                        type: "uint48"
                    },
                    {
                        internalType: "address",
                        name: "executor",
                        type: "address"
                    },
                    {
                        internalType: "contract IKernelValidator",
                        name: "validator",
                        type: "address"
                    }
                ],
                internalType: "struct ExecutionDetail",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getLastDisabledTime",
        outputs: [
            {
                internalType: "uint48",
                name: "",
                type: "uint48"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IKernelValidator",
                name: "_defaultValidator",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes"
            }
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IKernelValidator",
                name: "_defaultValidator",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "setDefaultValidator",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_selector",
                type: "bytes4"
            },
            {
                internalType: "address",
                name: "_executor",
                type: "address"
            },
            {
                internalType: "contract IKernelValidator",
                name: "_validator",
                type: "address"
            },
            {
                internalType: "ValidUntil",
                name: "_validUntil",
                type: "uint48"
            },
            {
                internalType: "ValidAfter",
                name: "_validAfter",
                type: "uint48"
            },
            {
                internalType: "bytes",
                name: "_enableData",
                type: "bytes"
            }
        ],
        name: "setExecution",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newImplementation",
                type: "address"
            }
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "_userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256"
            }
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "ValidationData",
                name: "validationData",
                type: "uint256"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
]; //# sourceMappingURL=KernelAccountAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteBatchCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteBatchCall": (()=>encodeExecuteBatchCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
const encodeExecuteBatchCall = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelExecuteAbi"],
        functionName: "executeBatch",
        args: [
            args.map((arg)=>{
                return {
                    to: arg.to,
                    value: arg.value || 0n,
                    data: arg.data || "0x"
                };
            })
        ]
    });
}; //# sourceMappingURL=encodeExecuteBatchCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteDelegateCall": (()=>encodeExecuteDelegateCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
const encodeExecuteDelegateCall = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelExecuteAbi"],
        functionName: "executeDelegateCall",
        args: [
            args.to,
            args.data || "0x"
        ]
    });
}; //# sourceMappingURL=encodeExecuteDelegateCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteSingleCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteSingleCall": (()=>encodeExecuteSingleCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
const encodeExecuteSingleCall = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelExecuteAbi"],
        functionName: "execute",
        args: [
            args.to,
            args.value || 0n,
            args.data || "0x",
            0
        ]
    });
}; //# sourceMappingURL=encodeExecuteSingleCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeCallData": (()=>encodeCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteBatchCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteBatchCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteSingleCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteSingleCall.js [app-ssr] (ecmascript)");
;
;
;
const encodeCallData = async (calls, callType)=>{
    if (calls.length > 1) {
        if (callType === "delegatecall") {
            throw new Error("Cannot batch delegatecall");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteBatchCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteBatchCall"])(calls);
    }
    const call = calls.length === 0 ? undefined : calls[0];
    if (!call) {
        throw new Error("No calls to encode");
    }
    // Default to `call`
    if (!callType || callType === "call") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteSingleCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteSingleCall"])(call);
    }
    if (callType === "delegatecall") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteDelegateCall"])({
            to: call.to,
            data: call.data
        });
    }
    throw new Error("Invalid call type");
}; //# sourceMappingURL=encodeCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeModuleInstallCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeModuleInstallCallData": (()=>encodeModuleInstallCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeCallData.js [app-ssr] (ecmascript)");
;
;
;
const encodeModuleInstallCallData = async ({ accountAddress, enableData, executor, selector, validAfter, validUntil, validator })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCallData"])([
        {
            to: accountAddress,
            value: 0n,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelAccountAbi"],
                functionName: "setExecution",
                args: [
                    selector,
                    executor,
                    validator,
                    validUntil,
                    validAfter,
                    enableData
                ]
            })
        }
    ], "call");
}; //# sourceMappingURL=encodeModuleInstallCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/types/kernel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValidatorMode": (()=>ValidatorMode)
});
var ValidatorMode;
(function(ValidatorMode) {
    ValidatorMode["sudo"] = "0x00000000";
    ValidatorMode["plugin"] = "0x00000001";
    ValidatorMode["enable"] = "0x00000002";
})(ValidatorMode || (ValidatorMode = {})); //# sourceMappingURL=kernel.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KernelV3AccountAbi": (()=>KernelV3AccountAbi),
    "KernelV3ExecuteAbi": (()=>KernelV3ExecuteAbi),
    "KernelV3InitAbi": (()=>KernelV3InitAbi)
});
const KernelV3InitAbi = [
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "_rootValidator",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "hook",
                type: "address",
                internalType: "contract IHook"
            },
            {
                name: "validatorData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    }
];
const KernelV3ExecuteAbi = [
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeFromExecutor",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "returnData",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeUserOp",
        inputs: [
            {
                name: "userOp",
                type: "tuple",
                internalType: "struct PackedUserOperation",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "initCode",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "accountGasLimits",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "preVerificationGas",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "gasFees",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "paymasterAndData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "signature",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            },
            {
                name: "userOpHash",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    }
];
const KernelV3AccountAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_entrypoint",
                type: "address",
                internalType: "contract IEntryPoint"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "fallback",
        stateMutability: "payable"
    },
    {
        type: "receive",
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "accountId",
        inputs: [],
        outputs: [
            {
                name: "accountImplementationId",
                type: "string",
                internalType: "string"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "currentNonce",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1"
            },
            {
                name: "name",
                type: "string",
                internalType: "string"
            },
            {
                name: "version",
                type: "string",
                internalType: "string"
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "entrypoint",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IEntryPoint"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeFromExecutor",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "returnData",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeUserOp",
        inputs: [
            {
                name: "userOp",
                type: "tuple",
                internalType: "struct PackedUserOperation",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "initCode",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "accountGasLimits",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "preVerificationGas",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "gasFees",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "paymasterAndData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "signature",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            },
            {
                name: "userOpHash",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executorConfig",
        inputs: [
            {
                name: "executor",
                type: "address",
                internalType: "contract IExecutor"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ExecutorManager.ExecutorConfig",
                components: [
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "_rootValidator",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "hook",
                type: "address",
                internalType: "contract IHook"
            },
            {
                name: "validatorData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "installModule",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "initData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "installValidations",
        inputs: [
            {
                name: "vIds",
                type: "bytes21[]",
                internalType: "ValidationId[]"
            },
            {
                name: "configs",
                type: "tuple[]",
                internalType: "struct ValidationManager.ValidationConfig[]",
                components: [
                    {
                        name: "nonce",
                        type: "uint32",
                        internalType: "uint32"
                    },
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            },
            {
                name: "validationData",
                type: "bytes[]",
                internalType: "bytes[]"
            },
            {
                name: "hookData",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "invalidateNonce",
        inputs: [
            {
                name: "nonce",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "isAllowedSelector",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "selector",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isModuleInstalled",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "additionalContext",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isValidSignature",
        inputs: [
            {
                name: "hash",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "permissionConfig",
        inputs: [
            {
                name: "pId",
                type: "bytes4",
                internalType: "PermissionId"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ValidationManager.PermissionConfig",
                components: [
                    {
                        name: "permissionFlag",
                        type: "bytes2",
                        internalType: "PassFlag"
                    },
                    {
                        name: "signer",
                        type: "address",
                        internalType: "contract ISigner"
                    },
                    {
                        name: "policyData",
                        type: "bytes22[]",
                        internalType: "PolicyData[]"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "rootValidator",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes21",
                internalType: "ValidationId"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "selectorConfig",
        inputs: [
            {
                name: "selector",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct SelectorManager.SelectorConfig",
                components: [
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    },
                    {
                        name: "target",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "callType",
                        type: "bytes1",
                        internalType: "CallType"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "supportsExecutionMode",
        inputs: [
            {
                name: "mode",
                type: "bytes32",
                internalType: "ExecMode"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "supportsModule",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "uninstallModule",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "deInitData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "uninstallValidation",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "deinitData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookDeinitData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "upgradeTo",
        inputs: [
            {
                name: "_newImplementation",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "validNonceFrom",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "validateUserOp",
        inputs: [
            {
                name: "userOp",
                type: "tuple",
                internalType: "struct PackedUserOperation",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "initCode",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "accountGasLimits",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "preVerificationGas",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "gasFees",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "paymasterAndData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "signature",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            },
            {
                name: "userOpHash",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "missingAccountFunds",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "validationData",
                type: "uint256",
                internalType: "ValidationData"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "validationConfig",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ValidationManager.ValidationConfig",
                components: [
                    {
                        name: "nonce",
                        type: "uint32",
                        internalType: "uint32"
                    },
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "event",
        name: "ModuleInstalled",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ModuleUninstallResult",
        inputs: [
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            },
            {
                name: "result",
                type: "bool",
                indexed: false,
                internalType: "bool"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ModuleUninstalled",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "NonceInvalidated",
        inputs: [
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "PermissionInstalled",
        inputs: [
            {
                name: "permission",
                type: "bytes4",
                indexed: false,
                internalType: "PermissionId"
            },
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "PermissionUninstalled",
        inputs: [
            {
                name: "permission",
                type: "bytes4",
                indexed: false,
                internalType: "PermissionId"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Received",
        inputs: [
            {
                name: "sender",
                type: "address",
                indexed: false,
                internalType: "address"
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "RootValidatorUpdated",
        inputs: [
            {
                name: "rootValidator",
                type: "bytes21",
                indexed: false,
                internalType: "ValidationId"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "SelectorSet",
        inputs: [
            {
                name: "selector",
                type: "bytes4",
                indexed: false,
                internalType: "bytes4"
            },
            {
                name: "vId",
                type: "bytes21",
                indexed: false,
                internalType: "ValidationId"
            },
            {
                name: "allowed",
                type: "bool",
                indexed: false,
                internalType: "bool"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "TryExecuteUnsuccessful",
        inputs: [
            {
                name: "batchExecutionindex",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "result",
                type: "bytes",
                indexed: false,
                internalType: "bytes"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Upgraded",
        inputs: [
            {
                name: "implementation",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ValidatorInstalled",
        inputs: [
            {
                name: "validator",
                type: "address",
                indexed: false,
                internalType: "contract IValidator"
            },
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ValidatorUninstalled",
        inputs: [
            {
                name: "validator",
                type: "address",
                indexed: false,
                internalType: "contract IValidator"
            }
        ],
        anonymous: false
    },
    {
        type: "error",
        name: "EnableNotApproved",
        inputs: []
    },
    {
        type: "error",
        name: "ExecutionReverted",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidCallType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidCaller",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidExecutor",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidFallback",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidMode",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidModuleType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidNonce",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidSelector",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidSignature",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidValidationType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidValidator",
        inputs: []
    },
    {
        type: "error",
        name: "NonceInvalidationError",
        inputs: []
    },
    {
        type: "error",
        name: "NotSupportedCallType",
        inputs: []
    },
    {
        type: "error",
        name: "OnlyExecuteUserOp",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionDataLengthMismatch",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionNotAlllowedForSignature",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionNotAlllowedForUserOp",
        inputs: []
    },
    {
        type: "error",
        name: "PolicyDataTooLarge",
        inputs: []
    },
    {
        type: "error",
        name: "PolicyFailed",
        inputs: [
            {
                name: "i",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "PolicySignatureOrderError",
        inputs: []
    },
    {
        type: "error",
        name: "RootValidatorCannotBeRemoved",
        inputs: []
    },
    {
        type: "error",
        name: "SignerPrefixNotPresent",
        inputs: []
    }
]; //# sourceMappingURL=KernelAccountAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/getKernelV3Nonce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getKernelV3Nonce": (()=>getKernelV3Nonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
;
const getKernelV3Nonce = async (client, accountAddress)=>{
    try {
        const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"], "readContract")({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
            address: accountAddress,
            functionName: "currentNonce",
            args: []
        });
        return nonce === 0 ? 1 : nonce;
    } catch (error) {
        return 1;
    }
}; //# sourceMappingURL=getKernelV3Nonce.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/EIP1271Abi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EIP1271Abi": (()=>EIP1271Abi)
});
const EIP1271Abi = [
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1"
            },
            {
                name: "name",
                type: "string",
                internalType: "string"
            },
            {
                name: "version",
                type: "string",
                internalType: "string"
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isValidSignature",
        inputs: [
            {
                name: "data",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "magicValue",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "view"
    }
]; //# sourceMappingURL=EIP1271Abi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/accountMetadata.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "accountMetadata": (()=>accountMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/clients/decorators/public.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$EIP1271Abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/EIP1271Abi.js [app-ssr] (ecmascript)");
;
;
;
const accountMetadata = async (client, accountAddress, kernelVersion, chainId)=>{
    try {
        const domain = await client.request({
            method: "eth_call",
            params: [
                {
                    to: accountAddress,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$EIP1271Abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EIP1271Abi"],
                        functionName: "eip712Domain"
                    })
                },
                "latest"
            ]
        });
        if (domain !== "0x") {
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                abi: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$EIP1271Abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EIP1271Abi"]
                ],
                functionName: "eip712Domain",
                data: domain
            });
            return {
                name: decoded[1],
                version: decoded[2],
                chainId: decoded[3]
            };
        }
    } catch (error) {}
    return {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_NAME"],
        version: kernelVersion === "0.3.0" ? "0.3.0-beta" : kernelVersion,
        chainId: BigInt(chainId ?? (client.chain ? client.chain.id : await client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicActions"]).getChainId()))
    };
}; //# sourceMappingURL=accountMetadata.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/getActionSelector.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getActionSelector": (()=>getActionSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
;
const getActionSelector = (entryPointVersion)=>{
    if (entryPointVersion === "0.6") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelAccountAbi"],
            name: "execute"
        }));
    } else if (entryPointVersion === "0.7") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
            name: "execute"
        }));
    } else {
        throw new Error("Unsupported entry point version");
    }
}; //# sourceMappingURL=getActionSelector.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_6/getEncodedPluginsData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEncodedPluginsData": (()=>getEncodedPluginsData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/types/kernel.js [app-ssr] (ecmascript)");
;
;
const getEncodedPluginsData = async ({ accountAddress, enableSignature, action, validator, validUntil, validAfter })=>{
    const enableData = await validator.getEnableData(accountAddress);
    const enableDataLength = enableData.length / 2 - 1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatorMode"].enable,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(validUntil, {
            size: 6
        }), {
            size: 6
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(validAfter), {
            size: 6
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(validator.address, {
            size: 20
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(action.address, {
            size: 20
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(enableDataLength), {
            size: 32
        }),
        enableData,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(enableSignature.length / 2 - 1), {
            size: 32
        }),
        enableSignature // 120 + enableData.length - 120 + enableData.length + enableSignature.length
    ]);
}; //# sourceMappingURL=getEncodedPluginsData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_6/getPluginsEnableTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPluginsEnableTypedData": (()=>getPluginsEnableTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
const getPluginsEnableTypedData = async ({ accountAddress, chainId, kernelVersion, action, validator, validUntil, validAfter })=>{
    return {
        domain: {
            name: "Kernel",
            version: kernelVersion,
            chainId,
            verifyingContract: accountAddress
        },
        types: {
            ValidatorApproved: [
                {
                    name: "sig",
                    type: "bytes4"
                },
                {
                    name: "validatorData",
                    type: "uint256"
                },
                {
                    name: "executor",
                    type: "address"
                },
                {
                    name: "enableData",
                    type: "bytes"
                }
            ]
        },
        message: {
            sig: action.selector,
            validatorData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(validUntil ?? 0), {
                    size: 6
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(validAfter ?? 0), {
                    size: 6
                }),
                validator.address
            ]), {
                size: 32
            }),
            executor: action.address,
            enableData: await validator.getEnableData(accountAddress)
        },
        primaryType: "ValidatorApproved"
    };
}; //# sourceMappingURL=getPluginsEnableTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getEncodedPluginsData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEncodedPluginsData": (()=>getEncodedPluginsData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
;
;
const getEncodedPluginsData = async ({ enableSignature, userOpSignature, action, enableData, hook })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        hook?.getIdentifier() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])("bytes validatorData, bytes hookData, bytes selectorData, bytes enableSig, bytes userOpSig"), [
            enableData,
            await hook?.getEnableData() ?? "0x",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                action.selector,
                action.address,
                action.hook?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])("bytes selectorInitData, bytes hookInitData"), // [TODO]: Add support for other call_type
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].DELEGATE_CALL,
                    "0x0000"
                ])
            ]),
            enableSignature,
            userOpSignature
        ])
    ]);
}; //# sourceMappingURL=getEncodedPluginsData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getPluginsEnableTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPluginsEnableTypedData": (()=>getPluginsEnableTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
;
;
const getPluginsEnableTypedData = async ({ accountAddress, chainId, kernelVersion, action, hook, validator, validatorNonce })=>{
    return {
        domain: {
            name: "Kernel",
            version: kernelVersion === "0.3.0" ? "0.3.0-beta" : kernelVersion,
            chainId,
            verifyingContract: accountAddress
        },
        types: {
            Enable: [
                {
                    name: "validationId",
                    type: "bytes21"
                },
                {
                    name: "nonce",
                    type: "uint32"
                },
                {
                    name: "hook",
                    type: "address"
                },
                {
                    name: "validatorData",
                    type: "bytes"
                },
                {
                    name: "hookData",
                    type: "bytes"
                },
                {
                    name: "selectorData",
                    type: "bytes"
                }
            ]
        },
        message: {
            validationId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][validator.validatorType],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(validator.getIdentifier(), {
                    size: 20,
                    dir: "right"
                })
            ]),
            nonce: validatorNonce,
            hook: hook?.getIdentifier() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
            validatorData: await validator.getEnableData(accountAddress),
            hookData: await hook?.getEnableData(accountAddress) ?? "0x",
            selectorData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                action.selector,
                action.address,
                action.hook?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])("bytes selectorInitData, bytes hookInitData"), [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].DELEGATE_CALL,
                    "0x0000"
                ])
            ])
        },
        primaryType: "Enable"
    };
}; //# sourceMappingURL=getPluginsEnableTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/isPluginInitialized.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPluginInitialized": (()=>isPluginInitialized)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelModuleAbi.js [app-ssr] (ecmascript)");
;
;
;
const isPluginInitialized = async (client, accountAddress, pluginAddress)=>{
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"], "readContract")({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelModuleIsInitializedAbi"],
            address: pluginAddress,
            functionName: "isInitialized",
            args: [
                accountAddress
            ]
        });
    } catch (error) {}
    return false;
}; //# sourceMappingURL=isPluginInitialized.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/utils/toKernelPluginManager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isKernelPluginManager": (()=>isKernelPluginManager),
    "toKernelPluginManager": (()=>toKernelPluginManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeModuleInstallCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeModuleInstallCallData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/types/kernel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$getKernelV3Nonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/getKernelV3Nonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$accountMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/accountMetadata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$getActionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/getActionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_6$2f$getEncodedPluginsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_6/getEncodedPluginsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_6$2f$getPluginsEnableTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_6/getPluginsEnableTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getEncodedPluginsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getEncodedPluginsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getPluginsEnableTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getPluginsEnableTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$isPluginInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/isPluginInitialized.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isKernelPluginManager(// biome-ignore lint/suspicious/noExplicitAny: <explanation>
plugin) {
    return plugin?.getPluginEnableSignature !== undefined;
}
async function toKernelPluginManager(client, { sudo, regular, hook, pluginEnableSignature, validatorInitData, action, validAfter = 0, validUntil = 0, entryPoint, kernelVersion, chainId }) {
    if (sudo && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(kernelVersion, sudo?.supportedKernelVersions) || regular && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(kernelVersion, regular?.supportedKernelVersions)) {
        throw new Error("Either sudo or/and regular validator version mismatch. Update to latest plugin package and use the proper plugin version");
    }
    let pluginEnabled;
    const activeValidator = regular || sudo;
    if (!activeValidator) {
        throw new Error("One of `sudo` or `regular` validator must be set");
    }
    action = {
        selector: action?.selector ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$getActionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionSelector"])(entryPoint.version),
        address: action?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"]
    };
    if (entryPoint.version === "0.7" && (action.address.toLowerCase() !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"].toLowerCase() || action.selector.toLowerCase() !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$getActionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActionSelector"])(entryPoint.version).toLowerCase()) && kernelVersion === "0.3.0") {
        action.hook = {
            address: action.hook?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONLY_ENTRYPOINT_HOOK_ADDRESS"]
        };
    }
    if (!action) {
        throw new Error("Action data must be set");
    }
    const getSignatureData = async (accountAddress, selector, userOpSignature = "0x")=>{
        if (!action) {
            throw new Error("Action data must be set");
        }
        if (entryPoint.version === "0.6") {
            if (regular) {
                if (pluginEnabled) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatorMode"].plugin;
                }
                if (await isPluginEnabled(accountAddress, selector)) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatorMode"].plugin;
                }
                const enableSignature = await getPluginEnableSignature(accountAddress);
                if (!enableSignature) {
                    throw new Error("Enable signature not set");
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_6$2f$getEncodedPluginsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedPluginsData"])({
                    accountAddress,
                    enableSignature,
                    action,
                    validator: regular,
                    validUntil,
                    validAfter
                });
            } else if (sudo) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$types$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatorMode"].sudo;
            } else {
                throw new Error("One of `sudo` or `regular` validator must be set");
            }
        }
        if (regular) {
            if (pluginEnabled) {
                return userOpSignature;
            }
            if (await isPluginEnabled(accountAddress, action.selector)) {
                return userOpSignature;
            }
            const enableSignature = await getPluginEnableSignature(accountAddress);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getEncodedPluginsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedPluginsData"])({
                enableSignature,
                userOpSignature,
                action,
                enableData: await regular.getEnableData(accountAddress),
                hook
            });
        } else if (sudo) {
            return userOpSignature;
        } else {
            throw new Error("One of `sudo` or `regular` validator must be set");
        }
    };
    const isPluginEnabled = async (accountAddress, selector)=>{
        if (!action) {
            throw new Error("Action data must be set");
        }
        if (!regular) throw new Error("regular validator not set");
        if (entryPoint.version === "0.6") {
            return regular.isEnabled(accountAddress, selector);
        }
        const isEnabled = await regular.isEnabled(accountAddress, action.selector) || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$isPluginInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluginInitialized"])(client, accountAddress, regular.address);
        if (isEnabled) {
            pluginEnabled = true;
        }
        return isEnabled;
    };
    const getPluginEnableSignature = async (accountAddress)=>{
        if (!action) {
            throw new Error("Action data must be set");
        }
        if (pluginEnableSignature) return pluginEnableSignature;
        if (!sudo) throw new Error("sudo validator not set -- need it to enable the validator");
        if (!regular) throw new Error("regular validator not set");
        const { version } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$accountMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountMetadata"])(client, accountAddress, kernelVersion);
        if (!chainId) {
            chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client);
        }
        let ownerSig;
        if (entryPoint.version === "0.6") {
            const typeData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_6$2f$getPluginsEnableTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPluginsEnableTypedData"])({
                accountAddress,
                chainId,
                kernelVersion: version ?? kernelVersion,
                action,
                validator: regular,
                validUntil,
                validAfter
            });
            ownerSig = await sudo.signTypedData(typeData);
            pluginEnableSignature = ownerSig;
            return ownerSig;
        }
        const validatorNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$getKernelV3Nonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKernelV3Nonce"])(client, accountAddress);
        const typedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getPluginsEnableTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPluginsEnableTypedData"])({
            accountAddress,
            chainId,
            kernelVersion: version,
            action,
            hook,
            validator: regular,
            validatorNonce
        });
        ownerSig = await sudo.signTypedData(typedData);
        pluginEnableSignature = ownerSig;
        return ownerSig;
    };
    const getIdentifier = (isSudo = false)=>{
        const validator = (isSudo ? sudo : regular) ?? activeValidator;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][validator.validatorType],
            validator.getIdentifier()
        ]);
    };
    const getPluginsEnableTypedData = async (accountAddress)=>{
        if (!action) {
            throw new Error("Action data must be set");
        }
        if (!sudo) throw new Error("sudo validator not set -- need it to enable the validator");
        if (!regular) throw new Error("regular validator not set");
        const { version } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$accountMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountMetadata"])(client, accountAddress, kernelVersion);
        const validatorNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$getKernelV3Nonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKernelV3Nonce"])(client, accountAddress);
        if (!chainId) {
            chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client);
        }
        const typedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getPluginsEnableTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPluginsEnableTypedData"])({
            accountAddress,
            chainId,
            kernelVersion: version,
            action,
            validator: regular,
            validatorNonce
        });
        return typedData;
    };
    return {
        sudoValidator: sudo,
        regularValidator: regular,
        activeValidatorMode: sudo && !regular ? "sudo" : "regular",
        ...activeValidator,
        hook,
        getIdentifier,
        encodeModuleInstallCallData: async (accountAddress)=>{
            if (!action) {
                throw new Error("Action data must be set");
            }
            if (!regular) throw new Error("regular validator not set");
            if (entryPoint.version === "0.6") {
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeModuleInstallCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeModuleInstallCallData"])({
                    accountAddress,
                    selector: action.selector,
                    executor: action.address,
                    validator: regular?.address,
                    validUntil,
                    validAfter,
                    enableData: await regular.getEnableData(accountAddress)
                });
            }
            throw new Error("EntryPoint v0.7 not supported yet");
        },
        signUserOperation: async (userOperation)=>{
            const userOpSig = await activeValidator.signUserOperation(userOperation);
            if (entryPoint.version === "0.6") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                    await getSignatureData(userOperation.sender, userOperation.callData.toString().slice(0, 10)),
                    userOpSig
                ]);
            }
            return await getSignatureData(userOperation.sender, userOperation.callData.toString().slice(0, 10), userOpSig);
        },
        getAction: ()=>{
            if (!action) {
                throw new Error("Action data must be set");
            }
            return action;
        },
        getValidityData: ()=>({
                validAfter,
                validUntil
            }),
        getStubSignature: async (userOperation)=>{
            const userOpSig = await activeValidator.getStubSignature(userOperation);
            if (entryPoint.version === "0.6") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                    await getSignatureData(userOperation.sender, userOperation.callData.toString().slice(0, 10)),
                    userOpSig
                ]);
            }
            return await getSignatureData(userOperation.sender, userOperation.callData.toString().slice(0, 10), userOpSig);
        },
        getNonceKey: async (accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"], customNonceKey = 0n)=>{
            if (!action) {
                throw new Error("Action data must be set");
            }
            if (entryPoint.version === "0.6") {
                if (customNonceKey > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint192"]) {
                    throw new Error("Custom nonce key must be equal or less than maxUint192 for 0.6");
                }
                return await activeValidator.getNonceKey(accountAddress, customNonceKey);
            }
            if (customNonceKey > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint16"]) throw new Error("Custom nonce key must be equal or less than 2 bytes(maxUint16) for v0.7");
            const validatorMode = !regular || await isPluginEnabled(accountAddress, action.selector) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_MODE"].DEFAULT : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_MODE"].ENABLE;
            const validatorType = regular ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][regular.validatorType] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"].SUDO;
            const encoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                validatorMode,
                validatorType,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(activeValidator.getIdentifier(), {
                    size: 20,
                    dir: "right"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(await activeValidator.getNonceKey(accountAddress, customNonceKey)), {
                    size: 2
                }) // 2 byte
            ]), {
                size: 24
            });
            const encodedNonceKey = BigInt(encoding);
            return encodedNonceKey;
        },
        getPluginEnableSignature,
        getPluginsEnableTypedData,
        getValidatorInitData: async ()=>{
            if (validatorInitData) return validatorInitData;
            return {
                validatorAddress: sudo?.address ?? activeValidator.address,
                enableData: await sudo?.getEnableData() ?? await activeValidator.getEnableData(),
                identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(getIdentifier(true), {
                    size: 21,
                    dir: "right"
                })
            };
        },
        signUserOperationWithActiveValidator: async (userOperation)=>{
            return activeValidator.signUserOperation(userOperation);
        }
    };
} //# sourceMappingURL=toKernelPluginManager.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelFactoryAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KernelV3FactoryAbi": (()=>KernelV3FactoryAbi)
});
const KernelV3FactoryAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_impl",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "createAccount",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "getAddress",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "implementation",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "error",
        name: "InitializeError",
        inputs: []
    }
]; //# sourceMappingURL=KernelFactoryAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelFactoryStakerAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KernelFactoryStakerAbi": (()=>KernelFactoryStakerAbi)
});
const KernelFactoryStakerAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "approveFactory",
        inputs: [
            {
                name: "factory",
                type: "address",
                internalType: "contract KernelFactory"
            },
            {
                name: "approval",
                type: "bool",
                internalType: "bool"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "approved",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "contract KernelFactory"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "cancelOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "completeOwnershipHandover",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "deployWithFactory",
        inputs: [
            {
                name: "factory",
                type: "address",
                internalType: "contract KernelFactory"
            },
            {
                name: "createData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "result",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "ownershipHandoverExpiresAt",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "result",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "requestOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "stake",
        inputs: [
            {
                name: "entryPoint",
                type: "address",
                internalType: "contract IEntryPoint"
            },
            {
                name: "unstakeDelay",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "unlockStake",
        inputs: [
            {
                name: "entryPoint",
                type: "address",
                internalType: "contract IEntryPoint"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "withdrawStake",
        inputs: [
            {
                name: "entryPoint",
                type: "address",
                internalType: "contract IEntryPoint"
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address payable"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "event",
        name: "OwnershipHandoverCanceled",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "OwnershipHandoverRequested",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "oldOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "error",
        name: "AlreadyInitialized",
        inputs: []
    },
    {
        type: "error",
        name: "NewOwnerIsZeroAddress",
        inputs: []
    },
    {
        type: "error",
        name: "NoHandoverRequest",
        inputs: []
    },
    {
        type: "error",
        name: "NotApprovedFactory",
        inputs: []
    },
    {
        type: "error",
        name: "Unauthorized",
        inputs: []
    }
]; //# sourceMappingURL=KernelFactoryStakerAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_1/KernelAccountAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KernelV3_1AccountAbi": (()=>KernelV3_1AccountAbi)
});
const KernelV3_1AccountAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_entrypoint",
                type: "address",
                internalType: "contract IEntryPoint"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "fallback",
        stateMutability: "payable"
    },
    {
        type: "receive",
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "accountId",
        inputs: [],
        outputs: [
            {
                name: "accountImplementationId",
                type: "string",
                internalType: "string"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "changeRootValidator",
        inputs: [
            {
                name: "_rootValidator",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "hook",
                type: "address",
                internalType: "contract IHook"
            },
            {
                name: "validatorData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "currentNonce",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1"
            },
            {
                name: "name",
                type: "string",
                internalType: "string"
            },
            {
                name: "version",
                type: "string",
                internalType: "string"
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address"
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "entrypoint",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IEntryPoint"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeFromExecutor",
        inputs: [
            {
                name: "execMode",
                type: "bytes32",
                internalType: "ExecMode"
            },
            {
                name: "executionCalldata",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "returnData",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executeUserOp",
        inputs: [
            {
                name: "userOp",
                type: "tuple",
                internalType: "struct PackedUserOperation",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "initCode",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "accountGasLimits",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "preVerificationGas",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "gasFees",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "paymasterAndData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "signature",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            },
            {
                name: "userOpHash",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "executorConfig",
        inputs: [
            {
                name: "executor",
                type: "address",
                internalType: "contract IExecutor"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ExecutorManager.ExecutorConfig",
                components: [
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "_rootValidator",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "hook",
                type: "address",
                internalType: "contract IHook"
            },
            {
                name: "validatorData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "initConfig",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "installModule",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "initData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "installValidations",
        inputs: [
            {
                name: "vIds",
                type: "bytes21[]",
                internalType: "ValidationId[]"
            },
            {
                name: "configs",
                type: "tuple[]",
                internalType: "struct ValidationManager.ValidationConfig[]",
                components: [
                    {
                        name: "nonce",
                        type: "uint32",
                        internalType: "uint32"
                    },
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            },
            {
                name: "validationData",
                type: "bytes[]",
                internalType: "bytes[]"
            },
            {
                name: "hookData",
                type: "bytes[]",
                internalType: "bytes[]"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "invalidateNonce",
        inputs: [
            {
                name: "nonce",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "isAllowedSelector",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "selector",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isModuleInstalled",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "additionalContext",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isValidSignature",
        inputs: [
            {
                name: "hash",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "onERC1155Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "onERC721Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "address",
                internalType: "address"
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "permissionConfig",
        inputs: [
            {
                name: "pId",
                type: "bytes4",
                internalType: "PermissionId"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ValidationManager.PermissionConfig",
                components: [
                    {
                        name: "permissionFlag",
                        type: "bytes2",
                        internalType: "PassFlag"
                    },
                    {
                        name: "signer",
                        type: "address",
                        internalType: "contract ISigner"
                    },
                    {
                        name: "policyData",
                        type: "bytes22[]",
                        internalType: "PolicyData[]"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "rootValidator",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes21",
                internalType: "ValidationId"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "selectorConfig",
        inputs: [
            {
                name: "selector",
                type: "bytes4",
                internalType: "bytes4"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct SelectorManager.SelectorConfig",
                components: [
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    },
                    {
                        name: "target",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "callType",
                        type: "bytes1",
                        internalType: "CallType"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "supportsExecutionMode",
        inputs: [
            {
                name: "mode",
                type: "bytes32",
                internalType: "ExecMode"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "supportsModule",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "pure"
    },
    {
        type: "function",
        name: "uninstallModule",
        inputs: [
            {
                name: "moduleType",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                internalType: "address"
            },
            {
                name: "deInitData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "uninstallValidation",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            },
            {
                name: "deinitData",
                type: "bytes",
                internalType: "bytes"
            },
            {
                name: "hookDeinitData",
                type: "bytes",
                internalType: "bytes"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "upgradeTo",
        inputs: [
            {
                name: "_newImplementation",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "validNonceFrom",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "validateUserOp",
        inputs: [
            {
                name: "userOp",
                type: "tuple",
                internalType: "struct PackedUserOperation",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address"
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "initCode",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "accountGasLimits",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "preVerificationGas",
                        type: "uint256",
                        internalType: "uint256"
                    },
                    {
                        name: "gasFees",
                        type: "bytes32",
                        internalType: "bytes32"
                    },
                    {
                        name: "paymasterAndData",
                        type: "bytes",
                        internalType: "bytes"
                    },
                    {
                        name: "signature",
                        type: "bytes",
                        internalType: "bytes"
                    }
                ]
            },
            {
                name: "userOpHash",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "missingAccountFunds",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "validationData",
                type: "uint256",
                internalType: "ValidationData"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "validationConfig",
        inputs: [
            {
                name: "vId",
                type: "bytes21",
                internalType: "ValidationId"
            }
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ValidationManager.ValidationConfig",
                components: [
                    {
                        name: "nonce",
                        type: "uint32",
                        internalType: "uint32"
                    },
                    {
                        name: "hook",
                        type: "address",
                        internalType: "contract IHook"
                    }
                ]
            }
        ],
        stateMutability: "view"
    },
    {
        type: "event",
        name: "ModuleInstalled",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ModuleUninstallResult",
        inputs: [
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            },
            {
                name: "result",
                type: "bool",
                indexed: false,
                internalType: "bool"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ModuleUninstalled",
        inputs: [
            {
                name: "moduleTypeId",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "module",
                type: "address",
                indexed: false,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "NonceInvalidated",
        inputs: [
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "PermissionInstalled",
        inputs: [
            {
                name: "permission",
                type: "bytes4",
                indexed: false,
                internalType: "PermissionId"
            },
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "PermissionUninstalled",
        inputs: [
            {
                name: "permission",
                type: "bytes4",
                indexed: false,
                internalType: "PermissionId"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Received",
        inputs: [
            {
                name: "sender",
                type: "address",
                indexed: false,
                internalType: "address"
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "RootValidatorUpdated",
        inputs: [
            {
                name: "rootValidator",
                type: "bytes21",
                indexed: false,
                internalType: "ValidationId"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "SelectorSet",
        inputs: [
            {
                name: "selector",
                type: "bytes4",
                indexed: false,
                internalType: "bytes4"
            },
            {
                name: "vId",
                type: "bytes21",
                indexed: false,
                internalType: "ValidationId"
            },
            {
                name: "allowed",
                type: "bool",
                indexed: false,
                internalType: "bool"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "TryExecuteUnsuccessful",
        inputs: [
            {
                name: "batchExecutionindex",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "result",
                type: "bytes",
                indexed: false,
                internalType: "bytes"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Upgraded",
        inputs: [
            {
                name: "implementation",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ValidatorInstalled",
        inputs: [
            {
                name: "validator",
                type: "address",
                indexed: false,
                internalType: "contract IValidator"
            },
            {
                name: "nonce",
                type: "uint32",
                indexed: false,
                internalType: "uint32"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "ValidatorUninstalled",
        inputs: [
            {
                name: "validator",
                type: "address",
                indexed: false,
                internalType: "contract IValidator"
            }
        ],
        anonymous: false
    },
    {
        type: "error",
        name: "EnableNotApproved",
        inputs: []
    },
    {
        type: "error",
        name: "ExecutionReverted",
        inputs: []
    },
    {
        type: "error",
        name: "InitConfigError",
        inputs: [
            {
                name: "idx",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "InvalidCallType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidCaller",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidExecutor",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidFallback",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidMode",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidModuleType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidNonce",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidSelector",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidSignature",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidValidationType",
        inputs: []
    },
    {
        type: "error",
        name: "InvalidValidator",
        inputs: []
    },
    {
        type: "error",
        name: "NonceInvalidationError",
        inputs: []
    },
    {
        type: "error",
        name: "NotSupportedCallType",
        inputs: []
    },
    {
        type: "error",
        name: "OnlyExecuteUserOp",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionDataLengthMismatch",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionNotAlllowedForSignature",
        inputs: []
    },
    {
        type: "error",
        name: "PermissionNotAlllowedForUserOp",
        inputs: []
    },
    {
        type: "error",
        name: "PolicyDataTooLarge",
        inputs: []
    },
    {
        type: "error",
        name: "PolicyFailed",
        inputs: [
            {
                name: "i",
                type: "uint256",
                internalType: "uint256"
            }
        ]
    },
    {
        type: "error",
        name: "PolicySignatureOrderError",
        inputs: []
    },
    {
        type: "error",
        name: "RootValidatorCannotBeRemoved",
        inputs: []
    },
    {
        type: "error",
        name: "SignerPrefixNotPresent",
        inputs: []
    }
]; //# sourceMappingURL=KernelAccountAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/SafeCreateCallAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SafeCreateCallAbi": (()=>SafeCreateCallAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
;
const SafeCreateCallAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function performCreate(uint256 value, bytes memory deploymentData) public returns (address newContract)",
    "function performCreate2(uint256 value, bytes memory deploymentData, bytes32 salt) public returns (address newContract)"
]); //# sourceMappingURL=SafeCreateCallAbi.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/encodeSafeCreateCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeSafeCreateCall": (()=>encodeSafeCreateCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$SafeCreateCallAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/SafeCreateCallAbi.js [app-ssr] (ecmascript)");
;
;
const encodeSafeCreateCall = (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$SafeCreateCallAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeCreateCallAbi"],
        functionName: "performCreate",
        args
    });
}; //# sourceMappingURL=encodeSafeCreateCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeDeployCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeDeployCallData": (()=>encodeDeployCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$encodeSafeCreateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/encodeSafeCreateCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_6/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)");
;
;
;
;
const encodeDeployCallData = (tx)=>{
    const deployCalldataArgs = {
        to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCreateCallAddress"],
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$encodeSafeCreateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeSafeCreateCall"])([
            0n,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployData"])(tx)
        ])
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_6$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteDelegateCall"])(deployCalldataArgs);
}; //# sourceMappingURL=encodeDeployCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteCall": (()=>encodeExecuteCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
;
;
const encodeExecuteCall = (args, options, includeHooks = false)=>{
    let calldata;
    if ("calldata" in args) {
        calldata = args.calldata;
    } else {
        calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
            args.to,
            options.callType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].DELEGATE_CALL ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(args.value || 0n, {
                size: 32
            }) : "0x",
            args.data || "0x"
        ]);
    }
    const executeUserOpSig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3ExecuteAbi"],
        name: "executeUserOp"
    }));
    // The calldata using hook plugin should be as follows:
    // [0:4] - `executeUserOp` function signature
    // [4:8] - `execute` function signature
    // [8:] - `execute` function arguments
    if (includeHooks) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
            executeUserOpSig,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3ExecuteAbi"],
                functionName: "execute",
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExecMode"])(options),
                    calldata
                ]
            })
        ]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3ExecuteAbi"],
        functionName: "execute",
        args: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExecMode"])(options),
            calldata
        ]
    });
}; //# sourceMappingURL=encodeExecuteCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteBatchCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteBatchCall": (()=>encodeExecuteBatchCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteCall.js [app-ssr] (ecmascript)");
;
;
;
const encodeExecuteBatchCall = (args, options, includeHooks)=>{
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        {
            name: "executionBatch",
            type: "tuple[]",
            components: [
                {
                    name: "target",
                    type: "address"
                },
                {
                    name: "value",
                    type: "uint256"
                },
                {
                    name: "callData",
                    type: "bytes"
                }
            ]
        }
    ], [
        args.map((arg)=>{
            return {
                target: arg.to,
                value: arg.value || 0n,
                callData: arg.data || "0x"
            };
        })
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteCall"])({
        calldata
    }, {
        callType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].BATCH,
        execType: options.execType
    }, includeHooks);
}; //# sourceMappingURL=encodeExecuteBatchCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteDelegateCall": (()=>encodeExecuteDelegateCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteCall.js [app-ssr] (ecmascript)");
;
;
const encodeExecuteDelegateCall = (args, options, includeHooks)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteCall"])(args, {
        callType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].DELEGATE_CALL,
        execType: options.execType
    }, includeHooks);
}; //# sourceMappingURL=encodeExecuteDelegateCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteSingleCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeExecuteSingleCall": (()=>encodeExecuteSingleCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteCall.js [app-ssr] (ecmascript)");
;
;
const encodeExecuteSingleCall = (args, options, includeHooks)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteCall"])(args, {
        callType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALL_TYPE"].SINGLE,
        execType: options.execType
    }, includeHooks);
}; //# sourceMappingURL=encodeExecuteSingleCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/encodeCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeCallData": (()=>encodeCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteBatchCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteBatchCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteSingleCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteSingleCall.js [app-ssr] (ecmascript)");
;
;
;
;
const encodeCallData = async (calls, callType, includeHooks)=>{
    if (calls.length > 1) {
        if (callType === "delegatecall") {
            throw new Error("Cannot batch delegatecall");
        }
        // Encode a batched call
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteBatchCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteBatchCall"])(calls, {
            execType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXEC_TYPE"].DEFAULT
        }, includeHooks);
    }
    const call = calls.length === 0 ? undefined : calls[0];
    if (!call) {
        throw new Error("No calls to encode");
    }
    // Default to `call`
    if (!callType || callType === "call") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteSingleCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteSingleCall"])(call, {
            execType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXEC_TYPE"].DEFAULT
        }, includeHooks);
    }
    if (callType === "delegatecall") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteDelegateCall"])({
            to: call.to,
            data: call.data
        }, {
            execType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXEC_TYPE"].DEFAULT
        }, includeHooks);
    }
    throw new Error("Invalid call type");
}; //# sourceMappingURL=encodeCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/encodeDeployCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeDeployCallData": (()=>encodeDeployCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$encodeSafeCreateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/encodeSafeCreateCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/encodeExecuteDelegateCall.js [app-ssr] (ecmascript)");
;
;
;
;
const encodeDeployCallData = (tx)=>{
    const deployCalldataArgs = {
        to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCreateCallAddress"],
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$encodeSafeCreateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeSafeCreateCall"])([
            0n,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployData"])(tx)
        ])
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$encodeExecuteDelegateCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeExecuteDelegateCall"])(deployCalldataArgs, {
        execType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXEC_TYPE"].DEFAULT
    });
}; //# sourceMappingURL=encodeDeployCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/hashKernelSignatureWrapper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hashKernelMessageHashWrapper": (()=>hashKernelMessageHashWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
const hashKernelMessageHashWrapper = (messageHash)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        {
            type: "bytes32"
        },
        {
            type: "bytes32"
        }
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])("Kernel(bytes32 hash)")),
        messageHash
    ]));
}; //# sourceMappingURL=hashKernelSignatureWrapper.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/eip712WrapHash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eip712WrapHash": (()=>eip712WrapHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/typedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$hashKernelSignatureWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/ep0_7/hashKernelSignatureWrapper.js [app-ssr] (ecmascript)");
;
;
;
const eip712WrapHash = async (messageHash, domain, useReplayableSignature)=>{
    const { name, version, chainId, verifyingContract } = domain;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_SIG_WRAPPER, version)) {
        return messageHash;
    }
    const _chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_REPLAYABLE, version) && useReplayableSignature ? 0 : chainId;
    const _domainSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["domainSeparator"])({
        domain: {
            name,
            version,
            chainId: _chainId,
            verifyingContract
        }
    });
    let finalMessageHash = messageHash;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_SIG_WRAPPER_WITH_WRAPPED_HASH, version)) {
        finalMessageHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$ep0_7$2f$hashKernelSignatureWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKernelMessageHashWrapper"])(finalMessageHash);
    }
    const digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        "0x1901",
        _domainSeparator,
        finalMessageHash
    ]));
    return digest;
}; //# sourceMappingURL=eip712WrapHash.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getPluginInstallCallData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPluginInstallCallData": (()=>getPluginInstallCallData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelModuleAbi.js [app-ssr] (ecmascript)");
;
;
const getPluginInstallCallData = (accountAddress, plugin)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelModuleAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelModuleInstallAbi"],
        functionName: "installModule",
        args: [
            plugin.type,
            plugin.address,
            plugin.data
        ]
    });
    return {
        to: accountAddress,
        data
    };
}; //# sourceMappingURL=getPluginInstallCallData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/createKernelAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KERNEL_ADDRESSES": (()=>KERNEL_ADDRESSES),
    "createKernelAccount": (()=>createKernelAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/nonceManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/typedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$accounts$2f$toSmartAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/authorization/verifyAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getAccountNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/getAccountNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getSenderAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/getSenderAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$isPluginInstalled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/public/isPluginInstalled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2f$toSigner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils/toSigner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$addressToEmptyAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/addressToEmptyAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$signerTo7702Validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/utils/signerTo7702Validator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$toKernelPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/utils/toKernelPluginManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelFactoryAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelFactoryAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelFactoryStakerAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelFactoryStakerAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_1$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_1/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeCallData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeDeployCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_6/encodeDeployCallData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/encodeCallData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeDeployCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/account/ep0_7/encodeDeployCallData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$accountMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/accountMetadata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$eip712WrapHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/eip712WrapHash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getPluginInstallCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/plugins/ep0_7/getPluginInstallCallData.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * The account creation ABI for a kernel smart account (from the KernelFactory)
 */ const createAccountAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_implementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            }
        ],
        name: "createAccount",
        outputs: [
            {
                internalType: "address",
                name: "proxy",
                type: "address"
            }
        ],
        stateMutability: "payable",
        type: "function"
    }
];
const KERNEL_ADDRESSES = {
    ACCOUNT_LOGIC_V0_6: "0xd3082872F8B06073A021b4602e022d5A070d7cfC",
    ACCOUNT_LOGIC_V0_7: "0x94F097E1ebEB4ecA3AAE54cabb08905B239A7D27",
    FACTORY_ADDRESS_V0_6: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
    FACTORY_ADDRESS_V0_7: "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f",
    FACTORY_STAKER: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5"
};
const getKernelInitData = async ({ entryPointVersion: _entryPointVersion, kernelPluginManager, initHook, kernelVersion, initConfig })=>{
    const { enableData, identifier, validatorAddress, initConfig: initConfig_ } = await kernelPluginManager.getValidatorInitData();
    if (_entryPointVersion === "0.6") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelInitAbi"],
            functionName: "initialize",
            args: [
                validatorAddress,
                enableData
            ]
        });
    }
    if (kernelVersion === "0.3.0") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3InitAbi"],
            functionName: "initialize",
            args: [
                identifier,
                initHook && kernelPluginManager.hook ? kernelPluginManager.hook?.getIdentifier() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
                enableData,
                initHook && kernelPluginManager.hook ? await kernelPluginManager.hook?.getEnableData() : "0x"
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_1$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3_1AccountAbi"],
        functionName: "initialize",
        args: [
            identifier,
            initHook && kernelPluginManager.hook ? kernelPluginManager.hook?.getIdentifier() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"],
            enableData,
            initHook && kernelPluginManager.hook ? await kernelPluginManager.hook?.getEnableData() : "0x",
            initConfig ?? initConfig_ ?? []
        ]
    });
};
/**
 * Get the account initialization code for a kernel smart account
 * @param index
 * @param factoryAddress
 * @param accountImplementationAddress
 * @param ecdsaValidatorAddress
 */ const getAccountInitCode = async ({ index, factoryAddress, accountImplementationAddress, entryPointVersion: _entryPointVersion, kernelPluginManager, initHook, kernelVersion, initConfig, useMetaFactory })=>{
    // Build the account initialization data
    const initialisationData = await getKernelInitData({
        entryPointVersion: _entryPointVersion,
        kernelPluginManager,
        initHook,
        kernelVersion,
        initConfig
    });
    // Build the account init code
    if (_entryPointVersion === "0.6") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: createAccountAbi,
            functionName: "createAccount",
            args: [
                accountImplementationAddress,
                initialisationData,
                index
            ]
        });
    }
    if (!useMetaFactory) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelFactoryAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3FactoryAbi"],
            functionName: "createAccount",
            args: [
                initialisationData,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(index, {
                    size: 32
                })
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelFactoryStakerAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelFactoryStakerAbi"],
        functionName: "deployWithFactory",
        args: [
            factoryAddress,
            initialisationData,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(index, {
                size: 32
            })
        ]
    });
};
const getDefaultAddresses = (entryPointVersion, kernelVersion, { accountImplementationAddress, factoryAddress, metaFactoryAddress })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateKernelVersionWithEntryPoint"])(entryPointVersion, kernelVersion);
    const addresses = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelVersionToAddressesMap"][kernelVersion];
    if (!addresses) {
        throw new Error(`No addresses found for kernel version ${kernelVersion}`);
    }
    return {
        accountImplementationAddress: accountImplementationAddress ?? addresses.accountImplementationAddress,
        factoryAddress: factoryAddress ?? addresses.factoryAddress,
        metaFactoryAddress: metaFactoryAddress ?? addresses.metaFactoryAddress ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"]
    };
};
async function createKernelAccount(client, { plugins, entryPoint, index = 0n, factoryAddress: _factoryAddress, accountImplementationAddress: _accountImplementationAddress, metaFactoryAddress: _metaFactoryAddress, address, kernelVersion, initConfig, useMetaFactory: _useMetaFactory = true, eip7702Auth, eip7702Account, pluginMigrations }) {
    const isEip7702 = !!eip7702Account || !!eip7702Auth;
    if (isEip7702 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["satisfies"])(kernelVersion, ">=0.3.3")) {
        throw new Error("EIP-7702 is recommended for kernel version >=0.3.3");
    }
    const localAccount = eip7702Account ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2f$toSigner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSigner"])({
        signer: eip7702Account,
        address
    }) : undefined;
    let eip7702Validator;
    if (localAccount) {
        eip7702Validator = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$signerTo7702Validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signerTo7702Validator"])(client, {
            signer: localAccount,
            entryPoint,
            kernelVersion
        });
    }
    let useMetaFactory = _useMetaFactory;
    const { accountImplementationAddress, factoryAddress, metaFactoryAddress } = getDefaultAddresses(entryPoint.version, kernelVersion, {
        accountImplementationAddress: _accountImplementationAddress,
        factoryAddress: _factoryAddress,
        metaFactoryAddress: _metaFactoryAddress
    });
    let chainId;
    let cachedAccountMetadata;
    const getMemoizedChainId = async ()=>{
        if (chainId) return chainId;
        chainId = client.chain ? client.chain.id : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], "getChainId")({});
        return chainId;
    };
    const getMemoizedAccountMetadata = async ()=>{
        if (cachedAccountMetadata) return cachedAccountMetadata;
        cachedAccountMetadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$accountMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountMetadata"])(client, accountAddress, kernelVersion, await getMemoizedChainId());
        return cachedAccountMetadata;
    };
    const kernelPluginManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$toKernelPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKernelPluginManager"])(plugins) ? plugins : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$toKernelPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKernelPluginManager"])(client, {
        sudo: localAccount ? eip7702Validator : plugins?.sudo,
        regular: plugins?.regular,
        hook: plugins?.hook,
        action: plugins?.action,
        pluginEnableSignature: plugins?.pluginEnableSignature,
        entryPoint,
        kernelVersion,
        chainId: await getMemoizedChainId()
    });
    // initHook flag is activated only if both the hook and sudo validator are given
    // if the hook is given with regular plugins, then consider it as a hook for regular plugins
    const initHook = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$utils$2f$toKernelPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKernelPluginManager"])(plugins) ? plugins.hook && plugins.getIdentifier() === plugins.sudoValidator?.getIdentifier() : plugins?.hook && !plugins?.regular);
    // Helper to generate the init code for the smart account
    const generateInitCode = async ()=>{
        if (isEip7702) {
            return "0x";
        }
        if (!accountImplementationAddress || !factoryAddress) throw new Error("Missing account logic address or factory address");
        return getAccountInitCode({
            index,
            factoryAddress,
            accountImplementationAddress,
            entryPointVersion: entryPoint.version,
            kernelPluginManager,
            initHook,
            kernelVersion,
            initConfig,
            useMetaFactory
        });
    };
    const getFactoryArgs = async ()=>{
        if (isEip7702) {
            return {
                factory: undefined,
                factoryData: undefined
            };
        }
        return {
            factory: entryPoint.version === "0.6" || useMetaFactory === false ? factoryAddress : metaFactoryAddress,
            factoryData: await generateInitCode()
        };
    };
    // Fetch account address
    let accountAddress = address ?? (isEip7702 ? localAccount?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"] : await (async ()=>{
        const { factory, factoryData } = await getFactoryArgs();
        if (!factory || !factoryData) {
            throw new Error("Missing factory address or factory data");
        }
        // Get the sender address based on the init code
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getSenderAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSenderAddress"])(client, {
            factory,
            factoryData,
            entryPointAddress: entryPoint.address
        });
    })());
    // If account is zeroAddress try without meta factory
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(accountAddress, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"]) && useMetaFactory) {
        useMetaFactory = false;
        accountAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getSenderAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSenderAddress"])(client, {
            factory: factoryAddress,
            factoryData: await generateInitCode(),
            entryPointAddress: entryPoint.address
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(accountAddress, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"])) {
            useMetaFactory = true;
        }
    }
    const _entryPoint = {
        address: entryPoint?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint07Address"],
        abi: (entryPoint?.version ?? "0.7") === "0.6" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint06Abi"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint07Abi"],
        version: entryPoint?.version ?? "0.7"
    };
    // Cache for plugin installation status
    const pluginCache = {
        pendingPlugins: pluginMigrations || [],
        allInstalled: false
    };
    const checkPluginInstallationStatus = async ()=>{
        // Skip if no plugins or all are installed
        if (!pluginCache.pendingPlugins.length || pluginCache.allInstalled) {
            pluginCache.allInstalled = true;
            return;
        }
        // Check all pending plugins in parallel
        const installationResults = await Promise.all(pluginCache.pendingPlugins.map((plugin)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$isPluginInstalled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluginInstalled"])(client, {
                address: accountAddress,
                plugin
            })));
        // Filter out installed plugins
        pluginCache.pendingPlugins = pluginCache.pendingPlugins.filter((_, index)=>!installationResults[index]);
        pluginCache.allInstalled = pluginCache.pendingPlugins.length === 0;
    };
    const signAuthorization = async ()=>{
        const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCode"])(client, {
            address: accountAddress
        });
        // check if account has not activated 7702 with implementation address
        if (!code || code.length === 0 || !code.toLowerCase().startsWith(`0xef0100${accountImplementationAddress.slice(2).toLowerCase()}`)) {
            if (eip7702Auth && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(eip7702Auth.address, accountImplementationAddress)) {
                throw new Error("EIP-7702 authorization delegate address does not match account implementation address");
            }
            const auth = eip7702Auth ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signAuthorization"])(client, {
                account: localAccount,
                address: accountImplementationAddress,
                chainId: await getMemoizedChainId()
            });
            const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyAuthorization"])({
                authorization: auth,
                address: accountAddress
            });
            if (!verified) {
                throw new Error("Authorization verification failed");
            }
            return auth;
        }
        return undefined;
    };
    await checkPluginInstallationStatus();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$accounts$2f$toSmartAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSmartAccount"])({
        authorization: isEip7702 ? {
            account: localAccount ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$addressToEmptyAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addressToEmptyAccount"])(accountAddress),
            address: accountImplementationAddress
        } : undefined,
        kernelVersion,
        kernelPluginManager,
        accountImplementationAddress,
        factoryAddress: (await getFactoryArgs()).factory,
        generateInitCode,
        encodeModuleInstallCallData: async ()=>{
            return await kernelPluginManager.encodeModuleInstallCallData(accountAddress);
        },
        nonceKeyManager: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$nonceManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonceManager"])({
            source: {
                get: ()=>0,
                set: ()=>{}
            }
        }),
        client,
        entryPoint: _entryPoint,
        getFactoryArgs,
        async getAddress () {
            if (accountAddress) return accountAddress;
            const { factory, factoryData } = await getFactoryArgs();
            if (!factory || !factoryData) {
                throw new Error("Missing factory address or factory data");
            }
            // Get the sender address based on the init code
            accountAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getSenderAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSenderAddress"])(client, {
                factory,
                factoryData,
                entryPointAddress: entryPoint.address
            });
            return accountAddress;
        },
        // Encode the deploy call data
        async encodeDeployCallData (_tx) {
            if (entryPoint.version === "0.6") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeDeployCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployCallData"])(_tx);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeDeployCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployCallData"])(_tx);
        },
        async encodeCalls (calls, callType) {
            // Check plugin status only if we have pending plugins
            await checkPluginInstallationStatus();
            // Add plugin installation calls if needed
            if (pluginCache.pendingPlugins.length > 0 && entryPoint.version === "0.7" && kernelPluginManager.activeValidatorMode === "sudo") {
                // convert map into for loop
                const pluginInstallCalls = [];
                for (const plugin of pluginCache.pendingPlugins){
                    pluginInstallCalls.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$plugins$2f$ep0_7$2f$getPluginInstallCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPluginInstallCallData"])(accountAddress, plugin));
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCallData"])([
                    ...calls,
                    ...pluginInstallCalls
                ], callType, plugins?.hook ? true : undefined);
            }
            if (calls.length === 1 && (!callType || callType === "call") && calls[0].to.toLowerCase() === accountAddress.toLowerCase()) {
                return calls[0].data ?? "0x";
            }
            if (entryPoint.version === "0.6") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_6$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCallData"])(calls, callType);
            }
            if (plugins?.hook) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCallData"])(calls, callType, true);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$account$2f$ep0_7$2f$encodeCallData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeCallData"])(calls, callType);
        },
        eip7702Authorization: signAuthorization,
        async sign ({ hash }) {
            return this.signMessage({
                message: hash
            });
        },
        async signMessage ({ message, useReplayableSignature }) {
            const messageHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(message);
            const { name, chainId: metadataChainId, version } = await getMemoizedAccountMetadata();
            const wrappedMessageHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$eip712WrapHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eip712WrapHash"])(messageHash, {
                name,
                chainId: Number(metadataChainId),
                version,
                verifyingContract: accountAddress
            }, useReplayableSignature);
            let signature = await kernelPluginManager.signMessage({
                message: {
                    raw: wrappedMessageHash
                }
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_WITH_VALIDATOR, version)) {
                return signature;
            }
            if (useReplayableSignature && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_REPLAYABLE, version)) {
                signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAGIC_VALUE_SIG_REPLAYABLE"],
                    signature
                ]);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                kernelPluginManager.getIdentifier(),
                signature
            ]);
        },
        async signTypedData (typedData) {
            const { message, primaryType, types: _types, domain } = typedData;
            const types = {
                EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
                    domain: domain
                }),
                ..._types
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTypedData"])({
                domain: domain,
                message: message,
                primaryType: primaryType,
                types: types
            });
            const typedHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashTypedData"])(typedData);
            const { name, chainId: metadataChainId, version } = await getMemoizedAccountMetadata();
            const wrappedMessageHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$eip712WrapHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eip712WrapHash"])(typedHash, {
                name,
                chainId: Number(metadataChainId),
                version,
                verifyingContract: accountAddress
            });
            const signature = await kernelPluginManager.signMessage({
                message: {
                    raw: wrappedMessageHash
                }
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasKernelFeature"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_FEATURES"].ERC1271_WITH_VALIDATOR, version)) {
                return signature;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
                kernelPluginManager.getIdentifier(),
                signature
            ]);
        },
        // Get the nonce of the smart account
        async getNonce (_args) {
            const key = await kernelPluginManager.getNonceKey(accountAddress, _args?.key);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$public$2f$getAccountNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccountNonce"])(client, {
                address: accountAddress,
                entryPointAddress: entryPoint.address,
                key
            });
        },
        async getStubSignature (userOperation) {
            if (!userOperation) {
                throw new Error("No user operation provided");
            }
            return kernelPluginManager.getStubSignature(userOperation);
        },
        // Sign a user operation
        async signUserOperation (parameters) {
            const { chainId = await getMemoizedChainId(), ...userOperation } = parameters;
            return kernelPluginManager.signUserOperation({
                ...userOperation,
                sender: userOperation.sender ?? await this.getAddress(),
                chainId
            });
        }
    });
} //# sourceMappingURL=createKernelAccount.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/getUserOperationGasPrice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserOperationGasPrice": (()=>getUserOperationGasPrice)
});
const getUserOperationGasPrice = async (client)=>{
    const gasPrice = await client.request({
        method: "zd_getUserOperationGasPrice",
        params: []
    });
    return {
        maxFeePerGas: BigInt(gasPrice.standard.maxFeePerGas),
        maxPriorityFeePerGas: BigInt(gasPrice.standard.maxPriorityFeePerGas)
    };
}; //# sourceMappingURL=getUserOperationGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountNotFoundError": (()=>AccountNotFoundError),
    "SignTransactionNotSupportedBySmartAccountError": (()=>SignTransactionNotSupportedBySmartAccountError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class AccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath } = {}){
        super([
            "Could not find an Account to execute with this Action.",
            "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
        ].join("\n"), {
            docsPath,
            docsSlug: "account",
            name: "AccountNotFoundError"
        });
    }
}
class SignTransactionNotSupportedBySmartAccountError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super("Smart account signer doesn't need to sign transactions", {
            name: "SignTransactionNotSupportedError"
        });
    }
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/getKernelV3ModuleCurrentNonce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getKernelV3ModuleCurrentNonce": (()=>getKernelV3ModuleCurrentNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
;
async function getKernelV3ModuleCurrentNonce(client) {
    const account_ = client.account;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    try {
        const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"], "readContract")({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
            address: account.address,
            functionName: "currentNonce",
            args: []
        });
        return nonce;
    } catch (error) {
        return 1;
    }
} //# sourceMappingURL=getKernelV3ModuleCurrentNonce.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/invalidateNonce.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "invalidateNonce": (()=>invalidateNonce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
;
async function invalidateNonce(client, args) {
    const { account: account_ = client.account, nonceToSet } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
        ...args,
        calls: [
            {
                to: account.address,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
                    functionName: "invalidateNonce",
                    args: [
                        nonceToSet
                    ]
                }),
                value: 0n
            }
        ],
        account
    });
} //# sourceMappingURL=invalidateNonce.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/sendTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/smartAccount/sendTransaction.ts
__turbopack_context__.s({
    "sendTransaction": (()=>sendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$waitForUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
async function sendTransaction(client, args) {
    let userOpHash;
    if ("to" in args) {
        const { account: account_ = client.account, data, maxFeePerGas, maxPriorityFeePerGas, to, value, nonce } = args;
        if (!account_) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
                docsPath: "/docs/actions/wallet/sendTransaction"
            });
        }
        const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
        if (!to) throw new Error("Missing to address");
        userOpHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
            calls: [
                {
                    to,
                    value: value || BigInt(0),
                    data: data || "0x"
                }
            ],
            account,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce: nonce ? BigInt(nonce) : undefined
        });
    } else {
        userOpHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
            ...args
        });
    }
    const userOperationReceipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$waitForUserOperationReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForUserOperationReceipt"], "waitForUserOperationReceipt")({
        hash: userOpHash
    });
    return userOperationReceipt?.receipt.transactionHash;
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/smartAccount/signMessage.ts
__turbopack_context__.s({
    "signMessage": (()=>signMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
async function signMessage(client, { account: account_ = client.account, message }) {
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/signMessage"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    return account.signMessage({
        message
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/smartAccount/signTypedData.ts
__turbopack_context__.s({
    "signTypedData": (()=>signTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/typedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
async function signTypedData(client, { account: account_ = client.account, domain, message, primaryType, types: types_ }) {
    if (!account_) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
            docsPath: "/docs/actions/wallet/signMessage"
        });
    }
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const types = {
        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
            domain
        }),
        ...types_
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    return account.signTypedData({
        domain,
        primaryType,
        types,
        message
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/getUpgradeKernelCall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUpgradeKernelCall": (()=>getUpgradeKernelCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
;
;
;
;
function getUpgradeKernelCall(account, kernelVersion) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateKernelVersionWithEntryPoint"])(account.entryPoint.version, kernelVersion);
    const implementation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelVersionToAddressesMap"][kernelVersion].accountImplementationAddress;
    return {
        to: account.address,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
            functionName: "upgradeTo",
            args: [
                implementation
            ]
        }),
        value: 0n
    };
} //# sourceMappingURL=getUpgradeKernelCall.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/upgradeKernel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "upgradeKernel": (()=>upgradeKernel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$getUpgradeKernelCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/utils/common/getUpgradeKernelCall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
;
async function upgradeKernel(client, args) {
    const { account: account_ = client.account, kernelVersion } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$utils$2f$common$2f$getUpgradeKernelCall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUpgradeKernelCall"])(account, kernelVersion);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
        ...args,
        calls: [
            call
        ],
        account
    });
} //# sourceMappingURL=upgradeKernel.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/writeContract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Copied from: https://github.com/pimlicolabs/permissionless.js/blob/main/packages/permissionless/actions/smartAccount/writeContract.ts
__turbopack_context__.s({
    "writeContract": (()=>writeContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/sendTransaction.js [app-ssr] (ecmascript)");
;
;
;
async function writeContract(client, { abi, address, args, dataSuffix, functionName, ...request }) {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"], "sendTransaction")({
        data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
        to: address,
        ...request
    });
    return hash;
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/changeSudoValidator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "changeSudoValidator": (()=>changeSudoValidator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_1$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_1/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function changeSudoValidator(client, args) {
    const { sudoValidator, hook, ...restArgs } = args;
    const account_ = restArgs.account ?? client.account;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    let rootValidatorId;
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"].PERMISSION,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"].SECONDARY
    ].includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][sudoValidator.validatorType])) {
        rootValidatorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][sudoValidator.validatorType],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(sudoValidator.getIdentifier(), {
                size: 20,
                dir: "right"
            })
        ]);
    } else {
        throw new Error(`Cannot change sudo validator to type ${sudoValidator.validatorType}`);
    }
    const validatorData = await sudoValidator.getEnableData(account.address);
    const hookId = hook?.getIdentifier() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroAddress"];
    const hookData = await hook?.getEnableData(account.address) ?? "0x";
    /**
     * @dev Kernel v3.0 does not support changeRootValidator directly, so we need to use delegatecall to call changeRootValidator on Kernel v3.1 implementation contract
     */ if (account.kernelVersion === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_V3_0"]) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
            ...restArgs,
            callData: await account.encodeCalls([
                {
                    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelVersionToAddressesMap"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KERNEL_V3_1"]].accountImplementationAddress,
                    value: 0n,
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_1$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3_1AccountAbi"],
                        functionName: "changeRootValidator",
                        args: [
                            rootValidatorId,
                            hookId,
                            validatorData,
                            hookData
                        ]
                    })
                }
            ], "delegatecall")
        });
    }
    /**
     * @dev Kernel v3.1 supports changeRootValidator directly
     */ return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
        ...restArgs,
        callData: await account.encodeCalls([
            {
                to: account.address,
                value: 0n,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_1$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3_1AccountAbi"],
                    functionName: "changeRootValidator",
                    args: [
                        rootValidatorId,
                        hookId,
                        validatorData,
                        hookData
                    ]
                })
            }
        ])
    });
} //# sourceMappingURL=changeSudoValidator.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signUserOperation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signUserOperation": (()=>signUserOperation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
async function signUserOperation(client, args) {
    const { account: account_ = client.account } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const userOperation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"], "prepareUserOperation")({
        ...args,
        account
    });
    userOperation.signature = await account.signUserOperation(userOperation);
    return userOperation;
} //# sourceMappingURL=signUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/uninstallPlugin.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "uninstallPlugin": (()=>uninstallPlugin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/accounts/kernel/abi/kernel_v_3_0_0/KernelAccountAbi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/errors/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
async function uninstallPlugin(client, args) {
    const { account: account_ = client.account, plugin, hook, ...restArgs } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: "/docs/actions/wallet/sendTransaction"
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    let validatorId;
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"].PERMISSION,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"].SECONDARY
    ].includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][plugin.validatorType])) {
        validatorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATOR_TYPE"][plugin.validatorType],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(plugin.getIdentifier(), {
                size: 20,
                dir: "right"
            })
        ]);
    } else {
        throw new Error(`Cannot uninstall ${plugin.validatorType} plugin`);
    }
    const validatorData = await plugin.getEnableData(account.address);
    const hookData = await hook?.getEnableData(account.address) ?? "0x";
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$sendUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendUserOperation"], "sendUserOperation")({
        ...restArgs,
        calls: [
            {
                to: account.address,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$accounts$2f$kernel$2f$abi$2f$kernel_v_3_0_0$2f$KernelAccountAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelV3AccountAbi"],
                    functionName: "uninstallValidation",
                    args: [
                        validatorId,
                        validatorData,
                        hookData
                    ]
                }),
                value: 0n
            }
        ],
        account
    });
} //# sourceMappingURL=uninstallPlugin.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/paymaster/estimateGasInERC20.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateGasInERC20": (()=>estimateGasInERC20)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
;
;
const estimateGasInERC20 = async (client, args)=>{
    const response = await client.request({
        method: "stackup_getERC20TokenQuotes",
        params: [
            {
                chainId: client.chain?.id,
                userOp: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepHexlify"])(args.userOperation),
                    initCode: args.userOperation.initCode || "0x"
                },
                tokenAddress: args.gasTokenAddress,
                entryPointAddress: args.entryPoint ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint06Address"]
            }
        ]
    });
    const result = {
        maxGasCostToken: response.maxGasCostToken,
        tokenDecimals: response.tokenDecimals
    };
    const amount = Number(result.maxGasCostToken) / 10 ** Number(result.tokenDecimals);
    return {
        amount
    };
}; //# sourceMappingURL=estimateGasInERC20.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/paymaster/sponsorUserOperation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sponsorUserOperation": (()=>sponsorUserOperation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/utils.js [app-ssr] (ecmascript)");
;
;
;
const sponsorUserOperation = async (client, args)=>{
    const { userOperation: { chainId, entryPointAddress, context, // @ts-ignore
    calls, // @ts-ignore
    account, ..._userOperation } } = args;
    const response = await client.request({
        method: "zd_sponsorUserOperation",
        params: [
            {
                chainId: client.chain?.id,
                userOp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepHexlify"])(_userOperation),
                entryPointAddress: entryPointAddress,
                gasTokenData: args.gasToken && {
                    tokenAddress: args.gasToken
                },
                shouldOverrideFee: args.shouldOverrideFee ?? false,
                shouldConsume: args.shouldConsume ?? true
            }
        ]
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(entryPointAddress, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entryPoint06Address"])) {
        return {
            paymasterAndData: response.paymasterAndData,
            preVerificationGas: BigInt(response.preVerificationGas),
            verificationGasLimit: BigInt(response.verificationGasLimit),
            callGasLimit: BigInt(response.callGasLimit),
            maxFeePerGas: response.maxFeePerGas ? BigInt(response.maxFeePerGas) : args.userOperation.maxFeePerGas,
            maxPriorityFeePerGas: response.maxPriorityFeePerGas ? BigInt(response.maxPriorityFeePerGas) : args.userOperation.maxPriorityFeePerGas
        };
    }
    const responseV07 = response;
    return {
        callGasLimit: BigInt(responseV07.callGasLimit),
        verificationGasLimit: BigInt(responseV07.verificationGasLimit),
        preVerificationGas: BigInt(responseV07.preVerificationGas),
        paymaster: responseV07.paymaster,
        paymasterVerificationGasLimit: BigInt(responseV07.paymasterVerificationGasLimit),
        paymasterPostOpGasLimit: BigInt(responseV07.paymasterPostOpGasLimit),
        paymasterData: responseV07.paymasterData,
        maxFeePerGas: response.maxFeePerGas ? BigInt(response.maxFeePerGas) : args.userOperation.maxFeePerGas,
        maxPriorityFeePerGas: response.maxPriorityFeePerGas ? BigInt(response.maxPriorityFeePerGas) : args.userOperation.maxPriorityFeePerGas
    };
}; //# sourceMappingURL=sponsorUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/clients/decorators/kernel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "kernelAccountClientActions": (()=>kernelAccountClientActions),
    "zerodevPaymasterActions": (()=>zerodevPaymasterActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getKernelV3ModuleCurrentNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/getKernelV3ModuleCurrentNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getUserOperationGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/getUserOperationGasPrice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$invalidateNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/invalidateNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/sendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$upgradeKernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/upgradeKernel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/writeContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$changeSudoValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/changeSudoValidator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/signUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$uninstallPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/uninstallPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$paymaster$2f$estimateGasInERC20$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/paymaster/estimateGasInERC20.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$paymaster$2f$sponsorUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/paymaster/sponsorUserOperation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const zerodevPaymasterActions = ()=>(client)=>({
            sponsorUserOperation: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$paymaster$2f$sponsorUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sponsorUserOperation"])(client, {
                    ...args
                }),
            estimateGasInERC20: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$paymaster$2f$estimateGasInERC20$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateGasInERC20"])(client, args)
        });
function kernelAccountClientActions() {
    return (client)=>({
            signUserOperation: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUserOperation"])(client, args),
            getUserOperationGasPrice: async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getUserOperationGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationGasPrice"])(client),
            uninstallPlugin: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$uninstallPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uninstallPlugin"])(client, args),
            changeSudoValidator: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$changeSudoValidator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["changeSudoValidator"])(client, args),
            invalidateNonce: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$invalidateNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invalidateNonce"])(client, args),
            getKernelV3ModuleCurrentNonce: async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getKernelV3ModuleCurrentNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKernelV3ModuleCurrentNonce"])(client),
            upgradeKernel: async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$upgradeKernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upgradeKernel"])(client, args),
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(client, args),
            signMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(client, args),
            signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTypedData"])(client, args),
            writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeContract"])(client, args)
        });
} //# sourceMappingURL=kernel.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/clients/kernelAccountClient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createKernelAccountClient": (()=>createKernelAccountClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getUserOperationGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/actions/account-client/getUserOperationGasPrice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$clients$2f$decorators$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/clients/decorators/kernel.js [app-ssr] (ecmascript)");
;
;
;
;
function createKernelAccountClient(parameters) {
    const { client: client_, key = "Account", name = "Kernel Account Client", paymaster, paymasterContext, bundlerTransport, userOperation } = parameters;
    const client = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        chain: parameters.chain ?? client_?.chain,
        transport: bundlerTransport,
        key,
        name,
        type: "kernelAccountClient",
        pollingInterval: parameters.pollingInterval ?? 1000
    }), {
        client: client_,
        paymaster,
        paymasterContext,
        userOperation
    });
    if (parameters.userOperation?.prepareUserOperation) {
        const customPrepareUserOp = parameters.userOperation.prepareUserOperation;
        return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bundlerActions"]).extend((_client)=>({
                prepareUserOperation: (args)=>{
                    return customPrepareUserOp(_client, args);
                }
            })).extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bundlerActions"]).extend((_client)=>({
                prepareUserOperation: (args)=>{
                    return customPrepareUserOp(_client, args);
                }
            })).extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$clients$2f$decorators$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kernelAccountClientActions"])());
    }
    if (!client.userOperation?.estimateFeesPerGas) {
        client.userOperation = {
            ...client.userOperation,
            estimateFeesPerGas: async ({ bundlerClient })=>{
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$actions$2f$account$2d$client$2f$getUserOperationGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOperationGasPrice"])(bundlerClient);
            }
        };
    }
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bundlerActions"]).extend((_client)=>({
            prepareUserOperation: async (args)=>{
                let _args = args;
                if (_client.account?.authorization) {
                    const authorization = args.authorization || await _client.account?.eip7702Authorization?.();
                    _args = {
                        ...args,
                        authorization
                    };
                }
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"])(_client, _args);
            }
        })).extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bundlerActions"]).extend((_client)=>({
            prepareUserOperation: async (args)=>{
                let _args = args;
                if (_client.account?.authorization) {
                    const authorization = args.authorization || await _client.account?.eip7702Authorization?.();
                    _args = {
                        ...args,
                        authorization
                    };
                }
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$actions$2f$bundler$2f$prepareUserOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareUserOperation"])(_client, _args);
            }
        })).extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$clients$2f$decorators$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kernelAccountClientActions"])());
} //# sourceMappingURL=kernelAccountClient.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/clients/paymasterClient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createZeroDevPaymasterClient": (()=>createZeroDevPaymasterClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$paymaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/account-abstraction/clients/decorators/paymaster.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$clients$2f$decorators$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_esm/clients/decorators/kernel.js [app-ssr] (ecmascript)");
;
;
;
const createZeroDevPaymasterClient = (parameters)=>{
    const { key = "public", name = "ZeroDev Paymaster Client", transport } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        transport: (opts)=>{
            return transport({
                ...opts,
                retryCount: 0
            });
        },
        key,
        name,
        type: "zerodevPaymasterClient"
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$decorators$2f$paymaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymasterActions"]).extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zerodev$2b$sdk$40$5$2e$4$2e$36_viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3_$2f$node_modules$2f40$zerodev$2f$sdk$2f$_esm$2f$clients$2f$decorators$2f$kernel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zerodevPaymasterActions"])());
}; //# sourceMappingURL=paymasterClient.js.map
}}),
"[project]/node_modules/.pnpm/@zerodev+sdk@5.4.36_viem@2.31.2_typescript@5.8.3_/node_modules/@zerodev/sdk/_cjs/constants.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KERNEL_7702_DELEGATION_ADDRESS = exports.getEntryPoint = exports.KERNEL_IMPLEMENTATION_SLOT = exports.KernelFactoryToInitCodeHashMap = exports.safeCreateCallAddress = exports.PLUGIN_TYPE = exports.EXEC_TYPE = exports.CALL_TYPE = exports.VALIDATOR_MODE = exports.VALIDATOR_TYPE = exports.KERNEL_NAME = exports.ONLY_ENTRYPOINT_HOOK_ADDRESS = exports.TOKEN_ACTION = exports.KERNEL_V3_3 = exports.KERNEL_V3_3_BETA = exports.KERNEL_V3_2 = exports.KERNEL_V3_1 = exports.KERNEL_V3_0 = exports.KERNEL_V2_4 = exports.KERNEL_V2_3 = exports.KERNEL_V2_2 = exports.KERNEL_V0_2 = exports.KernelVersionToAddressesMap = exports.FACTORY_ADDRESS_V0_6_INIT_CODE_HASH = exports.FACTORY_ADDRESS_V0_6 = exports.MAGIC_VALUE_SIG_REPLAYABLE = exports.DUMMY_ECDSA_SIG = void 0;
const viem_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/index.js [app-ssr] (ecmascript)");
const account_abstraction_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/index.js [app-ssr] (ecmascript)");
exports.DUMMY_ECDSA_SIG = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
exports.MAGIC_VALUE_SIG_REPLAYABLE = "0x0555ad2729e8da1777a4e5020806f8bf7601c3db6bfe402f410a34958363a95a";
exports.FACTORY_ADDRESS_V0_6 = "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3";
exports.FACTORY_ADDRESS_V0_6_INIT_CODE_HASH = "0xee9d8350bd899dd261db689aafd87eb8a30f085adbaff48152399438ff4eed73";
exports.KernelVersionToAddressesMap = {
    "0.0.2": {
        accountImplementationAddress: viem_1.zeroAddress,
        factoryAddress: "0xaee9762ce625e0a8f7b184670fb57c37bfe1d0f1"
    },
    "0.2.2": {
        accountImplementationAddress: "0x0DA6a956B9488eD4dd761E59f52FDc6c8068E6B5",
        factoryAddress: exports.FACTORY_ADDRESS_V0_6,
        initCodeHash: exports.FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.2.3": {
        accountImplementationAddress: "0xD3F582F6B4814E989Ee8E96bc3175320B5A540ab",
        factoryAddress: exports.FACTORY_ADDRESS_V0_6,
        initCodeHash: exports.FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.2.4": {
        accountImplementationAddress: "0xd3082872F8B06073A021b4602e022d5A070d7cfC",
        factoryAddress: exports.FACTORY_ADDRESS_V0_6,
        initCodeHash: exports.FACTORY_ADDRESS_V0_6_INIT_CODE_HASH
    },
    "0.3.0": {
        accountImplementationAddress: "0x94F097E1ebEB4ecA3AAE54cabb08905B239A7D27",
        factoryAddress: "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0x6fe6e6ea30eddce942b9618033ab8429f9ddac594053bec8a6744fffc71976e2"
    },
    "0.3.1": {
        accountImplementationAddress: "0xBAC849bB641841b44E965fB01A4Bf5F074f84b4D",
        factoryAddress: "0xaac5D4240AF87249B3f71BC8E4A2cae074A3E419",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0x85d96aa1c9a65886d094915d76ccae85f14027a02c1647dde659f869460f03e6"
    },
    "0.3.2": {
        accountImplementationAddress: "0xD830D15D3dc0C269F3dBAa0F3e8626d33CFdaBe1",
        factoryAddress: "0x7a1dBAB750f12a90EB1B60D2Ae3aD17D4D81EfFe",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0xc7c48c9dd12de68b8a4689b6f8c8c07b61d4d6fa4ddecdd86a6980d045fa67eb"
    },
    "0.3.3": {
        accountImplementationAddress: "0xd6CEDDe84be40893d153Be9d467CD6aD37875b28",
        factoryAddress: "0x2577507b78c2008Ff367261CB6285d44ba5eF2E9",
        metaFactoryAddress: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        initCodeHash: "0xc452397f1e7518f8cea0566ac057e243bb1643f6298aba8eec8cdee78ee3b3dd"
    }
};
exports.KERNEL_V0_2 = "0.0.2";
exports.KERNEL_V2_2 = "0.2.2";
exports.KERNEL_V2_3 = "0.2.3";
exports.KERNEL_V2_4 = "0.2.4";
exports.KERNEL_V3_0 = "0.3.0";
exports.KERNEL_V3_1 = "0.3.1";
exports.KERNEL_V3_2 = "0.3.2";
exports.KERNEL_V3_3_BETA = "0.3.3";
exports.KERNEL_V3_3 = "0.3.3";
exports.TOKEN_ACTION = "0x2087C7FfD0d0DAE80a00EE74325aBF3449e0eaf1";
exports.ONLY_ENTRYPOINT_HOOK_ADDRESS = "0xb230f0A1C7C95fa11001647383c8C7a8F316b900";
exports.KERNEL_NAME = "Kernel";
exports.VALIDATOR_TYPE = {
    SUDO: "0x00",
    SECONDARY: "0x01",
    PERMISSION: "0x02"
};
var VALIDATOR_MODE;
(function(VALIDATOR_MODE) {
    VALIDATOR_MODE["DEFAULT"] = "0x00";
    VALIDATOR_MODE["ENABLE"] = "0x01";
})(VALIDATOR_MODE || (exports.VALIDATOR_MODE = VALIDATOR_MODE = {}));
var CALL_TYPE;
(function(CALL_TYPE) {
    CALL_TYPE["SINGLE"] = "0x00";
    CALL_TYPE["BATCH"] = "0x01";
    CALL_TYPE["DELEGATE_CALL"] = "0xFF";
})(CALL_TYPE || (exports.CALL_TYPE = CALL_TYPE = {}));
var EXEC_TYPE;
(function(EXEC_TYPE) {
    EXEC_TYPE["DEFAULT"] = "0x00";
    EXEC_TYPE["TRY_EXEC"] = "0x01";
})(EXEC_TYPE || (exports.EXEC_TYPE = EXEC_TYPE = {}));
exports.PLUGIN_TYPE = {
    VALIDATOR: 1,
    EXECUTOR: 2,
    FALLBACK: 3,
    HOOK: 4,
    POLICY: 5,
    SIGNER: 6
};
exports.safeCreateCallAddress = "0x9b35Af71d77eaf8d7e40252370304687390A1A52";
exports.KernelFactoryToInitCodeHashMap = {
    "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3": "0xee9d8350bd899dd261db689aafd87eb8a30f085adbaff48152399438ff4eed73",
    "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f": "0x6fe6e6ea30eddce942b9618033ab8429f9ddac594053bec8a6744fffc71976e2"
};
exports.KERNEL_IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
const getEntryPoint = (entryPointVersion)=>{
    if (entryPointVersion === "0.6") return {
        address: account_abstraction_1.entryPoint06Address,
        version: entryPointVersion
    };
    return {
        address: account_abstraction_1.entryPoint07Address,
        version: entryPointVersion
    };
};
exports.getEntryPoint = getEntryPoint;
exports.KERNEL_7702_DELEGATION_ADDRESS = "0xd6CEDDe84be40893d153Be9d467CD6aD37875b28"; //# sourceMappingURL=constants.js.map
}}),

};

//# sourceMappingURL=ee822_%40zerodev_sdk_227b4d58._.js.map