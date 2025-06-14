(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAction = getAction;
function getAction(client, actionFn, name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItem = formatAbiItem;
exports.formatAbiParams = formatAbiParams;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' && abiItem.type !== 'event' && abiItem.type !== 'error') throw new abi_js_1.InvalidDefinitionTypeError(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, {
        includeName
    })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params) return '';
    return params.map((param)=>formatAbiParam(param, {
            includeName
        })).join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, {
            includeName
        })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHex = isHex;
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== 'string') return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
} //# sourceMappingURL=isHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.size = size;
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
function size(value) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
} //# sourceMappingURL=size.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pad = pad;
exports.padHex = padHex;
exports.padBytes = padBytes;
const data_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string') return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size,
        type: 'bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
} //# sourceMappingURL=pad.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right') data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
} //# sourceMappingURL=trim.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertSize = assertSize;
exports.fromHex = fromHex;
exports.hexToBigInt = hexToBigInt;
exports.hexToBool = hexToBool;
exports.hexToNumber = hexToNumber;
exports.hexToString = hexToString;
const encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function assertSize(hexOrBytes, { size }) {
    if ((0, size_js_1.size)(hexOrBytes) > size) throw new encoding_js_1.SizeOverflowError({
        givenSize: (0, size_js_1.size)(hexOrBytes),
        maxSize: size
    });
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return hexToNumber(hex, opts);
    if (to === 'bigint') return hexToBigInt(hex, opts);
    if (to === 'string') return hexToString(hex, opts);
    if (to === 'boolean') return hexToBool(hex, opts);
    return (0, toBytes_js_1.hexToBytes)(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, trim_js_1.trim)(hex);
    }
    if ((0, trim_js_1.trim)(hex) === '0x00') return false;
    if ((0, trim_js_1.trim)(hex) === '0x01') return true;
    throw new encoding_js_1.InvalidHexBooleanError(hex);
}
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
    let bytes = (0, toBytes_js_1.hexToBytes)(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toHex = toHex;
exports.boolToHex = boolToHex;
exports.bytesToHex = bytesToHex;
exports.numberToHex = numberToHex;
exports.stringToHex = stringToHex;
const encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const hexes = Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean') return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            size: opts.size
        });
    }
    return hex;
}
function bytesToHex(value, opts = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++){
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    return hex;
}
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new encoding_js_1.IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, pad_js_1.pad)(hex, {
        size
    });
    return hex;
}
const encoder = new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
} //# sourceMappingURL=toHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBytes = toBytes;
exports.boolToBytes = boolToBytes;
exports.hexToBytes = hexToBytes;
exports.numberToBytes = numberToBytes;
exports.stringToBytes = stringToBytes;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const encoder = new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToBytes(value, opts);
    if (typeof value === 'boolean') return boolToBytes(value, opts);
    if ((0, isHex_js_1.isHex)(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        hex = (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new base_js_1.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function numberToBytes(value, opts) {
    const hex = (0, toHex_js_1.numberToHex)(value, opts);
    return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            dir: 'right',
            size: opts.size
        });
    }
    return bytes;
} //# sourceMappingURL=toBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak256 = keccak256;
const sha3_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/sha3.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha3_1.keccak_256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=keccak256.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/hashSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashSignature = hashSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const hash = (value)=>(0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
function hashSignature(sig) {
    return hash(sig);
} //# sourceMappingURL=hashSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeSignature = normalizeSignature;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        if (char === '(') level++;
        if (char === ')') level--;
        if (!active) continue;
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        if (char === ' ') {
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new base_js_1.BaseError('Unable to normalize signature.');
    return result;
} //# sourceMappingURL=normalizeSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSignature = void 0;
const abitype_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
const normalizeSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-client] (ecmascript)");
const toSignature = (def)=>{
    const def_ = (()=>{
        if (typeof def === 'string') return def;
        return (0, abitype_1.formatAbiItem)(def);
    })();
    return (0, normalizeSignature_js_1.normalizeSignature)(def_);
};
exports.toSignature = toSignature; //# sourceMappingURL=toSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSignatureHash = toSignatureHash;
const hashSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/hashSignature.js [app-client] (ecmascript)");
const toSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
function toSignatureHash(fn) {
    return (0, hashSignature_js_1.hashSignature)((0, toSignature_js_1.toSignature)(fn));
} //# sourceMappingURL=toSignatureHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventSelector = void 0;
const toSignatureHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
exports.toEventSelector = toSignatureHash_js_1.toSignatureHash; //# sourceMappingURL=toEventSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LruMap = void 0;
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
}
exports.LruMap = LruMap; //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checksumAddress = checksumAddress;
exports.getAddress = getAddress;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const checksumAddressCache = new lru_js_1.LruMap(8192);
function checksumAddress(address_, chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, chainId) {
    if (!(0, isAddress_js_1.isAddress)(address, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address
    });
    return checksumAddress(address, chainId);
} //# sourceMappingURL=getAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddressCache = void 0;
exports.isAddress = isAddress;
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
exports.isAddressCache = new lru_js_1.LruMap(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (exports.isAddressCache.has(cacheKey)) return exports.isAddressCache.get(cacheKey);
    const result = (()=>{
        if (!addressRegex.test(address)) return false;
        if (address.toLowerCase() === address) return true;
        if (strict) return (0, getAddress_js_1.checksumAddress)(address) === address;
        return true;
    })();
    exports.isAddressCache.set(cacheKey, result);
    return result;
} //# sourceMappingURL=isAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = concat;
exports.concatBytes = concatBytes;
exports.concatHex = concatHex;
function concat(values) {
    if (typeof values[0] === 'string') return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
} //# sourceMappingURL=concat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slice = slice;
exports.sliceBytes = sliceBytes;
exports.sliceHex = sliceHex;
const data_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
function slice(value, start, end, { strict } = {}) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return sliceHex(value, start, end, {
        strict
    });
    return sliceBytes(value, start, end, {
        strict
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, size_js_1.size)(value) - 1) throw new data_js_1.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: (0, size_js_1.size)(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, size_js_1.size)(value) !== end - start) {
        throw new data_js_1.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: (0, size_js_1.size)(value)
        });
    }
}
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict) assertEndOffset(value, start, end);
    return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_.replace('0x', '').slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict) assertEndOffset(value, start, end);
    return value;
} //# sourceMappingURL=slice.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.integerRegex = exports.bytesRegex = exports.arrayRegex = void 0;
exports.arrayRegex = /^(.*)\[([0-9]*)\]$/;
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeAbiParameters = encodeAbiParameters;
exports.getArrayComponents = getArrayComponents;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
function encodeAbiParameters(params, values) {
    if (params.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: params.length,
        givenLength: values.length
    });
    const preparedParams = prepareParams({
        params: params,
        values: values
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0) return '0x';
    return data;
}
function prepareParams({ params, values }) {
    const preparedParams = [];
    for(let i = 0; i < params.length; i++){
        preparedParams.push(prepareParam({
            param: params[i],
            value: values[i]
        }));
    }
    return preparedParams;
}
function prepareParam({ param, value }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            length,
            param: {
                ...param,
                type
            }
        });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        const [, , size = '256'] = regex_js_1.integerRegex.exec(param.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, {
            param
        });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new abi_js_1.InvalidAbiEncodingTypeError(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters'
    });
}
function encodeParams(preparedParams) {
    let staticSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, size_js_1.size)(encoded);
    }
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0, toHex_js_1.numberToHex)(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParams.push(encoded);
            dynamicSize += (0, size_js_1.size)(encoded);
        } else {
            staticParams.push(encoded);
        }
    }
    return (0, concat_js_1.concat)([
        ...staticParams,
        ...dynamicParams
    ]);
}
function encodeAddress(value) {
    if (!(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
        address: value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value.toLowerCase())
    };
}
function encodeArray(value, { length, param }) {
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new abi_js_1.InvalidArrayError(value);
    if (!dynamic && value.length !== length) throw new abi_js_1.AbiEncodingArrayLengthMismatchError({
        expectedLength: length,
        givenLength: value.length,
        type: `${param.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParams = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParam({
            param,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0, toHex_js_1.numberToHex)(preparedParams.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0, concat_js_1.concat)([
                    length,
                    data
                ]) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0, size_js_1.size)(value);
    if (!paramSize) {
        let value_ = value;
        if (bytesSize % 32 !== 0) value_ = (0, pad_js_1.padHex)(value_, {
            dir: 'right',
            size: Math.ceil((value.length - 2) / 2 / 32) * 32
        });
        return {
            dynamic: true,
            encoded: (0, concat_js_1.concat)([
                (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)(bytesSize, {
                    size: 32
                })),
                value_
            ])
        };
    }
    if (bytesSize !== Number.parseInt(paramSize)) throw new abi_js_1.AbiEncodingBytesSizeMismatchError({
        expectedSize: Number.parseInt(paramSize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value, {
            dir: 'right'
        })
    };
}
function encodeBool(value) {
    if (typeof value !== 'boolean') throw new base_js_1.BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)((0, toHex_js_1.boolToHex)(value))
    };
}
function encodeNumber(value, { signed, size = 256 }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new encoding_js_1.IntegerOutOfRangeError({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: (0, toHex_js_1.numberToHex)(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, toHex_js_1.stringToHex)(value);
    const partsLength = Math.ceil((0, size_js_1.size)(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, pad_js_1.padHex)((0, slice_js_1.slice)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right'
        }));
    }
    return {
        dynamic: true,
        encoded: (0, concat_js_1.concat)([
            (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)((0, size_js_1.size)(hexValue), {
                size: 32
            })),
            ...parts
        ])
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for(let i = 0; i < param.components.length; i++){
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index]
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encodeParams(preparedParams) : (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
} //# sourceMappingURL=encodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionSelector = void 0;
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toSignatureHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
const toFunctionSelector = (fn)=>(0, slice_js_1.slice)((0, toSignatureHash_js_1.toSignatureHash)(fn), 0, 4);
exports.toFunctionSelector = toFunctionSelector; //# sourceMappingURL=toFunctionSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAbiItem = getAbiItem;
exports.isArgOfType = isArgOfType;
exports.getAmbiguousTypes = getAmbiguousTypes;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0, isHex_js_1.isHex)(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function') return (0, toFunctionSelector_js_1.toFunctionSelector)(abiItem) === name;
            if (abiItem.type === 'event') return (0, toEventSelector_js_1.toEventSelector)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) return undefined;
    if (abiItems.length === 1) return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new abi_js_1.AbiItemAmbiguityError({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem) return matchedAbiItem;
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return (0, isAddress_js_1.isAddress)(arg, {
                strict: false
            });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default:
            {
                if (abiParameterType === 'tuple' && 'components' in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                    return isArgOfType(Object.values(arg)[index], component);
                });
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, '')
                        }));
                }
                return false;
            }
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' && targetParameter.type === 'tuple' && 'components' in sourceParameter && 'components' in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes('address') && types.includes('bytes20')) return true;
            if (types.includes('address') && types.includes('string')) return (0, isAddress_js_1.isAddress)(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return (0, isAddress_js_1.isAddress)(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=getAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeEventTopics = encodeEventTopics;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeEventTopics';
function encodeEventTopics(parameters) {
    const { abi, eventName, args } = parameters;
    let abiItem = abi[0];
    if (eventName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            name: eventName
        });
        if (!item) throw new abi_js_1.AbiEventNotFoundError(eventName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'event') throw new abi_js_1.AbiEventNotFoundError(undefined, {
        docsPath
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, toEventSelector_js_1.toEventSelector)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param)=>'indexed' in param && param.indexed);
        const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x)=>args[x.name]) ?? [] : [];
        if (args_.length > 0) {
            topics = indexedInputs?.map((param, i)=>{
                if (Array.isArray(args_[i])) return args_[i].map((_, j)=>encodeArg({
                        param,
                        value: args_[i][j]
                    }));
                return typeof args_[i] !== 'undefined' && args_[i] !== null ? encodeArg({
                    param,
                    value: args_[i]
                }) : null;
            }) ?? [];
        }
    }
    return [
        signature,
        ...topics
    ];
}
function encodeArg({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes') return (0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) throw new log_js_1.FilterTypeNotSupportedError(param.type);
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
        param
    ], [
        value
    ]);
} //# sourceMappingURL=encodeEventTopics.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFilterRequestScope = createFilterRequestScope;
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback') client.transport.onResponse?.(({ method: method_, response: id, status, transport })=>{
        if (status === 'success' && method === method_) requestMap[id] = transport.request;
    });
    return (id)=>requestMap[id] || client.request;
} //# sourceMappingURL=createFilterRequestScope.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareEncodeFunctionData = prepareEncodeFunctionData;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    return {
        abi: [
            abiItem
        ],
        functionName: (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(abiItem))
    };
} //# sourceMappingURL=prepareEncodeFunctionData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionData = encodeFunctionData;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const prepareEncodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)");
function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (()=>{
        if (parameters.abi.length === 1 && parameters.functionName?.startsWith('0x')) return parameters;
        return (0, prepareEncodeFunctionData_js_1.prepareEncodeFunctionData)(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs ? (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args ?? []) : undefined;
    return (0, concat_js_1.concatHex)([
        signature,
        data ?? '0x'
    ]);
} //# sourceMappingURL=encodeFunctionData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCursor = createCursor;
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)");
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new cursor_js_1.RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new cursor_js_1.PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBytes = fromBytes;
exports.bytesToBigInt = bytesToBigInt;
exports.bytesToBool = bytesToBool;
exports.bytesToNumber = bytesToNumber;
exports.bytesToString = bytesToString;
const encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return bytesToNumber(bytes, opts);
    if (to === 'bigint') return bytesToBigInt(bytes, opts);
    if (to === 'boolean') return bytesToBool(bytes, opts);
    if (to === 'string') return bytesToString(bytes, opts);
    return (0, toHex_js_1.bytesToHex)(bytes, opts);
}
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToBigInt)(hex, opts);
}
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1) throw new encoding_js_1.InvalidBytesBooleanError(bytes);
    return Boolean(bytes[0]);
}
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToNumber)(hex, opts);
}
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeAbiParameters = decodeAbiParameters;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0, toBytes_js_1.hexToBytes)(data) : data;
    const cursor = (0, cursor_js_1.createCursor)(bytes);
    if ((0, size_js_1.size)(bytes) === 0 && params.length > 0) throw new abi_js_1.AbiDecodingZeroDataError();
    if ((0, size_js_1.size)(data) && (0, size_js_1.size)(data) < 32) throw new abi_js_1.AbiDecodingDataSizeTooSmallError({
        data: typeof data === 'string' ? data : (0, toHex_js_1.bytesToHex)(data),
        params: params,
        size: (0, size_js_1.size)(data)
    });
    let consumed = 0;
    const values = [];
    for(let i = 0; i < params.length; ++i){
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor);
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new abi_js_1.InvalidAbiDecodingTypeError(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters'
    });
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [
        (0, getAddress_js_1.checksumAddress)((0, toHex_js_1.bytesToHex)((0, slice_js_1.sliceBytes)(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    if (!length) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        cursor.setPosition(start);
        const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfLength));
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    if (hasDynamicChild(param)) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start
            });
            value.push(data);
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        (0, fromBytes_js_1.bytesToBool)(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
        cursor.setPosition(staticPosition + offset);
        const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
        if (length === 0) {
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        cursor.setPosition(staticPosition + 32);
        return [
            (0, toHex_js_1.bytesToHex)(data),
            32
        ];
    }
    const value = (0, toHex_js_1.bytesToHex)(cursor.readBytes(Number.parseInt(size), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48 ? (0, fromBytes_js_1.bytesToBigInt)(value, {
            signed
        }) : (0, fromBytes_js_1.bytesToNumber)(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    if (hasDynamicChild(param)) {
        const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    const offset = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, fromBytes_js_1.bytesToNumber)(cursor.readBytes(32));
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, fromBytes_js_1.bytesToString)((0, trim_js_1.trim)(data));
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=decodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeErrorResult = decodeErrorResult;
const solidity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    if (signature === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
    const abi_ = [
        ...abi || [],
        solidity_js_1.solidityError,
        solidity_js_1.solidityPanic
    ];
    const abiItem = abi_.find((x)=>x.type === 'error' && signature === (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!abiItem) throw new abi_js_1.AbiErrorSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeErrorResult'
    });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.inputs, (0, slice_js_1.slice)(data, 4)) : undefined,
        errorName: abiItem.name
    };
} //# sourceMappingURL=decodeErrorResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringify = void 0;
const stringify = (value, replacer, space)=>JSON.stringify(value, (key, value_)=>{
        const value = typeof value_ === 'bigint' ? value_.toString() : value_;
        return typeof replacer === 'function' ? replacer(key, value) : value;
    }, space);
exports.stringify = stringify; //# sourceMappingURL=stringify.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItemWithArgs = formatAbiItemWithArgs;
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!('name' in abiItem)) return;
    if (!('inputs' in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0, stringify_js_1.stringify)(args[i]) : args[i]}`).join(', ')})`;
} //# sourceMappingURL=formatAbiItemWithArgs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUnits = formatUnits;
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
} //# sourceMappingURL=formatUnits.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatEther = formatEther;
const unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const formatUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
function formatEther(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.etherUnits[unit]);
} //# sourceMappingURL=formatEther.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatGwei = formatGwei;
const unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const formatUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
function formatGwei(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.gweiUnits[unit]);
} //# sourceMappingURL=formatGwei.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractError = getContractError;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender }) {
    const error = err instanceof contract_js_1.RawContractError ? err : err instanceof base_js_1.BaseError ? err.walk((err)=>'data' in err) || err.walk() : {};
    const { code, data, details, message, shortMessage } = error;
    const cause = (()=>{
        if (err instanceof abi_js_1.AbiDecodingZeroDataError) return new contract_js_1.ContractFunctionZeroDataError({
            functionName
        });
        if ([
            EXECUTION_REVERTED_ERROR_CODE,
            rpc_js_1.InternalRpcError.code
        ].includes(code) && (data || details || message || shortMessage)) {
            return new contract_js_1.ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: error instanceof request_js_1.RpcRequestError ? details : shortMessage ?? message
            });
        }
        return err;
    })();
    return new contract_js_1.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender
    });
} //# sourceMappingURL=getContractError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverPublicKey = recoverPublicKey;
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
async function recoverPublicKey({ hash, signature }) {
    const hashHex = (0, isHex_js_1.isHex)(hash) ? hash : (0, toHex_js_1.toHex)(hash);
    const { secp256k1 } = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)"));
    const signature_ = (()=>{
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).addRecoveryBit(recoveryBit);
        }
        const signatureHex = (0, isHex_js_1.isHex)(signature) ? signature : (0, toHex_js_1.toHex)(signature);
        if ((0, size_js_1.size)(signatureHex) !== 65) throw new Error('invalid signature length');
        const yParityOrV = (0, fromHex_js_1.hexToNumber)(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
    if (yParityOrV === 27) return 0;
    if (yParityOrV === 28) return 1;
    throw new Error('Invalid yParityOrV value');
} //# sourceMappingURL=recoverPublicKey.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverAddress = recoverAddress;
const publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
const recoverPublicKey_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
async function recoverAddress({ hash, signature }) {
    return (0, publicKeyToAddress_js_1.publicKeyToAddress)(await (0, recoverPublicKey_js_1.recoverPublicKey)({
        hash,
        signature
    }));
} //# sourceMappingURL=recoverAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toRlp = toRlp;
exports.bytesToRlp = bytesToRlp;
exports.hexToRlp = hexToRlp;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0, cursor_js_1.createCursor)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex') return (0, toHex_js_1.bytesToHex)(cursor.bytes);
    return cursor.bytes;
}
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
function getEncodable(bytes) {
    if (Array.isArray(bytes)) return getEncodableList(bytes.map((x)=>getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x)=>acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (()=>{
        if (bodyLength <= 55) return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode (cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            } else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1) cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2) cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3) cursor.pushUint24(bodyLength);
                else cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list){
                encode(cursor);
            }
        }
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0, toBytes_js_1.hexToBytes)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (()=>{
        if (bytes.length === 1 && bytes[0] < 0x80) return 1;
        if (bytes.length <= 55) return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode (cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            } else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            } else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1) cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2) cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3) cursor.pushUint24(bytes.length);
                else cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        }
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8) return 1;
    if (length < 2 ** 16) return 2;
    if (length < 2 ** 24) return 3;
    if (length < 2 ** 32) return 4;
    throw new base_js_1.BaseError('Length is too large.');
} //# sourceMappingURL=toRlp.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashAuthorization = hashAuthorization;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
function hashAuthorization(parameters) {
    const { chainId, nonce, to } = parameters;
    const address = parameters.contractAddress ?? parameters.address;
    const hash = (0, keccak256_js_1.keccak256)((0, concat_js_1.concatHex)([
        '0x05',
        (0, toRlp_js_1.toRlp)([
            chainId ? (0, toHex_js_1.numberToHex)(chainId) : '0x',
            address,
            nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x'
        ])
    ]));
    if (to === 'bytes') return (0, toBytes_js_1.hexToBytes)(hash);
    return hash;
} //# sourceMappingURL=hashAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverAuthorizationAddress = recoverAuthorizationAddress;
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
const hashAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)");
async function recoverAuthorizationAddress(parameters) {
    const { authorization, signature } = parameters;
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashAuthorization_js_1.hashAuthorization)(authorization),
        signature: signature ?? authorization
    });
} //# sourceMappingURL=recoverAuthorizationAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.containsNodeError = containsNodeError;
exports.getNodeError = getNodeError;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
function containsNodeError(err) {
    return err instanceof rpc_js_1.TransactionRejectedRpcError || err instanceof rpc_js_1.InvalidInputRpcError || err instanceof request_js_1.RpcRequestError && err.code === node_js_1.ExecutionRevertedError.code;
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof base_js_1.BaseError ? err.walk((e)=>e?.code === node_js_1.ExecutionRevertedError.code) : err;
    if (executionRevertedError instanceof base_js_1.BaseError) return new node_js_1.ExecutionRevertedError({
        cause: err,
        message: executionRevertedError.details
    });
    if (node_js_1.ExecutionRevertedError.nodeMessage.test(message)) return new node_js_1.ExecutionRevertedError({
        cause: err,
        message: err.details
    });
    if (node_js_1.FeeCapTooHighError.nodeMessage.test(message)) return new node_js_1.FeeCapTooHighError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.FeeCapTooLowError.nodeMessage.test(message)) return new node_js_1.FeeCapTooLowError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.NonceTooHighError.nodeMessage.test(message)) return new node_js_1.NonceTooHighError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceTooLowError.nodeMessage.test(message)) return new node_js_1.NonceTooLowError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceMaxValueError.nodeMessage.test(message)) return new node_js_1.NonceMaxValueError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.InsufficientFundsError.nodeMessage.test(message)) return new node_js_1.InsufficientFundsError({
        cause: err
    });
    if (node_js_1.IntrinsicGasTooHighError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooHighError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.IntrinsicGasTooLowError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooLowError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.TransactionTypeNotSupportedError.nodeMessage.test(message)) return new node_js_1.TransactionTypeNotSupportedError({
        cause: err
    });
    if (node_js_1.TipAboveFeeCapError.nodeMessage.test(message)) return new node_js_1.TipAboveFeeCapError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new node_js_1.UnknownNodeError({
        cause: err
    });
} //# sourceMappingURL=getNodeError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEstimateGasError = getEstimateGasError;
const estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new estimateGas_js_1.EstimateGasExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getEstimateGasError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extract = extract;
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === 'object' && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
} //# sourceMappingURL=extract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineFormatter = defineFormatter;
function defineFormatter(type, format) {
    return ({ exclude, format: overrides })=>{
        return {
            exclude,
            format: (args)=>{
                const formatted = format(args);
                if (exclude) {
                    for (const key of exclude){
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args)
                };
            },
            type
        };
    };
} //# sourceMappingURL=formatter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionRequest = exports.rpcTransactionType = void 0;
exports.formatTransactionRequest = formatTransactionRequest;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
exports.rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4'
};
function formatTransactionRequest(request) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== 'undefined') rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== 'undefined') rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined') rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string') rpcRequest.blobs = request.blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
        else rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined') rpcRequest.data = request.data;
    if (typeof request.from !== 'undefined') rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined') rpcRequest.gas = (0, toHex_js_1.numberToHex)(request.gas);
    if (typeof request.gasPrice !== 'undefined') rpcRequest.gasPrice = (0, toHex_js_1.numberToHex)(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined') rpcRequest.maxFeePerBlobGas = (0, toHex_js_1.numberToHex)(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined') rpcRequest.maxFeePerGas = (0, toHex_js_1.numberToHex)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined') rpcRequest.maxPriorityFeePerGas = (0, toHex_js_1.numberToHex)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined') rpcRequest.nonce = (0, toHex_js_1.numberToHex)(request.nonce);
    if (typeof request.to !== 'undefined') rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined') rpcRequest.type = exports.rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined') rpcRequest.value = (0, toHex_js_1.numberToHex)(request.value);
    return rpcRequest;
}
exports.defineTransactionRequest = (0, formatter_js_1.defineFormatter)('transactionRequest', formatTransactionRequest);
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.address,
            r: authorization.r ? (0, toHex_js_1.numberToHex)(BigInt(authorization.r)) : authorization.r,
            s: authorization.s ? (0, toHex_js_1.numberToHex)(BigInt(authorization.s)) : authorization.s,
            chainId: (0, toHex_js_1.numberToHex)(authorization.chainId),
            nonce: (0, toHex_js_1.numberToHex)(authorization.nonce),
            ...typeof authorization.yParity !== 'undefined' ? {
                yParity: (0, toHex_js_1.numberToHex)(authorization.yParity)
            } : {},
            ...typeof authorization.v !== 'undefined' && typeof authorization.yParity === 'undefined' ? {
                v: (0, toHex_js_1.numberToHex)(authorization.v)
            } : {}
        }));
} //# sourceMappingURL=transactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stateOverride.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeStateMapping = serializeStateMapping;
exports.serializeAccountStateOverride = serializeAccountStateOverride;
exports.serializeStateOverride = serializeStateOverride;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const data_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0) return undefined;
    return stateMapping.reduce((acc, { slot, value })=>{
        if (slot.length !== 66) throw new data_js_1.InvalidBytesLengthError({
            size: slot.length,
            targetSize: 66,
            type: 'hex'
        });
        if (value.length !== 66) throw new data_js_1.InvalidBytesLengthError({
            size: value.length,
            targetSize: 66,
            type: 'hex'
        });
        acc[slot] = value;
        return acc;
    }, {});
}
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined) rpcAccountStateOverride.code = code;
    if (balance !== undefined) rpcAccountStateOverride.balance = (0, toHex_js_1.numberToHex)(balance);
    if (nonce !== undefined) rpcAccountStateOverride.nonce = (0, toHex_js_1.numberToHex)(nonce);
    if (state !== undefined) rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state) throw new stateOverride_js_1.StateAssignmentConflictError();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
function serializeStateOverride(parameters) {
    if (!parameters) return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters){
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) throw new address_js_1.InvalidAddressError({
            address
        });
        if (rpcStateOverride[address]) throw new stateOverride_js_1.AccountStateConflictError({
            address: address
        });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
} //# sourceMappingURL=stateOverride.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertRequest = assertRequest;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    if (account && !(0, isAddress_js_1.isAddress)(account.address)) throw new address_js_1.InvalidAddressError({
        address: account.address
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof gasPrice !== 'undefined' && (typeof maxFeePerGas !== 'undefined' || typeof maxPriorityFeePerGas !== 'undefined')) throw new transaction_js_1.FeeConflictError();
    if (maxFeePerGas && maxFeePerGas > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
} //# sourceMappingURL=assertRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransaction = exports.transactionType = void 0;
exports.formatTransaction = formatTransaction;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
exports.transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
    '0x3': 'eip4844',
    '0x4': 'eip7702'
};
function formatTransaction(transaction) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
        chainId: transaction.chainId ? (0, fromHex_js_1.hexToNumber)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : undefined,
        maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : undefined,
        nonce: transaction.nonce ? (0, fromHex_js_1.hexToNumber)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
        type: transaction.type ? exports.transactionType[transaction.type] : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined
    };
    if (transaction.authorizationList) transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
    transaction_.yParity = (()=>{
        if (transaction.yParity) return Number(transaction.yParity);
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n) return 0;
            if (transaction_.v === 1n || transaction_.v === 28n) return 1;
            if (transaction_.v >= 35n) return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip1559') {
        delete transaction_.maxFeePerBlobGas;
    }
    return transaction_;
}
exports.defineTransaction = (0, formatter_js_1.defineFormatter)('transaction', formatTransaction);
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.address,
            chainId: Number(authorization.chainId),
            nonce: Number(authorization.nonce),
            r: authorization.r,
            s: authorization.s,
            yParity: Number(authorization.yParity)
        }));
} //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineBlock = void 0;
exports.formatBlock = formatBlock;
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
function formatBlock(block) {
    const transactions = (block.transactions ?? []).map((transaction)=>{
        if (typeof transaction === 'string') return transaction;
        return (0, transaction_js_1.formatTransaction)(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
    };
}
exports.defineBlock = (0, formatter_js_1.defineFormatter)('block', formatBlock); //# sourceMappingURL=block.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blobsToCommitments = blobsToCommitments;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const commitments = [];
    for (const blob of blobs)commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return to === 'bytes' ? commitments : commitments.map((x)=>(0, toHex_js_1.bytesToHex)(x));
} //# sourceMappingURL=blobsToCommitments.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blobsToProofs = blobsToProofs;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const commitments = typeof parameters.commitments[0] === 'string' ? parameters.commitments.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.commitments;
    const proofs = [];
    for(let i = 0; i < blobs.length; i++){
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return to === 'bytes' ? proofs : proofs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
} //# sourceMappingURL=blobsToProofs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha256 = sha256;
const sha256_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/sha256.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha256_1.sha256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=sha256.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitmentToVersionedHash = commitmentToVersionedHash;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const sha256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = (0, sha256_js_1.sha256)(commitment, 'bytes');
    versionedHash.set([
        version
    ], 0);
    return to === 'bytes' ? versionedHash : (0, toHex_js_1.bytesToHex)(versionedHash);
} //# sourceMappingURL=commitmentToVersionedHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitmentsToVersionedHashes = commitmentsToVersionedHashes;
const commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments){
        hashes.push((0, commitmentToVersionedHash_js_1.commitmentToVersionedHash)({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=commitmentsToVersionedHashes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBlobs = toBlobs;
const blob_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/blob.js [app-client] (ecmascript)");
const blob_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = typeof parameters.data === 'string' ? (0, toBytes_js_1.hexToBytes)(parameters.data) : parameters.data;
    const size_ = (0, size_js_1.size)(data);
    if (!size_) throw new blob_js_2.EmptyBlobError();
    if (size_ > blob_js_1.maxBytesPerTransaction) throw new blob_js_2.BlobSizeTooLargeError({
        maxSize: blob_js_1.maxBytesPerTransaction,
        size: size_
    });
    const blobs = [];
    let active = true;
    let position = 0;
    while(active){
        const blob = (0, cursor_js_1.createCursor)(new Uint8Array(blob_js_1.bytesPerBlob));
        let size = 0;
        while(size < blob_js_1.fieldElementsPerBlob){
            const bytes = data.slice(position, position + (blob_js_1.bytesPerFieldElement - 1));
            blob.pushByte(0x00);
            blob.pushBytes(bytes);
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return to === 'bytes' ? blobs.map((x)=>x.bytes) : blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x.bytes));
} //# sourceMappingURL=toBlobs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toBlobSidecars = toBlobSidecars;
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
const toBlobs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)");
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? (0, toBlobs_js_1.toBlobs)({
        data: data,
        to
    });
    const commitments = parameters.commitments ?? (0, blobsToCommitments_js_1.blobsToCommitments)({
        blobs,
        kzg: kzg,
        to
    });
    const proofs = parameters.proofs ?? (0, blobsToProofs_js_1.blobsToProofs)({
        blobs,
        commitments,
        kzg: kzg,
        to
    });
    const sidecars = [];
    for(let i = 0; i < blobs.length; i++)sidecars.push({
        blob: blobs[i],
        commitment: commitments[i],
        proof: proofs[i]
    });
    return sidecars;
} //# sourceMappingURL=toBlobSidecars.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionType = getTransactionType;
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
function getTransactionType(transaction) {
    if (transaction.type) return transaction.type;
    if (typeof transaction.authorizationList !== 'undefined') return 'eip7702';
    if (typeof transaction.blobs !== 'undefined' || typeof transaction.blobVersionedHashes !== 'undefined' || typeof transaction.maxFeePerBlobGas !== 'undefined' || typeof transaction.sidecars !== 'undefined') return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' || typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined') return 'eip2930';
        return 'legacy';
    }
    throw new transaction_js_1.InvalidSerializableTransactionError({
        transaction
    });
} //# sourceMappingURL=getTransactionType.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddressEqual = isAddressEqual;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function isAddressEqual(a, b) {
    if (!(0, isAddress_js_1.isAddress)(a, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address: a
    });
    if (!(0, isAddress_js_1.isAddress)(b, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address: b
    });
    return a.toLowerCase() === b.toLowerCase();
} //# sourceMappingURL=isAddressEqual.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeEventLog = decodeEventLog;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog(parameters) {
    const { abi, data, strict: strict_, topics } = parameters;
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature) throw new abi_js_1.AbiEventSignatureEmptyTopicsError({
        docsPath
    });
    const abiItem = abi.find((x)=>x.type === 'event' && signature === (0, toEventSelector_js_1.toEventSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event') throw new abi_js_1.AbiEventSignatureNotFoundError(signature, {
        docsPath
    });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x)=>!('name' in x && x.name));
    const args = isUnnamed ? [] : {};
    const indexedInputs = inputs.map((x, i)=>[
            x,
            i
        ]).filter(([x])=>'indexed' in x && x.indexed);
    for(let i = 0; i < indexedInputs.length; i++){
        const [param, argIndex] = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic) throw new abi_js_1.DecodeLogTopicsMismatch({
            abiItem,
            param: param
        });
        args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
            param,
            value: topic
        });
    }
    const nonIndexedInputs = inputs.filter((x)=>!('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0, decodeAbiParameters_js_1.decodeAbiParameters)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed) for(let i = 0; i < inputs.length; i++)args[i] = args[i] ?? decodedData.shift();
                    else for(let i = 0; i < nonIndexedInputs.length; i++)args[nonIndexedInputs[i].name] = decodedData[i];
                }
            } catch (err) {
                if (strict) {
                    if (err instanceof abi_js_1.AbiDecodingDataSizeTooSmallError || err instanceof cursor_js_1.PositionOutOfBoundsError) throw new abi_js_1.DecodeLogDataMismatch({
                        abiItem,
                        data: data,
                        params: nonIndexedInputs,
                        size: (0, size_js_1.size)(data)
                    });
                    throw err;
                }
            }
        } else if (strict) {
            throw new abi_js_1.DecodeLogDataMismatch({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes' || param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) return value;
    const decodedArg = (0, decodeAbiParameters_js_1.decodeAbiParameters)([
        param
    ], value) || [];
    return decodedArg[0];
} //# sourceMappingURL=decodeEventLog.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseEventLogs = parseEventLogs;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toEventSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
function parseEventLogs(parameters) {
    const { abi, args, logs, strict = true } = parameters;
    const eventName = (()=>{
        if (!parameters.eventName) return undefined;
        if (Array.isArray(parameters.eventName)) return parameters.eventName;
        return [
            parameters.eventName
        ];
    })();
    return logs.map((log)=>{
        try {
            const abiItem = abi.find((abiItem)=>abiItem.type === 'event' && log.topics[0] === (0, toEventSelector_js_1.toEventSelector)(abiItem));
            if (!abiItem) return null;
            const event = (0, decodeEventLog_js_1.decodeEventLog)({
                ...log,
                abi: [
                    abiItem
                ],
                strict
            });
            if (eventName && !eventName.includes(event.eventName)) return null;
            if (!includesArgs({
                args: event.args,
                inputs: abiItem.inputs,
                matchArgs: args
            })) return null;
            return {
                ...event,
                ...log
            };
        } catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof abi_js_1.AbiEventSignatureNotFoundError) return null;
            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                if (strict) return null;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
            }
            return {
                ...log,
                args: isUnnamed ? [] : {},
                eventName
            };
        }
    }).filter(Boolean);
}
function includesArgs(parameters) {
    const { args, inputs, matchArgs } = parameters;
    if (!matchArgs) return true;
    if (!args) return false;
    function isEqual(input, value, arg) {
        try {
            if (input.type === 'address') return (0, isAddressEqual_js_1.isAddressEqual)(value, arg);
            if (input.type === 'string' || input.type === 'bytes') return (0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value)) === arg;
            return value === arg;
        } catch  {
            return false;
        }
    }
    if (Array.isArray(args) && Array.isArray(matchArgs)) {
        return matchArgs.every((value, index)=>{
            if (value === null || value === undefined) return true;
            const input = inputs[index];
            if (!input) return false;
            const value_ = Array.isArray(value) ? value : [
                value
            ];
            return value_.some((value)=>isEqual(input, value, args[index]));
        });
    }
    if (typeof args === 'object' && !Array.isArray(args) && typeof matchArgs === 'object' && !Array.isArray(matchArgs)) return Object.entries(matchArgs).every(([key, value])=>{
        if (value === null || value === undefined) return true;
        const input = inputs.find((input)=>input.name === key);
        if (!input) return false;
        const value_ = Array.isArray(value) ? value : [
            value
        ];
        return value_.some((value)=>isEqual(input, value, args[key]));
    });
    return false;
} //# sourceMappingURL=parseEventLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatLog = formatLog;
function formatLog(log, { args, eventName } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
        ...eventName ? {
            args,
            eventName
        } : {}
    };
} //# sourceMappingURL=log.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionResult = decodeFunctionResult;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    const values = (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.outputs, data);
    if (values && values.length > 1) return values;
    if (values && values.length === 1) return values[0];
    return undefined;
} //# sourceMappingURL=decodeFunctionResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeDeployData = encodeDeployData;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0) return bytecode;
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(description.inputs, args);
    return (0, concat_js_1.concatHex)([
        bytecode,
        data
    ]);
} //# sourceMappingURL=encodeDeployData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainContractAddress = getChainContractAddress;
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
function getChainContractAddress({ blockNumber, chain, contract: name }) {
    const contract = chain?.contracts?.[name];
    if (!contract) throw new chain_js_1.ChainDoesNotSupportContract({
        chain,
        contract: {
            name
        }
    });
    if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber) throw new chain_js_1.ChainDoesNotSupportContract({
        blockNumber,
        chain,
        contract: {
            name,
            blockCreated: contract.blockCreated
        }
    });
    return contract.address;
} //# sourceMappingURL=getChainContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCallError = getCallError;
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new contract_js_1.CallExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getCallError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withResolvers = withResolvers;
function withResolvers() {
    let resolve = ()=>undefined;
    let reject = ()=>undefined;
    const promise = new Promise((resolve_, reject_)=>{
        resolve = resolve_;
        reject = reject_;
    });
    return {
        promise,
        resolve,
        reject
    };
} //# sourceMappingURL=withResolvers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBatchScheduler = createBatchScheduler;
const withResolvers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withResolvers.js [app-client] (ecmascript)");
const schedulerCache = new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { resolve } = scheduler[i];
                resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { reject } = scheduler[i];
                reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const { promise, resolve, reject } = (0, withResolvers_js_1.withResolvers)();
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    resolve,
                    reject
                });
                return promise;
            }
            setScheduler({
                args,
                resolve,
                reject
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
} //# sourceMappingURL=createBatchScheduler.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionData = decodeFunctionData;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    const description = abi.find((x)=>x.type === 'function' && signature === (0, toFunctionSelector_js_1.toFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!description) throw new abi_js_1.AbiFunctionSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeFunctionData'
    });
    return {
        functionName: description.name,
        args: 'inputs' in description && description.inputs && description.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, (0, slice_js_1.slice)(data, 4)) : undefined
    };
} //# sourceMappingURL=decodeFunctionData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeErrorResult = encodeErrorResult;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeErrorResult';
function encodeErrorResult(parameters) {
    const { abi, errorName, args } = parameters;
    let abiItem = abi[0];
    if (errorName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: errorName
        });
        if (!item) throw new abi_js_1.AbiErrorNotFoundError(errorName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'error') throw new abi_js_1.AbiErrorNotFoundError(undefined, {
        docsPath
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, toFunctionSelector_js_1.toFunctionSelector)(definition);
    let data = '0x';
    if (args && args.length > 0) {
        if (!abiItem.inputs) throw new abi_js_1.AbiErrorInputsNotFoundError(abiItem.name, {
            docsPath
        });
        data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args);
    }
    return (0, concat_js_1.concatHex)([
        signature,
        data
    ]);
} //# sourceMappingURL=encodeErrorResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionResult = encodeFunctionResult;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/encodeFunctionResult';
function encodeFunctionResult(parameters) {
    const { abi, functionName, result } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            name: functionName
        });
        if (!item) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    const values = (()=>{
        if (abiItem.outputs.length === 0) return [];
        if (abiItem.outputs.length === 1) return [
            result
        ];
        if (Array.isArray(result)) return result;
        throw new abi_js_1.InvalidArrayError(result);
    })();
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.outputs, values);
} //# sourceMappingURL=encodeFunctionResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localBatchGatewayUrl = void 0;
exports.localBatchGatewayRequest = localBatchGatewayRequest;
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
const solidity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const decodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
const encodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)");
const encodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)");
exports.localBatchGatewayUrl = 'x-batch-gateway:true';
async function localBatchGatewayRequest(parameters) {
    const { data, ccipRequest } = parameters;
    const { args: [queries] } = (0, decodeFunctionData_js_1.decodeFunctionData)({
        abi: abis_js_1.batchGatewayAbi,
        data
    });
    const failures = [];
    const responses = [];
    await Promise.all(queries.map(async (query, i)=>{
        try {
            responses[i] = await ccipRequest(query);
            failures[i] = false;
        } catch (err) {
            failures[i] = true;
            responses[i] = encodeError(err);
        }
    }));
    return (0, encodeFunctionResult_js_1.encodeFunctionResult)({
        abi: abis_js_1.batchGatewayAbi,
        functionName: 'query',
        result: [
            failures,
            responses
        ]
    });
}
function encodeError(error) {
    if (error.name === 'HttpRequestError' && error.status) return (0, encodeErrorResult_js_1.encodeErrorResult)({
        abi: abis_js_1.batchGatewayAbi,
        errorName: 'HttpError',
        args: [
            error.status,
            error.shortMessage
        ]
    });
    return (0, encodeErrorResult_js_1.encodeErrorResult)({
        abi: [
            solidity_js_1.solidityError
        ],
        errorName: 'Error',
        args: [
            'shortMessage' in error ? error.shortMessage : error.message
        ]
    });
} //# sourceMappingURL=localBatchGatewayRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offchainLookupAbiItem = exports.offchainLookupSignature = void 0;
exports.offchainLookup = offchainLookup;
exports.ccipRequest = ccipRequest;
const call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
const ccip_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/ccip.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const localBatchGatewayRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
exports.offchainLookupSignature = '0x556f1830';
exports.offchainLookupAbiItem = {
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
    const { args } = (0, decodeErrorResult_js_1.decodeErrorResult)({
        data,
        abi: [
            exports.offchainLookupAbiItem
        ]
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function' ? ccipRead.request : ccipRequest;
    try {
        if (!(0, isAddressEqual_js_1.isAddressEqual)(to, sender)) throw new ccip_js_1.OffchainLookupSenderMismatchError({
            sender,
            to
        });
        const result = urls.includes(localBatchGatewayRequest_js_1.localBatchGatewayUrl) ? await (0, localBatchGatewayRequest_js_1.localBatchGatewayRequest)({
            data: callData,
            ccipRequest: ccipRequest_
        }) : await ccipRequest_({
            data: callData,
            sender,
            urls
        });
        const { data: data_ } = await (0, call_js_1.call)(client, {
            blockNumber,
            blockTag,
            data: (0, concat_js_1.concat)([
                callbackSelector,
                (0, encodeAbiParameters_js_1.encodeAbiParameters)([
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
        throw new ccip_js_1.OffchainLookupError({
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
                error = new request_js_1.HttpRequestError({
                    body,
                    details: result?.error ? (0, stringify_js_1.stringify)(result.error) : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url
                });
                continue;
            }
            if (!(0, isHex_js_1.isHex)(result)) {
                error = new ccip_js_1.OffchainLookupResponseMalformedError({
                    result,
                    url
                });
                continue;
            }
            return result;
        } catch (err) {
            error = new request_js_1.HttpRequestError({
                body,
                details: err.message,
                url
            });
        }
    }
    throw error;
} //# sourceMappingURL=ccip.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cleanupCache = exports.listenersCache = void 0;
exports.observe = observe;
exports.listenersCache = new Map();
exports.cleanupCache = new Map();
let callbackCount = 0;
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = ()=>exports.listenersCache.get(observerId) || [];
    const unsubscribe = ()=>{
        const listeners = getListeners();
        exports.listenersCache.set(observerId, listeners.filter((cb)=>cb.id !== callbackId));
    };
    const unwatch = ()=>{
        const listeners = getListeners();
        if (!listeners.some((cb)=>cb.id === callbackId)) return;
        const cleanup = exports.cleanupCache.get(observerId);
        if (listeners.length === 1 && cleanup) {
            const p = cleanup();
            if (p instanceof Promise) p.catch(()=>{});
        }
        unsubscribe();
    };
    const listeners = getListeners();
    exports.listenersCache.set(observerId, [
        ...listeners,
        {
            id: callbackId,
            fns: callbacks
        }
    ]);
    if (listeners && listeners.length > 0) return unwatch;
    const emit = {};
    for(const key in callbacks){
        emit[key] = (...args)=>{
            const listeners = getListeners();
            if (listeners.length === 0) return;
            for (const listener of listeners)listener.fns[key]?.(...args);
        };
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function') exports.cleanupCache.set(observerId, cleanup);
    return unwatch;
} //# sourceMappingURL=observe.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wait = wait;
async function wait(time) {
    return new Promise((res)=>setTimeout(res, time));
} //# sourceMappingURL=wait.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.poll = poll;
const wait_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = ()=>active = false;
    const watch = async ()=>{
        let data = undefined;
        if (emitOnBegin) data = await fn({
            unpoll: unwatch
        });
        const initialWait = await initialWaitTime?.(data) ?? interval;
        await (0, wait_js_1.wait)(initialWait);
        const poll = async ()=>{
            if (!active) return;
            await fn({
                unpoll: unwatch
            });
            await (0, wait_js_1.wait)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
} //# sourceMappingURL=poll.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withCache.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.responseCache = exports.promiseCache = void 0;
exports.getCache = getCache;
exports.withCache = withCache;
exports.promiseCache = new Map();
exports.responseCache = new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache)=>({
            clear: ()=>cache.delete(cacheKey),
            get: ()=>cache.get(cacheKey),
            set: (data)=>cache.set(cacheKey, data)
        });
    const promise = buildCache(cacheKey, exports.promiseCache);
    const response = buildCache(cacheKey, exports.responseCache);
    return {
        clear: ()=>{
            promise.clear();
            response.clear();
        },
        promise,
        response
    };
}
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = getCache(cacheKey);
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = new Date().getTime() - response.created.getTime();
        if (age < cacheTime) return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        cache.response.set({
            created: new Date(),
            data
        });
        return data;
    } finally{
        cache.promise.clear();
    }
} //# sourceMappingURL=withCache.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertCurrentChain = assertCurrentChain;
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new chain_js_1.ChainNotFoundError();
    if (currentChainId !== chain.id) throw new chain_js_1.ChainMismatchError({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionError = getTransactionError;
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const getNodeError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new transaction_js_1.TransactionExecutionError(cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getTransactionError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionReceipt = exports.receiptStatuses = void 0;
exports.formatTransactionReceipt = formatTransactionReceipt;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
exports.receiptStatuses = {
    '0x0': 'reverted',
    '0x1': 'success'
};
function formatTransactionReceipt(transactionReceipt) {
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
        contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
        gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
        logs: transactionReceipt.logs ? transactionReceipt.logs.map((log)=>(0, log_js_1.formatLog)(log)) : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex ? (0, fromHex_js_1.hexToNumber)(transactionReceipt.transactionIndex) : null,
        status: transactionReceipt.status ? exports.receiptStatuses[transactionReceipt.status] : null,
        type: transactionReceipt.type ? transaction_js_1.transactionType[transactionReceipt.type] || transactionReceipt.type : null
    };
    if (transactionReceipt.blobGasPrice) receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed) receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    return receipt;
}
exports.defineTransactionReceipt = (0, formatter_js_1.defineFormatter)('transactionReceipt', formatTransactionReceipt); //# sourceMappingURL=transactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uid = uid;
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withDedupe.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.promiseCache = void 0;
exports.withDedupe = withDedupe;
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
exports.promiseCache = new lru_js_1.LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id) return fn();
    if (exports.promiseCache.get(id)) return exports.promiseCache.get(id);
    const promise = fn().finally(()=>exports.promiseCache.delete(id));
    exports.promiseCache.set(id, promise);
    return promise;
} //# sourceMappingURL=withDedupe.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withRetry = withRetry;
const wait_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = ()=>true } = {}) {
    return new Promise((resolve, reject)=>{
        const attemptRetry = async ({ count = 0 } = {})=>{
            const retry = async ({ error })=>{
                const delay = typeof delay_ === 'function' ? delay_({
                    count,
                    error
                }) : delay_;
                if (delay) await (0, wait_js_1.wait)(delay);
                attemptRetry({
                    count: count + 1
                });
            };
            try {
                const data = await fn();
                resolve(data);
            } catch (err) {
                if (count < retryCount && await shouldRetry({
                    count,
                    error: err
                })) return retry({
                    error: err
                });
                reject(err);
            }
        };
        attemptRetry();
    });
} //# sourceMappingURL=withRetry.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildRequest = buildRequest;
exports.shouldRetry = shouldRetry;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const withDedupe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withDedupe.js [app-client] (ecmascript)");
const withRetry_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {})=>{
        const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid } = {
            ...options,
            ...overrideOptions
        };
        const { method } = args;
        if (methods?.exclude?.includes(method)) throw new rpc_js_1.MethodNotSupportedRpcError(new Error('method not supported'), {
            method
        });
        if (methods?.include && !methods.include.includes(method)) throw new rpc_js_1.MethodNotSupportedRpcError(new Error('method not supported'), {
            method
        });
        const requestId = dedupe ? (0, toHex_js_1.stringToHex)(`${uid}.${(0, stringify_js_1.stringify)(args)}`) : undefined;
        return (0, withDedupe_js_1.withDedupe)(()=>(0, withRetry_js_1.withRetry)(async ()=>{
                try {
                    return await request(args);
                } catch (err_) {
                    const err = err_;
                    switch(err.code){
                        case rpc_js_1.ParseRpcError.code:
                            throw new rpc_js_1.ParseRpcError(err);
                        case rpc_js_1.InvalidRequestRpcError.code:
                            throw new rpc_js_1.InvalidRequestRpcError(err);
                        case rpc_js_1.MethodNotFoundRpcError.code:
                            throw new rpc_js_1.MethodNotFoundRpcError(err, {
                                method: args.method
                            });
                        case rpc_js_1.InvalidParamsRpcError.code:
                            throw new rpc_js_1.InvalidParamsRpcError(err);
                        case rpc_js_1.InternalRpcError.code:
                            throw new rpc_js_1.InternalRpcError(err);
                        case rpc_js_1.InvalidInputRpcError.code:
                            throw new rpc_js_1.InvalidInputRpcError(err);
                        case rpc_js_1.ResourceNotFoundRpcError.code:
                            throw new rpc_js_1.ResourceNotFoundRpcError(err);
                        case rpc_js_1.ResourceUnavailableRpcError.code:
                            throw new rpc_js_1.ResourceUnavailableRpcError(err);
                        case rpc_js_1.TransactionRejectedRpcError.code:
                            throw new rpc_js_1.TransactionRejectedRpcError(err);
                        case rpc_js_1.MethodNotSupportedRpcError.code:
                            throw new rpc_js_1.MethodNotSupportedRpcError(err, {
                                method: args.method
                            });
                        case rpc_js_1.LimitExceededRpcError.code:
                            throw new rpc_js_1.LimitExceededRpcError(err);
                        case rpc_js_1.JsonRpcVersionUnsupportedError.code:
                            throw new rpc_js_1.JsonRpcVersionUnsupportedError(err);
                        case rpc_js_1.UserRejectedRequestError.code:
                            throw new rpc_js_1.UserRejectedRequestError(err);
                        case rpc_js_1.UnauthorizedProviderError.code:
                            throw new rpc_js_1.UnauthorizedProviderError(err);
                        case rpc_js_1.UnsupportedProviderMethodError.code:
                            throw new rpc_js_1.UnsupportedProviderMethodError(err);
                        case rpc_js_1.ProviderDisconnectedError.code:
                            throw new rpc_js_1.ProviderDisconnectedError(err);
                        case rpc_js_1.ChainDisconnectedError.code:
                            throw new rpc_js_1.ChainDisconnectedError(err);
                        case rpc_js_1.SwitchChainError.code:
                            throw new rpc_js_1.SwitchChainError(err);
                        case rpc_js_1.UnsupportedNonOptionalCapabilityError.code:
                            throw new rpc_js_1.UnsupportedNonOptionalCapabilityError(err);
                        case rpc_js_1.UnsupportedChainIdError.code:
                            throw new rpc_js_1.UnsupportedChainIdError(err);
                        case rpc_js_1.DuplicateIdError.code:
                            throw new rpc_js_1.DuplicateIdError(err);
                        case rpc_js_1.UnknownBundleIdError.code:
                            throw new rpc_js_1.UnknownBundleIdError(err);
                        case rpc_js_1.BundleTooLargeError.code:
                            throw new rpc_js_1.BundleTooLargeError(err);
                        case rpc_js_1.AtomicReadyWalletRejectedUpgradeError.code:
                            throw new rpc_js_1.AtomicReadyWalletRejectedUpgradeError(err);
                        case rpc_js_1.AtomicityNotSupportedError.code:
                            throw new rpc_js_1.AtomicityNotSupportedError(err);
                        case 5000:
                            throw new rpc_js_1.UserRejectedRequestError(err);
                        default:
                            if (err_ instanceof base_js_1.BaseError) throw err_;
                            throw new rpc_js_1.UnknownRpcError(err);
                    }
                }
            }, {
                delay: ({ count, error })=>{
                    if (error && error instanceof request_js_1.HttpRequestError) {
                        const retryAfter = error?.headers?.get('Retry-After');
                        if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter) * 1000;
                    }
                    return ~~(1 << count) * retryDelay;
                },
                retryCount,
                shouldRetry: ({ error })=>shouldRetry(error)
            }), {
            enabled: dedupe,
            id: requestId
        });
    };
}
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1) return true;
        if (error.code === rpc_js_1.LimitExceededRpcError.code) return true;
        if (error.code === rpc_js_1.InternalRpcError.code) return true;
        return false;
    }
    if (error instanceof request_js_1.HttpRequestError && error.status) {
        if (error.status === 403) return true;
        if (error.status === 408) return true;
        if (error.status === 413) return true;
        if (error.status === 429) return true;
        if (error.status === 500) return true;
        if (error.status === 502) return true;
        if (error.status === 503) return true;
        if (error.status === 504) return true;
        return false;
    }
    return true;
} //# sourceMappingURL=buildRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withTimeout = withTimeout;
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal }) {
    return new Promise((resolve, reject)=>{
        ;
        (async ()=>{
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(()=>{
                        if (signal) {
                            controller.abort();
                        } else {
                            reject(errorInstance);
                        }
                    }, timeout);
                }
                resolve(await fn({
                    signal: controller?.signal || null
                }));
            } catch (err) {
                if (err?.name === 'AbortError') reject(errorInstance);
                reject(err);
            } finally{
                clearTimeout(timeoutId);
            }
        })();
    });
} //# sourceMappingURL=withTimeout.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.idCache = void 0;
function createIdStore() {
    return {
        current: 0,
        take () {
            return this.current++;
        },
        reset () {
            this.current = 0;
        }
    };
}
exports.idCache = createIdStore(); //# sourceMappingURL=id.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHttpRpcClient = getHttpRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const withTimeout_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const id_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)");
function getHttpRpcClient(url, options = {}) {
    return {
        async request (params) {
            const { body, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000 } = params;
            const fetchOptions = {
                ...options.fetchOptions ?? {},
                ...params.fetchOptions ?? {}
            };
            const { headers, method, signal: signal_ } = fetchOptions;
            try {
                const response = await (0, withTimeout_js_1.withTimeout)(async ({ signal })=>{
                    const init = {
                        ...fetchOptions,
                        body: Array.isArray(body) ? (0, stringify_js_1.stringify)(body.map((body)=>({
                                jsonrpc: '2.0',
                                id: body.id ?? id_js_1.idCache.take(),
                                ...body
                            }))) : (0, stringify_js_1.stringify)({
                            jsonrpc: '2.0',
                            id: body.id ?? id_js_1.idCache.take(),
                            ...body
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null)
                    };
                    const request = new Request(url, init);
                    const args = await onRequest?.(request, init) ?? {
                        ...init,
                        url
                    };
                    const response = await fetch(args.url ?? url, args);
                    return response;
                }, {
                    errorInstance: new request_js_1.TimeoutError({
                        body,
                        url
                    }),
                    timeout,
                    signal: true
                });
                if (onResponse) await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json')) data = await response.json();
                else {
                    data = await response.text();
                    try {
                        data = JSON.parse(data || '{}');
                    } catch (err) {
                        if (response.ok) throw err;
                        data = {
                            error: data
                        };
                    }
                }
                if (!response.ok) {
                    throw new request_js_1.HttpRequestError({
                        body,
                        details: (0, stringify_js_1.stringify)(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url
                    });
                }
                return data;
            } catch (err) {
                if (err instanceof request_js_1.HttpRequestError) throw err;
                if (err instanceof request_js_1.TimeoutError) throw err;
                throw new request_js_1.HttpRequestError({
                    body,
                    cause: err,
                    url
                });
            }
        }
    };
} //# sourceMappingURL=http.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/errors.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNullUniversalResolverError = isNullUniversalResolverError;
const solidity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
function isNullUniversalResolverError(err, callType) {
    if (!(err instanceof base_js_1.BaseError)) return false;
    const cause = err.walk((e)=>e instanceof contract_js_1.ContractFunctionRevertedError);
    if (!(cause instanceof contract_js_1.ContractFunctionRevertedError)) return false;
    if (cause.data?.errorName === 'ResolverNotFound') return true;
    if (cause.data?.errorName === 'ResolverWildcardNotSupported') return true;
    if (cause.data?.errorName === 'ResolverNotContract') return true;
    if (cause.data?.errorName === 'ResolverError') return true;
    if (cause.data?.errorName === 'HttpError') return true;
    if (cause.reason?.includes('Wildcard on non-extended resolvers is not supported')) return true;
    if (callType === 'reverse' && cause.reason === solidity_js_1.panicReasons[50]) return true;
    return false;
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodedLabelToLabelhash = encodedLabelToLabelhash;
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
function encodedLabelToLabelhash(label) {
    if (label.length !== 66) return null;
    if (label.indexOf('[') !== 0) return null;
    if (label.indexOf(']') !== 65) return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0, isHex_js_1.isHex)(hash)) return null;
    return hash;
} //# sourceMappingURL=encodedLabelToLabelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.namehash = namehash;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)");
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name) return (0, toHex_js_1.bytesToHex)(result);
    const labels = name.split('.');
    for(let i = labels.length - 1; i >= 0; i -= 1){
        const hashFromEncodedLabel = (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(labels[i]);
        const hashed = hashFromEncodedLabel ? (0, toBytes_js_1.toBytes)(hashFromEncodedLabel) : (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(labels[i]), 'bytes');
        result = (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
            result,
            hashed
        ]), 'bytes');
    }
    return (0, toHex_js_1.bytesToHex)(result);
} //# sourceMappingURL=namehash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeLabelhash = encodeLabelhash;
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
} //# sourceMappingURL=encodeLabelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.labelhash = labelhash;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-client] (ecmascript)");
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label) return (0, toHex_js_1.bytesToHex)(result);
    return (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(label) || (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(label));
} //# sourceMappingURL=labelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.packetToBytes = packetToBytes;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const encodeLabelhash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-client] (ecmascript)");
const labelhash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)");
function packetToBytes(packet) {
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0) return new Uint8Array(1);
    const bytes = new Uint8Array((0, toBytes_js_1.stringToBytes)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for(let i = 0; i < list.length; i++){
        let encoded = (0, toBytes_js_1.stringToBytes)(list[i]);
        if (encoded.byteLength > 255) encoded = (0, toBytes_js_1.stringToBytes)((0, encodeLabelhash_js_1.encodeLabelhash)((0, labelhash_js_1.labelhash)(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
    return bytes;
} //# sourceMappingURL=packetToBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isImageUri = isImageUri;
exports.getGateway = getGateway;
exports.resolveAvatarUri = resolveAvatarUri;
exports.getJsonImage = getJsonImage;
exports.getMetadataAvatarUri = getMetadataAvatarUri;
exports.parseAvatarUri = parseAvatarUri;
exports.parseNftUri = parseNftUri;
exports.getNftTokenUri = getNftTokenUri;
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
const ens_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)");
const networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, {
            method: 'HEAD'
        });
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    } catch (error) {
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        if (!globalThis.hasOwnProperty('Image')) return false;
        return new Promise((resolve)=>{
            const img = new Image();
            img.onload = ()=>{
                resolve(true);
            };
            img.onerror = ()=>{
                resolve(false);
            };
            img.src = uri;
        });
    }
}
function getGateway(custom, defaultGateway) {
    if (!custom) return defaultGateway;
    if (custom.endsWith('/')) return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded) return {
        uri,
        isOnChain: true,
        isEncoded
    };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '' } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return {
            uri: replacedUri,
            isOnChain: false,
            isEncoded: false
        };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false
        };
    }
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
function getJsonImage(data) {
    if (typeof data !== 'object' || !('image' in data) && !('image_url' in data) && !('image_data' in data)) {
        throw new ens_js_1.EnsAvatarInvalidMetadataError({
            data
        });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
    try {
        const res = await fetch(uri).then((res)=>res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res)
        });
        return image;
    } catch  {
        throw new ens_js_1.EnsAvatarUriResolutionError({
            uri
        });
    }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
        uri,
        gatewayUrls
    });
    if (isOnChain) return resolvedURI;
    const isImage = await isImageUri(resolvedURI);
    if (isImage) return resolvedURI;
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
function parseNftUri(uri_) {
    let uri = uri_;
    if (uri.startsWith('did:nft:')) {
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155') throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Only EIP-155 supported'
    });
    if (!chainID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Chain ID not found'
    });
    if (!contractAddress) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Contract address not found'
    });
    if (!tokenID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Token ID not found'
    });
    if (!erc_namespace) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'ERC namespace not found'
    });
    return {
        chainID: Number.parseInt(chainID),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: 'tokenId',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'tokenURI',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: '_id',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'uri',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    throw new ens_js_1.EnsAvatarUnsupportedNamespaceError({
        namespace: nft.namespace
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAvatarRecord = parseAvatarRecord;
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-client] (ecmascript)");
async function parseAvatarRecord(client, { gatewayUrls, record }) {
    if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
        gatewayUrls,
        record
    });
    return (0, utils_js_1.parseAvatarUri)({
        uri: record,
        gatewayUrls
    });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
    const nft = (0, utils_js_1.parseNftUri)(record);
    const nftUri = await (0, utils_js_1.getNftTokenUri)(client, {
        nft
    });
    const { uri: resolvedNftUri, isOnChain, isEncoded } = (0, utils_js_1.resolveAvatarUri)({
        uri: nftUri,
        gatewayUrls
    });
    if (isOnChain && (resolvedNftUri.includes('data:application/json;base64,') || resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded ? atob(resolvedNftUri.replace('data:application/json;base64,', '')) : resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0, utils_js_1.parseAvatarUri)({
            uri: (0, utils_js_1.getJsonImage)(decoded),
            gatewayUrls
        });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155') uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0, utils_js_1.getMetadataAvatarUri)({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
    });
} //# sourceMappingURL=parseAvatarRecord.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatFeeHistory = formatFeeHistory;
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value)=>BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward)=>reward.map((value)=>BigInt(value)))
    };
} //# sourceMappingURL=feeHistory.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineChain = defineChain;
function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain
    };
} //# sourceMappingURL=defineChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/chain/extractChain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractChain = extractChain;
function extractChain({ chains, id }) {
    return chains.find((chain)=>chain.id === id);
} //# sourceMappingURL=extractChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.socketClientCache = void 0;
exports.getSocketRpcClient = getSocketRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
const withTimeout_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
const id_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/id.js [app-client] (ecmascript)");
exports.socketClientCache = new Map();
async function getSocketRpcClient(parameters) {
    const { getSocket, keepAlive = true, key = 'socket', reconnect = true, url } = parameters;
    const { interval: keepAliveInterval = 30_000 } = typeof keepAlive === 'object' ? keepAlive : {};
    const { attempts = 5, delay = 2_000 } = typeof reconnect === 'object' ? reconnect : {};
    let socketClient = exports.socketClientCache.get(`${key}:${url}`);
    if (socketClient) return socketClient;
    let reconnectCount = 0;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id: `${key}:${url}`,
        fn: async ()=>{
            const requests = new Map();
            const subscriptions = new Map();
            let error;
            let socket;
            let keepAliveTimer;
            async function setup() {
                const result = await getSocket({
                    onClose () {
                        for (const request of requests.values())request.onError?.(new request_js_1.SocketClosedError({
                            url
                        }));
                        for (const subscription of subscriptions.values())subscription.onError?.(new request_js_1.SocketClosedError({
                            url
                        }));
                        if (reconnect && reconnectCount < attempts) setTimeout(async ()=>{
                            reconnectCount++;
                            await setup().catch(console.error);
                        }, delay);
                        else {
                            requests.clear();
                            subscriptions.clear();
                        }
                    },
                    onError (error_) {
                        error = error_;
                        for (const request of requests.values())request.onError?.(error);
                        for (const subscription of subscriptions.values())subscription.onError?.(error);
                        socketClient?.close();
                        if (reconnect && reconnectCount < attempts) setTimeout(async ()=>{
                            reconnectCount++;
                            await setup().catch(console.error);
                        }, delay);
                        else {
                            requests.clear();
                            subscriptions.clear();
                        }
                    },
                    onOpen () {
                        error = undefined;
                        reconnectCount = 0;
                    },
                    onResponse (data) {
                        const isSubscription = data.method === 'eth_subscription';
                        const id = isSubscription ? data.params.subscription : data.id;
                        const cache = isSubscription ? subscriptions : requests;
                        const callback = cache.get(id);
                        if (callback) callback.onResponse(data);
                        if (!isSubscription) cache.delete(id);
                    }
                });
                socket = result;
                if (keepAlive) {
                    if (keepAliveTimer) clearInterval(keepAliveTimer);
                    keepAliveTimer = setInterval(()=>socket.ping?.(), keepAliveInterval);
                }
                return result;
            }
            await setup();
            error = undefined;
            socketClient = {
                close () {
                    keepAliveTimer && clearInterval(keepAliveTimer);
                    socket.close();
                    exports.socketClientCache.delete(`${key}:${url}`);
                },
                get socket () {
                    return socket;
                },
                request ({ body, onError, onResponse }) {
                    if (error && onError) onError(error);
                    const id = body.id ?? id_js_1.idCache.take();
                    const callback = (response)=>{
                        if (typeof response.id === 'number' && id !== response.id) return;
                        if (body.method === 'eth_subscribe' && typeof response.result === 'string') subscriptions.set(response.result, {
                            onResponse: callback,
                            onError
                        });
                        if (body.method === 'eth_unsubscribe') subscriptions.delete(body.params?.[0]);
                        onResponse(response);
                    };
                    requests.set(id, {
                        onResponse: callback,
                        onError
                    });
                    try {
                        socket.request({
                            body: {
                                jsonrpc: '2.0',
                                id,
                                ...body
                            }
                        });
                    } catch (error) {
                        onError?.(error);
                    }
                },
                requestAsync ({ body, timeout = 10_000 }) {
                    return (0, withTimeout_js_1.withTimeout)(()=>new Promise((onResponse, onError)=>this.request({
                                body,
                                onError,
                                onResponse
                            })), {
                        errorInstance: new request_js_1.TimeoutError({
                            body,
                            url
                        }),
                        timeout
                    });
                },
                requests,
                subscriptions,
                url
            };
            exports.socketClientCache.set(`${key}:${url}`, socketClient);
            return [
                socketClient
            ];
        }
    });
    const [_, [socketClient_]] = await schedule();
    return socketClient_;
} //# sourceMappingURL=socket.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWebSocketRpcClient = getWebSocketRpcClient;
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const socket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)");
async function getWebSocketRpcClient(url, options = {}) {
    const { keepAlive, reconnect } = options;
    return (0, socket_js_1.getSocketRpcClient)({
        async getSocket ({ onClose, onError, onOpen, onResponse }) {
            const WebSocket = await Promise.resolve().then(()=>__turbopack_context__.r("[project]/node_modules/.pnpm/isows@1.0.7_ws@8.18.2/node_modules/isows/_esm/native.js [app-client] (ecmascript)")).then((module)=>module.WebSocket);
            const socket = new WebSocket(url);
            function onClose_() {
                socket.removeEventListener('close', onClose_);
                socket.removeEventListener('message', onMessage);
                socket.removeEventListener('error', onError);
                socket.removeEventListener('open', onOpen);
                onClose();
            }
            function onMessage({ data }) {
                try {
                    const _data = JSON.parse(data);
                    onResponse(_data);
                } catch (error) {
                    onError(error);
                }
            }
            socket.addEventListener('close', onClose_);
            socket.addEventListener('message', onMessage);
            socket.addEventListener('error', onError);
            socket.addEventListener('open', onOpen);
            if (socket.readyState === WebSocket.CONNECTING) {
                await new Promise((resolve, reject)=>{
                    if (!socket) return;
                    socket.onopen = resolve;
                    socket.onerror = reject;
                });
            }
            const { close: close_ } = socket;
            return Object.assign(socket, {
                close () {
                    close_.bind(socket)();
                    onClose_();
                },
                ping () {
                    try {
                        if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new request_js_1.WebSocketRequestError({
                            url: socket.url,
                            cause: new request_js_1.SocketClosedError({
                                url: socket.url
                            })
                        });
                        const body = {
                            jsonrpc: '2.0',
                            method: 'net_version',
                            params: []
                        };
                        socket.send(JSON.stringify(body));
                    } catch (error) {
                        onError(error);
                    }
                },
                request ({ body }) {
                    if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new request_js_1.WebSocketRequestError({
                        body,
                        url: socket.url,
                        cause: new request_js_1.SocketClosedError({
                            url: socket.url
                        })
                    });
                    return socket.send(JSON.stringify(body));
                }
            });
        },
        keepAlive,
        reconnect,
        url
    });
} //# sourceMappingURL=webSocket.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rpc = void 0;
exports.getSocket = getSocket;
const http_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
const webSocket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
function webSocket(socketClient, { body, onError, onResponse }) {
    socketClient.request({
        body,
        onError,
        onResponse
    });
    return socketClient;
}
async function webSocketAsync(socketClient, { body, timeout = 10_000 }) {
    return socketClient.requestAsync({
        body,
        timeout
    });
}
async function getSocket(url) {
    const client = await (0, webSocket_js_1.getWebSocketRpcClient)(url);
    return Object.assign(client.socket, {
        requests: client.requests,
        subscriptions: client.subscriptions
    });
}
exports.rpc = {
    http (url, params) {
        return (0, http_js_1.getHttpRpcClient)(url).request(params);
    },
    webSocket,
    webSocketAsync
}; //# sourceMappingURL=compat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashTypedData = hashTypedData;
exports.hashDomain = hashDomain;
exports.hashStruct = hashStruct;
exports.encodeType = encodeType;
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
function hashTypedData(parameters) {
    const { domain = {}, message, primaryType } = parameters;
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
    const parts = [
        '0x1901'
    ];
    if (domain) parts.push(hashDomain({
        domain,
        types: types
    }));
    if (primaryType !== 'EIP712Domain') parts.push(hashStruct({
        data: message,
        primaryType,
        types: types
    }));
    return (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)(parts));
}
function hashDomain({ domain, types }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types
    });
}
function hashStruct({ data, primaryType, types }) {
    const encoded = encodeData({
        data,
        primaryType,
        types
    });
    return (0, keccak256_js_1.keccak256)(encoded);
}
function encodeData({ data, primaryType, types }) {
    const encodedTypes = [
        {
            type: 'bytes32'
        }
    ];
    const encodedValues = [
        hashType({
            primaryType,
            types
        })
    ];
    for (const field of types[primaryType]){
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name]
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
    const encodedHashType = (0, toHex_js_1.toHex)(encodeType({
        primaryType,
        types
    }));
    return (0, keccak256_js_1.keccak256)(encodedHashType);
}
function encodeType({ primaryType, types }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({
        primaryType,
        types
    });
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        result += `${type}(${types[type].map(({ name, type: t })=>`${t} ${name}`).join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]){
        findTypeDependencies({
            primaryType: field.type,
            types
        }, results);
    }
    return results;
}
function encodeField({ types, name, type, value }) {
    if (types[type] !== undefined) {
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)(encodeData({
                data: value,
                primaryType: type,
                types
            }))
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)(value)
        ];
    }
    if (type === 'string') return [
        {
            type: 'bytes32'
        },
        (0, keccak256_js_1.keccak256)((0, toHex_js_1.toHex)(value))
    ];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item)=>encodeField({
                name,
                type: parsedType,
                types,
                value: item
            }));
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)((0, encodeAbiParameters_js_1.encodeAbiParameters)(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v)))
        ];
    }
    return [
        {
            type
        },
        value
    ];
} //# sourceMappingURL=hashTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeTypedData = serializeTypedData;
exports.validateTypedData = validateTypedData;
exports.getTypesForEIP712Domain = getTypesForEIP712Domain;
exports.domainSeparator = domainSeparator;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
function serializeTypedData(parameters) {
    const { domain: domain_, message: message_, primaryType, types } = parameters;
    const normalizeData = (struct, data_)=>{
        const data = {
            ...data_
        };
        for (const param of struct){
            const { name, type } = param;
            if (type === 'address') data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (()=>{
        if (!types.EIP712Domain) return {};
        if (!domain_) return {};
        return normalizeData(types.EIP712Domain, domain_);
    })();
    const message = (()=>{
        if (primaryType === 'EIP712Domain') return undefined;
        return normalizeData(types[primaryType], message_);
    })();
    return (0, stringify_js_1.stringify)({
        domain,
        message,
        primaryType,
        types
    });
}
function validateTypedData(parameters) {
    const { domain, message, primaryType, types } = parameters;
    const validateData = (struct, data)=>{
        for (const param of struct){
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(regex_js_1.integerRegex);
            if (integerMatch && (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                (0, toHex_js_1.numberToHex)(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_) / 8
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
                address: value
            });
            const bytesMatch = type.match(regex_js_1.bytesRegex);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0, size_js_1.size)(value) !== Number.parseInt(size_)) throw new abi_js_1.BytesSizeMismatchError({
                    expectedSize: Number.parseInt(size_),
                    givenSize: (0, size_js_1.size)(value)
                });
            }
            const struct = types[type];
            if (struct) {
                validateReference(type);
                validateData(struct, value);
            }
        }
    };
    if (types.EIP712Domain && domain) {
        if (typeof domain !== 'object') throw new typedData_js_1.InvalidDomainError({
            domain
        });
        validateData(types.EIP712Domain, domain);
    }
    if (primaryType !== 'EIP712Domain') {
        if (types[primaryType]) validateData(types[primaryType], message);
        else throw new typedData_js_1.InvalidPrimaryTypeError({
            primaryType,
            types
        });
    }
}
function getTypesForEIP712Domain({ domain }) {
    return [
        typeof domain?.name === 'string' && {
            name: 'name',
            type: 'string'
        },
        domain?.version && {
            name: 'version',
            type: 'string'
        },
        (typeof domain?.chainId === 'number' || typeof domain?.chainId === 'bigint') && {
            name: 'chainId',
            type: 'uint256'
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address'
        },
        domain?.salt && {
            name: 'salt',
            type: 'bytes32'
        }
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return (0, hashTypedData_js_1.hashDomain)({
        domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({
                domain
            })
        }
    });
}
function validateReference(type) {
    if (type === 'address' || type === 'bool' || type === 'string' || type.startsWith('bytes') || type.startsWith('uint') || type.startsWith('int')) throw new typedData_js_1.InvalidStructTypeError({
        type
    });
} //# sourceMappingURL=typedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodePacked = encodePacked;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
function encodePacked(types, values) {
    if (types.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0, concat_js_1.concatHex)(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
            address
        });
        return (0, pad_js_1.pad)(address.toLowerCase(), {
            size: isArray ? 32 : null
        });
    }
    if (type === 'string') return (0, toHex_js_1.stringToHex)(value);
    if (type === 'bytes') return value;
    if (type === 'bool') return (0, pad_js_1.pad)((0, toHex_js_1.boolToHex)(value), {
        size: isArray ? 32 : 1
    });
    const intMatch = type.match(regex_js_1.integerRegex);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits) / 8;
        return (0, toHex_js_1.numberToHex)(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int'
        });
    }
    const bytesMatch = type.match(regex_js_1.bytesRegex);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size) !== (value.length - 2) / 2) throw new abi_js_1.BytesSizeMismatchError({
            expectedSize: Number.parseInt(size),
            givenSize: (value.length - 2) / 2
        });
        return (0, pad_js_1.pad)(value, {
            dir: 'right',
            size: isArray ? 32 : null
        });
    }
    const arrayMatch = type.match(regex_js_1.arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for(let i = 0; i < value.length; i++){
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0) return '0x';
        return (0, concat_js_1.concatHex)(data);
    }
    throw new abi_js_1.UnsupportedPackedAbiType(type);
} //# sourceMappingURL=encodePacked.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertTransactionEIP7702 = assertTransactionEIP7702;
exports.assertTransactionEIP4844 = assertTransactionEIP4844;
exports.assertTransactionEIP1559 = assertTransactionEIP1559;
exports.assertTransactionEIP2930 = assertTransactionEIP2930;
exports.assertTransactionLegacy = assertTransactionLegacy;
const kzg_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const blob_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function assertTransactionEIP7702(transaction) {
    const { authorizationList } = transaction;
    if (authorizationList) {
        for (const authorization of authorizationList){
            const { chainId } = authorization;
            const address = authorization.address;
            if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
                address
            });
            if (chainId < 0) throw new chain_js_1.InvalidChainIdError({
                chainId
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
    const { blobVersionedHashes } = transaction;
    if (blobVersionedHashes) {
        if (blobVersionedHashes.length === 0) throw new blob_js_1.EmptyBlobError();
        for (const hash of blobVersionedHashes){
            const size_ = (0, size_js_1.size)(hash);
            const version = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(hash, 0, 1));
            if (size_ !== 32) throw new blob_js_1.InvalidVersionedHashSizeError({
                hash,
                size: size_
            });
            if (version !== kzg_js_1.versionedHashVersionKzg) throw new blob_js_1.InvalidVersionedHashVersionError({
                hash,
                version
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (maxFeePerGas && maxFeePerGas > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
}
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof chainId !== 'undefined' && chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > number_js_1.maxUint256) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
} //# sourceMappingURL=assertTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeAccessList = serializeAccessList;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0) return [];
    const serializedAccessList = [];
    for(let i = 0; i < accessList.length; i++){
        const { address, storageKeys } = accessList[i];
        for(let j = 0; j < storageKeys.length; j++){
            if (storageKeys[j].length - 2 !== 64) {
                throw new transaction_js_1.InvalidStorageKeySizeError({
                    storageKey: storageKeys[j]
                });
            }
        }
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) {
            throw new address_js_1.InvalidAddressError({
                address
            });
        }
        serializedAccessList.push([
            address,
            storageKeys
        ]);
    }
    return serializedAccessList;
} //# sourceMappingURL=serializeAccessList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeTransaction = serializeTransaction;
exports.toYParitySignatureArray = toYParitySignatureArray;
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const serializeAuthorizationList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)");
const blobsToCommitments_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
const blobsToProofs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
const commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const assertTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
const getTransactionType_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
const serializeAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
function serializeTransaction(transaction, signature) {
    const type = (0, getTransactionType_js_1.getTransactionType)(transaction);
    if (type === 'eip1559') return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930') return serializeTransactionEIP2930(transaction, signature);
    if (type === 'eip4844') return serializeTransactionEIP4844(transaction, signature);
    if (type === 'eip7702') return serializeTransactionEIP7702(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
    const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP7702)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedAuthorizationList = (0, serializeAuthorizationList_js_1.serializeAuthorizationList)(authorizationList);
    return (0, concat_js_1.concatHex)([
        '0x04',
        (0, toRlp_js_1.toRlp)([
            (0, toHex_js_1.numberToHex)(chainId),
            nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
            maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
            maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
            gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
            to ?? '0x',
            value ? (0, toHex_js_1.numberToHex)(value) : '0x',
            data ?? '0x',
            serializedAccessList,
            serializedAuthorizationList,
            ...toYParitySignatureArray(transaction, signature)
        ])
    ]);
}
function serializeTransactionEIP4844(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP4844)(transaction);
    let blobVersionedHashes = transaction.blobVersionedHashes;
    let sidecars = transaction.sidecars;
    if (transaction.blobs && (typeof blobVersionedHashes === 'undefined' || typeof sidecars === 'undefined')) {
        const blobs = typeof transaction.blobs[0] === 'string' ? transaction.blobs : transaction.blobs.map((x)=>(0, toHex_js_1.bytesToHex)(x));
        const kzg = transaction.kzg;
        const commitments = (0, blobsToCommitments_js_1.blobsToCommitments)({
            blobs,
            kzg
        });
        if (typeof blobVersionedHashes === 'undefined') blobVersionedHashes = (0, commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes)({
            commitments
        });
        if (typeof sidecars === 'undefined') {
            const proofs = (0, blobsToProofs_js_1.blobsToProofs)({
                blobs,
                commitments,
                kzg
            });
            sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
                blobs,
                commitments,
                proofs
            });
        }
    }
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        maxFeePerBlobGas ? (0, toHex_js_1.numberToHex)(maxFeePerBlobGas) : '0x',
        blobVersionedHashes ?? [],
        ...toYParitySignatureArray(transaction, signature)
    ];
    const blobs = [];
    const commitments = [];
    const proofs = [];
    if (sidecars) for(let i = 0; i < sidecars.length; i++){
        const { blob, commitment, proof } = sidecars[i];
        blobs.push(blob);
        commitments.push(commitment);
        proofs.push(proof);
    }
    return (0, concat_js_1.concatHex)([
        '0x03',
        sidecars ? (0, toRlp_js_1.toRlp)([
            serializedTransaction,
            blobs,
            commitments,
            proofs
        ]) : (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.numberToHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.numberToHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, concat_js_1.concatHex)([
        '0x02',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.numberToHex)(chainId),
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.numberToHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, concat_js_1.concatHex)([
        '0x01',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    let serializedTransaction = [
        nonce ? (0, toHex_js_1.numberToHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.numberToHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.numberToHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.numberToHex)(value) : '0x',
        data ?? '0x'
    ];
    if (signature) {
        const v = (()=>{
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0) return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            if (chainId > 0) return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v) throw new transaction_js_1.InvalidLegacyVError({
                v: signature.v
            });
            return v;
        })();
        const r = (0, trim_js_1.trim)(signature.r);
        const s = (0, trim_js_1.trim)(signature.s);
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.numberToHex)(v),
            r === '0x00' ? '0x' : r,
            s === '0x00' ? '0x' : s
        ];
    } else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.numberToHex)(chainId),
            '0x',
            '0x'
        ];
    }
    return (0, toRlp_js_1.toRlp)(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
    const signature = signature_ ?? transaction;
    const { v, yParity } = signature;
    if (typeof signature.r === 'undefined') return [];
    if (typeof signature.s === 'undefined') return [];
    if (typeof v === 'undefined' && typeof yParity === 'undefined') return [];
    const r = (0, trim_js_1.trim)(signature.r);
    const s = (0, trim_js_1.trim)(signature.s);
    const yParity_ = (()=>{
        if (typeof yParity === 'number') return yParity ? (0, toHex_js_1.numberToHex)(1) : '0x';
        if (v === 0n) return '0x';
        if (v === 1n) return (0, toHex_js_1.numberToHex)(1);
        return v === 27n ? '0x' : (0, toHex_js_1.numberToHex)(1);
    })();
    return [
        yParity_,
        r === '0x00' ? '0x' : r,
        s === '0x00' ? '0x' : s
    ];
} //# sourceMappingURL=serializeTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeAuthorizationList = serializeAuthorizationList;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
function serializeAuthorizationList(authorizationList) {
    if (!authorizationList || authorizationList.length === 0) return [];
    const serializedAuthorizationList = [];
    for (const authorization of authorizationList){
        const { chainId, nonce, ...signature } = authorization;
        const contractAddress = authorization.address;
        serializedAuthorizationList.push([
            chainId ? (0, toHex_js_1.toHex)(chainId) : '0x',
            contractAddress,
            nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
            ...(0, serializeTransaction_js_1.toYParitySignatureArray)({}, signature)
        ]);
    }
    return serializedAuthorizationList;
} //# sourceMappingURL=serializeAuthorizationList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyAuthorization = verifyAuthorization;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
async function verifyAuthorization({ address, authorization, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAuthorizationAddress_js_1.recoverAuthorizationAddress)({
        authorization,
        signature
    }));
} //# sourceMappingURL=verifyAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBytes = isBytes;
function isBytes(value) {
    if (!value) return false;
    if (typeof value !== 'object') return false;
    if (!('BYTES_PER_ELEMENT' in value)) return false;
    return value.BYTES_PER_ELEMENT === 1 && value.constructor.name === 'Uint8Array';
} //# sourceMappingURL=isBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractAddress = getContractAddress;
exports.getCreateAddress = getCreateAddress;
exports.getCreate2Address = getCreate2Address;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const isBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
function getContractAddress(opts) {
    if (opts.opcode === 'CREATE2') return getCreate2Address(opts);
    return getCreateAddress(opts);
}
function getCreateAddress(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    let nonce = (0, toBytes_js_1.toBytes)(opts.nonce);
    if (nonce[0] === 0) nonce = new Uint8Array([]);
    return (0, getAddress_js_1.getAddress)(`0x${(0, keccak256_js_1.keccak256)((0, toRlp_js_1.toRlp)([
        from,
        nonce
    ], 'bytes')).slice(26)}`);
}
function getCreate2Address(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    const salt = (0, pad_js_1.pad)((0, isBytes_js_1.isBytes)(opts.salt) ? opts.salt : (0, toBytes_js_1.toBytes)(opts.salt), {
        size: 32
    });
    const bytecodeHash = (()=>{
        if ('bytecodeHash' in opts) {
            if ((0, isBytes_js_1.isBytes)(opts.bytecodeHash)) return opts.bytecodeHash;
            return (0, toBytes_js_1.toBytes)(opts.bytecodeHash);
        }
        return (0, keccak256_js_1.keccak256)(opts.bytecode, 'bytes');
    })();
    return (0, getAddress_js_1.getAddress)((0, slice_js_1.slice)((0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
        (0, toBytes_js_1.toBytes)('0xff'),
        from,
        salt,
        bytecodeHash
    ])), 12));
} //# sourceMappingURL=getContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromRlp = fromRlp;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromRlp(value, to = 'hex') {
    const bytes = (()=>{
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0) throw new encoding_js_1.InvalidHexValueError(value);
            return (0, toBytes_js_1.hexToBytes)(value);
        }
        return value;
    })();
    const cursor = (0, cursor_js_1.createCursor)(bytes, {
        recursiveReadLimit: Number.POSITIVE_INFINITY
    });
    const result = fromRlpCursor(cursor, to);
    return result;
}
function fromRlpCursor(cursor, to = 'hex') {
    if (cursor.bytes.length === 0) return to === 'hex' ? (0, toHex_js_1.bytesToHex)(cursor.bytes) : cursor.bytes;
    const prefix = cursor.readByte();
    if (prefix < 0x80) cursor.decrementPosition(1);
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return to === 'hex' ? (0, toHex_js_1.bytesToHex)(bytes) : bytes;
    }
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80) return 1;
    if (prefix <= offset + 55) return prefix - offset;
    if (prefix === offset + 55 + 1) return cursor.readUint8();
    if (prefix === offset + 55 + 2) return cursor.readUint16();
    if (prefix === offset + 55 + 3) return cursor.readUint24();
    if (prefix === offset + 55 + 4) return cursor.readUint32();
    throw new base_js_1.BaseError('Invalid RLP prefix');
}
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while(cursor.position - position < length)value.push(fromRlpCursor(cursor, to));
    return value;
} //# sourceMappingURL=fromRlp.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventSignature = void 0;
var toSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSignature", {
    enumerable: true,
    get: function() {
        return toSignature_js_1.toSignature;
    }
}); //# sourceMappingURL=toEventSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionSignature = void 0;
var toSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSignature", {
    enumerable: true,
    get: function() {
        return toSignature_js_1.toSignature;
    }
}); //# sourceMappingURL=toFunctionSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toEventHash = void 0;
var toSignatureHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventHash", {
    enumerable: true,
    get: function() {
        return toSignatureHash_js_1.toSignatureHash;
    }
}); //# sourceMappingURL=toEventHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFunctionHash = void 0;
var toSignatureHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toSignatureHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionHash", {
    enumerable: true,
    get: function() {
        return toSignatureHash_js_1.toSignatureHash;
    }
}); //# sourceMappingURL=toFunctionHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHash = isHash;
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
function isHash(hash) {
    return (0, isHex_js_1.isHex)(hash) && (0, size_js_1.size)(hash) === 32;
} //# sourceMappingURL=isHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = ripemd160;
const ripemd160_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/ripemd160.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function ripemd160(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, ripemd160_1.ripemd160)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
} //# sourceMappingURL=ripemd160.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toPrefixedMessage = toPrefixedMessage;
const strings_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function toPrefixedMessage(message_) {
    const message = (()=>{
        if (typeof message_ === 'string') return (0, toHex_js_1.stringToHex)(message_);
        if (typeof message_.raw === 'string') return message_.raw;
        return (0, toHex_js_1.bytesToHex)(message_.raw);
    })();
    const prefix = (0, toHex_js_1.stringToHex)(`${strings_js_1.presignMessagePrefix}${(0, size_js_1.size)(message)}`);
    return (0, concat_js_1.concat)([
        prefix,
        message
    ]);
} //# sourceMappingURL=toPrefixedMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashMessage = hashMessage;
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const toPrefixedMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
function hashMessage(message, to_) {
    return (0, keccak256_js_1.keccak256)((0, toPrefixedMessage_js_1.toPrefixedMessage)(message), to_);
} //# sourceMappingURL=hashMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverMessageAddress = recoverMessageAddress;
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverMessageAddress({ message, signature }) {
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashMessage_js_1.hashMessage)(message),
        signature
    });
} //# sourceMappingURL=recoverMessageAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTypedDataAddress = recoverTypedDataAddress;
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverTypedDataAddress(parameters) {
    const { domain, message, primaryType, signature, types } = parameters;
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashTypedData_js_1.hashTypedData)({
            domain,
            message,
            primaryType,
            types
        }),
        signature
    });
} //# sourceMappingURL=recoverTypedDataAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyHash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyHash = verifyHash;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function verifyHash({ address, hash, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverAddress_js_1.recoverAddress)({
        hash,
        signature
    }));
} //# sourceMappingURL=verifyHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = verifyMessage;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverMessageAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)");
async function verifyMessage({ address, message, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverMessageAddress_js_1.recoverMessageAddress)({
        message,
        signature
    }));
} //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = verifyTypedData;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
const recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
async function verifyTypedData(parameters) {
    const { address, domain, message, primaryType, signature, types } = parameters;
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverTypedDataAddress_js_1.recoverTypedDataAddress)({
        domain,
        message,
        primaryType,
        signature,
        types
    }));
} //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isErc6492Signature = isErc6492Signature;
const bytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
function isErc6492Signature(signature) {
    return (0, slice_js_1.sliceHex)(signature, -32) === bytes_js_1.erc6492MagicBytes;
} //# sourceMappingURL=isErc6492Signature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseErc6492Signature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseErc6492Signature = parseErc6492Signature;
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const isErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
function parseErc6492Signature(signature) {
    if (!(0, isErc6492Signature_js_1.isErc6492Signature)(signature)) return {
        signature
    };
    const [address, data, signature_] = (0, decodeAbiParameters_js_1.decodeAbiParameters)([
        {
            type: 'address'
        },
        {
            type: 'bytes'
        },
        {
            type: 'bytes'
        }
    ], signature);
    return {
        address,
        data,
        signature: signature_
    };
} //# sourceMappingURL=parseErc6492Signature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeErc6492Signature = serializeErc6492Signature;
const bytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = (0, concat_js_1.concatHex)([
        (0, encodeAbiParameters_js_1.encodeAbiParameters)([
            {
                type: 'address'
            },
            {
                type: 'bytes'
            },
            {
                type: 'bytes'
            }
        ], [
            address,
            data,
            signature
        ]),
        bytes_js_1.erc6492MagicBytes
    ]);
    if (to === 'hex') return signature_;
    return (0, toBytes_js_1.hexToBytes)(signature_);
} //# sourceMappingURL=serializeErc6492Signature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSerializedTransactionType = getSerializedTransactionType;
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function getSerializedTransactionType(serializedTransaction) {
    const serializedType = (0, slice_js_1.sliceHex)(serializedTransaction, 0, 1);
    if (serializedType === '0x04') return 'eip7702';
    if (serializedType === '0x03') return 'eip4844';
    if (serializedType === '0x02') return 'eip1559';
    if (serializedType === '0x01') return 'eip2930';
    if (serializedType !== '0x' && (0, fromHex_js_1.hexToNumber)(serializedType) >= 0xc0) return 'legacy';
    throw new transaction_js_1.InvalidSerializedTransactionTypeError({
        serializedType
    });
} //# sourceMappingURL=getSerializedTransactionType.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransaction = parseTransaction;
exports.toTransactionArray = toTransactionArray;
exports.parseAccessList = parseAccessList;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const toBlobSidecars_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const fromRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)");
const isHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
const assertTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
const getSerializedTransactionType_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)");
function parseTransaction(serializedTransaction) {
    const type = (0, getSerializedTransactionType_js_1.getSerializedTransactionType)(serializedTransaction);
    if (type === 'eip1559') return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930') return parseTransactionEIP2930(serializedTransaction);
    if (type === 'eip4844') return parseTransactionEIP4844(serializedTransaction);
    if (type === 'eip7702') return parseTransactionEIP7702(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
function parseTransactionEIP7702(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, authorizationList, v, r, s] = transactionArray;
    if (transactionArray.length !== 10 && transactionArray.length !== 13) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            authorizationList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip7702'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip7702'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (authorizationList.length !== 0 && authorizationList !== '0x') transaction.authorizationList = parseAuthorizationList(authorizationList);
    (0, assertTransaction_js_1.assertTransactionEIP7702)(transaction);
    const signature = transactionArray.length === 13 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP4844(serializedTransaction) {
    const transactionOrWrapperArray = toTransactionArray(serializedTransaction);
    const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
    const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
    const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, v, r, s] = transactionArray;
    const [blobs, commitments, proofs] = wrapperArray;
    if (!(transactionArray.length === 11 || transactionArray.length === 14)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip4844'
    });
    const transaction = {
        blobVersionedHashes: blobVersionedHashes,
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip4844'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerBlobGas) && maxFeePerBlobGas !== '0x') transaction.maxFeePerBlobGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerBlobGas);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (blobs && commitments && proofs) transaction.sidecars = (0, toBlobSidecars_js_1.toBlobSidecars)({
        blobs: blobs,
        commitments: commitments,
        proofs: proofs
    });
    (0, assertTransaction_js_1.assertTransactionEIP4844)(transaction);
    const signature = transactionArray.length === 14 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip1559'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip1559'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const signature = transactionArray.length === 12 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 8 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip2930'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip2930'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const signature = transactionArray.length === 11 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = (0, fromRlp_js_1.fromRlp)(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            ...transactionArray.length > 6 ? {
                v: chainIdOrV_,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'legacy'
    });
    const transaction = {
        type: 'legacy'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    if (transactionArray.length === 6) return transaction;
    const chainIdOrV = (0, isHex_js_1.isHex)(chainIdOrV_) && chainIdOrV_ !== '0x' ? (0, fromHex_js_1.hexToBigInt)(chainIdOrV_) : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0) transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0) transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n) throw new transaction_js_1.InvalidLegacyVError({
        v
    });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    transaction.yParity = v % 2n === 0n ? 1 : 0;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return (0, fromRlp_js_1.fromRlp)(`0x${serializedTransaction.slice(4)}`, 'hex');
}
function parseAccessList(accessList_) {
    const accessList = [];
    for(let i = 0; i < accessList_.length; i++){
        const [address, storageKeys] = accessList_[i];
        if (!(0, isAddress_js_1.isAddress)(address, {
            strict: false
        })) throw new address_js_1.InvalidAddressError({
            address
        });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key)=>(0, isHash_js_1.isHash)(key) ? key : (0, trim_js_1.trim)(key))
        });
    }
    return accessList;
}
function parseAuthorizationList(serializedAuthorizationList) {
    const authorizationList = [];
    for(let i = 0; i < serializedAuthorizationList.length; i++){
        const [chainId, address, nonce, yParity, r, s] = serializedAuthorizationList[i];
        authorizationList.push({
            address,
            chainId: (0, fromHex_js_1.hexToNumber)(chainId),
            nonce: (0, fromHex_js_1.hexToNumber)(nonce),
            ...parseEIP155Signature([
                yParity,
                r,
                s
            ])
        });
    }
    return authorizationList;
}
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const v = signature[0] === '0x' || (0, fromHex_js_1.hexToBigInt)(signature[0]) === 0n ? 27n : 28n;
    return {
        r: (0, pad_js_1.padHex)(signature[1], {
            size: 32
        }),
        s: (0, pad_js_1.padHex)(signature[2], {
            size: 32
        }),
        v,
        yParity: v === 27n ? 0 : 1
    };
} //# sourceMappingURL=parseTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseUnits = parseUnits;
const unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)");
function parseUnits(value, decimals) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value)) throw new unit_js_1.InvalidDecimalNumberError({
        value
    });
    let [integer, fraction = '0'] = value.split('.');
    const negative = integer.startsWith('-');
    if (negative) integer = integer.slice(1);
    fraction = fraction.replace(/(0+)$/, '');
    if (decimals === 0) {
        if (Math.round(Number(`.${fraction}`)) === 1) integer = `${BigInt(integer) + 1n}`;
        fraction = '';
    } else if (fraction.length > decimals) {
        const [left, unit, right] = [
            fraction.slice(0, decimals - 1),
            fraction.slice(decimals - 1, decimals),
            fraction.slice(decimals)
        ];
        const rounded = Math.round(Number(`${unit}.${right}`));
        if (rounded > 9) fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, '0');
        else fraction = `${left}${rounded}`;
        if (fraction.length > decimals) {
            fraction = fraction.slice(1);
            integer = `${BigInt(integer) + 1n}`;
        }
        fraction = fraction.slice(0, decimals);
    } else {
        fraction = fraction.padEnd(decimals, '0');
    }
    return BigInt(`${negative ? '-' : ''}${integer}${fraction}`);
} //# sourceMappingURL=parseUnits.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseEther.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseEther = parseEther;
const unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const parseUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
function parseEther(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.etherUnits[unit]);
} //# sourceMappingURL=parseEther.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseGwei = parseGwei;
const unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
const parseUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
function parseGwei(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.gweiUnits[unit]);
} //# sourceMappingURL=parseGwei.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/nonceManager.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nonceManager = void 0;
exports.createNonceManager = createNonceManager;
exports.jsonRpc = jsonRpc;
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/lru.js [app-client] (ecmascript)");
function createNonceManager(parameters) {
    const { source } = parameters;
    const deltaMap = new Map();
    const nonceMap = new lru_js_1.LruMap(8192);
    const promiseMap = new Map();
    const getKey = ({ address, chainId })=>`${address}.${chainId}`;
    return {
        async consume ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            const promise = this.get({
                address,
                chainId,
                client
            });
            this.increment({
                address,
                chainId
            });
            const nonce = await promise;
            await source.set({
                address,
                chainId
            }, nonce);
            nonceMap.set(key, nonce);
            return nonce;
        },
        async increment ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            const delta = deltaMap.get(key) ?? 0;
            deltaMap.set(key, delta + 1);
        },
        async get ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            let promise = promiseMap.get(key);
            if (!promise) {
                promise = (async ()=>{
                    try {
                        const nonce = await source.get({
                            address,
                            chainId,
                            client
                        });
                        const previousNonce = nonceMap.get(key) ?? 0;
                        if (previousNonce > 0 && nonce <= previousNonce) return previousNonce + 1;
                        nonceMap.delete(key);
                        return nonce;
                    } finally{
                        this.reset({
                            address,
                            chainId
                        });
                    }
                })();
                promiseMap.set(key, promise);
            }
            const delta = deltaMap.get(key) ?? 0;
            return delta + await promise;
        },
        reset ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            deltaMap.delete(key);
            promiseMap.delete(key);
        }
    };
}
function jsonRpc() {
    return {
        async get (parameters) {
            const { address, client } = parameters;
            return (0, getTransactionCount_js_1.getTransactionCount)(client, {
                address,
                blockTag: 'pending'
            });
        },
        set () {}
    };
}
exports.nonceManager = createNonceManager({
    source: jsonRpc()
}); //# sourceMappingURL=nonceManager.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractAddress = exports.publicKeyToAddress = exports.parseAccount = exports.verifyAuthorization = exports.serializeAuthorizationList = exports.recoverAuthorizationAddress = exports.hashAuthorization = exports.formatAbiParams = exports.formatAbiItem = exports.formatAbiItemWithArgs = exports.encodePacked = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.getAbiItem = exports.parseEventLogs = exports.encodeFunctionResult = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeAbiParameters = exports.validateTypedData = exports.serializeTypedData = exports.stringify = exports.getWebSocketRpcClient = exports.socketClientCache = exports.getSocketRpcClient = exports.getHttpRpcClient = exports.rpc = exports.getSocket = exports.integerRegex = exports.bytesRegex = exports.arrayRegex = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.ccipRequest = exports.buildRequest = void 0;
exports.hexToString = exports.hexToNumber = exports.hexToBigInt = exports.hexToBool = exports.fromHex = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigint = exports.bytesToBigInt = exports.stringToHex = exports.numberToHex = exports.toHex = exports.bytesToHex = exports.boolToHex = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.toBytes = exports.boolToBytes = exports.toRlp = exports.extract = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.defineTransactionReceipt = exports.formatLog = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.formatBlock = exports.defineBlock = exports.trim = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.padHex = exports.padBytes = exports.pad = exports.isHex = exports.isBytes = exports.concatHex = exports.concatBytes = exports.concat = exports.isAddressEqual = exports.isAddress = exports.getAddress = exports.getCreate2Address = exports.getCreateAddress = void 0;
exports.parseEther = exports.parseUnits = exports.formatUnits = exports.formatGwei = exports.formatEther = exports.serializeAccessList = exports.serializeTransaction = exports.parseTransaction = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.getTransactionType = exports.getSerializedTransactionType = exports.serializeErc6492Signature = exports.isErc6492Signature = exports.parseErc6492Signature = exports.hashMessage = exports.verifyTypedData = exports.verifyMessage = exports.verifyHash = exports.recoverTypedDataAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.hashTypedData = exports.hashStruct = exports.ripemd160 = exports.sha256 = exports.keccak256 = exports.isHash = exports.toFunctionHash = exports.toEventHash = exports.getFunctionSignature = exports.toFunctionSignature = exports.getEventSignature = exports.toEventSignature = exports.getFunctionSelector = exports.toFunctionSelector = exports.getEventSelector = exports.toEventSelector = exports.defineFormatter = exports.getAction = exports.getTransactionError = exports.getEstimateGasError = exports.getContractError = exports.getCallError = exports.getNodeError = exports.containsNodeError = exports.fromRlp = void 0;
exports.nonceManager = exports.createNonceManager = exports.parseGwei = void 0;
var buildRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "buildRequest", {
    enumerable: true,
    get: function() {
        return buildRequest_js_1.buildRequest;
    }
});
var ccip_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ccip.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ccipRequest", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "ccipFetch", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipRequest;
    }
});
Object.defineProperty(exports, "offchainLookup", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookup;
    }
});
Object.defineProperty(exports, "offchainLookupAbiItem", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupAbiItem;
    }
});
Object.defineProperty(exports, "offchainLookupSignature", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupSignature;
    }
});
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
});
var regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/regex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "arrayRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.arrayRegex;
    }
});
Object.defineProperty(exports, "bytesRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.bytesRegex;
    }
});
Object.defineProperty(exports, "integerRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.integerRegex;
    }
});
var compat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSocket", {
    enumerable: true,
    get: function() {
        return compat_js_1.getSocket;
    }
});
Object.defineProperty(exports, "rpc", {
    enumerable: true,
    get: function() {
        return compat_js_1.rpc;
    }
});
var http_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getHttpRpcClient", {
    enumerable: true,
    get: function() {
        return http_js_1.getHttpRpcClient;
    }
});
var socket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/socket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSocketRpcClient", {
    enumerable: true,
    get: function() {
        return socket_js_1.getSocketRpcClient;
    }
});
Object.defineProperty(exports, "socketClientCache", {
    enumerable: true,
    get: function() {
        return socket_js_1.socketClientCache;
    }
});
var webSocket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getWebSocketRpcClient", {
    enumerable: true,
    get: function() {
        return webSocket_js_1.getWebSocketRpcClient;
    }
});
var stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.serializeTypedData;
    }
});
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.validateTypedData;
    }
});
var decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeErrorResult", {
    enumerable: true,
    get: function() {
        return decodeErrorResult_js_1.decodeErrorResult;
    }
});
var decodeEventLog_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeEventLog", {
    enumerable: true,
    get: function() {
        return decodeEventLog_js_1.decodeEventLog;
    }
});
var decodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionData", {
    enumerable: true,
    get: function() {
        return decodeFunctionData_js_1.decodeFunctionData;
    }
});
var decodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionResult", {
    enumerable: true,
    get: function() {
        return decodeFunctionResult_js_1.decodeFunctionResult;
    }
});
var encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeAbiParameters", {
    enumerable: true,
    get: function() {
        return encodeAbiParameters_js_1.encodeAbiParameters;
    }
});
var encodeDeployData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeDeployData", {
    enumerable: true,
    get: function() {
        return encodeDeployData_js_1.encodeDeployData;
    }
});
var encodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeErrorResult", {
    enumerable: true,
    get: function() {
        return encodeErrorResult_js_1.encodeErrorResult;
    }
});
var encodeEventTopics_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeEventTopics", {
    enumerable: true,
    get: function() {
        return encodeEventTopics_js_1.encodeEventTopics;
    }
});
var encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionData", {
    enumerable: true,
    get: function() {
        return encodeFunctionData_js_1.encodeFunctionData;
    }
});
var encodeFunctionResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionResult", {
    enumerable: true,
    get: function() {
        return encodeFunctionResult_js_1.encodeFunctionResult;
    }
});
var parseEventLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEventLogs", {
    enumerable: true,
    get: function() {
        return parseEventLogs_js_1.parseEventLogs;
    }
});
var getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var abitype_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbi;
    }
});
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiItem;
    }
});
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameter;
    }
});
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameters;
    }
});
var encodePacked_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var formatAbiItemWithArgs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItemWithArgs", {
    enumerable: true,
    get: function() {
        return formatAbiItemWithArgs_js_1.formatAbiItemWithArgs;
    }
});
var formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
Object.defineProperty(exports, "formatAbiParams", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiParams;
    }
});
var hashAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashAuthorization", {
    enumerable: true,
    get: function() {
        return hashAuthorization_js_1.hashAuthorization;
    }
});
var recoverAuthorizationAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverAuthorizationAddress", {
    enumerable: true,
    get: function() {
        return recoverAuthorizationAddress_js_1.recoverAuthorizationAddress;
    }
});
var serializeAuthorizationList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/serializeAuthorizationList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAuthorizationList", {
    enumerable: true,
    get: function() {
        return serializeAuthorizationList_js_1.serializeAuthorizationList;
    }
});
var verifyAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyAuthorization", {
    enumerable: true,
    get: function() {
        return verifyAuthorization_js_1.verifyAuthorization;
    }
});
var parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAccount", {
    enumerable: true,
    get: function() {
        return parseAccount_js_1.parseAccount;
    }
});
var publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "publicKeyToAddress", {
    enumerable: true,
    get: function() {
        return publicKeyToAddress_js_1.publicKeyToAddress;
    }
});
var getContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
var getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddress", {
    enumerable: true,
    get: function() {
        return isAddress_js_1.isAddress;
    }
});
var isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isAddressEqual", {
    enumerable: true,
    get: function() {
        return isAddressEqual_js_1.isAddressEqual;
    }
});
var concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_js_1.concat;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatBytes;
    }
});
Object.defineProperty(exports, "concatHex", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatHex;
    }
});
var isBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
    }
});
var pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
Object.defineProperty(exports, "pad", {
    enumerable: true,
    get: function() {
        return pad_js_1.pad;
    }
});
Object.defineProperty(exports, "padBytes", {
    enumerable: true,
    get: function() {
        return pad_js_1.padBytes;
    }
});
Object.defineProperty(exports, "padHex", {
    enumerable: true,
    get: function() {
        return pad_js_1.padHex;
    }
});
var size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function() {
        return size_js_1.size;
    }
});
var slice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/slice.js [app-client] (ecmascript)");
Object.defineProperty(exports, "slice", {
    enumerable: true,
    get: function() {
        return slice_js_1.slice;
    }
});
Object.defineProperty(exports, "sliceBytes", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceBytes;
    }
});
Object.defineProperty(exports, "sliceHex", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceHex;
    }
});
var trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.formatBlock;
    }
});
var transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_1.transactionType;
    }
});
var log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_1.formatLog;
    }
});
var transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
var transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.defineTransactionRequest;
    }
});
Object.defineProperty(exports, "formatTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.formatTransactionRequest;
    }
});
var extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "extract", {
    enumerable: true,
    get: function() {
        return extract_js_1.extract;
    }
});
var toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
    }
});
var toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
    }
});
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
    }
});
Object.defineProperty(exports, "hexToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.hexToBytes;
    }
});
Object.defineProperty(exports, "numberToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.numberToBytes;
    }
});
Object.defineProperty(exports, "stringToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.stringToBytes;
    }
});
var toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.boolToHex;
    }
});
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.bytesToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
Object.defineProperty(exports, "numberToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.numberToHex;
    }
});
Object.defineProperty(exports, "stringToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.stringToHex;
    }
});
var fromBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBigint", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBool", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBool;
    }
});
Object.defineProperty(exports, "bytesToNumber", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToNumber;
    }
});
Object.defineProperty(exports, "bytesToString", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToString;
    }
});
Object.defineProperty(exports, "fromBytes", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.fromBytes;
    }
});
var fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToNumber", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToNumber;
    }
});
Object.defineProperty(exports, "hexToString", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToString;
    }
});
var fromRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromRlp", {
    enumerable: true,
    get: function() {
        return fromRlp_js_1.fromRlp;
    }
});
var getNodeError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "containsNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.containsNodeError;
    }
});
Object.defineProperty(exports, "getNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.getNodeError;
    }
});
var getCallError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getCallError", {
    enumerable: true,
    get: function() {
        return getCallError_js_1.getCallError;
    }
});
var getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
    }
});
var getEstimateGasError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getEstimateGasError", {
    enumerable: true,
    get: function() {
        return getEstimateGasError_js_1.getEstimateGasError;
    }
});
var getTransactionError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getTransactionError", {
    enumerable: true,
    get: function() {
        return getTransactionError_js_1.getTransactionError;
    }
});
var getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAction", {
    enumerable: true,
    get: function() {
        return getAction_js_1.getAction;
    }
});
var formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineFormatter", {
    enumerable: true,
    get: function() {
        return formatter_js_1.defineFormatter;
    }
});
var toEventSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
Object.defineProperty(exports, "getEventSelector", {
    enumerable: true,
    get: function() {
        return toEventSelector_js_1.toEventSelector;
    }
});
var toFunctionSelector_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
Object.defineProperty(exports, "getFunctionSelector", {
    enumerable: true,
    get: function() {
        return toFunctionSelector_js_1.toFunctionSelector;
    }
});
var toEventSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
Object.defineProperty(exports, "getEventSignature", {
    enumerable: true,
    get: function() {
        return toEventSignature_js_1.toEventSignature;
    }
});
var toFunctionSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
Object.defineProperty(exports, "getFunctionSignature", {
    enumerable: true,
    get: function() {
        return toFunctionSignature_js_1.toFunctionSignature;
    }
});
var toEventHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toEventHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toEventHash", {
    enumerable: true,
    get: function() {
        return toEventHash_js_1.toEventHash;
    }
});
var toFunctionHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/toFunctionHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toFunctionHash", {
    enumerable: true,
    get: function() {
        return toFunctionHash_js_1.toFunctionHash;
    }
});
var isHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "keccak256", {
    enumerable: true,
    get: function() {
        return keccak256_js_1.keccak256;
    }
});
var sha256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sha256", {
    enumerable: true,
    get: function() {
        return sha256_js_1.sha256;
    }
});
var ripemd160_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ripemd160", {
    enumerable: true,
    get: function() {
        return ripemd160_js_1.ripemd160;
    }
});
var hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashStruct", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashStruct;
    }
});
Object.defineProperty(exports, "hashTypedData", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashTypedData;
    }
});
var recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverAddress", {
    enumerable: true,
    get: function() {
        return recoverAddress_js_1.recoverAddress;
    }
});
var recoverMessageAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverMessageAddress", {
    enumerable: true,
    get: function() {
        return recoverMessageAddress_js_1.recoverMessageAddress;
    }
});
var recoverPublicKey_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverPublicKey", {
    enumerable: true,
    get: function() {
        return recoverPublicKey_js_1.recoverPublicKey;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var verifyHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyHash", {
    enumerable: true,
    get: function() {
        return verifyHash_js_1.verifyHash;
    }
});
var verifyMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var parseErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseErc6492Signature", {
    enumerable: true,
    get: function() {
        return parseErc6492Signature_js_1.parseErc6492Signature;
    }
});
var isErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/isErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isErc6492Signature", {
    enumerable: true,
    get: function() {
        return isErc6492Signature_js_1.isErc6492Signature;
    }
});
var serializeErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeErc6492Signature", {
    enumerable: true,
    get: function() {
        return serializeErc6492Signature_js_1.serializeErc6492Signature;
    }
});
var getSerializedTransactionType_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getSerializedTransactionType", {
    enumerable: true,
    get: function() {
        return getSerializedTransactionType_js_1.getSerializedTransactionType;
    }
});
var getTransactionType_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getTransactionType", {
    enumerable: true,
    get: function() {
        return getTransactionType_js_1.getTransactionType;
    }
});
var assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertRequest", {
    enumerable: true,
    get: function() {
        return assertRequest_js_1.assertRequest;
    }
});
var assertTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "assertTransactionEIP1559", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP1559;
    }
});
Object.defineProperty(exports, "assertTransactionEIP2930", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP2930;
    }
});
Object.defineProperty(exports, "assertTransactionLegacy", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionLegacy;
    }
});
var parseTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
    }
});
var serializeAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var formatEther_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatEther", {
    enumerable: true,
    get: function() {
        return formatEther_js_1.formatEther;
    }
});
var formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatGwei", {
    enumerable: true,
    get: function() {
        return formatGwei_js_1.formatGwei;
    }
});
var formatUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatUnits", {
    enumerable: true,
    get: function() {
        return formatUnits_js_1.formatUnits;
    }
});
var parseUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
});
var parseEther_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseEther.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseEther", {
    enumerable: true,
    get: function() {
        return parseEther_js_1.parseEther;
    }
});
var parseGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseGwei", {
    enumerable: true,
    get: function() {
        return parseGwei_js_1.parseGwei;
    }
});
var nonceManager_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/nonceManager.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createNonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.createNonceManager;
    }
});
Object.defineProperty(exports, "nonceManager", {
    enumerable: true,
    get: function() {
        return nonceManager_js_1.nonceManager;
    }
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/proof.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatProof = formatProof;
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-client] (ecmascript)");
function formatStorageProof(storageProof) {
    return storageProof.map((proof)=>({
            ...proof,
            value: BigInt(proof.value)
        }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0, index_js_1.hexToNumber)(proof.nonce) : undefined,
        storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : undefined
    };
} //# sourceMappingURL=proof.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeSignature = serializeSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
function serializeSignature({ r, s, to = 'hex', v, yParity }) {
    const yParity_ = (()=>{
        if (yParity === 0 || yParity === 1) return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex') return signature;
    return (0, toBytes_js_1.hexToBytes)(signature);
} //# sourceMappingURL=serializeSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/siwe/parseSiweMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSiweMessage = parseSiweMessage;
function parseSiweMessage(message) {
    const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
    const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
    const resources = message.split('Resources:')[1]?.split('\n- ').slice(1);
    return {
        ...prefix,
        ...suffix,
        ...chainId ? {
            chainId: Number(chainId)
        } : {},
        ...expirationTime ? {
            expirationTime: new Date(expirationTime)
        } : {},
        ...issuedAt ? {
            issuedAt: new Date(issuedAt)
        } : {},
        ...notBefore ? {
            notBefore: new Date(notBefore)
        } : {},
        ...requestId ? {
            requestId
        } : {},
        ...resources ? {
            resources
        } : {},
        ...scheme ? {
            scheme
        } : {},
        ...statement ? {
            statement
        } : {}
    };
}
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/; //# sourceMappingURL=parseSiweMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/siwe/validateSiweMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateSiweMessage = validateSiweMessage;
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-client] (ecmascript)");
function validateSiweMessage(parameters) {
    const { address, domain, message, nonce, scheme, time = new Date() } = parameters;
    if (domain && message.domain !== domain) return false;
    if (nonce && message.nonce !== nonce) return false;
    if (scheme && message.scheme !== scheme) return false;
    if (message.expirationTime && time >= message.expirationTime) return false;
    if (message.notBefore && time < message.notBefore) return false;
    try {
        if (!message.address) return false;
        if (!(0, isAddress_js_1.isAddress)(message.address, {
            strict: false
        })) return false;
        if (address && !(0, isAddressEqual_js_1.isAddressEqual)(message.address, address)) return false;
    } catch  {
        return false;
    }
    return true;
} //# sourceMappingURL=validateSiweMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeDeployData = decodeDeployData;
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
const docsPath = '/docs/contract/decodeDeployData';
function decodeDeployData(parameters) {
    const { abi, bytecode, data } = parameters;
    if (data === bytecode) return {
        bytecode
    };
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const args = (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, `0x${data.replace(bytecode, '')}`);
    return {
        args,
        bytecode
    };
} //# sourceMappingURL=decodeDeployData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactSignatureToSignature = compactSignatureToSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function compactSignatureToSignature({ r, yParityAndS }) {
    const yParityAndS_bytes = (0, toBytes_js_1.hexToBytes)(yParityAndS);
    const yParity = yParityAndS_bytes[0] & 0x80 ? 1 : 0;
    const s = yParityAndS_bytes;
    if (yParity === 1) s[0] &= 0x7f;
    return {
        r,
        s: (0, toHex_js_1.bytesToHex)(s),
        yParity
    };
} //# sourceMappingURL=compactSignatureToSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseCompactSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseCompactSignature = parseCompactSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function parseCompactSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        yParityAndS: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        })
    };
} //# sourceMappingURL=parseCompactSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSignature = parseSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function parseSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
    const [v, yParity] = (()=>{
        if (yParityOrV === 0 || yParityOrV === 1) return [
            undefined,
            yParityOrV
        ];
        if (yParityOrV === 27) return [
            BigInt(yParityOrV),
            0
        ];
        if (yParityOrV === 28) return [
            BigInt(yParityOrV),
            1
        ];
        throw new Error('Invalid yParityOrV value');
    })();
    if (typeof v !== 'undefined') return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        v,
        yParity
    };
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        yParity
    };
} //# sourceMappingURL=parseSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTransactionAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTransactionAddress = recoverTransactionAddress;
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const parseTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
const recoverAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-client] (ecmascript)");
async function recoverTransactionAddress(parameters) {
    const { serializedTransaction, signature: signature_ } = parameters;
    const transaction = (0, parseTransaction_js_1.parseTransaction)(serializedTransaction);
    const signature = signature_ ?? {
        r: transaction.r,
        s: transaction.s,
        v: transaction.v,
        yParity: transaction.yParity
    };
    const serialized = (0, serializeTransaction_js_1.serializeTransaction)({
        ...transaction,
        r: undefined,
        s: undefined,
        v: undefined,
        yParity: undefined,
        sidecars: undefined
    });
    return await (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, keccak256_js_1.keccak256)(serialized),
        signature
    });
} //# sourceMappingURL=recoverTransactionAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signatureToCompactSignature = signatureToCompactSignature;
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function signatureToCompactSignature(signature) {
    const { r, s, v, yParity } = signature;
    const yParity_ = Number(yParity ?? v - 27n);
    let yParityAndS = s;
    if (yParity_ === 1) {
        const bytes = (0, toBytes_js_1.hexToBytes)(s);
        bytes[0] |= 0x80;
        yParityAndS = (0, toHex_js_1.bytesToHex)(bytes);
    }
    return {
        r,
        yParityAndS
    };
} //# sourceMappingURL=signatureToCompactSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeCompactSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeCompactSignature = serializeCompactSignature;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
function serializeCompactSignature({ r, yParityAndS }) {
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(yParityAndS)).toCompactHex()}`;
} //# sourceMappingURL=serializeCompactSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/sidecarsToVersionedHashes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidecarsToVersionedHashes = sidecarsToVersionedHashes;
const commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
function sidecarsToVersionedHashes(parameters) {
    const { sidecars, version } = parameters;
    const to = parameters.to ?? (typeof sidecars[0].blob === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const { commitment } of sidecars){
        hashes.push((0, commitmentToVersionedHash_js_1.commitmentToVersionedHash)({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=sidecarsToVersionedHashes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/fromBlobs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBlobs = fromBlobs;
const cursor_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/cursor.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function fromBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, toBytes_js_1.hexToBytes)(x)) : parameters.blobs;
    const length = blobs.reduce((length, blob)=>length + blob.length, 0);
    const data = (0, cursor_js_1.createCursor)(new Uint8Array(length));
    let active = true;
    for (const blob of blobs){
        const cursor = (0, cursor_js_1.createCursor)(blob);
        while(active && cursor.position < blob.length){
            cursor.incrementPosition(1);
            let consume = 31;
            if (blob.length - cursor.position < 31) consume = blob.length - cursor.position;
            for(const _ in Array.from({
                length: consume
            })){
                const byte = cursor.readByte();
                const isTerminator = byte === 0x80 && !cursor.inspectBytes(cursor.remaining).includes(0x80);
                if (isTerminator) {
                    active = false;
                    break;
                }
                data.pushByte(byte);
            }
        }
    }
    const trimmedData = data.bytes.slice(0, data.position);
    return to === 'hex' ? (0, toHex_js_1.bytesToHex)(trimmedData) : trimmedData;
} //# sourceMappingURL=fromBlobs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineKzg = defineKzg;
function defineKzg({ blobToKzgCommitment, computeBlobKzgProof }) {
    return {
        blobToKzgCommitment,
        computeBlobKzgProof
    };
} //# sourceMappingURL=defineKzg.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/kzg/setupKzg.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupKzg = setupKzg;
const defineKzg_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)");
function setupKzg(parameters, path) {
    try {
        parameters.loadTrustedSetup(path);
    } catch (e) {
        const error = e;
        if (!error.message.includes('trusted setup is already loaded')) throw error;
    }
    return (0, defineKzg_js_1.defineKzg)(parameters);
} //# sourceMappingURL=setupKzg.js.map
}}),
}]);

//# sourceMappingURL=0aa7d_viem__cjs_utils_45e932b7._.js.map