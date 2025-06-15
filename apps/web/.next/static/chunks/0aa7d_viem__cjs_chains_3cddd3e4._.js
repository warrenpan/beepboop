(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abey.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.abey = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.abey = (0, defineChain_js_1.defineChain)({
    id: 179,
    name: 'ABEY Mainnet',
    nativeCurrency: {
        name: 'ABEY',
        symbol: 'ABEY',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.abeychain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Abey Scan',
            url: 'https://abeyscan.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=abey.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abstract.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.abstract = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.abstract = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2_741,
    name: 'Abstract',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.mainnet.abs.xyz'
            ],
            webSocket: [
                'wss://api.mainnet.abs.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://abscan.org'
        },
        native: {
            name: 'Abstract Explorer',
            url: 'https://explorer.mainnet.abs.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0xAa4De41dba0Ca5dCBb288b7cC6b708F3aaC759E7',
            blockCreated: 5288
        },
        universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 5263
        }
    }
}); //# sourceMappingURL=abstract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abstractTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.abstractTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.abstractTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 11_124,
    name: 'Abstract Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.testnet.abs.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.abscan.org'
        },
        native: {
            name: 'Abstract Explorer',
            url: 'https://explorer.testnet.abs.xyz'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
            blockCreated: 358349
        },
        universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 431682
        }
    }
}); //# sourceMappingURL=abstractTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/acala.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.acala = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.acala = (0, defineChain_js_1.defineChain)({
    id: 787,
    name: 'Acala',
    network: 'acala',
    nativeCurrency: {
        name: 'Acala',
        symbol: 'ACA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc-acala.aca-api.network'
            ],
            webSocket: [
                'wss://eth-rpc-acala.aca-api.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Acala Blockscout',
            url: 'https://blockscout.acala.network',
            apiUrl: 'https://blockscout.acala.network/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=acala.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/acria.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.acria = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.acria = (0, defineChain_js_1.defineChain)({
    id: 47,
    name: 'Acria IntelliChain',
    nativeCurrency: {
        decimals: 18,
        name: 'ACRIA',
        symbol: 'ACRIA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://aic.acria.ai'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Acria Explorer',
            url: 'https://explorer.acria.ai'
        }
    },
    testnet: false
}); //# sourceMappingURL=acria.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/adf.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adf = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.adf = (0, defineChain_js_1.defineChain)({
    id: 1215,
    name: 'ADF Chain',
    nativeCurrency: {
        name: 'ADDFILL',
        symbol: 'ADF',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.adftechnology.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ADF Mainnet Explorer',
            url: 'https://explorer.adftechnology.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=adf.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/aioz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aioz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.aioz = (0, defineChain_js_1.defineChain)({
    id: 168,
    name: 'AIOZ Network',
    nativeCurrency: {
        decimals: 18,
        name: 'AIOZ',
        symbol: 'AIOZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-dataseed.aioz.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'AIOZ Explorer',
            url: 'https://explorer.aioz.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=aioz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alephZero.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alephZero = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.alephZero = (0, defineChain_js_1.defineChain)({
    id: 41_455,
    name: 'Aleph Zero',
    nativeCurrency: {
        name: 'Aleph Zero',
        symbol: 'AZERO',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.alephzero.raas.gelato.cloud'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Aleph Zero EVM Explorer',
            url: 'https://evm-explorer.alephzero.org',
            apiUrl: 'https://evm-explorer.alephzero.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4603377
        }
    }
}); //# sourceMappingURL=alephZero.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alephZeroTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alephZeroTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.alephZeroTestnet = (0, defineChain_js_1.defineChain)({
    id: 2039,
    name: 'Aleph Zero Testnet',
    nativeCurrency: {
        name: 'TZERO',
        symbol: 'TZERO',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.alephzero-testnet.gelato.digital'
            ],
            webSocket: [
                'wss://ws.alephzero-testnet.gelato.digital'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Aleph Zero EVM Testnet explorer',
            url: 'https://evm-explorer-testnet.alephzero.org',
            apiUrl: 'https://evm-explorer-testnet.alephzero.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2861745
        }
    },
    testnet: true
}); //# sourceMappingURL=alephZeroTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alienX.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alienx = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.alienx = (0, defineChain_js_1.defineChain)({
    id: 10241024,
    name: 'AlienX Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.alienxchain.io/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'AlienX Explorer',
            url: 'https://explorer.alienxchain.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=alienX.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alienXHalTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alienxHalTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.alienxHalTestnet = (0, defineChain_js_1.defineChain)({
    id: 10241025,
    name: 'ALIENX Hal Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://hal-rpc.alienxchain.io/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'AlienX Explorer',
            url: 'https://hal-explorer.alienxchain.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=alienXHalTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ancient8.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ancient8 = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.ancient8 = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 888888888,
    name: 'Ancient8',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.ancient8.gg'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ancient8 explorer',
            url: 'https://scan.ancient8.gg',
            apiUrl: 'https://scan.ancient8.gg/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0xB09DC08428C8b4EFB4ff9C0827386CDF34277996'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68',
                blockCreated: 19070571
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xd5e3eDf5b68135D559D572E26bF863FBC1950033',
                blockCreated: 19070571
            }
        }
    },
    sourceId
}); //# sourceMappingURL=ancient8.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ancient8Sepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ancient8Sepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.ancient8Sepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 28122024,
    name: 'Ancient8 Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpcv2-testnet.ancient8.gg'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ancient8 Celestia Testnet explorer',
            url: 'https://scanv2-testnet.ancient8.gg',
            apiUrl: 'https://scanv2-testnet.ancient8.gg/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB'
            }
        },
        portal: {
            [sourceId]: {
                address: '0xfa1d9E26A6aCD7b22115D27572c1221B9803c960',
                blockCreated: 4972908
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xF6Bc0146d3c74D48306e79Ae134A260E418C9335',
                blockCreated: 4972908
            }
        }
    },
    sourceId
}); //# sourceMappingURL=ancient8Sepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/anvil.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anvil = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.anvil = (0, defineChain_js_1.defineChain)({
    id: 31_337,
    name: 'Anvil',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ],
            webSocket: [
                'ws://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=anvil.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/apeChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apeChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 42_161;
exports.apeChain = (0, defineChain_js_1.defineChain)({
    id: 33139,
    name: 'Ape Chain',
    nativeCurrency: {
        name: 'ApeCoin',
        symbol: 'APE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.apechain.com/http'
            ],
            webSocket: [
                'wss://rpc.apechain.com/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Apescan',
            url: 'https://apescan.io',
            apiUrl: 'https://api.apescan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 20889
        }
    },
    sourceId
}); //# sourceMappingURL=apeChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/apexTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apexTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.apexTestnet = (0, defineChain_js_1.defineChain)({
    id: 3993,
    name: 'APEX Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.apexlayer.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp-testnet.apexlayer.xyz',
            apiUrl: 'https://exp-testnet.apexlayer.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xf7642be33a6b18D16a995657adb5a68CD0438aE2',
            blockCreated: 283775
        }
    },
    testnet: true
}); //# sourceMappingURL=apexTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrum.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arbitrum = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arbitrum = (0, defineChain_js_1.defineChain)({
    id: 42_161,
    name: 'Arbitrum One',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://arb1.arbitrum.io/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707
        }
    }
}); //# sourceMappingURL=arbitrum.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumGoerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arbitrumGoerli = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arbitrumGoerli = (0, defineChain_js_1.defineChain)({
    id: 421_613,
    name: 'Arbitrum Goerli',
    nativeCurrency: {
        name: 'Arbitrum Goerli Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://goerli-rollup.arbitrum.io/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://goerli.arbiscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 88114
        }
    },
    testnet: true
}); //# sourceMappingURL=arbitrumGoerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumNova.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arbitrumNova = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arbitrumNova = (0, defineChain_js_1.defineChain)({
    id: 42_170,
    name: 'Arbitrum Nova',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://nova.arbitrum.io/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://nova.arbiscan.io',
            apiUrl: 'https://api-nova.arbiscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1746963
        }
    }
}); //# sourceMappingURL=arbitrumNova.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arbitrumSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arbitrumSepolia = (0, defineChain_js_1.defineChain)({
    id: 421_614,
    name: 'Arbitrum Sepolia',
    nativeCurrency: {
        name: 'Arbitrum Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia-rollup.arbitrum.io/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://sepolia.arbiscan.io',
            apiUrl: 'https://api-sepolia.arbiscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 81930
        }
    },
    testnet: true
}); //# sourceMappingURL=arbitrumSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arenaz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arenaz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arenaz = (0, defineChain_js_1.defineChain)({
    id: 7897,
    name: 'Arena-Z',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.arena-z.gg'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arena-Z Explorer',
            url: 'https://explorer.arena-z.gg',
            apiUrl: 'https://explorer.arena-z.gg'
        }
    }
}); //# sourceMappingURL=arenaz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/areonNetwork.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areonNetwork = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.areonNetwork = (0, defineChain_js_1.defineChain)({
    id: 463,
    name: 'Areon Network',
    nativeCurrency: {
        decimals: 18,
        name: 'AREA',
        symbol: 'AREA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.areon.network'
            ],
            webSocket: [
                'wss://mainnet-ws.areon.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Areonscan',
            url: 'https://areonscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 353286
        }
    },
    testnet: false
}); //# sourceMappingURL=areonNetwork.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/areonNetworkTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areonNetworkTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.areonNetworkTestnet = (0, defineChain_js_1.defineChain)({
    id: 462,
    name: 'Areon Network Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'TAREA',
        symbol: 'TAREA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.areon.network'
            ],
            webSocket: [
                'wss://testnet-ws.areon.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Areonscan',
            url: 'https://areonscan.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=areonNetworkTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/artelaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.artelaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.artelaTestnet = (0, defineChain_js_1.defineChain)({
    id: 11822,
    name: 'Artela Testnet',
    nativeCurrency: {
        name: 'ART',
        symbol: 'ART',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://betanet-rpc1.artela.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Artela',
            url: 'https://betanet-scan.artela.network',
            apiUrl: 'https://betanet-scan.artela.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xd07c8635f76e8745Ee7092fbb6e8fbc5FeF09DD7',
            blockCreated: 7001871
        }
    },
    testnet: true
}); //# sourceMappingURL=artelaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arthera.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arthera = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.arthera = (0, defineChain_js_1.defineChain)({
    id: 10242,
    name: 'Arthera',
    nativeCurrency: {
        name: 'Arthera',
        symbol: 'AA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.arthera.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arthera EVM Explorer',
            url: 'https://explorer.arthera.net',
            apiUrl: 'https://explorer.arthera.net/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4502791
        }
    }
}); //# sourceMappingURL=arthera.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/artheraTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.artheraTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.artheraTestnet = (0, defineChain_js_1.defineChain)({
    id: 10243,
    name: 'Arthera Testnet',
    nativeCurrency: {
        name: 'Arthera',
        symbol: 'AA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-test.arthera.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Arthera EVM Explorer',
            url: 'https://explorer-test.arthera.net',
            apiUrl: 'https://explorer-test.arthera.net/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 22051
        }
    }
}); //# sourceMappingURL=artheraTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/assetChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assetChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.assetChain = (0, defineChain_js_1.defineChain)({
    id: 42_420,
    name: 'AssetChain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Real World Asset',
        symbol: 'RWA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.assetchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Asset Chain Explorer',
            url: 'https://scan.assetchain.org',
            apiUrl: 'https://scan.assetchain.org/api'
        }
    },
    testnet: false,
    contracts: {}
}); //# sourceMappingURL=assetChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/assetChainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assetChainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.assetChainTestnet = (0, defineChain_js_1.defineChain)({
    id: 42_421,
    name: 'AssetChain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Real World Asset',
        symbol: 'RWA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://enugu-rpc.assetchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Asset Chain Testnet Explorer',
            url: 'https://scan-testnet.assetchain.org',
            apiUrl: 'https://scan-testnet.assetchain.org/api'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0x989F832D35988cb5e3eB001Fa2Fe789469EC31Ea',
            blockCreated: 17177
        }
    }
}); //# sourceMappingURL=assetChainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astar.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.astar = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.astar = (0, defineChain_js_1.defineChain)({
    id: 592,
    name: 'Astar',
    network: 'astar-mainnet',
    nativeCurrency: {
        name: 'Astar',
        symbol: 'ASTR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://astar.api.onfinality.io/public'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Astar Subscan',
            url: 'https://astar.subscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 761794
        }
    },
    testnet: false
}); //# sourceMappingURL=astar.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astarZkEVM.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.astarZkEVM = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.astarZkEVM = (0, defineChain_js_1.defineChain)({
    id: 3_776,
    name: 'Astar zkEVM',
    network: 'AstarZkEVM',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-zkevm.astar.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Astar zkEVM Explorer',
            url: 'https://astar-zkevm.explorer.startale.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 93528
        }
    },
    testnet: false
}); //# sourceMappingURL=astarZkEVM.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astarZkyoto.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.astarZkyoto = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.astarZkyoto = (0, defineChain_js_1.defineChain)({
    id: 6_038_361,
    name: 'Astar zkEVM Testnet zKyoto',
    network: 'zKyoto',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.startale.com/zkyoto'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'zKyoto Explorer',
            url: 'https://zkyoto.explorer.startale.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 196153
        }
    },
    testnet: true
}); //# sourceMappingURL=astarZkyoto.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/atletaOlympia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.atletaOlympia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.atletaOlympia = (0, defineChain_js_1.defineChain)({
    id: 2340,
    name: 'Atleta Olympia',
    nativeCurrency: {
        decimals: 18,
        name: 'Atla',
        symbol: 'ATLA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.atleta.network:9944',
                'https://testnet-rpc.atleta.network'
            ],
            ws: [
                'wss://testnet-rpc.atleta.network:9944'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Atleta Olympia Explorer',
            url: 'https://blockscout.atleta.network',
            apiUrl: 'https://blockscout.atleta.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x1472ec6392180fb84F345d2455bCC75B26577115',
            blockCreated: 1076473
        }
    },
    testnet: true
}); //# sourceMappingURL=atletaOlympia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/aurora.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aurora = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.aurora = (0, defineChain_js_1.defineChain)({
    id: 1313161554,
    name: 'Aurora',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.aurora.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Aurorascan',
            url: 'https://aurorascan.dev',
            apiUrl: 'https://aurorascan.dev/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 62907816
        }
    }
}); //# sourceMappingURL=aurora.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/auroraTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auroraTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.auroraTestnet = (0, defineChain_js_1.defineChain)({
    id: 1313161555,
    name: 'Aurora Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.aurora.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Aurorascan',
            url: 'https://testnet.aurorascan.dev',
            apiUrl: 'https://testnet.aurorascan.dev/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=auroraTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/auroria.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auroria = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.auroria = (0, defineChain_js_1.defineChain)({
    id: 205205,
    name: 'Auroria Testnet',
    network: 'auroria',
    nativeCurrency: {
        name: 'Auroria Stratis',
        symbol: 'tSTRAX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://auroria.rpc.stratisevm.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Auroria Testnet Explorer',
            url: 'https://auroria.explorer.stratisevm.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=auroria.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/avalanche.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.avalanche = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.avalanche = (0, defineChain_js_1.defineChain)({
    id: 43_114,
    name: 'Avalanche',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche',
        symbol: 'AVAX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.avax.network/ext/bc/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SnowTrace',
            url: 'https://snowtrace.io',
            apiUrl: 'https://api.snowtrace.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11907934
        }
    }
}); //# sourceMappingURL=avalanche.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/avalancheFuji.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.avalancheFuji = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.avalancheFuji = (0, defineChain_js_1.defineChain)({
    id: 43_113,
    name: 'Avalanche Fuji',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche Fuji',
        symbol: 'AVAX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.avax-test.network/ext/bc/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SnowTrace',
            url: 'https://testnet.snowtrace.io',
            apiUrl: 'https://api-testnet.snowtrace.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7096959
        }
    },
    testnet: true
}); //# sourceMappingURL=avalancheFuji.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/b3.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b3 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 8453;
exports.b3 = (0, defineChain_js_1.defineChain)({
    id: 8333,
    name: 'B3',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.b3.fun/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.b3.fun'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        }
    },
    sourceId
}); //# sourceMappingURL=b3.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/b3Sepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b3Sepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 168_587_773;
exports.b3Sepolia = (0, defineChain_js_1.defineChain)({
    id: 1993,
    name: 'B3 Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.b3.fun/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia.explorer.b3.fun'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=b3Sepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bahamut.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bahamut = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bahamut = (0, defineChain_js_1.defineChain)({
    id: 5165,
    network: 'bahamut',
    name: 'Bahamut',
    nativeCurrency: {
        name: 'Fasttoken',
        symbol: 'FTN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc1.bahamut.io',
                'https://bahamut-rpc.publicnode.com',
                'https://rpc2.bahamut.io'
            ],
            webSocket: [
                'wss://ws1.sahara.bahamutchain.com',
                'wss://bahamut-rpc.publicnode.com',
                'wss://ws2.sahara.bahamutchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://www.ftnscan.com',
            apiUrl: 'https://www.ftnscan.com/api'
        }
    }
}); //# sourceMappingURL=bahamut.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/base.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.base = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 8453,
    name: 'Base',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.base.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://basescan.org',
            apiUrl: 'https://api.basescan.org/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x56315b90c40730925ec5485cf004d835058518A0'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 5022
        },
        portal: {
            [sourceId]: {
                address: '0x49048044D57e1C92A77f79988d21Fa8fAF74E97e',
                blockCreated: 17482143
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x3154Cf16ccdb4C6d922629664174b904d80F2C35',
                blockCreated: 17482143
            }
        }
    },
    sourceId
}); //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/basecampTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basecampTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.basecampTestnet = (0, defineChain_js_1.defineChain)({
    id: 123420001114,
    name: 'Basecamp Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Camp',
        symbol: 'CAMP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.basecamp.t.raas.gelato.cloud'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'basecamp',
            url: 'https://basecamp.cloud.blockscout.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=basecampTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/baseGoerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseGoerli = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 5;
exports.baseGoerli = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 84531,
    name: 'Base Goerli',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://goerli.base.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://goerli.basescan.org',
            apiUrl: 'https://goerli.basescan.org/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x2A35891ff30313CcFa6CE88dcf3858bb075A2298'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1376988
        },
        portal: {
            [sourceId]: {
                address: '0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=baseGoerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/baseSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.baseSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 84532,
    network: 'base-sepolia',
    name: 'Base Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.base.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://sepolia.basescan.org',
            apiUrl: 'https://api-sepolia.basescan.org/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x49f53e41452c74589e85ca1677426ba426459e85',
                blockCreated: 4446677
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xfd0Bf71F60660E2f608ed56e1659C450eB113120',
                blockCreated: 4446677
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1059647
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=baseSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/beam.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.beam = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.beam = (0, defineChain_js_1.defineChain)({
    id: 4337,
    name: 'Beam',
    network: 'beam',
    nativeCurrency: {
        decimals: 18,
        name: 'Beam',
        symbol: 'BEAM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://build.onbeam.com/rpc'
            ],
            webSocket: [
                'wss://build.onbeam.com/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Beam Explorer',
            url: 'https://subnets.avax.network/beam'
        }
    },
    contracts: {
        multicall3: {
            address: '0x4956f15efdc3dc16645e90cc356eafa65ffc65ec',
            blockCreated: 1
        }
    }
}); //# sourceMappingURL=beam.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/beamTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.beamTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.beamTestnet = (0, defineChain_js_1.defineChain)({
    id: 13337,
    name: 'Beam Testnet',
    network: 'beam',
    nativeCurrency: {
        decimals: 18,
        name: 'Beam',
        symbol: 'BEAM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://build.onbeam.com/rpc/testnet'
            ],
            webSocket: [
                'wss://build.onbeam.com/ws/testnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Beam Explorer',
            url: 'https://subnets-test.avax.network/beam'
        }
    },
    contracts: {
        multicall3: {
            address: '0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e',
            blockCreated: 3
        }
    },
    testnet: true
}); //# sourceMappingURL=beamTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bearNetworkChainMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bearNetworkChainMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bearNetworkChainMainnet = (0, defineChain_js_1.defineChain)({
    id: 641230,
    name: 'Bear Network Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BearNetworkChain',
        symbol: 'BRNKC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://brnkc-mainnet.bearnetwork.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BrnkScan',
            url: 'https://brnkscan.bearnetwork.net',
            apiUrl: 'https://brnkscan.bearnetwork.net/api'
        }
    }
}); //# sourceMappingURL=bearNetworkChainMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bearNetworkChainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bearNetworkChainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bearNetworkChainTestnet = (0, defineChain_js_1.defineChain)({
    id: 751230,
    name: 'Bear Network Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBRNKC',
        symbol: 'tBRNKC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://brnkc-test.bearnetwork.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BrnkTestScan',
            url: 'https://brnktest-scan.bearnetwork.net',
            apiUrl: 'https://brnktest-scan.bearnetwork.net/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=bearNetworkChainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.berachain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.berachain = (0, defineChain_js_1.defineChain)({
    id: 80094,
    name: 'Berachain',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        },
        ensRegistry: {
            address: '0x5b22280886a2f5e09a49bea7e320eab0e5320e28',
            blockCreated: 877007
        },
        ensUniversalResolver: {
            address: '0xddfb18888a9466688235887dec2a10c4f5effee9',
            blockCreated: 877008
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berascan',
            url: 'https://berascan.com'
        }
    },
    ensTlds: [
        '.bera'
    ],
    testnet: false
}); //# sourceMappingURL=berachain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainBepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.berachainBepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.berachainBepolia = (0, defineChain_js_1.defineChain)({
    id: 80069,
    name: 'Berachain Bepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://bepolia.rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berascan',
            url: 'https://bepolia.beratrail.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=berachainBepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.berachainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.berachainTestnet = (0, defineChain_js_1.defineChain)({
    id: 80085,
    name: 'Berachain Artio',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://artio.rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berachain',
            url: 'https://artio.beratrail.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 866924
        }
    },
    testnet: true
}); //# sourceMappingURL=berachainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainTestnetbArtio.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.berachainTestnetbArtio = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.berachainTestnetbArtio = (0, defineChain_js_1.defineChain)({
    id: 80084,
    name: 'Berachain bArtio',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 109269
        },
        ensRegistry: {
            address: '0xB0eef18971290b333450586D33dcA6cE122651D2',
            blockCreated: 7736794
        },
        ensUniversalResolver: {
            address: '0x41692Ef1EA0C79E6b73077E4A67572D2BDbD7057',
            blockCreated: 7736795
        }
    },
    ensTlds: [
        '.bera'
    ],
    rpcUrls: {
        default: {
            http: [
                'https://bartio.rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berachain bArtio Beratrail',
            url: 'https://bartio.beratrail.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=berachainTestnetbArtio.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bevmMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bevmMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bevmMainnet = (0, defineChain_js_1.defineChain)({
    id: 11501,
    name: 'BEVM Mainnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet-1.bevm.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bevmscan',
            url: 'https://scan-mainnet.bevm.io',
            apiUrl: 'https://scan-mainnet-api.bevm.io/api'
        }
    }
}); //# sourceMappingURL=bevmMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bifrost.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bifrost = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bifrost = (0, defineChain_js_1.defineChain)({
    id: 3068,
    name: 'Bifrost Mainnet',
    nativeCurrency: {
        name: 'BFC',
        symbol: 'BFC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-01.mainnet.bifrostnetwork.com/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bifrost Blockscout',
            url: 'https://explorer.mainnet.bifrostnetwork.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=bifrost.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitgert.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitgert = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitgert = (0, defineChain_js_1.defineChain)({
    id: 32520,
    name: 'Bitgert Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Brise',
        symbol: 'Brise'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-bitgert.icecreamswap.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bitgert Scan',
            url: 'https://brisescan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2118034
        }
    },
    testnet: false
}); //# sourceMappingURL=bitgert.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitkub.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitkub = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitkub = (0, defineChain_js_1.defineChain)({
    id: 96,
    name: 'KUB Mainnet',
    nativeCurrency: {
        name: 'KUB Coin',
        symbol: 'KUB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bitkubchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KUB Chain Mainnet Explorer',
            url: 'https://www.bkcscan.com',
            apiUrl: 'https://www.bkcscan.com/api'
        }
    }
}); //# sourceMappingURL=bitkub.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitkubTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitkubTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitkubTestnet = (0, defineChain_js_1.defineChain)({
    id: 25925,
    name: 'Bitkub Testnet',
    network: 'Bitkub Testnet',
    nativeCurrency: {
        name: 'Bitkub Test',
        symbol: 'tKUB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.bitkubchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bitkub Chain Testnet Explorer',
            url: 'https://testnet.bkcscan.com',
            apiUrl: 'https://testnet.bkcscan.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=bitkubTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitlayer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitlayer = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitlayer = (0, defineChain_js_1.defineChain)({
    id: 200901,
    name: 'Bitlayer Mainnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bitlayer.org'
            ],
            webSocket: [
                'wss://ws.bitlayer.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'bitlayer mainnet scan',
            url: 'https://www.btrscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x5B256fE9e993902eCe49D138a5b1162cBb529474',
            blockCreated: 2421963
        }
    }
}); //# sourceMappingURL=bitlayer.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitlayerTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitlayerTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitlayerTestnet = (0, defineChain_js_1.defineChain)({
    id: 200810,
    name: 'Bitlayer Testnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.bitlayer.org'
            ],
            webSocket: [
                'wss://testnet-ws.bitlayer.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'bitlayer testnet scan',
            url: 'https://testnet.btrscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x5B256fE9e993902eCe49D138a5b1162cBb529474',
            blockCreated: 4135671
        }
    },
    testnet: true
}); //# sourceMappingURL=bitlayerTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitrock.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitrock = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitrock = (0, defineChain_js_1.defineChain)({
    id: 7171,
    name: 'Bitrock Mainnet',
    nativeCurrency: {
        name: 'BROCK',
        symbol: 'BROCK',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://brockrpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bitrock Explorer',
            url: 'https://explorer.bit-rock.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=bitrock.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitTorrent.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitTorrent = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitTorrent = (0, defineChain_js_1.defineChain)({
    id: 199,
    name: 'BitTorrent',
    network: 'bittorrent-chain-mainnet',
    nativeCurrency: {
        name: 'BitTorrent',
        symbol: 'BTT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bittorrentchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://bttcscan.com',
            apiUrl: 'https://api.bttcscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 31078552
        }
    }
}); //# sourceMappingURL=bitTorrent.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitTorrentTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitTorrentTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bitTorrentTestnet = (0, defineChain_js_1.defineChain)({
    id: 1028,
    name: 'BitTorrent Chain Testnet',
    network: 'bittorrent-chain-testnet',
    nativeCurrency: {
        name: 'BitTorrent',
        symbol: 'BTT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testrpc.bittorrentchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://testnet.bttcscan.com',
            apiUrl: 'https://testnet.bttcscan.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=bitTorrentTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/birdlayer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.birdlayer = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.birdlayer = (0, defineChain_js_1.defineChain)({
    id: 53456,
    name: 'BirdLayer',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.birdlayer.xyz',
                'https://rpc1.birdlayer.xyz'
            ],
            webSocket: [
                'wss://rpc.birdlayer.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BirdLayer Explorer',
            url: 'https://scan.birdlayer.xyz'
        }
    }
}); //# sourceMappingURL=birdlayer.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/blast.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blast = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.blast = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 81457,
    name: 'Blast',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.blast.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blastscan',
            url: 'https://blastscan.io',
            apiUrl: 'https://api.blastscan.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 212929
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x826D1B0D4111Ad9146Eb8941D7Ca2B6a44215c76',
                blockCreated: 19300358
            }
        },
        portal: {
            [sourceId]: {
                address: '0x0Ec68c5B10F21EFFb74f2A5C61DFe6b08C0Db6Cb',
                blockCreated: 19300357
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x697402166Fbf2F22E970df8a6486Ef171dbfc524',
                blockCreated: 19300360
            }
        }
    },
    sourceId
}); //# sourceMappingURL=blast.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/blastSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blastSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.blastSepolia = (0, defineChain_js_1.defineChain)({
    id: 168_587_773,
    name: 'Blast Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.blast.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blastscan',
            url: 'https://sepolia.blastscan.io',
            apiUrl: 'https://api-sepolia.blastscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 756690
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=blastSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bob.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bob = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.bob = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 60808,
    name: 'BOB',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gobob.xyz'
            ],
            webSocket: [
                'wss://rpc.gobob.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BOB Explorer',
            url: 'https://explorer.gobob.xyz'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 23131
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xdDa53E23f8a32640b04D7256e651C1db98dB11C1',
                blockCreated: 4462615
            }
        },
        portal: {
            [sourceId]: {
                address: '0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E',
                blockCreated: 4462615
            }
        }
    },
    sourceId
}); //# sourceMappingURL=bob.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/boba.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.boba = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.boba = (0, defineChain_js_1.defineChain)({
    id: 288,
    name: 'Boba Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.boba.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BOBAScan',
            url: 'https://bobascan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 446859
        }
    }
}); //# sourceMappingURL=boba.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bobaSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bobaSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bobaSepolia = (0, defineChain_js_1.defineChain)({
    id: 28882,
    name: 'Boba Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.boba.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BOBAScan',
            url: 'https://testnet.bobascan.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=bobaSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bobSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bobSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.bobSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 808813,
    name: 'BOB Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://bob-sepolia.rpc.gobob.xyz'
            ],
            webSocket: [
                'wss://bob-sepolia.rpc.gobob.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BOB Sepolia Explorer',
            url: 'https://bob-sepolia.explorer.gobob.xyz'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 35677
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x14D0069452b4AE2b250B395b8adAb771E4267d2f',
                blockCreated: 4462615
            }
        },
        portal: {
            [sourceId]: {
                address: '0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4',
                blockCreated: 4462615
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=bobSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/boolBetaMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.boolBetaMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.boolBetaMainnet = (0, defineChain_js_1.defineChain)({
    id: 11100,
    name: 'Bool Beta Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BOL',
        symbol: 'BOL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://beta-rpc-node-http.bool.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BoolScan',
            url: 'https://beta-mainnet.boolscan.com/'
        }
    },
    testnet: false
}); //# sourceMappingURL=boolBetaMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/botanixTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.botanixTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.botanixTestnet = (0, defineChain_js_1.defineChain)({
    id: 3636,
    name: 'Botanix Testnet',
    nativeCurrency: {
        name: 'Botanix',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.botanixlabs.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Botanix Testnet Explorer',
            url: 'https://testnet.botanixscan.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=botanixTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bounceBit.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bounceBit = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bounceBit = (0, defineChain_js_1.defineChain)({
    id: 6001,
    name: 'BounceBit Mainnet',
    nativeCurrency: {
        name: 'BounceBit',
        symbol: 'BB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://fullnode-mainnet.bouncebitapi.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BB Scan',
            url: 'https://bbscan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=bounceBit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bounceBitTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bounceBitTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bounceBitTestnet = (0, defineChain_js_1.defineChain)({
    id: 6000,
    name: 'BounceBit Testnet',
    nativeCurrency: {
        name: 'BounceBit',
        symbol: 'BB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://fullnode-testnet.bouncebitapi.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BB Scan',
            url: 'https://testnet.bbscan.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=bounceBitTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bronos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bronos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bronos = (0, defineChain_js_1.defineChain)({
    id: 1039,
    name: 'Bronos',
    nativeCurrency: {
        decimals: 18,
        name: 'BRO',
        symbol: 'BRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.bronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BronoScan',
            url: 'https://broscan.bronos.org'
        }
    }
}); //# sourceMappingURL=bronos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bronosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bronosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bronosTestnet = (0, defineChain_js_1.defineChain)({
    id: 1038,
    name: 'Bronos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Bronos Coin',
        symbol: 'tBRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-testnet.bronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BronoScan',
            url: 'https://tbroscan.bronos.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=bronosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bsc = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bsc = (0, defineChain_js_1.defineChain)({
    id: 56,
    name: 'BNB Smart Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://56.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452
        }
    }
}); //# sourceMappingURL=bsc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bscGreenfield.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bscGreenfield = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bscGreenfield = (0, defineChain_js_1.defineChain)({
    id: 1017,
    name: 'BNB Greenfield Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://greenfield-chain.bnbchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BNB Greenfield Mainnet Scan',
            url: 'https://greenfieldscan.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=bscGreenfield.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bscTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bscTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bscTestnet = (0, defineChain_js_1.defineChain)({
    id: 97,
    name: 'BNB Smart Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://data-seed-prebsc-1-s1.bnbchain.org:8545'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483
        }
    },
    testnet: true
}); //# sourceMappingURL=bscTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsquared.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bsquared = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bsquared = (0, defineChain_js_1.defineChain)({
    id: 223,
    name: 'B2',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bsquared.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.bsquared.network'
        }
    }
}); //# sourceMappingURL=bsquared.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsquaredTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bsquaredTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bsquaredTestnet = (0, defineChain_js_1.defineChain)({
    id: 1123,
    name: 'B2 Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.bsquared.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://testnet-explorer.bsquared.network'
        }
    },
    testnet: true
}); //# sourceMappingURL=bsquaredTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/btr.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.btr = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.btr = (0, defineChain_js_1.defineChain)({
    id: 200901,
    name: 'Bitlayer',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bitlayer.org',
                'https://rpc.bitlayer-rpc.com'
            ],
            webSocket: [
                'wss://ws.bitlayer.org',
                'wss://ws.bitlayer-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bitlayer(BTR) Scan',
            url: 'https://www.btrscan.com'
        }
    }
}); //# sourceMappingURL=btr.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/btrTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.btrTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.btrTestnet = (0, defineChain_js_1.defineChain)({
    id: 200810,
    name: 'Bitlayer Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.bitlayer.org'
            ],
            webSocket: [
                'wss://testnet-ws.bitlayer.org',
                'wss://testnet-ws.bitlayer-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Bitlayer(BTR) Scan',
            url: 'https://testnet.btrscan.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=btrTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bxn.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bxn = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bxn = (0, defineChain_js_1.defineChain)({
    id: 4999,
    name: 'BlackFort Exchange Network',
    nativeCurrency: {
        name: 'BlackFort Token',
        symbol: 'BXN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.blackfort.network/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.blackfort.network',
            apiUrl: 'https://explorer.blackfort.network/api'
        }
    }
}); //# sourceMappingURL=bxn.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bxnTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bxnTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.bxnTestnet = (0, defineChain_js_1.defineChain)({
    id: 4777,
    name: 'BlackFort Exchange Network Testnet',
    nativeCurrency: {
        name: 'BlackFort Testnet Token',
        symbol: 'TBXN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.blackfort.network/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer.blackfort.network',
            apiUrl: 'https://testnet-explorer.blackfort.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=bxnTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cannon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cannon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cannon = (0, defineChain_js_1.defineChain)({
    id: 13_370,
    name: 'Cannon',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=cannon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/canto.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canto = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.canto = (0, defineChain_js_1.defineChain)({
    id: 7_700,
    name: 'Canto',
    nativeCurrency: {
        decimals: 18,
        name: 'Canto',
        symbol: 'CANTO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://canto.gravitychain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Tuber.Build (Blockscout)',
            url: 'https://tuber.build'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2905789
        }
    }
}); //# sourceMappingURL=canto.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/celo.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.celo = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.celo = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 42_220,
    name: 'Celo',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'CELO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://forno.celo.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Celo Explorer',
            url: 'https://celoscan.io',
            apiUrl: 'https://api.celoscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 13112599
        }
    },
    testnet: false
}); //# sourceMappingURL=celo.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/celoAlfajores.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.celoAlfajores = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 17000;
exports.celoAlfajores = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 44_787,
    name: 'Alfajores',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'A-CELO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://alfajores-forno.celo-testnet.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Celo Alfajores Explorer',
            url: 'https://celo-alfajores.blockscout.com',
            apiUrl: 'https://celo-alfajores.blockscout.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 14569001
        },
        portal: {
            [sourceId]: {
                address: '0x82527353927d8D069b3B452904c942dA149BA381',
                blockCreated: 2411324
            }
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0xE28AAdcd9883746c0e5068F58f9ea06027b214cb',
                blockCreated: 2411324
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x4a2635e9e4f6e45817b1D402ac4904c1d1752438',
                blockCreated: 2411324
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xD1B0E0581973c9eB7f886967A606b9441A897037',
                blockCreated: 2411324
            }
        }
    },
    testnet: true
}); //# sourceMappingURL=celoAlfajores.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chang.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chang = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.chang = (0, defineChain_js_1.defineChain)({
    id: 5858,
    name: 'Chang Chain Foundation Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CTH',
        symbol: 'CTH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.cthscan.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Chang Chain explorer',
            url: 'https://cthscan.com'
        }
    }
}); //# sourceMappingURL=chang.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chiliz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chiliz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.chiliz = (0, defineChain_js_1.defineChain)({
    id: 88_888,
    name: 'Chiliz Chain',
    network: 'chiliz-chain',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.chiliz.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Chiliz Explorer',
            url: 'https://scan.chiliz.com',
            apiUrl: 'https://scan.chiliz.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 8080847
        }
    }
}); //# sourceMappingURL=chiliz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chips.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chips = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.chips = (0, defineChain_js_1.defineChain)({
    id: 2882,
    name: 'Chips Network',
    network: 'CHIPS',
    nativeCurrency: {
        decimals: 18,
        name: 'IOTA',
        symbol: 'IOTA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.chips.ooo/wasp/api/v1/chains/iota1pp3d3mnap3ufmgqnjsnw344sqmf5svjh26y2khnmc89sv6788y3r207a8fn/evm'
            ]
        }
    }
}); //# sourceMappingURL=chips.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/citreaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.citreaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.citreaTestnet = (0, defineChain_js_1.defineChain)({
    id: 5115,
    name: 'Citrea Testnet',
    nativeCurrency: {
        name: 'cBTC',
        symbol: 'cBTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.citrea.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Citrea Explorer',
            url: 'https://explorer.testnet.citrea.xyz',
            apiUrl: 'https://explorer.testnet.citrea.xyz/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=citreaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/classic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.classic = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.classic = (0, defineChain_js_1.defineChain)({
    id: 61,
    name: 'Ethereum Classic',
    nativeCurrency: {
        decimals: 18,
        name: 'ETC',
        symbol: 'ETC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://etc.rivet.link'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.com/etc/mainnet'
        }
    }
}); //# sourceMappingURL=classic.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coinbit.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coinbit = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.coinbit = (0, defineChain_js_1.defineChain)({
    id: 112,
    name: 'Coinbit Mainnet',
    nativeCurrency: {
        name: 'GIDR',
        symbol: 'GIDR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://coinbit-rpc-mainnet.chain.sbcrypto.app'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Coinbit Explorer',
            url: 'https://coinbit-explorer.chain.sbcrypto.app'
        }
    },
    testnet: false
}); //# sourceMappingURL=coinbit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coinex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coinex = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.coinex = (0, defineChain_js_1.defineChain)({
    id: 52,
    name: 'CoinEx Mainnet',
    nativeCurrency: {
        name: 'cet',
        symbol: 'cet',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.coinex.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'CoinEx Explorer',
            url: 'https://www.coinex.net'
        }
    },
    testnet: false
}); //# sourceMappingURL=coinex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/confluxESpace.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confluxESpace = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.confluxESpace = (0, defineChain_js_1.defineChain)({
    id: 1_030,
    name: 'Conflux eSpace',
    nativeCurrency: {
        name: 'Conflux',
        symbol: 'CFX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.confluxrpc.com'
            ],
            webSocket: [
                'wss://evm.confluxrpc.com/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ConfluxScan',
            url: 'https://evm.confluxscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xEFf0078910f638cd81996cc117bccD3eDf2B072F',
            blockCreated: 68602935
        }
    }
}); //# sourceMappingURL=confluxESpace.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/confluxESpaceTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confluxESpaceTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.confluxESpaceTestnet = (0, defineChain_js_1.defineChain)({
    id: 71,
    name: 'Conflux eSpace Testnet',
    network: 'cfx-espace-testnet',
    testnet: true,
    nativeCurrency: {
        name: 'Conflux',
        symbol: 'CFX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evmtestnet.confluxrpc.com'
            ],
            webSocket: [
                'wss://evmtestnet.confluxrpc.com/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ConfluxScan',
            url: 'https://evmtestnet.confluxscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xEFf0078910f638cd81996cc117bccD3eDf2B072F',
            blockCreated: 117499050
        }
    }
}); //# sourceMappingURL=confluxESpaceTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreDao.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coreDao = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.coreDao = (0, defineChain_js_1.defineChain)({
    id: 1116,
    name: 'Core Dao',
    nativeCurrency: {
        decimals: 18,
        name: 'Core',
        symbol: 'CORE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.coredao.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'CoreDao',
            url: 'https://scan.coredao.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 11_907_934
        }
    },
    testnet: false
}); //# sourceMappingURL=coreDao.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreTestnet1.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coreTestnet1 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.coreTestnet1 = (0, defineChain_js_1.defineChain)({
    id: 1115,
    name: 'Core Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tCore',
        symbol: 'TCORE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.test.btcs.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Core Testnet',
            url: 'https://scan.test.btcs.network',
            apiUrl: 'https://api.test.btcs.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xCcddF20A1932537123C2E48Bd8e00b108B8f7569',
            blockCreated: 29_350_509
        }
    },
    testnet: true
}); //# sourceMappingURL=coreTestnet1.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreTestnet2.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coreTestnet2 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.coreTestnet2 = (0, defineChain_js_1.defineChain)({
    id: 1114,
    name: 'Core Testnet2',
    nativeCurrency: {
        decimals: 18,
        name: 'tCore2',
        symbol: 'TCORE2'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.test2.btcs.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Core Testnet2',
            url: 'https://scan.test2.btcs.network',
            apiUrl: 'https://api.test2.btcs.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x3CB285ff3Cd5C7C7e570b1E7DE3De17A0f985e56',
            blockCreated: 3_838_600
        }
    },
    testnet: true
}); //# sourceMappingURL=coreTestnet2.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/corn.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.corn = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.corn = (0, defineChain_js_1.defineChain)({
    id: 21_000_000,
    name: 'Corn',
    nativeCurrency: {
        decimals: 18,
        name: 'Bitcorn',
        symbol: 'BTCN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://21000000.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Corn Explorer',
            url: 'https://cornscan.io',
            apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3228
        }
    },
    sourceId
}); //# sourceMappingURL=corn.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cornTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cornTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.cornTestnet = (0, defineChain_js_1.defineChain)({
    id: 21_000_001,
    name: 'Corn Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Bitcorn',
        symbol: 'BTCN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://21000001.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Corn Testnet Explorer',
            url: 'https://testnet.cornscan.io',
            apiUrl: 'https://api.routescan.io/v2/network/testnet/evm/21000001/etherscan/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4886
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=cornTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/crab.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crab = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.crab = (0, defineChain_js_1.defineChain)({
    id: 44,
    name: 'Crab Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Crab Network Native Token',
        symbol: 'CRAB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://crab-rpc.darwinia.network'
            ],
            webSocket: [
                'wss://crab-rpc.darwinia.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://crab-scan.darwinia.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3032593
        }
    }
}); //# sourceMappingURL=crab.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creatorTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creatorTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.creatorTestnet = (0, defineChain_js_1.defineChain)({
    id: 66665,
    name: 'Creator',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.creatorchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.creatorchain.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    },
    testnet: true
}); //# sourceMappingURL=creatorTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creditCoin3Mainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creditCoin3Mainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.creditCoin3Mainnet = (0, defineChain_js_1.defineChain)({
    id: 102030,
    name: 'Creditcoin3 Mainnet',
    nativeCurrency: {
        name: 'Creditcoin3 Mainnet',
        symbol: 'CTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet3.creditcoin.network'
            ],
            webSocket: [
                'wss://mainnet3.creditcoin.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://creditcoin.blockscout.com',
            apiUrl: 'https://creditcoin.blockscout.com/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=creditCoin3Mainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creditCoin3Testnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creditCoin3Testnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.creditCoin3Testnet = (0, defineChain_js_1.defineChain)({
    id: 102031,
    name: 'Creditcoin3 Testnet',
    nativeCurrency: {
        name: 'Creditcoin3 Testnet',
        symbol: 'TCTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.cc3-testnet.creditcoin.network'
            ],
            webSocket: [
                'wss://rpc.cc3-testnet.creditcoin.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://creditcoin-testnet.blockscout.com',
            apiUrl: 'https://creditcoin-testnet.blockscout.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=creditCoin3Testnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cronos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cronos = (0, defineChain_js_1.defineChain)({
    id: 25,
    name: 'Cronos Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Cronos',
        symbol: 'CRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.cronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Cronos Explorer',
            url: 'https://explorer.cronos.org',
            apiUrl: 'https://explorer-api.cronos.org/mainnet/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1963112
        }
    }
}); //# sourceMappingURL=cronos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cronosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cronosTestnet = (0, defineChain_js_1.defineChain)({
    id: 338,
    name: 'Cronos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CRO',
        symbol: 'tCRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-t3.cronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Cronos Explorer',
            url: 'https://cronos.org/explorer/testnet3'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 10191251
        }
    },
    testnet: true
}); //# sourceMappingURL=cronosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronoszkEVM.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cronoszkEVM = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cronoszkEVM = (0, defineChain_js_1.defineChain)({
    id: 388,
    name: 'Cronos zkEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Cronos zkEVM CRO',
        symbol: 'zkCRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.zkevm.cronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Cronos zkEVM (Mainnet) Chain Explorer',
            url: 'https://explorer.zkevm.cronos.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0x06f4487d7c4a5983d2660db965cc6d2565e4cfaa',
            blockCreated: 72
        }
    }
}); //# sourceMappingURL=cronoszkEVM.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronoszkEVMTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cronoszkEVMTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cronoszkEVMTestnet = (0, defineChain_js_1.defineChain)({
    id: 282,
    name: 'Cronos zkEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Cronos zkEVM Test Coin',
        symbol: 'zkTCRO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.zkevm.cronos.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Cronos zkEVM Testnet Explorer',
            url: 'https://explorer.zkevm.cronos.org/testnet'
        }
    },
    testnet: true
}); //# sourceMappingURL=cronoszkEVMTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/crossbell.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crossbell = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.crossbell = (0, defineChain_js_1.defineChain)({
    id: 3_737,
    name: 'Crossbell',
    nativeCurrency: {
        decimals: 18,
        name: 'CSB',
        symbol: 'CSB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.crossbell.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'CrossScan',
            url: 'https://scan.crossbell.io',
            apiUrl: 'https://scan.crossbell.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 38_246_031
        }
    }
}); //# sourceMappingURL=crossbell.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/curtis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.curtis = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.curtis = (0, defineChain_js_1.defineChain)({
    id: 33_111,
    name: 'Curtis',
    nativeCurrency: {
        name: 'ApeCoin',
        symbol: 'APE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.curtis.apechain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Curtis Explorer',
            url: 'https://explorer.curtis.apechain.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=curtis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cyber.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cyber = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cyber = (0, defineChain_js_1.defineChain)({
    id: 7_560,
    name: 'Cyber',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://cyber.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://cyberscan.co',
            apiUrl: 'https://cyberscan.co/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    }
}); //# sourceMappingURL=cyber.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cyberTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cyberTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.cyberTestnet = (0, defineChain_js_1.defineChain)({
    id: 111_557_560,
    name: 'Cyber Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://cyber-testnet.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet.cyberscan.co',
            apiUrl: 'https://testnet.cyberscan.co/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xffc391F0018269d4758AEA1a144772E8FB99545E',
            blockCreated: 304545
        }
    },
    testnet: true
}); //# sourceMappingURL=cyberTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dailyNetwork.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dailyNetwork = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dailyNetwork = (0, defineChain_js_1.defineChain)({
    id: 824,
    name: 'Daily Network Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Daily',
        symbol: 'DLY'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.dailycrypto.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Daily Mainnet Explorer',
            url: 'https://explorer.mainnet.dailycrypto.net'
        }
    },
    testnet: false
}); //# sourceMappingURL=dailyNetwork.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dailyNetworkTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dailyNetworkTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dailyNetworkTestnet = (0, defineChain_js_1.defineChain)({
    id: 825,
    name: 'Daily Network Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Daily',
        symbol: 'DLY'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.dailycrypto.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Daily Testnet Explorer',
            url: 'https://explorer.testnet.dailycrypto.net'
        }
    },
    testnet: true
}); //# sourceMappingURL=dailyNetworkTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/darwinia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.darwinia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.darwinia = (0, defineChain_js_1.defineChain)({
    id: 46,
    name: 'Darwinia Network',
    nativeCurrency: {
        decimals: 18,
        name: 'RING',
        symbol: 'RING'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.darwinia.network'
            ],
            webSocket: [
                'wss://rpc.darwinia.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.darwinia.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 69420
        }
    }
}); //# sourceMappingURL=darwinia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dbkchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbkchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dbkchain = (0, defineChain_js_1.defineChain)({
    id: 20_240_603,
    name: 'DBK chain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.dbkchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DBK Chain Explorer',
            url: 'https://scan.dbkchain.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=dbkchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dchain = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dchain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2716446429837000,
    name: 'Dchain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dchain-2716446429837000-1.jsonrpc.sagarpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Dchain Explorer',
            url: 'https://dchain-2716446429837000-1.sagaexplorer.io',
            apiUrl: 'https://api-dchain-2716446429837000-1.sagaexplorer.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts
    }
}); //# sourceMappingURL=dchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dchainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dchainTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dchainTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2713017997578000,
    name: 'Dchain Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Dchain Explorer',
            url: 'https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io',
            apiUrl: 'https://api-dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts
    }
}); //# sourceMappingURL=dchainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/defichainEvm.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defichainEvm = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.defichainEvm = (0, defineChain_js_1.defineChain)({
    id: 1130,
    network: 'defichain-evm',
    name: 'DeFiChain EVM Mainnet',
    nativeCurrency: {
        name: 'DeFiChain',
        symbol: 'DFI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.mainnet.ocean.jellyfishsdk.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DeFiScan',
            url: 'https://meta.defiscan.live'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 137852
        }
    }
}); //# sourceMappingURL=defichainEvm.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/defichainEvmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defichainEvmTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.defichainEvmTestnet = (0, defineChain_js_1.defineChain)({
    id: 1131,
    network: 'defichain-evm-testnet',
    name: 'DeFiChain EVM Testnet',
    nativeCurrency: {
        name: 'DeFiChain',
        symbol: 'DFI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.testnet.ocean.jellyfishsdk.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DeFiScan',
            url: 'https://meta.defiscan.live/?network=TestNet'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 156462
        }
    },
    testnet: true
}); //# sourceMappingURL=defichainEvmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/degen.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.degen = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.degen = (0, defineChain_js_1.defineChain)({
    id: 666666666,
    name: 'Degen',
    nativeCurrency: {
        decimals: 18,
        name: 'Degen',
        symbol: 'DEGEN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.degen.tips'
            ],
            webSocket: [
                'wss://rpc.degen.tips'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Degen Chain Explorer',
            url: 'https://explorer.degen.tips',
            apiUrl: 'https://explorer.degen.tips/api/v2'
        }
    }
}); //# sourceMappingURL=degen.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dfk.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dfk = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dfk = (0, defineChain_js_1.defineChain)({
    id: 53_935,
    name: 'DFK Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Jewel',
        symbol: 'JEWEL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DFKSubnetScan',
            url: 'https://subnets.avax.network/defi-kingdoms'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14790551
        }
    }
}); //# sourceMappingURL=dfk.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/diode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diode = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.diode = (0, defineChain_js_1.defineChain)({
    id: 15,
    name: 'Diode Prenet',
    nativeCurrency: {
        decimals: 18,
        name: 'DIODE',
        symbol: 'DIODE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://prenet.diode.io:8443'
            ],
            webSocket: [
                'wss://prenet.diode.io:8443/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Diode Explorer',
            url: 'https://diode.io/prenet'
        }
    },
    testnet: false
}); //# sourceMappingURL=diode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/disChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.disChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.disChain = (0, defineChain_js_1.defineChain)({
    id: 513100,
    name: 'DisChain',
    nativeCurrency: {
        decimals: 18,
        name: 'DIS',
        symbol: 'DIS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.dischain.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DisChain Explorer',
            url: 'https://www.oklink.com/dis'
        }
    }
}); //# sourceMappingURL=disChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dodochainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dodochainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dodochainTestnet = (0, defineChain_js_1.defineChain)({
    id: 53457,
    name: 'DODOchain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'DODO',
        symbol: 'DODO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://dodochain-testnet.alt.technology'
            ],
            webSocket: [
                'wss://dodochain-testnet.alt.technology/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DODOchain Testnet (Sepolia) Explorer',
            url: 'https://testnet-scan.dodochain.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=dodochainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dogechain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dogechain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dogechain = (0, defineChain_js_1.defineChain)({
    id: 2_000,
    name: 'Dogechain',
    nativeCurrency: {
        decimals: 18,
        name: 'Wrapped Dogecoin',
        symbol: 'WDOGE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.dogechain.dog'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DogeChainExplorer',
            url: 'https://explorer.dogechain.dog',
            apiUrl: 'https://explorer.dogechain.dog/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x68a8609a60a008EFA633dfdec592c03B030cC508',
            blockCreated: 25384031
        }
    }
}); //# sourceMappingURL=dogechain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/donatuz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.donatuz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.donatuz = (0, defineChain_js_1.defineChain)({
    id: 42_026,
    name: 'Donatuz',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.donatuz.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Donatuz Explorer',
            url: 'https://explorer.donatuz.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        }
    }
}); //# sourceMappingURL=donatuz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dosChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dosChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dosChain = (0, defineChain_js_1.defineChain)({
    id: 7979,
    name: 'DOS Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'DOS Chain',
        symbol: 'DOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://main.doschain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DOS Chain Explorer',
            url: 'https://doscan.io',
            apiUrl: 'https://api.doscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 161908
        }
    }
}); //# sourceMappingURL=dosChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dosChainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dosChainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dosChainTestnet = (0, defineChain_js_1.defineChain)({
    id: 3939,
    name: 'DOS Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'DOS Chain Testnet',
        symbol: 'DOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://test.doschain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DOS Chain Testnet Explorer',
            url: 'https://test.doscan.io',
            apiUrl: 'https://api-test.doscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 69623
        }
    },
    testnet: true
}); //# sourceMappingURL=dosChainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dreyerxMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dreyerxMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dreyerxMainnet = (0, defineChain_js_1.defineChain)({
    id: 23451,
    name: 'DreyerX Mainnet',
    nativeCurrency: {
        name: 'DreyerX',
        symbol: 'DRX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.dreyerx.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DreyerX Scan',
            url: 'https://scan.dreyerx.com'
        }
    }
}); //# sourceMappingURL=dreyerxMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = void 0;
var assertCurrentChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertCurrentChain", {
    enumerable: true,
    get: function() {
        return assertCurrentChain_js_1.assertCurrentChain;
    }
});
var defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineChain", {
    enumerable: true,
    get: function() {
        return defineChain_js_1.defineChain;
    }
});
var extractChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/extractChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "extractChain", {
    enumerable: true,
    get: function() {
        return extractChain_js_1.extractChain;
    }
});
var getChainContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getChainContractAddress", {
    enumerable: true,
    get: function() {
        return getChainContractAddress_js_1.getChainContractAddress;
    }
}); //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dreyerxTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dreyerxTestnet = void 0;
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/utils.js [app-client] (ecmascript)");
exports.dreyerxTestnet = (0, utils_js_1.defineChain)({
    id: 23452,
    name: 'DreyerX Testnet',
    nativeCurrency: {
        name: 'DreyerX',
        symbol: 'DRX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://testnet-rpc.dreyerx.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'DreyerX Testnet Scan',
            url: 'https://testnet-scan.dreyerx.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=dreyerxTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dustboyIoT.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dustboyIoT = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.dustboyIoT = (0, defineChain_js_1.defineChain)({
    id: 555888,
    name: 'DustBoy IoT',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'DST',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dustboy-rpc.jibl2.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://dustboy.jibl2.com',
            apiUrl: 'https://dustboy.jibl2.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xFFD34aa2C62B2D52E00A361e466C229788f4eD6a',
            blockCreated: 526569
        }
    },
    testnet: false
}); //# sourceMappingURL=dustboyIoT.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dymension.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dymension = void 0;
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/utils.js [app-client] (ecmascript)");
exports.dymension = (0, utils_js_1.defineChain)({
    id: 1100,
    name: 'Dymension',
    nativeCurrency: {
        name: 'DYM',
        symbol: 'DYM',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dymension-evm-rpc.publicnode.com'
            ],
            webSocket: [
                'wss://dymension-evm-rpc.publicnode.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Dym FYI',
            url: 'https://dym.fyi'
        }
    },
    testnet: false
}); //# sourceMappingURL=dymension.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edexaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edexaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edexaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1995,
    name: 'edeXa Testnet',
    nativeCurrency: {
        name: 'edeXa',
        symbol: 'tEDX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.edexa.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'edeXa Testnet Explorer',
            url: 'https://explorer.testnet.edexa.network',
            apiUrl: 'https://explorer.testnet.edexa.network/api/v2'
        }
    },
    testnet: true
}); //# sourceMappingURL=edexaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edexa.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edexa = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edexa = (0, defineChain_js_1.defineChain)({
    id: 5424,
    name: 'edeXa',
    nativeCurrency: {
        name: 'edeXa',
        symbol: 'EDX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.edexa.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'edeXa Explorer',
            url: 'https://explorer.edexa.network',
            apiUrl: 'https://explorer.edexa.network/api/v2'
        }
    }
}); //# sourceMappingURL=edexa.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgeless.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgeless = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edgeless = (0, defineChain_js_1.defineChain)({
    id: 2_026,
    name: 'Edgeless Network',
    nativeCurrency: {
        name: 'Edgeless Wrapped ETH',
        symbol: 'EwETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.edgeless.network/http'
            ],
            webSocket: [
                'wss://rpc.edgeless.network/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Edgeless Explorer',
            url: 'https://explorer.edgeless.network'
        }
    }
}); //# sourceMappingURL=edgeless.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgelessTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgelessTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edgelessTestnet = (0, defineChain_js_1.defineChain)({
    id: 202,
    name: 'Edgeless Testnet',
    nativeCurrency: {
        name: 'Edgeless Wrapped ETH',
        symbol: 'EwETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://edgeless-testnet.rpc.caldera.xyz/http'
            ],
            webSocket: [
                'wss://edgeless-testnet.rpc.caldera.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Edgeless Testnet Explorer',
            url: 'https://testnet.explorer.edgeless.network'
        }
    }
}); //# sourceMappingURL=edgelessTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgeware.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgeware = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edgeware = (0, defineChain_js_1.defineChain)({
    id: 2021,
    name: 'Edgeware EdgeEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Edgeware',
        symbol: 'EDG'
    },
    rpcUrls: {
        default: {
            http: [
                'https://edgeware-evm.jelliedowl.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Edgscan by Bharathcoorg',
            url: 'https://edgscan.live',
            apiUrl: 'https://edgscan.live/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 18117872
        }
    }
}); //# sourceMappingURL=edgeware.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgewareTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgewareTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.edgewareTestnet = (0, defineChain_js_1.defineChain)({
    id: 2022,
    name: 'Beresheet BereEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Testnet EDG',
        symbol: 'tEDG'
    },
    rpcUrls: {
        default: {
            http: [
                'https://beresheet-evm.jelliedowl.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Edgscan by Bharathcoorg',
            url: 'https://testnet.edgscan.live',
            apiUrl: 'https://testnet.edgscan.live/api'
        }
    }
}); //# sourceMappingURL=edgewareTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eduChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eduChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.eduChain = (0, defineChain_js_1.defineChain)({
    id: 41923,
    name: 'EDU Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'EDU',
        symbol: 'EDU'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.edu-chain.raas.gelato.cloud'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EDU Chain Explorer',
            url: 'https://educhain.blockscout.com/'
        }
    },
    testnet: false
}); //# sourceMappingURL=eduChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eduChainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eduChainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.eduChainTestnet = (0, defineChain_js_1.defineChain)({
    id: 656476,
    name: 'EDU Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EDU',
        symbol: 'EDU'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.open-campus-codex.gelato.digital/'
            ],
            webSocket: [
                'wss://ws.open-campus-codex.gelato.digital'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EDU Chain Testnet Explorer',
            url: 'https://opencampus-codex.blockscout.com',
            apiUrl: 'https://opencampus-codex.blockscout.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 15514133
        }
    },
    testnet: true
}); //# sourceMappingURL=eduChainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ekta.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ekta = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ekta = (0, defineChain_js_1.defineChain)({
    id: 1994,
    name: 'Ekta',
    nativeCurrency: {
        decimals: 18,
        name: 'EKTA',
        symbol: 'EKTA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://main.ekta.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ektascan',
            url: 'https://ektascan.io',
            apiUrl: 'https://ektascan.io/api'
        }
    }
}); //# sourceMappingURL=ekta.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ektaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ektaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ektaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1004,
    name: 'Ekta Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EKTA',
        symbol: 'EKTA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://test.ekta.io:8545'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Test Ektascan',
            url: 'https://test.ektascan.io',
            apiUrl: 'https://test.ektascan.io/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=ektaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elastos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elastos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.elastos = (0, defineChain_js_1.defineChain)({
    id: 20,
    name: 'Elastos Smart Chain',
    nativeCurrency: {
        name: 'ELA',
        symbol: 'ELA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api2.elastos.io/eth'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Elastos Explorer',
            url: 'https://esc.elastos.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=elastos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elastosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elastosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.elastosTestnet = (0, defineChain_js_1.defineChain)({
    id: 21,
    name: 'Elastos Smart Chain Testnet',
    nativeCurrency: {
        name: 'tELA',
        symbol: 'tELA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api-testnet.elastos.io/eth'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Elastos Explorer',
            url: 'https://esc-testnet.elastos.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=elastosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/electroneum.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.electroneum = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.electroneum = (0, defineChain_js_1.defineChain)({
    id: 52014,
    name: 'Electroneum Mainnet',
    nativeCurrency: {
        name: 'ETN',
        symbol: 'ETN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.electroneum.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Block Explorer',
            url: 'https://blockexplorer.electroneum.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=electroneum.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/electroneumTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.electroneumTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.electroneumTestnet = (0, defineChain_js_1.defineChain)({
    id: 5201420,
    name: 'Electroneum Testnet',
    nativeCurrency: {
        name: 'ETN',
        symbol: 'ETN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.electroneum.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Block Explorer',
            url: 'https://blockexplorer.thesecurityteam.rocks'
        }
    },
    testnet: true
}); //# sourceMappingURL=electroneumTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elysiumTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elysiumTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.elysiumTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1338,
    name: 'Elysium Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'LAVA',
        symbol: 'LAVA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://elysium-test-rpc.vulcanforged.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Elysium testnet explorer',
            url: 'https://elysium-explorer.vulcanforged.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=elysiumTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/energy.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.energy = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.energy = (0, defineChain_js_1.defineChain)({
    id: 246,
    name: 'Energy Mainnet',
    nativeCurrency: {
        name: 'EWT',
        symbol: 'EWT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.energyweb.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EnergyWeb Explorer',
            url: 'https://explorer.energyweb.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=energy.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/enuls.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enuls = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.enuls = (0, defineChain_js_1.defineChain)({
    id: 119,
    name: 'ENULS Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'NULS',
        symbol: 'NULS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evmapi2.nuls.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ENULS Explorer',
            url: 'https://evmscan.nuls.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=enuls.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.eon = (0, defineChain_js_1.defineChain)({
    id: 7_332,
    name: 'Horizen EON',
    nativeCurrency: {
        decimals: 18,
        name: 'ZEN',
        symbol: 'ZEN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eon-rpc.horizenlabs.io/ethv1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EON Explorer',
            url: 'https://eon-explorer.horizenlabs.io'
        }
    },
    contracts: {}
}); //# sourceMappingURL=eon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.eos = (0, defineChain_js_1.defineChain)({
    id: 17777,
    name: 'EOS EVM',
    nativeCurrency: {
        decimals: 18,
        name: 'EOS',
        symbol: 'EOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.evm.eosnetwork.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EOS EVM Explorer',
            url: 'https://explorer.evm.eosnetwork.com',
            apiUrl: 'https://explorer.evm.eosnetwork.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7943933
        }
    }
}); //# sourceMappingURL=eos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.eosTestnet = (0, defineChain_js_1.defineChain)({
    id: 15557,
    name: 'EOS EVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EOS',
        symbol: 'EOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.testnet.evm.eosnetwork.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'EOS EVM Testnet Explorer',
            url: 'https://explorer.testnet.evm.eosnetwork.com',
            apiUrl: 'https://explorer.testnet.evm.eosnetwork.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 9067940
        }
    },
    testnet: true
}); //# sourceMappingURL=eosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etherlink.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.etherlink = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.etherlink = (0, defineChain_js_1.defineChain)({
    id: 42793,
    name: 'Etherlink',
    nativeCurrency: {
        decimals: 18,
        name: 'Tez',
        symbol: 'XTZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.mainnet.etherlink.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherlink',
            url: 'https://explorer.etherlink.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 33899
        }
    }
}); //# sourceMappingURL=etherlink.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etherlinkTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.etherlinkTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.etherlinkTestnet = (0, defineChain_js_1.defineChain)({
    id: 128123,
    name: 'Etherlink Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Tez',
        symbol: 'XTZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.ghostnet.etherlink.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherlink Testnet',
            url: 'https://testnet.explorer.etherlink.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=etherlinkTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ethernity.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ethernity = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ethernity = (0, defineChain_js_1.defineChain)({
    id: 183,
    name: 'Ethernity',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.ethernitychain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ethernity Explorer',
            url: 'https://ernscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    },
    testnet: false
}); //# sourceMappingURL=ethernity.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etp.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.etp = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.etp = (0, defineChain_js_1.defineChain)({
    id: 20_256_789,
    name: 'ETP Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETP Chain Native Token',
        symbol: 'ETP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.etpscan.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ETP Scan',
            url: 'https://etpscan.xyz'
        }
    }
}); //# sourceMappingURL=etp.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/evmos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.evmos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.evmos = (0, defineChain_js_1.defineChain)({
    id: 9_001,
    name: 'Evmos',
    nativeCurrency: {
        decimals: 18,
        name: 'Evmos',
        symbol: 'EVMOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.bd.evmos.org:8545'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Evmos Block Explorer',
            url: 'https://escan.live'
        }
    }
}); //# sourceMappingURL=evmos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/evmosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.evmosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.evmosTestnet = (0, defineChain_js_1.defineChain)({
    id: 9_000,
    name: 'Evmos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Evmos',
        symbol: 'EVMOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.bd.evmos.dev:8545'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Evmos Testnet Block Explorer',
            url: 'https://evm.evmos.dev/'
        }
    }
}); //# sourceMappingURL=evmosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/excelonMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.excelonMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.excelonMainnet = (0, defineChain_js_1.defineChain)({
    id: 22052002,
    name: 'Excelon Mainnet',
    network: 'XLON',
    nativeCurrency: {
        decimals: 18,
        name: 'Excelon',
        symbol: 'xlon'
    },
    rpcUrls: {
        default: {
            http: [
                'https://edgewallet1.xlon.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Excelon explorer',
            url: 'https://explorer.excelon.io'
        }
    }
}); //# sourceMappingURL=excelonMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/expanse.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expanse = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.expanse = (0, defineChain_js_1.defineChain)({
    id: 2,
    name: 'Expanse Network',
    nativeCurrency: {
        decimals: 18,
        name: 'EXP',
        symbol: 'EXP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.expanse.tech'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Expanse Explorer',
            url: 'https://explorer.expanse.tech'
        }
    },
    testnet: false
}); //# sourceMappingURL=expanse.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/exSat.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exsat = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.exsat = (0, defineChain_js_1.defineChain)({
    id: 7200,
    name: 'exSat Network',
    nativeCurrency: {
        decimals: 18,
        name: 'BTC',
        symbol: 'BTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.exsat.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'exSat Explorer',
            url: 'https://scan.exsat.network',
            apiUrl: 'https://scan.exsat.network/api'
        }
    }
}); //# sourceMappingURL=exSat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/exSatTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exsatTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.exsatTestnet = (0, defineChain_js_1.defineChain)({
    id: 839999,
    name: 'exSat Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BTC',
        symbol: 'BTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-tst3.exsat.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'exSat Explorer',
            url: 'https://scan-testnet.exsat.network',
            apiUrl: 'https://scan-testnet.exsat.network/api'
        }
    }
}); //# sourceMappingURL=exSatTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantom.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fantom = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fantom = (0, defineChain_js_1.defineChain)({
    id: 250,
    name: 'Fantom',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://250.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'FTMScan',
            url: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 33001987
        }
    }
}); //# sourceMappingURL=fantom.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantomSonicTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fantomSonicTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fantomSonicTestnet = (0, defineChain_js_1.defineChain)({
    id: 64_240,
    name: 'Fantom Sonic Open Testnet',
    network: 'fantom-sonic-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpcapi.sonic.fantom.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Fantom Sonic Open Testnet Explorer',
            url: 'https://public-sonic.fantom.network'
        }
    },
    testnet: true
}); //# sourceMappingURL=fantomSonicTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantomTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fantomTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fantomTestnet = (0, defineChain_js_1.defineChain)({
    id: 4_002,
    name: 'Fantom Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.fantom.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'FTMScan',
            url: 'https://testnet.ftmscan.com',
            apiUrl: 'https://testnet.ftmscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 8328688
        }
    },
    testnet: true
}); //# sourceMappingURL=fantomTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fibo.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fibo = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fibo = (0, defineChain_js_1.defineChain)({
    id: 12306,
    name: 'Fibo Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'fibo',
        symbol: 'FIBO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://network.hzroc.art'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'FiboScan',
            url: 'https://scan.fibochain.org'
        }
    }
}); //# sourceMappingURL=fibo.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoin.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filecoin = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.filecoin = (0, defineChain_js_1.defineChain)({
    id: 314,
    name: 'Filecoin Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'filecoin',
        symbol: 'FIL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.node.glif.io/rpc/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Filfox',
            url: 'https://filfox.info/en'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3328594
        }
    }
}); //# sourceMappingURL=filecoin.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoinCalibration.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filecoinCalibration = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.filecoinCalibration = (0, defineChain_js_1.defineChain)({
    id: 314_159,
    name: 'Filecoin Calibration',
    nativeCurrency: {
        decimals: 18,
        name: 'testnet filecoin',
        symbol: 'tFIL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.calibration.node.glif.io/rpc/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Filscan',
            url: 'https://calibration.filscan.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=filecoinCalibration.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoinHyperspace.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filecoinHyperspace = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.filecoinHyperspace = (0, defineChain_js_1.defineChain)({
    id: 314_1,
    name: 'Filecoin Hyperspace',
    nativeCurrency: {
        decimals: 18,
        name: 'testnet filecoin',
        symbol: 'tFIL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.hyperspace.node.glif.io/rpc/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Filfox',
            url: 'https://hyperspace.filfox.info/en'
        }
    },
    testnet: true
}); //# sourceMappingURL=filecoinHyperspace.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/5ireChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fireChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fireChain = (0, defineChain_js_1.defineChain)({
    id: 995,
    name: '5ireChain',
    nativeCurrency: {
        name: '5ire Token',
        symbol: '5IRE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.5ire.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: '5ireChain Mainnet Explorer',
            url: 'https://5irescan.io/'
        }
    },
    testnet: false
}); //# sourceMappingURL=5ireChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flame.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flame = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flame = (0, defineChain_js_1.defineChain)({
    id: 253368190,
    name: 'Flame',
    network: 'flame',
    nativeCurrency: {
        symbol: 'TIA',
        name: 'TIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.flame.astria.org'
            ],
            webSocket: [
                'wss://ws.flame.astria.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Flame Explorer',
            url: 'https://explorer.flame.astria.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 6829148
        }
    }
}); //# sourceMappingURL=flame.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flare.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flare = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flare = (0, defineChain_js_1.defineChain)({
    id: 14,
    name: 'Flare Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flare',
        symbol: 'FLR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://flare-api.flare.network/ext/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Flare Explorer',
            url: 'https://flare-explorer.flare.network',
            apiUrl: 'https://flare-explorer.flare.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3002461
        }
    }
}); //# sourceMappingURL=flare.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flareTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flareTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flareTestnet = (0, defineChain_js_1.defineChain)({
    id: 114,
    name: 'Flare Testnet Coston2',
    nativeCurrency: {
        decimals: 18,
        name: 'Coston2 Flare',
        symbol: 'C2FLR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://coston2-api.flare.network/ext/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Coston2 Explorer',
            url: 'https://coston2-explorer.flare.network',
            apiUrl: 'https://coston2-explorer.flare.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=flareTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flowMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flowMainnet = (0, defineChain_js_1.defineChain)({
    id: 747,
    name: 'Flow EVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.evm.nodes.onflow.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mainnet Explorer',
            url: 'https://evm.flowscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6205
        }
    },
    blockTime: 800
}); //# sourceMappingURL=flowMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowPreviewnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flowPreviewnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flowPreviewnet = (0, defineChain_js_1.defineChain)({
    id: 646,
    name: 'Flow EVM Previewnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW'
    },
    rpcUrls: {
        default: {
            http: [
                'https://previewnet.evm.nodes.onflow.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Previewnet Explorer',
            url: 'https://previewnet.flowdiver.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6205
        }
    }
}); //# sourceMappingURL=flowPreviewnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flowTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.flowTestnet = (0, defineChain_js_1.defineChain)({
    id: 545,
    name: 'Flow EVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.evm.nodes.onflow.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Flow Diver',
            url: 'https://evm-testnet.flowscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 137518
        }
    },
    testnet: true,
    blockTime: 800
}); //# sourceMappingURL=flowTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluence.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fluence = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fluence = (0, defineChain_js_1.defineChain)({
    id: 9_999_999,
    name: 'Fluence',
    nativeCurrency: {
        name: 'FLT',
        symbol: 'FLT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.fluence.dev'
            ],
            webSocket: [
                'wss://ws.mainnet.fluence.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.mainnet.fluence.dev',
            apiUrl: 'https://blockscout.mainnet.fluence.dev/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 207583
        }
    }
}); //# sourceMappingURL=fluence.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluenceStage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fluenceStage = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fluenceStage = (0, defineChain_js_1.defineChain)({
    id: 123_420_000_220,
    name: 'Fluence Stage',
    nativeCurrency: {
        name: 'tFLT',
        symbol: 'tFLT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.stage.fluence.dev'
            ],
            webSocket: [
                'wss://ws.stage.fluence.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.stage.fluence.dev',
            apiUrl: 'https://blockscout.stage.fluence.dev/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 83227
        }
    },
    testnet: true
}); //# sourceMappingURL=fluenceStage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluenceTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fluenceTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fluenceTestnet = (0, defineChain_js_1.defineChain)({
    id: 52_164_803,
    name: 'Fluence Testnet',
    nativeCurrency: {
        name: 'tFLT',
        symbol: 'tFLT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.fluence.dev'
            ],
            webSocket: [
                'wss://ws.testnet.fluence.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.testnet.fluence.dev',
            apiUrl: 'https://blockscout.testnet.fluence.dev/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 96424
        }
    },
    testnet: true
}); //# sourceMappingURL=fluenceTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluentTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fluentTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fluentTestnet = (0, defineChain_js_1.defineChain)({
    id: 20_993,
    name: 'Fluent Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.dev.gblend.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Fluent Explorer',
            url: 'https://blockscout.dev.gblend.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=fluentTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/forma.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forma = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.forma = (0, defineChain_js_1.defineChain)({
    id: 984122,
    name: 'Forma',
    network: 'forma',
    nativeCurrency: {
        symbol: 'TIA',
        name: 'TIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.forma.art'
            ],
            webSocket: [
                'wss://ws.forma.art'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Forma Explorer',
            url: 'https://explorer.forma.art'
        }
    },
    contracts: {
        multicall3: {
            address: '0xd53C6FFB123F7349A32980F87faeD8FfDc9ef079',
            blockCreated: 252705
        }
    }
}); //# sourceMappingURL=forma.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/form.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.form = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.form = (0, defineChain_js_1.defineChain)({
    id: 478,
    name: 'Form Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.form.network/http'
            ],
            webSocket: [
                'wss://rpc.form.network/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Form Explorer',
            url: 'https://explorer.form.network'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        addressManager: {
            [sourceId]: {
                address: '0x15c249E46A2F924C2dB3A1560CF86729bAD1f07B'
            }
        },
        l1CrossDomainMessenger: {
            [sourceId]: {
                address: '0xF333158DCCad1dF6C3F0a3aEe8BC31fA94d9eD5c'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x4ccAAF69F41c5810cA875183648B577CaCf1F67E'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x4E259Ee5F4136408908160dD32295A5031Fa426F'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xdc20aA63D3DE59574E065957190D8f24e0F7B8Ba'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    },
    sourceId
}); //# sourceMappingURL=form.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/memecoreFormicariumTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formicarium = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.formicarium = (0, defineChain_js_1.defineChain)({
    id: 43521,
    name: 'Formicarium',
    nativeCurrency: {
        decimals: 18,
        name: 'M',
        symbol: 'M'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.formicarium.memecore.net'
            ],
            webSocket: [
                'wss://ws.formicarium.memecore.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MemeCore Testnet Explorer',
            url: 'https://formicarium.memecorescan.io'
        },
        okx: {
            name: 'MemeCore Testnet Explorer',
            url: 'https://web3.okx.com/explorer/formicarium-testnet'
        },
        memecore: {
            name: 'MemeCore Testnet Explorer',
            url: 'https://formicarium.blockscout.memecore.com',
            apiUrl: 'https://formicarium.blockscout.memecore.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=memecoreFormicariumTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/formTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.formTestnet = (0, defineChain_js_1.defineChain)({
    id: 132_902,
    name: 'Form Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia-rpc.form.network/http'
            ],
            webSocket: [
                'wss://sepolia-rpc.form.network/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Form Testnet Explorer',
            url: 'https://sepolia-explorer.form.network'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        addressManager: {
            [sourceId]: {
                address: '0xd5C38fa934f7fd7477D4800F4f38a1c5BFdF1373'
            }
        },
        l1CrossDomainMessenger: {
            [sourceId]: {
                address: '0x37A68565c4BE9700b3E3Ec60cC4416cAC3052FAa'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x9eA2239E65a59EC9C7F1ED4C116dD58Da71Fc1e2'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x60377e3cE15dF4CCA24c4beF076b60314240b032'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xD4531f633942b2725896F47cD2aFd260b44Ab1F7'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=formTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/forta.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forta = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.forta = (0, defineChain_js_1.defineChain)({
    id: 80_931,
    name: 'Forta Chain',
    nativeCurrency: {
        symbol: 'FORT',
        name: 'FORT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-forta-chain-8gj1qndmfc.t.conduit.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Forta Explorer',
            url: 'https://explorer.forta.org'
        }
    }
}); //# sourceMappingURL=forta.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/foundry.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foundry = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.foundry = (0, defineChain_js_1.defineChain)({
    id: 31_337,
    name: 'Foundry',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ],
            webSocket: [
                'ws://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=foundry.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fraxtal.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fraxtal = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.fraxtal = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 252,
    name: 'Fraxtal',
    nativeCurrency: {
        name: 'Frax',
        symbol: 'FRAX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.frax.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'fraxscan',
            url: 'https://fraxscan.com',
            apiUrl: 'https://api.fraxscan.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D',
                blockCreated: 19135323
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2',
                blockCreated: 19135323
            }
        }
    },
    sourceId
}); //# sourceMappingURL=fraxtal.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fraxtalTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fraxtalTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 17000;
exports.fraxtalTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2522,
    name: 'Fraxtal Testnet',
    nativeCurrency: {
        name: 'Frax',
        symbol: 'FRAX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.frax.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'fraxscan testnet',
            url: 'https://holesky.fraxscan.com',
            apiUrl: 'https://api-holesky.fraxscan.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d',
                blockCreated: 318416
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x0BaafC217162f64930909aD9f2B27125121d6332',
                blockCreated: 318416
            }
        }
    },
    sourceId
}); //# sourceMappingURL=fraxtalTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/funkiMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funkiMainnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.funkiMainnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 33979,
    name: 'Funki',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet.funkichain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Funki Mainnet Explorer',
            url: 'https://funkiscan.io'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts
    },
    sourceId
}); //# sourceMappingURL=funkiMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/funkiSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.funkiSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.funkiSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 3397901,
    network: 'funkiSepolia',
    name: 'Funki Sepolia Sandbox',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://funki-testnet.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Funki Sepolia Sandbox Explorer',
            url: 'https://sepolia-sandbox.funkichain.com/'
        }
    },
    testnet: true,
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1620204
        }
    },
    sourceId
}); //# sourceMappingURL=funkiSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fuse.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fuse = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fuse = (0, defineChain_js_1.defineChain)({
    id: 122,
    name: 'Fuse',
    nativeCurrency: {
        name: 'Fuse',
        symbol: 'FUSE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.fuse.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Fuse Explorer',
            url: 'https://explorer.fuse.io',
            apiUrl: 'https://explorer.fuse.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 16146628
        }
    }
}); //# sourceMappingURL=fuse.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fuseSparknet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fuseSparknet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fuseSparknet = (0, defineChain_js_1.defineChain)({
    id: 123,
    name: 'Fuse Sparknet',
    nativeCurrency: {
        name: 'Spark',
        symbol: 'SPARK',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.fusespark.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sparkent Explorer',
            url: 'https://explorer.fusespark.io',
            apiUrl: 'https://explorer.fusespark.io/api'
        }
    }
}); //# sourceMappingURL=fuseSparknet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fusion.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fusion = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fusion = (0, defineChain_js_1.defineChain)({
    id: 32659,
    name: 'Fusion Mainnet',
    nativeCurrency: {
        name: 'Fusion',
        symbol: 'FSN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.fusionnetwork.io'
            ],
            webSocket: [
                'wss://mainnet.fusionnetwork.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'FSNscan',
            url: 'https://fsnscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 10441605
        }
    },
    testnet: false
}); //# sourceMappingURL=fusion.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fusionTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fusionTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.fusionTestnet = (0, defineChain_js_1.defineChain)({
    id: 46688,
    name: 'Fusion Testnet',
    nativeCurrency: {
        name: 'Fusion',
        symbol: 'FSN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.fusionnetwork.io'
            ],
            webSocket: [
                'wss://testnet.fusionnetwork.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'FSNscan',
            url: 'https://testnet.fsnscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 10428309
        }
    },
    testnet: true
}); //# sourceMappingURL=fusionTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/garnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.garnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 17000;
exports.garnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    name: 'Garnet Testnet',
    testnet: true,
    id: 17069,
    sourceId,
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.garnetchain.com'
            ],
            webSocket: [
                'wss://rpc.garnetchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.garnetchain.com'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0x57ee40586fbE286AfC75E67cb69511A6D9aF5909',
                blockCreated: 1274684
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B',
                blockCreated: 1274684
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x09bcDd311FE398F80a78BE37E489f5D440DB95DE',
                blockCreated: 1274684
            }
        }
    }
}); //# sourceMappingURL=garnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/geist.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geist = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.geist = (0, defineChain_js_1.defineChain)({
    id: 63157,
    name: 'Geist Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Aavegotchi GHST Token',
        symbol: 'GHST'
    },
    rpcUrls: {
        default: {
            http: [
                'https://geist-mainnet.g.alchemy.com/public'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://geist-mainnet.explorer.alchemy.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 660735
        }
    }
}); //# sourceMappingURL=geist.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/genesys.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genesys = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.genesys = (0, defineChain_js_1.defineChain)({
    id: 16507,
    name: 'Genesys Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'GSYS',
        symbol: 'GSYS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.genesys.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Genesys Explorer',
            url: 'https://gchainexplorer.genesys.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=genesys.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/glideL1Protocol.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.glideL1Protocol = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.glideL1Protocol = (0, defineChain_js_1.defineChain)({
    id: 251,
    name: 'Glide L1 Protocol XP',
    nativeCurrency: {
        name: 'GLXP',
        symbol: 'GLXP',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-api.glideprotocol.xyz/l1-rpc'
            ],
            webSocket: [
                'wss://rpc-api.glideprotocol.xyz/l1-rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Glide Protocol Explore',
            url: 'https://blockchain-explorer.glideprotocol.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=glideL1Protocol.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/glideL2Protocol.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.glideL2Protocol = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.glideL2Protocol = (0, defineChain_js_1.defineChain)({
    id: 253,
    name: 'Glide L2 Protocol XP',
    nativeCurrency: {
        name: 'GLXP',
        symbol: 'GLXP',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-api.glideprotocol.xyz/l2-rpc'
            ],
            webSocket: [
                'wss://rpc-api.glideprotocol.xyz/l2-rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Glide Protocol Explore',
            url: 'https://blockchain-explorer.glideprotocol.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=glideL2Protocol.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gnosis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gnosis = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.gnosis = (0, defineChain_js_1.defineChain)({
    id: 100,
    name: 'Gnosis',
    nativeCurrency: {
        decimals: 18,
        name: 'xDAI',
        symbol: 'XDAI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gnosischain.com'
            ],
            webSocket: [
                'wss://rpc.gnosischain.com/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Gnosisscan',
            url: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 21022491
        }
    }
}); //# sourceMappingURL=gnosis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gnosisChiado.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gnosisChiado = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.gnosisChiado = (0, defineChain_js_1.defineChain)({
    id: 10_200,
    name: 'Gnosis Chiado',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.chiadochain.net'
            ],
            webSocket: [
                'wss://rpc.chiadochain.net/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.chiadochain.net',
            apiUrl: 'https://blockscout.chiadochain.net/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4967313
        }
    },
    testnet: true
}); //# sourceMappingURL=gnosisChiado.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goat.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.goat = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.goat = (0, defineChain_js_1.defineChain)({
    id: 2345,
    name: 'GOAT',
    nativeCurrency: {
        decimals: 18,
        name: 'Bitcoin',
        symbol: 'BTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.goat.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Goat Explorer',
            url: 'https://explorer.goat.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    }
}); //# sourceMappingURL=goat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gobi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gobi = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.gobi = (0, defineChain_js_1.defineChain)({
    id: 1_663,
    name: 'Horizen Gobi Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Test ZEN',
        symbol: 'tZEN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://gobi-testnet.horizenlabs.io/ethv1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Gobi Explorer',
            url: 'https://gobi-explorer.horizen.io'
        }
    },
    contracts: {},
    testnet: true
}); //# sourceMappingURL=gobi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.goChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.goChain = (0, defineChain_js_1.defineChain)({
    id: 60,
    name: 'GoChain',
    nativeCurrency: {
        decimals: 18,
        name: 'GO',
        symbol: 'GO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gochain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'GoChain Explorer',
            url: 'https://explorer.gochain.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=goChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/godwoken.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.godwoken = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.godwoken = (0, defineChain_js_1.defineChain)({
    id: 71402,
    name: 'Godwoken Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'pCKB',
        symbol: 'pCKB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://v1.mainnet.godwoken.io/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'GW Scan',
            url: 'https://v1.gwscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 15034
        }
    },
    testnet: false
}); //# sourceMappingURL=godwoken.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.goerli = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.goerli = (0, defineChain_js_1.defineChain)({
    id: 5,
    name: 'Goerli',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://5.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
            apiUrl: 'https://api-goerli.etherscan.io/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        ensUniversalResolver: {
            address: '0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1',
            blockCreated: 10_339_206
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670
        }
    },
    testnet: true
}); //# sourceMappingURL=goerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gravity.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gravity = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.gravity = (0, defineChain_js_1.defineChain)({
    id: 1625,
    name: 'Gravity Alpha Mainnet',
    nativeCurrency: {
        name: 'G',
        symbol: 'G',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gravity.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Gravity Explorer',
            url: 'https://explorer.gravity.xyz',
            apiUrl: 'https://explorer.gravity.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xf8ac4BEB2F75d2cFFb588c63251347fdD629B92c',
            blockCreated: 16851
        }
    }
}); //# sourceMappingURL=gravity.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gunz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gunz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.gunz = (0, defineChain_js_1.defineChain)({
    id: 43_419,
    name: 'Gunz Mainnet',
    nativeCurrency: {
        name: 'GUN',
        symbol: 'GUN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Gunz Explorer',
            url: 'https://gunzscan.io/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 70502
        }
    }
}); //# sourceMappingURL=gunz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/guruNetwork.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guruNetwork = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.guruNetwork = (0, defineChain_js_1.defineChain)({
    id: 260,
    name: 'Guru Network Mainnet',
    nativeCurrency: {
        name: 'GURU Token',
        symbol: 'GURU',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-main.gurunetwork.ai',
                'https://rpc.gurunetwork.ai/archive/260'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Guruscan',
            url: 'https://scan.gurunetwork.ai'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 271691
        }
    },
    testnet: false
}); //# sourceMappingURL=guruNetwork.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/guruTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guruTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.guruTestnet = (0, defineChain_js_1.defineChain)({
    id: 261,
    name: 'Guru Network Testnet',
    nativeCurrency: {
        name: 'tGURU Token',
        symbol: 'tGURU',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-test.gurunetwork.ai',
                'https://rpc.gurunetwork.ai/archive/261'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Guruscan',
            url: 'https://sepolia.gurunetwork.ai'
        }
    },
    testnet: true
}); //# sourceMappingURL=guruTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ham.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ham = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ham = (0, defineChain_js_1.defineChain)({
    id: 5112,
    name: 'Ham',
    nativeCurrency: {
        decimals: 18,
        name: 'Ham',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.ham.fun'
            ],
            webSocket: [
                'wss://rpc.ham.fun'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ham Chain Explorer',
            url: 'https://explorer.ham.fun',
            apiUrl: 'https://explorer.ham.fun/api/v2'
        }
    }
}); //# sourceMappingURL=ham.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/happychainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.happychainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.happychainTestnet = (0, defineChain_js_1.defineChain)({
    id: 216,
    name: 'Happychain Testnet',
    nativeCurrency: {
        symbol: 'HAPPY',
        name: 'HAPPY',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.happy.tech/http'
            ],
            webSocket: [
                'wss://rpc.testnet.happy.tech/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Happy Chain Testnet Explorer',
            url: 'https://explorer.testnet.happy.tech'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1
        }
    },
    testnet: true
}); //# sourceMappingURL=happychainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haqqMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.haqqMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.haqqMainnet = (0, defineChain_js_1.defineChain)({
    id: 11235,
    name: 'HAQQ Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Islamic Coin',
        symbol: 'ISLM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.eth.haqq.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HAQQ Explorer',
            url: 'https://explorer.haqq.network',
            apiUrl: 'https://explorer.haqq.network/api'
        }
    }
}); //# sourceMappingURL=haqqMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haqqTestedge2.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.haqqTestedge2 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.haqqTestedge2 = (0, defineChain_js_1.defineChain)({
    id: 54211,
    name: 'HAQQ Testedge 2',
    nativeCurrency: {
        decimals: 18,
        name: 'Islamic Coin',
        symbol: 'ISLMT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.eth.testedge2.haqq.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HAQQ Explorer',
            url: 'https://explorer.testedge2.haqq.network',
            apiUrl: 'https://explorer.testedge2.haqq.network/api'
        }
    }
}); //# sourceMappingURL=haqqTestedge2.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hardhat.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hardhat = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hardhat = (0, defineChain_js_1.defineChain)({
    id: 31_337,
    name: 'Hardhat',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=hardhat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/harmonyOne.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.harmonyOne = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.harmonyOne = (0, defineChain_js_1.defineChain)({
    id: 1_666_600_000,
    name: 'Harmony One',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://1666600000.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Harmony Explorer',
            url: 'https://explorer.harmony.one'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 24185753
        }
    }
}); //# sourceMappingURL=harmonyOne.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hashKeyChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashkey = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hashkey = (0, defineChain_js_1.defineChain)({
    id: 177,
    name: 'HashKey Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'HashKey EcoPoints',
        symbol: 'HSK'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.hsk.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HashKey Chain Explorer',
            url: 'https://hashkey.blockscout.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        }
    }
}); //# sourceMappingURL=hashKeyChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hashkeyChainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashkeyTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hashkeyTestnet = (0, defineChain_js_1.defineChain)({
    id: 133,
    name: 'HashKey Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'HashKey EcoPoints',
        symbol: 'HSK'
    },
    rpcUrls: {
        default: {
            http: [
                'https://hashkeychain-testnet.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HashKey Chain Explorer',
            url: 'https://hashkeychain-testnet-explorer.alt.technology'
        }
    },
    testnet: true
}); //# sourceMappingURL=hashkeyChainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haustTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.haustTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.haustTestnet = (0, defineChain_js_1.defineChain)({
    id: 1_523_903_251,
    name: 'Haust Network Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'HAUST',
        symbol: 'HAUST'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.haust.app'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Haust Network Testnet Explorer',
            url: 'https://explorer-testnet.haust.app'
        }
    },
    testnet: true
}); //# sourceMappingURL=haustTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hedera.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hedera = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hedera = (0, defineChain_js_1.defineChain)({
    id: 295,
    name: 'Hedera Mainnet',
    network: 'hedera-mainnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.hashio.io/api'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/mainnet'
        }
    },
    testnet: false
}); //# sourceMappingURL=hedera.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hederaPreviewnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hederaPreviewnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hederaPreviewnet = (0, defineChain_js_1.defineChain)({
    id: 297,
    name: 'Hedera Previewnet',
    network: 'hedera-previewnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://previewnet.hashio.io/api'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/previewnet'
        }
    },
    testnet: true
}); //# sourceMappingURL=hederaPreviewnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hederaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hederaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hederaTestnet = (0, defineChain_js_1.defineChain)({
    id: 296,
    name: 'Hedera Testnet',
    network: 'hedera-testnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.hashio.io/api'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/testnet'
        }
    },
    testnet: true
}); //# sourceMappingURL=hederaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hela.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hela = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hela = (0, defineChain_js_1.defineChain)({
    id: 8668,
    name: 'Hela Mainnet',
    nativeCurrency: {
        name: 'HLUSD',
        symbol: 'HLUSD',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.helachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Hela explorer',
            url: 'https://mainnet-blockexplorer.helachain.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=hela.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hemi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hemi = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hemi = (0, defineChain_js_1.defineChain)({
    id: 43111,
    name: 'Hemi',
    network: 'Hemi',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hemi.network/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.hemi.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=hemi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hemiSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hemiSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hemiSepolia = (0, defineChain_js_1.defineChain)({
    id: 743111,
    name: 'Hemi Sepolia',
    network: 'Hemi Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.rpc.hemi.network/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Hemi Sepolia explorer',
            url: 'https://testnet.explorer.hemi.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=hemiSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/holesky.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.holesky = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.holesky = (0, defineChain_js_1.defineChain)({
    id: 17000,
    name: 'Holesky',
    nativeCurrency: {
        name: 'Holesky Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://ethereum-holesky-rpc.publicnode.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://holesky.etherscan.io',
            apiUrl: 'https://api-holesky.etherscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 77
        },
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            blockCreated: 801613
        },
        ensUniversalResolver: {
            address: '0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b',
            blockCreated: 973484
        }
    },
    testnet: true
}); //# sourceMappingURL=holesky.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hoodi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hoodi = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hoodi = (0, defineChain_js_1.defineChain)({
    id: 560048,
    name: 'Hoodi',
    nativeCurrency: {
        name: 'Hoodi Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hoodi.ethpandaops.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://hoodi.etherscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2589
        }
    },
    testnet: true
}); //# sourceMappingURL=hoodi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hpb.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hpb = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hpb = (0, defineChain_js_1.defineChain)({
    id: 269,
    name: 'High Performance Blockchain',
    nativeCurrency: {
        name: 'HPB',
        symbol: 'HPB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://hpbnode.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'hpbScan',
            url: 'https://hscan.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=hpb.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/huddle01Mainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.huddle01Mainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 42_161;
exports.huddle01Mainnet = (0, defineChain_js_1.defineChain)({
    id: 12323,
    name: 'Huddle01 dRTC Chain',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://huddle01.calderachain.xyz/http'
            ],
            webSocket: [
                'wss://huddle01.calderachain.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Huddle01 Caldera Explorer',
            url: 'https://huddle01.calderaexplorer.xyz',
            apiUrl: 'https://huddle01.calderaexplorer.xyz/api'
        }
    },
    sourceId
}); //# sourceMappingURL=huddle01Mainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/huddle01Testnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.huddle01Testnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 421_614;
exports.huddle01Testnet = (0, defineChain_js_1.defineChain)({
    id: 2524852,
    name: 'Huddle01 dRTC Chain Testnet',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://huddle-testnet.rpc.caldera.xyz/http'
            ],
            webSocket: [
                'wss://huddle-testnet.rpc.caldera.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Huddle01 Caldera Explorer',
            url: 'https://huddle-testnet.explorer.caldera.xyz',
            apiUrl: 'https://huddle-testnet.explorer.caldera.xyz/api'
        }
    },
    sourceId
}); //# sourceMappingURL=huddle01Testnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/humanode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.humanode = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.humanode = (0, defineChain_js_1.defineChain)({
    id: 5234,
    name: 'Humanode',
    nativeCurrency: {
        name: 'HMND',
        symbol: 'HMND',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://explorer-rpc-http.mainnet.stages.humanode.io'
            ],
            webSocket: [
                'wss://explorer-rpc-ws.mainnet.stages.humanode.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Subscan',
            url: 'https://humanode.subscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4_413_097
        }
    }
}); //# sourceMappingURL=humanode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/humanodeTestnet5.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.humanodeTestnet5 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.humanodeTestnet5 = (0, defineChain_js_1.defineChain)({
    id: 14853,
    name: 'Humanode Testnet 5',
    nativeCurrency: {
        name: 'HMND',
        symbol: 'HMND',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://explorer-rpc-http.testnet5.stages.humanode.io'
            ],
            webSocket: [
                'wss://explorer-rpc-ws.testnet5.stages.humanode.io'
            ]
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        }
    }
}); //# sourceMappingURL=humanodeTestnet5.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hychain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hychain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hychain = (0, defineChain_js_1.defineChain)({
    id: 2911,
    name: 'HYCHAIN',
    nativeCurrency: {
        name: 'HYTOPIA',
        symbol: 'TOPIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hychain.com/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HYCHAIN Explorer',
            url: 'https://explorer.hychain.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=hychain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hychainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hychainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.hychainTestnet = (0, defineChain_js_1.defineChain)({
    id: 29112,
    name: 'HYCHAIN Testnet',
    nativeCurrency: {
        name: 'HYTOPIA',
        symbol: 'TOPIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hychain.com/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'HYCHAIN Explorer',
            url: 'https://testnet-rpc.hychain.com/http'
        }
    },
    testnet: true
}); //# sourceMappingURL=hychainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/idchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.idchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.idchain = (0, defineChain_js_1.defineChain)({
    id: 74,
    name: 'IDChain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EIDI',
        symbol: 'EIDI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://idchain.one/rpc'
            ],
            webSocket: [
                'wss://idchain.one/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'IDChain Explorer',
            url: 'https://explorer.idchain.one'
        }
    },
    testnet: false
}); //# sourceMappingURL=idchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/immutableZkEvm.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.immutableZkEvm = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.immutableZkEvm = (0, defineChain_js_1.defineChain)({
    id: 13371,
    name: 'Immutable zkEVM',
    nativeCurrency: {
        decimals: 18,
        name: 'Immutable Coin',
        symbol: 'IMX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.immutable.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Immutable Explorer',
            url: 'https://explorer.immutable.com',
            apiUrl: 'https://explorer.immutable.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x236bdA4589e44e6850f5aC6a74BfCa398a86c6c0',
            blockCreated: 4335972
        }
    }
}); //# sourceMappingURL=immutableZkEvm.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/immutableZkEvmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.immutableZkEvmTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.immutableZkEvmTestnet = (0, defineChain_js_1.defineChain)({
    id: 13473,
    name: 'Immutable zkEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Immutable Coin',
        symbol: 'IMX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.immutable.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Immutable Testnet Explorer',
            url: 'https://explorer.testnet.immutable.com/'
        }
    },
    contracts: {
        multicall3: {
            address: '0x2CC787Ed364600B0222361C4188308Fa8E68bA60',
            blockCreated: 5977391
        }
    },
    testnet: true
}); //# sourceMappingURL=immutableZkEvmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/inEVM.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inEVM = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.inEVM = (0, defineChain_js_1.defineChain)({
    id: 2525,
    name: 'inEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Injective',
        symbol: 'INJ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.rpc.inevm.com/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'inEVM Explorer',
            url: 'https://inevm.calderaexplorer.xyz',
            apiUrl: 'https://inevm.calderaexplorer.xyz/api/v2'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 118606
        }
    }
}); //# sourceMappingURL=inEVM.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/initVerse.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initVerse = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.initVerse = (0, defineChain_js_1.defineChain)({
    id: 7_233,
    name: 'InitVerse Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'InitVerse',
        symbol: 'INI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet.inichain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'InitVerseScan',
            url: 'https://www.iniscan.com',
            apiUrl: 'https://explorer-api.inichain.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x83466BE48A067115FFF91f7b892Ed1726d032e47',
            blockCreated: 2318
        }
    }
}); //# sourceMappingURL=initVerse.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/initVerseGenesis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initVerseGenesis = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.initVerseGenesis = (0, defineChain_js_1.defineChain)({
    id: 7_234,
    name: 'InitVerse Genesis Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'InitVerse',
        symbol: 'INI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.inichain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'InitVerseGenesisScan',
            url: 'https://genesis-testnet.iniscan.com',
            apiUrl: 'https://explorer-testnet-api.inichain.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0cF32CBDd6c437331EA4f85ed2d881A5379B5a6F',
            blockCreated: 16361
        }
    },
    testnet: true
}); //# sourceMappingURL=initVerseGenesis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ink.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ink = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.ink = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 57073,
    name: 'Ink',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-gel.inkonchain.com',
                'https://rpc-qnd.inkonchain.com'
            ],
            webSocket: [
                'wss://rpc-gel.inkonchain.com',
                'wss://rpc-qnd.inkonchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.inkonchain.com',
            apiUrl: 'https://explorer.inkonchain.com/api/v2'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        },
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x10d7b35078d3baabb96dd45a9143b94be65b12cd'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x5d66c1782664115999c47c9fa5cd031f495d3e4f'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x88ff1e5b602916615391f55854588efcbb7663f0'
            }
        }
    },
    testnet: false,
    sourceId
}); //# sourceMappingURL=ink.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/inkSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inkSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.inkSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 763373,
    name: 'Ink Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-gel-sepolia.inkonchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer-sepolia.inkonchain.com/',
            apiUrl: 'https://explorer-sepolia.inkonchain.com/api/v2'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0x860e626c700af381133d9f4af31412a2d1db3d5d'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x5c1d29c6c9c8b0800692acc95d700bcb4966a1d7'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x33f60714bbd74d62b66d79213c348614de51901c'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=inkSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iota.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iota = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.iota = (0, defineChain_js_1.defineChain)({
    id: 8822,
    name: 'IOTA EVM',
    network: 'iotaevm',
    nativeCurrency: {
        decimals: 18,
        name: 'IOTA',
        symbol: 'IOTA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://json-rpc.evm.iotaledger.net'
            ],
            webSocket: [
                'wss://ws.json-rpc.evm.iotaledger.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.evm.iota.org',
            apiUrl: 'https://explorer.evm.iota.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 25022
        }
    }
}); //# sourceMappingURL=iota.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iotaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.iotaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1075,
    name: 'IOTA EVM Testnet',
    network: 'iotaevm-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'IOTA',
        symbol: 'IOTA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://json-rpc.evm.testnet.iotaledger.net'
            ],
            webSocket: [
                'wss://ws.json-rpc.evm.testnet.iotaledger.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.evm.testnet.iotaledger.net',
            apiUrl: 'https://explorer.evm.testnet.iotaledger.net/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=iotaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iotex = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.iotex = (0, defineChain_js_1.defineChain)({
    id: 4_689,
    name: 'IoTeX',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://babel-api.mainnet.iotex.io'
            ],
            webSocket: [
                'wss://babel-api.mainnet.iotex.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'IoTeXScan',
            url: 'https://iotexscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 22163670
        }
    }
}); //# sourceMappingURL=iotex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotexTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iotexTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.iotexTestnet = (0, defineChain_js_1.defineChain)({
    id: 4_690,
    name: 'IoTeX Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://babel-api.testnet.iotex.io'
            ],
            webSocket: [
                'wss://babel-api.testnet.iotex.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'IoTeXScan',
            url: 'https://testnet.iotexscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xb5cecD6894c6f473Ec726A176f1512399A2e355d',
            blockCreated: 24347592
        }
    },
    testnet: true
}); //# sourceMappingURL=iotexTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iSunCoin.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iSunCoin = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.iSunCoin = (0, defineChain_js_1.defineChain)({
    id: 8017,
    name: 'iSunCoin Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ISC',
        symbol: 'ISC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.isuncoin.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'iSunCoin Explorer',
            url: 'https://baifa.io/app/chains/8017'
        }
    }
}); //# sourceMappingURL=iSunCoin.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/jbc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jbc = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.jbc = (0, defineChain_js_1.defineChain)({
    id: 8899,
    name: 'JB Chain',
    network: 'jbc',
    nativeCurrency: {
        name: 'JBC',
        symbol: 'JBC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-l1.jibchain.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp-l1.jibchain.net',
            apiUrl: 'https://exp-l1.jibchain.net/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC',
            blockCreated: 2299048
        }
    },
    testnet: false
}); //# sourceMappingURL=jbc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/jbcTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jbcTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.jbcTestnet = (0, defineChain_js_1.defineChain)({
    id: 88991,
    name: 'Jibchain Testnet',
    nativeCurrency: {
        name: 'tJBC',
        symbol: 'tJBC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.jibchain.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp.testnet.jibchain.net',
            apiUrl: 'https://exp.testnet.jibchain.net/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xa1a858ad9041B4741e620355a3F96B3c78e70ecE',
            blockCreated: 32848
        }
    },
    testnet: true
}); //# sourceMappingURL=jbcTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneo.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneo = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneo = (0, defineChain_js_1.defineChain)({
    id: 45_003,
    name: 'Juneo JUNE-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'JUNE-Chain',
        symbol: 'JUNE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/JUNE/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/2',
            apiUrl: 'https://juneoscan.io/chain/2/api'
        }
    }
}); //# sourceMappingURL=juneo.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoBCH1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoBCH1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoBCH1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_013,
    name: 'Juneo BCH1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo BCH1-Chain',
        symbol: 'BCH1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/BCH1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/12',
            apiUrl: 'https://juneoscan.io/chain/12/api'
        }
    }
}); //# sourceMappingURL=juneoBCH1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoDAI1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoDAI1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoDAI1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_004,
    name: 'Juneo DAI1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo DAI1-Chain',
        symbol: 'DAI1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/DAI1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/5',
            apiUrl: 'https://juneoscan.io/chain/5/api'
        }
    }
}); //# sourceMappingURL=juneoDAI1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoDOGE1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoDOGE1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoDOGE1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_010,
    name: 'Juneo DOGE1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo DOGE1-Chain',
        symbol: 'DOGE1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/DOGE1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/10',
            apiUrl: 'https://juneoscan.io/chain/10/api'
        }
    }
}); //# sourceMappingURL=juneoDOGE1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoEUR1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoEUR1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoEUR1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_011,
    name: 'Juneo EUR1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo EUR1-Chain',
        symbol: 'EUR1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/EUR1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/6',
            apiUrl: 'https://juneoscan.io/chain/6/api'
        }
    }
}); //# sourceMappingURL=juneoEUR1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoGLD1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoGLD1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoGLD1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_008,
    name: 'Juneo GLD1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo GLD1-Chain',
        symbol: 'GLD1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/GLD1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/8',
            apiUrl: 'https://juneoscan.io/chain/8/api'
        }
    }
}); //# sourceMappingURL=juneoGLD1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoLINK1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoLINK1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoLINK1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_014,
    name: 'Juneo LINK1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo LINK1-Chain',
        symbol: 'LINK1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/LINK1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/13',
            apiUrl: 'https://juneoscan.io/chain/13/api'
        }
    }
}); //# sourceMappingURL=juneoLINK1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoLTC1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoLTC1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoLTC1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_009,
    name: 'Juneo LTC1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo LTC1-Chain',
        symbol: 'LTC1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/LTC1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/11',
            apiUrl: 'https://juneoscan.io/chain/11/api'
        }
    }
}); //# sourceMappingURL=juneoLTC1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneomBTC1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneomBTC1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneomBTC1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_007,
    name: 'Juneo mBTC1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo mBTC1-Chain',
        symbol: 'mBTC1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/mBTC1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/9',
            apiUrl: 'https://juneoscan.io/chain/9/api'
        }
    }
}); //# sourceMappingURL=juneomBTC1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoSGD1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoSGD1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoSGD1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_012,
    name: 'Juneo SGD1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo SGD1-Chain',
        symbol: 'SGD1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/SGD1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/7',
            apiUrl: 'https://juneoscan.io/chain/7/api'
        }
    }
}); //# sourceMappingURL=juneoSGD1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoSocotraTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoSocotraTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoSocotraTestnet = (0, defineChain_js_1.defineChain)({
    id: 101_003,
    name: 'Socotra JUNE-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Socotra JUNE-Chain',
        symbol: 'JUNE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.socotra-testnet.network/ext/bc/JUNE/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://socotra.juneoscan.io/chain/2',
            apiUrl: 'https://socotra.juneoscan.io/chain/2/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=juneoSocotraTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoUSD1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoUSD1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoUSD1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_006,
    name: 'Juneo USD1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo USD1-Chain',
        symbol: 'USD1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/USD1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/4',
            apiUrl: 'https://juneoscan.io/chain/4/api'
        }
    }
}); //# sourceMappingURL=juneoUSD1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoUSDT1Chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.juneoUSDT1Chain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.juneoUSDT1Chain = (0, defineChain_js_1.defineChain)({
    id: 45_005,
    name: 'Juneo USDT1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo USDT1-Chain',
        symbol: 'USDT1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.juneo-mainnet.network/ext/bc/USDT1/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/3',
            apiUrl: 'https://juneoscan.io/chain/3/api'
        }
    }
}); //# sourceMappingURL=juneoUSDT1Chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/karura.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.karura = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.karura = (0, defineChain_js_1.defineChain)({
    id: 686,
    name: 'Karura',
    network: 'karura',
    nativeCurrency: {
        name: 'Karura',
        symbol: 'KAR',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc-karura.aca-api.network'
            ],
            webSocket: [
                'wss://eth-rpc-karura.aca-api.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Karura Blockscout',
            url: 'https://blockscout.karura.network',
            apiUrl: 'https://blockscout.karura.network/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=karura.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kakarotSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kakarotSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kakarotSepolia = (0, defineChain_js_1.defineChain)({
    id: 1802203764,
    name: 'Kakarot Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia-rpc.kakarot.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kakarot Scan',
            url: 'https://sepolia.kakarotscan.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=kakarotSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kakarotStarknetSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kakarotStarknetSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kakarotStarknetSepolia = (0, defineChain_js_1.defineChain)({
    id: 920637907288165,
    name: 'Kakarot Starknet Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia-rpc.kakarot.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kakarot Scan',
            url: 'https://sepolia.kakarotscan.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=kakarotStarknetSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kardiaChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kardiaChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kardiaChain = (0, defineChain_js_1.defineChain)({
    id: 24,
    name: 'KardiaChain Mainnet',
    nativeCurrency: {
        name: 'KAI',
        symbol: 'KAI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.kardiachain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KardiaChain Explorer',
            url: 'https://explorer.kardiachain.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=kardiaChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kava.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kava = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kava = (0, defineChain_js_1.defineChain)({
    id: 2222,
    name: 'Kava EVM',
    network: 'kava-mainnet',
    nativeCurrency: {
        name: 'Kava',
        symbol: 'KAVA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.kava.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kava EVM Explorer',
            url: 'https://kavascan.com',
            apiUrl: 'https://kavascan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3661165
        }
    },
    testnet: false
}); //# sourceMappingURL=kava.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kavaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kavaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kavaTestnet = (0, defineChain_js_1.defineChain)({
    id: 2221,
    name: 'Kava EVM Testnet',
    network: 'kava-testnet',
    nativeCurrency: {
        name: 'Kava',
        symbol: 'KAVA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.testnet.kava.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kava EVM Testnet Explorer',
            url: 'https://testnet.kavascan.com/',
            apiUrl: 'https://testnet.kavascan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6',
            blockCreated: 7242179
        }
    },
    testnet: true
}); //# sourceMappingURL=kavaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kcc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kcc = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kcc = (0, defineChain_js_1.defineChain)({
    id: 321,
    name: 'KCC Mainnet',
    network: 'KCC Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'KCS',
        symbol: 'KCS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://kcc-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KCC Explorer',
            url: 'https://explorer.kcc.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11760430
        }
    },
    testnet: false
}); //# sourceMappingURL=kcc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kinto.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kinto = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kinto = (0, defineChain_js_1.defineChain)({
    id: 7887,
    name: 'Kinto Mainnet',
    network: 'Kinto Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.kinto.xyz/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kinto Explorer',
            url: 'https://explorer.kinto.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=kinto.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/klaytn.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.klaytn = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.klaytn = (0, defineChain_js_1.defineChain)({
    id: 8_217,
    name: 'Klaytn',
    nativeCurrency: {
        decimals: 18,
        name: 'Klaytn',
        symbol: 'KLAY'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-en-cypress.klaytn.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KlaytnScope',
            url: 'https://scope.klaytn.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 96002415
        }
    }
}); //# sourceMappingURL=klaytn.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kaia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kaia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kaia = (0, defineChain_js_1.defineChain)({
    id: 8_217,
    name: 'Kaia',
    nativeCurrency: {
        decimals: 18,
        name: 'Kaia',
        symbol: 'KAIA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-en.node.kaia.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KaiaScan',
            url: 'https://kaiascan.io',
            apiUrl: 'https://api-cypress.klaytnscope.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 96002415
        }
    }
}); //# sourceMappingURL=kaia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kairos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kairos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kairos = (0, defineChain_js_1.defineChain)({
    id: 1_001,
    name: 'Kairos Testnet',
    network: 'kairos',
    nativeCurrency: {
        decimals: 18,
        name: 'Kairos KAIA',
        symbol: 'KAIA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-en-kairos.node.kaia.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KaiaScan',
            url: 'https://kairos.kaiascan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 123390593
        }
    },
    testnet: true
}); //# sourceMappingURL=kairos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/klaytnBaobab.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.klaytnBaobab = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.klaytnBaobab = (0, defineChain_js_1.defineChain)({
    id: 1_001,
    name: 'Klaytn Baobab Testnet',
    network: 'klaytn-baobab',
    nativeCurrency: {
        decimals: 18,
        name: 'Baobab Klaytn',
        symbol: 'KLAY'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-en-baobab.klaytn.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'KlaytnScope',
            url: 'https://baobab.klaytnscope.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 123390593
        }
    },
    testnet: true
}); //# sourceMappingURL=klaytnBaobab.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/koi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.koi = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.koi = (0, defineChain_js_1.defineChain)({
    id: 701,
    name: 'Koi Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Koi Network Native Token',
        symbol: 'KRING'
    },
    rpcUrls: {
        default: {
            http: [
                'https://koi-rpc.darwinia.network'
            ],
            webSocket: [
                'wss://koi-rpc.darwinia.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://koi-scan.darwinia.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 180001
        }
    },
    testnet: true
}); //# sourceMappingURL=koi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kroma.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kroma = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kroma = (0, defineChain_js_1.defineChain)({
    id: 255,
    name: 'Kroma',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.kroma.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kroma Explorer',
            url: 'https://blockscout.kroma.network',
            apiUrl: 'https://blockscout.kroma.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 16054868
        }
    },
    testnet: false
}); //# sourceMappingURL=kroma.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kromaSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kromaSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.kromaSepolia = (0, defineChain_js_1.defineChain)({
    id: 2358,
    name: 'Kroma Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.sepolia.kroma.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Kroma Sepolia Explorer',
            url: 'https://blockscout.sepolia.kroma.network',
            apiUrl: 'https://blockscout.sepolia.kroma.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 8900914
        }
    },
    testnet: true
}); //# sourceMappingURL=kromaSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/l3x.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.l3x = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.l3x = (0, defineChain_js_1.defineChain)({
    id: 12324,
    name: 'L3X Protocol',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet.l3x.com'
            ],
            webSocket: [
                'wss://rpc-mainnet.l3x.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'L3X Mainnet Explorer',
            url: 'https://explorer.l3x.com',
            apiUrl: 'https://explorer.l3x.com/api/v2'
        }
    },
    testnet: false
}); //# sourceMappingURL=l3x.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/l3xTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.l3xTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.l3xTestnet = (0, defineChain_js_1.defineChain)({
    id: 12325,
    name: 'L3X Protocol Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.l3x.com'
            ],
            webSocket: [
                'wss://rpc-testnet.l3x.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'L3X Testnet Explorer',
            url: 'https://explorer-testnet.l3x.com',
            apiUrl: 'https://explorer-testnet.l3x.com/api/v2'
        }
    },
    testnet: true
}); //# sourceMappingURL=l3xTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lavita.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lavita = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lavita = (0, defineChain_js_1.defineChain)({
    id: 360890,
    name: 'LAVITA Mainnet',
    nativeCurrency: {
        name: 'vTFUEL',
        symbol: 'vTFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://tsub360890-eth-rpc.thetatoken.org/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LAVITA Explorer',
            url: 'https://tsub360890-explorer.thetatoken.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=lavita.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lens.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lens = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lens = (0, defineChain_js_1.defineChain)({
    id: 232,
    name: 'Lens',
    nativeCurrency: {
        name: 'GHO',
        symbol: 'GHO',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.lens.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lens Block Explorer',
            url: 'https://explorer.lens.xyz',
            apiUrl: 'https://explorer.lens.xyz/api'
        }
    }
}); //# sourceMappingURL=lens.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lensTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lensTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lensTestnet = (0, defineChain_js_1.defineChain)({
    id: 37_111,
    name: 'Lens Testnet',
    nativeCurrency: {
        name: 'GRASS',
        symbol: 'GRASS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.lens.dev'
            ],
            webSocket: [
                'wss://rpc.testnet.lens.dev/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lens Block Explorer',
            url: 'https://block-explorer.testnet.lens.dev',
            apiUrl: 'https://block-explorer-api.staging.lens.dev/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=lensTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lestnet = (0, defineChain_js_1.defineChain)({
    id: 21363,
    name: 'Lestnet',
    nativeCurrency: {
        name: 'Lestnet Ether',
        symbol: 'LETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://service.lestnet.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lestnet Explorer',
            url: 'https://explore.lestnet.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=lestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lightlinkPegasus.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lightlinkPegasus = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lightlinkPegasus = (0, defineChain_js_1.defineChain)({
    id: 1_891,
    name: 'LightLink Pegasus Testnet',
    network: 'lightlink-pegasus',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://replicator.pegasus.lightlink.io/rpc/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LightLink Pegasus Explorer',
            url: 'https://pegasus.lightlink.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 127_188_532
        }
    },
    testnet: true
}); //# sourceMappingURL=lightlinkPegasus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lightlinkPhoenix.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lightlinkPhoenix = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lightlinkPhoenix = (0, defineChain_js_1.defineChain)({
    id: 1_890,
    name: 'LightLink Phoenix Mainnet',
    network: 'lightlink-phoenix',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://replicator.phoenix.lightlink.io/rpc/v1'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LightLink Phoenix Explorer',
            url: 'https://phoenix.lightlink.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 125_499_184
        }
    },
    testnet: false
}); //# sourceMappingURL=lightlinkPhoenix.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/linea.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.linea = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.linea = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 59_144,
    name: 'Linea Mainnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.linea.build'
            ],
            webSocket: [
                'wss://rpc.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://lineascan.build',
            apiUrl: 'https://api.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 42
        },
        ensRegistry: {
            address: '0x50130b669B28C339991d8676FA73CF122a121267',
            blockCreated: 6682888
        },
        ensUniversalResolver: {
            address: '0x3aA974fb3f8C1E02796048BDCdeD79e9D53a6965',
            blockCreated: 6683000
        }
    },
    ensTlds: [
        '.linea.eth'
    ],
    testnet: false
}); //# sourceMappingURL=linea.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaGoerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lineaGoerli = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lineaGoerli = (0, defineChain_js_1.defineChain)({
    id: 59_140,
    name: 'Linea Goerli Testnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.goerli.linea.build'
            ],
            webSocket: [
                'wss://rpc.goerli.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.lineascan.build',
            apiUrl: 'https://api-goerli.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 498623
        }
    },
    testnet: true
}); //# sourceMappingURL=lineaGoerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lineaSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lineaSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 59_141,
    name: 'Linea Sepolia Testnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sepolia.linea.build'
            ],
            webSocket: [
                'wss://rpc.sepolia.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.lineascan.build',
            apiUrl: 'https://api-sepolia.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 227427
        },
        ensRegistry: {
            address: '0x5B2636F0f2137B4aE722C01dd5122D7d3e9541f7',
            blockCreated: 2395094
        },
        ensUniversalResolver: {
            address: '0x72560a31B3DAEE82B984a7F51c6b3b1bb7CC9F50',
            blockCreated: 2395255
        }
    },
    ensTlds: [
        '.linea.eth'
    ],
    testnet: true
}); //# sourceMappingURL=lineaSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lineaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lineaTestnet = (0, defineChain_js_1.defineChain)({
    id: 59_140,
    name: 'Linea Goerli Testnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.goerli.linea.build'
            ],
            webSocket: [
                'wss://rpc.goerli.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.lineascan.build',
            apiUrl: 'https://goerli.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 498623
        }
    },
    testnet: true
}); //# sourceMappingURL=lineaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lisk.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lisk = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.lisk = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1135,
    name: 'Lisk',
    network: 'lisk',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.api.lisk.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.lisk.com',
            apiUrl: 'https://blockscout.lisk.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0'
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x113cB99283AF242Da0A0C54347667edF531Aa7d6'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x26dB93F8b8b4f7016240af62F7730979d353f9A7'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x2658723Bf70c7667De6B25F99fcce13A16D25d08'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=lisk.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/liskSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.liskSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.liskSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 4202,
    network: 'lisk-sepolia',
    name: 'Lisk Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sepolia-api.lisk.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia-blockscout.lisk.com',
            apiUrl: 'https://sepolia-blockscout.lisk.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0xe3d90F21490686Ec7eF37BE788E02dfC12787264'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=liskSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/localhost.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localhost = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.localhost = (0, defineChain_js_1.defineChain)({
    id: 1_337,
    name: 'Localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=localhost.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/loop.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loop = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.loop = (0, defineChain_js_1.defineChain)({
    id: 15551,
    name: 'LoopNetwork Mainnet',
    nativeCurrency: {
        name: 'LOOP',
        symbol: 'LOOP',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.mainnetloop.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LoopNetwork Blockchain Explorer',
            url: 'https://explorer.mainnetloop.com/'
        }
    },
    testnet: false
}); //# sourceMappingURL=loop.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lukso.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lukso = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lukso = (0, defineChain_js_1.defineChain)({
    id: 42,
    network: 'lukso',
    name: 'LUKSO',
    nativeCurrency: {
        name: 'LUKSO',
        symbol: 'LYX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.lukso.network'
            ],
            webSocket: [
                'wss://ws-rpc.mainnet.lukso.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LUKSO Mainnet Explorer',
            url: 'https://explorer.execution.mainnet.lukso.network',
            apiUrl: 'https://api.explorer.execution.mainnet.lukso.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 468183
        }
    }
}); //# sourceMappingURL=lukso.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/luksoTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.luksoTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.luksoTestnet = (0, defineChain_js_1.defineChain)({
    id: 4201,
    name: 'LUKSO Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'LUKSO Testnet',
        symbol: 'LYXt'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.lukso.network'
            ],
            webSocket: [
                'wss://ws-rpc.testnet.lukso.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'LUKSO Testnet Explorer',
            url: 'https://explorer.execution.testnet.lukso.network',
            apiUrl: 'https://api.explorer.execution.testnet.lukso.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 605348
        }
    },
    testnet: true
}); //# sourceMappingURL=luksoTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumiaMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lumiaMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lumiaMainnet = (0, defineChain_js_1.defineChain)({
    id: 994873017,
    name: 'Lumia Mainnet',
    network: 'LumiaMainnet',
    nativeCurrency: {
        name: 'Lumia',
        symbol: 'LUMIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.lumia.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lumia Explorer',
            url: 'https://explorer.lumia.org/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3975939
        }
    },
    testnet: false
}); //# sourceMappingURL=lumiaMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumiaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lumiaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lumiaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1952959480,
    name: 'Lumia Testnet',
    network: 'LumiaTestnet',
    nativeCurrency: {
        name: 'Lumia',
        symbol: 'LUMIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.lumia.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lumia Testnet Explorer',
            url: 'https://testnet-explorer.lumia.org/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2235063
        }
    },
    testnet: true
}); //# sourceMappingURL=lumiaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumoz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lumoz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lumoz = (0, defineChain_js_1.defineChain)({
    id: 96_370,
    name: 'Lumoz',
    nativeCurrency: {
        decimals: 18,
        name: 'Lumoz Token',
        symbol: 'MOZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.lumoz.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lumoz Scan',
            url: 'https://scan.lumoz.info'
        }
    },
    testnet: false
}); //# sourceMappingURL=lumoz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumozTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lumozTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lumozTestnet = (0, defineChain_js_1.defineChain)({
    id: 105_363,
    name: 'Lumoz Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Lumoz Testnet Token',
        symbol: 'MOZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.lumoz.org'
            ]
        }
    },
    testnet: true
}); //# sourceMappingURL=lumozTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lycan.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lycan = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lycan = (0, defineChain_js_1.defineChain)({
    id: 721,
    name: 'Lycan',
    nativeCurrency: {
        decimals: 18,
        name: 'Lycan',
        symbol: 'LYC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.lycanchain.com',
                'https://us-east.lycanchain.com',
                'https://us-west.lycanchain.com',
                'https://eu-north.lycanchain.com',
                'https://eu-west.lycanchain.com',
                'https://asia-southeast.lycanchain.com'
            ],
            webSocket: [
                'wss://rpc.lycanchain.com',
                'wss://us-east.lycanchain.com',
                'wss://us-west.lycanchain.com',
                'wss://eu-north.lycanchain.com',
                'wss://eu-west.lycanchain.com',
                'wss://asia-southeast.lycanchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lycan Explorer',
            url: 'https://explorer.lycanchain.com'
        }
    }
}); //# sourceMappingURL=lycan.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lyra.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lyra = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.lyra = (0, defineChain_js_1.defineChain)({
    id: 957,
    name: 'Lyra Chain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.lyra.finance'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lyra Explorer',
            url: 'https://explorer.lyra.finance',
            apiUrl: 'https://explorer.lyra.finance/api/v2'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1935198
        }
    }
}); //# sourceMappingURL=lyra.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mainnet = (0, defineChain_js_1.defineChain)({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.merkle.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19_258_213
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14_353_601
        }
    }
}); //# sourceMappingURL=mainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mandala.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mandala = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mandala = (0, defineChain_js_1.defineChain)({
    id: 595,
    name: 'Mandala TC9',
    network: 'mandala',
    nativeCurrency: {
        name: 'Mandala',
        symbol: 'mACA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc-tc9.aca-staging.network'
            ],
            webSocket: [
                'wss://eth-rpc-tc9.aca-staging.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mandala Blockscout',
            url: 'https://blockscout.mandala.aca-staging.network',
            apiUrl: 'https://blockscout.mandala.aca-staging.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=mandala.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/manta.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.manta = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.manta = (0, defineChain_js_1.defineChain)({
    id: 169,
    name: 'Manta Pacific Mainnet',
    network: 'manta',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://pacific-rpc.manta.network/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Manta Explorer',
            url: 'https://pacific-explorer.manta.network',
            apiUrl: 'https://pacific-explorer.manta.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 332890
        }
    }
}); //# sourceMappingURL=manta.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantaSepoliaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mantaSepoliaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mantaSepoliaTestnet = (0, defineChain_js_1.defineChain)({
    id: 3_441_006,
    name: 'Manta Pacific Sepolia Testnet',
    network: 'manta-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://pacific-rpc.sepolia-testnet.manta.network/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Manta Sepolia Testnet Explorer',
            url: 'https://pacific-explorer.sepolia-testnet.manta.network',
            apiUrl: 'https://pacific-explorer.sepolia-testnet.manta.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca54918f7B525C8df894668846506767412b53E3',
            blockCreated: 479584
        }
    },
    testnet: true
}); //# sourceMappingURL=mantaSepoliaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mantaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mantaTestnet = (0, defineChain_js_1.defineChain)({
    id: 3_441_005,
    name: 'Manta Pacific Testnet',
    network: 'manta-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://manta-testnet.calderachain.xyz/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Manta Testnet Explorer',
            url: 'https://pacific-explorer.testnet.manta.network',
            apiUrl: 'https://pacific-explorer.testnet.manta.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C',
            blockCreated: 419915
        }
    },
    testnet: true
}); //# sourceMappingURL=mantaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantle.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mantle = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mantle = (0, defineChain_js_1.defineChain)({
    id: 5000,
    name: 'Mantle',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mantle.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mantle Explorer',
            url: 'https://mantlescan.xyz/',
            apiUrl: 'https://api.mantlescan.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 304717
        }
    }
}); //# sourceMappingURL=mantle.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantleSepoliaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mantleSepoliaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mantleSepoliaTestnet = (0, defineChain_js_1.defineChain)({
    id: 5003,
    name: 'Mantle Sepolia Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sepolia.mantle.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.sepolia.mantle.xyz/',
            apiUrl: 'https://explorer.sepolia.mantle.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4584012
        }
    },
    testnet: true
}); //# sourceMappingURL=mantleSepoliaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantleTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mantleTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mantleTestnet = (0, defineChain_js_1.defineChain)({
    id: 5001,
    name: 'Mantle Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.mantle.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
            apiUrl: 'https://explorer.testnet.mantle.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 561333
        }
    },
    testnet: true
}); //# sourceMappingURL=mantleTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mapProtocol.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapProtocol = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mapProtocol = (0, defineChain_js_1.defineChain)({
    id: 22776,
    name: 'MAP Protocol',
    nativeCurrency: {
        decimals: 18,
        name: 'MAPO',
        symbol: 'MAPO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.maplabs.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MAPO Scan',
            url: 'https://maposcan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=mapProtocol.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/matchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.matchain = (0, defineChain_js_1.defineChain)({
    id: 698,
    name: 'Matchain',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.matchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Matchain Scan',
            url: 'https://matchscan.io'
        }
    }
}); //# sourceMappingURL=matchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/matchainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.matchainTestnet = (0, defineChain_js_1.defineChain)({
    id: 699,
    name: 'Matchain Testnet',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.matchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Matchain Scan',
            url: 'https://testnet.matchscan.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=matchainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mchVerse.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mchVerse = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mchVerse = (0, defineChain_js_1.defineChain)({
    id: 29548,
    name: 'MCH Verse',
    nativeCurrency: {
        name: 'Oasys',
        symbol: 'OAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.oasys.mycryptoheroes.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MCH Verse Explorer',
            url: 'https://explorer.oasys.mycryptoheroes.net',
            apiUrl: 'https://explorer.oasys.mycryptoheroes.net/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=mchVerse.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/megaethTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.megaethTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.megaethTestnet = (0, defineChain_js_1.defineChain)({
    id: 6342,
    name: 'MegaETH Testnet',
    nativeCurrency: {
        name: 'MegaETH Testnet Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://carrot.megaeth.com/rpc'
            ],
            webSocket: [
                'wss://carrot.megaeth.com/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MegaETH Testnet Explorer',
            url: 'https://www.megaexplorer.xyz/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    },
    testnet: true
}); //# sourceMappingURL=megaethTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mekong.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mekong = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mekong = (0, defineChain_js_1.defineChain)({
    id: 7078815900,
    name: 'Mekong Pectra Devnet',
    nativeCurrency: {
        name: 'eth',
        symbol: 'eth',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mekong.ethpandaops.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Block Explorer',
            url: 'https://explorer.mekong.ethpandaops.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=mekong.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meld.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.meld = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.meld = (0, defineChain_js_1.defineChain)({
    id: 333000333,
    name: 'Meld',
    nativeCurrency: {
        decimals: 18,
        name: 'Meld',
        symbol: 'MELD'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-1.meld.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MELDscan',
            url: 'https://meldscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0x769ee5a8e82c15c1b6e358f62ac8eb6e3abe8dc5',
            blockCreated: 360069
        }
    }
}); //# sourceMappingURL=meld.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/memecore.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.memecore = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.memecore = (0, defineChain_js_1.defineChain)({
    id: 4352,
    name: 'MemeCore',
    nativeCurrency: {
        decimals: 18,
        name: 'M',
        symbol: 'M'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.memecore.net'
            ],
            webSocket: [
                'wss://ws.memecore.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MemeCore Explorer',
            url: 'https://memecorescan.io',
            apiUrl: 'https://api.memecorescan.io/api'
        },
        okx: {
            name: 'MemeCore Explorer',
            url: 'https://web3.okx.com/explorer/memecore'
        },
        memecore: {
            name: 'MemeCore Explorer',
            url: 'https://blockscout.memecore.com',
            apiUrl: 'https://blockscout.memecore.com/api'
        }
    }
}); //# sourceMappingURL=memecore.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/merlin.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merlin = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.merlin = (0, defineChain_js_1.defineChain)({
    id: 4200,
    name: 'Merlin',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.merlinchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://scan.merlinchain.io',
            apiUrl: 'https://scan.merlinchain.io/api'
        }
    }
}); //# sourceMappingURL=merlin.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/merlinErigonTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merlinErigonTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.merlinErigonTestnet = (0, defineChain_js_1.defineChain)({
    id: 4203,
    name: 'Merlin Erigon Testnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-erigon-rpc.merlinchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://testnet-erigon-scan.merlinchain.io',
            apiUrl: 'https://testnet-erigon-scan.merlinchain.io/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=merlinErigonTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metachain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metachain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metachain = (0, defineChain_js_1.defineChain)({
    id: 571,
    name: 'MetaChain Mainnet',
    nativeCurrency: {
        name: 'Metatime Coin',
        symbol: 'MTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.metatime.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MetaExplorer',
            url: 'https://explorer.metatime.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0000000000000000000000000000000000003001',
            blockCreated: 0
        }
    }
}); //# sourceMappingURL=metachain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metachainIstanbul.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metachainIstanbul = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metachainIstanbul = (0, defineChain_js_1.defineChain)({
    id: 1_453,
    name: 'MetaChain Istanbul',
    nativeCurrency: {
        name: 'Metatime Coin',
        symbol: 'MTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://istanbul-rpc.metachain.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MetaExplorer',
            url: 'https://istanbul-explorer.metachain.dev'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0000000000000000000000000000000000003001',
            blockCreated: 0
        }
    },
    testnet: true
}); //# sourceMappingURL=metachainIstanbul.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metadium.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metadium = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metadium = (0, defineChain_js_1.defineChain)({
    id: 11,
    name: 'Metadium Network',
    nativeCurrency: {
        decimals: 18,
        name: 'META',
        symbol: 'META'
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.metadium.com/prod'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Metadium Explorer',
            url: 'https://explorer.metadium.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=metadium.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metalL2.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metalL2 = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.metalL2 = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1750,
    name: 'Metal L2',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.metall2.com'
            ],
            webSocket: [
                'wss://rpc.metall2.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.metall2.com',
            apiUrl: 'https://explorer.metall2.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        },
        portal: {
            [sourceId]: {
                address: '0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=metalL2.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meter.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.meter = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.meter = (0, defineChain_js_1.defineChain)({
    id: 82,
    name: 'Meter',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.meter.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MeterScan',
            url: 'https://scan.meter.io'
        }
    }
}); //# sourceMappingURL=meter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meterTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.meterTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.meterTestnet = (0, defineChain_js_1.defineChain)({
    id: 83,
    name: 'Meter Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpctest.meter.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'MeterTestnetScan',
            url: 'https://scan-warringstakes.meter.io'
        }
    }
}); //# sourceMappingURL=meterTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metis = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metis = (0, defineChain_js_1.defineChain)({
    id: 1_088,
    name: 'Metis',
    nativeCurrency: {
        decimals: 18,
        name: 'Metis',
        symbol: 'METIS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://metis.rpc.hypersync.xyz',
                'https://metis-pokt.nodies.app',
                'https://api.blockeden.xyz/metis/67nCBdZQSH9z3YqDDjdm',
                'https://metis-andromeda.rpc.thirdweb.com',
                'https://metis-andromeda.gateway.tenderly.co',
                'https://metis.api.onfinality.io/public',
                'https://andromeda.metis.io/?owner=1088',
                'https://metis-mainnet.public.blastapi.io'
            ],
            webSocket: [
                'wss://metis-rpc.publicnode.com',
                'wss://metis.drpc.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Metis Explorer',
            url: 'https://explorer.metis.io',
            apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2338552
        }
    }
}); //# sourceMappingURL=metis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metisSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metisSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metisSepolia = (0, defineChain_js_1.defineChain)({
    id: 59902,
    name: 'Metis Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Test Metis',
        symbol: 'tMETIS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.metisdevops.link',
                'https://metis-sepolia-rpc.publicnode.com',
                'https://metis-sepolia.gateway.tenderly.co'
            ],
            webSocket: [
                'wss://metis-sepolia-rpc.publicnode.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Metis Sepolia Explorer',
            url: 'https://sepolia-explorer.metisdevops.link',
            apiUrl: 'https://sepolia-explorer.metisdevops.link/api-docs'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 224185
        }
    }
}); //# sourceMappingURL=metisSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metisGoerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.metisGoerli = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.metisGoerli = (0, defineChain_js_1.defineChain)({
    id: 599,
    name: 'Metis Goerli',
    nativeCurrency: {
        decimals: 18,
        name: 'Metis Goerli',
        symbol: 'METIS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://goerli.gateway.metisdevops.link'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Metis Goerli Explorer',
            url: 'https://goerli.explorer.metisdevops.link',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1006207
        }
    }
}); //# sourceMappingURL=metisGoerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mev.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mev = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mev = (0, defineChain_js_1.defineChain)({
    id: 7518,
    name: 'MEVerse Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MEVerse',
        symbol: 'MEV'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.meversemainnet.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://www.meversescan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 86881340
        }
    }
}); //# sourceMappingURL=mev.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mevTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mevTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mevTestnet = (0, defineChain_js_1.defineChain)({
    id: 4759,
    name: 'MEVerse Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MEVerse',
        symbol: 'MEV'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.meversetestnet.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://testnet.meversescan.io/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 64371115
        }
    },
    testnet: true
}); //# sourceMappingURL=mevTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mint.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mint = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mint = (0, defineChain_js_1.defineChain)({
    id: 185,
    name: 'Mint Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mintchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mintchain explorer',
            url: 'https://explorer.mintchain.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=mint.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mintSepoliaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mintSepoliaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mintSepoliaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1686,
    name: 'Mint Sepolia Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.mintchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mintchain Testnet explorer',
            url: 'https://testnet-explorer.mintchain.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=mintSepoliaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mitosisTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mitosisTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.mitosisTestnet = (0, defineChain_js_1.defineChain)({
    id: 124_832,
    name: 'Mitosis Testnet',
    nativeCurrency: {
        name: 'MITO',
        symbol: 'MITO',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.mitosis.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Mitosis testnet explorer',
            url: 'https://testnet.mitosiscan.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=mitosisTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mode = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.mode = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 34443,
    name: 'Mode Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.mode.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Modescan',
            url: 'https://modescan.io'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2465882
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x4317ba146D4933D889518a3e5E11Fe7a53199b04'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x8B34b14c7c7123459Cf3076b8Cb929BE097d0C07'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x735aDBbE72226BD52e818E7181953f42E3b0FF21'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=mode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/modeTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modeTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.modeTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 919,
    name: 'Mode Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.mode.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia.explorer.mode.network',
            apiUrl: 'https://sepolia.explorer.mode.network/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x2634BD65ba27AB63811c74A63118ACb312701Bfa',
                blockCreated: 3778393
            }
        },
        portal: {
            [sourceId]: {
                address: '0x320e1580effF37E008F1C92700d1eBa47c1B23fD',
                blockCreated: 3778395
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xbC5C679879B2965296756CD959C3C739769995E2',
                blockCreated: 3778392
            }
        },
        multicall3: {
            address: '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF',
            blockCreated: 3019007
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=modeTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/monadTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.monadTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.monadTestnet = (0, defineChain_js_1.defineChain)({
    id: 10_143,
    name: 'Monad Testnet',
    nativeCurrency: {
        name: 'Testnet MON Token',
        symbol: 'MON',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.monad.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Monad Testnet explorer',
            url: 'https://testnet.monadexplorer.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 251449
        }
    },
    testnet: true
}); //# sourceMappingURL=monadTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbaseAlpha.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moonbaseAlpha = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.moonbaseAlpha = (0, defineChain_js_1.defineChain)({
    id: 1287,
    name: 'Moonbase Alpha',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.api.moonbase.moonbeam.network'
            ],
            webSocket: [
                'wss://wss.api.moonbase.moonbeam.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonbase.moonscan.io',
            apiUrl: 'https://moonbase.moonscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1850686
        }
    },
    testnet: true
}); //# sourceMappingURL=moonbaseAlpha.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbeam.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moonbeam = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.moonbeam = (0, defineChain_js_1.defineChain)({
    id: 1284,
    name: 'Moonbeam',
    nativeCurrency: {
        decimals: 18,
        name: 'GLMR',
        symbol: 'GLMR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://moonbeam.public.blastapi.io'
            ],
            webSocket: [
                'wss://moonbeam.public.blastapi.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonscan.io',
            apiUrl: 'https://api-moonbeam.moonscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 609002
        }
    },
    testnet: false
}); //# sourceMappingURL=moonbeam.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbeamDev.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moonbeamDev = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.moonbeamDev = (0, defineChain_js_1.defineChain)({
    id: 1281,
    name: 'Moonbeam Development Node',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:9944'
            ],
            webSocket: [
                'wss://127.0.0.1:9944'
            ]
        }
    }
}); //# sourceMappingURL=moonbeamDev.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonriver.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moonriver = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.moonriver = (0, defineChain_js_1.defineChain)({
    id: 1285,
    name: 'Moonriver',
    nativeCurrency: {
        decimals: 18,
        name: 'MOVR',
        symbol: 'MOVR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://moonriver.public.blastapi.io'
            ],
            webSocket: [
                'wss://moonriver.public.blastapi.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonriver.moonscan.io',
            apiUrl: 'https://api-moonriver.moonscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1597904
        }
    },
    testnet: false
}); //# sourceMappingURL=moonriver.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morph.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.morph = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.morph = (0, defineChain_js_1.defineChain)({
    id: 2818,
    name: 'Morph',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.morphl2.io'
            ],
            webSocket: [
                'wss://rpc.morphl2.io:8443'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Morph Explorer',
            url: 'https://explorer.morphl2.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=morph.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morphHolesky.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.morphHolesky = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.morphHolesky = (0, defineChain_js_1.defineChain)({
    id: 2810,
    name: 'Morph Holesky',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-quicknode-holesky.morphl2.io'
            ],
            webSocket: [
                'wss://rpc-quicknode-holesky.morphl2.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Morph Holesky Explorer',
            url: 'https://explorer-holesky.morphl2.io',
            apiUrl: 'https://explorer-api-holesky.morphl2.io/api?'
        }
    },
    testnet: true
}); //# sourceMappingURL=morphHolesky.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morphSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.morphSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.morphSepolia = (0, defineChain_js_1.defineChain)({
    id: 2710,
    name: 'Morph Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.morphl2.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Morph Testnet Explorer',
            url: 'https://explorer-testnet.morphl2.io',
            apiUrl: 'https://explorer-api-testnet.morphl2.io/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=morphSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nahmii.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nahmii = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nahmii = (0, defineChain_js_1.defineChain)({
    id: 5551,
    name: 'Nahmii 2 Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://l2.nahmii.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Nahmii 2 Explorer',
            url: 'https://explorer.n2.nahmii.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=nahmii.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nautilus.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nautilus = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nautilus = (0, defineChain_js_1.defineChain)({
    id: 22222,
    name: 'Nautilus Mainnet',
    nativeCurrency: {
        name: 'ZBC',
        symbol: 'ZBC',
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.nautilus.nautchain.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NautScan',
            url: 'https://nautscan.com'
        }
    }
}); //# sourceMappingURL=nautilus.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/near.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.near = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.near = (0, defineChain_js_1.defineChain)({
    id: 397,
    name: 'NEAR Protocol',
    nativeCurrency: {
        decimals: 18,
        name: 'NEAR',
        symbol: 'NEAR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc.mainnet.near.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NEAR Explorer',
            url: 'https://eth-explorer.near.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=near.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nearTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nearTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nearTestnet = (0, defineChain_js_1.defineChain)({
    id: 398,
    name: 'NEAR Protocol Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'NEAR',
        symbol: 'NEAR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc.testnet.near.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NEAR Explorer',
            url: 'https://eth-explorer-testnet.near.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=nearTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neonDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.neonDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.neonDevnet = (0, defineChain_js_1.defineChain)({
    id: 245_022_926,
    name: 'Neon EVM DevNet',
    nativeCurrency: {
        name: 'NEON',
        symbol: 'NEON',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://devnet.neonevm.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Neonscan',
            url: 'https://devnet.neonscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 205206112
        }
    },
    testnet: true
}); //# sourceMappingURL=neonDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neonMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.neonMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.neonMainnet = (0, defineChain_js_1.defineChain)({
    id: 245_022_934,
    network: 'neonMainnet',
    name: 'Neon EVM MainNet',
    nativeCurrency: {
        name: 'NEON',
        symbol: 'NEON',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://neon-proxy-mainnet.solana.p2p.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Neonscan',
            url: 'https://neonscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 206545524
        }
    },
    testnet: false
}); //# sourceMappingURL=neonMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neoxMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.neoxMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.neoxMainnet = (0, defineChain_js_1.defineChain)({
    id: 47763,
    name: 'Neo X Mainnet',
    nativeCurrency: {
        name: 'Gas',
        symbol: 'GAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-1.rpc.banelabs.org',
                'https://mainnet-2.rpc.banelabs.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Neo X - Explorer',
            url: 'https://xexplorer.neo.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=neoxMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neoxT4.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.neoxT4 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.neoxT4 = (0, defineChain_js_1.defineChain)({
    id: 12227332,
    name: 'Neo X Testnet T4',
    nativeCurrency: {
        name: 'Gas',
        symbol: 'GAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.rpc.banelabs.org/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'neox-scan',
            url: 'https://xt4scan.ngd.network'
        }
    },
    testnet: true
}); //# sourceMappingURL=neoxT4.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/newton.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.newton = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.newton = (0, defineChain_js_1.defineChain)({
    id: 1012,
    name: 'Newton',
    nativeCurrency: {
        name: 'Newton',
        symbol: 'NEW',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://global.rpc.mainnet.newtonproject.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NewFi explorer',
            url: 'https://explorer.newtonproject.org/'
        }
    },
    testnet: false
}); //# sourceMappingURL=newton.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nexi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nexi = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nexi = (0, defineChain_js_1.defineChain)({
    id: 4242,
    name: 'Nexi',
    nativeCurrency: {
        name: 'Nexi',
        symbol: 'NEXI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.chain.nexi.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NexiScan',
            url: 'https://www.nexiscan.com',
            apiUrl: 'https://www.nexiscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E',
            blockCreated: 25770160
        }
    }
}); //# sourceMappingURL=nexi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nexilix.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nexilix = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nexilix = (0, defineChain_js_1.defineChain)({
    id: 240,
    name: 'Nexilix Smart Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Nexilix',
        symbol: 'NEXILIX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpcurl.pos.nexilix.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NexilixScan',
            url: 'https://scan.nexilix.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244',
            blockCreated: 74448
        }
    }
}); //# sourceMappingURL=nexilix.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nibiru.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nibiru = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.nibiru = (0, defineChain_js_1.defineChain)({
    id: 6900,
    name: 'Nibiru',
    nativeCurrency: {
        decimals: 18,
        name: 'NIBI',
        symbol: 'NIBI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-rpc.nibiru.fi'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'NibiScan',
            url: 'https://nibiscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 19587573
        }
    }
}); //# sourceMappingURL=nibiru.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oasisTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oasisTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.oasisTestnet = (0, defineChain_js_1.defineChain)({
    id: 4090,
    network: 'oasis-testnet',
    name: 'Oasis Testnet',
    nativeCurrency: {
        name: 'Fasttoken',
        symbol: 'FTN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc1.oasis.bahamutchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://oasis.ftnscan.com',
            apiUrl: 'https://oasis.ftnscan.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=oasisTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oasys.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oasys = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.oasys = (0, defineChain_js_1.defineChain)({
    id: 248,
    name: 'Oasys',
    nativeCurrency: {
        name: 'Oasys',
        symbol: 'OAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.oasys.games'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'OasysScan',
            url: 'https://scan.oasys.games',
            apiUrl: 'https://scan.oasys.games/api'
        }
    }
}); //# sourceMappingURL=oasys.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/odysseyTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.odysseyTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.odysseyTestnet = (0, defineChain_js_1.defineChain)({
    id: 911867,
    name: 'Odyssey Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://odyssey.ithaca.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Odyssey Explorer',
            url: 'https://odyssey-explorer.ithaca.xyz',
            apiUrl: 'https://odyssey-explorer.ithaca.xyz/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=odysseyTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/okc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.okc = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.okc = (0, defineChain_js_1.defineChain)({
    id: 66,
    name: 'OKC',
    nativeCurrency: {
        decimals: 18,
        name: 'OKT',
        symbol: 'OKT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://exchainrpc.okex.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'oklink',
            url: 'https://www.oklink.com/okc'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 10364792
        }
    }
}); //# sourceMappingURL=okc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omax.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.omax = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.omax = (0, defineChain_js_1.defineChain)({
    id: 311,
    name: 'Omax Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OMAX',
        symbol: 'OMAX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainapi.omaxray.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Omax Explorer',
            url: 'https://omaxscan.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=omax.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omni.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.omni = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.omni = (0, defineChain_js_1.defineChain)({
    id: 166,
    name: 'Omni',
    nativeCurrency: {
        name: 'Omni',
        symbol: 'OMNI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.omni.network'
            ],
            webSocket: [
                'wss://mainnet.omni.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'OmniScan',
            url: 'https://omniscan.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=omni.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omniOmega.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.omniOmega = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.omniOmega = (0, defineChain_js_1.defineChain)({
    id: 164,
    name: 'Omni Omega',
    nativeCurrency: {
        name: 'Omni',
        symbol: 'OMNI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://omega.omni.network'
            ],
            webSocket: [
                'wss://omega.omni.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Omega OmniScan',
            url: 'https://omega.omniscan.network/'
        }
    },
    testnet: true
}); //# sourceMappingURL=omniOmega.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oneWorld.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oneWorld = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.oneWorld = (0, defineChain_js_1.defineChain)({
    id: 309075,
    name: 'One World Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OWCT',
        symbol: 'OWCT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.oneworldchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'One World Explorer',
            url: 'https://mainnet.oneworldchain.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=oneWorld.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oortmainnetDev.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oortMainnetDev = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.oortMainnetDev = (0, defineChain_js_1.defineChain)({
    id: 9700,
    name: 'OORT MainnetDev',
    nativeCurrency: {
        decimals: 18,
        name: 'OORT',
        symbol: 'OORT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://dev-rpc.oortech.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'OORT MainnetDev Explorer',
            url: 'https://dev-scan.oortech.com'
        }
    }
}); //# sourceMappingURL=oortmainnetDev.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/opBNB.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.opBNB = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 56;
exports.opBNB = (0, defineChain_js_1.defineChain)({
    id: 204,
    name: 'opBNB',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://opbnb-mainnet-rpc.bnbchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'opBNB (BSCScan)',
            url: 'https://opbnb.bscscan.com',
            apiUrl: 'https://api-opbnb.bscscan.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 512881
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x153CAB79f4767E2ff862C94aa49573294B13D169'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x1876EA7702C0ad0C6A2ae6036DE7733edfBca519'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=opBNB.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/opBNBTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.opBNBTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 97;
exports.opBNBTestnet = (0, defineChain_js_1.defineChain)({
    id: 5611,
    name: 'opBNB Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBNB',
        symbol: 'tBNB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://opbnb-testnet-rpc.bnbchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'opbnbscan',
            url: 'https://testnet.opbnbscan.com'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3705108
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xFf2394Bb843012562f4349C6632a0EcB92fC8810'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x4386C8ABf2009aC0c263462Da568DD9d46e52a31'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=opBNBTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimism.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.optimism = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.optimism = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 10,
    name: 'OP Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.optimism.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Optimism Explorer',
            url: 'https://optimistic.etherscan.io',
            apiUrl: 'https://api-optimistic.etherscan.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0xe5965Ab5962eDc7477C8520243A95517CD252fA9'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xdfe97868233d1aa22e815a266982f2cf17685a27'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263
        },
        portal: {
            [sourceId]: {
                address: '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=optimism.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimismGoerli.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.optimismGoerli = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 5;
exports.optimismGoerli = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 420,
    name: 'Optimism Goerli',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://goerli.optimism.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli-optimism.etherscan.io',
            apiUrl: 'https://goerli-optimism.etherscan.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 49461
        },
        portal: {
            [sourceId]: {
                address: '0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x636Af16bf2f682dD3109e60102b8E1A089FedAa8'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=optimismGoerli.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimismSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.optimismSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.optimismSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 11155420,
    name: 'OP Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.optimism.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://optimism-sepolia.blockscout.com',
            apiUrl: 'https://optimism-sepolia.blockscout.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1620204
        },
        portal: {
            [sourceId]: {
                address: '0x16Fc5058F25648194471939df75CF27A2fdC48BC'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=optimismSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optopia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.optopia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.optopia = (0, defineChain_js_1.defineChain)({
    id: 62050,
    name: 'Optopia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet.optopia.ai'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Optopia Explorer',
            url: 'https://scan.optopia.ai'
        }
    },
    testnet: false
}); //# sourceMappingURL=optopia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optopiaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.optopiaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.optopiaTestnet = (0, defineChain_js_1.defineChain)({
    id: 62049,
    name: 'Optopia Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.optopia.ai'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Optopia Explorer',
            url: 'https://scan-testnet.optopia.ai'
        }
    },
    testnet: true
}); //# sourceMappingURL=optopiaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/orderly.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.orderly = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.orderly = (0, defineChain_js_1.defineChain)({
    id: 291,
    name: 'Orderly',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.orderly.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Orderly Explorer',
            url: 'https://explorer.orderly.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=orderly.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/orderlySepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.orderlySepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.orderlySepolia = (0, defineChain_js_1.defineChain)({
    id: 4460,
    name: 'Orderly Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://l2-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Orderly Explorer',
            url: 'https://explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=orderlySepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/otimDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.otimDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.otimDevnet = (0, defineChain_js_1.defineChain)({
    id: 41144114,
    name: 'Otim Devnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://devnet.otim.xyz'
            ]
        }
    },
    contracts: {
        batchInvoker: {
            address: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
        }
    }
}); //# sourceMappingURL=otimDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/palm.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.palm = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.palm = (0, defineChain_js_1.defineChain)({
    id: 11_297_108_109,
    name: 'Palm',
    nativeCurrency: {
        decimals: 18,
        name: 'PALM',
        symbol: 'PALM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://palm-mainnet.public.blastapi.io'
            ],
            webSocket: [
                'wss://palm-mainnet.public.blastapi.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Chainlens',
            url: 'https://palm.chainlens.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15429248
        }
    }
}); //# sourceMappingURL=palm.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/palmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.palmTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.palmTestnet = (0, defineChain_js_1.defineChain)({
    id: 11_297_108_099,
    name: 'Palm Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'PALM',
        symbol: 'PALM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://palm-mainnet.public.blastapi.io'
            ],
            webSocket: [
                'wss://palm-mainnet.public.blastapi.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Chainlens',
            url: 'https://palm.chainlens.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15429248
        }
    },
    testnet: true
}); //# sourceMappingURL=palmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/peaq.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.peaq = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.peaq = (0, defineChain_js_1.defineChain)({
    id: 3338,
    name: 'Peaq',
    nativeCurrency: {
        decimals: 18,
        name: 'peaq',
        symbol: 'PEAQ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://peaq-rpc.publicnode.com',
                'https://peaq.api.onfinality.io/public',
                'https://peaq-rpc.dwellir.com',
                'https://evm.peaq.network'
            ],
            webSocket: [
                'wss://peaq-rpc.publicnode.com',
                'wss://peaq.api.onfinality.io/public',
                'wss://peaq-rpc.dwellir.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Subscan',
            url: 'https://peaq.subscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3566354
        }
    }
}); //# sourceMappingURL=peaq.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pgn.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pgn = void 0;
const formatters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/formatters.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.pgn = (0, defineChain_js_1.defineChain)({
    id: 424,
    network: 'pgn',
    name: 'PGN',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.publicgoods.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PGN Explorer',
            url: 'https://explorer.publicgoods.network',
            apiUrl: 'https://explorer.publicgoods.network/api'
        }
    },
    contracts: {
        l2OutputOracle: {
            [sourceId]: {
                address: '0x9E6204F750cD866b299594e2aC9eA824E2e5f95c'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3380209
        },
        portal: {
            [sourceId]: {
                address: '0xb26Fd985c5959bBB382BAFdD0b879E149e48116c'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b'
            }
        }
    },
    formatters: formatters_js_1.formatters,
    sourceId
}); //# sourceMappingURL=pgn.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pgnTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pgnTestnet = void 0;
const formatters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/formatters.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.pgnTestnet = (0, defineChain_js_1.defineChain)({
    id: 58008,
    network: 'pgn-testnet',
    name: 'PGN ',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.publicgoods.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PGN Testnet Explorer',
            url: 'https://explorer.sepolia.publicgoods.network',
            apiUrl: 'https://explorer.sepolia.publicgoods.network/api'
        }
    },
    contracts: {
        l2OutputOracle: {
            [sourceId]: {
                address: '0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe'
            }
        },
        portal: {
            [sourceId]: {
                address: '0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3754925
        }
    },
    formatters: formatters_js_1.formatters,
    sourceId,
    testnet: true
}); //# sourceMappingURL=pgnTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/phoenix.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.phoenix = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.phoenix = (0, defineChain_js_1.defineChain)({
    id: 13381,
    name: 'Phoenix Blockchain',
    nativeCurrency: {
        name: 'Phoenix',
        symbol: 'PHX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.phoenixplorer.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Phoenixplorer',
            url: 'https://phoenixplorer.com',
            apiUrl: 'https://phoenixplorer.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x498cF757a575cFF2c2Ed9f532f56Efa797f86442',
            blockCreated: 5620192
        }
    }
}); //# sourceMappingURL=phoenix.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/planq.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.planq = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.planq = (0, defineChain_js_1.defineChain)({
    id: 7070,
    name: 'Planq Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'PLQ',
        symbol: 'PLQ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://planq-rpc.nodies.app',
                'https://evm-rpc.planq.network',
                'https://jsonrpc.planq.nodestake.top'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Planq Explorer',
            url: 'https://evm.planq.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 8470015
        }
    },
    testnet: false
}); //# sourceMappingURL=planq.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/playfiAlbireo.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.playfiAlbireo = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.playfiAlbireo = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1_612_127,
    name: 'PlayFi Albireo Testnet',
    network: 'albireo',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://albireo-rpc.playfi.ai'
            ],
            webSocket: [
                'wss://albireo-rpc-ws.playfi.ai/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PlayFi Albireo Explorer',
            url: 'https://albireo-explorer.playfi.ai'
        }
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963'
        }
    },
    testnet: true
}); //# sourceMappingURL=playfiAlbireo.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plinga.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plinga = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.plinga = (0, defineChain_js_1.defineChain)({
    id: 242,
    name: 'Plinga',
    nativeCurrency: {
        name: 'Plinga',
        symbol: 'PLINGA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpcurl.mainnet.plgchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Plgscan',
            url: 'https://www.plgscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0989576160f2e7092908BB9479631b901060b6e4',
            blockCreated: 204489
        }
    }
}); //# sourceMappingURL=plinga.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plume.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plume = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.plume = (0, defineChain_js_1.defineChain)({
    id: 98_865,
    name: 'Plume (Legacy)',
    nativeCurrency: {
        name: 'Plume Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.plumenetwork.xyz'
            ],
            webSocket: [
                'wss://rpc.plumenetwork.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.plumenetwork.xyz',
            apiUrl: 'https://explorer.plumenetwork.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 48_577
        }
    },
    sourceId
}); //# sourceMappingURL=plume.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plumeDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.plumeDevnet = (0, defineChain_js_1.defineChain)({
    id: 98_864,
    name: 'Plume Devnet (Legacy)',
    nativeCurrency: {
        name: 'Plume Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://test-rpc.plumenetwork.xyz'
            ],
            webSocket: [
                'wss://test-rpc.plumenetwork.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://test-explorer.plumenetwork.xyz',
            apiUrl: 'https://test-explorer.plumenetwork.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 481_948
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=plumeDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plumeMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.plumeMainnet = (0, defineChain_js_1.defineChain)({
    id: 98_866,
    name: 'Plume',
    nativeCurrency: {
        name: 'Plume',
        symbol: 'PLUME',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.plume.org'
            ],
            webSocket: [
                'wss://rpc.plume.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.plume.org',
            apiUrl: 'https://explorer.plume.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 39_679
        }
    },
    sourceId
}); //# sourceMappingURL=plumeMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plumeSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.plumeSepolia = (0, defineChain_js_1.defineChain)({
    id: 98_867,
    name: 'Plume Testnet',
    nativeCurrency: {
        name: 'Plume',
        symbol: 'PLUME',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.plume.org'
            ],
            webSocket: [
                'wss://testnet-rpc.plume.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer.plume.org',
            apiUrl: 'https://testnet-explorer.plume.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 199_712
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=plumeSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plumeTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.plumeTestnet = (0, defineChain_js_1.defineChain)({
    id: 161_221_135,
    name: 'Plume Testnet (Legacy)',
    nativeCurrency: {
        name: 'Plume Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.plumenetwork.xyz/http'
            ],
            webSocket: [
                'wss://testnet-rpc.plumenetwork.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer.plumenetwork.xyz',
            apiUrl: 'https://testnet-explorer.plumenetwork.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 6_022_332
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=plumeTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polterTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polterTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polterTestnet = (0, defineChain_js_1.defineChain)({
    id: 631571,
    name: 'Polter Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Polter GHST',
        symbol: 'GHST'
    },
    rpcUrls: {
        default: {
            http: [
                'https://geist-polter.g.alchemy.com/public'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://polter-testnet.explorer.alchemy.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11245
        }
    },
    testnet: true
}); //# sourceMappingURL=polterTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygon = (0, defineChain_js_1.defineChain)({
    id: 137,
    name: 'Polygon',
    nativeCurrency: {
        name: 'POL',
        symbol: 'POL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://polygon-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
            apiUrl: 'https://api.polygonscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160
        }
    }
}); //# sourceMappingURL=polygon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonAmoy.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygonAmoy = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygonAmoy = (0, defineChain_js_1.defineChain)({
    id: 80_002,
    name: 'Polygon Amoy',
    nativeCurrency: {
        name: 'POL',
        symbol: 'POL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-amoy.polygon.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://amoy.polygonscan.com',
            apiUrl: 'https://api-amoy.polygonscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3127388
        }
    },
    testnet: true
}); //# sourceMappingURL=polygonAmoy.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonMumbai.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygonMumbai = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygonMumbai = (0, defineChain_js_1.defineChain)({
    id: 80_001,
    name: 'Polygon Mumbai',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://80001.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://mumbai.polygonscan.com',
            apiUrl: 'https://api-testnet.polygonscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160
        }
    },
    testnet: true
}); //# sourceMappingURL=polygonMumbai.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvm.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygonZkEvm = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygonZkEvm = (0, defineChain_js_1.defineChain)({
    id: 1101,
    name: 'Polygon zkEVM',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://zkevm-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://zkevm.polygonscan.com',
            apiUrl: 'https://api-zkevm.polygonscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 57746
        }
    }
}); //# sourceMappingURL=polygonZkEvm.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvmCardona.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygonZkEvmCardona = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygonZkEvmCardona = (0, defineChain_js_1.defineChain)({
    id: 2442,
    name: 'Polygon zkEVM Cardona',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.cardona.zkevm-rpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://cardona-zkevm.polygonscan.com',
            apiUrl: 'https://cardona-zkevm.polygonscan.com/api'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 114091
        }
    }
}); //# sourceMappingURL=polygonZkEvmCardona.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polygonZkEvmTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polygonZkEvmTestnet = (0, defineChain_js_1.defineChain)({
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.public.zkevm-test.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://testnet-zkevm.polygonscan.com',
            apiUrl: 'https://testnet-zkevm.polygonscan.com/api'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 525686
        }
    }
}); //# sourceMappingURL=polygonZkEvmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polynomial.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polynomial = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polynomial = (0, defineChain_js_1.defineChain)({
    id: 8008,
    name: 'Polynomial',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.polynomial.fi'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Polynomial Scan',
            url: 'https://polynomialscan.io'
        }
    },
    testnet: false,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        }
    }
}); //# sourceMappingURL=polynomial.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polynomialSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polynomialSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.polynomialSepolia = (0, defineChain_js_1.defineChain)({
    id: 80008,
    name: 'Polynomia Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sepolia.polynomial.fi'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Polynomial Scan',
            url: 'https://sepolia.polynomialscan.io'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        }
    }
}); //# sourceMappingURL=polynomialSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/premiumBlock.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.premiumBlockTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.premiumBlockTestnet = (0, defineChain_js_1.defineChain)({
    id: 23_023,
    name: 'PremiumBlock Testnet',
    nativeCurrency: {
        name: 'Premium Block',
        symbol: 'PBLK',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.premiumblock.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PremiumBlocks Explorer',
            url: 'https://scan.premiumblock.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=premiumBlock.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pulsechain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pulsechain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.pulsechain = (0, defineChain_js_1.defineChain)({
    id: 369,
    name: 'PulseChain',
    nativeCurrency: {
        name: 'Pulse',
        symbol: 'PLS',
        decimals: 18
    },
    testnet: false,
    rpcUrls: {
        default: {
            http: [
                'https://rpc.pulsechain.com'
            ],
            webSocket: [
                'wss://ws.pulsechain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PulseScan',
            url: 'https://scan.pulsechain.com',
            apiUrl: 'https://api.scan.pulsechain.com/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601
        }
    }
}); //# sourceMappingURL=pulsechain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pulsechainV4.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pulsechainV4 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.pulsechainV4 = (0, defineChain_js_1.defineChain)({
    id: 943,
    name: 'PulseChain V4',
    testnet: true,
    nativeCurrency: {
        name: 'V4 Pulse',
        symbol: 'v4PLS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.v4.testnet.pulsechain.com'
            ],
            webSocket: [
                'wss://ws.v4.testnet.pulsechain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'PulseScan',
            url: 'https://scan.v4.testnet.pulsechain.com',
            apiUrl: 'https://scan.v4.testnet.pulsechain.com/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601
        }
    }
}); //# sourceMappingURL=pulsechainV4.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pumpfiTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pumpfiTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.pumpfiTestnet = (0, defineChain_js_1.defineChain)({
    id: 490_092,
    name: 'Pumpfi Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'PMPT',
        symbol: 'PMPT'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc1testnet.pumpfi.me'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Pumpfi Testnet Scan',
            url: 'https://testnetscan.pumpfi.me'
        }
    },
    testnet: true
}); //# sourceMappingURL=pumpfiTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pyrope.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pyrope = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11155111;
exports.pyrope = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    name: 'Pyrope Testnet',
    testnet: true,
    id: 695569,
    sourceId,
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.pyropechain.com'
            ],
            webSocket: [
                'wss://rpc.pyropechain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://pyrope.blockscout.com'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l1StandardBridge: {
            [sourceId]: {
                address: '0xC24932c31D9621aE9e792576152B7ef010cFC2F8'
            }
        }
    }
}); //# sourceMappingURL=pyrope.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ql1.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ql1 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ql1 = (0, defineChain_js_1.defineChain)({
    id: 766,
    name: 'QL1',
    nativeCurrency: {
        decimals: 18,
        name: 'QOM',
        symbol: 'QOM'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.qom.one'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ql1 Explorer',
            url: 'https://scan.qom.one'
        }
    },
    contracts: {
        multicall3: {
            address: '0x7A52370716ea730585884F5BDB0f6E60C39b8C64'
        }
    },
    testnet: false
}); //# sourceMappingURL=ql1.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/qMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.qMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.qMainnet = (0, defineChain_js_1.defineChain)({
    id: 35441,
    name: 'Q Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.q.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Q Mainnet Explorer',
            url: 'https://explorer.q.org',
            apiUrl: 'https://explorer.q.org/api'
        }
    }
}); //# sourceMappingURL=qMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/qTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.qTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.qTestnet = (0, defineChain_js_1.defineChain)({
    id: 35443,
    name: 'Q Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.qtestnet.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Q Testnet Explorer',
            url: 'https://explorer.qtestnet.org',
            apiUrl: 'https://explorer.qtestnet.org/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=qTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/real.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.real = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.real = (0, defineChain_js_1.defineChain)({
    id: 111188,
    name: 're.al',
    nativeCurrency: {
        name: 'reETH',
        decimals: 18,
        symbol: 'reETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.realforreal.gelato.digital'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 're.al Explorer',
            url: 'https://explorer.re.al',
            apiUrl: 'https://explorer.re.al/api/v2'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 695
        }
    }
}); //# sourceMappingURL=real.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redbellyMainnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redbellyMainnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.redbellyMainnet = (0, defineChain_js_1.defineChain)({
    id: 151,
    name: 'Redbelly Network Mainnet',
    nativeCurrency: {
        name: 'Redbelly Native Coin',
        symbol: 'RBNT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://governors.mainnet.redbelly.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Routescan',
            url: 'https://redbelly.routescan.io',
            apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/151/etherscan/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=redbellyMainnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redbellyTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redbellyTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.redbellyTestnet = (0, defineChain_js_1.defineChain)({
    id: 153,
    name: 'Redbelly Network Testnet',
    nativeCurrency: {
        name: 'Redbelly Native Coin',
        symbol: 'RBNT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://governors.testnet.redbelly.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Routescan',
            url: 'https://redbelly.testnet.routescan.io',
            apiUrl: 'https://api.routescan.io/v2/network/testnet/evm/153_2/etherscan/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=redbellyTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redstone.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redstone = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.redstone = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    name: 'Redstone',
    id: 690,
    sourceId,
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.redstonechain.com'
            ],
            webSocket: [
                'wss://rpc.redstonechain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.redstone.xyz'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae',
                blockCreated: 19578329
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xa426A052f657AEEefc298b3B5c35a470e4739d69',
                blockCreated: 19578337
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69',
                blockCreated: 19578331
            }
        }
    }
}); //# sourceMappingURL=redstone.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rei.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rei = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rei = (0, defineChain_js_1.defineChain)({
    id: 47805,
    name: 'REI Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'REI',
        symbol: 'REI'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.rei.network'
            ],
            webSocket: [
                'wss://rpc.rei.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'REI Scan',
            url: 'https://scan.rei.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=rei.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/reyaNetwork.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reyaNetwork = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.reyaNetwork = (0, defineChain_js_1.defineChain)({
    id: 1729,
    name: 'Reya Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.reya.network'
            ],
            webSocket: [
                'wss://ws.reya.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Reya Network Explorer',
            url: 'https://explorer.reya.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=reyaNetwork.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/reddioSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reddioSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.reddioSepolia = (0, defineChain_js_1.defineChain)({
    id: 50341,
    name: 'Reddio Sepolia',
    nativeCurrency: {
        name: 'Reddio',
        symbol: 'RED',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://reddio-dev.reddio.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Reddioscan',
            url: 'https://reddio-devnet.l2scan.co',
            apiUrl: 'https://reddio-devnet.l2scan.co/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=reddioSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/riseTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.riseTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.riseTestnet = (0, defineChain_js_1.defineChain)({
    id: 11_155_931,
    name: 'RISE Testnet',
    nativeCurrency: {
        name: 'RISE Testnet Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.riselabs.xyz'
            ],
            webSocket: [
                'wss://testnet.riselabs.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.testnet.riselabs.xyz/',
            apiUrl: 'https://explorer.testnet.riselabs.xyz/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        }
    },
    testnet: true
}); //# sourceMappingURL=riseTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rivalz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rivalz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rivalz = (0, defineChain_js_1.defineChain)({
    id: 753,
    name: 'Rivalz',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rivalz.calderachain.xyz/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Rivalz Caldera Explorer',
            url: 'https://rivalz.calderaexplorer.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=rivalz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rollux.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rollux = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rollux = (0, defineChain_js_1.defineChain)({
    id: 570,
    name: 'Rollux Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.rollux.com'
            ],
            webSocket: [
                'wss://rpc.rollux.com/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RolluxExplorer',
            url: 'https://explorer.rollux.com',
            apiUrl: 'https://explorer.rollux.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 119222
        }
    }
}); //# sourceMappingURL=rollux.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rolluxTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rolluxTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rolluxTestnet = (0, defineChain_js_1.defineChain)({
    id: 57000,
    name: 'Rollux Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-tanenbaum.rollux.com/'
            ],
            webSocket: [
                'wss://rpc-tanenbaum.rollux.com/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RolluxTestnetExplorer',
            url: 'https://rollux.tanenbaum.io',
            apiUrl: 'https://rollux.tanenbaum.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1813675
        }
    }
}); //# sourceMappingURL=rolluxTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ronin.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ronin = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ronin = (0, defineChain_js_1.defineChain)({
    id: 2020,
    name: 'Ronin',
    nativeCurrency: {
        name: 'RON',
        symbol: 'RON',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.roninchain.com/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ronin Explorer',
            url: 'https://app.roninchain.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 26023535
        }
    }
}); //# sourceMappingURL=ronin.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/root.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.root = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.root = (0, defineChain_js_1.defineChain)({
    id: 7668,
    name: 'The Root Network',
    nativeCurrency: {
        decimals: 18,
        name: 'XRP',
        symbol: 'XRP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://root.rootnet.live/archive'
            ],
            webSocket: [
                'wss://root.rootnet.live/archive/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Rootscan',
            url: 'https://rootscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xc9C2E2429AeC354916c476B30d729deDdC94988d',
            blockCreated: 9218338
        }
    }
}); //# sourceMappingURL=root.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootPorcini.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootPorcini = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rootPorcini = (0, defineChain_js_1.defineChain)({
    id: 7672,
    name: 'The Root Network - Porcini',
    nativeCurrency: {
        decimals: 18,
        name: 'XRP',
        symbol: 'XRP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://porcini.rootnet.app/archive'
            ],
            webSocket: [
                'wss://porcini.rootnet.app/archive/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Rootscan',
            url: 'https://porcini.rootscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xc9C2E2429AeC354916c476B30d729deDdC94988d',
            blockCreated: 10555692
        }
    },
    testnet: true
}); //# sourceMappingURL=rootPorcini.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootstock.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootstock = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rootstock = (0, defineChain_js_1.defineChain)({
    id: 30,
    name: 'Rootstock Mainnet',
    network: 'rootstock',
    nativeCurrency: {
        decimals: 18,
        name: 'Rootstock Bitcoin',
        symbol: 'RBTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-node.rsk.co'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RSK Explorer',
            url: 'https://explorer.rsk.co'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4249540
        }
    }
}); //# sourceMappingURL=rootstock.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootstockTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootstockTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.rootstockTestnet = (0, defineChain_js_1.defineChain)({
    id: 31,
    name: 'Rootstock Testnet',
    network: 'rootstock',
    nativeCurrency: {
        decimals: 18,
        name: 'Rootstock Bitcoin',
        symbol: 'tRBTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public-node.testnet.rsk.co'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RSK Explorer',
            url: 'https://explorer.testnet.rootstock.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2771150
        }
    },
    testnet: true
}); //# sourceMappingURL=rootstockTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rss3.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rss3 = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.rss3 = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 12_553,
    name: 'RSS3 VSL Mainnet',
    nativeCurrency: {
        name: 'RSS3',
        symbol: 'RSS3',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.rss3.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RSS3 VSL Mainnet Scan',
            url: 'https://scan.rss3.io',
            apiUrl: 'https://scan.rss3.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14193
        },
        portal: {
            [sourceId]: {
                address: '0x6A12432491bbbE8d3babf75F759766774C778Db4',
                blockCreated: 19387057
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x4cbab69108Aa72151EDa5A3c164eA86845f18438'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=rss3.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rss3Sepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rss3Sepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.rss3Sepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2_331,
    name: 'RSS3 VSL Sepolia Testnet',
    nativeCurrency: {
        name: 'RSS3',
        symbol: 'RSS3',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.rss3.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'RSS3 VSL Sepolia Testnet Scan',
            url: 'https://scan.testnet.rss3.io',
            apiUrl: 'https://scan.testnet.rss3.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 55697
        },
        portal: {
            [sourceId]: {
                address: '0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57',
                blockCreated: 5345035
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=rss3Sepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saakuru.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saakuru = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.saakuru = (0, defineChain_js_1.defineChain)({
    id: 7225878,
    name: 'Saakuru Mainnet',
    nativeCurrency: {
        name: 'OAS',
        symbol: 'OAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.saakuru.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Saakuru Explorer',
            url: 'https://explorer.saakuru.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=saakuru.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saga.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saga = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.saga = (0, defineChain_js_1.defineChain)({
    id: 5464,
    name: 'Saga',
    network: 'saga',
    nativeCurrency: {
        decimals: 18,
        name: 'gas',
        symbol: 'GAS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sagaevm.jsonrpc.sagarpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Saga Explorer',
            url: 'https://sagaevm.sagaexplorer.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160',
            blockCreated: 467530
        }
    }
}); //# sourceMappingURL=saga.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saigon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saigon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.saigon = (0, defineChain_js_1.defineChain)({
    id: 2021,
    name: 'Saigon Testnet',
    nativeCurrency: {
        name: 'RON',
        symbol: 'RON',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://saigon-testnet.roninchain.com/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Saigon Explorer',
            url: 'https://saigon-app.roninchain.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 18736871
        }
    },
    testnet: true
}); //# sourceMappingURL=saigon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sanko.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sanko = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sanko = (0, defineChain_js_1.defineChain)({
    id: 1996,
    name: 'Sanko',
    nativeCurrency: {
        name: 'DMT',
        symbol: 'DMT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.sanko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sanko Explorer',
            url: 'https://explorer.sanko.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 37
        }
    },
    testnet: false
}); //# sourceMappingURL=sanko.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sapphire.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sapphire = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sapphire = (0, defineChain_js_1.defineChain)({
    id: 23294,
    name: 'Oasis Sapphire',
    network: 'sapphire',
    nativeCurrency: {
        name: 'Sapphire Rose',
        symbol: 'ROSE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sapphire.oasis.io'
            ],
            webSocket: [
                'wss://sapphire.oasis.io/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Oasis Explorer',
            url: 'https://explorer.oasis.io/mainnet/sapphire'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 734531
        }
    }
}); //# sourceMappingURL=sapphire.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sapphireTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sapphireTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sapphireTestnet = (0, defineChain_js_1.defineChain)({
    id: 23295,
    name: 'Oasis Sapphire Testnet',
    network: 'sapphire-testnet',
    nativeCurrency: {
        name: 'Sapphire Test Rose',
        symbol: 'TEST',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.sapphire.oasis.dev'
            ],
            webSocket: [
                'wss://testnet.sapphire.oasis.dev/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Oasis Explorer',
            url: 'https://explorer.oasis.io/testnet/sapphire'
        }
    },
    testnet: true
}); //# sourceMappingURL=sapphireTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/satoshivm.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.satoshiVM = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.satoshiVM = (0, defineChain_js_1.defineChain)({
    id: 3109,
    name: 'SatoshiVM Alpha Mainnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://alpha-rpc-node-http.svmscan.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://svmscan.io',
            apiUrl: 'https://svmscan.io/api'
        }
    }
}); //# sourceMappingURL=satoshivm.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/satoshivmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.satoshiVMTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.satoshiVMTestnet = (0, defineChain_js_1.defineChain)({
    id: 3110,
    name: 'SatoshiVM Testnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://test-rpc-node-http.svmscan.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://testnet.svmscan.io',
            apiUrl: 'https://testnet.svmscan.io/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=satoshivmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/scroll.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scroll = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.scroll = (0, defineChain_js_1.defineChain)({
    id: 534_352,
    name: 'Scroll',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.scroll.io'
            ],
            webSocket: [
                'wss://wss-rpc.scroll.io/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Scrollscan',
            url: 'https://scrollscan.com',
            apiUrl: 'https://api.scrollscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14
        }
    },
    testnet: false
}); //# sourceMappingURL=scroll.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/scrollSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.scrollSepolia = (0, defineChain_js_1.defineChain)({
    id: 534_351,
    name: 'Scroll Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia-rpc.scroll.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Scrollscan',
            url: 'https://sepolia.scrollscan.com',
            apiUrl: 'https://api-sepolia.scrollscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 9473
        }
    },
    testnet: true
}); //# sourceMappingURL=scrollSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sei.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sei = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sei = (0, defineChain_js_1.defineChain)({
    id: 1329,
    name: 'Sei Network',
    nativeCurrency: {
        name: 'Sei',
        symbol: 'SEI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-rpc.sei-apis.com/'
            ],
            webSocket: [
                'wss://evm-ws.sei-apis.com/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Seitrace',
            url: 'https://seitrace.com',
            apiUrl: 'https://seitrace.com/pacific-1/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    }
}); //# sourceMappingURL=sei.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seiDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.seiDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.seiDevnet = (0, defineChain_js_1.defineChain)({
    id: 713_715,
    name: 'Sei Devnet',
    nativeCurrency: {
        name: 'Sei',
        symbol: 'SEI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-rpc-arctic-1.sei-apis.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Seitrace',
            url: 'https://seitrace.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=seiDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seismicDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.seismicDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.seismicDevnet = (0, defineChain_js_1.defineChain)({
    id: 5124,
    name: 'Seismic Devnet',
    nativeCurrency: {
        name: 'Seismic Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://node-2.seismicdev.net/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Seismic Devnet Explorer',
            url: 'https://explorer-2.seismicdev.net'
        }
    },
    testnet: true
}); //# sourceMappingURL=seismicDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seiTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.seiTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.seiTestnet = (0, defineChain_js_1.defineChain)({
    id: 1328,
    name: 'Sei Testnet',
    nativeCurrency: {
        name: 'Sei',
        symbol: 'SEI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm-rpc-testnet.sei-apis.com'
            ],
            webSocket: [
                'wss://evm-ws-testnet.sei-apis.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Seitrace',
            url: 'https://seitrace.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=seiTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sepolia = (0, defineChain_js_1.defineChain)({
    id: 11_155_111,
    name: 'Sepolia',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.drpc.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.etherscan.io',
            apiUrl: 'https://api-sepolia.etherscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 751532
        },
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        ensUniversalResolver: {
            address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
            blockCreated: 5_317_080
        }
    },
    testnet: true
}); //# sourceMappingURL=sepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shape.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shape = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.shape = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 360,
    name: 'Shape',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.shape.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'shapescan',
            url: 'https://shapescan.xyz',
            apiUrl: 'https://shapescan.xyz/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x6Ef8c69CfE4635d866e3E02732068022c06e724D',
                blockCreated: 20369940
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1
        },
        portal: {
            [sourceId]: {
                address: '0xEB06fFa16011B5628BaB98E29776361c83741dd3',
                blockCreated: 20369933
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x62Edd5f4930Ea92dCa3fB81689bDD9b9d076b57B',
                blockCreated: 20369935
            }
        }
    },
    sourceId
}); //# sourceMappingURL=shape.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shapeSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shapeSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.shapeSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 11_011,
    name: 'Shape Sepolia Testnet',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.shape.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer-sepolia.shape.network/',
            apiUrl: 'https://explorer-sepolia.shape.network/api/v2'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=shapeSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shardeum.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shardeum = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shardeum = (0, defineChain_js_1.defineChain)({
    id: 8118,
    name: 'Shardeum',
    nativeCurrency: {
        name: 'Shardeum',
        symbol: 'SHM',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.shardeum.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Shardeum Explorer',
            url: 'https://explorer.shardeum.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=shardeum.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shardeumSphinx.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shardeumSphinx = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shardeumSphinx = (0, defineChain_js_1.defineChain)({
    id: 8082,
    name: 'Shardeum Sphinx',
    nativeCurrency: {
        name: 'SHARDEUM',
        symbol: 'SHM',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sphinx.shardeum.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Shardeum Explorer',
            url: 'https://explorer-sphinx.shardeum.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=shardeumSphinx.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shibarium.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shibarium = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shibarium = (0, defineChain_js_1.defineChain)({
    id: 109,
    name: 'Shibarium',
    network: 'shibarium',
    nativeCurrency: {
        name: 'Bone',
        symbol: 'BONE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.shibrpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://shibariumscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0x864Bf681ADD6052395188A89101A1B37d3B4C961',
            blockCreated: 265900
        }
    }
}); //# sourceMappingURL=shibarium.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shibariumTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shibariumTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shibariumTestnet = (0, defineChain_js_1.defineChain)({
    id: 157,
    name: 'Puppynet Shibarium',
    nativeCurrency: {
        decimals: 18,
        name: 'Bone',
        symbol: 'BONE'
    },
    rpcUrls: {
        default: {
            http: [
                'https://puppynet.shibrpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://puppyscan.shib.io',
            apiUrl: 'https://puppyscan.shib.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xA4029b74FBA366c926eDFA7Dd10B21C621170a4c',
            blockCreated: 3035769
        }
    },
    testnet: true
}); //# sourceMappingURL=shibariumTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shiden.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shiden = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shiden = (0, defineChain_js_1.defineChain)({
    id: 336,
    name: 'Shiden',
    nativeCurrency: {
        decimals: 18,
        name: 'SDN',
        symbol: 'SDN'
    },
    rpcUrls: {
        default: {
            http: [
                'https://shiden.public.blastapi.io'
            ],
            webSocket: [
                'wss://shiden-rpc.dwellir.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Shiden Scan',
            url: 'https://shiden.subscan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=shiden.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shimmer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shimmer = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shimmer = (0, defineChain_js_1.defineChain)({
    id: 148,
    name: 'Shimmer',
    network: 'shimmer',
    nativeCurrency: {
        decimals: 18,
        name: 'Shimmer',
        symbol: 'SMR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://json-rpc.evm.shimmer.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Shimmer Network Explorer',
            url: 'https://explorer.evm.shimmer.network',
            apiUrl: 'https://explorer.evm.shimmer.network/api'
        }
    }
}); //# sourceMappingURL=shimmer.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shimmerTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shimmerTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.shimmerTestnet = (0, defineChain_js_1.defineChain)({
    id: 1073,
    name: 'Shimmer Testnet',
    network: 'shimmer-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Shimmer',
        symbol: 'SMR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://json-rpc.evm.testnet.shimmer.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Shimmer Network Explorer',
            url: 'https://explorer.evm.testnet.shimmer.network',
            apiUrl: 'https://explorer.evm.testnet.shimmer.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=shimmerTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sidra.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidraChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sidraChain = (0, defineChain_js_1.defineChain)({
    id: 97_453,
    name: 'Sidra Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Sidra Digital Asset',
        symbol: 'SDA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://node.sidrachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sidra Chain Explorer',
            url: 'https://ledger.sidrachain.com'
        }
    }
}); //# sourceMappingURL=sidra.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/silicon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.silicon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.silicon = (0, defineChain_js_1.defineChain)({
    id: 2355,
    name: 'Silicon zkEVM',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.silicon.network',
                'https://silicon-mainnet.nodeinfra.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SiliconScope',
            url: 'https://scope.silicon.network'
        }
    }
}); //# sourceMappingURL=silicon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/siliconSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.siliconSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.siliconSepolia = (0, defineChain_js_1.defineChain)({
    id: 1722641160,
    name: 'Silicon Sepolia zkEVM',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-sepolia.silicon.network',
                'https://silicon-testnet.nodeinfra.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SiliconSepoliaScope',
            url: 'https://scope-sepolia.silicon.network'
        }
    },
    testnet: true
}); //# sourceMappingURL=siliconSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sixProtocol.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sixProtocol = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sixProtocol = (0, defineChain_js_1.defineChain)({
    id: 98,
    name: 'Six Protocol',
    nativeCurrency: {
        decimals: 18,
        name: 'SIX',
        symbol: 'SIX'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sixnet-rpc-evm.sixprotocol.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Six Protocol Scan',
            url: 'https://sixscan.io/sixnet'
        }
    },
    testnet: false
}); //# sourceMappingURL=sixProtocol.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/brawl.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleBlockBrawlers = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleBlockBrawlers = (0, defineChain_js_1.defineChain)({
    id: 391_845_894,
    name: 'SKALE | Block Brawlers',
    nativeCurrency: {
        name: 'BRAWL',
        symbol: 'BRAWL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/frayed-decent-antares'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://frayed-decent-antares.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=brawl.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/calypso.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleCalypso = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleCalypso = (0, defineChain_js_1.defineChain)({
    id: 1_564_830_818,
    name: 'SKALE Calypso Hub',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3_107_626
        }
    }
}); //# sourceMappingURL=calypso.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/calypsoTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleCalypsoTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleCalypsoTestnet = (0, defineChain_js_1.defineChain)({
    id: 974_399_131,
    name: 'SKALE Calypso Testnet',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.skalenodes.com/v1/giant-half-dual-testnet'
            ],
            webSocket: [
                'wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://giant-half-dual-testnet.explorer.testnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 103_220
        }
    },
    testnet: true
}); //# sourceMappingURL=calypsoTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/cryptoBlades.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleCryptoBlades = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleCryptoBlades = (0, defineChain_js_1.defineChain)({
    id: 1_026_062_157,
    name: 'SKALE | CryptoBlades',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=cryptoBlades.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/cryptoColosseum.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleCryptoColosseum = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleCryptoColosseum = (0, defineChain_js_1.defineChain)({
    id: 1_032_942_172,
    name: 'SKALE | Crypto Colosseum',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/haunting-devoted-deneb'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=cryptoColosseum.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/europa.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleEuropa = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleEuropa = (0, defineChain_js_1.defineChain)({
    id: 2_046_399_126,
    name: 'SKALE Europa Hub',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/elated-tan-skat'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3_113_495
        }
    }
}); //# sourceMappingURL=europa.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/europaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleEuropaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleEuropaTestnet = (0, defineChain_js_1.defineChain)({
    id: 1_444_673_419,
    name: 'SKALE Europa Testnet',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.skalenodes.com/v1/juicy-low-small-testnet'
            ],
            webSocket: [
                'wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://juicy-low-small-testnet.explorer.testnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 110_858
        }
    },
    testnet: true
}); //# sourceMappingURL=europaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/exorde.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleExorde = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleExorde = (0, defineChain_js_1.defineChain)({
    id: 2_139_927_552,
    name: 'Exorde Network',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/light-vast-diphda'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://light-vast-diphda.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=exorde.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/humanProtocol.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleHumanProtocol = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleHumanProtocol = (0, defineChain_js_1.defineChain)({
    id: 1_273_227_453,
    name: 'SKALE | Human Protocol',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/wan-red-ain'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/wan-red-ain'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://wan-red-ain.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=humanProtocol.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/nebula.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleNebula = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleNebula = (0, defineChain_js_1.defineChain)({
    id: 1_482_601_649,
    name: 'SKALE Nebula Hub',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/green-giddy-denebola'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://green-giddy-denebola.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2_372_986
        }
    }
}); //# sourceMappingURL=nebula.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/nebulaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleNebulaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleNebulaTestnet = (0, defineChain_js_1.defineChain)({
    id: 37_084_624,
    name: 'SKALE Nebula Testnet',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet'
            ],
            webSocket: [
                'wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 105_141
        }
    },
    testnet: true
}); //# sourceMappingURL=nebulaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/razor.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleRazor = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleRazor = (0, defineChain_js_1.defineChain)({
    id: 278_611_351,
    name: 'SKALE | Razor Network',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/turbulent-unique-scheat'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {}
}); //# sourceMappingURL=razor.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/titan.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleTitan = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleTitan = (0, defineChain_js_1.defineChain)({
    id: 1_350_216_234,
    name: 'SKALE Titan Hub',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.skalenodes.com/v1/parallel-stormy-spica'
            ],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://parallel-stormy-spica.explorer.mainnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2_076_458
        }
    }
}); //# sourceMappingURL=titan.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/titanTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skaleTitanTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.skaleTitanTestnet = (0, defineChain_js_1.defineChain)({
    id: 1_020_352_220,
    name: 'SKALE Titan Testnet',
    nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.skalenodes.com/v1/aware-fake-trim-testnet'
            ],
            webSocket: [
                'wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 104_072
        }
    },
    testnet: true
}); //# sourceMappingURL=titanTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sketchpad.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sketchpad = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sketchpad = (0, defineChain_js_1.defineChain)({
    id: 984123,
    name: 'Forma Sketchpad',
    network: 'sketchpad',
    nativeCurrency: {
        symbol: 'TIA',
        name: 'TIA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sketchpad-1.forma.art'
            ],
            webSocket: [
                'wss://ws.sketchpad-1.forma.art'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sketchpad Explorer',
            url: 'https://explorer.sketchpad-1.forma.art'
        }
    },
    testnet: true
}); //# sourceMappingURL=sketchpad.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/snax.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snax = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.snax = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 2192,
    network: 'snaxchain-mainnet',
    name: 'SnaxChain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.snaxchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Snax Explorer',
            url: 'https://explorer.snaxchain.io',
            apiUrl: 'https://explorer.snaxchain.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x472562Fcf26D6b2793f8E0b0fB660ba0E5e08A46'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x2172e492Fc807F5d5645D0E3543f139ECF539294'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0x79f446D024d74D0Bb6E699C131c703463c5D65E9'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x6534Bdb6b5c060d3e6aa833433333135eFE8E0aA'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=snax.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/snaxTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snaxTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.snaxTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 13001,
    network: 'snaxchain-testnet',
    name: 'SnaxChain Testnet',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.snaxchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Snax Explorer',
            url: 'https://testnet-explorer.snaxchain.io',
            apiUrl: 'https://testnet-explorer.snaxchain.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x206a75d89d45F146C54020F132FF93bEDD09f55E'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x60e3A368a4cdCEf85ffB964e372726F56A46221e'
            }
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11'
        },
        portal: {
            [sourceId]: {
                address: '0xb5afdd0E8dDF081Ef90e8A3e0c7b5798e66E954E'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xbd37E1a59D4C00C9A46F75018dffd84061bC5f74'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=snaxTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/somniaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.somniaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.somniaTestnet = (0, defineChain_js_1.defineChain)({
    id: 50312,
    name: 'Somnia Testnet',
    nativeCurrency: {
        name: 'STT',
        symbol: 'STT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dream-rpc.somnia.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Somnia Testnet Explorer',
            url: 'https://somnia-testnet.socialscan.io',
            apiUrl: 'https://shannon-explorer.somnia.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=somniaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/soneium.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.soneium = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.soneium = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1868,
    name: 'Soneium Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.soneium.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://soneium.blockscout.com',
            apiUrl: 'https://soneium.blockscout.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x512a3d2c7a43bd9261d2b8e8c9c70d4bd4d503c0'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x0000000000000000000000000000000000000000'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x88e529a6ccd302c948689cd5156c83d4614fae92',
                blockCreated: 7061266
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xeb9bf100225c214efc3e7c651ebbadcf85177607',
                blockCreated: 7061266
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1
        }
    },
    sourceId
}); //# sourceMappingURL=soneium.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/soneiumMinato.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.soneiumMinato = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.soneiumMinato = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1946,
    name: 'Soneium Minato Testnet',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.minato.soneium.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://soneium-minato.blockscout.com',
            apiUrl: 'https://soneium-minato.blockscout.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0xB3Ad2c38E6e0640d7ce6aA952AB3A60E81bf7a01'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x710e5286C746eC38beeB7538d0146f60D27be343'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x65ea1489741A5D72fFdD8e6485B216bBdcC15Af3',
                blockCreated: 6466136
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x5f5a404A5edabcDD80DB05E8e54A78c9EBF000C2',
                blockCreated: 6466136
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=soneiumMinato.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sonic = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sonic = (0, defineChain_js_1.defineChain)({
    id: 146,
    name: 'Sonic',
    nativeCurrency: {
        decimals: 18,
        name: 'Sonic',
        symbol: 'S'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.soniclabs.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sonic Explorer',
            url: 'https://sonicscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 60
        }
    },
    testnet: false
}); //# sourceMappingURL=sonic.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonicTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sonicTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sonicTestnet = (0, defineChain_js_1.defineChain)({
    id: 64_165,
    name: 'Sonic Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Sonic',
        symbol: 'S'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.soniclabs.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sonic Testnet Explorer',
            url: 'https://testnet.soniclabs.com/'
        }
    },
    testnet: true
}); //# sourceMappingURL=sonicTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonicBlazeTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sonicBlazeTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.sonicBlazeTestnet = (0, defineChain_js_1.defineChain)({
    id: 57_054,
    name: 'Sonic Blaze Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Sonic',
        symbol: 'S'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.blaze.soniclabs.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sonic Blaze Testnet Explorer',
            url: 'https://testnet.sonicscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1100
        }
    },
    testnet: true
}); //# sourceMappingURL=sonicBlazeTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/songbird.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.songbird = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.songbird = (0, defineChain_js_1.defineChain)({
    id: 19,
    name: 'Songbird Canary-Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Songbird',
        symbol: 'SGB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://songbird-api.flare.network/ext/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Songbird Explorer',
            url: 'https://songbird-explorer.flare.network',
            apiUrl: 'https://songbird-explorer.flare.network/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 13382504
        }
    }
}); //# sourceMappingURL=songbird.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/songbirdTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.songbirdTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.songbirdTestnet = (0, defineChain_js_1.defineChain)({
    id: 16,
    name: 'Songbird Testnet Coston',
    nativeCurrency: {
        decimals: 18,
        name: 'Coston Flare',
        symbol: 'CFLR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://coston-api.flare.network/ext/C/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Coston Explorer',
            url: 'https://coston-explorer.flare.network',
            apiUrl: 'https://coston-explorer.flare.network/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=songbirdTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sophon.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sophon = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.sophon = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 50104,
    name: 'Sophon',
    nativeCurrency: {
        decimals: 18,
        name: 'Sophon',
        symbol: 'SOPH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sophon.xyz'
            ],
            webSocket: [
                'wss://rpc.sophon.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sophon Block Explorer',
            url: 'https://explorer.sophon.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0x5f4867441d2416cA88B1b3fd38f21811680CD2C8',
            blockCreated: 116
        }
    },
    testnet: false
}); //# sourceMappingURL=sophon.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sophonTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sophonTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.sophonTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 531_050_104,
    name: 'Sophon Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Sophon',
        symbol: 'SOPH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.sophon.xyz'
            ],
            webSocket: [
                'wss://rpc.testnet.sophon.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Sophon Block Explorer',
            url: 'https://explorer.testnet.sophon.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0x83c04d112adedA2C6D9037bb6ecb42E7f0b108Af',
            blockCreated: 15_642
        }
    },
    testnet: true
}); //# sourceMappingURL=sophonTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/spicy.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spicy = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.spicy = (0, defineChain_js_1.defineChain)({
    id: 88_882,
    name: 'Chiliz Spicy Testnet',
    network: 'chiliz-spicy-Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://spicy-rpc.chiliz.com',
                'https://chiliz-spicy-rpc.publicnode.com'
            ],
            webSocket: [
                'wss://spicy-rpc-ws.chiliz.com',
                'wss://chiliz-spicy-rpc.publicnode.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Chiliz Explorer',
            url: 'http://spicy-explorer.chiliz.com',
            apiUrl: 'http://spicy-explorer.chiliz.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=spicy.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/statusNetworkSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.statusSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.statusSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1_660_990_954,
    name: 'Status Network Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://public.sepolia.rpc.status.network'
            ],
            webSocket: [
                'wss://public.sepolia.rpc.status.network/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepoliascan.status.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1_578_364
        }
    },
    testnet: true
}); //# sourceMappingURL=statusNetworkSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/step.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.step = (0, defineChain_js_1.defineChain)({
    id: 1234,
    name: 'Step Network',
    nativeCurrency: {
        name: 'FITFI',
        symbol: 'FITFI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.step.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Step Scan',
            url: 'https://stepscan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=step.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/story.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.story = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.story = (0, defineChain_js_1.defineChain)({
    id: 1514,
    name: 'Story',
    nativeCurrency: {
        decimals: 18,
        name: 'IP Token',
        symbol: 'IP'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 340998
        },
        ensRegistry: {
            address: '0x5dc881dda4e4a8d312be3544ad13118d1a04cb17',
            blockCreated: 648924
        },
        ensUniversalResolver: {
            address: '0xddfb18888a9466688235887dec2a10c4f5effee9',
            blockCreated: 649114
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.storyrpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Story explorer',
            url: 'https://storyscan.xyz',
            apiUrl: 'https://storyscan.xyz/api/v2'
        }
    },
    ensTlds: [
        '.ip'
    ],
    testnet: false
}); //# sourceMappingURL=story.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyAeneid.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storyAeneid = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.storyAeneid = (0, defineChain_js_1.defineChain)({
    id: 1315,
    name: 'Story Aeneid',
    network: 'story-aeneid',
    nativeCurrency: {
        decimals: 18,
        name: 'IP',
        symbol: 'IP'
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1792
        },
        ensRegistry: {
            address: '0x5dC881dDA4e4a8d312be3544AD13118D1a04Cb17',
            blockCreated: 1322033
        },
        ensUniversalResolver: {
            address: '0x6D3B3F99177FB2A5de7F9E928a9BD807bF7b5BAD',
            blockCreated: 1322097
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://aeneid.storyrpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Story Aeneid Explorer',
            url: 'https://aeneid.storyscan.xyz',
            apiUrl: 'https://aeneid.storyscan.xyz/api/v2'
        }
    },
    ensTlds: [
        '.ip'
    ],
    testnet: true
}); //# sourceMappingURL=storyAeneid.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyOdyssey.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storyOdyssey = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.storyOdyssey = (0, defineChain_js_1.defineChain)({
    id: 1516,
    name: 'Story Odyssey',
    nativeCurrency: {
        decimals: 18,
        name: 'IP',
        symbol: 'IP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.odyssey.storyrpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Story Odyssey Explorer',
            url: 'https://odyssey.storyscan.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=storyOdyssey.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storyTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.storyTestnet = (0, defineChain_js_1.defineChain)({
    id: 1513,
    name: 'Story Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'IP',
        symbol: 'IP'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.storyrpc.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Story Testnet Explorer',
            url: 'https://testnet.storyscan.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=storyTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/stratis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stratis = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.stratis = (0, defineChain_js_1.defineChain)({
    id: 105105,
    name: 'Stratis Mainnet',
    network: 'stratis',
    nativeCurrency: {
        name: 'Stratis',
        symbol: 'STRAX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.stratisevm.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Stratis Explorer',
            url: 'https://explorer.stratisevm.com'
        }
    }
}); //# sourceMappingURL=stratis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superlumio.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.superlumio = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.superlumio = (0, defineChain_js_1.defineChain)({
    id: 8866,
    name: 'SuperLumio',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.lumio.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Lumio explorer',
            url: 'https://explorer.lumio.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=superlumio.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superposition.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.superposition = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.superposition = (0, defineChain_js_1.defineChain)({
    id: 55244,
    name: 'Superposition',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.superposition.so'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Superposition Explorer',
            url: 'https://explorer.superposition.so'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 39
        }
    },
    testnet: false
}); //# sourceMappingURL=superposition.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superseed.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.superseed = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.superseed = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 5330,
    name: 'Superseed',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.superseed.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Superseed Explorer',
            url: 'https://explorer.superseed.xyz',
            apiUrl: 'https://explorer.superseed.xyz/api/v2'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        disputeGameFactory: {
            [sourceId]: {
                address: '0x8b097CF1f9BbD9cbFD0DD561858a1FCbC8857Be0',
                blockCreated: 20737481
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x693A0F8854F458D282DE3C5b69E8eE5EEE8aA949',
                blockCreated: 20737481
            }
        },
        portal: {
            [sourceId]: {
                address: '0x2c2150aa5c75A24fB93d4fD2F2a895D618054f07',
                blockCreated: 20737481
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x8b0576E39F1233679109F9b40cFcC2a7E0901Ede',
                blockCreated: 20737481
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        }
    },
    sourceId
}); //# sourceMappingURL=superseed.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superseedSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.superseedSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11155111;
exports.superseedSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 53302,
    name: 'Superseed Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.superseed.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Superseed Sepolia Explorer',
            url: 'https://sepolia-explorer.superseed.xyz',
            apiUrl: 'https://sepolia-explorer.superseed.xyz/api/v2'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        },
        portal: {
            [sourceId]: {
                address: '0x7A0db8C51432d2C3eb4e8f360a2EeB26FF2809fB',
                blockCreated: 5523438
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x2B227A603fAAdB3De0ED050b63ADD232B5f2c28C',
                blockCreated: 5523442
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=superseedSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swan.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swan = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swan = (0, defineChain_js_1.defineChain)({
    id: 254,
    name: 'Swan Chain Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.swanchain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Swan Explorer',
            url: 'https://swanscan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=swan.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swanProximaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swanProximaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swanProximaTestnet = (0, defineChain_js_1.defineChain)({
    id: 20241133,
    name: 'Swan Proxima Testnet',
    nativeCurrency: {
        name: 'Swan Ether',
        symbol: 'sETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-proxima.swanchain.io	'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Swan Explorer',
            url: 'https://proxima-explorer.swanchain.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=swanProximaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swanSaturnTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swanSaturnTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swanSaturnTestnet = (0, defineChain_js_1.defineChain)({
    id: 2024,
    name: 'Swan Saturn Testnet',
    nativeCurrency: {
        name: 'Swan Ether',
        symbol: 'sETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://saturn-rpc.swanchain.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Swan Explorer',
            url: 'https://saturn-explorer.swanchain.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=swanSaturnTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swellchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swellchain = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swellchain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1923,
    name: 'Swellchain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://swell-mainnet.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Swell Explorer',
            url: 'https://explorer.swellnetwork.io',
            apiUrl: 'https://explorer.swellnetwork.io/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1
        }
    }
}); //# sourceMappingURL=swellchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swellchainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swellchainTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swellchainTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1924,
    name: 'Swellchain Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://swell-testnet.alt.technology'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Swellchain Testnet Explorer',
            url: 'https://swell-testnet-explorer.alt.technology',
            apiUrl: 'https://swell-testnet-explorer.alt.technology/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1
        }
    }
}); //# sourceMappingURL=swellchainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swissdlt.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swissdlt = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.swissdlt = (0, defineChain_js_1.defineChain)({
    id: 94,
    name: 'SwissDLT Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BCTS',
        symbol: 'BCTS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.swissdlt.ch'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SwissDLT Explorer',
            url: 'https://explorer.swissdlt.ch'
        }
    },
    testnet: false
}); //# sourceMappingURL=swissdlt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/syscoin.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.syscoin = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.syscoin = (0, defineChain_js_1.defineChain)({
    id: 57,
    name: 'Syscoin Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.syscoin.org'
            ],
            webSocket: [
                'wss://rpc.syscoin.org/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SyscoinExplorer',
            url: 'https://explorer.syscoin.org',
            apiUrl: 'https://explorer.syscoin.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 287139
        }
    }
}); //# sourceMappingURL=syscoin.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/syscoinTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.syscoinTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.syscoinTestnet = (0, defineChain_js_1.defineChain)({
    id: 5700,
    name: 'Syscoin Tanenbaum Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.tanenbaum.io'
            ],
            webSocket: [
                'wss://rpc.tanenbaum.io/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'SyscoinTestnetExplorer',
            url: 'https://tanenbaum.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 271288
        }
    }
}); //# sourceMappingURL=syscoinTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taiko.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taiko = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taiko = (0, defineChain_js_1.defineChain)({
    id: 167000,
    name: 'Taiko Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.taiko.xyz'
            ],
            webSocket: [
                'wss://ws.mainnet.taiko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Taikoscan',
            url: 'https://taikoscan.io',
            apiUrl: 'https://api.taikoscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D'
        }
    }
}); //# sourceMappingURL=taiko.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoHekla.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taikoHekla = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taikoHekla = (0, defineChain_js_1.defineChain)({
    id: 167_009,
    name: 'Taiko Hekla L2',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hekla.taiko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Taikoscan',
            url: 'https://hekla.taikoscan.network'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 59757
        }
    },
    testnet: true
}); //# sourceMappingURL=taikoHekla.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoJolnir.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taikoJolnir = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taikoJolnir = (0, defineChain_js_1.defineChain)({
    id: 167007,
    name: 'Taiko Jolnir (Alpha-5 Testnet)',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.jolnir.taiko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.jolnir.taiko.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 732706
        }
    },
    testnet: true
}); //# sourceMappingURL=taikoJolnir.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoKatla.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taikoKatla = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taikoKatla = (0, defineChain_js_1.defineChain)({
    id: 167008,
    name: 'Taiko Katla (Alpha-6 Testnet)',
    network: 'tko-katla',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.katla.taiko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.katla.taiko.xyz'
        }
    }
}); //# sourceMappingURL=taikoKatla.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoTestnetSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taikoTestnetSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taikoTestnetSepolia = (0, defineChain_js_1.defineChain)({
    id: 167005,
    name: 'Taiko (Alpha-3 Testnet)',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.test.taiko.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.test.taiko.xyz'
        }
    }
}); //# sourceMappingURL=taikoTestnetSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taraxa.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taraxa = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taraxa = (0, defineChain_js_1.defineChain)({
    id: 841,
    name: 'Taraxa Mainnet',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'TARA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.mainnet.taraxa.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Taraxa Explorer',
            url: 'https://explorer.mainnet.taraxa.io'
        }
    }
}); //# sourceMappingURL=taraxa.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taraxaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taraxaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.taraxaTestnet = (0, defineChain_js_1.defineChain)({
    id: 842,
    name: 'Taraxa Testnet',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'TARA',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.taraxa.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Taraxa Explorer',
            url: 'https://explorer.testnet.taraxa.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=taraxaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telcoinTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.telcoinTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.telcoinTestnet = (0, defineChain_js_1.defineChain)({
    id: 2017,
    name: 'Telcoin Adiri Testnet',
    nativeCurrency: {
        name: 'Telcoin',
        symbol: 'TEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.telcoin.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'telscan',
            url: 'https://telscan.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=telcoinTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.telos = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.telos = (0, defineChain_js_1.defineChain)({
    id: 40,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.telos.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Teloscan',
            url: 'https://www.teloscan.io/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 246530709
        }
    }
}); //# sourceMappingURL=telos.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telosTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.telosTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.telosTestnet = (0, defineChain_js_1.defineChain)({
    id: 41,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.telos.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Teloscan (testnet)',
            url: 'https://testnet.teloscan.io/'
        }
    },
    testnet: true
}); //# sourceMappingURL=telosTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tenet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tenet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.tenet = (0, defineChain_js_1.defineChain)({
    id: 1559,
    name: 'Tenet',
    network: 'tenet-mainnet',
    nativeCurrency: {
        name: 'TENET',
        symbol: 'TENET',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.tenet.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'TenetScan Mainnet',
            url: 'https://tenetscan.io',
            apiUrl: 'https://tenetscan.io/api'
        }
    },
    testnet: false
}); //# sourceMappingURL=tenet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ternoa.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ternoa = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ternoa = (0, defineChain_js_1.defineChain)({
    id: 752025,
    name: 'Ternoa',
    nativeCurrency: {
        name: 'Capsule Coin',
        symbol: 'CAPS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-mainnet.zkevm.ternoa.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ternoa Explorer',
            url: 'https://explorer-mainnet.zkevm.ternoa.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=ternoa.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thaiChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thaiChain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.thaiChain = (0, defineChain_js_1.defineChain)({
    id: 7,
    name: 'ThaiChain',
    nativeCurrency: {
        name: 'TCH',
        symbol: 'TCH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.thaichain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp.thaichain.org',
            apiUrl: 'https://exp.thaichain.org/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0DaD6130e832c21719C5CE3bae93454E16A84826',
            blockCreated: 4806386
        }
    },
    testnet: false
}); //# sourceMappingURL=thaiChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/that.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.that = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.that = (0, defineChain_js_1.defineChain)({
    id: 8428,
    name: 'THAT Mainnet',
    nativeCurrency: {
        name: 'THAT',
        symbol: 'THAT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.thatchain.io/mainnet'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://that.blockscout.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=that.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/theta.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theta = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.theta = (0, defineChain_js_1.defineChain)({
    id: 361,
    name: 'Theta Mainnet',
    nativeCurrency: {
        name: 'TFUEL',
        symbol: 'TFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc-api.thetatoken.org/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Theta Explorer',
            url: 'https://explorer.thetatoken.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=theta.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thetaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thetaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.thetaTestnet = (0, defineChain_js_1.defineChain)({
    id: 365,
    name: 'Theta Testnet',
    nativeCurrency: {
        name: 'TFUEL',
        symbol: 'TFUEL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth-rpc-api-testnet.thetatoken.org/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Theta Explorer',
            url: 'https://testnet-explorer.thetatoken.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=thetaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thunderCore.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thunderCore = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.thunderCore = (0, defineChain_js_1.defineChain)({
    id: 108,
    name: 'ThunderCore Mainnet',
    nativeCurrency: {
        name: 'TT',
        symbol: 'TT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.thundercore.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ThunderCore Explorer',
            url: 'https://explorer-mainnet.thundercore.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    },
    testnet: false
}); //# sourceMappingURL=thunderCore.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thunderTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thunderTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.thunderTestnet = (0, defineChain_js_1.defineChain)({
    id: 997,
    name: '5ireChain Thunder Testnet',
    nativeCurrency: {
        name: '5ire Token',
        symbol: '5IRE',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.5ire.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: '5ireChain Thunder Explorer',
            url: 'https://testnet.5irescan.io/'
        }
    },
    testnet: true
}); //# sourceMappingURL=thunderTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tiktrixTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tiktrixTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.tiktrixTestnet = (0, defineChain_js_1.defineChain)({
    id: 62092,
    name: 'TikTrix Testnet',
    nativeCurrency: {
        name: 'tTTX',
        symbol: 'tTTX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://tiktrix-rpc.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'TikTrix Testnet Explorer',
            url: 'https://tiktrix.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=tiktrixTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tomb.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tomb = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.tomb = (0, defineChain_js_1.defineChain)({
    id: 6969,
    name: 'Tomb Mainnet',
    nativeCurrency: {
        name: 'TOMB',
        symbol: 'TOMB',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.tombchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Tomb Explorer',
            url: 'https://tombscout.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=tomb.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/treasure.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.treasure = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.treasure = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 61_166,
    name: 'Treasure',
    nativeCurrency: {
        decimals: 18,
        name: 'MAGIC',
        symbol: 'MAGIC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.treasure.lol'
            ],
            webSocket: [
                'wss://rpc.treasure.lol/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Treasure Block Explorer',
            url: 'https://treasurescan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0x2e29fe39496a56856D8698bD43e1dF4D0CE6266a',
            blockCreated: 101
        }
    },
    testnet: false
}); //# sourceMappingURL=treasure.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/treasureTopaz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.treasureTopaz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.treasureTopaz = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 978_658,
    name: 'Treasure Topaz Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MAGIC',
        symbol: 'MAGIC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.topaz.treasure.lol'
            ],
            webSocket: [
                'wss://rpc.topaz.treasure.lol/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Treasure Topaz Block Explorer',
            url: 'https://topaz.treasurescan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
            blockCreated: 108112
        }
    },
    testnet: true
}); //# sourceMappingURL=treasureTopaz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tron.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tron = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.tron = (0, defineChain_js_1.defineChain)({
    id: 728126428,
    name: 'Tron',
    nativeCurrency: {
        name: 'TRON',
        symbol: 'TRX',
        decimals: 6
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.trongrid.io/jsonrpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Tronscan',
            url: 'https://tronscan.org',
            apiUrl: 'https://apilist.tronscanapi.com/api'
        }
    }
}); //# sourceMappingURL=tron.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tronShasta.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tronShasta = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.tronShasta = (0, defineChain_js_1.defineChain)({
    id: 2494104990,
    name: 'Tron Shasta',
    nativeCurrency: {
        name: 'TRON',
        symbol: 'TRX',
        decimals: 6
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.shasta.trongrid.io/jsonrpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Tronscan',
            url: 'https://shasta.tronscan.org'
        }
    },
    testnet: true
}); //# sourceMappingURL=tronShasta.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ubiq.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ubiq = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ubiq = (0, defineChain_js_1.defineChain)({
    id: 8,
    name: 'Ubiq Mainnet',
    nativeCurrency: {
        name: 'UBQ',
        symbol: 'UBQ',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://pyrus2.ubiqscan.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ubiq Scan',
            url: 'https://ubiqscan.io'
        }
    },
    testnet: false
}); //# sourceMappingURL=ubiq.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultra.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ultra = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ultra = (0, defineChain_js_1.defineChain)({
    id: 19991,
    name: 'Ultra EVM',
    nativeCurrency: {
        decimals: 18,
        name: 'Ultra Token',
        symbol: 'UOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.ultra.eosusa.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ultra EVM Explorer',
            url: 'https://evmexplorer.ultra.io'
        }
    }
}); //# sourceMappingURL=ultra.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultraTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ultraTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ultraTestnet = (0, defineChain_js_1.defineChain)({
    id: 18881,
    name: 'Ultra EVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ultra Token',
        symbol: 'UOS'
    },
    rpcUrls: {
        default: {
            http: [
                'https://evm.test.ultra.eosusa.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ultra EVM Testnet Explorer',
            url: 'https://evmexplorer.testnet.ultra.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=ultraTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultron.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ultron = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ultron = (0, defineChain_js_1.defineChain)({
    id: 1231,
    name: 'Ultron Mainnet',
    nativeCurrency: {
        name: 'ULX',
        symbol: 'ULX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://ultron-rpc.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ultron Scan',
            url: 'https://ulxscan.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=ultron.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultronTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ultronTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.ultronTestnet = (0, defineChain_js_1.defineChain)({
    id: 1230,
    name: 'Ultron Testnet',
    nativeCurrency: {
        name: 'ULX',
        symbol: 'ULX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://ultron-dev.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ultron Scan',
            url: 'https://explorer.ultron-dev.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=ultronTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unichain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unichain = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.unichain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 130,
    name: 'Unichain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.unichain.org/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Uniscan',
            url: 'https://uniscan.xyz',
            apiUrl: 'https://api.uniscan.xyz/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0x2F12d621a16e2d3285929C9996f478508951dFe4'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x0bd48f6B86a26D3a217d0Fa6FfE2B491B956A7a2'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x81014F44b0a345033bB2b3B21C7a1A308B35fEeA'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=unichain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unichainSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unichainSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.unichainSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1301,
    name: 'Unichain Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.unichain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Uniscan',
            url: 'https://sepolia.uniscan.xyz',
            apiUrl: 'https://api-sepolia.uniscan.xyz/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        },
        portal: {
            [sourceId]: {
                address: '0x0d83dab629f0e0F9d36c0Cbc89B69a489f0751bD'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xea58fcA6849d79EAd1f26608855c2D6407d54Ce2'
            }
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0xeff73e5aa3B9AEC32c659Aa3E00444d20a84394b'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=unichainSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unique.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.unique = (0, defineChain_js_1.defineChain)({
    id: 8880,
    name: 'Unique Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'UNQ',
        symbol: 'UNQ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.unique.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Unique Subscan',
            url: 'https://unique.subscan.io/'
        }
    }
}); //# sourceMappingURL=unique.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/uniqueOpal.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniqueOpal = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.uniqueOpal = (0, defineChain_js_1.defineChain)({
    id: 8882,
    name: 'Opal Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OPL',
        symbol: 'OPL'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-opal.unique.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Opal Subscan',
            url: 'https://opal.subscan.io/'
        }
    },
    testnet: true
}); //# sourceMappingURL=uniqueOpal.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/uniqueQuartz.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniqueQuartz = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.uniqueQuartz = (0, defineChain_js_1.defineChain)({
    id: 8881,
    name: 'Quartz Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'QTZ',
        symbol: 'QTZ'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-quartz.unique.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Quartz Subscan',
            url: 'https://quartz.subscan.io/'
        }
    }
}); //# sourceMappingURL=uniqueQuartz.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unreal.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unreal = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.unreal = (0, defineChain_js_1.defineChain)({
    id: 18233,
    name: 'Unreal',
    nativeCurrency: {
        name: 'reETH',
        decimals: 18,
        symbol: 'reETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.unreal-orbit.gelato.digital'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Unreal Explorer',
            url: 'https://unreal.blockscout.com',
            apiUrl: 'https://unreal.blockscout.com/api/v2'
        }
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0x8b6B0e60D8CD84898Ea8b981065A12F876eA5677',
            blockCreated: 1745
        }
    }
}); //# sourceMappingURL=unreal.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vanar.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vanar = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.vanar = (0, defineChain_js_1.defineChain)({
    id: 2040,
    name: 'Vanar Mainnet',
    nativeCurrency: {
        name: 'VANRY',
        symbol: 'VANRY',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.vanarchain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Vanar Mainnet Explorer',
            url: 'https://explorer.vanarchain.com/'
        }
    },
    testnet: false
}); //# sourceMappingURL=vanar.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vechain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vechain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.vechain = (0, defineChain_js_1.defineChain)({
    id: 100009,
    name: 'Vechain',
    nativeCurrency: {
        name: 'VeChain',
        symbol: 'VET',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.vechain.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Vechain Explorer',
            url: 'https://explore.vechain.org'
        },
        vechainStats: {
            name: 'Vechain Stats',
            url: 'https://vechainstats.com'
        }
    }
}); //# sourceMappingURL=vechain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/velas.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.velas = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.velas = (0, defineChain_js_1.defineChain)({
    id: 106,
    name: 'Velas EVM Mainnet',
    nativeCurrency: {
        name: 'VLX',
        symbol: 'VLX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evmexplorer.velas.com/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Velas Explorer',
            url: 'https://evmexplorer.velas.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 55883577
        }
    },
    testnet: false
}); //# sourceMappingURL=velas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/viction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.viction = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.viction = (0, defineChain_js_1.defineChain)({
    id: 88,
    name: 'Viction',
    nativeCurrency: {
        name: 'Viction',
        symbol: 'VIC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.viction.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'VIC Scan',
            url: 'https://vicscan.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=viction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/victionTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.victionTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.victionTestnet = (0, defineChain_js_1.defineChain)({
    id: 89,
    name: 'Viction Testnet',
    nativeCurrency: {
        name: 'Viction',
        symbol: 'VIC',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.viction.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'VIC Scan',
            url: 'https://testnet.vicscan.xyz'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 12170179
        }
    },
    testnet: true
}); //# sourceMappingURL=victionTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vision.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vision = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.vision = (0, defineChain_js_1.defineChain)({
    id: 888888,
    name: 'Vision',
    nativeCurrency: {
        name: 'VISION',
        symbol: 'VS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://infragrid.v.network/ethereum/compatible'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Vision Scan',
            url: 'https://visionscan.org'
        }
    },
    testnet: false
}); //# sourceMappingURL=vision.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/visionTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.visionTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.visionTestnet = (0, defineChain_js_1.defineChain)({
    id: 666666,
    name: 'Vision Testnet',
    nativeCurrency: {
        name: 'VISION',
        symbol: 'VS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://vpioneer.infragrid.v.network/ethereum/compatible'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Vision Scan',
            url: 'https://visionscan.org/?chain=vpioneer'
        }
    },
    testnet: true
}); //# sourceMappingURL=visionTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wanchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wanchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.wanchain = (0, defineChain_js_1.defineChain)({
    id: 888,
    name: 'Wanchain',
    nativeCurrency: {
        name: 'WANCHAIN',
        symbol: 'WAN',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://gwan-ssl.wandevs.org:56891',
                'https://gwan2-ssl.wandevs.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'WanScan',
            url: 'https://wanscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB',
            blockCreated: 25312390
        }
    }
}); //# sourceMappingURL=wanchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wanchainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wanchainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.wanchainTestnet = (0, defineChain_js_1.defineChain)({
    id: 999,
    name: 'Wanchain Testnet',
    nativeCurrency: {
        name: 'WANCHAIN',
        symbol: 'WANt',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://gwan-ssl.wandevs.org:46891'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'WanScanTest',
            url: 'https://wanscan.org'
        }
    },
    contracts: {
        multicall3: {
            address: '0x11c89bF4496c39FB80535Ffb4c92715839CC5324',
            blockCreated: 24743448
        }
    },
    testnet: true
}); //# sourceMappingURL=wanchainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/weavevmAlphanet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weaveVMAlphanet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.weaveVMAlphanet = (0, defineChain_js_1.defineChain)({
    id: 9496,
    name: 'WeaveVM Alphanet',
    nativeCurrency: {
        name: 'Testnet WeaveVM',
        symbol: 'tWVM',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.wvm.dev'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'WeaveVM Alphanet Explorer',
            url: 'https://explorer.wvm.dev'
        }
    },
    testnet: true
}); //# sourceMappingURL=weavevmAlphanet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wemix.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wemix = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.wemix = (0, defineChain_js_1.defineChain)({
    id: 1111,
    name: 'WEMIX',
    network: 'wemix-mainnet',
    nativeCurrency: {
        name: 'WEMIX',
        symbol: 'WEMIX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.wemix.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'wemixExplorer',
            url: 'https://explorer.wemix.com'
        }
    }
}); //# sourceMappingURL=wemix.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wemixTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wemixTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.wemixTestnet = (0, defineChain_js_1.defineChain)({
    id: 1112,
    name: 'WEMIX Testnet',
    network: 'wemix-testnet',
    nativeCurrency: {
        name: 'WEMIX',
        symbol: 'tWEMIX',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.test.wemix.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'wemixExplorer',
            url: 'https://testnet.wemixscan.com',
            apiUrl: 'https://testnet.wemixscan.com/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=wemixTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/westendAssetHub.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.westendAssetHub = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.westendAssetHub = (0, defineChain_js_1.defineChain)({
    id: 420_420_421,
    name: 'Westend Asset Hub',
    nativeCurrency: {
        decimals: 18,
        name: 'Westies',
        symbol: 'WND'
    },
    rpcUrls: {
        default: {
            http: [
                'https://westend-asset-hub-eth-rpc.polkadot.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'subscan',
            url: 'https://westend-asset-hub-eth-explorer.parity.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=westendAssetHub.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/whitechain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.whitechain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.whitechain = (0, defineChain_js_1.defineChain)({
    testnet: false,
    name: 'Whitechain',
    blockExplorers: {
        default: {
            name: 'Whitechain Explorer',
            url: 'https://explorer.whitechain.io'
        }
    },
    id: 1875,
    rpcUrls: {
        default: {
            http: [
                'https://rpc.whitechain.io'
            ]
        }
    },
    nativeCurrency: {
        decimals: 18,
        name: 'WhiteBIT Coin',
        symbol: 'WBT'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 25212237
        }
    }
}); //# sourceMappingURL=whitechain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/whitechainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.whitechainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.whitechainTestnet = (0, defineChain_js_1.defineChain)({
    testnet: true,
    name: 'Whitechain Testnet',
    blockExplorers: {
        default: {
            name: 'Whitechain Explorer',
            url: 'https://testnet.whitechain.io'
        }
    },
    id: 2625,
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.whitechain.io'
            ]
        }
    },
    nativeCurrency: {
        decimals: 18,
        name: 'WhiteBIT Coin',
        symbol: 'WBT'
    }
}); //# sourceMappingURL=whitechainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wmcTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wmcTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.wmcTestnet = (0, defineChain_js_1.defineChain)({
    id: 42070,
    name: 'WMC Testnet',
    nativeCurrency: {
        name: 'WMTx',
        symbol: 'WMTx',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet-base.worldmobile.net'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'WMC Explorer',
            url: 'https://explorer2-base-testnet.worldmobile.net'
        }
    },
    testnet: true
}); //# sourceMappingURL=wmcTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.worldchain = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.worldchain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 480,
    name: 'World Chain',
    network: 'worldchain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://worldchain-mainnet.g.alchemy.com/public'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Worldscan',
            url: 'https://worldscan.org',
            apiUrl: 'https://api.worldscan.org/api'
        },
        blockscout: {
            name: 'Blockscout',
            url: 'https://worldchain-mainnet.explorer.alchemy.com',
            apiUrl: 'https://worldchain-mainnet.explorer.alchemy.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0x069c4c579671f8c120b1327a73217D01Ea2EC5ea'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x19A6d1E9034596196295CF148509796978343c5D'
            }
        },
        portal: {
            [sourceId]: {
                address: '0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x470458C91978D2d929704489Ad730DC3E3001113'
            }
        }
    },
    testnet: false,
    sourceId
}); //# sourceMappingURL=worldchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldchainSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.worldchainSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.worldchainSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 4801,
    name: 'World Chain Sepolia',
    network: 'worldchain-sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://worldchain-sepolia.g.alchemy.com/public'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Worldscan Sepolia',
            url: 'https://sepolia.worldscan.org',
            apiUrl: 'https://api-sepolia.worldscan.org/api'
        },
        blockscout: {
            name: 'Blockscout',
            url: 'https://worldchain-sepolia.explorer.alchemy.com',
            apiUrl: 'https://worldchain-sepolia.explorer.alchemy.com/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 0
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A'
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xc8886f8BAb6Eaeb215aDB5f1c686BF699248300e'
            }
        },
        portal: {
            [sourceId]: {
                address: '0xFf6EBa109271fe6d4237EeeD4bAb1dD9A77dD1A4'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xd7DF54b3989855eb66497301a4aAEc33Dbb3F8DE'
            }
        }
    },
    testnet: true,
    sourceId
}); //# sourceMappingURL=worldchainSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldLand.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.worldLand = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.worldLand = (0, defineChain_js_1.defineChain)({
    id: 103,
    name: 'WorldLand Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'WLC',
        symbol: 'WLC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://seoul.worldland.foundation'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'WorldLand Scan',
            url: 'https://scan.worldland.foundation'
        }
    },
    testnet: false
}); //# sourceMappingURL=worldLand.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xai.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xai = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xai = (0, defineChain_js_1.defineChain)({
    id: 660279,
    name: 'Xai Mainnet',
    nativeCurrency: {
        name: 'Xai',
        symbol: 'XAI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://xai-chain.net/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.xai-chain.net'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 222549
        }
    },
    testnet: false
}); //# sourceMappingURL=xai.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xaiTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xaiTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xaiTestnet = (0, defineChain_js_1.defineChain)({
    id: 37714555429,
    name: 'Xai Testnet',
    nativeCurrency: {
        name: 'sXai',
        symbol: 'sXAI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-v2.xai-chain.net/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer-v2.xai-chain.net'
        }
    },
    testnet: true
}); //# sourceMappingURL=xaiTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xdc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xdc = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xdc = (0, defineChain_js_1.defineChain)({
    id: 50,
    name: 'XDC Network',
    nativeCurrency: {
        decimals: 18,
        name: 'XDC',
        symbol: 'XDC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.xdcrpc.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'XDCScan',
            url: 'https://xdcscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0x0B1795ccA8E4eC4df02346a082df54D437F8D9aF',
            blockCreated: 75884020
        }
    }
}); //# sourceMappingURL=xdc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xdcTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xdcTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xdcTestnet = (0, defineChain_js_1.defineChain)({
    id: 51,
    name: 'Apothem Network',
    nativeCurrency: {
        decimals: 18,
        name: 'TXDC',
        symbol: 'TXDC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://erpc.apothem.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'XDCScan',
            url: 'https://testnet.xdcscan.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 59765389
        }
    }
}); //# sourceMappingURL=xdcTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xLayer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xLayer = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xLayer = (0, defineChain_js_1.defineChain)({
    id: 196,
    name: 'X Layer Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OKB',
        symbol: 'OKB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.xlayer.tech'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/xlayer',
            apiUrl: 'https://www.oklink.com/api/v5/explorer/xlayer/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 47416
        }
    }
}); //# sourceMappingURL=xLayer.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xLayerTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.x1Testnet = exports.xLayerTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xLayerTestnet = (0, defineChain_js_1.defineChain)({
    id: 195,
    name: 'X1 Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OKB',
        symbol: 'OKB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://xlayertestrpc.okx.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/xlayer-test'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 624344
        }
    },
    testnet: true
});
exports.x1Testnet = exports.xLayerTestnet; //# sourceMappingURL=xLayerTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrOne.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xrOne = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xrOne = (0, defineChain_js_1.defineChain)({
    id: 273,
    name: 'XR One',
    nativeCurrency: {
        decimals: 18,
        name: 'XR1',
        symbol: 'XR1'
    },
    rpcUrls: {
        default: {
            http: [
                'https://xr1.calderachain.xyz/http'
            ],
            webSocket: [
                'wss://xr1.calderachain.xyz/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://xr1.calderaexplorer.xyz'
        }
    },
    testnet: false
}); //# sourceMappingURL=xrOne.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrplevmDevnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xrplevmDevnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xrplevmDevnet = (0, defineChain_js_1.defineChain)({
    id: 1440002,
    name: 'XRPL EVM Devnet',
    nativeCurrency: {
        name: 'XRP',
        symbol: 'XRP',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.xrplevm.org/'
            ]
        },
        public: {
            http: [
                'https://rpc.xrplevm.org/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'XRPLEVM Devnet Explorer',
            url: 'https://explorer.xrplevm.org/'
        }
    },
    contracts: {
        multicall3: {
            address: '0x82Cc144D7d0AD4B1c27cb41420e82b82Ad6e9B31',
            blockCreated: 15237286
        }
    },
    testnet: true
}); //# sourceMappingURL=xrplevmDevnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrplevmTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xrplevmTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xrplevmTestnet = (0, defineChain_js_1.defineChain)({
    id: 1449000,
    name: 'XRPL EVM Testnet',
    nativeCurrency: {
        name: 'XRP',
        symbol: 'XRP',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.xrplevm.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.testnet.xrplevm.org',
            apiUrl: 'https://explorer.testnet.xrplevm.org/api/v2'
        }
    },
    contracts: {
        multicall3: {
            address: '0x82Cc144D7d0AD4B1c27cb41420e82b82Ad6e9B31',
            blockCreated: 492302
        }
    },
    testnet: true
}); //# sourceMappingURL=xrplevmTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xrSepolia = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.xrSepolia = (0, defineChain_js_1.defineChain)({
    id: 2730,
    name: 'XR Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'tXR',
        symbol: 'tXR'
    },
    rpcUrls: {
        default: {
            http: [
                'https://xr-sepolia-testnet.rpc.caldera.xyz/http'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://xr-sepolia-testnet.explorer.caldera.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=xrSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/yooldoVerse.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.yooldoVerse = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.yooldoVerse = (0, defineChain_js_1.defineChain)({
    id: 50_005,
    name: 'Yooldo Verse',
    nativeCurrency: {
        name: 'OAS',
        symbol: 'OAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.yooldo-verse.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Explorer',
            url: 'https://explorer.yooldo-verse.xyz'
        }
    }
}); //# sourceMappingURL=yooldoVerse.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/yooldoVerseTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.yooldoVerseTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.yooldoVerseTestnet = (0, defineChain_js_1.defineChain)({
    id: 50_006,
    name: 'Yooldo Verse Testnet',
    nativeCurrency: {
        name: 'OAS',
        symbol: 'OAS',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.testnet.yooldo-verse.xyz'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Testnet Explorer',
            url: 'https://explorer.testnet.yooldo-verse.xyz'
        }
    },
    testnet: true
}); //# sourceMappingURL=yooldoVerseTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zenchainTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zenchainTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zenchainTestnet = (0, defineChain_js_1.defineChain)({
    id: 8408,
    name: 'ZenChain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ZTC',
        symbol: 'ZTC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://zenchain-testnet.api.onfinality.io/public'
            ],
            webSocket: [
                'wss://zenchain-testnet.api.onfinality.io/public-ws'
            ]
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 230019
        }
    },
    blockExplorers: {
        default: {
            name: 'Zentrace',
            url: 'https://zentrace.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=zenchainTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zeniq.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeniq = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zeniq = (0, defineChain_js_1.defineChain)({
    id: 383414847825,
    name: 'Zeniq Mainnet',
    nativeCurrency: {
        name: 'ZENIQ',
        symbol: 'ZENIQ',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.zeniq.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zeniq Explorer',
            url: 'https://zeniqscan.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=zeniq.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/0g.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroG = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zeroG = (0, defineChain_js_1.defineChain)({
    id: 16_600,
    name: '0G Newton Testnet',
    nativeCurrency: {
        name: 'A0GI',
        symbol: 'A0GI',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://evmrpc-testnet.0g.ai'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: '0G BlockChain Explorer',
            url: 'https://chainscan-newton.0g.ai'
        }
    },
    testnet: true
}); //# sourceMappingURL=0g.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zeroNetwork.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroNetwork = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zeroNetwork = (0, defineChain_js_1.defineChain)({
    id: 543_210,
    name: 'Zero Network',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zerion.io/v1/zero'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zero Network Explorer',
            url: 'https://explorer.zero.network'
        }
    },
    testnet: false
}); //# sourceMappingURL=zeroNetwork.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zetachain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zetachain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zetachain = (0, defineChain_js_1.defineChain)({
    id: 7000,
    name: 'ZetaChain',
    nativeCurrency: {
        decimals: 18,
        name: 'Zeta',
        symbol: 'ZETA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://zetachain-evm.blockpi.network/v1/rpc/public'
            ]
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1632781
        }
    },
    blockExplorers: {
        default: {
            name: 'ZetaScan',
            url: 'https://explorer.zetachain.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=zetachain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zetachainAthensTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zetachainAthensTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zetachainAthensTestnet = (0, defineChain_js_1.defineChain)({
    id: 7001,
    name: 'ZetaChain Athens Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Zeta',
        symbol: 'aZETA'
    },
    rpcUrls: {
        default: {
            http: [
                'https://zetachain-athens-evm.blockpi.network/v1/rpc/public'
            ]
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2715217
        }
    },
    blockExplorers: {
        default: {
            name: 'ZetaScan',
            url: 'https://athens.explorer.zetachain.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=zetachainAthensTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zhejiang.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zhejiang = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zhejiang = (0, defineChain_js_1.defineChain)({
    id: 1_337_803,
    name: 'Zhejiang',
    nativeCurrency: {
        name: 'Zhejiang Ether',
        symbol: 'ZhejETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zhejiang.ethpandaops.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Beaconchain',
            url: 'https://zhejiang.beaconcha.in'
        }
    },
    testnet: true
}); //# sourceMappingURL=zhejiang.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zilliqa.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zilliqa = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zilliqa = (0, defineChain_js_1.defineChain)({
    id: 32769,
    name: 'Zilliqa',
    network: 'zilliqa',
    nativeCurrency: {
        name: 'Zilliqa',
        symbol: 'ZIL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://api.zilliqa.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ethernal',
            url: 'https://evmx.zilliqa.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=zilliqa.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zilliqaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zilliqaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zilliqaTestnet = (0, defineChain_js_1.defineChain)({
    id: 33101,
    name: 'Zilliqa Testnet',
    network: 'zilliqa-testnet',
    nativeCurrency: {
        name: 'Zilliqa',
        symbol: 'ZIL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://dev-api.zilliqa.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Ethernal',
            url: 'https://evmx.testnet.zilliqa.com'
        }
    },
    testnet: true
}); //# sourceMappingURL=zilliqaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuit.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zircuit = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.zircuit = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 48900,
    name: 'Zircuit Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.zircuit.com',
                'https://zircuit1-mainnet.liquify.com',
                'https://zircuit1-mainnet.p2pify.com',
                'https://zircuit-mainnet.drpc.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zircuit Explorer',
            url: 'https://explorer.zircuit.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x92Ef6Af472b39F1b363da45E35530c24619245A4'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x17bfAfA932d2e23Bd9B909Fd5B4D2e2a27043fb1'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x386B76D9cA5F5Fb150B6BFB35CF5379B22B26dd8'
            }
        }
    },
    testnet: false
}); //# sourceMappingURL=zircuit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuitGarfieldTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zircuitGarfieldTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.zircuitGarfieldTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 48898,
    name: 'Zircuit Garfield Testnet',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://garfield-testnet.zircuit.com/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zircuit Garfield Testnet Explorer',
            url: 'https://explorer.garfield-testnet.zircuit.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11'
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0xd69D3AC5CA686cCF94b258291772bc520FEAf211'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x4E21A71Ac3F7607Da5c06153A17B1DD20E702c21'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x87a7E2bCA9E35BA49282E832a28A6023904460D8'
            }
        }
    },
    testnet: true
}); //# sourceMappingURL=zircuitGarfieldTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuitTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zircuitTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.zircuitTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 48899,
    name: 'Zircuit Testnet',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.zircuit.com',
                'https://zircuit1-testnet.p2pify.com',
                'https://zircuit1-testnet.liquify.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zircuit Testnet Explorer',
            url: 'https://explorer.testnet.zircuit.com'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 6040287
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x740C2dac453aEf7140809F80b72bf0e647af8148'
            }
        },
        portal: {
            [sourceId]: {
                address: '0x787f1C8c5924178689E0560a43D848bF8E54b23e'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x0545c5fe980098C16fcD0eCB5E79753afa6d9af9'
            }
        }
    },
    testnet: true
}); //# sourceMappingURL=zircuitTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkFair.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zkFair = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zkFair = (0, defineChain_js_1.defineChain)({
    id: 42766,
    name: 'ZKFair Mainnet',
    network: 'zkfair-mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'USD Coin',
        symbol: 'USDC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zkfair.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'zkFair Explorer',
            url: 'https://scan.zkfair.io',
            apiUrl: 'https://scan.zkfair.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6090959
        }
    },
    testnet: false
}); //# sourceMappingURL=zkFair.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkFairTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zkFairTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zkFairTestnet = (0, defineChain_js_1.defineChain)({
    id: 43851,
    name: 'ZKFair Testnet',
    network: 'zkfair-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'USD Coin',
        symbol: 'USDC'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc.zkfair.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'zkFair Explorer',
            url: 'https://testnet-scan.zkfair.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=zkFairTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkLinkNova.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zkLinkNova = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zkLinkNova = (0, defineChain_js_1.defineChain)({
    id: 810180,
    name: 'zkLink Nova',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zklink.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'zkLink Nova Block Explorer',
            url: 'https://explorer.zklink.io'
        }
    }
}); //# sourceMappingURL=zkLinkNova.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkLinkNovaSepoliaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zkLinkNovaSepoliaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zkLinkNovaSepoliaTestnet = (0, defineChain_js_1.defineChain)({
    id: 810181,
    name: 'zkLink Nova Sepolia Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.rpc.zklink.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'zkLink Nova Block Explorer',
            url: 'https://sepolia.explorer.zklink.io'
        }
    }
}); //# sourceMappingURL=zkLinkNovaSepoliaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksync.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksync = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksync = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 324,
    name: 'ZKsync Era',
    network: 'zksync-era',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.era.zksync.io'
            ],
            webSocket: [
                'wss://mainnet.era.zksync.io/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api'
        },
        native: {
            name: 'ZKsync Explorer',
            url: 'https://explorer.zksync.io/',
            apiUrl: 'https://block-explorer-api.mainnet.zksync.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963'
        },
        universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 45659388
        }
    }
}); //# sourceMappingURL=zksync.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncInMemoryNode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncInMemoryNode = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksyncInMemoryNode = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 260,
    name: 'ZKsync InMemory Node',
    network: 'zksync-in-memory-node',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://localhost:8011'
            ]
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncInMemoryNode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalCustomHyperchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncLocalCustomHyperchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksyncLocalCustomHyperchain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 272,
    name: 'ZKsync CLI Local Custom Hyperchain',
    nativeCurrency: {
        name: 'BAT',
        symbol: 'BAT',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://localhost:15200'
            ],
            webSocket: [
                'ws://localhost:15201'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ZKsync explorer',
            url: 'http://localhost:15005/',
            apiUrl: 'http://localhost:15005/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncLocalCustomHyperchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalHyperchain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncLocalHyperchain = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksyncLocalHyperchain = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 270,
    name: 'ZKsync CLI Local Hyperchain',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://localhost:15100'
            ],
            webSocket: [
                'ws://localhost:15101'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'ZKsync explorer',
            url: 'http://localhost:15005/',
            apiUrl: 'http://localhost:15005/api'
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncLocalHyperchain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalHyperchainL1.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncLocalHyperchainL1 = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
exports.zksyncLocalHyperchainL1 = (0, defineChain_js_1.defineChain)({
    id: 9,
    name: 'ZKsync CLI Local Hyperchain L1',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://localhost:15045'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'http://localhost:15001/',
            apiUrl: 'http://localhost:15001/api/v2'
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncLocalHyperchainL1.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalNode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncLocalNode = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksyncLocalNode = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 270,
    name: 'ZKsync CLI Local Node',
    network: 'zksync-cli-local-node',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'http://localhost:3050'
            ]
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncLocalNode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncSepoliaTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zksyncSepoliaTestnet = void 0;
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)");
exports.zksyncSepoliaTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 300,
    name: 'ZKsync Sepolia Testnet',
    network: 'zksync-sepolia-testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.era.zksync.dev'
            ],
            webSocket: [
                'wss://sepolia.era.zksync.dev/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia-era.zksync.network/',
            apiUrl: 'https://api-sepolia-era.zksync.network/api'
        },
        native: {
            name: 'ZKsync Explorer',
            url: 'https://sepolia.explorer.zksync.io/',
            blockExplorerApi: 'https://block-explorer-api.sepolia.zksync.dev/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963'
        },
        universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 3855712
        }
    },
    testnet: true
}); //# sourceMappingURL=zksyncSepoliaTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zora.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zora = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 1;
exports.zora = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 7777777,
    name: 'Zora',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zora.energy'
            ],
            webSocket: [
                'wss://rpc.zora.energy'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.zora.energy',
            apiUrl: 'https://explorer.zora.energy/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x9E6204F750cD866b299594e2aC9eA824E2e5f95c'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 5882
        },
        portal: {
            [sourceId]: {
                address: '0x1a0ad011913A150f69f6A19DF447A0CfD9551054'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x3e2Ea9B92B7E48A52296fD261dc26fd995284631'
            }
        }
    },
    sourceId
}); //# sourceMappingURL=zora.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zoraSepolia.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zoraSepolia = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 11_155_111;
exports.zoraSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 999999999,
    name: 'Zora Sepolia',
    network: 'zora-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Zora Sepolia',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://sepolia.rpc.zora.energy'
            ],
            webSocket: [
                'wss://sepolia.rpc.zora.energy'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zora Sepolia Explorer',
            url: 'https://sepolia.explorer.zora.energy/',
            apiUrl: 'https://sepolia.explorer.zora.energy/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9'
            }
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 83160
        },
        portal: {
            [sourceId]: {
                address: '0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f'
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB'
            }
        }
    },
    sourceId,
    testnet: true
}); //# sourceMappingURL=zoraSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zoraTestnet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zoraTestnet = void 0;
const chainConfig_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)");
const defineChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)");
const sourceId = 5;
exports.zoraTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 999,
    name: 'Zora Goerli Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Zora Goerli',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet.rpc.zora.energy'
            ],
            webSocket: [
                'wss://testnet.rpc.zora.energy'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://testnet.explorer.zora.energy',
            apiUrl: 'https://testnet.explorer.zora.energy/api'
        }
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 189123
        },
        portal: {
            [sourceId]: {
                address: '0xDb9F51790365e7dc196e7D072728df39Be958ACe'
            }
        }
    },
    sourceId,
    testnet: true
}); //# sourceMappingURL=zoraTestnet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.berachainBepolia = exports.berachain = exports.bearNetworkChainTestnet = exports.bearNetworkChainMainnet = exports.beamTestnet = exports.beam = exports.baseSepolia = exports.baseGoerli = exports.basecampTestnet = exports.base = exports.bahamut = exports.b3Sepolia = exports.b3 = exports.avalancheFuji = exports.avalanche = exports.auroria = exports.auroraTestnet = exports.aurora = exports.atletaOlympia = exports.astarZkyoto = exports.astarZkEVM = exports.astar = exports.assetChainTestnet = exports.assetChain = exports.artheraTestnet = exports.arthera = exports.artelaTestnet = exports.areonNetworkTestnet = exports.areonNetwork = exports.arenaz = exports.arbitrumSepolia = exports.arbitrumNova = exports.arbitrumGoerli = exports.arbitrum = exports.apexTestnet = exports.apeChain = exports.anvil = exports.ancient8Sepolia = exports.ancient8 = exports.alienxHalTestnet = exports.alienx = exports.alephZeroTestnet = exports.alephZero = exports.aioz = exports.adf = exports.acria = exports.acala = exports.abstractTestnet = exports.abstract = exports.abey = void 0;
exports.coreTestnet2 = exports.coreTestnet1 = exports.coreDao = exports.confluxESpaceTestnet = exports.confluxESpace = exports.coinex = exports.coinbit = exports.classic = exports.citreaTestnet = exports.chips = exports.chiliz = exports.chang = exports.celoAlfajores = exports.celo = exports.canto = exports.cannon = exports.bxnTestnet = exports.bxn = exports.btrTestnet = exports.btr = exports.bsquaredTestnet = exports.bsquared = exports.bscTestnet = exports.bscGreenfield = exports.bsc = exports.bronosTestnet = exports.bronos = exports.bounceBitTestnet = exports.bounceBit = exports.botanixTestnet = exports.boolBetaMainnet = exports.bobSepolia = exports.bobaSepolia = exports.boba = exports.bob = exports.blastSepolia = exports.blast = exports.birdlayer = exports.bitTorrentTestnet = exports.bitTorrent = exports.bitrock = exports.bitlayerTestnet = exports.bitlayer = exports.bitkubTestnet = exports.bitkub = exports.bitgert = exports.bifrost = exports.bevmMainnet = exports.berachainTestnetbArtio = exports.berachainTestnet = void 0;
exports.elysiumTestnet = exports.electroneumTestnet = exports.electroneum = exports.elastosTestnet = exports.elastos = exports.ektaTestnet = exports.ekta = exports.eduChainTestnet = exports.eduChain = exports.edgewareTestnet = exports.edgeware = exports.edgelessTestnet = exports.edgeless = exports.edexa = exports.edexaTestnet = exports.dymension = exports.dustboyIoT = exports.dreyerxTestnet = exports.dreyerxMainnet = exports.dosChainTestnet = exports.dosChain = exports.donatuz = exports.dogechain = exports.dodochainTestnet = exports.disChain = exports.diode = exports.dfk = exports.degen = exports.defichainEvmTestnet = exports.defichainEvm = exports.dchainTestnet = exports.dchain = exports.dbkchain = exports.darwinia = exports.dailyNetworkTestnet = exports.dailyNetwork = exports.cyberTestnet = exports.cyber = exports.curtis = exports.crossbell = exports.cronoszkEVMTestnet = exports.cronoszkEVM = exports.cronosTestnet = exports.cronos = exports.creditCoin3Testnet = exports.creditCoin3Mainnet = exports.creatorTestnet = exports.crab = exports.cornTestnet = exports.corn = void 0;
exports.genesys = exports.geist = exports.garnet = exports.fusionTestnet = exports.fusion = exports.fuseSparknet = exports.fuse = exports.funkiSepolia = exports.funkiMainnet = exports.fraxtalTestnet = exports.fraxtal = exports.foundry = exports.forta = exports.formTestnet = exports.formicarium = exports.form = exports.forma = exports.fluentTestnet = exports.fluenceTestnet = exports.fluenceStage = exports.fluence = exports.flowTestnet = exports.flowPreviewnet = exports.flowMainnet = exports.flareTestnet = exports.flare = exports.flame = exports.fireChain = exports.filecoinHyperspace = exports.filecoinCalibration = exports.filecoin = exports.fibo = exports.fantomTestnet = exports.fantomSonicTestnet = exports.fantom = exports.exsatTestnet = exports.exsat = exports.expanse = exports.excelonMainnet = exports.evmosTestnet = exports.evmos = exports.etp = exports.ethernity = exports.etherlinkTestnet = exports.etherlink = exports.eosTestnet = exports.eos = exports.eon = exports.enuls = exports.energy = void 0;
exports.iSunCoin = exports.iotexTestnet = exports.iotex = exports.iotaTestnet = exports.iota = exports.inkSepolia = exports.ink = exports.initVerseGenesis = exports.initVerse = exports.inEVM = exports.immutableZkEvmTestnet = exports.immutableZkEvm = exports.idchain = exports.hychainTestnet = exports.hychain = exports.humanodeTestnet5 = exports.humanode = exports.huddle01Testnet = exports.huddle01Mainnet = exports.hpb = exports.hoodi = exports.holesky = exports.hemiSepolia = exports.hemi = exports.hela = exports.hederaTestnet = exports.hederaPreviewnet = exports.hedera = exports.haustTestnet = exports.hashkeyTestnet = exports.hashkey = exports.harmonyOne = exports.hardhat = exports.haqqTestedge2 = exports.haqqMainnet = exports.happychainTestnet = exports.ham = exports.guruTestnet = exports.guruNetwork = exports.gunz = exports.gravity = exports.goerli = exports.godwoken = exports.goChain = exports.gobi = exports.goat = exports.gnosisChiado = exports.gnosis = exports.glideL2Protocol = exports.glideL1Protocol = void 0;
exports.lumiaTestnet = exports.lumiaMainnet = exports.luksoTestnet = exports.lukso = exports.loop = exports.localhost = exports.liskSepolia = exports.lisk = exports.lineaTestnet = exports.lineaSepolia = exports.lineaGoerli = exports.linea = exports.lightlinkPhoenix = exports.lightlinkPegasus = exports.lestnet = exports.lensTestnet = exports.lens = exports.lavita = exports.l3xTestnet = exports.l3x = exports.kromaSepolia = exports.kroma = exports.koi = exports.klaytnBaobab = exports.kairos = exports.kaia = exports.klaytn = exports.kinto = exports.kcc = exports.kavaTestnet = exports.kava = exports.kardiaChain = exports.kakarotStarknetSepolia = exports.kakarotSepolia = exports.karura = exports.juneoUSDT1Chain = exports.juneoUSD1Chain = exports.juneoSocotraTestnet = exports.juneoSGD1Chain = exports.juneomBTC1Chain = exports.juneoLTC1Chain = exports.juneoLINK1Chain = exports.juneoGLD1Chain = exports.juneoEUR1Chain = exports.juneoDOGE1Chain = exports.juneoDAI1Chain = exports.juneoBCH1Chain = exports.juneo = exports.jbcTestnet = exports.jbc = void 0;
exports.nearTestnet = exports.near = exports.nautilus = exports.nahmii = exports.morphSepolia = exports.morphHolesky = exports.morph = exports.moonriver = exports.moonbeamDev = exports.moonbeam = exports.moonbaseAlpha = exports.monadTestnet = exports.modeTestnet = exports.mode = exports.mitosisTestnet = exports.mintSepoliaTestnet = exports.mint = exports.mevTestnet = exports.mev = exports.metisGoerli = exports.metisSepolia = exports.metis = exports.meterTestnet = exports.meter = exports.metalL2 = exports.metadium = exports.metachainIstanbul = exports.metachain = exports.merlinErigonTestnet = exports.merlin = exports.memecore = exports.meld = exports.mekong = exports.megaethTestnet = exports.mchVerse = exports.matchainTestnet = exports.matchain = exports.mapProtocol = exports.mantleTestnet = exports.mantleSepoliaTestnet = exports.mantle = exports.mantaTestnet = exports.mantaSepoliaTestnet = exports.manta = exports.mandala = exports.mainnet = exports.lyra = exports.lycan = exports.lumozTestnet = exports.lumoz = void 0;
exports.polynomialSepolia = exports.polynomial = exports.polygonZkEvmTestnet = exports.polygonZkEvmCardona = exports.polygonZkEvm = exports.polygonMumbai = exports.polygonAmoy = exports.polygon = exports.polterTestnet = exports.plumeTestnet = exports.plumeSepolia = exports.plumeMainnet = exports.plumeDevnet = exports.plume = exports.plinga = exports.playfiAlbireo = exports.planq = exports.phoenix = exports.pgnTestnet = exports.pgn = exports.peaq = exports.palmTestnet = exports.palm = exports.otimDevnet = exports.orderlySepolia = exports.orderly = exports.optopiaTestnet = exports.optopia = exports.optimismSepolia = exports.optimismGoerli = exports.optimism = exports.opBNBTestnet = exports.opBNB = exports.oortMainnetDev = exports.oneWorld = exports.omniOmega = exports.omni = exports.omax = exports.okc = exports.odysseyTestnet = exports.oasys = exports.oasisTestnet = exports.nibiru = exports.nexilix = exports.nexi = exports.newton = exports.neoxT4 = exports.neoxMainnet = exports.neonMainnet = exports.neonDevnet = void 0;
exports.sidraChain = exports.shimmerTestnet = exports.shimmer = exports.shiden = exports.shibariumTestnet = exports.shibarium = exports.shardeumSphinx = exports.shardeum = exports.shapeSepolia = exports.shape = exports.sepolia = exports.seiTestnet = exports.seismicDevnet = exports.seiDevnet = exports.sei = exports.scrollSepolia = exports.satoshiVMTestnet = exports.satoshiVM = exports.sapphireTestnet = exports.sapphire = exports.sanko = exports.saigon = exports.saga = exports.saakuru = exports.rss3Sepolia = exports.rss3 = exports.rootstockTestnet = exports.rootstock = exports.rootPorcini = exports.root = exports.ronin = exports.rolluxTestnet = exports.rollux = exports.rivalz = exports.riseTestnet = exports.reddioSepolia = exports.reyaNetwork = exports.rei = exports.redstone = exports.redbellyTestnet = exports.redbellyMainnet = exports.real = exports.qTestnet = exports.qMainnet = exports.ql1 = exports.pyrope = exports.pumpfiTestnet = exports.pulsechainV4 = exports.pulsechain = exports.premiumBlockTestnet = void 0;
exports.syscoin = exports.swissdlt = exports.swellchainTestnet = exports.swellchain = exports.swanSaturnTestnet = exports.swanProximaTestnet = exports.swan = exports.superseedSepolia = exports.superseed = exports.superposition = exports.superlumio = exports.stratis = exports.storyTestnet = exports.storyOdyssey = exports.storyAeneid = exports.story = exports.step = exports.statusNetworkSepolia = exports.statusSepolia = exports.spicy = exports.sophonTestnet = exports.sophon = exports.songbirdTestnet = exports.songbird = exports.sonicBlazeTestnet = exports.sonicTestnet = exports.sonic = exports.soneiumMinato = exports.soneium = exports.somniaTestnet = exports.snaxTestnet = exports.snax = exports.sketchpad = exports.skaleTitanTestnet = exports.skaleTitan = exports.skaleRazor = exports.skaleNebulaTestnet = exports.skaleNebula = exports.skaleHumanProtocol = exports.skaleExorde = exports.skaleEuropaTestnet = exports.skaleEuropa = exports.skaleCryptoColosseum = exports.skaleCryptoBlades = exports.skaleCalypsoTestnet = exports.skaleCalypso = exports.skaleBlockBrawlers = exports.sixProtocol = exports.siliconSepolia = exports.silicon = void 0;
exports.whitechain = exports.westendAssetHub = exports.wemixTestnet = exports.wemix = exports.weaveVMAlphanet = exports.wanchainTestnet = exports.wanchain = exports.visionTestnet = exports.vision = exports.victionTestnet = exports.viction = exports.velas = exports.vechain = exports.vanar = exports.unreal = exports.uniqueQuartz = exports.uniqueOpal = exports.unique = exports.unichainSepolia = exports.unichain = exports.ultronTestnet = exports.ultron = exports.ultraTestnet = exports.ultra = exports.ubiq = exports.tronShasta = exports.tron = exports.treasureTopaz = exports.treasure = exports.tomb = exports.tiktrixTestnet = exports.thunderTestnet = exports.thunderCore = exports.thetaTestnet = exports.theta = exports.that = exports.thaiChain = exports.ternoa = exports.tenet = exports.telosTestnet = exports.telos = exports.telcoinTestnet = exports.taraxaTestnet = exports.taraxa = exports.taikoTestnetSepolia = exports.taikoKatla = exports.taikoJolnir = exports.taikoHekla = exports.taiko = exports.syscoinTestnet = void 0;
exports.zoraTestnet = exports.zoraSepolia = exports.zora = exports.zksyncSepoliaTestnet = exports.zkSyncSepoliaTestnet = exports.zksyncLocalNode = exports.zkSyncLocalNode = exports.zksyncLocalHyperchainL1 = exports.zksyncLocalHyperchain = exports.zksyncLocalCustomHyperchain = exports.zksyncInMemoryNode = exports.zkSyncInMemoryNode = exports.zksync = exports.zkSync = exports.zkLinkNovaSepoliaTestnet = exports.zkLinkNova = exports.zkFairTestnet = exports.zkFair = exports.zircuitTestnet = exports.zircuitGarfieldTestnet = exports.zircuit = exports.zilliqaTestnet = exports.zilliqa = exports.zhejiang = exports.zetachainAthensTestnet = exports.zetachain = exports.zeroNetwork = exports.zeroG = exports.zeniq = exports.zenchainTestnet = exports.yooldoVerseTestnet = exports.yooldoVerse = exports.xrSepolia = exports.xrplevmTestnet = exports.xrplevmDevnet = exports.xrOne = exports.xLayerTestnet = exports.x1Testnet = exports.xLayer = exports.xdcTestnet = exports.xdc = exports.xaiTestnet = exports.xai = exports.worldLand = exports.worldchainSepolia = exports.worldchain = exports.wmcTestnet = exports.whitechainTestnet = void 0;
var abey_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "abey", {
    enumerable: true,
    get: function() {
        return abey_js_1.abey;
    }
});
var abstract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abstract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "abstract", {
    enumerable: true,
    get: function() {
        return abstract_js_1.abstract;
    }
});
var abstractTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/abstractTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "abstractTestnet", {
    enumerable: true,
    get: function() {
        return abstractTestnet_js_1.abstractTestnet;
    }
});
var acala_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/acala.js [app-client] (ecmascript)");
Object.defineProperty(exports, "acala", {
    enumerable: true,
    get: function() {
        return acala_js_1.acala;
    }
});
var acria_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/acria.js [app-client] (ecmascript)");
Object.defineProperty(exports, "acria", {
    enumerable: true,
    get: function() {
        return acria_js_1.acria;
    }
});
var adf_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/adf.js [app-client] (ecmascript)");
Object.defineProperty(exports, "adf", {
    enumerable: true,
    get: function() {
        return adf_js_1.adf;
    }
});
var aioz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/aioz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "aioz", {
    enumerable: true,
    get: function() {
        return aioz_js_1.aioz;
    }
});
var alephZero_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alephZero.js [app-client] (ecmascript)");
Object.defineProperty(exports, "alephZero", {
    enumerable: true,
    get: function() {
        return alephZero_js_1.alephZero;
    }
});
var alephZeroTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alephZeroTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "alephZeroTestnet", {
    enumerable: true,
    get: function() {
        return alephZeroTestnet_js_1.alephZeroTestnet;
    }
});
var alienX_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alienX.js [app-client] (ecmascript)");
Object.defineProperty(exports, "alienx", {
    enumerable: true,
    get: function() {
        return alienX_js_1.alienx;
    }
});
var alienXHalTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/alienXHalTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "alienxHalTestnet", {
    enumerable: true,
    get: function() {
        return alienXHalTestnet_js_1.alienxHalTestnet;
    }
});
var ancient8_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ancient8.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ancient8", {
    enumerable: true,
    get: function() {
        return ancient8_js_1.ancient8;
    }
});
var ancient8Sepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ancient8Sepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ancient8Sepolia", {
    enumerable: true,
    get: function() {
        return ancient8Sepolia_js_1.ancient8Sepolia;
    }
});
var anvil_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/anvil.js [app-client] (ecmascript)");
Object.defineProperty(exports, "anvil", {
    enumerable: true,
    get: function() {
        return anvil_js_1.anvil;
    }
});
var apeChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/apeChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "apeChain", {
    enumerable: true,
    get: function() {
        return apeChain_js_1.apeChain;
    }
});
var apexTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/apexTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "apexTestnet", {
    enumerable: true,
    get: function() {
        return apexTestnet_js_1.apexTestnet;
    }
});
var arbitrum_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrum.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arbitrum", {
    enumerable: true,
    get: function() {
        return arbitrum_js_1.arbitrum;
    }
});
var arbitrumGoerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumGoerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arbitrumGoerli", {
    enumerable: true,
    get: function() {
        return arbitrumGoerli_js_1.arbitrumGoerli;
    }
});
var arbitrumNova_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumNova.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arbitrumNova", {
    enumerable: true,
    get: function() {
        return arbitrumNova_js_1.arbitrumNova;
    }
});
var arbitrumSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arbitrumSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arbitrumSepolia", {
    enumerable: true,
    get: function() {
        return arbitrumSepolia_js_1.arbitrumSepolia;
    }
});
var arenaz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arenaz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arenaz", {
    enumerable: true,
    get: function() {
        return arenaz_js_1.arenaz;
    }
});
var areonNetwork_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/areonNetwork.js [app-client] (ecmascript)");
Object.defineProperty(exports, "areonNetwork", {
    enumerable: true,
    get: function() {
        return areonNetwork_js_1.areonNetwork;
    }
});
var areonNetworkTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/areonNetworkTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "areonNetworkTestnet", {
    enumerable: true,
    get: function() {
        return areonNetworkTestnet_js_1.areonNetworkTestnet;
    }
});
var artelaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/artelaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "artelaTestnet", {
    enumerable: true,
    get: function() {
        return artelaTestnet_js_1.artelaTestnet;
    }
});
var arthera_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/arthera.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arthera", {
    enumerable: true,
    get: function() {
        return arthera_js_1.arthera;
    }
});
var artheraTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/artheraTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "artheraTestnet", {
    enumerable: true,
    get: function() {
        return artheraTestnet_js_1.artheraTestnet;
    }
});
var assetChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/assetChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assetChain", {
    enumerable: true,
    get: function() {
        return assetChain_js_1.assetChain;
    }
});
var assetChainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/assetChainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assetChainTestnet", {
    enumerable: true,
    get: function() {
        return assetChainTestnet_js_1.assetChainTestnet;
    }
});
var astar_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astar.js [app-client] (ecmascript)");
Object.defineProperty(exports, "astar", {
    enumerable: true,
    get: function() {
        return astar_js_1.astar;
    }
});
var astarZkEVM_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astarZkEVM.js [app-client] (ecmascript)");
Object.defineProperty(exports, "astarZkEVM", {
    enumerable: true,
    get: function() {
        return astarZkEVM_js_1.astarZkEVM;
    }
});
var astarZkyoto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/astarZkyoto.js [app-client] (ecmascript)");
Object.defineProperty(exports, "astarZkyoto", {
    enumerable: true,
    get: function() {
        return astarZkyoto_js_1.astarZkyoto;
    }
});
var atletaOlympia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/atletaOlympia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "atletaOlympia", {
    enumerable: true,
    get: function() {
        return atletaOlympia_js_1.atletaOlympia;
    }
});
var aurora_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/aurora.js [app-client] (ecmascript)");
Object.defineProperty(exports, "aurora", {
    enumerable: true,
    get: function() {
        return aurora_js_1.aurora;
    }
});
var auroraTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/auroraTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "auroraTestnet", {
    enumerable: true,
    get: function() {
        return auroraTestnet_js_1.auroraTestnet;
    }
});
var auroria_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/auroria.js [app-client] (ecmascript)");
Object.defineProperty(exports, "auroria", {
    enumerable: true,
    get: function() {
        return auroria_js_1.auroria;
    }
});
var avalanche_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/avalanche.js [app-client] (ecmascript)");
Object.defineProperty(exports, "avalanche", {
    enumerable: true,
    get: function() {
        return avalanche_js_1.avalanche;
    }
});
var avalancheFuji_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/avalancheFuji.js [app-client] (ecmascript)");
Object.defineProperty(exports, "avalancheFuji", {
    enumerable: true,
    get: function() {
        return avalancheFuji_js_1.avalancheFuji;
    }
});
var b3_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/b3.js [app-client] (ecmascript)");
Object.defineProperty(exports, "b3", {
    enumerable: true,
    get: function() {
        return b3_js_1.b3;
    }
});
var b3Sepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/b3Sepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "b3Sepolia", {
    enumerable: true,
    get: function() {
        return b3Sepolia_js_1.b3Sepolia;
    }
});
var bahamut_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bahamut.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bahamut", {
    enumerable: true,
    get: function() {
        return bahamut_js_1.bahamut;
    }
});
var base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/base.js [app-client] (ecmascript)");
Object.defineProperty(exports, "base", {
    enumerable: true,
    get: function() {
        return base_js_1.base;
    }
});
var basecampTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/basecampTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "basecampTestnet", {
    enumerable: true,
    get: function() {
        return basecampTestnet_js_1.basecampTestnet;
    }
});
var baseGoerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/baseGoerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "baseGoerli", {
    enumerable: true,
    get: function() {
        return baseGoerli_js_1.baseGoerli;
    }
});
var baseSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "baseSepolia", {
    enumerable: true,
    get: function() {
        return baseSepolia_js_1.baseSepolia;
    }
});
var beam_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/beam.js [app-client] (ecmascript)");
Object.defineProperty(exports, "beam", {
    enumerable: true,
    get: function() {
        return beam_js_1.beam;
    }
});
var beamTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/beamTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "beamTestnet", {
    enumerable: true,
    get: function() {
        return beamTestnet_js_1.beamTestnet;
    }
});
var bearNetworkChainMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bearNetworkChainMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bearNetworkChainMainnet", {
    enumerable: true,
    get: function() {
        return bearNetworkChainMainnet_js_1.bearNetworkChainMainnet;
    }
});
var bearNetworkChainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bearNetworkChainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bearNetworkChainTestnet", {
    enumerable: true,
    get: function() {
        return bearNetworkChainTestnet_js_1.bearNetworkChainTestnet;
    }
});
var berachain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "berachain", {
    enumerable: true,
    get: function() {
        return berachain_js_1.berachain;
    }
});
var berachainBepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainBepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "berachainBepolia", {
    enumerable: true,
    get: function() {
        return berachainBepolia_js_1.berachainBepolia;
    }
});
var berachainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "berachainTestnet", {
    enumerable: true,
    get: function() {
        return berachainTestnet_js_1.berachainTestnet;
    }
});
var berachainTestnetbArtio_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/berachainTestnetbArtio.js [app-client] (ecmascript)");
Object.defineProperty(exports, "berachainTestnetbArtio", {
    enumerable: true,
    get: function() {
        return berachainTestnetbArtio_js_1.berachainTestnetbArtio;
    }
});
var bevmMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bevmMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bevmMainnet", {
    enumerable: true,
    get: function() {
        return bevmMainnet_js_1.bevmMainnet;
    }
});
var bifrost_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bifrost.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bifrost", {
    enumerable: true,
    get: function() {
        return bifrost_js_1.bifrost;
    }
});
var bitgert_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitgert.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitgert", {
    enumerable: true,
    get: function() {
        return bitgert_js_1.bitgert;
    }
});
var bitkub_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitkub.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitkub", {
    enumerable: true,
    get: function() {
        return bitkub_js_1.bitkub;
    }
});
var bitkubTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitkubTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitkubTestnet", {
    enumerable: true,
    get: function() {
        return bitkubTestnet_js_1.bitkubTestnet;
    }
});
var bitlayer_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitlayer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitlayer", {
    enumerable: true,
    get: function() {
        return bitlayer_js_1.bitlayer;
    }
});
var bitlayerTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitlayerTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitlayerTestnet", {
    enumerable: true,
    get: function() {
        return bitlayerTestnet_js_1.bitlayerTestnet;
    }
});
var bitrock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitrock.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitrock", {
    enumerable: true,
    get: function() {
        return bitrock_js_1.bitrock;
    }
});
var bitTorrent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitTorrent.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitTorrent", {
    enumerable: true,
    get: function() {
        return bitTorrent_js_1.bitTorrent;
    }
});
var bitTorrentTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bitTorrentTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bitTorrentTestnet", {
    enumerable: true,
    get: function() {
        return bitTorrentTestnet_js_1.bitTorrentTestnet;
    }
});
var birdlayer_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/birdlayer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "birdlayer", {
    enumerable: true,
    get: function() {
        return birdlayer_js_1.birdlayer;
    }
});
var blast_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/blast.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blast", {
    enumerable: true,
    get: function() {
        return blast_js_1.blast;
    }
});
var blastSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/blastSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blastSepolia", {
    enumerable: true,
    get: function() {
        return blastSepolia_js_1.blastSepolia;
    }
});
var bob_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bob.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bob", {
    enumerable: true,
    get: function() {
        return bob_js_1.bob;
    }
});
var boba_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/boba.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boba", {
    enumerable: true,
    get: function() {
        return boba_js_1.boba;
    }
});
var bobaSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bobaSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bobaSepolia", {
    enumerable: true,
    get: function() {
        return bobaSepolia_js_1.bobaSepolia;
    }
});
var bobSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bobSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bobSepolia", {
    enumerable: true,
    get: function() {
        return bobSepolia_js_1.bobSepolia;
    }
});
var boolBetaMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/boolBetaMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolBetaMainnet", {
    enumerable: true,
    get: function() {
        return boolBetaMainnet_js_1.boolBetaMainnet;
    }
});
var botanixTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/botanixTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "botanixTestnet", {
    enumerable: true,
    get: function() {
        return botanixTestnet_js_1.botanixTestnet;
    }
});
var bounceBit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bounceBit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bounceBit", {
    enumerable: true,
    get: function() {
        return bounceBit_js_1.bounceBit;
    }
});
var bounceBitTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bounceBitTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bounceBitTestnet", {
    enumerable: true,
    get: function() {
        return bounceBitTestnet_js_1.bounceBitTestnet;
    }
});
var bronos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bronos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bronos", {
    enumerable: true,
    get: function() {
        return bronos_js_1.bronos;
    }
});
var bronosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bronosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bronosTestnet", {
    enumerable: true,
    get: function() {
        return bronosTestnet_js_1.bronosTestnet;
    }
});
var bsc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bsc", {
    enumerable: true,
    get: function() {
        return bsc_js_1.bsc;
    }
});
var bscGreenfield_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bscGreenfield.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bscGreenfield", {
    enumerable: true,
    get: function() {
        return bscGreenfield_js_1.bscGreenfield;
    }
});
var bscTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bscTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bscTestnet", {
    enumerable: true,
    get: function() {
        return bscTestnet_js_1.bscTestnet;
    }
});
var bsquared_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsquared.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bsquared", {
    enumerable: true,
    get: function() {
        return bsquared_js_1.bsquared;
    }
});
var bsquaredTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bsquaredTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bsquaredTestnet", {
    enumerable: true,
    get: function() {
        return bsquaredTestnet_js_1.bsquaredTestnet;
    }
});
var btr_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/btr.js [app-client] (ecmascript)");
Object.defineProperty(exports, "btr", {
    enumerable: true,
    get: function() {
        return btr_js_1.btr;
    }
});
var btrTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/btrTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "btrTestnet", {
    enumerable: true,
    get: function() {
        return btrTestnet_js_1.btrTestnet;
    }
});
var bxn_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bxn.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bxn", {
    enumerable: true,
    get: function() {
        return bxn_js_1.bxn;
    }
});
var bxnTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/bxnTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bxnTestnet", {
    enumerable: true,
    get: function() {
        return bxnTestnet_js_1.bxnTestnet;
    }
});
var cannon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cannon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cannon", {
    enumerable: true,
    get: function() {
        return cannon_js_1.cannon;
    }
});
var canto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/canto.js [app-client] (ecmascript)");
Object.defineProperty(exports, "canto", {
    enumerable: true,
    get: function() {
        return canto_js_1.canto;
    }
});
var celo_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/celo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "celo", {
    enumerable: true,
    get: function() {
        return celo_js_1.celo;
    }
});
var celoAlfajores_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/celoAlfajores.js [app-client] (ecmascript)");
Object.defineProperty(exports, "celoAlfajores", {
    enumerable: true,
    get: function() {
        return celoAlfajores_js_1.celoAlfajores;
    }
});
var chang_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chang.js [app-client] (ecmascript)");
Object.defineProperty(exports, "chang", {
    enumerable: true,
    get: function() {
        return chang_js_1.chang;
    }
});
var chiliz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chiliz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "chiliz", {
    enumerable: true,
    get: function() {
        return chiliz_js_1.chiliz;
    }
});
var chips_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/chips.js [app-client] (ecmascript)");
Object.defineProperty(exports, "chips", {
    enumerable: true,
    get: function() {
        return chips_js_1.chips;
    }
});
var citreaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/citreaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "citreaTestnet", {
    enumerable: true,
    get: function() {
        return citreaTestnet_js_1.citreaTestnet;
    }
});
var classic_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/classic.js [app-client] (ecmascript)");
Object.defineProperty(exports, "classic", {
    enumerable: true,
    get: function() {
        return classic_js_1.classic;
    }
});
var coinbit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coinbit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "coinbit", {
    enumerable: true,
    get: function() {
        return coinbit_js_1.coinbit;
    }
});
var coinex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coinex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "coinex", {
    enumerable: true,
    get: function() {
        return coinex_js_1.coinex;
    }
});
var confluxESpace_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/confluxESpace.js [app-client] (ecmascript)");
Object.defineProperty(exports, "confluxESpace", {
    enumerable: true,
    get: function() {
        return confluxESpace_js_1.confluxESpace;
    }
});
var confluxESpaceTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/confluxESpaceTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "confluxESpaceTestnet", {
    enumerable: true,
    get: function() {
        return confluxESpaceTestnet_js_1.confluxESpaceTestnet;
    }
});
var coreDao_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreDao.js [app-client] (ecmascript)");
Object.defineProperty(exports, "coreDao", {
    enumerable: true,
    get: function() {
        return coreDao_js_1.coreDao;
    }
});
var coreTestnet1_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreTestnet1.js [app-client] (ecmascript)");
Object.defineProperty(exports, "coreTestnet1", {
    enumerable: true,
    get: function() {
        return coreTestnet1_js_1.coreTestnet1;
    }
});
var coreTestnet2_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/coreTestnet2.js [app-client] (ecmascript)");
Object.defineProperty(exports, "coreTestnet2", {
    enumerable: true,
    get: function() {
        return coreTestnet2_js_1.coreTestnet2;
    }
});
var corn_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/corn.js [app-client] (ecmascript)");
Object.defineProperty(exports, "corn", {
    enumerable: true,
    get: function() {
        return corn_js_1.corn;
    }
});
var cornTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cornTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cornTestnet", {
    enumerable: true,
    get: function() {
        return cornTestnet_js_1.cornTestnet;
    }
});
var crab_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/crab.js [app-client] (ecmascript)");
Object.defineProperty(exports, "crab", {
    enumerable: true,
    get: function() {
        return crab_js_1.crab;
    }
});
var creatorTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creatorTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "creatorTestnet", {
    enumerable: true,
    get: function() {
        return creatorTestnet_js_1.creatorTestnet;
    }
});
var creditCoin3Mainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creditCoin3Mainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "creditCoin3Mainnet", {
    enumerable: true,
    get: function() {
        return creditCoin3Mainnet_js_1.creditCoin3Mainnet;
    }
});
var creditCoin3Testnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/creditCoin3Testnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "creditCoin3Testnet", {
    enumerable: true,
    get: function() {
        return creditCoin3Testnet_js_1.creditCoin3Testnet;
    }
});
var cronos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cronos", {
    enumerable: true,
    get: function() {
        return cronos_js_1.cronos;
    }
});
var cronosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cronosTestnet", {
    enumerable: true,
    get: function() {
        return cronosTestnet_js_1.cronosTestnet;
    }
});
var cronoszkEVM_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronoszkEVM.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cronoszkEVM", {
    enumerable: true,
    get: function() {
        return cronoszkEVM_js_1.cronoszkEVM;
    }
});
var cronoszkEVMTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cronoszkEVMTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cronoszkEVMTestnet", {
    enumerable: true,
    get: function() {
        return cronoszkEVMTestnet_js_1.cronoszkEVMTestnet;
    }
});
var crossbell_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/crossbell.js [app-client] (ecmascript)");
Object.defineProperty(exports, "crossbell", {
    enumerable: true,
    get: function() {
        return crossbell_js_1.crossbell;
    }
});
var curtis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/curtis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "curtis", {
    enumerable: true,
    get: function() {
        return curtis_js_1.curtis;
    }
});
var cyber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cyber.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cyber", {
    enumerable: true,
    get: function() {
        return cyber_js_1.cyber;
    }
});
var cyberTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/cyberTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "cyberTestnet", {
    enumerable: true,
    get: function() {
        return cyberTestnet_js_1.cyberTestnet;
    }
});
var dailyNetwork_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dailyNetwork.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dailyNetwork", {
    enumerable: true,
    get: function() {
        return dailyNetwork_js_1.dailyNetwork;
    }
});
var dailyNetworkTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dailyNetworkTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dailyNetworkTestnet", {
    enumerable: true,
    get: function() {
        return dailyNetworkTestnet_js_1.dailyNetworkTestnet;
    }
});
var darwinia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/darwinia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "darwinia", {
    enumerable: true,
    get: function() {
        return darwinia_js_1.darwinia;
    }
});
var dbkchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dbkchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dbkchain", {
    enumerable: true,
    get: function() {
        return dbkchain_js_1.dbkchain;
    }
});
var dchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dchain", {
    enumerable: true,
    get: function() {
        return dchain_js_1.dchain;
    }
});
var dchainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dchainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dchainTestnet", {
    enumerable: true,
    get: function() {
        return dchainTestnet_js_1.dchainTestnet;
    }
});
var defichainEvm_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/defichainEvm.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defichainEvm", {
    enumerable: true,
    get: function() {
        return defichainEvm_js_1.defichainEvm;
    }
});
var defichainEvmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/defichainEvmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defichainEvmTestnet", {
    enumerable: true,
    get: function() {
        return defichainEvmTestnet_js_1.defichainEvmTestnet;
    }
});
var degen_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/degen.js [app-client] (ecmascript)");
Object.defineProperty(exports, "degen", {
    enumerable: true,
    get: function() {
        return degen_js_1.degen;
    }
});
var dfk_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dfk.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dfk", {
    enumerable: true,
    get: function() {
        return dfk_js_1.dfk;
    }
});
var diode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/diode.js [app-client] (ecmascript)");
Object.defineProperty(exports, "diode", {
    enumerable: true,
    get: function() {
        return diode_js_1.diode;
    }
});
var disChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/disChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "disChain", {
    enumerable: true,
    get: function() {
        return disChain_js_1.disChain;
    }
});
var dodochainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dodochainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dodochainTestnet", {
    enumerable: true,
    get: function() {
        return dodochainTestnet_js_1.dodochainTestnet;
    }
});
var dogechain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dogechain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dogechain", {
    enumerable: true,
    get: function() {
        return dogechain_js_1.dogechain;
    }
});
var donatuz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/donatuz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "donatuz", {
    enumerable: true,
    get: function() {
        return donatuz_js_1.donatuz;
    }
});
var dosChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dosChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dosChain", {
    enumerable: true,
    get: function() {
        return dosChain_js_1.dosChain;
    }
});
var dosChainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dosChainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dosChainTestnet", {
    enumerable: true,
    get: function() {
        return dosChainTestnet_js_1.dosChainTestnet;
    }
});
var dreyerxMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dreyerxMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dreyerxMainnet", {
    enumerable: true,
    get: function() {
        return dreyerxMainnet_js_1.dreyerxMainnet;
    }
});
var dreyerxTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dreyerxTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dreyerxTestnet", {
    enumerable: true,
    get: function() {
        return dreyerxTestnet_js_1.dreyerxTestnet;
    }
});
var dustboyIoT_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dustboyIoT.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dustboyIoT", {
    enumerable: true,
    get: function() {
        return dustboyIoT_js_1.dustboyIoT;
    }
});
var dymension_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/dymension.js [app-client] (ecmascript)");
Object.defineProperty(exports, "dymension", {
    enumerable: true,
    get: function() {
        return dymension_js_1.dymension;
    }
});
var edexaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edexaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edexaTestnet", {
    enumerable: true,
    get: function() {
        return edexaTestnet_js_1.edexaTestnet;
    }
});
var edexa_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edexa.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edexa", {
    enumerable: true,
    get: function() {
        return edexa_js_1.edexa;
    }
});
var edgeless_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgeless.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edgeless", {
    enumerable: true,
    get: function() {
        return edgeless_js_1.edgeless;
    }
});
var edgelessTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgelessTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edgelessTestnet", {
    enumerable: true,
    get: function() {
        return edgelessTestnet_js_1.edgelessTestnet;
    }
});
var edgeware_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgeware.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edgeware", {
    enumerable: true,
    get: function() {
        return edgeware_js_1.edgeware;
    }
});
var edgewareTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/edgewareTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "edgewareTestnet", {
    enumerable: true,
    get: function() {
        return edgewareTestnet_js_1.edgewareTestnet;
    }
});
var eduChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eduChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "eduChain", {
    enumerable: true,
    get: function() {
        return eduChain_js_1.eduChain;
    }
});
var eduChainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eduChainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "eduChainTestnet", {
    enumerable: true,
    get: function() {
        return eduChainTestnet_js_1.eduChainTestnet;
    }
});
var ekta_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ekta.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ekta", {
    enumerable: true,
    get: function() {
        return ekta_js_1.ekta;
    }
});
var ektaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ektaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ektaTestnet", {
    enumerable: true,
    get: function() {
        return ektaTestnet_js_1.ektaTestnet;
    }
});
var elastos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elastos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "elastos", {
    enumerable: true,
    get: function() {
        return elastos_js_1.elastos;
    }
});
var elastosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elastosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "elastosTestnet", {
    enumerable: true,
    get: function() {
        return elastosTestnet_js_1.elastosTestnet;
    }
});
var electroneum_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/electroneum.js [app-client] (ecmascript)");
Object.defineProperty(exports, "electroneum", {
    enumerable: true,
    get: function() {
        return electroneum_js_1.electroneum;
    }
});
var electroneumTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/electroneumTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "electroneumTestnet", {
    enumerable: true,
    get: function() {
        return electroneumTestnet_js_1.electroneumTestnet;
    }
});
var elysiumTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/elysiumTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "elysiumTestnet", {
    enumerable: true,
    get: function() {
        return elysiumTestnet_js_1.elysiumTestnet;
    }
});
var energy_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/energy.js [app-client] (ecmascript)");
Object.defineProperty(exports, "energy", {
    enumerable: true,
    get: function() {
        return energy_js_1.energy;
    }
});
var enuls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/enuls.js [app-client] (ecmascript)");
Object.defineProperty(exports, "enuls", {
    enumerable: true,
    get: function() {
        return enuls_js_1.enuls;
    }
});
var eon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "eon", {
    enumerable: true,
    get: function() {
        return eon_js_1.eon;
    }
});
var eos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "eos", {
    enumerable: true,
    get: function() {
        return eos_js_1.eos;
    }
});
var eosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/eosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "eosTestnet", {
    enumerable: true,
    get: function() {
        return eosTestnet_js_1.eosTestnet;
    }
});
var etherlink_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etherlink.js [app-client] (ecmascript)");
Object.defineProperty(exports, "etherlink", {
    enumerable: true,
    get: function() {
        return etherlink_js_1.etherlink;
    }
});
var etherlinkTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etherlinkTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "etherlinkTestnet", {
    enumerable: true,
    get: function() {
        return etherlinkTestnet_js_1.etherlinkTestnet;
    }
});
var ethernity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ethernity.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ethernity", {
    enumerable: true,
    get: function() {
        return ethernity_js_1.ethernity;
    }
});
var etp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/etp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "etp", {
    enumerable: true,
    get: function() {
        return etp_js_1.etp;
    }
});
var evmos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/evmos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "evmos", {
    enumerable: true,
    get: function() {
        return evmos_js_1.evmos;
    }
});
var evmosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/evmosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "evmosTestnet", {
    enumerable: true,
    get: function() {
        return evmosTestnet_js_1.evmosTestnet;
    }
});
var excelonMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/excelonMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "excelonMainnet", {
    enumerable: true,
    get: function() {
        return excelonMainnet_js_1.excelonMainnet;
    }
});
var expanse_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/expanse.js [app-client] (ecmascript)");
Object.defineProperty(exports, "expanse", {
    enumerable: true,
    get: function() {
        return expanse_js_1.expanse;
    }
});
var exSat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/exSat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "exsat", {
    enumerable: true,
    get: function() {
        return exSat_js_1.exsat;
    }
});
var exSatTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/exSatTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "exsatTestnet", {
    enumerable: true,
    get: function() {
        return exSatTestnet_js_1.exsatTestnet;
    }
});
var fantom_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantom.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fantom", {
    enumerable: true,
    get: function() {
        return fantom_js_1.fantom;
    }
});
var fantomSonicTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantomSonicTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fantomSonicTestnet", {
    enumerable: true,
    get: function() {
        return fantomSonicTestnet_js_1.fantomSonicTestnet;
    }
});
var fantomTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fantomTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fantomTestnet", {
    enumerable: true,
    get: function() {
        return fantomTestnet_js_1.fantomTestnet;
    }
});
var fibo_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fibo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fibo", {
    enumerable: true,
    get: function() {
        return fibo_js_1.fibo;
    }
});
var filecoin_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoin.js [app-client] (ecmascript)");
Object.defineProperty(exports, "filecoin", {
    enumerable: true,
    get: function() {
        return filecoin_js_1.filecoin;
    }
});
var filecoinCalibration_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoinCalibration.js [app-client] (ecmascript)");
Object.defineProperty(exports, "filecoinCalibration", {
    enumerable: true,
    get: function() {
        return filecoinCalibration_js_1.filecoinCalibration;
    }
});
var filecoinHyperspace_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/filecoinHyperspace.js [app-client] (ecmascript)");
Object.defineProperty(exports, "filecoinHyperspace", {
    enumerable: true,
    get: function() {
        return filecoinHyperspace_js_1.filecoinHyperspace;
    }
});
var _5ireChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/5ireChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fireChain", {
    enumerable: true,
    get: function() {
        return _5ireChain_js_1.fireChain;
    }
});
var flame_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flame.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flame", {
    enumerable: true,
    get: function() {
        return flame_js_1.flame;
    }
});
var flare_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flare.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flare", {
    enumerable: true,
    get: function() {
        return flare_js_1.flare;
    }
});
var flareTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flareTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flareTestnet", {
    enumerable: true,
    get: function() {
        return flareTestnet_js_1.flareTestnet;
    }
});
var flowMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flowMainnet", {
    enumerable: true,
    get: function() {
        return flowMainnet_js_1.flowMainnet;
    }
});
var flowPreviewnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowPreviewnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flowPreviewnet", {
    enumerable: true,
    get: function() {
        return flowPreviewnet_js_1.flowPreviewnet;
    }
});
var flowTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/flowTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "flowTestnet", {
    enumerable: true,
    get: function() {
        return flowTestnet_js_1.flowTestnet;
    }
});
var fluence_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluence.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fluence", {
    enumerable: true,
    get: function() {
        return fluence_js_1.fluence;
    }
});
var fluenceStage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluenceStage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fluenceStage", {
    enumerable: true,
    get: function() {
        return fluenceStage_js_1.fluenceStage;
    }
});
var fluenceTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluenceTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fluenceTestnet", {
    enumerable: true,
    get: function() {
        return fluenceTestnet_js_1.fluenceTestnet;
    }
});
var fluentTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fluentTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fluentTestnet", {
    enumerable: true,
    get: function() {
        return fluentTestnet_js_1.fluentTestnet;
    }
});
var forma_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/forma.js [app-client] (ecmascript)");
Object.defineProperty(exports, "forma", {
    enumerable: true,
    get: function() {
        return forma_js_1.forma;
    }
});
var form_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/form.js [app-client] (ecmascript)");
Object.defineProperty(exports, "form", {
    enumerable: true,
    get: function() {
        return form_js_1.form;
    }
});
var memecoreFormicariumTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/memecoreFormicariumTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formicarium", {
    enumerable: true,
    get: function() {
        return memecoreFormicariumTestnet_js_1.formicarium;
    }
});
var formTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/formTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formTestnet", {
    enumerable: true,
    get: function() {
        return formTestnet_js_1.formTestnet;
    }
});
var forta_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/forta.js [app-client] (ecmascript)");
Object.defineProperty(exports, "forta", {
    enumerable: true,
    get: function() {
        return forta_js_1.forta;
    }
});
var foundry_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/foundry.js [app-client] (ecmascript)");
Object.defineProperty(exports, "foundry", {
    enumerable: true,
    get: function() {
        return foundry_js_1.foundry;
    }
});
var fraxtal_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fraxtal.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fraxtal", {
    enumerable: true,
    get: function() {
        return fraxtal_js_1.fraxtal;
    }
});
var fraxtalTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fraxtalTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fraxtalTestnet", {
    enumerable: true,
    get: function() {
        return fraxtalTestnet_js_1.fraxtalTestnet;
    }
});
var funkiMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/funkiMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "funkiMainnet", {
    enumerable: true,
    get: function() {
        return funkiMainnet_js_1.funkiMainnet;
    }
});
var funkiSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/funkiSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "funkiSepolia", {
    enumerable: true,
    get: function() {
        return funkiSepolia_js_1.funkiSepolia;
    }
});
var fuse_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fuse.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fuse", {
    enumerable: true,
    get: function() {
        return fuse_js_1.fuse;
    }
});
var fuseSparknet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fuseSparknet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fuseSparknet", {
    enumerable: true,
    get: function() {
        return fuseSparknet_js_1.fuseSparknet;
    }
});
var fusion_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fusion.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fusion", {
    enumerable: true,
    get: function() {
        return fusion_js_1.fusion;
    }
});
var fusionTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/fusionTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fusionTestnet", {
    enumerable: true,
    get: function() {
        return fusionTestnet_js_1.fusionTestnet;
    }
});
var garnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/garnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "garnet", {
    enumerable: true,
    get: function() {
        return garnet_js_1.garnet;
    }
});
var geist_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/geist.js [app-client] (ecmascript)");
Object.defineProperty(exports, "geist", {
    enumerable: true,
    get: function() {
        return geist_js_1.geist;
    }
});
var genesys_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/genesys.js [app-client] (ecmascript)");
Object.defineProperty(exports, "genesys", {
    enumerable: true,
    get: function() {
        return genesys_js_1.genesys;
    }
});
var glideL1Protocol_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/glideL1Protocol.js [app-client] (ecmascript)");
Object.defineProperty(exports, "glideL1Protocol", {
    enumerable: true,
    get: function() {
        return glideL1Protocol_js_1.glideL1Protocol;
    }
});
var glideL2Protocol_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/glideL2Protocol.js [app-client] (ecmascript)");
Object.defineProperty(exports, "glideL2Protocol", {
    enumerable: true,
    get: function() {
        return glideL2Protocol_js_1.glideL2Protocol;
    }
});
var gnosis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gnosis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "gnosis", {
    enumerable: true,
    get: function() {
        return gnosis_js_1.gnosis;
    }
});
var gnosisChiado_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gnosisChiado.js [app-client] (ecmascript)");
Object.defineProperty(exports, "gnosisChiado", {
    enumerable: true,
    get: function() {
        return gnosisChiado_js_1.gnosisChiado;
    }
});
var goat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "goat", {
    enumerable: true,
    get: function() {
        return goat_js_1.goat;
    }
});
var gobi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gobi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "gobi", {
    enumerable: true,
    get: function() {
        return gobi_js_1.gobi;
    }
});
var goChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "goChain", {
    enumerable: true,
    get: function() {
        return goChain_js_1.goChain;
    }
});
var godwoken_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/godwoken.js [app-client] (ecmascript)");
Object.defineProperty(exports, "godwoken", {
    enumerable: true,
    get: function() {
        return godwoken_js_1.godwoken;
    }
});
var goerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/goerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "goerli", {
    enumerable: true,
    get: function() {
        return goerli_js_1.goerli;
    }
});
var gravity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gravity.js [app-client] (ecmascript)");
Object.defineProperty(exports, "gravity", {
    enumerable: true,
    get: function() {
        return gravity_js_1.gravity;
    }
});
var gunz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/gunz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "gunz", {
    enumerable: true,
    get: function() {
        return gunz_js_1.gunz;
    }
});
var guruNetwork_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/guruNetwork.js [app-client] (ecmascript)");
Object.defineProperty(exports, "guruNetwork", {
    enumerable: true,
    get: function() {
        return guruNetwork_js_1.guruNetwork;
    }
});
var guruTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/guruTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "guruTestnet", {
    enumerable: true,
    get: function() {
        return guruTestnet_js_1.guruTestnet;
    }
});
var ham_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ham.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ham", {
    enumerable: true,
    get: function() {
        return ham_js_1.ham;
    }
});
var happychainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/happychainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "happychainTestnet", {
    enumerable: true,
    get: function() {
        return happychainTestnet_js_1.happychainTestnet;
    }
});
var haqqMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haqqMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "haqqMainnet", {
    enumerable: true,
    get: function() {
        return haqqMainnet_js_1.haqqMainnet;
    }
});
var haqqTestedge2_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haqqTestedge2.js [app-client] (ecmascript)");
Object.defineProperty(exports, "haqqTestedge2", {
    enumerable: true,
    get: function() {
        return haqqTestedge2_js_1.haqqTestedge2;
    }
});
var hardhat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hardhat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hardhat", {
    enumerable: true,
    get: function() {
        return hardhat_js_1.hardhat;
    }
});
var harmonyOne_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/harmonyOne.js [app-client] (ecmascript)");
Object.defineProperty(exports, "harmonyOne", {
    enumerable: true,
    get: function() {
        return harmonyOne_js_1.harmonyOne;
    }
});
var hashKeyChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hashKeyChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashkey", {
    enumerable: true,
    get: function() {
        return hashKeyChain_js_1.hashkey;
    }
});
var hashkeyChainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hashkeyChainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashkeyTestnet", {
    enumerable: true,
    get: function() {
        return hashkeyChainTestnet_js_1.hashkeyTestnet;
    }
});
var haustTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/haustTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "haustTestnet", {
    enumerable: true,
    get: function() {
        return haustTestnet_js_1.haustTestnet;
    }
});
var hedera_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hedera.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hedera", {
    enumerable: true,
    get: function() {
        return hedera_js_1.hedera;
    }
});
var hederaPreviewnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hederaPreviewnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hederaPreviewnet", {
    enumerable: true,
    get: function() {
        return hederaPreviewnet_js_1.hederaPreviewnet;
    }
});
var hederaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hederaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hederaTestnet", {
    enumerable: true,
    get: function() {
        return hederaTestnet_js_1.hederaTestnet;
    }
});
var hela_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hela.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hela", {
    enumerable: true,
    get: function() {
        return hela_js_1.hela;
    }
});
var hemi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hemi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hemi", {
    enumerable: true,
    get: function() {
        return hemi_js_1.hemi;
    }
});
var hemiSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hemiSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hemiSepolia", {
    enumerable: true,
    get: function() {
        return hemiSepolia_js_1.hemiSepolia;
    }
});
var holesky_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/holesky.js [app-client] (ecmascript)");
Object.defineProperty(exports, "holesky", {
    enumerable: true,
    get: function() {
        return holesky_js_1.holesky;
    }
});
var hoodi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hoodi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hoodi", {
    enumerable: true,
    get: function() {
        return hoodi_js_1.hoodi;
    }
});
var hpb_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hpb.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hpb", {
    enumerable: true,
    get: function() {
        return hpb_js_1.hpb;
    }
});
var huddle01Mainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/huddle01Mainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "huddle01Mainnet", {
    enumerable: true,
    get: function() {
        return huddle01Mainnet_js_1.huddle01Mainnet;
    }
});
var huddle01Testnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/huddle01Testnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "huddle01Testnet", {
    enumerable: true,
    get: function() {
        return huddle01Testnet_js_1.huddle01Testnet;
    }
});
var humanode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/humanode.js [app-client] (ecmascript)");
Object.defineProperty(exports, "humanode", {
    enumerable: true,
    get: function() {
        return humanode_js_1.humanode;
    }
});
var humanodeTestnet5_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/humanodeTestnet5.js [app-client] (ecmascript)");
Object.defineProperty(exports, "humanodeTestnet5", {
    enumerable: true,
    get: function() {
        return humanodeTestnet5_js_1.humanodeTestnet5;
    }
});
var hychain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hychain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hychain", {
    enumerable: true,
    get: function() {
        return hychain_js_1.hychain;
    }
});
var hychainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/hychainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hychainTestnet", {
    enumerable: true,
    get: function() {
        return hychainTestnet_js_1.hychainTestnet;
    }
});
var idchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/idchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "idchain", {
    enumerable: true,
    get: function() {
        return idchain_js_1.idchain;
    }
});
var immutableZkEvm_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/immutableZkEvm.js [app-client] (ecmascript)");
Object.defineProperty(exports, "immutableZkEvm", {
    enumerable: true,
    get: function() {
        return immutableZkEvm_js_1.immutableZkEvm;
    }
});
var immutableZkEvmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/immutableZkEvmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "immutableZkEvmTestnet", {
    enumerable: true,
    get: function() {
        return immutableZkEvmTestnet_js_1.immutableZkEvmTestnet;
    }
});
var inEVM_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/inEVM.js [app-client] (ecmascript)");
Object.defineProperty(exports, "inEVM", {
    enumerable: true,
    get: function() {
        return inEVM_js_1.inEVM;
    }
});
var initVerse_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/initVerse.js [app-client] (ecmascript)");
Object.defineProperty(exports, "initVerse", {
    enumerable: true,
    get: function() {
        return initVerse_js_1.initVerse;
    }
});
var initVerseGenesis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/initVerseGenesis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "initVerseGenesis", {
    enumerable: true,
    get: function() {
        return initVerseGenesis_js_1.initVerseGenesis;
    }
});
var ink_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ink.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ink", {
    enumerable: true,
    get: function() {
        return ink_js_1.ink;
    }
});
var inkSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/inkSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "inkSepolia", {
    enumerable: true,
    get: function() {
        return inkSepolia_js_1.inkSepolia;
    }
});
var iota_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iota.js [app-client] (ecmascript)");
Object.defineProperty(exports, "iota", {
    enumerable: true,
    get: function() {
        return iota_js_1.iota;
    }
});
var iotaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "iotaTestnet", {
    enumerable: true,
    get: function() {
        return iotaTestnet_js_1.iotaTestnet;
    }
});
var iotex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "iotex", {
    enumerable: true,
    get: function() {
        return iotex_js_1.iotex;
    }
});
var iotexTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iotexTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "iotexTestnet", {
    enumerable: true,
    get: function() {
        return iotexTestnet_js_1.iotexTestnet;
    }
});
var iSunCoin_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/iSunCoin.js [app-client] (ecmascript)");
Object.defineProperty(exports, "iSunCoin", {
    enumerable: true,
    get: function() {
        return iSunCoin_js_1.iSunCoin;
    }
});
var jbc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/jbc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "jbc", {
    enumerable: true,
    get: function() {
        return jbc_js_1.jbc;
    }
});
var jbcTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/jbcTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "jbcTestnet", {
    enumerable: true,
    get: function() {
        return jbcTestnet_js_1.jbcTestnet;
    }
});
var juneo_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneo", {
    enumerable: true,
    get: function() {
        return juneo_js_1.juneo;
    }
});
var juneoBCH1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoBCH1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoBCH1Chain", {
    enumerable: true,
    get: function() {
        return juneoBCH1Chain_js_1.juneoBCH1Chain;
    }
});
var juneoDAI1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoDAI1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoDAI1Chain", {
    enumerable: true,
    get: function() {
        return juneoDAI1Chain_js_1.juneoDAI1Chain;
    }
});
var juneoDOGE1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoDOGE1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoDOGE1Chain", {
    enumerable: true,
    get: function() {
        return juneoDOGE1Chain_js_1.juneoDOGE1Chain;
    }
});
var juneoEUR1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoEUR1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoEUR1Chain", {
    enumerable: true,
    get: function() {
        return juneoEUR1Chain_js_1.juneoEUR1Chain;
    }
});
var juneoGLD1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoGLD1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoGLD1Chain", {
    enumerable: true,
    get: function() {
        return juneoGLD1Chain_js_1.juneoGLD1Chain;
    }
});
var juneoLINK1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoLINK1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoLINK1Chain", {
    enumerable: true,
    get: function() {
        return juneoLINK1Chain_js_1.juneoLINK1Chain;
    }
});
var juneoLTC1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoLTC1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoLTC1Chain", {
    enumerable: true,
    get: function() {
        return juneoLTC1Chain_js_1.juneoLTC1Chain;
    }
});
var juneomBTC1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneomBTC1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneomBTC1Chain", {
    enumerable: true,
    get: function() {
        return juneomBTC1Chain_js_1.juneomBTC1Chain;
    }
});
var juneoSGD1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoSGD1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoSGD1Chain", {
    enumerable: true,
    get: function() {
        return juneoSGD1Chain_js_1.juneoSGD1Chain;
    }
});
var juneoSocotraTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoSocotraTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoSocotraTestnet", {
    enumerable: true,
    get: function() {
        return juneoSocotraTestnet_js_1.juneoSocotraTestnet;
    }
});
var juneoUSD1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoUSD1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoUSD1Chain", {
    enumerable: true,
    get: function() {
        return juneoUSD1Chain_js_1.juneoUSD1Chain;
    }
});
var juneoUSDT1Chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/juneoUSDT1Chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "juneoUSDT1Chain", {
    enumerable: true,
    get: function() {
        return juneoUSDT1Chain_js_1.juneoUSDT1Chain;
    }
});
var karura_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/karura.js [app-client] (ecmascript)");
Object.defineProperty(exports, "karura", {
    enumerable: true,
    get: function() {
        return karura_js_1.karura;
    }
});
var kakarotSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kakarotSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kakarotSepolia", {
    enumerable: true,
    get: function() {
        return kakarotSepolia_js_1.kakarotSepolia;
    }
});
var kakarotStarknetSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kakarotStarknetSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kakarotStarknetSepolia", {
    enumerable: true,
    get: function() {
        return kakarotStarknetSepolia_js_1.kakarotStarknetSepolia;
    }
});
var kardiaChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kardiaChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kardiaChain", {
    enumerable: true,
    get: function() {
        return kardiaChain_js_1.kardiaChain;
    }
});
var kava_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kava.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kava", {
    enumerable: true,
    get: function() {
        return kava_js_1.kava;
    }
});
var kavaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kavaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kavaTestnet", {
    enumerable: true,
    get: function() {
        return kavaTestnet_js_1.kavaTestnet;
    }
});
var kcc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kcc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kcc", {
    enumerable: true,
    get: function() {
        return kcc_js_1.kcc;
    }
});
var kinto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kinto.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kinto", {
    enumerable: true,
    get: function() {
        return kinto_js_1.kinto;
    }
});
var klaytn_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/klaytn.js [app-client] (ecmascript)");
Object.defineProperty(exports, "klaytn", {
    enumerable: true,
    get: function() {
        return klaytn_js_1.klaytn;
    }
});
var kaia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kaia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kaia", {
    enumerable: true,
    get: function() {
        return kaia_js_1.kaia;
    }
});
var kairos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kairos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kairos", {
    enumerable: true,
    get: function() {
        return kairos_js_1.kairos;
    }
});
var klaytnBaobab_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/klaytnBaobab.js [app-client] (ecmascript)");
Object.defineProperty(exports, "klaytnBaobab", {
    enumerable: true,
    get: function() {
        return klaytnBaobab_js_1.klaytnBaobab;
    }
});
var koi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/koi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "koi", {
    enumerable: true,
    get: function() {
        return koi_js_1.koi;
    }
});
var kroma_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kroma.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kroma", {
    enumerable: true,
    get: function() {
        return kroma_js_1.kroma;
    }
});
var kromaSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/kromaSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "kromaSepolia", {
    enumerable: true,
    get: function() {
        return kromaSepolia_js_1.kromaSepolia;
    }
});
var l3x_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/l3x.js [app-client] (ecmascript)");
Object.defineProperty(exports, "l3x", {
    enumerable: true,
    get: function() {
        return l3x_js_1.l3x;
    }
});
var l3xTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/l3xTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "l3xTestnet", {
    enumerable: true,
    get: function() {
        return l3xTestnet_js_1.l3xTestnet;
    }
});
var lavita_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lavita.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lavita", {
    enumerable: true,
    get: function() {
        return lavita_js_1.lavita;
    }
});
var lens_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lens.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lens", {
    enumerable: true,
    get: function() {
        return lens_js_1.lens;
    }
});
var lensTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lensTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lensTestnet", {
    enumerable: true,
    get: function() {
        return lensTestnet_js_1.lensTestnet;
    }
});
var lestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lestnet", {
    enumerable: true,
    get: function() {
        return lestnet_js_1.lestnet;
    }
});
var lightlinkPegasus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lightlinkPegasus.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lightlinkPegasus", {
    enumerable: true,
    get: function() {
        return lightlinkPegasus_js_1.lightlinkPegasus;
    }
});
var lightlinkPhoenix_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lightlinkPhoenix.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lightlinkPhoenix", {
    enumerable: true,
    get: function() {
        return lightlinkPhoenix_js_1.lightlinkPhoenix;
    }
});
var linea_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/linea.js [app-client] (ecmascript)");
Object.defineProperty(exports, "linea", {
    enumerable: true,
    get: function() {
        return linea_js_1.linea;
    }
});
var lineaGoerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaGoerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lineaGoerli", {
    enumerable: true,
    get: function() {
        return lineaGoerli_js_1.lineaGoerli;
    }
});
var lineaSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lineaSepolia", {
    enumerable: true,
    get: function() {
        return lineaSepolia_js_1.lineaSepolia;
    }
});
var lineaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lineaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lineaTestnet", {
    enumerable: true,
    get: function() {
        return lineaTestnet_js_1.lineaTestnet;
    }
});
var lisk_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lisk.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lisk", {
    enumerable: true,
    get: function() {
        return lisk_js_1.lisk;
    }
});
var liskSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/liskSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "liskSepolia", {
    enumerable: true,
    get: function() {
        return liskSepolia_js_1.liskSepolia;
    }
});
var localhost_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/localhost.js [app-client] (ecmascript)");
Object.defineProperty(exports, "localhost", {
    enumerable: true,
    get: function() {
        return localhost_js_1.localhost;
    }
});
var loop_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/loop.js [app-client] (ecmascript)");
Object.defineProperty(exports, "loop", {
    enumerable: true,
    get: function() {
        return loop_js_1.loop;
    }
});
var lukso_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lukso.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lukso", {
    enumerable: true,
    get: function() {
        return lukso_js_1.lukso;
    }
});
var luksoTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/luksoTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "luksoTestnet", {
    enumerable: true,
    get: function() {
        return luksoTestnet_js_1.luksoTestnet;
    }
});
var lumiaMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumiaMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lumiaMainnet", {
    enumerable: true,
    get: function() {
        return lumiaMainnet_js_1.lumiaMainnet;
    }
});
var lumiaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumiaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lumiaTestnet", {
    enumerable: true,
    get: function() {
        return lumiaTestnet_js_1.lumiaTestnet;
    }
});
var lumoz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumoz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lumoz", {
    enumerable: true,
    get: function() {
        return lumoz_js_1.lumoz;
    }
});
var lumozTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lumozTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lumozTestnet", {
    enumerable: true,
    get: function() {
        return lumozTestnet_js_1.lumozTestnet;
    }
});
var lycan_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lycan.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lycan", {
    enumerable: true,
    get: function() {
        return lycan_js_1.lycan;
    }
});
var lyra_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/lyra.js [app-client] (ecmascript)");
Object.defineProperty(exports, "lyra", {
    enumerable: true,
    get: function() {
        return lyra_js_1.lyra;
    }
});
var mainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mainnet", {
    enumerable: true,
    get: function() {
        return mainnet_js_1.mainnet;
    }
});
var mandala_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mandala.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mandala", {
    enumerable: true,
    get: function() {
        return mandala_js_1.mandala;
    }
});
var manta_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/manta.js [app-client] (ecmascript)");
Object.defineProperty(exports, "manta", {
    enumerable: true,
    get: function() {
        return manta_js_1.manta;
    }
});
var mantaSepoliaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantaSepoliaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mantaSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return mantaSepoliaTestnet_js_1.mantaSepoliaTestnet;
    }
});
var mantaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mantaTestnet", {
    enumerable: true,
    get: function() {
        return mantaTestnet_js_1.mantaTestnet;
    }
});
var mantle_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantle.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mantle", {
    enumerable: true,
    get: function() {
        return mantle_js_1.mantle;
    }
});
var mantleSepoliaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantleSepoliaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mantleSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return mantleSepoliaTestnet_js_1.mantleSepoliaTestnet;
    }
});
var mantleTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mantleTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mantleTestnet", {
    enumerable: true,
    get: function() {
        return mantleTestnet_js_1.mantleTestnet;
    }
});
var mapProtocol_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mapProtocol.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mapProtocol", {
    enumerable: true,
    get: function() {
        return mapProtocol_js_1.mapProtocol;
    }
});
var matchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/matchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "matchain", {
    enumerable: true,
    get: function() {
        return matchain_js_1.matchain;
    }
});
var matchainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/matchainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "matchainTestnet", {
    enumerable: true,
    get: function() {
        return matchainTestnet_js_1.matchainTestnet;
    }
});
var mchVerse_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mchVerse.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mchVerse", {
    enumerable: true,
    get: function() {
        return mchVerse_js_1.mchVerse;
    }
});
var megaethTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/megaethTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "megaethTestnet", {
    enumerable: true,
    get: function() {
        return megaethTestnet_js_1.megaethTestnet;
    }
});
var mekong_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mekong.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mekong", {
    enumerable: true,
    get: function() {
        return mekong_js_1.mekong;
    }
});
var meld_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meld.js [app-client] (ecmascript)");
Object.defineProperty(exports, "meld", {
    enumerable: true,
    get: function() {
        return meld_js_1.meld;
    }
});
var memecore_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/memecore.js [app-client] (ecmascript)");
Object.defineProperty(exports, "memecore", {
    enumerable: true,
    get: function() {
        return memecore_js_1.memecore;
    }
});
var merlin_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/merlin.js [app-client] (ecmascript)");
Object.defineProperty(exports, "merlin", {
    enumerable: true,
    get: function() {
        return merlin_js_1.merlin;
    }
});
var merlinErigonTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/merlinErigonTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "merlinErigonTestnet", {
    enumerable: true,
    get: function() {
        return merlinErigonTestnet_js_1.merlinErigonTestnet;
    }
});
var metachain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metachain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metachain", {
    enumerable: true,
    get: function() {
        return metachain_js_1.metachain;
    }
});
var metachainIstanbul_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metachainIstanbul.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metachainIstanbul", {
    enumerable: true,
    get: function() {
        return metachainIstanbul_js_1.metachainIstanbul;
    }
});
var metadium_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metadium.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metadium", {
    enumerable: true,
    get: function() {
        return metadium_js_1.metadium;
    }
});
var metalL2_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metalL2.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metalL2", {
    enumerable: true,
    get: function() {
        return metalL2_js_1.metalL2;
    }
});
var meter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "meter", {
    enumerable: true,
    get: function() {
        return meter_js_1.meter;
    }
});
var meterTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/meterTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "meterTestnet", {
    enumerable: true,
    get: function() {
        return meterTestnet_js_1.meterTestnet;
    }
});
var metis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metis", {
    enumerable: true,
    get: function() {
        return metis_js_1.metis;
    }
});
var metisSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metisSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metisSepolia", {
    enumerable: true,
    get: function() {
        return metisSepolia_js_1.metisSepolia;
    }
});
var metisGoerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/metisGoerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "metisGoerli", {
    enumerable: true,
    get: function() {
        return metisGoerli_js_1.metisGoerli;
    }
});
var mev_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mev.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mev", {
    enumerable: true,
    get: function() {
        return mev_js_1.mev;
    }
});
var mevTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mevTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mevTestnet", {
    enumerable: true,
    get: function() {
        return mevTestnet_js_1.mevTestnet;
    }
});
var mint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mint.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mint", {
    enumerable: true,
    get: function() {
        return mint_js_1.mint;
    }
});
var mintSepoliaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mintSepoliaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mintSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return mintSepoliaTestnet_js_1.mintSepoliaTestnet;
    }
});
var mitosisTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mitosisTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mitosisTestnet", {
    enumerable: true,
    get: function() {
        return mitosisTestnet_js_1.mitosisTestnet;
    }
});
var mode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/mode.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mode", {
    enumerable: true,
    get: function() {
        return mode_js_1.mode;
    }
});
var modeTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/modeTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "modeTestnet", {
    enumerable: true,
    get: function() {
        return modeTestnet_js_1.modeTestnet;
    }
});
var monadTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/monadTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "monadTestnet", {
    enumerable: true,
    get: function() {
        return monadTestnet_js_1.monadTestnet;
    }
});
var moonbaseAlpha_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbaseAlpha.js [app-client] (ecmascript)");
Object.defineProperty(exports, "moonbaseAlpha", {
    enumerable: true,
    get: function() {
        return moonbaseAlpha_js_1.moonbaseAlpha;
    }
});
var moonbeam_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbeam.js [app-client] (ecmascript)");
Object.defineProperty(exports, "moonbeam", {
    enumerable: true,
    get: function() {
        return moonbeam_js_1.moonbeam;
    }
});
var moonbeamDev_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonbeamDev.js [app-client] (ecmascript)");
Object.defineProperty(exports, "moonbeamDev", {
    enumerable: true,
    get: function() {
        return moonbeamDev_js_1.moonbeamDev;
    }
});
var moonriver_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/moonriver.js [app-client] (ecmascript)");
Object.defineProperty(exports, "moonriver", {
    enumerable: true,
    get: function() {
        return moonriver_js_1.moonriver;
    }
});
var morph_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morph.js [app-client] (ecmascript)");
Object.defineProperty(exports, "morph", {
    enumerable: true,
    get: function() {
        return morph_js_1.morph;
    }
});
var morphHolesky_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morphHolesky.js [app-client] (ecmascript)");
Object.defineProperty(exports, "morphHolesky", {
    enumerable: true,
    get: function() {
        return morphHolesky_js_1.morphHolesky;
    }
});
var morphSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/morphSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "morphSepolia", {
    enumerable: true,
    get: function() {
        return morphSepolia_js_1.morphSepolia;
    }
});
var nahmii_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nahmii.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nahmii", {
    enumerable: true,
    get: function() {
        return nahmii_js_1.nahmii;
    }
});
var nautilus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nautilus.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nautilus", {
    enumerable: true,
    get: function() {
        return nautilus_js_1.nautilus;
    }
});
var near_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/near.js [app-client] (ecmascript)");
Object.defineProperty(exports, "near", {
    enumerable: true,
    get: function() {
        return near_js_1.near;
    }
});
var nearTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nearTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nearTestnet", {
    enumerable: true,
    get: function() {
        return nearTestnet_js_1.nearTestnet;
    }
});
var neonDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neonDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "neonDevnet", {
    enumerable: true,
    get: function() {
        return neonDevnet_js_1.neonDevnet;
    }
});
var neonMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neonMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "neonMainnet", {
    enumerable: true,
    get: function() {
        return neonMainnet_js_1.neonMainnet;
    }
});
var neoxMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neoxMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "neoxMainnet", {
    enumerable: true,
    get: function() {
        return neoxMainnet_js_1.neoxMainnet;
    }
});
var neoxT4_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/neoxT4.js [app-client] (ecmascript)");
Object.defineProperty(exports, "neoxT4", {
    enumerable: true,
    get: function() {
        return neoxT4_js_1.neoxT4;
    }
});
var newton_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/newton.js [app-client] (ecmascript)");
Object.defineProperty(exports, "newton", {
    enumerable: true,
    get: function() {
        return newton_js_1.newton;
    }
});
var nexi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nexi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nexi", {
    enumerable: true,
    get: function() {
        return nexi_js_1.nexi;
    }
});
var nexilix_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nexilix.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nexilix", {
    enumerable: true,
    get: function() {
        return nexilix_js_1.nexilix;
    }
});
var nibiru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/nibiru.js [app-client] (ecmascript)");
Object.defineProperty(exports, "nibiru", {
    enumerable: true,
    get: function() {
        return nibiru_js_1.nibiru;
    }
});
var oasisTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oasisTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "oasisTestnet", {
    enumerable: true,
    get: function() {
        return oasisTestnet_js_1.oasisTestnet;
    }
});
var oasys_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oasys.js [app-client] (ecmascript)");
Object.defineProperty(exports, "oasys", {
    enumerable: true,
    get: function() {
        return oasys_js_1.oasys;
    }
});
var odysseyTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/odysseyTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "odysseyTestnet", {
    enumerable: true,
    get: function() {
        return odysseyTestnet_js_1.odysseyTestnet;
    }
});
var okc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/okc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "okc", {
    enumerable: true,
    get: function() {
        return okc_js_1.okc;
    }
});
var omax_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omax.js [app-client] (ecmascript)");
Object.defineProperty(exports, "omax", {
    enumerable: true,
    get: function() {
        return omax_js_1.omax;
    }
});
var omni_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omni.js [app-client] (ecmascript)");
Object.defineProperty(exports, "omni", {
    enumerable: true,
    get: function() {
        return omni_js_1.omni;
    }
});
var omniOmega_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/omniOmega.js [app-client] (ecmascript)");
Object.defineProperty(exports, "omniOmega", {
    enumerable: true,
    get: function() {
        return omniOmega_js_1.omniOmega;
    }
});
var oneWorld_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oneWorld.js [app-client] (ecmascript)");
Object.defineProperty(exports, "oneWorld", {
    enumerable: true,
    get: function() {
        return oneWorld_js_1.oneWorld;
    }
});
var oortmainnetDev_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/oortmainnetDev.js [app-client] (ecmascript)");
Object.defineProperty(exports, "oortMainnetDev", {
    enumerable: true,
    get: function() {
        return oortmainnetDev_js_1.oortMainnetDev;
    }
});
var opBNB_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/opBNB.js [app-client] (ecmascript)");
Object.defineProperty(exports, "opBNB", {
    enumerable: true,
    get: function() {
        return opBNB_js_1.opBNB;
    }
});
var opBNBTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/opBNBTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "opBNBTestnet", {
    enumerable: true,
    get: function() {
        return opBNBTestnet_js_1.opBNBTestnet;
    }
});
var optimism_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimism.js [app-client] (ecmascript)");
Object.defineProperty(exports, "optimism", {
    enumerable: true,
    get: function() {
        return optimism_js_1.optimism;
    }
});
var optimismGoerli_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimismGoerli.js [app-client] (ecmascript)");
Object.defineProperty(exports, "optimismGoerli", {
    enumerable: true,
    get: function() {
        return optimismGoerli_js_1.optimismGoerli;
    }
});
var optimismSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optimismSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "optimismSepolia", {
    enumerable: true,
    get: function() {
        return optimismSepolia_js_1.optimismSepolia;
    }
});
var optopia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optopia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "optopia", {
    enumerable: true,
    get: function() {
        return optopia_js_1.optopia;
    }
});
var optopiaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/optopiaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "optopiaTestnet", {
    enumerable: true,
    get: function() {
        return optopiaTestnet_js_1.optopiaTestnet;
    }
});
var orderly_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/orderly.js [app-client] (ecmascript)");
Object.defineProperty(exports, "orderly", {
    enumerable: true,
    get: function() {
        return orderly_js_1.orderly;
    }
});
var orderlySepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/orderlySepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "orderlySepolia", {
    enumerable: true,
    get: function() {
        return orderlySepolia_js_1.orderlySepolia;
    }
});
var otimDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/otimDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "otimDevnet", {
    enumerable: true,
    get: function() {
        return otimDevnet_js_1.otimDevnet;
    }
});
var palm_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/palm.js [app-client] (ecmascript)");
Object.defineProperty(exports, "palm", {
    enumerable: true,
    get: function() {
        return palm_js_1.palm;
    }
});
var palmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/palmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "palmTestnet", {
    enumerable: true,
    get: function() {
        return palmTestnet_js_1.palmTestnet;
    }
});
var peaq_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/peaq.js [app-client] (ecmascript)");
Object.defineProperty(exports, "peaq", {
    enumerable: true,
    get: function() {
        return peaq_js_1.peaq;
    }
});
var pgn_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pgn.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pgn", {
    enumerable: true,
    get: function() {
        return pgn_js_1.pgn;
    }
});
var pgnTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pgnTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pgnTestnet", {
    enumerable: true,
    get: function() {
        return pgnTestnet_js_1.pgnTestnet;
    }
});
var phoenix_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/phoenix.js [app-client] (ecmascript)");
Object.defineProperty(exports, "phoenix", {
    enumerable: true,
    get: function() {
        return phoenix_js_1.phoenix;
    }
});
var planq_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/planq.js [app-client] (ecmascript)");
Object.defineProperty(exports, "planq", {
    enumerable: true,
    get: function() {
        return planq_js_1.planq;
    }
});
var playfiAlbireo_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/playfiAlbireo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "playfiAlbireo", {
    enumerable: true,
    get: function() {
        return playfiAlbireo_js_1.playfiAlbireo;
    }
});
var plinga_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plinga.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plinga", {
    enumerable: true,
    get: function() {
        return plinga_js_1.plinga;
    }
});
var plume_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plume.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plume", {
    enumerable: true,
    get: function() {
        return plume_js_1.plume;
    }
});
var plumeDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plumeDevnet", {
    enumerable: true,
    get: function() {
        return plumeDevnet_js_1.plumeDevnet;
    }
});
var plumeMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plumeMainnet", {
    enumerable: true,
    get: function() {
        return plumeMainnet_js_1.plumeMainnet;
    }
});
var plumeSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plumeSepolia", {
    enumerable: true,
    get: function() {
        return plumeSepolia_js_1.plumeSepolia;
    }
});
var plumeTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/plumeTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "plumeTestnet", {
    enumerable: true,
    get: function() {
        return plumeTestnet_js_1.plumeTestnet;
    }
});
var polterTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polterTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polterTestnet", {
    enumerable: true,
    get: function() {
        return polterTestnet_js_1.polterTestnet;
    }
});
var polygon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygon", {
    enumerable: true,
    get: function() {
        return polygon_js_1.polygon;
    }
});
var polygonAmoy_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonAmoy.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygonAmoy", {
    enumerable: true,
    get: function() {
        return polygonAmoy_js_1.polygonAmoy;
    }
});
var polygonMumbai_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonMumbai.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygonMumbai", {
    enumerable: true,
    get: function() {
        return polygonMumbai_js_1.polygonMumbai;
    }
});
var polygonZkEvm_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvm.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygonZkEvm", {
    enumerable: true,
    get: function() {
        return polygonZkEvm_js_1.polygonZkEvm;
    }
});
var polygonZkEvmCardona_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvmCardona.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygonZkEvmCardona", {
    enumerable: true,
    get: function() {
        return polygonZkEvmCardona_js_1.polygonZkEvmCardona;
    }
});
var polygonZkEvmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polygonZkEvmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polygonZkEvmTestnet", {
    enumerable: true,
    get: function() {
        return polygonZkEvmTestnet_js_1.polygonZkEvmTestnet;
    }
});
var polynomial_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polynomial.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polynomial", {
    enumerable: true,
    get: function() {
        return polynomial_js_1.polynomial;
    }
});
var polynomialSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/polynomialSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "polynomialSepolia", {
    enumerable: true,
    get: function() {
        return polynomialSepolia_js_1.polynomialSepolia;
    }
});
var premiumBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/premiumBlock.js [app-client] (ecmascript)");
Object.defineProperty(exports, "premiumBlockTestnet", {
    enumerable: true,
    get: function() {
        return premiumBlock_js_1.premiumBlockTestnet;
    }
});
var pulsechain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pulsechain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pulsechain", {
    enumerable: true,
    get: function() {
        return pulsechain_js_1.pulsechain;
    }
});
var pulsechainV4_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pulsechainV4.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pulsechainV4", {
    enumerable: true,
    get: function() {
        return pulsechainV4_js_1.pulsechainV4;
    }
});
var pumpfiTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pumpfiTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pumpfiTestnet", {
    enumerable: true,
    get: function() {
        return pumpfiTestnet_js_1.pumpfiTestnet;
    }
});
var pyrope_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/pyrope.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pyrope", {
    enumerable: true,
    get: function() {
        return pyrope_js_1.pyrope;
    }
});
var ql1_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ql1.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ql1", {
    enumerable: true,
    get: function() {
        return ql1_js_1.ql1;
    }
});
var qMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/qMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "qMainnet", {
    enumerable: true,
    get: function() {
        return qMainnet_js_1.qMainnet;
    }
});
var qTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/qTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "qTestnet", {
    enumerable: true,
    get: function() {
        return qTestnet_js_1.qTestnet;
    }
});
var real_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/real.js [app-client] (ecmascript)");
Object.defineProperty(exports, "real", {
    enumerable: true,
    get: function() {
        return real_js_1.real;
    }
});
var redbellyMainnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redbellyMainnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "redbellyMainnet", {
    enumerable: true,
    get: function() {
        return redbellyMainnet_js_1.redbellyMainnet;
    }
});
var redbellyTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redbellyTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "redbellyTestnet", {
    enumerable: true,
    get: function() {
        return redbellyTestnet_js_1.redbellyTestnet;
    }
});
var redstone_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/redstone.js [app-client] (ecmascript)");
Object.defineProperty(exports, "redstone", {
    enumerable: true,
    get: function() {
        return redstone_js_1.redstone;
    }
});
var rei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rei", {
    enumerable: true,
    get: function() {
        return rei_js_1.rei;
    }
});
var reyaNetwork_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/reyaNetwork.js [app-client] (ecmascript)");
Object.defineProperty(exports, "reyaNetwork", {
    enumerable: true,
    get: function() {
        return reyaNetwork_js_1.reyaNetwork;
    }
});
var reddioSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/reddioSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "reddioSepolia", {
    enumerable: true,
    get: function() {
        return reddioSepolia_js_1.reddioSepolia;
    }
});
var riseTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/riseTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "riseTestnet", {
    enumerable: true,
    get: function() {
        return riseTestnet_js_1.riseTestnet;
    }
});
var rivalz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rivalz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rivalz", {
    enumerable: true,
    get: function() {
        return rivalz_js_1.rivalz;
    }
});
var rollux_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rollux.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rollux", {
    enumerable: true,
    get: function() {
        return rollux_js_1.rollux;
    }
});
var rolluxTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rolluxTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rolluxTestnet", {
    enumerable: true,
    get: function() {
        return rolluxTestnet_js_1.rolluxTestnet;
    }
});
var ronin_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ronin.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ronin", {
    enumerable: true,
    get: function() {
        return ronin_js_1.ronin;
    }
});
var root_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/root.js [app-client] (ecmascript)");
Object.defineProperty(exports, "root", {
    enumerable: true,
    get: function() {
        return root_js_1.root;
    }
});
var rootPorcini_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootPorcini.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rootPorcini", {
    enumerable: true,
    get: function() {
        return rootPorcini_js_1.rootPorcini;
    }
});
var rootstock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootstock.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rootstock", {
    enumerable: true,
    get: function() {
        return rootstock_js_1.rootstock;
    }
});
var rootstockTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rootstockTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rootstockTestnet", {
    enumerable: true,
    get: function() {
        return rootstockTestnet_js_1.rootstockTestnet;
    }
});
var rss3_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rss3.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rss3", {
    enumerable: true,
    get: function() {
        return rss3_js_1.rss3;
    }
});
var rss3Sepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/rss3Sepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "rss3Sepolia", {
    enumerable: true,
    get: function() {
        return rss3Sepolia_js_1.rss3Sepolia;
    }
});
var saakuru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saakuru.js [app-client] (ecmascript)");
Object.defineProperty(exports, "saakuru", {
    enumerable: true,
    get: function() {
        return saakuru_js_1.saakuru;
    }
});
var saga_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saga.js [app-client] (ecmascript)");
Object.defineProperty(exports, "saga", {
    enumerable: true,
    get: function() {
        return saga_js_1.saga;
    }
});
var saigon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/saigon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "saigon", {
    enumerable: true,
    get: function() {
        return saigon_js_1.saigon;
    }
});
var sanko_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sanko.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sanko", {
    enumerable: true,
    get: function() {
        return sanko_js_1.sanko;
    }
});
var sapphire_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sapphire.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sapphire", {
    enumerable: true,
    get: function() {
        return sapphire_js_1.sapphire;
    }
});
var sapphireTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sapphireTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sapphireTestnet", {
    enumerable: true,
    get: function() {
        return sapphireTestnet_js_1.sapphireTestnet;
    }
});
var satoshivm_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/satoshivm.js [app-client] (ecmascript)");
Object.defineProperty(exports, "satoshiVM", {
    enumerable: true,
    get: function() {
        return satoshivm_js_1.satoshiVM;
    }
});
var satoshivmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/satoshivmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "satoshiVMTestnet", {
    enumerable: true,
    get: function() {
        return satoshivmTestnet_js_1.satoshiVMTestnet;
    }
});
var scroll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/scroll.js [app-client] (ecmascript)");
Object.defineProperty(exports, "scroll", {
    enumerable: true,
    get: function() {
        return scroll_js_1.scroll;
    }
});
var scrollSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/scrollSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "scrollSepolia", {
    enumerable: true,
    get: function() {
        return scrollSepolia_js_1.scrollSepolia;
    }
});
var sei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sei", {
    enumerable: true,
    get: function() {
        return sei_js_1.sei;
    }
});
var seiDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seiDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "seiDevnet", {
    enumerable: true,
    get: function() {
        return seiDevnet_js_1.seiDevnet;
    }
});
var seismicDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seismicDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "seismicDevnet", {
    enumerable: true,
    get: function() {
        return seismicDevnet_js_1.seismicDevnet;
    }
});
var seiTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/seiTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "seiTestnet", {
    enumerable: true,
    get: function() {
        return seiTestnet_js_1.seiTestnet;
    }
});
var sepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sepolia", {
    enumerable: true,
    get: function() {
        return sepolia_js_1.sepolia;
    }
});
var shape_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shape.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shape", {
    enumerable: true,
    get: function() {
        return shape_js_1.shape;
    }
});
var shapeSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shapeSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shapeSepolia", {
    enumerable: true,
    get: function() {
        return shapeSepolia_js_1.shapeSepolia;
    }
});
var shardeum_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shardeum.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shardeum", {
    enumerable: true,
    get: function() {
        return shardeum_js_1.shardeum;
    }
});
var shardeumSphinx_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shardeumSphinx.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shardeumSphinx", {
    enumerable: true,
    get: function() {
        return shardeumSphinx_js_1.shardeumSphinx;
    }
});
var shibarium_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shibarium.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shibarium", {
    enumerable: true,
    get: function() {
        return shibarium_js_1.shibarium;
    }
});
var shibariumTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shibariumTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shibariumTestnet", {
    enumerable: true,
    get: function() {
        return shibariumTestnet_js_1.shibariumTestnet;
    }
});
var shiden_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shiden.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shiden", {
    enumerable: true,
    get: function() {
        return shiden_js_1.shiden;
    }
});
var shimmer_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shimmer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shimmer", {
    enumerable: true,
    get: function() {
        return shimmer_js_1.shimmer;
    }
});
var shimmerTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/shimmerTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "shimmerTestnet", {
    enumerable: true,
    get: function() {
        return shimmerTestnet_js_1.shimmerTestnet;
    }
});
var sidra_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sidra.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sidraChain", {
    enumerable: true,
    get: function() {
        return sidra_js_1.sidraChain;
    }
});
var silicon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/silicon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "silicon", {
    enumerable: true,
    get: function() {
        return silicon_js_1.silicon;
    }
});
var siliconSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/siliconSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "siliconSepolia", {
    enumerable: true,
    get: function() {
        return siliconSepolia_js_1.siliconSepolia;
    }
});
var sixProtocol_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sixProtocol.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sixProtocol", {
    enumerable: true,
    get: function() {
        return sixProtocol_js_1.sixProtocol;
    }
});
var brawl_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/brawl.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleBlockBrawlers", {
    enumerable: true,
    get: function() {
        return brawl_js_1.skaleBlockBrawlers;
    }
});
var calypso_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/calypso.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleCalypso", {
    enumerable: true,
    get: function() {
        return calypso_js_1.skaleCalypso;
    }
});
var calypsoTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/calypsoTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleCalypsoTestnet", {
    enumerable: true,
    get: function() {
        return calypsoTestnet_js_1.skaleCalypsoTestnet;
    }
});
var cryptoBlades_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/cryptoBlades.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleCryptoBlades", {
    enumerable: true,
    get: function() {
        return cryptoBlades_js_1.skaleCryptoBlades;
    }
});
var cryptoColosseum_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/cryptoColosseum.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleCryptoColosseum", {
    enumerable: true,
    get: function() {
        return cryptoColosseum_js_1.skaleCryptoColosseum;
    }
});
var europa_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/europa.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleEuropa", {
    enumerable: true,
    get: function() {
        return europa_js_1.skaleEuropa;
    }
});
var europaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/europaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleEuropaTestnet", {
    enumerable: true,
    get: function() {
        return europaTestnet_js_1.skaleEuropaTestnet;
    }
});
var exorde_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/exorde.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleExorde", {
    enumerable: true,
    get: function() {
        return exorde_js_1.skaleExorde;
    }
});
var humanProtocol_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/humanProtocol.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleHumanProtocol", {
    enumerable: true,
    get: function() {
        return humanProtocol_js_1.skaleHumanProtocol;
    }
});
var nebula_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/nebula.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleNebula", {
    enumerable: true,
    get: function() {
        return nebula_js_1.skaleNebula;
    }
});
var nebulaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/nebulaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleNebulaTestnet", {
    enumerable: true,
    get: function() {
        return nebulaTestnet_js_1.skaleNebulaTestnet;
    }
});
var razor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/razor.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleRazor", {
    enumerable: true,
    get: function() {
        return razor_js_1.skaleRazor;
    }
});
var titan_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/titan.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleTitan", {
    enumerable: true,
    get: function() {
        return titan_js_1.skaleTitan;
    }
});
var titanTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/skale/titanTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "skaleTitanTestnet", {
    enumerable: true,
    get: function() {
        return titanTestnet_js_1.skaleTitanTestnet;
    }
});
var sketchpad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sketchpad.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sketchpad", {
    enumerable: true,
    get: function() {
        return sketchpad_js_1.sketchpad;
    }
});
var snax_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/snax.js [app-client] (ecmascript)");
Object.defineProperty(exports, "snax", {
    enumerable: true,
    get: function() {
        return snax_js_1.snax;
    }
});
var snaxTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/snaxTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "snaxTestnet", {
    enumerable: true,
    get: function() {
        return snaxTestnet_js_1.snaxTestnet;
    }
});
var somniaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/somniaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "somniaTestnet", {
    enumerable: true,
    get: function() {
        return somniaTestnet_js_1.somniaTestnet;
    }
});
var soneium_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/soneium.js [app-client] (ecmascript)");
Object.defineProperty(exports, "soneium", {
    enumerable: true,
    get: function() {
        return soneium_js_1.soneium;
    }
});
var soneiumMinato_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/soneiumMinato.js [app-client] (ecmascript)");
Object.defineProperty(exports, "soneiumMinato", {
    enumerable: true,
    get: function() {
        return soneiumMinato_js_1.soneiumMinato;
    }
});
var sonic_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonic.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sonic", {
    enumerable: true,
    get: function() {
        return sonic_js_1.sonic;
    }
});
var sonicTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonicTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sonicTestnet", {
    enumerable: true,
    get: function() {
        return sonicTestnet_js_1.sonicTestnet;
    }
});
var sonicBlazeTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sonicBlazeTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sonicBlazeTestnet", {
    enumerable: true,
    get: function() {
        return sonicBlazeTestnet_js_1.sonicBlazeTestnet;
    }
});
var songbird_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/songbird.js [app-client] (ecmascript)");
Object.defineProperty(exports, "songbird", {
    enumerable: true,
    get: function() {
        return songbird_js_1.songbird;
    }
});
var songbirdTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/songbirdTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "songbirdTestnet", {
    enumerable: true,
    get: function() {
        return songbirdTestnet_js_1.songbirdTestnet;
    }
});
var sophon_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sophon.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sophon", {
    enumerable: true,
    get: function() {
        return sophon_js_1.sophon;
    }
});
var sophonTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/sophonTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sophonTestnet", {
    enumerable: true,
    get: function() {
        return sophonTestnet_js_1.sophonTestnet;
    }
});
var spicy_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/spicy.js [app-client] (ecmascript)");
Object.defineProperty(exports, "spicy", {
    enumerable: true,
    get: function() {
        return spicy_js_1.spicy;
    }
});
var statusNetworkSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/statusNetworkSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "statusSepolia", {
    enumerable: true,
    get: function() {
        return statusNetworkSepolia_js_1.statusSepolia;
    }
});
Object.defineProperty(exports, "statusNetworkSepolia", {
    enumerable: true,
    get: function() {
        return statusNetworkSepolia_js_1.statusSepolia;
    }
});
var step_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/step.js [app-client] (ecmascript)");
Object.defineProperty(exports, "step", {
    enumerable: true,
    get: function() {
        return step_js_1.step;
    }
});
var story_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/story.js [app-client] (ecmascript)");
Object.defineProperty(exports, "story", {
    enumerable: true,
    get: function() {
        return story_js_1.story;
    }
});
var storyAeneid_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyAeneid.js [app-client] (ecmascript)");
Object.defineProperty(exports, "storyAeneid", {
    enumerable: true,
    get: function() {
        return storyAeneid_js_1.storyAeneid;
    }
});
var storyOdyssey_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyOdyssey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "storyOdyssey", {
    enumerable: true,
    get: function() {
        return storyOdyssey_js_1.storyOdyssey;
    }
});
var storyTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/storyTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "storyTestnet", {
    enumerable: true,
    get: function() {
        return storyTestnet_js_1.storyTestnet;
    }
});
var stratis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/stratis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "stratis", {
    enumerable: true,
    get: function() {
        return stratis_js_1.stratis;
    }
});
var superlumio_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superlumio.js [app-client] (ecmascript)");
Object.defineProperty(exports, "superlumio", {
    enumerable: true,
    get: function() {
        return superlumio_js_1.superlumio;
    }
});
var superposition_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superposition.js [app-client] (ecmascript)");
Object.defineProperty(exports, "superposition", {
    enumerable: true,
    get: function() {
        return superposition_js_1.superposition;
    }
});
var superseed_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superseed.js [app-client] (ecmascript)");
Object.defineProperty(exports, "superseed", {
    enumerable: true,
    get: function() {
        return superseed_js_1.superseed;
    }
});
var superseedSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/superseedSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "superseedSepolia", {
    enumerable: true,
    get: function() {
        return superseedSepolia_js_1.superseedSepolia;
    }
});
var swan_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swan.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swan", {
    enumerable: true,
    get: function() {
        return swan_js_1.swan;
    }
});
var swanProximaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swanProximaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swanProximaTestnet", {
    enumerable: true,
    get: function() {
        return swanProximaTestnet_js_1.swanProximaTestnet;
    }
});
var swanSaturnTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swanSaturnTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swanSaturnTestnet", {
    enumerable: true,
    get: function() {
        return swanSaturnTestnet_js_1.swanSaturnTestnet;
    }
});
var swellchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swellchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swellchain", {
    enumerable: true,
    get: function() {
        return swellchain_js_1.swellchain;
    }
});
var swellchainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swellchainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swellchainTestnet", {
    enumerable: true,
    get: function() {
        return swellchainTestnet_js_1.swellchainTestnet;
    }
});
var swissdlt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/swissdlt.js [app-client] (ecmascript)");
Object.defineProperty(exports, "swissdlt", {
    enumerable: true,
    get: function() {
        return swissdlt_js_1.swissdlt;
    }
});
var syscoin_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/syscoin.js [app-client] (ecmascript)");
Object.defineProperty(exports, "syscoin", {
    enumerable: true,
    get: function() {
        return syscoin_js_1.syscoin;
    }
});
var syscoinTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/syscoinTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "syscoinTestnet", {
    enumerable: true,
    get: function() {
        return syscoinTestnet_js_1.syscoinTestnet;
    }
});
var taiko_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taiko.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taiko", {
    enumerable: true,
    get: function() {
        return taiko_js_1.taiko;
    }
});
var taikoHekla_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoHekla.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taikoHekla", {
    enumerable: true,
    get: function() {
        return taikoHekla_js_1.taikoHekla;
    }
});
var taikoJolnir_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoJolnir.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taikoJolnir", {
    enumerable: true,
    get: function() {
        return taikoJolnir_js_1.taikoJolnir;
    }
});
var taikoKatla_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoKatla.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taikoKatla", {
    enumerable: true,
    get: function() {
        return taikoKatla_js_1.taikoKatla;
    }
});
var taikoTestnetSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taikoTestnetSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taikoTestnetSepolia", {
    enumerable: true,
    get: function() {
        return taikoTestnetSepolia_js_1.taikoTestnetSepolia;
    }
});
var taraxa_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taraxa.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taraxa", {
    enumerable: true,
    get: function() {
        return taraxa_js_1.taraxa;
    }
});
var taraxaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/taraxaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "taraxaTestnet", {
    enumerable: true,
    get: function() {
        return taraxaTestnet_js_1.taraxaTestnet;
    }
});
var telcoinTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telcoinTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "telcoinTestnet", {
    enumerable: true,
    get: function() {
        return telcoinTestnet_js_1.telcoinTestnet;
    }
});
var telos_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telos.js [app-client] (ecmascript)");
Object.defineProperty(exports, "telos", {
    enumerable: true,
    get: function() {
        return telos_js_1.telos;
    }
});
var telosTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/telosTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "telosTestnet", {
    enumerable: true,
    get: function() {
        return telosTestnet_js_1.telosTestnet;
    }
});
var tenet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tenet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "tenet", {
    enumerable: true,
    get: function() {
        return tenet_js_1.tenet;
    }
});
var ternoa_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ternoa.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ternoa", {
    enumerable: true,
    get: function() {
        return ternoa_js_1.ternoa;
    }
});
var thaiChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thaiChain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "thaiChain", {
    enumerable: true,
    get: function() {
        return thaiChain_js_1.thaiChain;
    }
});
var that_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/that.js [app-client] (ecmascript)");
Object.defineProperty(exports, "that", {
    enumerable: true,
    get: function() {
        return that_js_1.that;
    }
});
var theta_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/theta.js [app-client] (ecmascript)");
Object.defineProperty(exports, "theta", {
    enumerable: true,
    get: function() {
        return theta_js_1.theta;
    }
});
var thetaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thetaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "thetaTestnet", {
    enumerable: true,
    get: function() {
        return thetaTestnet_js_1.thetaTestnet;
    }
});
var thunderCore_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thunderCore.js [app-client] (ecmascript)");
Object.defineProperty(exports, "thunderCore", {
    enumerable: true,
    get: function() {
        return thunderCore_js_1.thunderCore;
    }
});
var thunderTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/thunderTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "thunderTestnet", {
    enumerable: true,
    get: function() {
        return thunderTestnet_js_1.thunderTestnet;
    }
});
var tiktrixTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tiktrixTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "tiktrixTestnet", {
    enumerable: true,
    get: function() {
        return tiktrixTestnet_js_1.tiktrixTestnet;
    }
});
var tomb_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tomb.js [app-client] (ecmascript)");
Object.defineProperty(exports, "tomb", {
    enumerable: true,
    get: function() {
        return tomb_js_1.tomb;
    }
});
var treasure_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/treasure.js [app-client] (ecmascript)");
Object.defineProperty(exports, "treasure", {
    enumerable: true,
    get: function() {
        return treasure_js_1.treasure;
    }
});
var treasureTopaz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/treasureTopaz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "treasureTopaz", {
    enumerable: true,
    get: function() {
        return treasureTopaz_js_1.treasureTopaz;
    }
});
var tron_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tron.js [app-client] (ecmascript)");
Object.defineProperty(exports, "tron", {
    enumerable: true,
    get: function() {
        return tron_js_1.tron;
    }
});
var tronShasta_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/tronShasta.js [app-client] (ecmascript)");
Object.defineProperty(exports, "tronShasta", {
    enumerable: true,
    get: function() {
        return tronShasta_js_1.tronShasta;
    }
});
var ubiq_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ubiq.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ubiq", {
    enumerable: true,
    get: function() {
        return ubiq_js_1.ubiq;
    }
});
var ultra_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultra.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ultra", {
    enumerable: true,
    get: function() {
        return ultra_js_1.ultra;
    }
});
var ultraTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultraTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ultraTestnet", {
    enumerable: true,
    get: function() {
        return ultraTestnet_js_1.ultraTestnet;
    }
});
var ultron_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultron.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ultron", {
    enumerable: true,
    get: function() {
        return ultron_js_1.ultron;
    }
});
var ultronTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/ultronTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ultronTestnet", {
    enumerable: true,
    get: function() {
        return ultronTestnet_js_1.ultronTestnet;
    }
});
var unichain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unichain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "unichain", {
    enumerable: true,
    get: function() {
        return unichain_js_1.unichain;
    }
});
var unichainSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unichainSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "unichainSepolia", {
    enumerable: true,
    get: function() {
        return unichainSepolia_js_1.unichainSepolia;
    }
});
var unique_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unique.js [app-client] (ecmascript)");
Object.defineProperty(exports, "unique", {
    enumerable: true,
    get: function() {
        return unique_js_1.unique;
    }
});
var uniqueOpal_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/uniqueOpal.js [app-client] (ecmascript)");
Object.defineProperty(exports, "uniqueOpal", {
    enumerable: true,
    get: function() {
        return uniqueOpal_js_1.uniqueOpal;
    }
});
var uniqueQuartz_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/uniqueQuartz.js [app-client] (ecmascript)");
Object.defineProperty(exports, "uniqueQuartz", {
    enumerable: true,
    get: function() {
        return uniqueQuartz_js_1.uniqueQuartz;
    }
});
var unreal_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/unreal.js [app-client] (ecmascript)");
Object.defineProperty(exports, "unreal", {
    enumerable: true,
    get: function() {
        return unreal_js_1.unreal;
    }
});
var vanar_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vanar.js [app-client] (ecmascript)");
Object.defineProperty(exports, "vanar", {
    enumerable: true,
    get: function() {
        return vanar_js_1.vanar;
    }
});
var vechain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vechain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "vechain", {
    enumerable: true,
    get: function() {
        return vechain_js_1.vechain;
    }
});
var velas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/velas.js [app-client] (ecmascript)");
Object.defineProperty(exports, "velas", {
    enumerable: true,
    get: function() {
        return velas_js_1.velas;
    }
});
var viction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/viction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "viction", {
    enumerable: true,
    get: function() {
        return viction_js_1.viction;
    }
});
var victionTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/victionTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "victionTestnet", {
    enumerable: true,
    get: function() {
        return victionTestnet_js_1.victionTestnet;
    }
});
var vision_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/vision.js [app-client] (ecmascript)");
Object.defineProperty(exports, "vision", {
    enumerable: true,
    get: function() {
        return vision_js_1.vision;
    }
});
var visionTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/visionTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "visionTestnet", {
    enumerable: true,
    get: function() {
        return visionTestnet_js_1.visionTestnet;
    }
});
var wanchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wanchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "wanchain", {
    enumerable: true,
    get: function() {
        return wanchain_js_1.wanchain;
    }
});
var wanchainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wanchainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "wanchainTestnet", {
    enumerable: true,
    get: function() {
        return wanchainTestnet_js_1.wanchainTestnet;
    }
});
var weavevmAlphanet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/weavevmAlphanet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "weaveVMAlphanet", {
    enumerable: true,
    get: function() {
        return weavevmAlphanet_js_1.weaveVMAlphanet;
    }
});
var wemix_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wemix.js [app-client] (ecmascript)");
Object.defineProperty(exports, "wemix", {
    enumerable: true,
    get: function() {
        return wemix_js_1.wemix;
    }
});
var wemixTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wemixTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "wemixTestnet", {
    enumerable: true,
    get: function() {
        return wemixTestnet_js_1.wemixTestnet;
    }
});
var westendAssetHub_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/westendAssetHub.js [app-client] (ecmascript)");
Object.defineProperty(exports, "westendAssetHub", {
    enumerable: true,
    get: function() {
        return westendAssetHub_js_1.westendAssetHub;
    }
});
var whitechain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/whitechain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "whitechain", {
    enumerable: true,
    get: function() {
        return whitechain_js_1.whitechain;
    }
});
var whitechainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/whitechainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "whitechainTestnet", {
    enumerable: true,
    get: function() {
        return whitechainTestnet_js_1.whitechainTestnet;
    }
});
var wmcTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/wmcTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "wmcTestnet", {
    enumerable: true,
    get: function() {
        return wmcTestnet_js_1.wmcTestnet;
    }
});
var worldchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "worldchain", {
    enumerable: true,
    get: function() {
        return worldchain_js_1.worldchain;
    }
});
var worldchainSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldchainSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "worldchainSepolia", {
    enumerable: true,
    get: function() {
        return worldchainSepolia_js_1.worldchainSepolia;
    }
});
var worldLand_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/worldLand.js [app-client] (ecmascript)");
Object.defineProperty(exports, "worldLand", {
    enumerable: true,
    get: function() {
        return worldLand_js_1.worldLand;
    }
});
var xai_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xai.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xai", {
    enumerable: true,
    get: function() {
        return xai_js_1.xai;
    }
});
var xaiTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xaiTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xaiTestnet", {
    enumerable: true,
    get: function() {
        return xaiTestnet_js_1.xaiTestnet;
    }
});
var xdc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xdc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xdc", {
    enumerable: true,
    get: function() {
        return xdc_js_1.xdc;
    }
});
var xdcTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xdcTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xdcTestnet", {
    enumerable: true,
    get: function() {
        return xdcTestnet_js_1.xdcTestnet;
    }
});
var xLayer_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xLayer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xLayer", {
    enumerable: true,
    get: function() {
        return xLayer_js_1.xLayer;
    }
});
var xLayerTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xLayerTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "x1Testnet", {
    enumerable: true,
    get: function() {
        return xLayerTestnet_js_1.x1Testnet;
    }
});
Object.defineProperty(exports, "xLayerTestnet", {
    enumerable: true,
    get: function() {
        return xLayerTestnet_js_1.xLayerTestnet;
    }
});
var xrOne_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrOne.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xrOne", {
    enumerable: true,
    get: function() {
        return xrOne_js_1.xrOne;
    }
});
var xrplevmDevnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrplevmDevnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xrplevmDevnet", {
    enumerable: true,
    get: function() {
        return xrplevmDevnet_js_1.xrplevmDevnet;
    }
});
var xrplevmTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrplevmTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xrplevmTestnet", {
    enumerable: true,
    get: function() {
        return xrplevmTestnet_js_1.xrplevmTestnet;
    }
});
var xrSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/xrSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "xrSepolia", {
    enumerable: true,
    get: function() {
        return xrSepolia_js_1.xrSepolia;
    }
});
var yooldoVerse_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/yooldoVerse.js [app-client] (ecmascript)");
Object.defineProperty(exports, "yooldoVerse", {
    enumerable: true,
    get: function() {
        return yooldoVerse_js_1.yooldoVerse;
    }
});
var yooldoVerseTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/yooldoVerseTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "yooldoVerseTestnet", {
    enumerable: true,
    get: function() {
        return yooldoVerseTestnet_js_1.yooldoVerseTestnet;
    }
});
var zenchainTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zenchainTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zenchainTestnet", {
    enumerable: true,
    get: function() {
        return zenchainTestnet_js_1.zenchainTestnet;
    }
});
var zeniq_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zeniq.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zeniq", {
    enumerable: true,
    get: function() {
        return zeniq_js_1.zeniq;
    }
});
var _0g_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/0g.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zeroG", {
    enumerable: true,
    get: function() {
        return _0g_js_1.zeroG;
    }
});
var zeroNetwork_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zeroNetwork.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zeroNetwork", {
    enumerable: true,
    get: function() {
        return zeroNetwork_js_1.zeroNetwork;
    }
});
var zetachain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zetachain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zetachain", {
    enumerable: true,
    get: function() {
        return zetachain_js_1.zetachain;
    }
});
var zetachainAthensTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zetachainAthensTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zetachainAthensTestnet", {
    enumerable: true,
    get: function() {
        return zetachainAthensTestnet_js_1.zetachainAthensTestnet;
    }
});
var zhejiang_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zhejiang.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zhejiang", {
    enumerable: true,
    get: function() {
        return zhejiang_js_1.zhejiang;
    }
});
var zilliqa_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zilliqa.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zilliqa", {
    enumerable: true,
    get: function() {
        return zilliqa_js_1.zilliqa;
    }
});
var zilliqaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zilliqaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zilliqaTestnet", {
    enumerable: true,
    get: function() {
        return zilliqaTestnet_js_1.zilliqaTestnet;
    }
});
var zircuit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zircuit", {
    enumerable: true,
    get: function() {
        return zircuit_js_1.zircuit;
    }
});
var zircuitGarfieldTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuitGarfieldTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zircuitGarfieldTestnet", {
    enumerable: true,
    get: function() {
        return zircuitGarfieldTestnet_js_1.zircuitGarfieldTestnet;
    }
});
var zircuitTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zircuitTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zircuitTestnet", {
    enumerable: true,
    get: function() {
        return zircuitTestnet_js_1.zircuitTestnet;
    }
});
var zkFair_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkFair.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkFair", {
    enumerable: true,
    get: function() {
        return zkFair_js_1.zkFair;
    }
});
var zkFairTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkFairTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkFairTestnet", {
    enumerable: true,
    get: function() {
        return zkFairTestnet_js_1.zkFairTestnet;
    }
});
var zkLinkNova_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkLinkNova.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkLinkNova", {
    enumerable: true,
    get: function() {
        return zkLinkNova_js_1.zkLinkNova;
    }
});
var zkLinkNovaSepoliaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zkLinkNovaSepoliaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkLinkNovaSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return zkLinkNovaSepoliaTestnet_js_1.zkLinkNovaSepoliaTestnet;
    }
});
var zksync_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksync.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkSync", {
    enumerable: true,
    get: function() {
        return zksync_js_1.zksync;
    }
});
Object.defineProperty(exports, "zksync", {
    enumerable: true,
    get: function() {
        return zksync_js_1.zksync;
    }
});
var zksyncInMemoryNode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncInMemoryNode.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkSyncInMemoryNode", {
    enumerable: true,
    get: function() {
        return zksyncInMemoryNode_js_1.zksyncInMemoryNode;
    }
});
Object.defineProperty(exports, "zksyncInMemoryNode", {
    enumerable: true,
    get: function() {
        return zksyncInMemoryNode_js_1.zksyncInMemoryNode;
    }
});
var zksyncLocalCustomHyperchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalCustomHyperchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zksyncLocalCustomHyperchain", {
    enumerable: true,
    get: function() {
        return zksyncLocalCustomHyperchain_js_1.zksyncLocalCustomHyperchain;
    }
});
var zksyncLocalHyperchain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalHyperchain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zksyncLocalHyperchain", {
    enumerable: true,
    get: function() {
        return zksyncLocalHyperchain_js_1.zksyncLocalHyperchain;
    }
});
var zksyncLocalHyperchainL1_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalHyperchainL1.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zksyncLocalHyperchainL1", {
    enumerable: true,
    get: function() {
        return zksyncLocalHyperchainL1_js_1.zksyncLocalHyperchainL1;
    }
});
var zksyncLocalNode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncLocalNode.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkSyncLocalNode", {
    enumerable: true,
    get: function() {
        return zksyncLocalNode_js_1.zksyncLocalNode;
    }
});
Object.defineProperty(exports, "zksyncLocalNode", {
    enumerable: true,
    get: function() {
        return zksyncLocalNode_js_1.zksyncLocalNode;
    }
});
var zksyncSepoliaTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zksyncSepoliaTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zkSyncSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return zksyncSepoliaTestnet_js_1.zksyncSepoliaTestnet;
    }
});
Object.defineProperty(exports, "zksyncSepoliaTestnet", {
    enumerable: true,
    get: function() {
        return zksyncSepoliaTestnet_js_1.zksyncSepoliaTestnet;
    }
});
var zora_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zora.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zora", {
    enumerable: true,
    get: function() {
        return zora_js_1.zora;
    }
});
var zoraSepolia_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zoraSepolia.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zoraSepolia", {
    enumerable: true,
    get: function() {
        return zoraSepolia_js_1.zoraSepolia;
    }
});
var zoraTestnet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/chains/definitions/zoraTestnet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zoraTestnet", {
    enumerable: true,
    get: function() {
        return zoraTestnet_js_1.zoraTestnet;
    }
}); //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=0aa7d_viem__cjs_chains_3cddd3e4._.js.map