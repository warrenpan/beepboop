(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionCount": (()=>getTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : blockTag
        ]
    }, {
        dedupe: Boolean(blockNumber)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(count);
} //# sourceMappingURL=getTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCode": (()=>getCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    if (hex === '0x') return undefined;
    return hex;
} //# sourceMappingURL=getCode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "call": (()=>call),
    "getRevertErrorData": (()=>getRevertErrorData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/BlockOverrides.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getCallError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
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
async function call(client, args) {
    const { account: account_ = client.account, authorizationList, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, blobs, blockOverrides, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    if (code && (factory || factoryData)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Cannot provide both `code` & `to` as parameters.');
    // Check if the call is deployless via bytecode.
    const deploylessCallViaBytecode = code && data_;
    // Check if the call is deployless via a factory.
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (()=>{
        if (deploylessCallViaBytecode) return toDeploylessCallViaBytecodeData({
            code,
            data: data_
        });
        if (deploylessCallViaFactory) return toDeploylessCallViaFactoryData({
            data: data_,
            factory,
            factoryData,
            to
        });
        return data_;
    })();
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcBlockOverrides = blockOverrides ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRpc"])(blockOverrides) : undefined;
        const rpcStateOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            authorizationList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value
        });
        if (batch && shouldPerformMulticall({
            request
        }) && !rpcStateOverride && !rpcBlockOverrides) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag
                });
            } catch (err) {
                if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChainNotConfiguredError"]) && !(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainDoesNotSupportContract"])) throw err;
            }
        }
        const params = (()=>{
            const base = [
                request,
                block
            ];
            if (rpcStateOverride && rpcBlockOverrides) return [
                ...base,
                rpcStateOverride,
                rpcBlockOverrides
            ];
            if (rpcStateOverride) return [
                ...base,
                rpcStateOverride
            ];
            if (rpcBlockOverrides) return [
                ...base,
                {},
                rpcBlockOverrides
            ];
            return base;
        })();
        const response = await client.request({
            method: 'eth_call',
            params
        });
        if (response === '0x') return {
            data: undefined
        };
        return {
            data: response
        };
    } catch (err) {
        const data = getRevertErrorData(err);
        // Check for CCIP-Read offchain lookup signature.
        const { offchainLookup, offchainLookupSignature } = await __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ccip.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        if (client.ccipRead !== false && data?.slice(0, 10) === offchainLookupSignature && to) return {
            data: await offchainLookup(client, {
                data,
                to
            })
        };
        // Check for counterfactual deployment error.
        if (deploylessCall && data?.slice(0, 10) === '0x101bb98d') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CounterfactualDeploymentFailedError"]({
            factory
        });
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aggregate3Signature"])) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== 'undefined').length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChainNotConfiguredError"]();
        multicallAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3'
        });
    }
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch (args) {
            const size = args.reduce((size, { data })=>size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests)=>{
            const calls = requests.map((request)=>({
                    allowFailure: true,
                    callData: request.data,
                    target: request.to
                }));
            const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
                args: [
                    calls
                ],
                functionName: 'aggregate3'
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        data: calldata,
                        to: multicallAddress
                    },
                    block
                ]
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
                args: [
                    calls
                ],
                functionName: 'aggregate3',
                data: data || '0x'
            });
        }
    });
    const [{ returnData, success }] = await schedule({
        data,
        to
    });
    if (!success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"]({
        data: returnData
    });
    if (returnData === '0x') return {
        data: undefined
    };
    return {
        data: returnData
    };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbi"])([
            'constructor(bytes, bytes)'
        ]),
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaBytecodeBytecode"],
        args: [
            code,
            data
        ]
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbi"])([
            'constructor(address, bytes, address, bytes)'
        ]),
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaFactoryBytecode"],
        args: [
            to,
            data,
            factory,
            factoryData
        ]
    });
}
function getRevertErrorData(err) {
    if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"])) return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
} //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "readContract": (()=>readContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
;
;
;
;
;
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')({
            ...rest,
            data: calldata,
            to: address
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName
        });
    }
} //# sourceMappingURL=readContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getChainId": (()=>getChainId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
;
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId'
    }, {
        dedupe: true
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainIdHex);
} //# sourceMappingURL=getChainId.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prepareAuthorization": (()=>prepareAuthorization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/eip7702/prepareAuthorization'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const executor = (()=>{
        if (!parameters.executor) return undefined;
        if (parameters.executor === 'self') return parameters.executor;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce
    };
    if (typeof authorization.chainId === 'undefined') authorization.chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending'
        });
        if (executor === 'self' || executor?.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])(executor.address, account.address)) authorization.nonce += 1;
    }
    return authorization;
} //# sourceMappingURL=prepareAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signAuthorization.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signAuthorization": (()=>signAuthorization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)");
;
;
;
async function signAuthorization(client, parameters) {
    const { account: account_ = client.account } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/eip7702/signAuthorization'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    if (!account.signAuthorization) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
        docsPath: '/docs/eip7702/signAuthorization',
        metaMessages: [
            'The `signAuthorization` Action does not support JSON-RPC Accounts.'
        ],
        type: account.type
    });
    const authorization = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareAuthorization"])(client, parameters);
    return account.signAuthorization(authorization);
} //# sourceMappingURL=signAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/simulateContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "simulateContract": (()=>simulateContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(callRequest.account) : client.account;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
            account
        });
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
        const minimizedAbi = abi.filter((abiItem)=>'name' in abiItem && abiItem.name === parameters.functionName);
        return {
            result,
            request: {
                abi: minimizedAbi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
                account
            }
        };
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=simulateContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/addChain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addChain": (()=>addChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(id),
                chainName: name,
                nativeCurrency,
                rpcUrls: rpcUrls.default.http,
                blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url })=>url) : undefined
            }
        ]
    }, {
        dedupe: true,
        retryCount: 0
    });
} //# sourceMappingURL=addChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBlock": (()=>getBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/block.js [app-client] (ecmascript)");
;
;
;
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
    const blockTag = blockTag_ ?? 'latest';
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [
                blockHash,
                includeTransactions
            ]
        }, {
            dedupe: true
        });
    } else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [
                blockNumberHex || blockTag,
                includeTransactions
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!block) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNotFoundError"]({
        blockHash,
        blockNumber
    });
    const format = client.chain?.formatters?.block?.format || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBlock"];
    return format(block);
} //# sourceMappingURL=getBlock.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Returns the current price of gas (in wei).
 *
 * - Docs: https://viem.sh/docs/actions/public/getGasPrice
 * - JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)
 *
 * @param client - Client to use
 * @returns The gas price (in wei). {@link GetGasPriceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getGasPrice } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasPrice = await getGasPrice(client)
 */ __turbopack_context__.s({
    "getGasPrice": (()=>getGasPrice)
});
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice'
    });
    return BigInt(gasPrice);
} //# sourceMappingURL=getGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateMaxPriorityFeePerGas": (()=>estimateMaxPriorityFeePerGas),
    "internal_estimateMaxPriorityFeePerGas": (()=>internal_estimateMaxPriorityFeePerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({});
            const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
                block,
                client,
                request
            });
            if (maxPriorityFeePerGas_ === null) throw new Error();
            return maxPriorityFeePerGas_;
        }
        if (typeof maxPriorityFeePerGas !== 'undefined') return maxPriorityFeePerGas;
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas'
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGasHex);
    } catch  {
        // If the RPC Provider does not support `eth_maxPriorityFeePerGas`
        // fall back to calculating it manually via `gasPrice - baseFeePerGas`.
        // See: https://github.com/ethereum/pm/issues/328#:~:text=eth_maxPriorityFeePerGas%20after%20London%20will%20effectively%20return%20eth_gasPrice%20%2D%20baseFee
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"], 'getGasPrice')({})
        ]);
        if (typeof block.baseFeePerGas !== 'bigint') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n) return 0n;
        return maxPriorityFeePerGas;
    }
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateFeesPerGas": (()=>estimateFeesPerGas),
    "internal_estimateFeesPerGas": (()=>internal_estimateFeesPerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559' } = args || {};
    const baseFeeMultiplier = await (async ()=>{
        if (typeof chain?.fees?.baseFeeMultiplier === 'function') return chain.fees.baseFeeMultiplier({
            block: block_,
            client,
            request
        });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseFeeScalarError"]();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base)=>base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
    const block = block_ ? block_ : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({});
    if (typeof chain?.fees?.estimateFeesPerGas === 'function') {
        const fees = await chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type
        });
        if (fees !== null) return fees;
    }
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
        const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === 'bigint' ? request.maxPriorityFeePerGas : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateMaxPriorityFeePerGas"])(client, {
            block: block,
            chain,
            request
        });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
    const gasPrice = request?.gasPrice ?? multiply(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"], 'getGasPrice')({}));
    return {
        gasPrice
    };
} //# sourceMappingURL=estimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBalance": (()=>getBalance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getBalance(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    });
    return BigInt(balance);
} //# sourceMappingURL=getBalance.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateGas": (()=>estimateGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getEstimateGasError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getEstimateGasError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)");
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
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    try {
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, {
            ...args,
            parameters: // Some RPC Providers do not compute versioned hashes from blobs. We will need
            // to compute them.
            account?.type === 'local' ? undefined : [
                'blobVersionedHashes'
            ]
        });
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(stateOverride);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (rest.to) return rest.to;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            authorizationList,
            blobs,
            blobVersionedHashes,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        function estimateGas_rpc(parameters) {
            const { block, request, rpcStateOverride } = parameters;
            return client.request({
                method: 'eth_estimateGas',
                params: rpcStateOverride ? [
                    request,
                    block ?? 'latest',
                    rpcStateOverride
                ] : block ? [
                    request,
                    block
                ] : [
                    request
                ]
            });
        }
        let estimate = BigInt(await estimateGas_rpc({
            block,
            request,
            rpcStateOverride
        }));
        // TODO(7702): Remove this once https://github.com/ethereum/execution-apis/issues/561 is resolved.
        //       Authorization list schema is not implemented on JSON-RPC spec yet, so we need to
        //       manually estimate the gas.
        if (authorizationList) {
            const value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"])(client, {
                address: request.from
            });
            const estimates = await Promise.all(authorizationList.map(async (authorization)=>{
                const { address } = authorization;
                const estimate = await estimateGas_rpc({
                    block,
                    request: {
                        authorizationList: undefined,
                        data,
                        from: account?.address,
                        to: address,
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(value)
                    },
                    rpcStateOverride
                }).catch(()=>100000n);
                return 2n * BigInt(estimate);
            }));
            estimate += estimates.reduce((acc, curr)=>acc + curr, 0n);
        }
        return estimate;
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getEstimateGasError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEstimateGasError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultParameters": (()=>defaultParameters),
    "eip1559NetworkCache": (()=>eip1559NetworkCache),
    "prepareTransactionRequest": (()=>prepareTransactionRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
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
const defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type'
];
const eip1559NetworkCache = /*#__PURE__*/ new Map();
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = defaultParameters, type } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : account_;
    const request = {
        ...args,
        ...account ? {
            from: account?.address
        } : {}
    };
    let block;
    async function getBlock() {
        if (block) return block;
        block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
            blockTag: 'latest'
        });
        return block;
    }
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (chain) return chain.id;
        if (typeof args.chainId !== 'undefined') return args.chainId;
        const chainId_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    if (parameters.includes('nonce') && typeof nonce === 'undefined' && account) {
        if (nonceManager) {
            const chainId = await getChainId();
            request.nonce = await nonceManager.consume({
                address: account.address,
                chainId,
                client
            });
        } else {
            request.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
                address: account.address,
                blockTag: 'pending'
            });
        }
    }
    if ((parameters.includes('blobVersionedHashes') || parameters.includes('sidecars')) && blobs && kzg) {
        const commitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
            blobs,
            kzg
        });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentsToVersionedHashes"])({
                commitments,
                to: 'hex'
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToProofs"])({
                blobs,
                commitments,
                kzg
            });
            const sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
                blobs,
                commitments,
                proofs,
                to: 'hex'
            });
            request.sidecars = sidecars;
        }
    }
    if (parameters.includes('chainId')) request.chainId = await getChainId();
    if ((parameters.includes('fees') || parameters.includes('type')) && typeof type === 'undefined') {
        try {
            request.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionType"])(request);
        } catch  {
            let isEip1559Network = eip1559NetworkCache.get(client.uid);
            if (typeof isEip1559Network === 'undefined') {
                const block = await getBlock();
                isEip1559Network = typeof block?.baseFeePerGas === 'bigint';
                eip1559NetworkCache.set(client.uid, isEip1559Network);
            }
            request.type = isEip1559Network ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        // TODO(4844): derive blob base fees once https://github.com/ethereum/execution-apis/pull/486 is merged.
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            // EIP-1559 fees
            if (typeof request.maxFeePerGas === 'undefined' || typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateFeesPerGas"])(client, {
                    block: block,
                    chain,
                    request: request
                });
                if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxFeePerGasTooLowError"]({
                    maxPriorityFeePerGas
                });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        } else {
            // Legacy fees
            if (typeof args.maxFeePerGas !== 'undefined' || typeof args.maxPriorityFeePerGas !== 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
            if (typeof args.gasPrice === 'undefined') {
                const block = await getBlock();
                const { gasPrice: gasPrice_ } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateFeesPerGas"])(client, {
                    block: block,
                    chain,
                    request: request,
                    type: 'legacy'
                });
                request.gasPrice = gasPrice_;
            }
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined') request.gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas')({
        ...request,
        account: account ? {
            address: account.address,
            type: 'json-rpc'
        } : account
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(request);
    delete request.parameters;
    return request;
} //# sourceMappingURL=prepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Sends a **signed** transaction to the network
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
 * - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction hash. {@link SendRawTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransaction } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const hash = await sendRawTransaction(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */ __turbopack_context__.s({
    "sendRawTransaction": (()=>sendRawTransaction)
});
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [
            serializedTransaction
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=sendRawTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendTransaction": (()=>sendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/lru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
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
const supportsWalletNamespace = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(parameters);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (parameters.to) return parameters.to;
            // If `to` is null, we are sending a deployment transaction.
            if (parameters.to === null) return undefined;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`.');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
            const request = format({
                // Pick out extra data that might exist on the chain's transaction request type.
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                    format: chainFormat
                }),
                accessList,
                authorizationList,
                blobs,
                chainId,
                data,
                from: account?.address,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                type,
                value
            });
            const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
            const method = isWalletNamespaceSupported ? 'wallet_sendTransaction' : 'eth_sendTransaction';
            try {
                return await client.request({
                    method,
                    params: [
                        request
                    ]
                }, {
                    retryCount: 0
                });
            } catch (e) {
                if (isWalletNamespaceSupported === false) throw e;
                const error = e;
                // If the transport does not support the method or input, attempt to use the
                // `wallet_sendTransaction` method.
                if (error.name === 'InvalidInputRpcError' || error.name === 'InvalidParamsRpcError' || error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError') {
                    return await client.request({
                        method: 'wallet_sendTransaction',
                        params: [
                            request
                        ]
                    }, {
                        retryCount: 0
                    }).then((hash)=>{
                        supportsWalletNamespace.set(client.uid, true);
                        return hash;
                    }).catch((e)=>{
                        const walletNamespaceError = e;
                        if (walletNamespaceError.name === 'MethodNotFoundRpcError' || walletNamespaceError.name === 'MethodNotSupportedRpcError') {
                            supportsWalletNamespace.set(client.uid, false);
                            throw error;
                        }
                        throw walletNamespaceError;
                    });
                }
                throw error;
            }
        }
        if (account?.type === 'local') {
            // Prepare the request for signing (assign appropriate fees, etc.)
            const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest')({
                account,
                accessList,
                authorizationList,
                blobs,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                nonceManager: account.nonceManager,
                parameters: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParameters"],
                    'sidecars'
                ],
                type,
                value,
                ...rest,
                to
            });
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = await account.signTransaction(request, {
                serializer
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendRawTransaction"], 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if (account?.type === 'smart') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]) throw err;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/deployContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deployContract": (()=>deployContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi,
        args,
        bytecode
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(walletClient, {
        ...request,
        ...request.authorizationList ? {
            to: null
        } : {},
        data: calldata
    });
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAddresses": (()=>getAddresses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
;
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    }, {
        dedupe: true
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(address));
} //# sourceMappingURL=getAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fallbackMagicIdentifier": (()=>fallbackMagicIdentifier),
    "fallbackTransactionErrorMagicIdentifier": (()=>fallbackTransactionErrorMagicIdentifier),
    "sendCalls": (()=>sendCalls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
const fallbackTransactionErrorMagicIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(0, {
    size: 32
});
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, capabilities, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0' } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    const calls = parameters.calls.map((call_)=>{
        const call = call_;
        const data = call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        }) : call.data;
        return {
            data,
            to: call.to,
            value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(call.value) : undefined
        };
    });
    try {
        const response = await client.request({
            method: 'wallet_sendCalls',
            params: [
                {
                    atomicRequired: forceAtomic,
                    calls,
                    capabilities,
                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id),
                    from: account?.address,
                    id,
                    version
                }
            ]
        }, {
            retryCount: 0
        });
        if (typeof response === 'string') return {
            id: response
        };
        return response;
    } catch (err) {
        const error = err;
        // If the transport does not support EIP-5792, fall back to
        // `eth_sendTransaction`.
        if (experimental_fallback && (error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError' || error.name === 'UnknownRpcError' || error.details.toLowerCase().includes('does not exist / is not available') || error.details.toLowerCase().includes('missing or invalid. request()') || error.details.toLowerCase().includes('did not match any variant of untagged enum') || error.details.toLowerCase().includes('account upgraded to unsupported contract') || error.details.toLowerCase().includes('eip-7702 not supported') || error.details.toLowerCase().includes('unsupported wc_ method'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability)=>!capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsupportedNonOptionalCapabilityError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](message, {
                        details: message
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtomicityNotSupportedError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](message, {
                    details: message
                }));
            }
            const promises = [];
            for (const call of calls){
                const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.value) : undefined
                });
                promises.push(promise);
                // Note: some browser wallets require a small delay between transactions
                // to prevent duplicate JSON-RPC requests.
                if (experimental_fallbackDelay > 0) await new Promise((resolve)=>setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r)=>r.status === 'rejected')) throw results[0].reason;
            const hashes = results.map((result)=>{
                if (result.status === 'fulfilled') return result.value;
                return fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                    ...hashes,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id, {
                        size: 32
                    }),
                    fallbackMagicIdentifier
                ])
            };
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain
        });
    }
} //# sourceMappingURL=sendCalls.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCallsStatus": (()=>getCallsStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-client] (ecmascript)");
;
;
;
;
;
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackMagicIdentifier"].slice(2));
        if (isTransactions) {
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(id, -64, -32));
            const hashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(id, 0, -64).slice(2).match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackTransactionErrorMagicIdentifier"].slice(2) !== hash ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [
                        `0x${hash}`
                    ]
                }, {
                    dedupe: true
                }) : undefined));
            const status = (()=>{
                if (receipts.some((r)=>r === null)) return 100; // pending
                if (receipts.every((r)=>r?.status === '0x1')) return 200; // success
                if (receipts.every((r)=>r?.status === '0x0')) return 500; // complete failure
                return 600; // partial failure
            })();
            return {
                atomic: false,
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
                receipts: receipts.filter(Boolean),
                status,
                version: '2.0.0'
            };
        }
        return client.request({
            method: 'wallet_getCallsStatus',
            params: [
                id
            ]
        });
    }
    const { atomic = false, chainId, receipts, version = '2.0.0', ...response } = await getStatus(parameters.id);
    const [status, statusCode] = (()=>{
        const statusCode = response.status;
        if (statusCode >= 100 && statusCode < 200) return [
            'pending',
            statusCode
        ];
        if (statusCode >= 200 && statusCode < 300) return [
            'success',
            statusCode
        ];
        if (statusCode >= 300 && statusCode < 700) return [
            'failure',
            statusCode
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'CONFIRMED') return [
            'success',
            200
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'PENDING') return [
            'pending',
            100
        ];
        return [
            undefined,
            statusCode
        ];
    })();
    return {
        ...response,
        atomic,
        // @ts-expect-error: for backwards compatibility
        chainId: chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId) : undefined,
        receipts: receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.blockNumber),
                gasUsed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.gasUsed),
                status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receiptStatuses"][receipt.status]
            })) ?? [],
        statusCode,
        status,
        version
    };
} //# sourceMappingURL=getCallsStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/getCapabilities.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCapabilities": (()=>getCapabilities)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
async function getCapabilities(client, parameters = {}) {
    const { account = client.account, chainId } = parameters;
    const account_ = account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account) : undefined;
    const params = chainId ? [
        account_?.address,
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
        ]
    ] : [
        account_?.address
    ];
    const capabilities_raw = await client.request({
        method: 'wallet_getCapabilities',
        params
    });
    const capabilities = {};
    for (const [chainId, capabilities_] of Object.entries(capabilities_raw)){
        capabilities[Number(chainId)] = {};
        for (let [key, value] of Object.entries(capabilities_)){
            if (key === 'addSubAccount') key = 'unstable_addSubAccount';
            capabilities[Number(chainId)][key] = value;
        }
    }
    return typeof chainId === 'number' ? capabilities[chainId] : capabilities;
} //# sourceMappingURL=getCapabilities.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Gets the wallets current permissions.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/getPermissions
 * - JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @returns The wallet permissions. {@link GetPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await getPermissions(client)
 */ __turbopack_context__.s({
    "getPermissions": (()=>getPermissions)
});
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    }, {
        dedupe: true
    });
    return permissions;
} //# sourceMappingURL=getPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "requestAddresses": (()=>requestAddresses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
;
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    }, {
        dedupe: true,
        retryCount: 0
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address));
} //# sourceMappingURL=requestAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Requests permissions for a wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/requestPermissions
 * - JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @param parameters - {@link RequestPermissionsParameters}
 * @returns The wallet permissions. {@link RequestPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { requestPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await requestPermissions(client, {
 *   eth_accounts: {}
 * })
 */ __turbopack_context__.s({
    "requestPermissions": (()=>requestPermissions)
});
async function requestPermissions(client, permissions) {
    return client.request({
        method: 'wallet_requestPermissions',
        params: [
            permissions
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=requestPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/showCallsStatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Requests for the wallet to show information about a call batch
 * that was sent via `sendCalls`.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/showCallsStatus
 * - JSON-RPC Methods: [`wallet_showCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)
 *
 * @param client - Client to use
 * @returns Status of the calls. {@link ShowCallsStatusReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { showCallsStatus } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * await showCallsStatus(client, { id: '0xdeadbeef' })
 */ __turbopack_context__.s({
    "showCallsStatus": (()=>showCallsStatus)
});
async function showCallsStatus(client, parameters) {
    const { id } = parameters;
    await client.request({
        method: 'wallet_showCallsStatus',
        params: [
            id
        ]
    });
    return;
} //# sourceMappingURL=showCallsStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signMessage": (()=>signMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
async function signMessage(client, { account: account_ = client.account, message }) {
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signMessage'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    if (account.signMessage) return account.signMessage({
        message
    });
    const message_ = (()=>{
        if (typeof message === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToHex"])(message);
        if (message.raw instanceof Uint8Array) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(message.raw);
        return message.raw;
    })();
    return client.request({
        method: 'personal_sign',
        params: [
            message_,
            account.address
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signTransaction": (()=>signTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function signTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])({
        account,
        ...parameters
    });
    const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (chain !== null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
    if (account.signTransaction) return account.signTransaction({
        ...transaction,
        chainId
    }, {
        serializer: client.chain?.serializers?.transaction
    });
    return await client.request({
        method: 'eth_signTransaction',
        params: [
            {
                ...format(transaction),
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                from: account.address
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signTypedData": (()=>signTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/typedData.js [app-client] (ecmascript)");
;
;
;
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, message, primaryType } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const types = {
        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
            domain
        }),
        ...parameters.types
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    if (account.signTypedData) return account.signTypedData({
        domain,
        message,
        primaryType,
        types
    });
    const typedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    return client.request({
        method: 'eth_signTypedData_v4',
        params: [
            account.address,
            typedData
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/switchChain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "switchChain": (()=>switchChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(id)
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaitForCallsStatusTimeoutError": (()=>WaitForCallsStatusTimeoutError),
    "waitForCallsStatus": (()=>waitForCallsStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/promise/withResolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode })=>statusCode >= 200, timeout = 60_000 } = parameters;
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForCallsStatus',
        client.uid,
        id
    ]);
    const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withResolvers"])();
    let timer = undefined;
    const unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
        resolve,
        reject
    }, (emit)=>{
        const unpoll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
            const done = (fn)=>{
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallsStatus"])(client, {
                    id
                });
                if (!status(result)) return;
                done(()=>emit.resolve(result));
            } catch (error) {
                done(()=>emit.reject(error));
            }
        }, {
            interval: pollingInterval,
            emitOnBegin: true
        });
        return unpoll;
    });
    timer = timeout ? setTimeout(()=>{
        unobserve();
        clearTimeout(timer);
        reject(new WaitForCallsStatusTimeoutError({
            id
        }));
    }, timeout) : undefined;
    return await promise;
}
class WaitForCallsStatusTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ id }){
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, {
            name: 'WaitForCallsStatusTimeoutError'
        });
    }
} //# sourceMappingURL=waitForCallsStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Adds an EVM chain to the wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/watchAsset
 * - JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)
 *
 * @param client - Client to use
 * @param parameters - {@link WatchAssetParameters}
 * @returns Boolean indicating if the token was successfully added. {@link WatchAssetReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchAsset } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const success = await watchAsset(client, {
 *   type: 'ERC20',
 *   options: {
 *     address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *     decimals: 18,
 *     symbol: 'WETH',
 *   },
 * })
 */ __turbopack_context__.s({
    "watchAsset": (()=>watchAsset)
});
async function watchAsset(client, params) {
    const added = await client.request({
        method: 'wallet_watchAsset',
        params
    }, {
        retryCount: 0
    });
    return added;
} //# sourceMappingURL=watchAsset.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "writeContract": (()=>writeContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function writeContract(client, parameters) {
    const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/contract/writeContract'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"], 'sendTransaction')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            account,
            ...request
        });
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/writeContract',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnsAddress": (()=>getEnsAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
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
async function getEnsAddress(client, parameters) {
    const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    try {
        const functionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressResolverAbi"],
            functionName: 'addr',
            ...coinType != null ? {
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name),
                    BigInt(coinType)
                ]
            } : {
                args: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name)
                ]
            }
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverResolveAbi"],
            functionName: 'resolve',
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name)),
                functionData,
                gatewayUrls ?? [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressResolverAbi"],
            args: coinType != null ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name),
                BigInt(coinType)
            ] : undefined,
            functionName: 'addr',
            data: res[0]
        });
        if (address === '0x') return null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(address) === '0x00') return null;
        return address;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err, 'resolve')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnsText": (()=>getEnsText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
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
async function getEnsText(client, parameters) {
    const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverResolveAbi"],
            functionName: 'resolve',
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name)),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textResolverAbi"],
                    functionName: 'text',
                    args: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name),
                        key
                    ]
                }),
                gatewayUrls ?? [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textResolverAbi"],
            functionName: 'text',
            data: res[0]
        });
        return record === '' ? null : record;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err, 'resolve')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsText.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnsAvatar": (()=>getEnsAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$parseAvatarRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsText.js [app-client] (ecmascript)");
