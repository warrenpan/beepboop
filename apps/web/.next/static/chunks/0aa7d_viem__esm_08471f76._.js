(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/ccip.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OffchainLookupError": (()=>OffchainLookupError),
    "OffchainLookupResponseMalformedError": (()=>OffchainLookupResponseMalformedError),
    "OffchainLookupSenderMismatchError": (()=>OffchainLookupSenderMismatchError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/utils.js [app-client] (ecmascript)");
;
;
;
class OffchainLookupError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ callbackSelector, cause, data, extraData, sender, urls }){
        super(cause.shortMessage || 'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...cause.metaMessages || [],
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url)=>`    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])(url)}`)
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`
            ].flat(),
            name: 'OffchainLookupError'
        });
    }
}
class OffchainLookupResponseMalformedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ result, url }){
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUrl"])(url)}`,
                `Response: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(result)}`
            ],
            name: 'OffchainLookupResponseMalformedError'
        });
    }
}
class OffchainLookupSenderMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ sender, to }){
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`
            ],
            name: 'OffchainLookupSenderMismatchError'
        });
    }
} //# sourceMappingURL=ccip.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ccip.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ccipRequest": (()=>ccipRequest),
    "offchainLookup": (()=>offchainLookup),
    "offchainLookupAbiItem": (()=>offchainLookupAbiItem),
    "offchainLookupSignature": (()=>offchainLookupSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/ccip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/errors/request.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
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
const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address'
        },
        {
            name: 'urls',
            type: 'string[]'
        },
        {
            name: 'callData',
            type: 'bytes'
        },
        {
            name: 'callbackFunction',
            type: 'bytes4'
        },
        {
            name: 'extraData',
            type: 'bytes'
        }
    ]
};
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
    const { args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
        data,
        abi: [
            offchainLookupAbiItem
        ]
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function' ? ccipRead.request : ccipRequest;
    try {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])(to, sender)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupSenderMismatchError"]({
            sender,
            to
        });
        const result = urls.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayRequest"])({
            data: callData,
            ccipRequest: ccipRequest_
        }) : await ccipRequest_({
            data: callData,
            sender,
            urls
        });
        const { data: data_ } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"])(client, {
            blockNumber,
            blockTag,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                callbackSelector,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                    {
                        type: 'bytes'
                    },
                    {
                        type: 'bytes'
                    }
                ], [
                    result,
                    extraData
                ])
            ]),
            to
        });
        return data_;
    } catch (err) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupError"]({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls
        });
    }
}
async function ccipRequest({ data, sender, urls }) {
    let error = new Error('An unknown error occurred.');
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? {
            data,
            sender
        } : undefined;
        const headers = method === 'POST' ? {
            'Content-Type': 'application/json'
        } : {};
        try {
            const response = await fetch(url.replace('{sender}', sender.toLowerCase()).replace('{data}', data), {
                body: JSON.stringify(body),
                headers,
                method
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            } else {
                result = await response.text();
            }
            if (!response.ok) {
                error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                    body,
                    details: result?.error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(result.error) : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url
                });
                continue;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(result)) {
                error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffchainLookupResponseMalformedError"]({
                    result,
                    url
                });
                continue;
            }
            return result;
        } catch (err) {
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                body,
                details: err.message,
                url
            });
        }
    }
    throw error;
} //# sourceMappingURL=ccip.js.map
}}),
}]);

//# sourceMappingURL=0aa7d_viem__esm_08471f76._.js.map