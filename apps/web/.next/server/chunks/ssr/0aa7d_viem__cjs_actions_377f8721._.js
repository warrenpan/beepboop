module.exports = {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createContractEventFilter = createContractEventFilter;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
        abi,
        args,
        eventName
    }) : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlock = getBlock;
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const block_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
    const blockTag = blockTag_ ?? 'latest';
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
    if (!block) throw new block_js_1.BlockNotFoundError({
        blockHash,
        blockNumber
    });
    const format = client.chain?.formatters?.block?.format || block_js_2.formatBlock;
    return format(block);
} //# sourceMappingURL=getBlock.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGasPrice = getGasPrice;
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice'
    });
    return BigInt(gasPrice);
} //# sourceMappingURL=getGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateMaxPriorityFeePerGas = estimateMaxPriorityFeePerGas;
exports.internal_estimateMaxPriorityFeePerGas = internal_estimateMaxPriorityFeePerGas;
const fee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
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
        return (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGasHex);
    } catch  {
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({}),
            (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({})
        ]);
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n) return 0n;
        return maxPriorityFeePerGas;
    }
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateFeesPerGas = estimateFeesPerGas;
exports.internal_estimateFeesPerGas = internal_estimateFeesPerGas;
const fee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
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
    if (baseFeeMultiplier < 1) throw new fee_js_1.BaseFeeScalarError();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base)=>base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
    const block = block_ ? block_ : await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
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
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === 'bigint' ? request.maxPriorityFeePerGas : await (0, estimateMaxPriorityFeePerGas_js_1.internal_estimateMaxPriorityFeePerGas)(client, {
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
    const gasPrice = request?.gasPrice ?? multiply(await (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({}));
    return {
        gasPrice
    };
} //# sourceMappingURL=estimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionCount = getTransactionCount;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : blockTag
        ]
    }, {
        dedupe: Boolean(blockNumber)
    });
    return (0, fromHex_js_1.hexToNumber)(count);
} //# sourceMappingURL=getTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainId = getChainId;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId'
    }, {
        dedupe: true
    });
    return (0, fromHex_js_1.hexToNumber)(chainIdHex);
} //# sourceMappingURL=getChainId.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eip1559NetworkCache = exports.defaultParameters = void 0;
exports.prepareTransactionRequest = prepareTransactionRequest;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
const fee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-ssr] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-ssr] (ecmascript)");
const commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-ssr] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getTransactionType_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
exports.defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type'
];
exports.eip1559NetworkCache = new Map();
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = exports.defaultParameters, type } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : account_;
    const request = {
        ...args,
        ...account ? {
            from: account?.address
        } : {}
    };
    let block;
    async function getBlock() {
        if (block) return block;
        block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
            blockTag: 'latest'
        });
        return block;
    }
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (chain) return chain.id;
        if (typeof args.chainId !== 'undefined') return args.chainId;
        const chainId_ = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
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
            request.nonce = await (0, getAction_js_1.getAction)(client, getTransactionCount_js_1.getTransactionCount, 'getTransactionCount')({
                address: account.address,
                blockTag: 'pending'
            });
        }
    }
    if ((parameters.includes('blobVersionedHashes') || parameters.includes('sidecars')) && blobs && kzg) {
        const commitments = (0, blobsToCommitments_js_1.blobsToCommitments)({
            blobs,
            kzg
        });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = (0, commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes)({
                commitments,
                to: 'hex'
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = (0, blobsToProofs_js_1.blobsToProofs)({
                blobs,
                commitments,
                kzg
            });
            const sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
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
            request.type = (0, getTransactionType_js_1.getTransactionType)(request);
        } catch  {
            let isEip1559Network = exports.eip1559NetworkCache.get(client.uid);
            if (typeof isEip1559Network === 'undefined') {
                const block = await getBlock();
                isEip1559Network = typeof block?.baseFeePerGas === 'bigint';
                exports.eip1559NetworkCache.set(client.uid, isEip1559Network);
            }
            request.type = isEip1559Network ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            if (typeof request.maxFeePerGas === 'undefined' || typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
                    block: block,
                    chain,
                    request: request
                });
                if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new fee_js_1.MaxFeePerGasTooLowError({
                    maxPriorityFeePerGas
                });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        } else {
            if (typeof args.maxFeePerGas !== 'undefined' || typeof args.maxPriorityFeePerGas !== 'undefined') throw new fee_js_1.Eip1559FeesNotSupportedError();
            if (typeof args.gasPrice === 'undefined') {
                const block = await getBlock();
                const { gasPrice: gasPrice_ } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
                    block: block,
                    chain,
                    request: request,
                    type: 'legacy'
                });
                request.gasPrice = gasPrice_;
            }
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined') request.gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
        ...request,
        account: account ? {
            address: account.address,
            type: 'json-rpc'
        } : account
    });
    (0, assertRequest_js_1.assertRequest)(request);
    delete request.parameters;
    return request;
} //# sourceMappingURL=prepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBalance = getBalance;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getBalance(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateGas = estimateGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getEstimateGasError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stateOverride.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
const getBalance_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-ssr] (ecmascript)");
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    try {
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = await (0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, {
            ...args,
            parameters: account?.type === 'local' ? undefined : [
                'blobVersionedHashes'
            ]
        });
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
        const to = await (async ()=>{
            if (rest.to) return rest.to;
            if (authorizationList && authorizationList.length > 0) return await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new base_js_1.BaseError('`to` is required. Could not infer from `authorizationList`');
            });
            return undefined;
        })();
        (0, assertRequest_js_1.assertRequest)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
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
        if (authorizationList) {
            const value = await (0, getBalance_js_1.getBalance)(client, {
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
                        value: (0, toHex_js_1.numberToHex)(value)
                    },
                    rpcStateOverride
                }).catch(()=>100000n);
                return 2n * BigInt(estimate);
            }));
            estimate += estimates.reduce((acc, curr)=>acc + curr, 0n);
        }
        return estimate;
    } catch (err) {
        throw (0, getEstimateGasError_js_1.getEstimateGasError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateContractGas = estimateContractGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, dataSuffix, ...request } = parameters;
    const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...request
        });
        return gas;
    } catch (error) {
        const account = request.account ? (0, parseAccount_js_1.parseAccount)(request.account) : undefined;
        throw (0, getContractError_js_1.getContractError)(error, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLogs = getLogs;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                abi: [
                    event
                ],
                eventName: event.name,
                args: events_ ? undefined : args
            }));
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
                    fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock
                }
            ]
        });
    }
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!events) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractEvents = getContractEvents;
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
    const event = eventName ? (0, getAbiItem_js_1.getAbiItem)({
        abi,
        name: eventName
    }) : undefined;
    const events = !event ? abi.filter((x)=>x.type === 'event') : undefined;
    return (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.call = call;
exports.getRevertErrorData = getRevertErrorData;
const abitype_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const BlockOverrides = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/BlockOverrides.js [app-ssr] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contract.js [app-ssr] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contracts.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
const contract_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getCallError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stateOverride.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
async function call(client, args) {
    const { account: account_ = client.account, authorizationList, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, blobs, blockOverrides, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    if (code && (factory || factoryData)) throw new base_js_1.BaseError('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to) throw new base_js_1.BaseError('Cannot provide both `code` & `to` as parameters.');
    const deploylessCallViaBytecode = code && data_;
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
        (0, assertRequest_js_1.assertRequest)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcBlockOverrides = blockOverrides ? BlockOverrides.toRpc(blockOverrides) : undefined;
        const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
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
                if (!(err instanceof chain_js_1.ClientChainNotConfiguredError) && !(err instanceof chain_js_1.ChainDoesNotSupportContract)) throw err;
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
        const { offchainLookup, offchainLookupSignature } = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ccip.js [app-ssr] (ecmascript)"));
        if (client.ccipRead !== false && data?.slice(0, 10) === offchainLookupSignature && to) return {
            data: await offchainLookup(client, {
                data,
                to
            })
        };
        if (deploylessCall && data?.slice(0, 10) === '0x101bb98d') throw new contract_js_2.CounterfactualDeploymentFailedError({
            factory
        });
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith(contract_js_1.aggregate3Signature)) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== 'undefined').length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new chain_js_1.ClientChainNotConfiguredError();
        multicallAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3'
        });
    }
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
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
            const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi: abis_js_1.multicall3Abi,
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
            return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                abi: abis_js_1.multicall3Abi,
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
    if (!success) throw new contract_js_2.RawContractError({
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
    return (0, encodeDeployData_js_1.encodeDeployData)({
        abi: (0, abitype_1.parseAbi)([
            'constructor(bytes, bytes)'
        ]),
        bytecode: contracts_js_1.deploylessCallViaBytecodeBytecode,
        args: [
            code,
            data
        ]
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0, encodeDeployData_js_1.encodeDeployData)({
        abi: (0, abitype_1.parseAbi)([
            'constructor(address, bytes, address, bytes)'
        ]),
        bytecode: contracts_js_1.deploylessCallViaFactoryBytecode,
        args: [
            to,
            data,
            factory,
            factoryData
        ]
    });
}
function getRevertErrorData(err) {
    if (!(err instanceof base_js_1.BaseError)) return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
} //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readContract = readContract;
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            ...rest,
            data: calldata,
            to: address
        });
        return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
    } catch (error) {
        throw (0, getContractError_js_1.getContractError)(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName
        });
    }
} //# sourceMappingURL=readContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateContract = simulateContract;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account ? (0, parseAccount_js_1.parseAccount)(callRequest.account) : client.account;
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
            account
        });
        const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
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
        throw (0, getContractError_js_1.getContractError)(error, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockNumberCache = getBlockNumberCache;
exports.getBlockNumber = getBlockNumber;
const withCache_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withCache.js [app-ssr] (ecmascript)");
const cacheKey = (id)=>`blockNumber.${id}`;
function getBlockNumberCache(id) {
    return (0, withCache_js_1.getCache)(cacheKey(id));
}
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
    const blockNumberHex = await (0, withCache_js_1.withCache)(()=>client.request({
            method: 'eth_blockNumber'
        }), {
        cacheKey: cacheKey(client.uid),
        cacheTime
    });
    return BigInt(blockNumberHex);
} //# sourceMappingURL=getBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterChanges = getFilterChanges;
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getFilterChanges(_client, { filter }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [
            filter.id
        ]
    });
    if (typeof logs[0] === 'string') return logs;
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!('abi' in filter) || !filter.abi) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterChanges.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uninstallFilter = uninstallFilter;
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [
            filter.id
        ]
    });
} //# sourceMappingURL=uninstallFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchContractEvent = watchContractEvent;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
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
        const observerId = (0, stringify_js_1.stringify)([
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
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
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
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
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
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = ()=>{
        const strict = strict_ ?? false;
        const observerId = (0, stringify_js_1.stringify)([
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
        return (0, observe_js_1.observe)(observerId, {
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
                    const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
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
                                const { eventName, args } = (0, decodeEventLog_js_1.decodeEventLog)({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_
                                });
                                const formatted = (0, log_js_1.formatLog)(log, {
                                    args,
                                    eventName: eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            } catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                    if (strict_) return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                                }
                                const formatted = (0, log_js_1.formatLog)(log, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendRawTransaction = sendRawTransaction;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendTransaction = sendTransaction;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
const getTransactionError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
const supportsWalletNamespace = new lru_js_1.LruMap(128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    try {
        (0, assertRequest_js_1.assertRequest)(parameters);
        const to = await (async ()=>{
            if (parameters.to) return parameters.to;
            if (parameters.to === null) return undefined;
            if (authorizationList && authorizationList.length > 0) return await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new base_js_1.BaseError('`to` is required. Could not infer from `authorizationList`.');
            });
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
                (0, assertCurrentChain_js_1.assertCurrentChain)({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
            const request = format({
                ...(0, extract_js_1.extract)(rest, {
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
            const request = await (0, getAction_js_1.getAction)(client, prepareTransactionRequest_js_1.prepareTransactionRequest, 'prepareTransactionRequest')({
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
                    ...prepareTransactionRequest_js_1.defaultParameters,
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
            return await (0, getAction_js_1.getAction)(client, sendRawTransaction_js_1.sendRawTransaction, 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if (account?.type === 'smart') throw new account_js_1.AccountTypeNotSupportedError({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new account_js_1.AccountTypeNotSupportedError({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof account_js_1.AccountTypeNotSupportedError) throw err;
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeContract = writeContract;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
async function writeContract(client, parameters) {
    const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
    if (typeof account_ === 'undefined') throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/contract/writeContract'
    });
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        return await (0, getAction_js_1.getAction)(client, sendTransaction_js_1.sendTransaction, 'sendTransaction')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            account,
            ...request
        });
    } catch (error) {
        throw (0, getContractError_js_1.getContractError)(error, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/getContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContract = getContract;
exports.getFunctionParameters = getFunctionParameters;
exports.getEventParameters = getEventParameters;
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const simulateContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)");
const writeContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
function getContract({ abi, address, client: client_ }) {
    const client = client_;
    const [publicClient, walletClient] = (()=>{
        if (!client) return [
            undefined,
            undefined
        ];
        if ('public' in client && 'wallet' in client) return [
            client.public,
            client.wallet
        ];
        if ('public' in client) return [
            client.public,
            undefined
        ];
        if ('wallet' in client) return [
            undefined,
            client.wallet
        ];
        return [
            client,
            client
        ];
    })();
    const hasPublicClient = publicClient !== undefined && publicClient !== null;
    const hasWalletClient = walletClient !== undefined && walletClient !== null;
    const contract = {};
    let hasReadFunction = false;
    let hasWriteFunction = false;
    let hasEvent = false;
    for (const item of abi){
        if (item.type === 'function') if (item.stateMutability === 'view' || item.stateMutability === 'pure') hasReadFunction = true;
        else hasWriteFunction = true;
        else if (item.type === 'event') hasEvent = true;
        if (hasReadFunction && hasWriteFunction && hasEvent) break;
    }
    if (hasPublicClient) {
        if (hasReadFunction) contract.read = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, readContract_js_1.readContract, 'readContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasWriteFunction) contract.simulate = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, simulateContract_js_1.simulateContract, 'simulateContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasEvent) {
            contract.createEventFilter = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.getEvents = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.watchEvent = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, watchContractEvent_js_1.watchContractEvent, 'watchContractEvent')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
        }
    }
    if (hasWalletClient) {
        if (hasWriteFunction) contract.write = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(walletClient, writeContract_js_1.writeContract, 'writeContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
    }
    if (hasPublicClient || hasWalletClient) {
        if (hasWriteFunction) contract.estimateGas = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    const client = publicClient ?? walletClient;
                    return (0, getAction_js_1.getAction)(client, estimateContractGas_js_1.estimateContractGas, 'estimateContractGas')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options,
                        account: options.account ?? walletClient.account
                    });
                };
            }
        });
    }
    contract.address = address;
    contract.abi = abi;
    return contract;
}
function getFunctionParameters(values) {
    const hasArgs = values.length && Array.isArray(values[0]);
    const args = hasArgs ? values[0] : [];
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
}
function getEventParameters(values, abiEvent) {
    let hasArgs = false;
    if (Array.isArray(values[0])) hasArgs = true;
    else if (values.length === 1) {
        hasArgs = abiEvent.inputs.some((x)=>x.indexed);
    } else if (values.length === 2) {
        hasArgs = true;
    }
    const args = hasArgs ? values[0] : undefined;
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
} //# sourceMappingURL=getContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fallbackTransactionErrorMagicIdentifier = exports.fallbackMagicIdentifier = void 0;
exports.sendCalls = sendCalls;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getTransactionError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
exports.fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
exports.fallbackTransactionErrorMagicIdentifier = (0, toHex_js_1.numberToHex)(0, {
    size: 32
});
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, capabilities, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0' } = parameters;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : null;
    const calls = parameters.calls.map((call_)=>{
        const call = call_;
        const data = call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        }) : call.data;
        return {
            data,
            to: call.to,
            value: call.value ? (0, toHex_js_1.numberToHex)(call.value) : undefined
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
                    chainId: (0, toHex_js_1.numberToHex)(chain.id),
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
        if (experimental_fallback && (error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError' || error.name === 'UnknownRpcError' || error.details.toLowerCase().includes('does not exist / is not available') || error.details.toLowerCase().includes('missing or invalid. request()') || error.details.toLowerCase().includes('did not match any variant of untagged enum') || error.details.toLowerCase().includes('account upgraded to unsupported contract') || error.details.toLowerCase().includes('eip-7702 not supported') || error.details.toLowerCase().includes('unsupported wc_ method'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability)=>!capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new rpc_js_1.UnsupportedNonOptionalCapabilityError(new base_js_1.BaseError(message, {
                        details: message
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new rpc_js_1.AtomicityNotSupportedError(new base_js_1.BaseError(message, {
                    details: message
                }));
            }
            const promises = [];
            for (const call of calls){
                const promise = (0, sendTransaction_js_1.sendTransaction)(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? (0, fromHex_js_1.hexToBigInt)(call.value) : undefined
                });
                promises.push(promise);
                if (experimental_fallbackDelay > 0) await new Promise((resolve)=>setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r)=>r.status === 'rejected')) throw results[0].reason;
            const hashes = results.map((result)=>{
                if (result.status === 'fulfilled') return result.value;
                return exports.fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: (0, concat_js_1.concat)([
                    ...hashes,
                    (0, toHex_js_1.numberToHex)(chain.id, {
                        size: 32
                    }),
                    exports.fallbackMagicIdentifier
                ])
            };
        }
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain
        });
    }
} //# sourceMappingURL=sendCalls.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCallsStatus = getCallsStatus;
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
const sendCalls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-ssr] (ecmascript)");
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(sendCalls_js_1.fallbackMagicIdentifier.slice(2));
        if (isTransactions) {
            const chainId = (0, trim_js_1.trim)((0, slice_js_1.sliceHex)(id, -64, -32));
            const hashes = (0, slice_js_1.sliceHex)(id, 0, -64).slice(2).match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash)=>sendCalls_js_1.fallbackTransactionErrorMagicIdentifier.slice(2) !== hash ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [
                        `0x${hash}`
                    ]
                }, {
                    dedupe: true
                }) : undefined));
            const status = (()=>{
                if (receipts.some((r)=>r === null)) return 100;
                if (receipts.every((r)=>r?.status === '0x1')) return 200;
                if (receipts.every((r)=>r?.status === '0x0')) return 500;
                return 600;
            })();
            return {
                atomic: false,
                chainId: (0, fromHex_js_1.hexToNumber)(chainId),
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
        if (statusCode === 'CONFIRMED') return [
            'success',
            200
        ];
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
        chainId: chainId ? (0, fromHex_js_1.hexToNumber)(chainId) : undefined,
        receipts: receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, fromHex_js_1.hexToBigInt)(receipt.blockNumber),
                gasUsed: (0, fromHex_js_1.hexToBigInt)(receipt.gasUsed),
                status: transactionReceipt_js_1.receiptStatuses[receipt.status]
            })) ?? [],
        statusCode,
        status,
        version
    };
} //# sourceMappingURL=getCallsStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForCallsStatusTimeoutError = void 0;
exports.waitForCallsStatus = waitForCallsStatus;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const withResolvers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)");
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode })=>statusCode >= 200, timeout = 60_000 } = parameters;
    const observerId = (0, stringify_js_1.stringify)([
        'waitForCallsStatus',
        client.uid,
        id
    ]);
    const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
    let timer = undefined;
    const unobserve = (0, observe_js_1.observe)(observerId, {
        resolve,
        reject
    }, (emit)=>{
        const unpoll = (0, poll_js_1.poll)(async ()=>{
            const done = (fn)=>{
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0, getCallsStatus_js_1.getCallsStatus)(client, {
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
class WaitForCallsStatusTimeoutError extends base_js_1.BaseError {
    constructor({ id }){
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, {
            name: 'WaitForCallsStatusTimeoutError'
        });
    }
}
exports.WaitForCallsStatusTimeoutError = WaitForCallsStatusTimeoutError; //# sourceMappingURL=waitForCallsStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAddress = getEnsAddress;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-ssr] (ecmascript)");
const namehash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsAddress(client, parameters) {
    const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    try {
        const functionData = (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: abis_js_1.addressResolverAbi,
            functionName: 'addr',
            ...coinType != null ? {
                args: [
                    (0, namehash_js_1.namehash)(name),
                    BigInt(coinType)
                ]
            } : {
                args: [
                    (0, namehash_js_1.namehash)(name)
                ]
            }
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                functionData,
                gatewayUrls ?? [
                    localBatchGatewayRequest_js_1.localBatchGatewayUrl
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const address = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.addressResolverAbi,
            args: coinType != null ? [
                (0, namehash_js_1.namehash)(name),
                BigInt(coinType)
            ] : undefined,
            functionName: 'addr',
            data: res[0]
        });
        if (address === '0x') return null;
        if ((0, trim_js_1.trim)(address) === '0x00') return null;
        return address;
    } catch (err) {
        if (strict) throw err;
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'resolve')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsText = getEnsText;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-ssr] (ecmascript)");
const namehash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsText(client, parameters) {
    const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
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
            abi: abis_js_1.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                (0, encodeFunctionData_js_1.encodeFunctionData)({
                    abi: abis_js_1.textResolverAbi,
                    functionName: 'text',
                    args: [
                        (0, namehash_js_1.namehash)(name),
                        key
                    ]
                }),
                gatewayUrls ?? [
                    localBatchGatewayRequest_js_1.localBatchGatewayUrl
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const record = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.textResolverAbi,
            functionName: 'text',
            data: res[0]
        });
        return record === '' ? null : record;
    } catch (err) {
        if (strict) throw err;
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'resolve')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsText.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAvatar = getEnsAvatar;
const parseAvatarRecord_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getEnsText_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)");
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
    const record = await (0, getAction_js_1.getAction)(client, getEnsText_js_1.getEnsText, 'getEnsText')({
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
        return await (0, parseAvatarRecord_js_1.parseAvatarRecord)(client, {
            record,
            gatewayUrls: assetGatewayUrls
        });
    } catch  {
        return null;
    }
} //# sourceMappingURL=getEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsName = getEnsName;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverReverseAbi,
            functionName: 'reverse',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(reverseNode))
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract');
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
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'reverse')) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsName.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsResolver = getEnsResolver;
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsResolver(client, parameters) {
    const { blockNumber, blockTag, name } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain?.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) throw new Error(`${name} is not a valid ENS TLD (${tlds?.join(', ')}) for chain "${chain.name}" (id: ${chain.id}).`);
    const [resolverAddress] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
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
            (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name))
        ],
        blockNumber,
        blockTag
    });
    return resolverAddress;
} //# sourceMappingURL=getEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createAccessList.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAccessList = createAccessList;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getCallError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
async function createAccessList(client, args) {
    const { account: account_ = client.account, blockNumber, blockTag = 'latest', blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    try {
        (0, assertRequest_js_1.assertRequest)(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
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
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=createAccessList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBlockFilter = createBlockFilter;
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createBlockFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEventFilter = createEventFilter;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                abi: [
                    event
                ],
                eventName: event.name,
                args
            }));
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
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPendingTransactionFilter = createPendingTransactionFilter;
const createFilterRequestScope_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createPendingTransactionFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlobBaseFee.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlobBaseFee = getBlobBaseFee;
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee'
    });
    return BigInt(baseFee);
} //# sourceMappingURL=getBlobBaseFee.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockTransactionCount = getBlockTransactionCount;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest' } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
    return (0, fromHex_js_1.hexToNumber)(count);
} //# sourceMappingURL=getBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getCode.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCode = getCode;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEip712Domain = getEip712Domain;
const eip712_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/eip712.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
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
            throw new eip712_js_1.Eip712DomainNotFoundError({
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeeHistory = getFeeHistory;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const feeHistory_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-ssr] (ecmascript)");
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles }) {
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0, toHex_js_1.numberToHex)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    return (0, feeHistory_js_1.formatFeeHistory)(feeHistory);
} //# sourceMappingURL=getFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterLogs = getFilterLogs;
const parseEventLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getFilterLogs(_client, { filter }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [
            filter.id
        ]
    });
    const formattedLogs = logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (!filter.abi) return formattedLogs;
    return (0, parseEventLogs_js_1.parseEventLogs)({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getProof.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProof = getProof;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const proof_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/proof.js [app-ssr] (ecmascript)");
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [
            address,
            storageKeys,
            blockNumberHex || blockTag
        ]
    });
    return (0, proof_js_1.formatProof)(proof);
} //# sourceMappingURL=getProof.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStorageAt = getStorageAt;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransaction = getTransaction;
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const transaction_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
                (0, toHex_js_1.numberToHex)(index)
            ]
        }, {
            dedupe: true
        });
    } else if ("TURBOPACK compile-time truthy", 1) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [
                blockNumberHex || blockTag,
                (0, toHex_js_1.numberToHex)(index)
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!transaction) throw new transaction_js_1.TransactionNotFoundError({
        blockHash,
        blockNumber,
        blockTag,
        hash,
        index
    });
    const format = client.chain?.formatters?.transaction?.format || transaction_js_2.formatTransaction;
    return format(transaction);
} //# sourceMappingURL=getTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionConfirmations = getTransactionConfirmations;
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({}),
        hash ? (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({
            hash
        }) : undefined
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber) return 0n;
    return blockNumber - transactionBlockNumber + 1n;
} //# sourceMappingURL=getTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionReceipt = getTransactionReceipt;
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new transaction_js_1.TransactionReceiptNotFoundError({
        hash
    });
    const format = client.chain?.formatters?.transactionReceipt?.format || transactionReceipt_js_1.formatTransactionReceipt;
    return format(receipt);
} //# sourceMappingURL=getTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/multicall.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicall = multicall;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function multicall(client, parameters) {
    const { account, allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride } = parameters;
    const contracts = parameters.contracts;
    const batchSize = batchSize_ ?? (typeof client.batch?.multicall === 'object' && client.batch.multicall.batchSize || 1_024);
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new Error('client chain not configured. multicallAddress is required.');
        multicallAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
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
            const callData = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                args,
                functionName
            });
            currentChunkSize += (callData.length - 2) / 2;
            if (batchSize > 0 && currentChunkSize > batchSize && chunkedCalls[currentChunk].length > 0) {
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
            const error = (0, getContractError_js_1.getContractError)(err, {
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
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls)=>(0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            abi: abis_js_1.multicall3Abi,
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
        const aggregate3Result = result.value;
        for(let j = 0; j < aggregate3Result.length; j++){
            const { returnData, success } = aggregate3Result[j];
            const { callData } = chunkedCalls[i][j];
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
                if (!success) throw new contract_js_1.RawContractError({
                    data: returnData
                });
                const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
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
                const error = (0, getContractError_js_1.getContractError)(err, {
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
    if (results.length !== contracts.length) throw new base_js_1.BaseError('multicall results mismatch');
    return results;
} //# sourceMappingURL=multicall.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateBlocks = simulateBlocks;
const BlockOverrides = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/BlockOverrides.js [app-ssr] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stateOverride.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
async function simulateBlocks(client, parameters) {
    const { blockNumber, blockTag = 'latest', blocks, returnFullTransactions, traceTransfers, validation } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks){
            const blockOverrides = block.blockOverrides ? BlockOverrides.toRpc(block.blockOverrides) : undefined;
            const calls = block.calls.map((call_)=>{
                const call = call_;
                const account = call.account ? (0, parseAccount_js_1.parseAccount)(call.account) : undefined;
                const request = {
                    ...call,
                    data: call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)(call) : call.data,
                    from: call.from ?? account?.address
                };
                (0, assertRequest_js_1.assertRequest)(request);
                return (0, transactionRequest_js_1.formatTransactionRequest)(request);
            });
            const stateOverrides = block.stateOverrides ? (0, stateOverride_js_1.serializeStateOverride)(block.stateOverrides) : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
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
                ...(0, block_js_1.formatBlock)(block),
                calls: block.calls.map((call, j)=>{
                    const { abi, args, functionName, to } = blocks[i].calls[j];
                    const data = call.error?.data ?? call.returnData;
                    const gasUsed = BigInt(call.gasUsed);
                    const logs = call.logs?.map((log)=>(0, log_js_1.formatLog)(log));
                    const status = call.status === '0x1' ? 'success' : 'failure';
                    const result = abi && status === 'success' && data !== '0x' ? (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                        abi,
                        data,
                        functionName
                    }) : null;
                    const error = (()=>{
                        if (status === 'success') return undefined;
                        let error = undefined;
                        if (call.error?.data === '0x') error = new abi_js_1.AbiDecodingZeroDataError();
                        else if (call.error) error = new contract_js_1.RawContractError(call.error);
                        if (!error) return undefined;
                        return (0, getContractError_js_1.getContractError)(error, {
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
        const error = (0, getNodeError_js_1.getNodeError)(cause, {});
        if (error instanceof node_js_1.UnknownNodeError) throw cause;
        throw error;
    }
} //# sourceMappingURL=simulateBlocks.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateCalls.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateCalls = simulateCalls;
const AbiConstructor = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiConstructor.js [app-ssr] (ecmascript)");
const AbiFunction = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiFunction.js [app-ssr] (ecmascript)");
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contracts.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const createAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createAccessList.js [app-ssr] (ecmascript)");
const simulateBlocks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-ssr] (ecmascript)");
const getBalanceCode = '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033';
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
    const account = parameters.account ? (0, parseAccount_js_1.parseAccount)(parameters.account) : undefined;
    if (traceAssetChanges && !account) throw new base_js_1.BaseError('`account` is required when `traceAssetChanges` is true');
    const getBalanceData = account ? AbiConstructor.encode(AbiConstructor.from('constructor(bytes, bytes)'), {
        bytecode: contracts_js_1.deploylessCallViaBytecodeBytecode,
        args: [
            getBalanceCode,
            AbiFunction.encodeData(AbiFunction.from('function getBalance(address)'), [
                account.address
            ])
        ]
    }) : undefined;
    const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call)=>{
        if (!call.data && !call.abi) return;
        const { accessList } = await (0, createAccessList_js_1.createAccessList)(client, {
            account: account.address,
            ...call,
            data: call.abi ? (0, encodeFunctionData_js_1.encodeFunctionData)(call) : call.data
        });
        return accessList.map(({ address, storageKeys })=>storageKeys.length > 0 ? address : null);
    })).then((x)=>x.flat().filter(Boolean)) : [];
    const blocks = await (0, simulateBlocks_js_1.simulateBlocks)(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            ...traceAssetChanges ? [
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ],
                    stateOverrides
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                AbiFunction.from('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
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
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                AbiFunction.from('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function decimals() returns (uint256)')
                            ],
                            functionName: 'decimals',
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function tokenURI(uint256) returns (string)')
                            ],
                            functionName: 'tokenURI',
                            args: [
                                0n
                            ],
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
                            nonce: 0
                        }
                    ]
                },
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                AbiFunction.from('function symbol() returns (string)')
                            ],
                            functionName: 'symbol',
                            from: address_js_1.zeroAddress,
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: address_js_1.zeroAddress,
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
    const { calls: block_calls, ...block } = block_results;
    const results = block_calls.slice(0, -1) ?? [];
    const ethPre = block_ethPre?.calls ?? [];
    const assetsPre = block_assetsPre?.calls ?? [];
    const balancesPre = [
        ...ethPre,
        ...assetsPre
    ].map((call)=>call.status === 'success' ? (0, index_js_1.hexToBigInt)(call.data) : null);
    const ethPost = block_ethPost?.calls ?? [];
    const assetsPost = block_assetsPost?.calls ?? [];
    const balancesPost = [
        ...ethPost,
        ...assetsPost
    ].map((call)=>call.status === 'success' ? (0, index_js_1.hexToBigInt)(call.data) : null);
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
                address: address_js_1.ethAddress,
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyHash = verifyHash;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contracts.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const isErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-ssr] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
const serializeErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-ssr] (ecmascript)");
const serializeSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function verifyHash(client, parameters) {
    const { address, factory, factoryData, hash, signature, universalSignatureVerifierAddress = client.chain?.contracts?.universalSignatureVerifier?.address, ...rest } = parameters;
    const signatureHex = (()=>{
        if ((0, isHex_js_1.isHex)(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, serializeSignature_js_1.serializeSignature)(signature);
        return (0, toHex_js_1.bytesToHex)(signature);
    })();
    const wrappedSignature = await (async ()=>{
        if (!factory && !factoryData) return signatureHex;
        if ((0, isErc6492Signature_js_1.isErc6492Signature)(signatureHex)) return signatureHex;
        return (0, serializeErc6492Signature_js_1.serializeErc6492Signature)({
            address: factory,
            data: factoryData,
            signature: signatureHex
        });
    })();
    try {
        const args = universalSignatureVerifierAddress ? {
            to: universalSignatureVerifierAddress,
            data: (0, index_js_1.encodeFunctionData)({
                abi: abis_js_1.universalSignatureValidatorAbi,
                functionName: 'isValidSig',
                args: [
                    address,
                    hash,
                    wrappedSignature
                ]
            }),
            ...rest
        } : {
            data: (0, encodeDeployData_js_1.encodeDeployData)({
                abi: abis_js_1.universalSignatureValidatorAbi,
                args: [
                    address,
                    hash,
                    wrappedSignature
                ],
                bytecode: contracts_js_1.universalSignatureValidatorByteCode
            }),
            ...rest
        };
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')(args);
        return (0, index_js_1.hexToBool)(data ?? '0x0');
    } catch (error) {
        try {
            const verified = (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAddress_js_1.recoverAddress)({
                hash,
                signature
            }));
            if (verified) return true;
        } catch  {}
        if (error instanceof contract_js_1.CallExecutionError) {
            return false;
        }
        throw error;
    }
} //# sourceMappingURL=verifyHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = verifyMessage;
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = verifyTypedData;
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = (0, hashTypedData_js_1.hashTypedData)({
        message,
        primaryType,
        types,
        domain
    });
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlockNumber = watchBlockNumber;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket') return false;
        if (client.transport.type === 'fallback' && client.transport.transports[0].config.type === 'webSocket') return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({
                        cacheTime: 0
                    });
                    if (prevBlockNumber) {
                        if (blockNumber === prevBlockNumber) return;
                        if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                            for(let i = prevBlockNumber + 1n; i < blockNumber; i++){
                                emit.onBlockNumber(i, prevBlockNumber);
                                prevBlockNumber = i;
                            }
                        }
                    }
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
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed
        ]);
        return (0, observe_js_1.observe)(observerId, {
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
                            const blockNumber = (0, fromHex_js_1.hexToBigInt)(data.result?.number);
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitForTransactionReceipt = waitForTransactionReceipt;
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const withResolvers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-ssr] (ecmascript)");
const withRetry_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)");
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, retryCount = 6, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 180_000 }) {
    const observerId = (0, stringify_js_1.stringify)([
        'waitForTransactionReceipt',
        client.uid,
        hash
    ]);
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    let _unobserve;
    let _unwatch;
    const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
    const timer = timeout ? setTimeout(()=>{
        _unwatch();
        _unobserve();
        reject(new transaction_js_1.WaitForTransactionReceiptTimeoutError({
            hash
        }));
    }, timeout) : undefined;
    _unobserve = (0, observe_js_1.observe)(observerId, {
        onReplaced,
        resolve,
        reject
    }, (emit)=>{
        _unwatch = (0, getAction_js_1.getAction)(client, watchBlockNumber_js_1.watchBlockNumber, 'watchBlockNumber')({
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
                    if (receipt) {
                        if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                        done(()=>emit.resolve(receipt));
                        return;
                    }
                    if (!transaction) {
                        retrying = true;
                        await (0, withRetry_js_1.withRetry)(async ()=>{
                            transaction = await (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({
                                hash
                            });
                            if (transaction.blockNumber) blockNumber = transaction.blockNumber;
                        }, {
                            delay: retryDelay,
                            retryCount
                        });
                        retrying = false;
                    }
                    receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                        hash
                    });
                    if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    if (err instanceof transaction_js_1.TransactionNotFoundError || err instanceof transaction_js_1.TransactionReceiptNotFoundError) {
                        if (!transaction) {
                            retrying = false;
                            return;
                        }
                        try {
                            replacedTransaction = transaction;
                            retrying = true;
                            const block = await (0, withRetry_js_1.withRetry)(()=>(0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true
                                }), {
                                delay: retryDelay,
                                retryCount,
                                shouldRetry: ({ error })=>error instanceof block_js_1.BlockNotFoundError
                            });
                            retrying = false;
                            const replacementTransaction = block.transactions.find(({ from, nonce })=>from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                            if (!replacementTransaction) return;
                            receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                                hash: replacementTransaction.hash
                            });
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlocks = watchBlocks;
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
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
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlock,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                        blockTag,
                        includeTransactions
                    });
                    if (block.number !== null && prevBlock?.number != null) {
                        if (block.number === prevBlock.number) return;
                        if (block.number - prevBlock.number > 1 && emitMissed) {
                            for(let i = prevBlock?.number + 1n; i < block.number; i++){
                                const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber: i,
                                    includeTransactions
                                });
                                emit.onBlock(block, prevBlock);
                                prevBlock = block;
                            }
                        }
                    }
                    if (prevBlock?.number == null || blockTag === 'pending' && block?.number == null || block.number !== null && block.number > prevBlock.number) {
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
                    (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
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
                        const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchEvent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchEvent = watchEvent;
const encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const createEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
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
        const observerId = (0, stringify_js_1.stringify)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createEventFilter_js_1.createEventFilter, 'createEventFilter')({
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
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
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
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
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
                    const encoded = events_.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                            abi: [
                                event
                            ],
                            eventName: event.name,
                            args
                        }));
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
                            const { eventName, args } = (0, decodeEventLog_js_1.decodeEventLog)({
                                abi: events_ ?? [],
                                data: log.data,
                                topics: log.topics,
                                strict
                            });
                            const formatted = (0, log_js_1.formatLog)(log, {
                                args,
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                            }
                            const formatted = (0, log_js_1.formatLog)(log, {
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchPendingTransactions = watchPendingTransactions;
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollPendingTransactions = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onTransactions,
            onError
        }, (emit)=>{
            let filter;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                try {
                    if (!filter) {
                        try {
                            filter = await (0, getAction_js_1.getAction)(client, createPendingTransactionFilter_js_1.createPendingTransactionFilter, 'createPendingTransactionFilter')({});
                            return;
                        } catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
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
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/siwe/verifySiweMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifySiweMessage = verifySiweMessage;
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
const parseSiweMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/siwe/parseSiweMessage.js [app-ssr] (ecmascript)");
const validateSiweMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/siwe/validateSiweMessage.js [app-ssr] (ecmascript)");
const verifyHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = (0, parseSiweMessage_js_1.parseSiweMessage)(message);
    if (!parsed.address) return false;
    const isValid = (0, validateSiweMessage_js_1.validateSiweMessage)({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time
    });
    if (!isValid) return false;
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifySiweMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropTransaction = dropTransaction;
async function dropTransaction(client, { hash }) {
    await client.request({
        method: `${client.mode}_dropTransaction`,
        params: [
            hash
        ]
    });
} //# sourceMappingURL=dropTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dumpState.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dumpState = dumpState;
async function dumpState(client) {
    return client.request({
        method: `${client.mode}_dumpState`
    });
} //# sourceMappingURL=dumpState.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getAutomine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAutomine = getAutomine;
async function getAutomine(client) {
    if (client.mode === 'ganache') return await client.request({
        method: 'eth_mining'
    });
    return await client.request({
        method: `${client.mode}_getAutomine`
    });
} //# sourceMappingURL=getAutomine.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolContent = getTxpoolContent;
async function getTxpoolContent(client) {
    return await client.request({
        method: 'txpool_content'
    });
} //# sourceMappingURL=getTxpoolContent.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolStatus = getTxpoolStatus;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
async function getTxpoolStatus(client) {
    const { pending, queued } = await client.request({
        method: 'txpool_status'
    });
    return {
        pending: (0, fromHex_js_1.hexToNumber)(pending),
        queued: (0, fromHex_js_1.hexToNumber)(queued)
    };
} //# sourceMappingURL=getTxpoolStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.impersonateAccount = impersonateAccount;
async function impersonateAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_impersonateAccount`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=impersonateAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/increaseTime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increaseTime = increaseTime;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function increaseTime(client, { seconds }) {
    return await client.request({
        method: 'evm_increaseTime',
        params: [
            (0, toHex_js_1.numberToHex)(seconds)
        ]
    });
} //# sourceMappingURL=increaseTime.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inspectTxpool = inspectTxpool;
async function inspectTxpool(client) {
    return await client.request({
        method: 'txpool_inspect'
    });
} //# sourceMappingURL=inspectTxpool.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/loadState.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadState = loadState;
async function loadState(client, { state }) {
    await client.request({
        method: `${client.mode}_loadState`,
        params: [
            state
        ]
    });
} //# sourceMappingURL=loadState.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/mine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mine = mine;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function mine(client, { blocks, interval }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_mine',
        params: [
            {
                blocks: (0, toHex_js_1.numberToHex)(blocks)
            }
        ]
    });
    else await client.request({
        method: `${client.mode}_mine`,
        params: [
            (0, toHex_js_1.numberToHex)(blocks),
            (0, toHex_js_1.numberToHex)(interval || 0)
        ]
    });
} //# sourceMappingURL=mine.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeBlockTimestampInterval = removeBlockTimestampInterval;
async function removeBlockTimestampInterval(client) {
    await client.request({
        method: `${client.mode}_removeBlockTimestampInterval`
    });
} //# sourceMappingURL=removeBlockTimestampInterval.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/reset.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reset = reset;
async function reset(client, { blockNumber, jsonRpcUrl } = {}) {
    await client.request({
        method: `${client.mode}_reset`,
        params: [
            {
                forking: {
                    blockNumber: Number(blockNumber),
                    jsonRpcUrl
                }
            }
        ]
    });
} //# sourceMappingURL=reset.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/revert.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.revert = revert;
async function revert(client, { id }) {
    await client.request({
        method: 'evm_revert',
        params: [
            id
        ]
    });
} //# sourceMappingURL=revert.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendUnsignedTransaction = sendUnsignedTransaction;
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
async function sendUnsignedTransaction(client, args) {
    const { accessList, data, from, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
    const request = format({
        ...(0, extract_js_1.extract)(rest, {
            format: chainFormat
        }),
        accessList,
        data,
        from,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
    });
    const hash = await client.request({
        method: 'eth_sendUnsignedTransaction',
        params: [
            request
        ]
    });
    return hash;
} //# sourceMappingURL=sendUnsignedTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setAutomine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setAutomine = setAutomine;
async function setAutomine(client, enabled) {
    if (client.mode === 'ganache') {
        if (enabled) await client.request({
            method: 'miner_start'
        });
        else await client.request({
            method: 'miner_stop'
        });
    } else await client.request({
        method: 'evm_setAutomine',
        params: [
            enabled
        ]
    });
} //# sourceMappingURL=setAutomine.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBalance.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBalance = setBalance;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setBalance(client, { address, value }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_setAccountBalance',
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
    else await client.request({
        method: `${client.mode}_setBalance`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
} //# sourceMappingURL=setBalance.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockGasLimit = setBlockGasLimit;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setBlockGasLimit(client, { gasLimit }) {
    await client.request({
        method: 'evm_setBlockGasLimit',
        params: [
            (0, toHex_js_1.numberToHex)(gasLimit)
        ]
    });
} //# sourceMappingURL=setBlockGasLimit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockTimestampInterval = setBlockTimestampInterval;
async function setBlockTimestampInterval(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: `${client.mode}_setBlockTimestampInterval`,
        params: [
            interval_
        ]
    });
} //# sourceMappingURL=setBlockTimestampInterval.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCode.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCode = setCode;
async function setCode(client, { address, bytecode }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_setAccountCode',
        params: [
            address,
            bytecode
        ]
    });
    else await client.request({
        method: `${client.mode}_setCode`,
        params: [
            address,
            bytecode
        ]
    });
} //# sourceMappingURL=setCode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCoinbase = setCoinbase;
async function setCoinbase(client, { address }) {
    await client.request({
        method: `${client.mode}_setCoinbase`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=setCoinbase.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setIntervalMining = setIntervalMining;
async function setIntervalMining(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: 'evm_setIntervalMining',
        params: [
            interval_
        ]
    });
} //# sourceMappingURL=setIntervalMining.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoggingEnabled = setLoggingEnabled;
async function setLoggingEnabled(client, enabled) {
    await client.request({
        method: `${client.mode}_setLoggingEnabled`,
        params: [
            enabled
        ]
    });
} //# sourceMappingURL=setLoggingEnabled.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setMinGasPrice = setMinGasPrice;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setMinGasPrice(client, { gasPrice }) {
    await client.request({
        method: `${client.mode}_setMinGasPrice`,
        params: [
            (0, toHex_js_1.numberToHex)(gasPrice)
        ]
    });
} //# sourceMappingURL=setMinGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockBaseFeePerGas = setNextBlockBaseFeePerGas;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNextBlockBaseFeePerGas(client, { baseFeePerGas }) {
    await client.request({
        method: `${client.mode}_setNextBlockBaseFeePerGas`,
        params: [
            (0, toHex_js_1.numberToHex)(baseFeePerGas)
        ]
    });
} //# sourceMappingURL=setNextBlockBaseFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockTimestamp = setNextBlockTimestamp;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNextBlockTimestamp(client, { timestamp }) {
    await client.request({
        method: 'evm_setNextBlockTimestamp',
        params: [
            (0, toHex_js_1.numberToHex)(timestamp)
        ]
    });
} //# sourceMappingURL=setNextBlockTimestamp.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNonce.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNonce = setNonce;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNonce(client, { address, nonce }) {
    await client.request({
        method: `${client.mode}_setNonce`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(nonce)
        ]
    });
} //# sourceMappingURL=setNonce.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRpcUrl = setRpcUrl;
async function setRpcUrl(client, jsonRpcUrl) {
    await client.request({
        method: `${client.mode}_setRpcUrl`,
        params: [
            jsonRpcUrl
        ]
    });
} //# sourceMappingURL=setRpcUrl.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStorageAt = setStorageAt;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setStorageAt(client, { address, index, value }) {
    await client.request({
        method: `${client.mode}_setStorageAt`,
        params: [
            address,
            typeof index === 'number' ? (0, toHex_js_1.numberToHex)(index) : index,
            value
        ]
    });
} //# sourceMappingURL=setStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/snapshot.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snapshot = snapshot;
async function snapshot(client) {
    return await client.request({
        method: 'evm_snapshot'
    });
} //# sourceMappingURL=snapshot.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopImpersonatingAccount = stopImpersonatingAccount;
async function stopImpersonatingAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_stopImpersonatingAccount`,
        params: [
            address
        ]
    });
} //# sourceMappingURL=stopImpersonatingAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/addChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addChain = addChain;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id),
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deployContract = deployContract;
const encodeDeployData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, encodeDeployData_js_1.encodeDeployData)({
        abi,
        args,
        bytecode
    });
    return (0, sendTransaction_js_1.sendTransaction)(walletClient, {
        ...request,
        ...request.authorizationList ? {
            to: null
        } : {},
        data: calldata
    });
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAddresses = getAddresses;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    }, {
        dedupe: true
    });
    return addresses.map((address)=>(0, getAddress_js_1.checksumAddress)(address));
} //# sourceMappingURL=getAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCapabilities.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCapabilities = getCapabilities;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getCapabilities(client, parameters = {}) {
    const { account = client.account, chainId } = parameters;
    const account_ = account ? (0, parseAccount_js_1.parseAccount)(account) : undefined;
    const params = chainId ? [
        account_?.address,
        [
            (0, toHex_js_1.numberToHex)(chainId)
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPermissions = getPermissions;
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    }, {
        dedupe: true
    });
    return permissions;
} //# sourceMappingURL=getPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareAuthorization = prepareAuthorization;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/eip7702/prepareAuthorization'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const executor = (()=>{
        if (!parameters.executor) return undefined;
        if (parameters.executor === 'self') return parameters.executor;
        return (0, parseAccount_js_1.parseAccount)(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce
    };
    if (typeof authorization.chainId === 'undefined') authorization.chainId = client.chain?.id ?? await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0, getAction_js_1.getAction)(client, getTransactionCount_js_1.getTransactionCount, 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending'
        });
        if (executor === 'self' || executor?.address && (0, isAddressEqual_js_1.isAddressEqual)(executor.address, account.address)) authorization.nonce += 1;
    }
    return authorization;
} //# sourceMappingURL=prepareAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAddresses = requestAddresses;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    }, {
        dedupe: true,
        retryCount: 0
    });
    return addresses.map((address)=>(0, getAddress_js_1.getAddress)(address));
} //# sourceMappingURL=requestAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestPermissions = requestPermissions;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showCallsStatus = showCallsStatus;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signAuthorization = signAuthorization;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const prepareAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)");
async function signAuthorization(client, parameters) {
    const { account: account_ = client.account } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/eip7702/signAuthorization'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    if (!account.signAuthorization) throw new account_js_1.AccountTypeNotSupportedError({
        docsPath: '/docs/eip7702/signAuthorization',
        metaMessages: [
            'The `signAuthorization` Action does not support JSON-RPC Accounts.'
        ],
        type: account.type
    });
    const authorization = await (0, prepareAuthorization_js_1.prepareAuthorization)(client, parameters);
    return account.signAuthorization(authorization);
} //# sourceMappingURL=signAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signMessage = signMessage;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function signMessage(client, { account: account_ = client.account, message }) {
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signMessage'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    if (account.signMessage) return account.signMessage({
        message
    });
    const message_ = (()=>{
        if (typeof message === 'string') return (0, toHex_js_1.stringToHex)(message);
        if (message.raw instanceof Uint8Array) return (0, toHex_js_1.toHex)(message.raw);
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTransaction = signTransaction;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
async function signTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    (0, assertRequest_js_1.assertRequest)({
        account,
        ...parameters
    });
    const chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
    if (chain !== null) (0, assertCurrentChain_js_1.assertCurrentChain)({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || transactionRequest_js_1.formatTransactionRequest;
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
                chainId: (0, toHex_js_1.numberToHex)(chainId),
                from: account.address
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTypedData = signTypedData;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)");
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, message, primaryType } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const types = {
        EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
            domain
        }),
        ...parameters.types
    };
    (0, typedData_js_1.validateTypedData)({
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
    const typedData = (0, typedData_js_1.serializeTypedData)({
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchChain = switchChain;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id)
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchAsset = watchAsset;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchPendingTransactions = exports.watchEvent = exports.watchBlockNumber = exports.watchBlocks = exports.simulateCalls = exports.simulate = exports.simulateBlocks = exports.multicall = exports.mine = exports.loadState = exports.increaseTime = exports.impersonateAccount = exports.getTransactionReceipt = exports.getTransaction = exports.getTransactionCount = exports.getTransactionConfirmations = exports.getStorageAt = exports.getLogs = exports.getGasPrice = exports.getFilterLogs = exports.getFilterChanges = exports.getFeeHistory = exports.getEip712Domain = exports.getContractEvents = exports.getCode = exports.getBytecode = exports.getChainId = exports.getBlockTransactionCount = exports.getBlockNumber = exports.getBlock = exports.getBlobBaseFee = exports.getBalance = exports.estimateGas = exports.estimateMaxPriorityFeePerGas = exports.estimateFeesPerGas = exports.estimateContractGas = exports.dumpState = exports.createPendingTransactionFilter = exports.createEventFilter = exports.createContractEventFilter = exports.createBlockFilter = exports.createAccessList = exports.call = exports.getEnsText = exports.getEnsResolver = exports.getEnsName = exports.getEnsAvatar = exports.getEnsAddress = exports.deployContract = exports.addChain = void 0;
exports.verifyHash = exports.uninstallFilter = exports.switchChain = exports.stopImpersonatingAccount = exports.simulateContract = exports.signTypedData = exports.signMessage = exports.snapshot = exports.setStorageAt = exports.setRpcUrl = exports.setNonce = exports.setNextBlockTimestamp = exports.setNextBlockBaseFeePerGas = exports.setMinGasPrice = exports.setLoggingEnabled = exports.setIntervalMining = exports.setCoinbase = exports.setCode = exports.setBlockTimestampInterval = exports.setBlockGasLimit = exports.setAutomine = exports.setBalance = exports.sendUnsignedTransaction = exports.sendRawTransaction = exports.signTransaction = exports.signAuthorization = exports.sendTransaction = exports.defaultPrepareTransactionRequestParameters = exports.prepareTransactionRequest = exports.prepareAuthorization = exports.revert = exports.reset = exports.removeBlockTimestampInterval = exports.inspectTxpool = exports.getTxpoolStatus = exports.getTxpoolContent = exports.getAutomine = exports.dropTransaction = exports.requestPermissions = exports.requestAddresses = exports.waitForTransactionReceipt = exports.getProof = exports.waitForCallsStatus = exports.showCallsStatus = exports.getCallsStatus = exports.sendCalls = exports.getCapabilities = exports.getPermissions = exports.getAddresses = exports.readContract = void 0;
exports.writeContract = exports.watchContractEvent = exports.watchAsset = exports.verifyTypedData = exports.verifyMessage = void 0;
var addChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/addChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "addChain", {
    enumerable: true,
    get: function() {
        return addChain_js_1.addChain;
    }
});
var deployContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "deployContract", {
    enumerable: true,
    get: function() {
        return deployContract_js_1.deployContract;
    }
});
var getEnsAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEnsAddress", {
    enumerable: true,
    get: function() {
        return getEnsAddress_js_1.getEnsAddress;
    }
});
var getEnsAvatar_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEnsAvatar", {
    enumerable: true,
    get: function() {
        return getEnsAvatar_js_1.getEnsAvatar;
    }
});
var getEnsName_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEnsName", {
    enumerable: true,
    get: function() {
        return getEnsName_js_1.getEnsName;
    }
});
var getEnsResolver_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEnsResolver", {
    enumerable: true,
    get: function() {
        return getEnsResolver_js_1.getEnsResolver;
    }
});
var getEnsText_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEnsText", {
    enumerable: true,
    get: function() {
        return getEnsText_js_1.getEnsText;
    }
});
var call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "call", {
    enumerable: true,
    get: function() {
        return call_js_1.call;
    }
});
var createAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createAccessList.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createAccessList", {
    enumerable: true,
    get: function() {
        return createAccessList_js_1.createAccessList;
    }
});
var createBlockFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createBlockFilter", {
    enumerable: true,
    get: function() {
        return createBlockFilter_js_1.createBlockFilter;
    }
});
var createContractEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createContractEventFilter", {
    enumerable: true,
    get: function() {
        return createContractEventFilter_js_1.createContractEventFilter;
    }
});
var createEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createEventFilter", {
    enumerable: true,
    get: function() {
        return createEventFilter_js_1.createEventFilter;
    }
});
var createPendingTransactionFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createPendingTransactionFilter", {
    enumerable: true,
    get: function() {
        return createPendingTransactionFilter_js_1.createPendingTransactionFilter;
    }
});
var dumpState_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dumpState.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "dumpState", {
    enumerable: true,
    get: function() {
        return dumpState_js_1.dumpState;
    }
});
var estimateContractGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "estimateContractGas", {
    enumerable: true,
    get: function() {
        return estimateContractGas_js_1.estimateContractGas;
    }
});
var estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "estimateFeesPerGas", {
    enumerable: true,
    get: function() {
        return estimateFeesPerGas_js_1.estimateFeesPerGas;
    }
});
var estimateMaxPriorityFeePerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "estimateMaxPriorityFeePerGas", {
    enumerable: true,
    get: function() {
        return estimateMaxPriorityFeePerGas_js_1.estimateMaxPriorityFeePerGas;
    }
});
var estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "estimateGas", {
    enumerable: true,
    get: function() {
        return estimateGas_js_1.estimateGas;
    }
});
var getBalance_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBalance", {
    enumerable: true,
    get: function() {
        return getBalance_js_1.getBalance;
    }
});
var getBlobBaseFee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlobBaseFee.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBlobBaseFee", {
    enumerable: true,
    get: function() {
        return getBlobBaseFee_js_1.getBlobBaseFee;
    }
});
var getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBlock", {
    enumerable: true,
    get: function() {
        return getBlock_js_1.getBlock;
    }
});
var getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBlockNumber", {
    enumerable: true,
    get: function() {
        return getBlockNumber_js_1.getBlockNumber;
    }
});
var getBlockTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBlockTransactionCount", {
    enumerable: true,
    get: function() {
        return getBlockTransactionCount_js_1.getBlockTransactionCount;
    }
});
var getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getChainId", {
    enumerable: true,
    get: function() {
        return getChainId_js_1.getChainId;
    }
});
var getCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getCode.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBytecode", {
    enumerable: true,
    get: function() {
        return getCode_js_1.getCode;
    }
});
Object.defineProperty(exports, "getCode", {
    enumerable: true,
    get: function() {
        return getCode_js_1.getCode;
    }
});
var getContractEvents_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContractEvents", {
    enumerable: true,
    get: function() {
        return getContractEvents_js_1.getContractEvents;
    }
});
var getEip712Domain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEip712Domain", {
    enumerable: true,
    get: function() {
        return getEip712Domain_js_1.getEip712Domain;
    }
});
var getFeeHistory_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFeeHistory", {
    enumerable: true,
    get: function() {
        return getFeeHistory_js_1.getFeeHistory;
    }
});
var getFilterChanges_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFilterChanges", {
    enumerable: true,
    get: function() {
        return getFilterChanges_js_1.getFilterChanges;
    }
});
var getFilterLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFilterLogs", {
    enumerable: true,
    get: function() {
        return getFilterLogs_js_1.getFilterLogs;
    }
});
var getGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getGasPrice", {
    enumerable: true,
    get: function() {
        return getGasPrice_js_1.getGasPrice;
    }
});
var getLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getLogs", {
    enumerable: true,
    get: function() {
        return getLogs_js_1.getLogs;
    }
});
var getStorageAt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getStorageAt", {
    enumerable: true,
    get: function() {
        return getStorageAt_js_1.getStorageAt;
    }
});
var getTransactionConfirmations_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionConfirmations", {
    enumerable: true,
    get: function() {
        return getTransactionConfirmations_js_1.getTransactionConfirmations;
    }
});
var getTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionCount", {
    enumerable: true,
    get: function() {
        return getTransactionCount_js_1.getTransactionCount;
    }
});
var getTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransaction", {
    enumerable: true,
    get: function() {
        return getTransaction_js_1.getTransaction;
    }
});
var getTransactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionReceipt", {
    enumerable: true,
    get: function() {
        return getTransactionReceipt_js_1.getTransactionReceipt;
    }
});
var impersonateAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "impersonateAccount", {
    enumerable: true,
    get: function() {
        return impersonateAccount_js_1.impersonateAccount;
    }
});
var increaseTime_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/increaseTime.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "increaseTime", {
    enumerable: true,
    get: function() {
        return increaseTime_js_1.increaseTime;
    }
});
var loadState_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/loadState.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "loadState", {
    enumerable: true,
    get: function() {
        return loadState_js_1.loadState;
    }
});
var mine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/mine.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "mine", {
    enumerable: true,
    get: function() {
        return mine_js_1.mine;
    }
});
var multicall_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/multicall.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "multicall", {
    enumerable: true,
    get: function() {
        return multicall_js_1.multicall;
    }
});
var simulateBlocks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "simulateBlocks", {
    enumerable: true,
    get: function() {
        return simulateBlocks_js_1.simulateBlocks;
    }
});
Object.defineProperty(exports, "simulate", {
    enumerable: true,
    get: function() {
        return simulateBlocks_js_1.simulateBlocks;
    }
});
var simulateCalls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateCalls.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "simulateCalls", {
    enumerable: true,
    get: function() {
        return simulateCalls_js_1.simulateCalls;
    }
});
var watchBlocks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchBlocks", {
    enumerable: true,
    get: function() {
        return watchBlocks_js_1.watchBlocks;
    }
});
var watchBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchBlockNumber", {
    enumerable: true,
    get: function() {
        return watchBlockNumber_js_1.watchBlockNumber;
    }
});
var watchEvent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchEvent.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchEvent", {
    enumerable: true,
    get: function() {
        return watchEvent_js_1.watchEvent;
    }
});
var watchPendingTransactions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchPendingTransactions", {
    enumerable: true,
    get: function() {
        return watchPendingTransactions_js_1.watchPendingTransactions;
    }
});
var readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "readContract", {
    enumerable: true,
    get: function() {
        return readContract_js_1.readContract;
    }
});
var getAddresses_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getAddresses", {
    enumerable: true,
    get: function() {
        return getAddresses_js_1.getAddresses;
    }
});
var getPermissions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getPermissions", {
    enumerable: true,
    get: function() {
        return getPermissions_js_1.getPermissions;
    }
});
var getCapabilities_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCapabilities.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getCapabilities", {
    enumerable: true,
    get: function() {
        return getCapabilities_js_1.getCapabilities;
    }
});
var sendCalls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sendCalls", {
    enumerable: true,
    get: function() {
        return sendCalls_js_1.sendCalls;
    }
});
var getCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getCallsStatus", {
    enumerable: true,
    get: function() {
        return getCallsStatus_js_1.getCallsStatus;
    }
});
var showCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "showCallsStatus", {
    enumerable: true,
    get: function() {
        return showCallsStatus_js_1.showCallsStatus;
    }
});
var waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "waitForCallsStatus", {
    enumerable: true,
    get: function() {
        return waitForCallsStatus_js_1.waitForCallsStatus;
    }
});
var getProof_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getProof.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getProof", {
    enumerable: true,
    get: function() {
        return getProof_js_1.getProof;
    }
});
var waitForTransactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "waitForTransactionReceipt", {
    enumerable: true,
    get: function() {
        return waitForTransactionReceipt_js_1.waitForTransactionReceipt;
    }
});
var requestAddresses_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "requestAddresses", {
    enumerable: true,
    get: function() {
        return requestAddresses_js_1.requestAddresses;
    }
});
var requestPermissions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "requestPermissions", {
    enumerable: true,
    get: function() {
        return requestPermissions_js_1.requestPermissions;
    }
});
var dropTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "dropTransaction", {
    enumerable: true,
    get: function() {
        return dropTransaction_js_1.dropTransaction;
    }
});
var getAutomine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getAutomine.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getAutomine", {
    enumerable: true,
    get: function() {
        return getAutomine_js_1.getAutomine;
    }
});
var getTxpoolContent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTxpoolContent", {
    enumerable: true,
    get: function() {
        return getTxpoolContent_js_1.getTxpoolContent;
    }
});
var getTxpoolStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTxpoolStatus", {
    enumerable: true,
    get: function() {
        return getTxpoolStatus_js_1.getTxpoolStatus;
    }
});
var inspectTxpool_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "inspectTxpool", {
    enumerable: true,
    get: function() {
        return inspectTxpool_js_1.inspectTxpool;
    }
});
var removeBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "removeBlockTimestampInterval", {
    enumerable: true,
    get: function() {
        return removeBlockTimestampInterval_js_1.removeBlockTimestampInterval;
    }
});
var reset_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/reset.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "reset", {
    enumerable: true,
    get: function() {
        return reset_js_1.reset;
    }
});
var revert_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/revert.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "revert", {
    enumerable: true,
    get: function() {
        return revert_js_1.revert;
    }
});
var prepareAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "prepareAuthorization", {
    enumerable: true,
    get: function() {
        return prepareAuthorization_js_1.prepareAuthorization;
    }
});
var prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "prepareTransactionRequest", {
    enumerable: true,
    get: function() {
        return prepareTransactionRequest_js_1.prepareTransactionRequest;
    }
});
Object.defineProperty(exports, "defaultPrepareTransactionRequestParameters", {
    enumerable: true,
    get: function() {
        return prepareTransactionRequest_js_1.defaultParameters;
    }
});
var sendTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sendTransaction", {
    enumerable: true,
    get: function() {
        return sendTransaction_js_1.sendTransaction;
    }
});
var signAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signAuthorization.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signAuthorization", {
    enumerable: true,
    get: function() {
        return signAuthorization_js_1.signAuthorization;
    }
});
var signTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signTransaction", {
    enumerable: true,
    get: function() {
        return signTransaction_js_1.signTransaction;
    }
});
var sendRawTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sendRawTransaction", {
    enumerable: true,
    get: function() {
        return sendRawTransaction_js_1.sendRawTransaction;
    }
});
var sendUnsignedTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sendUnsignedTransaction", {
    enumerable: true,
    get: function() {
        return sendUnsignedTransaction_js_1.sendUnsignedTransaction;
    }
});
var setBalance_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBalance.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setBalance", {
    enumerable: true,
    get: function() {
        return setBalance_js_1.setBalance;
    }
});
var setAutomine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setAutomine.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setAutomine", {
    enumerable: true,
    get: function() {
        return setAutomine_js_1.setAutomine;
    }
});
var setBlockGasLimit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setBlockGasLimit", {
    enumerable: true,
    get: function() {
        return setBlockGasLimit_js_1.setBlockGasLimit;
    }
});
var setBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setBlockTimestampInterval", {
    enumerable: true,
    get: function() {
        return setBlockTimestampInterval_js_1.setBlockTimestampInterval;
    }
});
var setCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCode.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setCode", {
    enumerable: true,
    get: function() {
        return setCode_js_1.setCode;
    }
});
var setCoinbase_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setCoinbase", {
    enumerable: true,
    get: function() {
        return setCoinbase_js_1.setCoinbase;
    }
});
var setIntervalMining_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setIntervalMining", {
    enumerable: true,
    get: function() {
        return setIntervalMining_js_1.setIntervalMining;
    }
});
var setLoggingEnabled_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setLoggingEnabled", {
    enumerable: true,
    get: function() {
        return setLoggingEnabled_js_1.setLoggingEnabled;
    }
});
var setMinGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setMinGasPrice", {
    enumerable: true,
    get: function() {
        return setMinGasPrice_js_1.setMinGasPrice;
    }
});
var setNextBlockBaseFeePerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setNextBlockBaseFeePerGas", {
    enumerable: true,
    get: function() {
        return setNextBlockBaseFeePerGas_js_1.setNextBlockBaseFeePerGas;
    }
});
var setNextBlockTimestamp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setNextBlockTimestamp", {
    enumerable: true,
    get: function() {
        return setNextBlockTimestamp_js_1.setNextBlockTimestamp;
    }
});
var setNonce_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNonce.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setNonce", {
    enumerable: true,
    get: function() {
        return setNonce_js_1.setNonce;
    }
});
var setRpcUrl_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setRpcUrl", {
    enumerable: true,
    get: function() {
        return setRpcUrl_js_1.setRpcUrl;
    }
});
var setStorageAt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "setStorageAt", {
    enumerable: true,
    get: function() {
        return setStorageAt_js_1.setStorageAt;
    }
});
var snapshot_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/snapshot.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "snapshot", {
    enumerable: true,
    get: function() {
        return snapshot_js_1.snapshot;
    }
});
var signMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signMessage", {
    enumerable: true,
    get: function() {
        return signMessage_js_1.signMessage;
    }
});
var signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signTypedData", {
    enumerable: true,
    get: function() {
        return signTypedData_js_1.signTypedData;
    }
});
var simulateContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "simulateContract", {
    enumerable: true,
    get: function() {
        return simulateContract_js_1.simulateContract;
    }
});
var stopImpersonatingAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "stopImpersonatingAccount", {
    enumerable: true,
    get: function() {
        return stopImpersonatingAccount_js_1.stopImpersonatingAccount;
    }
});
var switchChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "switchChain", {
    enumerable: true,
    get: function() {
        return switchChain_js_1.switchChain;
    }
});
var uninstallFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "uninstallFilter", {
    enumerable: true,
    get: function() {
        return uninstallFilter_js_1.uninstallFilter;
    }
});
var verifyHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyHash", {
    enumerable: true,
    get: function() {
        return verifyHash_js_1.verifyHash;
    }
});
var verifyMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var watchAsset_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchAsset", {
    enumerable: true,
    get: function() {
        return watchAsset_js_1.watchAsset;
    }
});
var watchContractEvent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "watchContractEvent", {
    enumerable: true,
    get: function() {
        return watchContractEvent_js_1.watchContractEvent;
    }
});
var writeContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "writeContract", {
    enumerable: true,
    get: function() {
        return writeContract_js_1.writeContract;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=0aa7d_viem__cjs_actions_377f8721._.js.map