;
;
;
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
    const record = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsText"], 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict
    });
    if (!record) return null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$parseAvatarRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAvatarRecord"])(client, {
            record,
            gatewayUrls: assetGatewayUrls
        });
    } catch  {
        return null;
    }
} //# sourceMappingURL=getEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnsName": (()=>getEnsName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverReverseAbi"],
            functionName: 'reverse',
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(reverseNode))
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const [name, resolvedAddress] = gatewayUrls ? await readContractAction({
            ...readContractParameters,
            args: [
                ...readContractParameters.args,
                gatewayUrls
            ]
        }) : await readContractAction(readContractParameters);
        if (address.toLowerCase() !== resolvedAddress.toLowerCase()) return null;
        return name;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err, 'reverse')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsName.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/ens/getEnsResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEnsResolver": (()=>getEnsResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
async function getEnsResolver(client, parameters) {
    const { blockNumber, blockTag, name } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) throw new Error(`${name} is not a valid ENS TLD (${tlds?.join(', ')}) for chain "${chain.name}" (id: ${chain.id}).`);
    const [resolverAddress] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [
                    {
                        type: 'bytes'
                    }
                ],
                name: 'findResolver',
                outputs: [
                    {
                        type: 'address'
                    },
                    {
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        functionName: 'findResolver',
        args: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name))
        ],
        blockNumber,
        blockTag
    });
    return resolverAddress;
} //# sourceMappingURL=getEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createAccessList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAccessList": (()=>createAccessList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getCallError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function createAccessList(client, args) {
    const { account: account_ = client.account, blockNumber, blockTag = 'latest', blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account?.address,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            to,
            value
        });
        const response = await client.request({
            method: 'eth_createAccessList',
            params: [
                request,
                block
            ]
        });
        return {
            accessList: response.accessList,
            gasUsed: BigInt(response.gasUsed)
        };
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=createAccessList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createBlockFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createBlockFilter": (()=>createBlockFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
async function createBlockFilter(client) {
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newBlockFilter'
    });
    const id = await client.request({
        method: 'eth_newBlockFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'block'
    };
} //# sourceMappingURL=createBlockFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createContractEventFilter": (()=>createContractEventFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
;
;
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newFilter'
    });
    const topics = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
        abi,
        args,
        eventName
    }) : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock,
                topics
            }
        ]
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        type: 'event'
    };
} //# sourceMappingURL=createContractEventFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createEventFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEventFilter": (()=>createEventFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
;
;
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newFilter'
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                abi: [
                    event
                ],
                eventName: event.name,
                args
            }));
        // TODO: Clean up type casting
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock,
                ...topics.length ? {
                    topics
                } : {}
            }
        ]
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        toBlock,
        type: 'event'
    };
} //# sourceMappingURL=createEventFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createPendingTransactionFilter": (()=>createPendingTransactionFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
async function createPendingTransactionFilter(client) {
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newPendingTransactionFilter'
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'transaction'
    };
} //# sourceMappingURL=createPendingTransactionFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateContractGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateContractGas": (()=>estimateContractGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, dataSuffix, ...request } = parameters;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...request
        });
        return gas;
    } catch (error) {
        const account = request.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(request.account) : undefined;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=estimateContractGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlobBaseFee.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Returns the base fee per blob gas in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
 * - JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)
 *
 * @param client - Client to use
 * @returns The blob base fee (in wei). {@link GetBlobBaseFeeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlobBaseFee } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blobBaseFee = await getBlobBaseFee(client)
 */ __turbopack_context__.s({
    "getBlobBaseFee": (()=>getBlobBaseFee)
});
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee'
    });
    return BigInt(baseFee);
} //# sourceMappingURL=getBlobBaseFee.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBlockNumber": (()=>getBlockNumber),
    "getBlockNumberCache": (()=>getBlockNumberCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/promise/withCache.js [app-client] (ecmascript)");
;
const cacheKey = (id)=>`blockNumber.${id}`;
function getBlockNumberCache(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCache"])(cacheKey(id));
}
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
    const blockNumberHex = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCache"])(()=>client.request({
            method: 'eth_blockNumber'
        }), {
        cacheKey: cacheKey(client.uid),
        cacheTime
    });
    return BigInt(blockNumberHex);
} //# sourceMappingURL=getBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBlockTransactionCount": (()=>getBlockTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest' } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [
                blockHash
            ]
        }, {
            dedupe: true
        });
    } else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [
                blockNumberHex || blockTag
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(count);
} //# sourceMappingURL=getBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLogs": (()=>getLogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
;
;
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                abi: [
                    event
                ],
                eventName: event.name,
                args: events_ ? undefined : args
            }));
        // TODO: Clean up type casting
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    blockHash
                }
            ]
        });
    } else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock
                }
            ]
        });
    }
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!events) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getContractEvents.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getContractEvents": (()=>getContractEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)");
;
;
;
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
    const event = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAbiItem"])({
        abi,
        name: eventName
    }) : undefined;
    const events = !event ? abi.filter((x)=>x.type === 'event') : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogs"], 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict
    });
} //# sourceMappingURL=getContractEvents.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getEip712Domain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEip712Domain": (()=>getEip712Domain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt
            },
            extensions,
            fields
        };
    } catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' && error.cause.name === 'ContractFunctionZeroDataError') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip712DomainNotFoundError"]({
                address
            });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                name: 'fields',
                type: 'bytes1'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
            {
                name: 'salt',
                type: 'bytes32'
            },
            {
                name: 'extensions',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]; //# sourceMappingURL=getEip712Domain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFeeHistory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFeeHistory": (()=>getFeeHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$feeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/feeHistory.js [app-client] (ecmascript)");
;
;
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$feeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFeeHistory"])(feeHistory);
} //# sourceMappingURL=getFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFilterChanges": (()=>getFilterChanges)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
async function getFilterChanges(_client, { filter }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [
            filter.id
        ]
    });
    if (typeof logs[0] === 'string') return logs;
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!('abi' in filter) || !filter.abi) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterChanges.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFilterLogs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFilterLogs": (()=>getFilterLogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
async function getFilterLogs(_client, { filter }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [
            filter.id
        ]
    });
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!filter.abi) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getProof.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProof": (()=>getProof)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$proof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/proof.js [app-client] (ecmascript)");
;
;
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [
            address,
            storageKeys,
            blockNumberHex || blockTag
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$proof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatProof"])(proof);
} //# sourceMappingURL=getProof.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getStorageAt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStorageAt": (()=>getStorageAt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [
            address,
            slot,
            blockNumberHex || blockTag
        ]
    });
    return data;
} //# sourceMappingURL=getStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransaction": (()=>getTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transaction.js [app-client] (ecmascript)");
;
;
;
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [
                hash
            ]
        }, {
            dedupe: true
        });
    } else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [
                blockHash,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(index)
            ]
        }, {
            dedupe: true
        });
    } else if ("TURBOPACK compile-time truthy", 1) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [
                blockNumberHex || blockTag,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(index)
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!transaction) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionNotFoundError"]({
        blockHash,
        blockNumber,
        blockTag,
        hash,
        index
    });
    const format = client.chain?.formatters?.transaction?.format || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransaction"];
    return format(transaction);
} //# sourceMappingURL=getTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionConfirmations": (()=>getTransactionConfirmations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
;
;
;
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({}),
        hash ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction')({
            hash
        }) : undefined
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber) return 0n;
    return blockNumber - transactionBlockNumber + 1n;
} //# sourceMappingURL=getTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionReceipt": (()=>getTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
;
;
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceiptNotFoundError"]({
        hash
    });
    const format = client.chain?.formatters?.transactionReceipt?.format || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionReceipt"];
    return format(receipt);
} //# sourceMappingURL=getTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/multicall.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "multicall": (()=>multicall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
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
async function multicall(client, parameters) {
    const { account, allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride } = parameters;
    const contracts = parameters.contracts;
    const batchSize = batchSize_ ?? (typeof client.batch?.multicall === 'object' && client.batch.multicall.batchSize || 1_024);
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new Error('client chain not configured. multicallAddress is required.');
        multicallAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3'
        });
    }
    const chunkedCalls = [
        []
    ];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for(let i = 0; i < contracts.length; i++){
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi,
                args,
                functionName
            });
            currentChunkSize += (callData.length - 2) / 2;
            // Check to see if we need to create a new chunk.
            if (// Check if batching is enabled.
            batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
            currentChunkSize > batchSize && // Check if the current chunk is not already empty.
            chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address
                }
            ];
        } catch (err) {
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
                sender: account
            });
            if (!allowFailure) throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address
                }
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
            account,
            address: multicallAddress,
            args: [
                calls
            ],
            blockNumber,
            blockTag,
            functionName: 'aggregate3',
            stateOverride
        })));
    const results = [];
    for(let i = 0; i < aggregate3Results.length; i++){
        const result = aggregate3Results[i];
        // If an error occurred in a `readContract` invocation (ie. network error),
        // then append the failure reason to each contract result.
        if (result.status === 'rejected') {
            if (!allowFailure) throw result.reason;
            for(let j = 0; j < chunkedCalls[i].length; j++){
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined
                });
            }
            continue;
        }
        // If the `readContract` call was successful, then decode the results.
        const aggregate3Result = result.value;
        for(let j = 0; j < aggregate3Result.length; j++){
            // Extract the response from `readContract`
            const { returnData, success } = aggregate3Result[j];
            // Extract the request call data from the original call.
            const { callData } = chunkedCalls[i][j];
            // Extract the contract config for this call from the `contracts` argument
            // for decoding.
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
                if (!success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"]({
                    data: returnData
                });
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                    abi,
                    args,
                    data: returnData,
                    functionName
                });
                results.push(allowFailure ? {
                    result,
                    status: 'success'
                } : result);
            } catch (err) {
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName
                });
                if (!allowFailure) throw error;
                results.push({
                    error,
                    result: undefined,
                    status: 'failure'
                });
            }
        }
    }
    if (results.length !== contracts.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('multicall results mismatch');
    return results;
} //# sourceMappingURL=multicall.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "simulateBlocks": (()=>simulateBlocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/BlockOverrides.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/errors/getNodeError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
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
async function simulateBlocks(client, parameters) {
    const { blockNumber, blockTag = 'latest', blocks, returnFullTransactions, traceTransfers, validation } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks){
            const blockOverrides = block.blockOverrides ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRpc"])(block.blockOverrides) : undefined;
            const calls = block.calls.map((call_)=>{
                const call = call_;
                const account = call.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(call.account) : undefined;
                const request = {
                    ...call,
                    data: call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call) : call.data,
                    from: call.from ?? account?.address
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(request);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"])(request);
            });
            const stateOverrides = block.stateOverrides ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(block.stateOverrides) : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const result = await client.request({
            method: 'eth_simulateV1',
            params: [
                {
                    blockStateCalls,
                    returnFullTransactions,
                    traceTransfers,
                    validation
                },
                block
            ]
        });
        return result.map((block, i)=>({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBlock"])(block),
                calls: block.calls.map((call, j)=>{
                    const { abi, args, functionName, to } = blocks[i].calls[j];
                    const data = call.error?.data ?? call.returnData;
                    const gasUsed = BigInt(call.gasUsed);
                    const logs = call.logs?.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
                    const status = call.status === '0x1' ? 'success' : 'failure';
                    const result = abi && status === 'success' && data !== '0x' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                        abi,
                        data,
                        functionName
                    }) : null;
                    const error = (()=>{
                        if (status === 'success') return undefined;
                        let error = undefined;
                        if (call.error?.data === '0x') error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
                        else if (call.error) error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"](call.error);
                        if (!error) return undefined;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
                            abi: abi ?? [],
                            address: to ?? '0x',
                            args,
                            functionName: functionName ?? '<unknown>'
                        });
                    })();
                    return {
                        data,
                        gasUsed,
                        logs,
                        status,
                        ...status === 'success' ? {
                            result
                        } : {
                            error
                        }
                    };
                })
            }));
    } catch (e) {
        const cause = e;
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeError"])(cause, {});
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownNodeError"]) throw cause;
        throw error;
    }
} //# sourceMappingURL=simulateBlocks.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/simulateCalls.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "simulateCalls": (()=>simulateCalls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiConstructor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createAccessList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-client] (ecmascript)");
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
const getBalanceCode = '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033';
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
    const account = parameters.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account) : undefined;
    if (traceAssetChanges && !account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`account` is required when `traceAssetChanges` is true');
    // Derive bytecode to extract ETH balance via a contract call.
    const getBalanceData = account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('constructor(bytes, bytes)'), {
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaBytecodeBytecode"],
        args: [
            getBalanceCode,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function getBalance(address)'), [
                account.address
            ])
        ]
    }) : undefined;
    // Fetch ERC20/721 addresses that were "touched" from the calls.
    const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call)=>{
        if (!call.data && !call.abi) return;
        const { accessList } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAccessList"])(client, {
            account: account.address,
            ...call,
            data: call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call) : call.data
        });
        return accessList.map(({ address, storageKeys })=>storageKeys.length > 0 ? address : null);
    })).then((x)=>x.flat().filter(Boolean)) : [];
    const blocks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            ...traceAssetChanges ? [
                // ETH pre balances
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ],
                    stateOverrides
                },
                // Asset pre balances
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                }
            ] : [],
            {
                calls: [
                    ...calls,
                    {}
                ].map((call)=>({
                        ...call,
                        from: account?.address
                    })),
                stateOverrides
            },
            ...traceAssetChanges ? [
                // ETH post balances
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ]
                },
                // Asset post balances
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Decimals
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function decimals() returns (uint256)')
                            ],
                            functionName: 'decimals',
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Token URI
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function tokenURI(uint256) returns (string)')
                            ],
                            functionName: 'tokenURI',
                            args: [
                                0n
                            ],
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Symbols
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])('function symbol() returns (string)')
                            ],
                            functionName: 'symbol',
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                }
            ] : []
        ],
        traceTransfers,
        validation
    });
    const block_results = traceAssetChanges ? blocks[2] : blocks[0];
    const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
    // Extract call results from the simulation.
    const { calls: block_calls, ...block } = block_results;
    const results = block_calls.slice(0, -1) ?? [];
    // Extract pre-execution ETH and asset balances.
    const ethPre = block_ethPre?.calls ?? [];
    const assetsPre = block_assetsPre?.calls ?? [];
    const balancesPre = [
        ...ethPre,
        ...assetsPre
    ].map((call)=>call.status === 'success' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.data) : null);
    // Extract post-execution ETH and asset balances.
    const ethPost = block_ethPost?.calls ?? [];
    const assetsPost = block_assetsPost?.calls ?? [];
    const balancesPost = [
        ...ethPost,
        ...assetsPost
    ].map((call)=>call.status === 'success' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.data) : null);
    // Extract asset symbols & decimals.
    const decimals = (block_decimals?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const symbols = (block_symbols?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const tokenURI = (block_tokenURI?.calls ?? []).map((x)=>x.status === 'success' ? x.result : null);
    const changes = [];
    for (const [i, balancePost] of balancesPost.entries()){
        const balancePre = balancesPre[i];
        if (typeof balancePost !== 'bigint') continue;
        if (typeof balancePre !== 'bigint') continue;
        const decimals_ = decimals[i - 1];
        const symbol_ = symbols[i - 1];
        const tokenURI_ = tokenURI[i - 1];
        const token = (()=>{
            if (i === 0) return {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethAddress"],
                decimals: 18,
                symbol: 'ETH'
            };
            return {
                address: assetAddresses[i - 1],
                decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : undefined,
                symbol: symbol_ ?? undefined
            };
        })();
        if (changes.some((change)=>change.token.address === token.address)) continue;
        changes.push({
            token,
            value: {
                pre: balancePre,
                post: balancePost,
                diff: balancePost - balancePre
            }
        });
    }
    return {
        assetChanges: changes,
        block,
        results
    };
} //# sourceMappingURL=simulateCalls.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Destroys a [`Filter`](https://viem.sh/docs/glossary/types#filter).
 *
 * - Docs: https://viem.sh/docs/actions/public/uninstallFilter
 * - JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)
 *
 * Destroys a Filter that was created from one of the following Actions:
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * @param client - Client to use
 * @param parameters - {@link UninstallFilterParameters}
 * @returns A boolean indicating if the Filter was successfully uninstalled. {@link UninstallFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'
 *
 * const filter = await createPendingTransactionFilter(client)
 * const uninstalled = await uninstallFilter(client, { filter })
 * // true
 */ __turbopack_context__.s({
    "uninstallFilter": (()=>uninstallFilter)
});
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [
            filter.id
        ]
    });
} //# sourceMappingURL=uninstallFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyHash": (()=>verifyHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
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
async function verifyHash(client, parameters) {
    const { address, factory, factoryData, hash, signature, universalSignatureVerifierAddress = client.chain?.contracts?.universalSignatureVerifier?.address, ...rest } = parameters;
    const signatureHex = (()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeSignature"])(signature);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signature);
    })();
    const wrappedSignature = await (async ()=>{
        // If no `factory` or `factoryData` is provided, it is assumed that the
        // address is not a Smart Account, or the Smart Account is already deployed.
        if (!factory && !factoryData) return signatureHex;
        // If the signature is already wrapped, return the signature.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isErc6492Signature"])(signatureHex)) return signatureHex;
        // If the Smart Account is not deployed, wrap the signature with a 6492 wrapper
        // to perform counterfactual validation.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
            address: factory,
            data: factoryData,
            signature: signatureHex
        });
    })();
    try {
        const args = universalSignatureVerifierAddress ? {
            to: universalSignatureVerifierAddress,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalSignatureValidatorAbi"],
                functionName: 'isValidSig',
                args: [
                    address,
                    hash,
                    wrappedSignature
                ]
            }),
            ...rest
        } : {
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalSignatureValidatorAbi"],
                args: [
                    address,
                    hash,
                    wrappedSignature
                ],
                bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalSignatureValidatorByteCode"]
            }),
            ...rest
        };
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')(args);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBool"])(data ?? '0x0');
    } catch (error) {
        // Fallback attempt to verify the signature via ECDSA recovery.
        try {
            const verified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])({
                hash,
                signature
            }));
            if (verified) return true;
        } catch  {}
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallExecutionError"]) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
} //# sourceMappingURL=verifyHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyMessage": (()=>verifyMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifyTypedData": (()=>verifyTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])({
        message,
        primaryType,
        types,
        domain
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "watchBlockNumber": (()=>watchBlockNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
;
;
;
;
;
;
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket') return false;
        if (client.transport.type === 'fallback' && client.transport.transports[0].config.type === 'webSocket') return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({
                        cacheTime: 0
                    });
                    if (prevBlockNumber) {
                        // If the current block number is the same as the previous,
                        // we can skip.
                        if (blockNumber === prevBlockNumber) return;
                        // If we have missed out on some previous blocks, and the
                        // `emitMissed` flag is truthy, let's emit those blocks.
                        if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                            for(let i = prevBlockNumber + 1n; i < blockNumber; i++){
                                emit.onBlockNumber(i, prevBlockNumber);
                                prevBlockNumber = i;
                            }
                        }
                    }
                    // If the next block number is greater than the previous,
                    // it is not in the past, and we can emit the new block number.
                    if (!prevBlockNumber || blockNumber > prevBlockNumber) {
                        emit.onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlockNumber = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>{
            let active = true;
            let unsubscribe = ()=>active = false;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'newHeads'
                        ],
                        onData (data) {
                            if (!active) return;
                            const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(data.result?.number);
                            emit.onBlockNumber(blockNumber, prevBlockNumber);
                            prevBlockNumber = blockNumber;
                        },
                        onError (error) {
                            emit.onError?.(error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError?.(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
} //# sourceMappingURL=watchBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "waitForTransactionReceipt": (()=>waitForTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/promise/withResolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
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
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, retryCount = 6, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 180_000 }) {
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForTransactionReceipt',
        client.uid,
        hash
    ]);
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    // biome-ignore lint/style/useConst:
    let _unobserve;
    let _unwatch;
    const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withResolvers"])();
    const timer = timeout ? setTimeout(()=>{
        _unwatch();
        _unobserve();
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaitForTransactionReceiptTimeoutError"]({
            hash
        }));
    }, timeout) : undefined;
    _unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
        onReplaced,
        resolve,
        reject
    }, (emit)=>{
        _unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlockNumber"], 'watchBlockNumber')({
            emitMissed: true,
            emitOnBegin: true,
            poll: true,
            pollingInterval,
            async onBlockNumber (blockNumber_) {
                const done = (fn)=>{
                    clearTimeout(timer);
                    _unwatch();
                    fn();
                    _unobserve();
                };
                let blockNumber = blockNumber_;
                if (retrying) return;
                try {
                    // If we already have a valid receipt, let's check if we have enough
                    // confirmations. If we do, then we can resolve.
                    if (receipt) {
                        if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                        done(()=>emit.resolve(receipt));
                        return;
                    }
                    // Get the transaction to check if it's been replaced.
                    // We need to retry as some RPC Providers may be slow to sync
                    // up mined transactions.
                    if (!transaction) {
                        retrying = true;
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction')({
                                hash
                            });
                            if (transaction.blockNumber) blockNumber = transaction.blockNumber;
                        }, {
                            delay: retryDelay,
                            retryCount
                        });
                        retrying = false;
                    }
                    // Get the receipt to check if it's been processed.
                    receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt')({
                        hash
                    });
                    // Check if we have enough confirmations. If not, continue polling.
                    if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    // If the receipt is not found, the transaction will be pending.
                    // We need to check if it has potentially been replaced.
                    if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionNotFoundError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceiptNotFoundError"]) {
                        if (!transaction) {
                            retrying = false;
                            return;
                        }
                        try {
                            replacedTransaction = transaction;
                            // Let's retrieve the transactions from the current block.
                            // We need to retry as some RPC Providers may be slow to sync
                            // up mined blocks.
                            retrying = true;
                            const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true
                                }), {
                                delay: retryDelay,
                                retryCount,
                                shouldRetry: ({ error })=>error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNotFoundError"]
                            });
                            retrying = false;
                            const replacementTransaction = block.transactions.find(({ from, nonce })=>from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                            // If we couldn't find a replacement transaction, continue polling.
                            if (!replacementTransaction) return;
                            // If we found a replacement transaction, return it's receipt.
                            receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt')({
                                hash: replacementTransaction.hash
                            });
                            // Check if we have enough confirmations. If not, continue polling.
                            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                            let reason = 'replaced';
                            if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) {
                                reason = 'repriced';
                            } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                                reason = 'cancelled';
                            }
                            done(()=>{
                                emit.onReplaced?.({
                                    reason,
                                    replacedTransaction: replacedTransaction,
                                    transaction: replacementTransaction,
                                    transactionReceipt: receipt
                                });
                                emit.resolve(receipt);
                            });
                        } catch (err_) {
                            done(()=>emit.reject(err_));
                        }
                    } else {
                        done(()=>emit.reject(err));
                    }
                }
            }
        });
    });
    return promise;
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchBlocks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "watchBlocks": (()=>watchBlocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
;
;
;
;
;
function watchBlocks(client, { blockTag = 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket') return false;
        if (client.transport.type === 'fallback' && client.transport.transports[0].config.type === 'webSocket') return false;
        return true;
    })();
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlock,
            onError
        }, (emit)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                        blockTag,
                        includeTransactions
                    });
                    if (block.number !== null && prevBlock?.number != null) {
                        // If the current block number is the same as the previous,
                        // we can skip.
                        if (block.number === prevBlock.number) return;
                        // If we have missed out on some previous blocks, and the
                        // `emitMissed` flag is truthy, let's emit those blocks.
                        if (block.number - prevBlock.number > 1 && emitMissed) {
                            for(let i = prevBlock?.number + 1n; i < block.number; i++){
                                const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                                    blockNumber: i,
                                    includeTransactions
                                });
                                emit.onBlock(block, prevBlock);
                                prevBlock = block;
                            }
                        }
                    }
                    if (// If no previous block exists, emit.
                    prevBlock?.number == null || blockTag === 'pending' && block?.number == null || block.number !== null && block.number > prevBlock.number) {
                        emit.onBlock(block, prevBlock);
                        prevBlock = block;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlocks = ()=>{
        let active = true;
        let emitFetched = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                if (emitOnBegin) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                        blockTag,
                        includeTransactions
                    }).then((block)=>{
                        if (!active) return;
                        if (!emitFetched) return;
                        onBlock(block, undefined);
                        emitFetched = false;
                    }).catch(onError);
                }
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'newHeads'
                    ],
                    async onData (data) {
                        if (!active) return;
                        const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                            blockNumber: data.result?.number,
                            includeTransactions
                        }).catch(()=>{});
                        if (!active) return;
                        onBlock(block, prevBlock);
                        emitFetched = false;
                        prevBlock = block;
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
} //# sourceMappingURL=watchBlocks.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchContractEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "watchContractEvent": (()=>watchContractEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getContractEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
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
function watchContractEvent(client, parameters) {
    const { abi, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket') return false;
        if (client.transport.type === 'fallback' && client.transport.transports[0].config.type === 'webSocket') return false;
        return true;
    })();
    const pollContractEvent = ()=>{
        const strict = strict_ ?? false;
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
            fromBlock
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContractEventFilter"], 'createContractEventFilter')({
                            abi,
                            address,
                            args: args,
                            eventName: eventName,
                            strict: strict,
                            fromBlock
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                            filter
                        });
                    } else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractEvents"], 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidInputRpcError"]) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = ()=>{
        const strict = strict_ ?? false;
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict
        ]);
        let active = true;
        let unsubscribe = ()=>active = false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            ;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const topics = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                        abi: abi,
                        eventName: eventName,
                        args
                    }) : [];
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'logs',
                            {
                                address,
                                topics
                            }
                        ],
                        onData (data) {
                            if (!active) return;
                            const log = data.result;
                            try {
                                const { eventName, args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_
                                });
                                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                    args,
                                    eventName: eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            } catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogDataMismatch"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogTopicsMismatch"]) {
                                    // If strict mode is on, and log data/topics do not match event definition, skip.
                                    if (strict_) return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                                }
                                // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                    args: isUnnamed ? [] : {},
                                    eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            }
                        },
                        onError (error) {
                            emit.onError?.(error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError?.(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
} //# sourceMappingURL=watchContractEvent.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "watchEvent": (()=>watchEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createEventFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
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
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket') return false;
        if (client.transport.type === 'fallback' && client.transport.transports[0].config.type === 'webSocket') return false;
        return true;
    })();
    const strict = strict_ ?? false;
    const pollEvent = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventFilter"], 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                            fromBlock
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                            filter
                        });
                    } else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogs"], 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidInputRpcError"]) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeEvent = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const events_ = events ?? (event ? [
                    event
                ] : undefined);
                let topics = [];
                if (events_) {
                    const encoded = events_.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                            abi: [
                                event
                            ],
                            eventName: event.name,
                            args
                        }));
                    // TODO: Clean up type casting
                    topics = [
                        encoded
                    ];
                    if (event) topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'logs',
                        {
                            address,
                            topics
                        }
                    ],
                    onData (data) {
                        if (!active) return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                                abi: events_ ?? [],
                                data: log.data,
                                topics: log.topics,
                                strict
                            });
                            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                args,
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogDataMismatch"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogTopicsMismatch"]) {
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                args: isUnnamed ? [] : {},
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        }
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollEvent() : subscribeEvent();
} //# sourceMappingURL=watchEvent.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/watchPendingTransactions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "watchPendingTransactions": (()=>watchPendingTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollPendingTransactions = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onTransactions,
            onError
        }, (emit)=>{
            let filter;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    if (!filter) {
                        try {
                            filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPendingTransactionFilter"], 'createPendingTransactionFilter')({});
                            return;
                        } catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                        filter
                    });
                    if (hashes.length === 0) return;
                    if (batch) emit.onTransactions(hashes);
                    else for (const hash of hashes)emit.onTransactions([
                        hash
                    ]);
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newPendingTransactions'
                    ],
                    onData (data) {
                        if (!active) return;
                        const transaction = data.result;
                        onTransactions([
                            transaction
                        ]);
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
} //# sourceMappingURL=watchPendingTransactions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/siwe/verifySiweMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "verifySiweMessage": (()=>verifySiweMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$parseSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/siwe/parseSiweMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$validateSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/siwe/validateSiweMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
;
;
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$parseSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSiweMessage"])(message);
    if (!parsed.address) return false;
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$validateSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSiweMessage"])({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time
    });
    if (!isValid) return false;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifySiweMessage.js.map
}}),
}]);

//# sourceMappingURL=0aa7d_viem__esm_actions_ab49a733._.js.map