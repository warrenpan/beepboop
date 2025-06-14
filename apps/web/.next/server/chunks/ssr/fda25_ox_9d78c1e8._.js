module.exports = {

"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/version.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @internal */ __turbopack_context__.s({
    "version": (()=>version)
});
const version = '0.1.1'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUrl": (()=>getUrl),
    "getVersion": (()=>getVersion),
    "prettyPrint": (()=>prettyPrint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/version.js [app-ssr] (ecmascript)");
;
function getUrl(url) {
    return url;
}
function getVersion() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"];
}
function prettyPrint(args) {
    if (!args) return '';
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/errors.js [app-ssr] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, options = {}){
        const details = (()=>{
            if (options.cause instanceof BaseError) {
                if (options.cause.details) return options.cause.details;
                if (options.cause.shortMessage) return options.cause.shortMessage;
            }
            if (options.cause && 'details' in options.cause && typeof options.cause.details === 'string') return options.cause.details;
            if (options.cause?.message) return options.cause.message;
            return options.details;
        })();
        const docsPath = (()=>{
            if (options.cause instanceof BaseError) return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...options.metaMessages ? [
                '',
                ...options.metaMessages
            ] : [],
            ...details || docsPath ? [
                '',
                details ? `Details: ${details}` : undefined,
                docsPath ? `See: ${docs}` : undefined
            ] : []
        ].filter((x)=>typeof x === 'string').join('\n');
        super(message, options.cause ? {
            cause: options.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVersion"])()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
/** @internal */ function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=Errors.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parse": (()=>parse),
    "stringify": (()=>stringify)
});
const bigIntSuffix = '#__bigint';
function parse(string, reviver) {
    return JSON.parse(string, (key, value_)=>{
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix)) return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value)=>{
        if (typeof replacer === 'function') return replacer(key, value);
        if (typeof value === 'bigint') return value.toString() + bigIntSuffix;
        return value;
    }, space);
} //# sourceMappingURL=Json.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertEndOffset": (()=>assertEndOffset),
    "assertSize": (()=>assertSize),
    "assertStartOffset": (()=>assertStartOffset),
    "charCodeMap": (()=>charCodeMap),
    "charCodeToBase16": (()=>charCodeToBase16),
    "pad": (()=>pad),
    "trim": (()=>trim)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
;
function assertSize(bytes, size_) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: start,
        position: 'start',
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
            offset: end,
            position: 'end',
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)
        });
    }
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
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return bytes;
    if (bytes.length > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: bytes.length,
        targetSize: size,
        type: 'Bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    return data;
} //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertEndOffset": (()=>assertEndOffset),
    "assertSize": (()=>assertSize),
    "assertStartOffset": (()=>assertStartOffset),
    "pad": (()=>pad),
    "trim": (()=>trim)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
function assertSize(hex, size_) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hex) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hex),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: start,
        position: 'start',
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
            offset: end,
            position: 'end',
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)
        });
    }
}
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'Hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (data === '0') return '0x';
    if (dir === 'right' && data.length % 2 === 1) return `0x${data}0`;
    return `0x${data}`;
} //# sourceMappingURL=hex.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidBytesBooleanError": (()=>InvalidBytesBooleanError),
    "InvalidBytesTypeError": (()=>InvalidBytesTypeError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SizeOverflowError": (()=>SizeOverflowError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError),
    "assert": (()=>assert),
    "concat": (()=>concat),
    "from": (()=>from),
    "fromArray": (()=>fromArray),
    "fromBoolean": (()=>fromBoolean),
    "fromHex": (()=>fromHex),
    "fromNumber": (()=>fromNumber),
    "fromString": (()=>fromString),
    "isEqual": (()=>isEqual),
    "padLeft": (()=>padLeft),
    "padRight": (()=>padRight),
    "random": (()=>random),
    "size": (()=>size),
    "slice": (()=>slice),
    "toBigInt": (()=>toBigInt),
    "toBoolean": (()=>toBoolean),
    "toHex": (()=>toHex),
    "toNumber": (()=>toNumber),
    "toString": (()=>toString),
    "trimLeft": (()=>trimLeft),
    "trimRight": (()=>trimRight),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$2$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/esm/utils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const decoder = /*#__PURE__*/ new TextDecoder();
const encoder = /*#__PURE__*/ new TextEncoder();
function assert(value) {
    if (value instanceof Uint8Array) return;
    if (!value) throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object') throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value)) throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array') throw new InvalidBytesTypeError(value);
}
function concat(...values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for(let i = 0, index = 0; i < values.length; i++){
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
function from(value) {
    if (value instanceof Uint8Array) return value;
    if (typeof value === 'string') return fromHex(value);
    return fromArray(value);
}
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
function fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(value, size);
        hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charCodeToBase16"])(hexString.charCodeAt(j++));
        const nibbleRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charCodeToBase16"])(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function fromNumber(value, options) {
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, options);
    return fromHex(hex);
}
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
function isEqual(bytesA, bytesB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$2$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalBytes"])(bytesA, bytesB);
}
function padLeft(value, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
function size(value) {
    return value.length;
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertStartOffset"])(value, start);
    const value_ = value.slice(start, end);
    if (strict) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEndOffset"])(value_, start, end);
    return value_;
}
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes, size);
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigInt"])(hex, options);
}
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1) throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
function toHex(value, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(value, options);
}
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes, size);
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(hex, options);
}
function toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
function trimLeft(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value, {
        dir: 'right'
    });
}
function validate(value) {
    try {
        assert(value);
        return true;
    } catch  {
        return false;
    }
}
class InvalidBytesBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(bytes){
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
class InvalidBytesTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: [
                'Bytes values must be of type `Bytes`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Bytes.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntegerOutOfRangeError": (()=>IntegerOutOfRangeError),
    "InvalidHexBooleanError": (()=>InvalidHexBooleanError),
    "InvalidHexTypeError": (()=>InvalidHexTypeError),
    "InvalidHexValueError": (()=>InvalidHexValueError),
    "InvalidLengthError": (()=>InvalidLengthError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SizeOverflowError": (()=>SizeOverflowError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError),
    "assert": (()=>assert),
    "concat": (()=>concat),
    "from": (()=>from),
    "fromBoolean": (()=>fromBoolean),
    "fromBytes": (()=>fromBytes),
    "fromNumber": (()=>fromNumber),
    "fromString": (()=>fromString),
    "isEqual": (()=>isEqual),
    "padLeft": (()=>padLeft),
    "padRight": (()=>padRight),
    "random": (()=>random),
    "size": (()=>size),
    "slice": (()=>slice),
    "toBigInt": (()=>toBigInt),
    "toBoolean": (()=>toBoolean),
    "toBytes": (()=>toBytes),
    "toNumber": (()=>toNumber),
    "toString": (()=>toString),
    "trimLeft": (()=>trimLeft),
    "trimRight": (()=>trimRight),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$2$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/esm/utils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value) throw new InvalidHexTypeError(value);
    if (typeof value !== 'string') throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x')) throw new InvalidHexValueError(value);
}
function concat(...values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
}
function from(value) {
    if (value instanceof Uint8Array) return fromBytes(value);
    if (Array.isArray(value)) return fromBytes(new Uint8Array(value));
    return value;
}
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
function fromBytes(value, options = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++)string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value_ > maxValue || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size) return padLeft(hex, size);
    return hex;
}
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
function isEqual(hexA, hexB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$2$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["equalBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(hexA), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(hexB));
}
function padLeft(value, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return fromBytes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["random"])(length));
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertStartOffset"])(value, start);
    const value_ = `0x${value.replace('0x', '').slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEndOffset"])(value_, start, end);
    return value_;
}
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value, {
        dir: 'right'
    });
}
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(hex, options.size);
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << BigInt(size) * 8n) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed) return value;
    return value - max_unsigned - 1n;
}
function toBoolean(hex, options = {}) {
    if (options.size) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x') return false;
    if (hex_ === '0x1') return true;
    throw new InvalidHexBooleanError(hex);
}
function toBytes(hex, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(hex, options);
}
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size) return Number(hex);
    return Number(toBigInt(hex, options));
}
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(hex);
    if (size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSize"])(bytes, size);
        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimRight"])(bytes);
    }
    return new TextDecoder().decode(bytes);
}
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class IntegerOutOfRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max, min, signed, size, value }){
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
class InvalidHexBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(hex){
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
class InvalidHexTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: [
                'Hex types must be represented as `"0x${string}"`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
class InvalidHexValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
class InvalidLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: [
                'It must be an even length.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Hex.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Withdrawal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromRpc": (()=>fromRpc),
    "toRpc": (()=>toRpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
function fromRpc(withdrawal) {
    return {
        ...withdrawal,
        amount: BigInt(withdrawal.amount),
        index: Number(withdrawal.index),
        validatorIndex: Number(withdrawal.validatorIndex)
    };
}
function toRpc(withdrawal) {
    return {
        address: withdrawal.address,
        amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(withdrawal.amount),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(withdrawal.index),
        validatorIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(withdrawal.validatorIndex)
    };
} //# sourceMappingURL=Withdrawal.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/BlockOverrides.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromRpc": (()=>fromRpc),
    "toRpc": (()=>toRpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Withdrawal.js [app-ssr] (ecmascript)");
;
;
function fromRpc(rpcBlockOverrides) {
    return {
        ...rpcBlockOverrides.baseFeePerGas && {
            baseFeePerGas: BigInt(rpcBlockOverrides.baseFeePerGas)
        },
        ...rpcBlockOverrides.blobBaseFee && {
            blobBaseFee: BigInt(rpcBlockOverrides.blobBaseFee)
        },
        ...rpcBlockOverrides.feeRecipient && {
            feeRecipient: rpcBlockOverrides.feeRecipient
        },
        ...rpcBlockOverrides.gasLimit && {
            gasLimit: BigInt(rpcBlockOverrides.gasLimit)
        },
        ...rpcBlockOverrides.number && {
            number: BigInt(rpcBlockOverrides.number)
        },
        ...rpcBlockOverrides.prevRandao && {
            prevRandao: BigInt(rpcBlockOverrides.prevRandao)
        },
        ...rpcBlockOverrides.time && {
            time: BigInt(rpcBlockOverrides.time)
        },
        ...rpcBlockOverrides.withdrawals && {
            withdrawals: rpcBlockOverrides.withdrawals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRpc"])
        }
    };
}
function toRpc(blockOverrides) {
    return {
        ...typeof blockOverrides.baseFeePerGas === 'bigint' && {
            baseFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.baseFeePerGas)
        },
        ...typeof blockOverrides.blobBaseFee === 'bigint' && {
            blobBaseFee: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.blobBaseFee)
        },
        ...typeof blockOverrides.feeRecipient === 'string' && {
            feeRecipient: blockOverrides.feeRecipient
        },
        ...typeof blockOverrides.gasLimit === 'bigint' && {
            gasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.gasLimit)
        },
        ...typeof blockOverrides.number === 'bigint' && {
            number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.number)
        },
        ...typeof blockOverrides.prevRandao === 'bigint' && {
            prevRandao: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.prevRandao)
        },
        ...typeof blockOverrides.time === 'bigint' && {
            time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(blockOverrides.time)
        },
        ...blockOverrides.withdrawals && {
            withdrawals: blockOverrides.withdrawals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRpc"])
        }
    };
} //# sourceMappingURL=BlockOverrides.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "keccak256": (()=>keccak256),
    "ripemd160": (()=>ripemd160),
    "sha256": (()=>sha256),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/ripemd160.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
;
;
;
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ripemd160"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function validate(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) === 32;
} //# sourceMappingURL=Hash.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @internal
 *
 * Map with a LRU (Least recently used) policy.
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_context__.s({
    "LruMap": (()=>LruMap)
});
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
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checksum": (()=>checksum),
    "clear": (()=>clear)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)");
;
const caches = {
    checksum: /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](8192)
};
const checksum = caches.checksum;
function clear() {
    for (const cache of Object.values(caches))cache.clear();
} //# sourceMappingURL=Caches.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidCompressedPrefixError": (()=>InvalidCompressedPrefixError),
    "InvalidError": (()=>InvalidError),
    "InvalidPrefixError": (()=>InvalidPrefixError),
    "InvalidSerializedSizeError": (()=>InvalidSerializedSizeError),
    "InvalidUncompressedPrefixError": (()=>InvalidUncompressedPrefixError),
    "assert": (()=>assert),
    "compress": (()=>compress),
    "from": (()=>from),
    "fromBytes": (()=>fromBytes),
    "fromHex": (()=>fromHex),
    "toBytes": (()=>toBytes),
    "toHex": (()=>toHex),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
;
;
;
;
function assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false || typeof x === 'bigint' && typeof y === 'bigint') {
        if (prefix !== 4) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidUncompressedPrefixError()
        });
        return;
    }
    // Compressed
    if (compressed === true || typeof x === 'bigint' && typeof y === 'undefined') {
        if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidCompressedPrefixError()
        });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({
        publicKey
    });
}
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x
    };
}
function from(value) {
    const publicKey = (()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value)) return fromHex(value);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value)) return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint') return {
            prefix: prefix ?? 0x04,
            x,
            y
        };
        return {
            prefix,
            x
        };
    })();
    assert(publicKey);
    return publicKey;
}
function fromBytes(publicKey) {
    return fromHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(publicKey));
}
function fromHex(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError({
        publicKey
    });
    if (publicKey.length === 130) {
        const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 32));
        const y = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 1));
        const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 1, 33));
        const y = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 33, 65));
        return {
            prefix,
            x,
            y
        };
    }
    const prefix = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 1));
    const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 1, 33));
    return {
        prefix,
        x
    };
}
function toBytes(publicKey, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
    assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(includePrefix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(prefix, {
        size: 1
    }) : '0x', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(x, {
        size: 32
    }), // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(y, {
        size: 32
    }) : '0x');
    return publicKey_;
}
function validate(publicKey, options = {}) {
    try {
        assert(publicKey, options);
        return true;
    } catch (error) {
        return false;
    }
}
class InvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
class InvalidPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ prefix, cause }){
        super(`Prefix "${prefix}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
class InvalidCompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
class InvalidUncompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
class InvalidSerializedSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(publicKey))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
} //# sourceMappingURL=PublicKey.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAddressError": (()=>InvalidAddressError),
    "InvalidChecksumError": (()=>InvalidChecksumError),
    "InvalidInputError": (()=>InvalidInputError),
    "assert": (()=>assert),
    "checksum": (()=>checksum),
    "from": (()=>from),
    "fromPublicKey": (()=>fromPublicKey),
    "isEqual": (()=>isEqual),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)");
;
;
;
;
;
const addressRegex = /*#__PURE__*/ /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value)) throw new InvalidAddressError({
        address: value,
        cause: new InvalidInputError()
    });
    if (strict) {
        if (value.toLowerCase() === value) return;
        if (checksum(value) !== value) throw new InvalidAddressError({
            address: value,
            cause: new InvalidChecksumError()
        });
    }
}
function checksum(address) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].has(address)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].get(address);
    assert(address, {
        strict: false
    });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(hexAddress), {
        as: 'Bytes'
    });
    const characters = hexAddress.split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].set(address, result);
    return result;
}
function from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    assert(address);
    if (checksumVal) return checksum(address);
    return address;
}
function fromPublicKey(publicKey, options = {}) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(`0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(publicKey).slice(4)}`).substring(26);
    return from(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
    assert(addressA, {
        strict: false
    });
    assert(addressB, {
        strict: false
    });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        assert(address, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, cause }){
        super(`Address "${address}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
class InvalidInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
class InvalidChecksumError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
} //# sourceMappingURL=Address.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/abiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAmbiguousTypes": (()=>getAmbiguousTypes),
    "isArgOfType": (()=>isArgOfType),
    "normalizeSignature": (()=>normalizeSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
;
;
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(') level++;
        if (char === ')') level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active) continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                'error',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('Unable to normalize signature.');
    return result;
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(arg, {
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
                // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
                // https://regexr.com/6v8hp
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
                // https://regexr.com/6va55
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
                // https://regexr.com/6va6i
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            // Pop off `[]` or `[M]` from end of type
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
            if (types.includes('address') && types.includes('string')) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AmbiguityError": (()=>AmbiguityError),
    "InvalidSelectorSizeError": (()=>InvalidSelectorSizeError),
    "NotFoundError": (()=>NotFoundError),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi),
    "getSelector": (()=>getSelector),
    "getSignature": (()=>getSignature),
    "getSignatureHash": (()=>getSignatureHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/abiItem.js [app-ssr] (ecmascript)");
;
;
;
;
;
function format(abiItem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem);
}
function from(abiItem, options = {}) {
    const { prepare = true } = options;
    const item = (()=>{
        if (Array.isArray(abiItem)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiItem"])(abiItem);
        if (typeof abiItem === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiItem"])(abiItem);
        return abiItem;
    })();
    return {
        ...item,
        ...prepare ? {
            hash: getSignatureHash(item)
        } : {}
    };
}
function fromAbi(abi, name, options) {
    const { args = [], prepare = true } = options ?? {};
    const isSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function' || abiItem.type === 'error') return getSelector(abiItem) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(name, 0, 4);
            if (abiItem.type === 'event') return getSignatureHash(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) throw new NotFoundError({
        name: name
    });
    if (abiItems.length === 1) return {
        ...abiItems[0],
        ...prepare ? {
            hash: getSignatureHash(abiItems[0])
        } : {}
    };
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return {
                ...abiItem,
                ...prepare ? {
                    hash: getSignatureHash(abiItem)
                } : {}
            };
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgOfType"])(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAmbiguousTypes"])(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new AmbiguityError({
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
    const abiItem = (()=>{
        if (matchedAbiItem) return matchedAbiItem;
        const [abiItem, ...overloads] = abiItems;
        return {
            ...abiItem,
            overloads
        };
    })();
    if (!abiItem) throw new NotFoundError({
        name: name
    });
    return {
        ...abiItem,
        ...prepare ? {
            hash: getSignatureHash(abiItem)
        } : {}
    };
}
function getSelector(abiItem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
    const signature = (()=>{
        if (typeof abiItem === 'string') return abiItem;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSignature"])(signature);
}
function getSignatureHash(abiItem) {
    if (typeof abiItem !== 'string' && 'hash' in abiItem && abiItem.hash) return abiItem.hash;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(getSignature(abiItem)));
}
class AmbiguityError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
                // TODO: abitype to add support for signature-formatted ABI items.
                `\`${x.type}\` in \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(x.abiItem))}\`, and`,
                `\`${y.type}\` in \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(y.abiItem))}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.AmbiguityError'
        });
    }
}
class NotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ name, data, type = 'item' }){
        const selector = (()=>{
            if (name) return ` with name "${name}"`;
            if (data) return ` with data "${data}"`;
            return '';
        })();
        super(`ABI ${type}${selector} not found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.NotFoundError'
        });
    }
}
class InvalidSelectorSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data }){
        super(`Selector size is invalid. Expected 4 bytes. Received ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(data)} bytes ("${data}").`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.InvalidSelectorSizeError'
        });
    }
} //# sourceMappingURL=AbiItem.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "arrayRegex": (()=>arrayRegex),
    "bytesRegex": (()=>bytesRegex),
    "integerRegex": (()=>integerRegex),
    "maxInt104": (()=>maxInt104),
    "maxInt112": (()=>maxInt112),
    "maxInt120": (()=>maxInt120),
    "maxInt128": (()=>maxInt128),
    "maxInt136": (()=>maxInt136),
    "maxInt144": (()=>maxInt144),
    "maxInt152": (()=>maxInt152),
    "maxInt16": (()=>maxInt16),
    "maxInt160": (()=>maxInt160),
    "maxInt168": (()=>maxInt168),
    "maxInt176": (()=>maxInt176),
    "maxInt184": (()=>maxInt184),
    "maxInt192": (()=>maxInt192),
    "maxInt200": (()=>maxInt200),
    "maxInt208": (()=>maxInt208),
    "maxInt216": (()=>maxInt216),
    "maxInt224": (()=>maxInt224),
    "maxInt232": (()=>maxInt232),
    "maxInt24": (()=>maxInt24),
    "maxInt240": (()=>maxInt240),
    "maxInt248": (()=>maxInt248),
    "maxInt256": (()=>maxInt256),
    "maxInt32": (()=>maxInt32),
    "maxInt40": (()=>maxInt40),
    "maxInt48": (()=>maxInt48),
    "maxInt56": (()=>maxInt56),
    "maxInt64": (()=>maxInt64),
    "maxInt72": (()=>maxInt72),
    "maxInt8": (()=>maxInt8),
    "maxInt80": (()=>maxInt80),
    "maxInt88": (()=>maxInt88),
    "maxInt96": (()=>maxInt96),
    "maxUint104": (()=>maxUint104),
    "maxUint112": (()=>maxUint112),
    "maxUint120": (()=>maxUint120),
    "maxUint128": (()=>maxUint128),
    "maxUint136": (()=>maxUint136),
    "maxUint144": (()=>maxUint144),
    "maxUint152": (()=>maxUint152),
    "maxUint16": (()=>maxUint16),
    "maxUint160": (()=>maxUint160),
    "maxUint168": (()=>maxUint168),
    "maxUint176": (()=>maxUint176),
    "maxUint184": (()=>maxUint184),
    "maxUint192": (()=>maxUint192),
    "maxUint200": (()=>maxUint200),
    "maxUint208": (()=>maxUint208),
    "maxUint216": (()=>maxUint216),
    "maxUint224": (()=>maxUint224),
    "maxUint232": (()=>maxUint232),
    "maxUint24": (()=>maxUint24),
    "maxUint240": (()=>maxUint240),
    "maxUint248": (()=>maxUint248),
    "maxUint256": (()=>maxUint256),
    "maxUint32": (()=>maxUint32),
    "maxUint40": (()=>maxUint40),
    "maxUint48": (()=>maxUint48),
    "maxUint56": (()=>maxUint56),
    "maxUint64": (()=>maxUint64),
    "maxUint72": (()=>maxUint72),
    "maxUint8": (()=>maxUint8),
    "maxUint80": (()=>maxUint80),
    "maxUint88": (()=>maxUint88),
    "maxUint96": (()=>maxUint96),
    "minInt104": (()=>minInt104),
    "minInt112": (()=>minInt112),
    "minInt120": (()=>minInt120),
    "minInt128": (()=>minInt128),
    "minInt136": (()=>minInt136),
    "minInt144": (()=>minInt144),
    "minInt152": (()=>minInt152),
    "minInt16": (()=>minInt16),
    "minInt160": (()=>minInt160),
    "minInt168": (()=>minInt168),
    "minInt176": (()=>minInt176),
    "minInt184": (()=>minInt184),
    "minInt192": (()=>minInt192),
    "minInt200": (()=>minInt200),
    "minInt208": (()=>minInt208),
    "minInt216": (()=>minInt216),
    "minInt224": (()=>minInt224),
    "minInt232": (()=>minInt232),
    "minInt24": (()=>minInt24),
    "minInt240": (()=>minInt240),
    "minInt248": (()=>minInt248),
    "minInt256": (()=>minInt256),
    "minInt32": (()=>minInt32),
    "minInt40": (()=>minInt40),
    "minInt48": (()=>minInt48),
    "minInt56": (()=>minInt56),
    "minInt64": (()=>minInt64),
    "minInt72": (()=>minInt72),
    "minInt8": (()=>minInt8),
    "minInt80": (()=>minInt80),
    "minInt88": (()=>minInt88),
    "minInt96": (()=>minInt96)
});
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=Solidity.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decodeAddress": (()=>decodeAddress),
    "decodeArray": (()=>decodeArray),
    "decodeBool": (()=>decodeBool),
    "decodeBytes": (()=>decodeBytes),
    "decodeNumber": (()=>decodeNumber),
    "decodeParameter": (()=>decodeParameter),
    "decodeString": (()=>decodeString),
    "decodeTuple": (()=>decodeTuple),
    "encode": (()=>encode),
    "encodeAddress": (()=>encodeAddress),
    "encodeArray": (()=>encodeArray),
    "encodeBoolean": (()=>encodeBoolean),
    "encodeBytes": (()=>encodeBytes),
    "encodeNumber": (()=>encodeNumber),
    "encodeString": (()=>encodeString),
    "encodeTuple": (()=>encodeTuple),
    "getArrayComponents": (()=>getArrayComponents),
    "hasDynamicChild": (()=>hasDynamicChild),
    "prepareParameter": (()=>prepareParameter),
    "prepareParameters": (()=>prepareParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function decodeParameter(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            checksumAddress,
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        checksumAddress,
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor, {
        checksum: checksumAddress
    });
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTypeError"](param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
    const { checksum = false } = options;
    const value = cursor.readBytes(32);
    const wrap = (address)=>checksum ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"])(address) : address;
    return [
        wrap((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, options) {
    const { checksumAddress, length, staticPosition } = options;
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: start
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            checksumAddress,
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBoolean"])(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(data),
            32
        ];
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(cursor.readBytes(Number.parseInt(size), 32));
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
        size > 48 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigInt"])(value, {
            signed
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                checksumAddress,
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            checksumAddress,
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
    // Get offset to start of string data.
    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimLeft"])(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function prepareParameters({ checksumAddress, parameters, values }) {
    const preparedParameters = [];
    for(let i = 0; i < parameters.length; i++){
        preparedParameters.push(prepareParameter({
            checksumAddress,
            parameter: parameters[i],
            value: values[i]
        }));
    }
    return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
    const parameter = parameter_;
    const arrayComponents = getArrayComponents(parameter.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            checksumAddress,
            length,
            parameter: {
                ...parameter,
                type
            }
        });
    }
    if (parameter.type === 'tuple') {
        return encodeTuple(value, {
            checksumAddress,
            parameter: parameter
        });
    }
    if (parameter.type === 'address') {
        return encodeAddress(value, {
            checksum: checksumAddress
        });
    }
    if (parameter.type === 'bool') {
        return encodeBoolean(value);
    }
    if (parameter.type.startsWith('uint') || parameter.type.startsWith('int')) {
        const signed = parameter.type.startsWith('int');
        const [, , size = '256'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].exec(parameter.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (parameter.type.startsWith('bytes')) {
        return encodeBytes(value, {
            type: parameter.type
        });
    }
    if (parameter.type === 'string') {
        return encodeString(value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTypeError"](parameter.type);
}
function encode(preparedParameters) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParameters = [];
    const dynamicParameters = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) {
            staticParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParameters.push(encoded);
            dynamicSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(encoded);
        } else {
            staticParameters.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
    const { checksum = false } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(value, {
        strict: checksum
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])(value.toLowerCase())
    };
}
function encodeArray(value, options) {
    const { checksumAddress, length, parameter } = options;
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArrayError"](value);
    if (!dynamic && value.length !== length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrayLengthMismatchError"]({
        expectedLength: length,
        givenLength: value.length,
        type: `${parameter.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParameters = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParameters.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encode(preparedParameters);
        if (dynamic) {
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(preparedParameters.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParameters.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(length, data) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { type }) {
    const [, parametersize] = type.split('bytes');
    const bytesSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value);
    if (!parametersize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0) value_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
        return {
            dynamic: true,
            encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(bytesSize, {
                size: 32
            })), value_)
        };
    }
    if (bytesSize !== Number.parseInt(parametersize)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesSizeMismatchError"]({
        expectedSize: Number.parseInt(parametersize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value)
    };
}
function encodeBoolean(value) {
    if (typeof value !== 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"])(value))
    };
}
function encodeNumber(value, { signed, size }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(value);
    const partsLength = Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(hexValue, i * 32, (i + 1) * 32)));
    }
    return {
        dynamic: true,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hexValue), {
            size: 32
        })), ...parts)
    };
}
function encodeTuple(value, options) {
    const { checksumAddress, parameter } = options;
    let dynamic = false;
    const preparedParameters = [];
    for(let i = 0; i < parameter.components.length; i++){
        const param_ = parameter.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter: param_,
            value: value[index]
        });
        preparedParameters.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encode(preparedParameters) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=abiParameters.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NegativeOffsetError": (()=>NegativeOffsetError),
    "PositionOutOfBoundsError": (()=>PositionOutOfBoundsError),
    "RecursiveReadLimitExceededError": (()=>RecursiveReadLimitExceededError),
    "create": (()=>create)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
;
const staticCursor = /*#__PURE__*/ {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
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
        if (offset < 0) throw new NegativeOffsetError({
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
function create(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
class NegativeOffsetError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.RecursiveReadLimitExceededError'
        });
    }
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrayLengthMismatchError": (()=>ArrayLengthMismatchError),
    "BytesSizeMismatchError": (()=>BytesSizeMismatchError),
    "DataSizeTooSmallError": (()=>DataSizeTooSmallError),
    "InvalidArrayError": (()=>InvalidArrayError),
    "InvalidTypeError": (()=>InvalidTypeError),
    "LengthMismatchError": (()=>LengthMismatchError),
    "ZeroDataError": (()=>ZeroDataError),
    "decode": (()=>decode),
    "encode": (()=>encode),
    "encodePacked": (()=>encodePacked),
    "format": (()=>format),
    "from": (()=>from)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function decode(parameters, data, options = {}) {
    const { as = 'Array', checksumAddress = false } = options;
    const bytes = typeof data === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(data) : data;
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])(bytes);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) < 32) throw new DataSizeTooSmallError({
        data: typeof data === 'string' ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(data),
        parameters: parameters,
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes)
    });
    let consumed = 0;
    const values = as === 'Array' ? [] : {};
    for(let i = 0; i < parameters.length; ++i){
        const param = parameters[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeParameter"])(cursor, param, {
            checksumAddress,
            staticPosition: 0
        });
        consumed += consumed_;
        if (as === 'Array') values.push(data);
        else values[param.name ?? i] = data;
    }
    return values;
}
function encode(parameters, values, options) {
    const { checksumAddress = false } = options ?? {};
    if (parameters.length !== values.length) throw new LengthMismatchError({
        expectedLength: parameters.length,
        givenLength: values.length
    });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareParameters"])({
        checksumAddress,
        parameters: parameters,
        values: values
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(preparedParameters);
    if (data.length === 0) return '0x';
    return data;
}
function encodePacked(types, values) {
    if (types.length !== values.length) throw new LengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encodePacked.encode(type, value));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...data);
}
(function(encodePacked) {
    // eslint-disable-next-line jsdoc/require-jsdoc
    function encode(type, value, isArray = false) {
        if (type === 'address') {
            const address = value;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(address);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])(address.toLowerCase(), isArray ? 32 : 0);
        }
        if (type === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(value);
        if (type === 'bytes') return value;
        if (type === 'bool') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"])(value), isArray ? 32 : 1);
        const intMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"]);
        if (intMatch) {
            const [_type, baseType, bits = '256'] = intMatch;
            const size = Number.parseInt(bits) / 8;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, {
                size: isArray ? 32 : size,
                signed: baseType === 'int'
            });
        }
        const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"]);
        if (bytesMatch) {
            const [_type, size] = bytesMatch;
            if (Number.parseInt(size) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
                expectedSize: Number.parseInt(size),
                value: value
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value, isArray ? 32 : 0);
        }
        const arrayMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRegex"]);
        if (arrayMatch && Array.isArray(value)) {
            const [_type, childType] = arrayMatch;
            const data = [];
            for(let i = 0; i < value.length; i++){
                data.push(encode(childType, value[i], true));
            }
            if (data.length === 0) return '0x';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...data);
        }
        throw new InvalidTypeError(type);
    }
    encodePacked.encode = encode;
})(encodePacked || (encodePacked = {}));
function format(parameters) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(parameters);
}
function from(parameters) {
    if (Array.isArray(parameters) && typeof parameters[0] === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])(parameters);
    if (typeof parameters === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])(parameters);
    return parameters;
}
class DataSizeTooSmallError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, parameters, size }){
        super(`Data size of ${size} bytes is too small for given parameters.`, {
            metaMessages: [
                `Params: (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(parameters)})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.DataSizeTooSmallError'
        });
    }
}
class ZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ZeroDataError'
        });
    }
}
class ArrayLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength, type }){
        super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ArrayLengthMismatchError'
        });
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.BytesSizeMismatchError'
        });
    }
}
class LengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding parameters/values length mismatch.',
            `Expected length (parameters): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.LengthMismatchError'
        });
    }
}
class InvalidArrayError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${value}\` is not a valid array.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidArrayError'
        });
    }
}
class InvalidTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super(`Type \`${type}\` is not a valid ABI Type.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidTypeError'
        });
    }
} //# sourceMappingURL=AbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiConstructor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decode": (()=>decode),
    "encode": (()=>encode),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
;
;
function decode(abiConstructor, options) {
    const { bytecode } = options;
    if (abiConstructor.inputs.length === 0) return undefined;
    const data = options.data.replace(bytecode, '0x');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(abiConstructor.inputs, data);
}
function encode(abiConstructor, options) {
    const { bytecode, args } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(bytecode, abiConstructor.inputs?.length && args?.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(abiConstructor.inputs, args) : '0x');
}
function format(abiConstructor) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiConstructor);
}
function from(abiConstructor) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(abiConstructor);
}
function fromAbi(abi) {
    const item = abi.find((item)=>item.type === 'constructor');
    if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"]({
        name: 'constructor'
    });
    return item;
} //# sourceMappingURL=AbiConstructor.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiFunction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decodeData": (()=>decodeData),
    "decodeResult": (()=>decodeResult),
    "encodeData": (()=>encodeData),
    "encodeResult": (()=>encodeResult),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi),
    "getSelector": (()=>getSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
;
;
function decodeData(abiFunction, data) {
    const { overloads } = abiFunction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(data) < 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSelectorSizeError"]({
        data
    });
    if (abiFunction.inputs.length === 0) return undefined;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], data) : abiFunction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(data) <= 4) return undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(item.inputs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(abiFunction.outputs, data, options);
    if (values && Object.keys(values).length === 0) return undefined;
    if (values && Object.keys(values).length === 1) {
        if (Array.isArray(values)) return values[0];
        return Object.values(values)[0];
    }
    return values;
}
function encodeData(abiFunction, ...args) {
    const { overloads } = abiFunction;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], abiFunction.name, {
        args: args[0]
    }) : abiFunction;
    const selector = getSelector(item);
    const data = args.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(item.inputs, args[0]) : undefined;
    return data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(selector, data) : selector;
}
function encodeResult(abiFunction, output, options = {}) {
    const { as = 'Array' } = options;
    const values = (()=>{
        if (abiFunction.outputs.length === 1) return [
            output
        ];
        if (Array.isArray(output)) return output;
        if (as === 'Object') return Object.values(output);
        return [
            output
        ];
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(abiFunction.outputs, values);
}
function format(abiFunction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiFunction);
}
function from(abiFunction, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(abiFunction, options);
}
function fromAbi(abi, name, options) {
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromAbi"])(abi, name, options);
    if (item.type !== 'function') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"]({
        name,
        type: 'function'
    });
    return item;
}
function getSelector(abiItem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$8$2e$1_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelector"])(abiItem);
} //# sourceMappingURL=AbiFunction.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/version.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '0.1.1'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/errors.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrl = getUrl;
exports.getVersion = getVersion;
exports.prettyPrint = prettyPrint;
const version_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/version.js [app-ssr] (ecmascript)");
function getUrl(url) {
    return url;
}
function getVersion() {
    return version_js_1.version;
}
function prettyPrint(args) {
    if (!args) return '';
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/errors.js [app-ssr] (ecmascript)");
class BaseError extends Error {
    constructor(shortMessage, options = {}){
        const details = (()=>{
            if (options.cause instanceof BaseError) {
                if (options.cause.details) return options.cause.details;
                if (options.cause.shortMessage) return options.cause.shortMessage;
            }
            if (options.cause && 'details' in options.cause && typeof options.cause.details === 'string') return options.cause.details;
            if (options.cause?.message) return options.cause.message;
            return options.details;
        })();
        const docsPath = (()=>{
            if (options.cause instanceof BaseError) return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...options.metaMessages ? [
                '',
                ...options.metaMessages
            ] : [],
            ...details || docsPath ? [
                '',
                details ? `Details: ${details}` : undefined,
                docsPath ? `See: ${docs}` : undefined
            ] : []
        ].filter((x)=>typeof x === 'string').join('\n');
        super(message, options.cause ? {
            cause: options.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${(0, errors_js_1.getVersion)()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
exports.BaseError = BaseError;
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=Errors.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Json.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.stringify = stringify;
const bigIntSuffix = '#__bigint';
function parse(string, reviver) {
    return JSON.parse(string, (key, value_)=>{
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix)) return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value)=>{
        if (typeof replacer === 'function') return replacer(key, value);
        if (typeof value === 'bigint') return value.toString() + bigIntSuffix;
        return value;
    }, space);
} //# sourceMappingURL=Json.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/bytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.charCodeMap = void 0;
exports.assertSize = assertSize;
exports.assertStartOffset = assertStartOffset;
exports.assertEndOffset = assertEndOffset;
exports.charCodeToBase16 = charCodeToBase16;
exports.pad = pad;
exports.trim = trim;
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
function assertSize(bytes, size_) {
    if (Bytes.size(bytes) > size_) throw new Bytes.SizeOverflowError({
        givenSize: Bytes.size(bytes),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > Bytes.size(value) - 1) throw new Bytes.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: Bytes.size(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && Bytes.size(value) !== end - start) {
        throw new Bytes.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: Bytes.size(value)
        });
    }
}
exports.charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= exports.charCodeMap.zero && char <= exports.charCodeMap.nine) return char - exports.charCodeMap.zero;
    if (char >= exports.charCodeMap.A && char <= exports.charCodeMap.F) return char - (exports.charCodeMap.A - 10);
    if (char >= exports.charCodeMap.a && char <= exports.charCodeMap.f) return char - (exports.charCodeMap.a - 10);
    return undefined;
}
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return bytes;
    if (bytes.length > size) throw new Bytes.SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size,
        type: 'Bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    return data;
} //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/hex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertSize = assertSize;
exports.assertStartOffset = assertStartOffset;
exports.assertEndOffset = assertEndOffset;
exports.pad = pad;
exports.trim = trim;
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
function assertSize(hex, size_) {
    if (Hex.size(hex) > size_) throw new Hex.SizeOverflowError({
        givenSize: Hex.size(hex),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > Hex.size(value) - 1) throw new Hex.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: Hex.size(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && Hex.size(value) !== end - start) {
        throw new Hex.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: Hex.size(value)
        });
    }
}
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new Hex.SizeExceedsPaddingSizeError({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'Hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (data === '0') return '0x';
    if (dir === 'right' && data.length % 2 === 1) return `0x${data}0`;
    return `0x${data}`;
} //# sourceMappingURL=hex.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeExceedsPaddingSizeError = exports.SliceOffsetOutOfBoundsError = exports.SizeOverflowError = exports.InvalidBytesTypeError = exports.InvalidBytesBooleanError = void 0;
exports.assert = assert;
exports.concat = concat;
exports.from = from;
exports.fromArray = fromArray;
exports.fromBoolean = fromBoolean;
exports.fromHex = fromHex;
exports.fromNumber = fromNumber;
exports.fromString = fromString;
exports.isEqual = isEqual;
exports.padLeft = padLeft;
exports.padRight = padRight;
exports.random = random;
exports.size = size;
exports.slice = slice;
exports.toBigInt = toBigInt;
exports.toBoolean = toBoolean;
exports.toHex = toHex;
exports.toNumber = toNumber;
exports.toString = toString;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.validate = validate;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/abstract/utils.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Json = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Json.js [app-ssr] (ecmascript)");
const internal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/bytes.js [app-ssr] (ecmascript)");
const internal_hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/hex.js [app-ssr] (ecmascript)");
const decoder = new TextDecoder();
const encoder = new TextEncoder();
function assert(value) {
    if (value instanceof Uint8Array) return;
    if (!value) throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object') throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value)) throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array') throw new InvalidBytesTypeError(value);
}
function concat(...values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for(let i = 0, index = 0; i < values.length; i++){
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
function from(value) {
    if (value instanceof Uint8Array) return value;
    if (typeof value === 'string') return fromHex(value);
    return fromArray(value);
}
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        internal.assertSize(bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
function fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        internal_hex.assertSize(value, size);
        hex = Hex.padRight(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = internal.charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = internal.charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new Errors.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function fromNumber(value, options) {
    const hex = Hex.fromNumber(value, options);
    return fromHex(hex);
}
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        internal.assertSize(bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
function isEqual(bytesA, bytesB) {
    return (0, utils_1.equalBytes)(bytesA, bytesB);
}
function padLeft(value, size) {
    return internal.pad(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return internal.pad(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
function size(value) {
    return value.length;
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    internal.assertStartOffset(value, start);
    const value_ = value.slice(start, end);
    if (strict) internal.assertEndOffset(value_, start, end);
    return value_;
}
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') internal.assertSize(bytes, size);
    const hex = Hex.fromBytes(bytes, options);
    return Hex.toBigInt(hex, options);
}
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        internal.assertSize(bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1) throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
function toHex(value, options = {}) {
    return Hex.fromBytes(value, options);
}
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') internal.assertSize(bytes, size);
    const hex = Hex.fromBytes(bytes, options);
    return Hex.toNumber(hex, options);
}
function toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        internal.assertSize(bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
function trimLeft(value) {
    return internal.trim(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return internal.trim(value, {
        dir: 'right'
    });
}
function validate(value) {
    try {
        assert(value);
        return true;
    } catch  {
        return false;
    }
}
class InvalidBytesBooleanError extends Errors.BaseError {
    constructor(bytes){
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
exports.InvalidBytesBooleanError = InvalidBytesBooleanError;
class InvalidBytesTypeError extends Errors.BaseError {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? Json.stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: [
                'Bytes values must be of type `Bytes`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
exports.InvalidBytesTypeError = InvalidBytesTypeError;
class SizeOverflowError extends Errors.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
exports.SizeOverflowError = SizeOverflowError;
class SliceOffsetOutOfBoundsError extends Errors.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
exports.SliceOffsetOutOfBoundsError = SliceOffsetOutOfBoundsError;
class SizeExceedsPaddingSizeError extends Errors.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
}
exports.SizeExceedsPaddingSizeError = SizeExceedsPaddingSizeError; //# sourceMappingURL=Bytes.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeExceedsPaddingSizeError = exports.SliceOffsetOutOfBoundsError = exports.SizeOverflowError = exports.InvalidLengthError = exports.InvalidHexValueError = exports.InvalidHexTypeError = exports.InvalidHexBooleanError = exports.IntegerOutOfRangeError = void 0;
exports.assert = assert;
exports.concat = concat;
exports.from = from;
exports.fromBoolean = fromBoolean;
exports.fromBytes = fromBytes;
exports.fromNumber = fromNumber;
exports.fromString = fromString;
exports.isEqual = isEqual;
exports.padLeft = padLeft;
exports.padRight = padRight;
exports.random = random;
exports.slice = slice;
exports.size = size;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.toBigInt = toBigInt;
exports.toBoolean = toBoolean;
exports.toBytes = toBytes;
exports.toNumber = toNumber;
exports.toString = toString;
exports.validate = validate;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/abstract/utils.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Json = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Json.js [app-ssr] (ecmascript)");
const internal_bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/bytes.js [app-ssr] (ecmascript)");
const internal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/hex.js [app-ssr] (ecmascript)");
const encoder = new TextEncoder();
const hexes = Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value) throw new InvalidHexTypeError(value);
    if (typeof value !== 'string') throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x')) throw new InvalidHexValueError(value);
}
function concat(...values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
}
function from(value) {
    if (value instanceof Uint8Array) return fromBytes(value);
    if (Array.isArray(value)) return fromBytes(new Uint8Array(value));
    return value;
}
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        internal.assertSize(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
function fromBytes(value, options = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++)string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        internal.assertSize(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value_ > maxValue || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size) return padLeft(hex, size);
    return hex;
}
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
function isEqual(hexA, hexB) {
    return (0, utils_1.equalBytes)(Bytes.fromHex(hexA), Bytes.fromHex(hexB));
}
function padLeft(value, size) {
    return internal.pad(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return internal.pad(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return fromBytes(Bytes.random(length));
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    internal.assertStartOffset(value, start);
    const value_ = `0x${value.replace('0x', '').slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict) internal.assertEndOffset(value_, start, end);
    return value_;
}
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
    return internal.trim(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return internal.trim(value, {
        dir: 'right'
    });
}
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size) internal.assertSize(hex, options.size);
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << BigInt(size) * 8n) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed) return value;
    return value - max_unsigned - 1n;
}
function toBoolean(hex, options = {}) {
    if (options.size) internal.assertSize(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x') return false;
    if (hex_ === '0x1') return true;
    throw new InvalidHexBooleanError(hex);
}
function toBytes(hex, options = {}) {
    return Bytes.fromHex(hex, options);
}
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size) return Number(hex);
    return Number(toBigInt(hex, options));
}
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = Bytes.fromHex(hex);
    if (size) {
        internal_bytes.assertSize(bytes, size);
        bytes = Bytes.trimRight(bytes);
    }
    return new TextDecoder().decode(bytes);
}
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class IntegerOutOfRangeError extends Errors.BaseError {
    constructor({ max, min, signed, size, value }){
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
exports.IntegerOutOfRangeError = IntegerOutOfRangeError;
class InvalidHexBooleanError extends Errors.BaseError {
    constructor(hex){
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
exports.InvalidHexBooleanError = InvalidHexBooleanError;
class InvalidHexTypeError extends Errors.BaseError {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? Json.stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: [
                'Hex types must be represented as `"0x${string}"`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
exports.InvalidHexTypeError = InvalidHexTypeError;
class InvalidHexValueError extends Errors.BaseError {
    constructor(value){
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
exports.InvalidHexValueError = InvalidHexValueError;
class InvalidLengthError extends Errors.BaseError {
    constructor(value){
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: [
                'It must be an even length.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
exports.InvalidLengthError = InvalidLengthError;
class SizeOverflowError extends Errors.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
exports.SizeOverflowError = SizeOverflowError;
class SliceOffsetOutOfBoundsError extends Errors.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
exports.SliceOffsetOutOfBoundsError = SliceOffsetOutOfBoundsError;
class SizeExceedsPaddingSizeError extends Errors.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
}
exports.SizeExceedsPaddingSizeError = SizeExceedsPaddingSizeError; //# sourceMappingURL=Hex.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Withdrawal.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromRpc = fromRpc;
exports.toRpc = toRpc;
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
function fromRpc(withdrawal) {
    return {
        ...withdrawal,
        amount: BigInt(withdrawal.amount),
        index: Number(withdrawal.index),
        validatorIndex: Number(withdrawal.validatorIndex)
    };
}
function toRpc(withdrawal) {
    return {
        address: withdrawal.address,
        amount: Hex.fromNumber(withdrawal.amount),
        index: Hex.fromNumber(withdrawal.index),
        validatorIndex: Hex.fromNumber(withdrawal.validatorIndex)
    };
} //# sourceMappingURL=Withdrawal.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/BlockOverrides.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromRpc = fromRpc;
exports.toRpc = toRpc;
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Withdrawal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Withdrawal.js [app-ssr] (ecmascript)");
function fromRpc(rpcBlockOverrides) {
    return {
        ...rpcBlockOverrides.baseFeePerGas && {
            baseFeePerGas: BigInt(rpcBlockOverrides.baseFeePerGas)
        },
        ...rpcBlockOverrides.blobBaseFee && {
            blobBaseFee: BigInt(rpcBlockOverrides.blobBaseFee)
        },
        ...rpcBlockOverrides.feeRecipient && {
            feeRecipient: rpcBlockOverrides.feeRecipient
        },
        ...rpcBlockOverrides.gasLimit && {
            gasLimit: BigInt(rpcBlockOverrides.gasLimit)
        },
        ...rpcBlockOverrides.number && {
            number: BigInt(rpcBlockOverrides.number)
        },
        ...rpcBlockOverrides.prevRandao && {
            prevRandao: BigInt(rpcBlockOverrides.prevRandao)
        },
        ...rpcBlockOverrides.time && {
            time: BigInt(rpcBlockOverrides.time)
        },
        ...rpcBlockOverrides.withdrawals && {
            withdrawals: rpcBlockOverrides.withdrawals.map(Withdrawal.fromRpc)
        }
    };
}
function toRpc(blockOverrides) {
    return {
        ...typeof blockOverrides.baseFeePerGas === 'bigint' && {
            baseFeePerGas: Hex.fromNumber(blockOverrides.baseFeePerGas)
        },
        ...typeof blockOverrides.blobBaseFee === 'bigint' && {
            blobBaseFee: Hex.fromNumber(blockOverrides.blobBaseFee)
        },
        ...typeof blockOverrides.feeRecipient === 'string' && {
            feeRecipient: blockOverrides.feeRecipient
        },
        ...typeof blockOverrides.gasLimit === 'bigint' && {
            gasLimit: Hex.fromNumber(blockOverrides.gasLimit)
        },
        ...typeof blockOverrides.number === 'bigint' && {
            number: Hex.fromNumber(blockOverrides.number)
        },
        ...typeof blockOverrides.prevRandao === 'bigint' && {
            prevRandao: Hex.fromNumber(blockOverrides.prevRandao)
        },
        ...typeof blockOverrides.time === 'bigint' && {
            time: Hex.fromNumber(blockOverrides.time)
        },
        ...blockOverrides.withdrawals && {
            withdrawals: blockOverrides.withdrawals.map(Withdrawal.toRpc)
        }
    };
} //# sourceMappingURL=BlockOverrides.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak256 = keccak256;
exports.ripemd160 = ripemd160;
exports.sha256 = sha256;
exports.validate = validate;
const ripemd160_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/ripemd160.js [app-ssr] (ecmascript)");
const sha3_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/sha3.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, sha3_1.keccak_256)(Bytes.from(value));
    if (as === 'Bytes') return bytes;
    return Hex.fromBytes(bytes);
}
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, ripemd160_1.ripemd160)(Bytes.from(value));
    if (as === 'Bytes') return bytes;
    return Hex.fromBytes(bytes);
}
function sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, sha256_1.sha256)(Bytes.from(value));
    if (as === 'Bytes') return bytes;
    return Hex.fromBytes(bytes);
}
function validate(value) {
    return Hex.validate(value) && Hex.size(value) === 32;
} //# sourceMappingURL=Hash.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/lru.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Caches.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checksum = void 0;
exports.clear = clear;
const lru_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/lru.js [app-ssr] (ecmascript)");
const caches = {
    checksum: new lru_js_1.LruMap(8192)
};
exports.checksum = caches.checksum;
function clear() {
    for (const cache of Object.values(caches))cache.clear();
} //# sourceMappingURL=Caches.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/PublicKey.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidSerializedSizeError = exports.InvalidUncompressedPrefixError = exports.InvalidCompressedPrefixError = exports.InvalidPrefixError = exports.InvalidError = void 0;
exports.assert = assert;
exports.compress = compress;
exports.from = from;
exports.fromBytes = fromBytes;
exports.fromHex = fromHex;
exports.toBytes = toBytes;
exports.toHex = toHex;
exports.validate = validate;
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Json = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Json.js [app-ssr] (ecmascript)");
function assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    if (compressed === false || typeof x === 'bigint' && typeof y === 'bigint') {
        if (prefix !== 4) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidUncompressedPrefixError()
        });
        return;
    }
    if (compressed === true || typeof x === 'bigint' && typeof y === 'undefined') {
        if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidCompressedPrefixError()
        });
        return;
    }
    throw new InvalidError({
        publicKey
    });
}
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x
    };
}
function from(value) {
    const publicKey = (()=>{
        if (Hex.validate(value)) return fromHex(value);
        if (Bytes.validate(value)) return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint') return {
            prefix: prefix ?? 0x04,
            x,
            y
        };
        return {
            prefix,
            x
        };
    })();
    assert(publicKey);
    return publicKey;
}
function fromBytes(publicKey) {
    return fromHex(Hex.fromBytes(publicKey));
}
function fromHex(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError({
        publicKey
    });
    if (publicKey.length === 130) {
        const x = BigInt(Hex.slice(publicKey, 0, 32));
        const y = BigInt(Hex.slice(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number(Hex.slice(publicKey, 0, 1));
        const x = BigInt(Hex.slice(publicKey, 1, 33));
        const y = BigInt(Hex.slice(publicKey, 33, 65));
        return {
            prefix,
            x,
            y
        };
    }
    const prefix = Number(Hex.slice(publicKey, 0, 1));
    const x = BigInt(Hex.slice(publicKey, 1, 33));
    return {
        prefix,
        x
    };
}
function toBytes(publicKey, options = {}) {
    return Bytes.fromHex(toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
    assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = Hex.concat(includePrefix ? Hex.fromNumber(prefix, {
        size: 1
    }) : '0x', Hex.fromNumber(x, {
        size: 32
    }), typeof y === 'bigint' ? Hex.fromNumber(y, {
        size: 32
    }) : '0x');
    return publicKey_;
}
function validate(publicKey, options = {}) {
    try {
        assert(publicKey, options);
        return true;
    } catch (error) {
        return false;
    }
}
class InvalidError extends Errors.BaseError {
    constructor({ publicKey }){
        super(`Value \`${Json.stringify(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
exports.InvalidError = InvalidError;
class InvalidPrefixError extends Errors.BaseError {
    constructor({ prefix, cause }){
        super(`Prefix "${prefix}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
exports.InvalidPrefixError = InvalidPrefixError;
class InvalidCompressedPrefixError extends Errors.BaseError {
    constructor(){
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
exports.InvalidCompressedPrefixError = InvalidCompressedPrefixError;
class InvalidUncompressedPrefixError extends Errors.BaseError {
    constructor(){
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
exports.InvalidUncompressedPrefixError = InvalidUncompressedPrefixError;
class InvalidSerializedSizeError extends Errors.BaseError {
    constructor({ publicKey }){
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${Hex.size(Hex.from(publicKey))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
}
exports.InvalidSerializedSizeError = InvalidSerializedSizeError; //# sourceMappingURL=PublicKey.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Address.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidChecksumError = exports.InvalidInputError = exports.InvalidAddressError = void 0;
exports.assert = assert;
exports.checksum = checksum;
exports.from = from;
exports.fromPublicKey = fromPublicKey;
exports.isEqual = isEqual;
exports.validate = validate;
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Caches = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Caches.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hash = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hash.js [app-ssr] (ecmascript)");
const PublicKey = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/PublicKey.js [app-ssr] (ecmascript)");
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value)) throw new InvalidAddressError({
        address: value,
        cause: new InvalidInputError()
    });
    if (strict) {
        if (value.toLowerCase() === value) return;
        if (checksum(value) !== value) throw new InvalidAddressError({
            address: value,
            cause: new InvalidChecksumError()
        });
    }
}
function checksum(address) {
    if (Caches.checksum.has(address)) return Caches.checksum.get(address);
    assert(address, {
        strict: false
    });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = Hash.keccak256(Bytes.fromString(hexAddress), {
        as: 'Bytes'
    });
    const characters = hexAddress.split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    Caches.checksum.set(address, result);
    return result;
}
function from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    assert(address);
    if (checksumVal) return checksum(address);
    return address;
}
function fromPublicKey(publicKey, options = {}) {
    const address = Hash.keccak256(`0x${PublicKey.toHex(publicKey).slice(4)}`).substring(26);
    return from(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
    assert(addressA, {
        strict: false
    });
    assert(addressB, {
        strict: false
    });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        assert(address, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class InvalidAddressError extends Errors.BaseError {
    constructor({ address, cause }){
        super(`Address "${address}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
exports.InvalidAddressError = InvalidAddressError;
class InvalidInputError extends Errors.BaseError {
    constructor(){
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
exports.InvalidInputError = InvalidInputError;
class InvalidChecksumError extends Errors.BaseError {
    constructor(){
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
}
exports.InvalidChecksumError = InvalidChecksumError; //# sourceMappingURL=Address.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/abiItem.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeSignature = normalizeSignature;
exports.isArgOfType = isArgOfType;
exports.getAmbiguousTypes = getAmbiguousTypes;
const Address = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Address.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
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
                'error',
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
    if (!valid) throw new Errors.BaseError('Unable to normalize signature.');
    return result;
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return Address.validate(arg, {
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
            if (types.includes('address') && types.includes('string')) return Address.validate(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return Address.validate(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiItem.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidSelectorSizeError = exports.NotFoundError = exports.AmbiguityError = void 0;
exports.format = format;
exports.from = from;
exports.fromAbi = fromAbi;
exports.getSelector = getSelector;
exports.getSignature = getSignature;
exports.getSignatureHash = getSignatureHash;
const abitype = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hash = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hash.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const internal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/abiItem.js [app-ssr] (ecmascript)");
function format(abiItem) {
    return abitype.formatAbiItem(abiItem);
}
function from(abiItem, options = {}) {
    const { prepare = true } = options;
    const item = (()=>{
        if (Array.isArray(abiItem)) return abitype.parseAbiItem(abiItem);
        if (typeof abiItem === 'string') return abitype.parseAbiItem(abiItem);
        return abiItem;
    })();
    return {
        ...item,
        ...prepare ? {
            hash: getSignatureHash(item)
        } : {}
    };
}
function fromAbi(abi, name, options) {
    const { args = [], prepare = true } = options ?? {};
    const isSelector = Hex.validate(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function' || abiItem.type === 'error') return getSelector(abiItem) === Hex.slice(name, 0, 4);
            if (abiItem.type === 'event') return getSignatureHash(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) throw new NotFoundError({
        name: name
    });
    if (abiItems.length === 1) return {
        ...abiItems[0],
        ...prepare ? {
            hash: getSignatureHash(abiItems[0])
        } : {}
    };
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return {
                ...abiItem,
                ...prepare ? {
                    hash: getSignatureHash(abiItem)
                } : {}
            };
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return internal.isArgOfType(arg, abiParameter);
        });
        if (matched) {
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = internal.getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new AmbiguityError({
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
    const abiItem = (()=>{
        if (matchedAbiItem) return matchedAbiItem;
        const [abiItem, ...overloads] = abiItems;
        return {
            ...abiItem,
            overloads
        };
    })();
    if (!abiItem) throw new NotFoundError({
        name: name
    });
    return {
        ...abiItem,
        ...prepare ? {
            hash: getSignatureHash(abiItem)
        } : {}
    };
}
function getSelector(abiItem) {
    return Hex.slice(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
    const signature = (()=>{
        if (typeof abiItem === 'string') return abiItem;
        return abitype.formatAbiItem(abiItem);
    })();
    return internal.normalizeSignature(signature);
}
function getSignatureHash(abiItem) {
    if (typeof abiItem !== 'string' && 'hash' in abiItem && abiItem.hash) return abiItem.hash;
    return Hash.keccak256(Hex.fromString(getSignature(abiItem)));
}
class AmbiguityError extends Errors.BaseError {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
                `\`${x.type}\` in \`${internal.normalizeSignature(abitype.formatAbiItem(x.abiItem))}\`, and`,
                `\`${y.type}\` in \`${internal.normalizeSignature(abitype.formatAbiItem(y.abiItem))}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.AmbiguityError'
        });
    }
}
exports.AmbiguityError = AmbiguityError;
class NotFoundError extends Errors.BaseError {
    constructor({ name, data, type = 'item' }){
        const selector = (()=>{
            if (name) return ` with name "${name}"`;
            if (data) return ` with data "${data}"`;
            return '';
        })();
        super(`ABI ${type}${selector} not found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.NotFoundError'
        });
    }
}
exports.NotFoundError = NotFoundError;
class InvalidSelectorSizeError extends Errors.BaseError {
    constructor({ data }){
        super(`Selector size is invalid. Expected 4 bytes. Received ${Hex.size(data)} bytes ("${data}").`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.InvalidSelectorSizeError'
        });
    }
}
exports.InvalidSelectorSizeError = InvalidSelectorSizeError; //# sourceMappingURL=AbiItem.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Solidity.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = exports.maxInt8 = exports.integerRegex = exports.bytesRegex = exports.arrayRegex = void 0;
exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = exports.minInt144 = exports.minInt136 = exports.minInt128 = void 0;
exports.arrayRegex = /^(.*)\[([0-9]*)\]$/;
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
exports.maxInt8 = 2n ** (8n - 1n) - 1n;
exports.maxInt16 = 2n ** (16n - 1n) - 1n;
exports.maxInt24 = 2n ** (24n - 1n) - 1n;
exports.maxInt32 = 2n ** (32n - 1n) - 1n;
exports.maxInt40 = 2n ** (40n - 1n) - 1n;
exports.maxInt48 = 2n ** (48n - 1n) - 1n;
exports.maxInt56 = 2n ** (56n - 1n) - 1n;
exports.maxInt64 = 2n ** (64n - 1n) - 1n;
exports.maxInt72 = 2n ** (72n - 1n) - 1n;
exports.maxInt80 = 2n ** (80n - 1n) - 1n;
exports.maxInt88 = 2n ** (88n - 1n) - 1n;
exports.maxInt96 = 2n ** (96n - 1n) - 1n;
exports.maxInt104 = 2n ** (104n - 1n) - 1n;
exports.maxInt112 = 2n ** (112n - 1n) - 1n;
exports.maxInt120 = 2n ** (120n - 1n) - 1n;
exports.maxInt128 = 2n ** (128n - 1n) - 1n;
exports.maxInt136 = 2n ** (136n - 1n) - 1n;
exports.maxInt144 = 2n ** (144n - 1n) - 1n;
exports.maxInt152 = 2n ** (152n - 1n) - 1n;
exports.maxInt160 = 2n ** (160n - 1n) - 1n;
exports.maxInt168 = 2n ** (168n - 1n) - 1n;
exports.maxInt176 = 2n ** (176n - 1n) - 1n;
exports.maxInt184 = 2n ** (184n - 1n) - 1n;
exports.maxInt192 = 2n ** (192n - 1n) - 1n;
exports.maxInt200 = 2n ** (200n - 1n) - 1n;
exports.maxInt208 = 2n ** (208n - 1n) - 1n;
exports.maxInt216 = 2n ** (216n - 1n) - 1n;
exports.maxInt224 = 2n ** (224n - 1n) - 1n;
exports.maxInt232 = 2n ** (232n - 1n) - 1n;
exports.maxInt240 = 2n ** (240n - 1n) - 1n;
exports.maxInt248 = 2n ** (248n - 1n) - 1n;
exports.maxInt256 = 2n ** (256n - 1n) - 1n;
exports.minInt8 = -(2n ** (8n - 1n));
exports.minInt16 = -(2n ** (16n - 1n));
exports.minInt24 = -(2n ** (24n - 1n));
exports.minInt32 = -(2n ** (32n - 1n));
exports.minInt40 = -(2n ** (40n - 1n));
exports.minInt48 = -(2n ** (48n - 1n));
exports.minInt56 = -(2n ** (56n - 1n));
exports.minInt64 = -(2n ** (64n - 1n));
exports.minInt72 = -(2n ** (72n - 1n));
exports.minInt80 = -(2n ** (80n - 1n));
exports.minInt88 = -(2n ** (88n - 1n));
exports.minInt96 = -(2n ** (96n - 1n));
exports.minInt104 = -(2n ** (104n - 1n));
exports.minInt112 = -(2n ** (112n - 1n));
exports.minInt120 = -(2n ** (120n - 1n));
exports.minInt128 = -(2n ** (128n - 1n));
exports.minInt136 = -(2n ** (136n - 1n));
exports.minInt144 = -(2n ** (144n - 1n));
exports.minInt152 = -(2n ** (152n - 1n));
exports.minInt160 = -(2n ** (160n - 1n));
exports.minInt168 = -(2n ** (168n - 1n));
exports.minInt176 = -(2n ** (176n - 1n));
exports.minInt184 = -(2n ** (184n - 1n));
exports.minInt192 = -(2n ** (192n - 1n));
exports.minInt200 = -(2n ** (200n - 1n));
exports.minInt208 = -(2n ** (208n - 1n));
exports.minInt216 = -(2n ** (216n - 1n));
exports.minInt224 = -(2n ** (224n - 1n));
exports.minInt232 = -(2n ** (232n - 1n));
exports.minInt240 = -(2n ** (240n - 1n));
exports.minInt248 = -(2n ** (248n - 1n));
exports.minInt256 = -(2n ** (256n - 1n));
exports.maxUint8 = 2n ** 8n - 1n;
exports.maxUint16 = 2n ** 16n - 1n;
exports.maxUint24 = 2n ** 24n - 1n;
exports.maxUint32 = 2n ** 32n - 1n;
exports.maxUint40 = 2n ** 40n - 1n;
exports.maxUint48 = 2n ** 48n - 1n;
exports.maxUint56 = 2n ** 56n - 1n;
exports.maxUint64 = 2n ** 64n - 1n;
exports.maxUint72 = 2n ** 72n - 1n;
exports.maxUint80 = 2n ** 80n - 1n;
exports.maxUint88 = 2n ** 88n - 1n;
exports.maxUint96 = 2n ** 96n - 1n;
exports.maxUint104 = 2n ** 104n - 1n;
exports.maxUint112 = 2n ** 112n - 1n;
exports.maxUint120 = 2n ** 120n - 1n;
exports.maxUint128 = 2n ** 128n - 1n;
exports.maxUint136 = 2n ** 136n - 1n;
exports.maxUint144 = 2n ** 144n - 1n;
exports.maxUint152 = 2n ** 152n - 1n;
exports.maxUint160 = 2n ** 160n - 1n;
exports.maxUint168 = 2n ** 168n - 1n;
exports.maxUint176 = 2n ** 176n - 1n;
exports.maxUint184 = 2n ** 184n - 1n;
exports.maxUint192 = 2n ** 192n - 1n;
exports.maxUint200 = 2n ** 200n - 1n;
exports.maxUint208 = 2n ** 208n - 1n;
exports.maxUint216 = 2n ** 216n - 1n;
exports.maxUint224 = 2n ** 224n - 1n;
exports.maxUint232 = 2n ** 232n - 1n;
exports.maxUint240 = 2n ** 240n - 1n;
exports.maxUint248 = 2n ** 248n - 1n;
exports.maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=Solidity.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/abiParameters.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeParameter = decodeParameter;
exports.decodeAddress = decodeAddress;
exports.decodeArray = decodeArray;
exports.decodeBool = decodeBool;
exports.decodeBytes = decodeBytes;
exports.decodeNumber = decodeNumber;
exports.decodeTuple = decodeTuple;
exports.decodeString = decodeString;
exports.prepareParameters = prepareParameters;
exports.prepareParameter = prepareParameter;
exports.encode = encode;
exports.encodeAddress = encodeAddress;
exports.encodeArray = encodeArray;
exports.encodeBytes = encodeBytes;
exports.encodeBoolean = encodeBoolean;
exports.encodeNumber = encodeNumber;
exports.encodeString = encodeString;
exports.encodeTuple = encodeTuple;
exports.getArrayComponents = getArrayComponents;
exports.hasDynamicChild = hasDynamicChild;
const AbiParameters = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiParameters.js [app-ssr] (ecmascript)");
const Address = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Address.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Solidity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Solidity.js [app-ssr] (ecmascript)");
function decodeParameter(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            checksumAddress,
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        checksumAddress,
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor, {
        checksum: checksumAddress
    });
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new AbiParameters.InvalidTypeError(param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
    const { checksum = false } = options;
    const value = cursor.readBytes(32);
    const wrap = (address)=>checksum ? Address.checksum(address) : address;
    return [
        wrap(Hex.fromBytes(Bytes.slice(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, options) {
    const { checksumAddress, length, staticPosition } = options;
    if (!length) {
        const offset = Bytes.toNumber(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        cursor.setPosition(start);
        const length = Bytes.toNumber(cursor.readBytes(sizeOfLength));
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                checksumAddress,
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
        const offset = Bytes.toNumber(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                checksumAddress,
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
            checksumAddress,
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
        Bytes.toBoolean(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        const offset = Bytes.toNumber(cursor.readBytes(32));
        cursor.setPosition(staticPosition + offset);
        const length = Bytes.toNumber(cursor.readBytes(32));
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
            Hex.fromBytes(data),
            32
        ];
    }
    const value = Hex.fromBytes(cursor.readBytes(Number.parseInt(size), 32));
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
        size > 48 ? Bytes.toBigInt(value, {
            signed
        }) : Bytes.toNumber(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    if (hasDynamicChild(param)) {
        const offset = Bytes.toNumber(cursor.readBytes(sizeOfOffset));
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                checksumAddress,
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
            checksumAddress,
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
    const offset = Bytes.toNumber(cursor.readBytes(32));
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = Bytes.toNumber(cursor.readBytes(32));
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = Bytes.toString(Bytes.trimLeft(data));
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function prepareParameters({ checksumAddress, parameters, values }) {
    const preparedParameters = [];
    for(let i = 0; i < parameters.length; i++){
        preparedParameters.push(prepareParameter({
            checksumAddress,
            parameter: parameters[i],
            value: values[i]
        }));
    }
    return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
    const parameter = parameter_;
    const arrayComponents = getArrayComponents(parameter.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            checksumAddress,
            length,
            parameter: {
                ...parameter,
                type
            }
        });
    }
    if (parameter.type === 'tuple') {
        return encodeTuple(value, {
            checksumAddress,
            parameter: parameter
        });
    }
    if (parameter.type === 'address') {
        return encodeAddress(value, {
            checksum: checksumAddress
        });
    }
    if (parameter.type === 'bool') {
        return encodeBoolean(value);
    }
    if (parameter.type.startsWith('uint') || parameter.type.startsWith('int')) {
        const signed = parameter.type.startsWith('int');
        const [, , size = '256'] = Solidity_js_1.integerRegex.exec(parameter.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (parameter.type.startsWith('bytes')) {
        return encodeBytes(value, {
            type: parameter.type
        });
    }
    if (parameter.type === 'string') {
        return encodeString(value);
    }
    throw new AbiParameters.InvalidTypeError(parameter.type);
}
function encode(preparedParameters) {
    let staticSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) staticSize += 32;
        else staticSize += Hex.size(encoded);
    }
    const staticParameters = [];
    const dynamicParameters = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) {
            staticParameters.push(Hex.fromNumber(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParameters.push(encoded);
            dynamicSize += Hex.size(encoded);
        } else {
            staticParameters.push(encoded);
        }
    }
    return Hex.concat(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
    const { checksum = false } = options;
    Address.assert(value, {
        strict: checksum
    });
    return {
        dynamic: false,
        encoded: Hex.padLeft(value.toLowerCase())
    };
}
function encodeArray(value, options) {
    const { checksumAddress, length, parameter } = options;
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new AbiParameters.InvalidArrayError(value);
    if (!dynamic && value.length !== length) throw new AbiParameters.ArrayLengthMismatchError({
        expectedLength: length,
        givenLength: value.length,
        type: `${parameter.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParameters = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParameters.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encode(preparedParameters);
        if (dynamic) {
            const length = Hex.fromNumber(preparedParameters.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParameters.length > 0 ? Hex.concat(length, data) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: Hex.concat(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { type }) {
    const [, parametersize] = type.split('bytes');
    const bytesSize = Hex.size(value);
    if (!parametersize) {
        let value_ = value;
        if (bytesSize % 32 !== 0) value_ = Hex.padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
        return {
            dynamic: true,
            encoded: Hex.concat(Hex.padLeft(Hex.fromNumber(bytesSize, {
                size: 32
            })), value_)
        };
    }
    if (bytesSize !== Number.parseInt(parametersize)) throw new AbiParameters.BytesSizeMismatchError({
        expectedSize: Number.parseInt(parametersize),
        value
    });
    return {
        dynamic: false,
        encoded: Hex.padRight(value)
    };
}
function encodeBoolean(value) {
    if (typeof value !== 'boolean') throw new Errors.BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: Hex.padLeft(Hex.fromBoolean(value))
    };
}
function encodeNumber(value, { signed, size }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new Hex.IntegerOutOfRangeError({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: Hex.fromNumber(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = Hex.fromString(value);
    const partsLength = Math.ceil(Hex.size(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push(Hex.padRight(Hex.slice(hexValue, i * 32, (i + 1) * 32)));
    }
    return {
        dynamic: true,
        encoded: Hex.concat(Hex.padRight(Hex.fromNumber(Hex.size(hexValue), {
            size: 32
        })), ...parts)
    };
}
function encodeTuple(value, options) {
    const { checksumAddress, parameter } = options;
    let dynamic = false;
    const preparedParameters = [];
    for(let i = 0; i < parameter.components.length; i++){
        const param_ = parameter.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter: param_,
            value: value[index]
        });
        preparedParameters.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encode(preparedParameters) : Hex.concat(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=abiParameters.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/cursor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecursiveReadLimitExceededError = exports.PositionOutOfBoundsError = exports.NegativeOffsetError = void 0;
exports.create = create;
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
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
        if (offset < 0) throw new NegativeOffsetError({
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
function create(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
class NegativeOffsetError extends Errors.BaseError {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.NegativeOffsetError'
        });
    }
}
exports.NegativeOffsetError = NegativeOffsetError;
class PositionOutOfBoundsError extends Errors.BaseError {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.PositionOutOfBoundsError'
        });
    }
}
exports.PositionOutOfBoundsError = PositionOutOfBoundsError;
class RecursiveReadLimitExceededError extends Errors.BaseError {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.RecursiveReadLimitExceededError'
        });
    }
}
exports.RecursiveReadLimitExceededError = RecursiveReadLimitExceededError; //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiParameters.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidTypeError = exports.InvalidArrayError = exports.LengthMismatchError = exports.BytesSizeMismatchError = exports.ArrayLengthMismatchError = exports.ZeroDataError = exports.DataSizeTooSmallError = void 0;
exports.decode = decode;
exports.encode = encode;
exports.encodePacked = encodePacked;
exports.format = format;
exports.from = from;
const abitype = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const Address = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Address.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Solidity = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Solidity.js [app-ssr] (ecmascript)");
const internal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/abiParameters.js [app-ssr] (ecmascript)");
const Cursor = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/cursor.js [app-ssr] (ecmascript)");
function decode(parameters, data, options = {}) {
    const { as = 'Array', checksumAddress = false } = options;
    const bytes = typeof data === 'string' ? Bytes.fromHex(data) : data;
    const cursor = Cursor.create(bytes);
    if (Bytes.size(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
    if (Bytes.size(bytes) && Bytes.size(bytes) < 32) throw new DataSizeTooSmallError({
        data: typeof data === 'string' ? data : Hex.fromBytes(data),
        parameters: parameters,
        size: Bytes.size(bytes)
    });
    let consumed = 0;
    const values = as === 'Array' ? [] : {};
    for(let i = 0; i < parameters.length; ++i){
        const param = parameters[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = internal.decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: 0
        });
        consumed += consumed_;
        if (as === 'Array') values.push(data);
        else values[param.name ?? i] = data;
    }
    return values;
}
function encode(parameters, values, options) {
    const { checksumAddress = false } = options ?? {};
    if (parameters.length !== values.length) throw new LengthMismatchError({
        expectedLength: parameters.length,
        givenLength: values.length
    });
    const preparedParameters = internal.prepareParameters({
        checksumAddress,
        parameters: parameters,
        values: values
    });
    const data = internal.encode(preparedParameters);
    if (data.length === 0) return '0x';
    return data;
}
function encodePacked(types, values) {
    if (types.length !== values.length) throw new LengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encodePacked.encode(type, value));
    }
    return Hex.concat(...data);
}
(function(encodePacked) {
    function encode(type, value, isArray = false) {
        if (type === 'address') {
            const address = value;
            Address.assert(address);
            return Hex.padLeft(address.toLowerCase(), isArray ? 32 : 0);
        }
        if (type === 'string') return Hex.fromString(value);
        if (type === 'bytes') return value;
        if (type === 'bool') return Hex.padLeft(Hex.fromBoolean(value), isArray ? 32 : 1);
        const intMatch = type.match(Solidity.integerRegex);
        if (intMatch) {
            const [_type, baseType, bits = '256'] = intMatch;
            const size = Number.parseInt(bits) / 8;
            return Hex.fromNumber(value, {
                size: isArray ? 32 : size,
                signed: baseType === 'int'
            });
        }
        const bytesMatch = type.match(Solidity.bytesRegex);
        if (bytesMatch) {
            const [_type, size] = bytesMatch;
            if (Number.parseInt(size) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
                expectedSize: Number.parseInt(size),
                value: value
            });
            return Hex.padRight(value, isArray ? 32 : 0);
        }
        const arrayMatch = type.match(Solidity.arrayRegex);
        if (arrayMatch && Array.isArray(value)) {
            const [_type, childType] = arrayMatch;
            const data = [];
            for(let i = 0; i < value.length; i++){
                data.push(encode(childType, value[i], true));
            }
            if (data.length === 0) return '0x';
            return Hex.concat(...data);
        }
        throw new InvalidTypeError(type);
    }
    encodePacked.encode = encode;
})(encodePacked || (exports.encodePacked = encodePacked = {}));
function format(parameters) {
    return abitype.formatAbiParameters(parameters);
}
function from(parameters) {
    if (Array.isArray(parameters) && typeof parameters[0] === 'string') return abitype.parseAbiParameters(parameters);
    if (typeof parameters === 'string') return abitype.parseAbiParameters(parameters);
    return parameters;
}
class DataSizeTooSmallError extends Errors.BaseError {
    constructor({ data, parameters, size }){
        super(`Data size of ${size} bytes is too small for given parameters.`, {
            metaMessages: [
                `Params: (${abitype.formatAbiParameters(parameters)})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.DataSizeTooSmallError'
        });
    }
}
exports.DataSizeTooSmallError = DataSizeTooSmallError;
class ZeroDataError extends Errors.BaseError {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ZeroDataError'
        });
    }
}
exports.ZeroDataError = ZeroDataError;
class ArrayLengthMismatchError extends Errors.BaseError {
    constructor({ expectedLength, givenLength, type }){
        super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ArrayLengthMismatchError'
        });
    }
}
exports.ArrayLengthMismatchError = ArrayLengthMismatchError;
class BytesSizeMismatchError extends Errors.BaseError {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${Hex.size(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.BytesSizeMismatchError'
        });
    }
}
exports.BytesSizeMismatchError = BytesSizeMismatchError;
class LengthMismatchError extends Errors.BaseError {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding parameters/values length mismatch.',
            `Expected length (parameters): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.LengthMismatchError'
        });
    }
}
exports.LengthMismatchError = LengthMismatchError;
class InvalidArrayError extends Errors.BaseError {
    constructor(value){
        super(`Value \`${value}\` is not a valid array.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidArrayError'
        });
    }
}
exports.InvalidArrayError = InvalidArrayError;
class InvalidTypeError extends Errors.BaseError {
    constructor(type){
        super(`Type \`${type}\` is not a valid ABI Type.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidTypeError'
        });
    }
}
exports.InvalidTypeError = InvalidTypeError; //# sourceMappingURL=AbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiConstructor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = decode;
exports.encode = encode;
exports.format = format;
exports.from = from;
exports.fromAbi = fromAbi;
const abitype = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const AbiItem = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiItem.js [app-ssr] (ecmascript)");
const AbiParameters = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiParameters.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
function decode(abiConstructor, options) {
    const { bytecode } = options;
    if (abiConstructor.inputs.length === 0) return undefined;
    const data = options.data.replace(bytecode, '0x');
    return AbiParameters.decode(abiConstructor.inputs, data);
}
function encode(abiConstructor, options) {
    const { bytecode, args } = options;
    return Hex.concat(bytecode, abiConstructor.inputs?.length && args?.length ? AbiParameters.encode(abiConstructor.inputs, args) : '0x');
}
function format(abiConstructor) {
    return abitype.formatAbiItem(abiConstructor);
}
function from(abiConstructor) {
    return AbiItem.from(abiConstructor);
}
function fromAbi(abi) {
    const item = abi.find((item)=>item.type === 'constructor');
    if (!item) throw new AbiItem.NotFoundError({
        name: 'constructor'
    });
    return item;
} //# sourceMappingURL=AbiConstructor.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiFunction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeData = decodeData;
exports.decodeResult = decodeResult;
exports.encodeData = encodeData;
exports.encodeResult = encodeResult;
exports.format = format;
exports.from = from;
exports.fromAbi = fromAbi;
exports.getSelector = getSelector;
const abitype = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const AbiItem = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiItem.js [app-ssr] (ecmascript)");
const AbiParameters = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/AbiParameters.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
function decodeData(abiFunction, data) {
    const { overloads } = abiFunction;
    if (Hex.size(data) < 4) throw new AbiItem.InvalidSelectorSizeError({
        data
    });
    if (abiFunction.inputs.length === 0) return undefined;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], data) : abiFunction;
    if (Hex.size(data) <= 4) return undefined;
    return AbiParameters.decode(item.inputs, Hex.slice(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
    const values = AbiParameters.decode(abiFunction.outputs, data, options);
    if (values && Object.keys(values).length === 0) return undefined;
    if (values && Object.keys(values).length === 1) {
        if (Array.isArray(values)) return values[0];
        return Object.values(values)[0];
    }
    return values;
}
function encodeData(abiFunction, ...args) {
    const { overloads } = abiFunction;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], abiFunction.name, {
        args: args[0]
    }) : abiFunction;
    const selector = getSelector(item);
    const data = args.length > 0 ? AbiParameters.encode(item.inputs, args[0]) : undefined;
    return data ? Hex.concat(selector, data) : selector;
}
function encodeResult(abiFunction, output, options = {}) {
    const { as = 'Array' } = options;
    const values = (()=>{
        if (abiFunction.outputs.length === 1) return [
            output
        ];
        if (Array.isArray(output)) return output;
        if (as === 'Object') return Object.values(output);
        return [
            output
        ];
    })();
    return AbiParameters.encode(abiFunction.outputs, values);
}
function format(abiFunction) {
    return abitype.formatAbiItem(abiFunction);
}
function from(abiFunction, options = {}) {
    return AbiItem.from(abiFunction, options);
}
function fromAbi(abi, name, options) {
    const item = AbiItem.fromAbi(abi, name, options);
    if (item.type !== 'function') throw new AbiItem.NotFoundError({
        name,
        type: 'function'
    });
    return item;
}
function getSelector(abiItem) {
    return AbiItem.getSelector(abiItem);
} //# sourceMappingURL=AbiFunction.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Base64.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBytes = fromBytes;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.toBytes = toBytes;
exports.toHex = toHex;
exports.toString = toString;
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const integerToCharacter = Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i)=>[
        i,
        a.charCodeAt(0)
    ]));
const characterToInteger = {
    ...Object.fromEntries(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').map((a, i)=>[
            a.charCodeAt(0),
            i
        ])),
    ['='.charCodeAt(0)]: 0,
    ['-'.charCodeAt(0)]: 62,
    ['_'.charCodeAt(0)]: 63
};
function fromBytes(value, options = {}) {
    const { pad = true, url = false } = options;
    const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
    for(let i = 0, j = 0; j < value.length; i += 4, j += 3){
        const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
        encoded[i] = integerToCharacter[y >> 18];
        encoded[i + 1] = integerToCharacter[y >> 12 & 0x3f];
        encoded[i + 2] = integerToCharacter[y >> 6 & 0x3f];
        encoded[i + 3] = integerToCharacter[y & 0x3f];
    }
    const k = value.length % 3;
    const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
    let base64 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
    if (pad && k === 1) base64 += '==';
    if (pad && k === 2) base64 += '=';
    if (url) base64 = base64.replaceAll('+', '-').replaceAll('/', '_');
    return base64;
}
function fromHex(value, options = {}) {
    return fromBytes(Bytes.fromHex(value), options);
}
function fromString(value, options = {}) {
    return fromBytes(Bytes.fromString(value), options);
}
function toBytes(value) {
    const base64 = value.replace(/=+$/, '');
    const size = base64.length;
    const decoded = new Uint8Array(size + 3);
    encoder.encodeInto(base64 + '===', decoded);
    for(let i = 0, j = 0; i < base64.length; i += 4, j += 3){
        const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
        decoded[j] = x >> 16;
        decoded[j + 1] = x >> 8 & 0xff;
        decoded[j + 2] = x & 0xff;
    }
    const decodedSize = (size >> 2) * 3 + (size % 4 && size % 4 - 1);
    return new Uint8Array(decoded.buffer, 0, decodedSize);
}
function toHex(value) {
    return Hex.fromBytes(toBytes(value));
}
function toString(value) {
    return Bytes.toString(toBytes(value));
} //# sourceMappingURL=Base64.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/entropy.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extraEntropy = void 0;
exports.setExtraEntropy = setExtraEntropy;
exports.extraEntropy = false;
function setExtraEntropy(entropy) {
    exports.extraEntropy = entropy;
} //# sourceMappingURL=entropy.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/P256.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noble = void 0;
exports.getPublicKey = getPublicKey;
exports.randomPrivateKey = randomPrivateKey;
exports.recoverPublicKey = recoverPublicKey;
exports.sign = sign;
exports.verify = verify;
const p256_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/p256.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const PublicKey = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/PublicKey.js [app-ssr] (ecmascript)");
const Entropy = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/entropy.js [app-ssr] (ecmascript)");
exports.noble = p256_1.secp256r1;
function getPublicKey(options) {
    const { privateKey } = options;
    const point = p256_1.secp256r1.ProjectivePoint.fromPrivateKey(typeof privateKey === 'string' ? privateKey.slice(2) : Hex.fromBytes(privateKey).slice(2));
    return PublicKey.from(point);
}
function randomPrivateKey(options = {}) {
    const { as = 'Hex' } = options;
    const bytes = p256_1.secp256r1.utils.randomPrivateKey();
    if (as === 'Hex') return Hex.fromBytes(bytes);
    return bytes;
}
function recoverPublicKey(options) {
    const { payload, signature } = options;
    const { r, s, yParity } = signature;
    const signature_ = new p256_1.secp256r1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
    const payload_ = payload instanceof Uint8Array ? Hex.fromBytes(payload) : payload;
    const point = signature_.recoverPublicKey(payload_.substring(2));
    return PublicKey.from(point);
}
function sign(options) {
    const { extraEntropy = Entropy.extraEntropy, hash, payload, privateKey } = options;
    const { r, s, recovery } = p256_1.secp256r1.sign(payload instanceof Uint8Array ? payload : Bytes.fromHex(payload), privateKey instanceof Uint8Array ? privateKey : Bytes.fromHex(privateKey), {
        extraEntropy: typeof extraEntropy === 'boolean' ? extraEntropy : Hex.from(extraEntropy).slice(2),
        lowS: true,
        ...hash ? {
            prehash: true
        } : {}
    });
    return {
        r,
        s,
        yParity: recovery
    };
}
function verify(options) {
    const { hash, payload, publicKey, signature } = options;
    return p256_1.secp256r1.verify(signature, payload instanceof Uint8Array ? payload : Bytes.fromHex(payload), PublicKey.toHex(publicKey).substring(2), ...hash ? [
        {
            prehash: true,
            lowS: true
        }
    ] : []);
} //# sourceMappingURL=P256.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/webauthn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAsn1Signature = parseAsn1Signature;
exports.parseCredentialPublicKey = parseCredentialPublicKey;
const p256_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/p256.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const PublicKey = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/PublicKey.js [app-ssr] (ecmascript)");
const WebAuthnP256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/WebAuthnP256.js [app-ssr] (ecmascript)");
function parseAsn1Signature(bytes) {
    const r_start = bytes[4] === 0 ? 5 : 4;
    const r_end = r_start + 32;
    const s_start = bytes[r_end + 2] === 0 ? r_end + 3 : r_end + 2;
    const r = BigInt(Hex.fromBytes(bytes.slice(r_start, r_end)));
    const s = BigInt(Hex.fromBytes(bytes.slice(s_start)));
    return {
        r,
        s: s > p256_1.p256.CURVE.n / 2n ? p256_1.p256.CURVE.n - s : s
    };
}
async function parseCredentialPublicKey(response) {
    try {
        const publicKeyBuffer = response.getPublicKey();
        if (!publicKeyBuffer) throw new WebAuthnP256_js_1.CredentialCreationFailedError();
        const publicKeyBytes = new Uint8Array(publicKeyBuffer);
        const cryptoKey = await crypto.subtle.importKey('spki', new Uint8Array(publicKeyBytes), {
            name: 'ECDSA',
            namedCurve: 'P-256',
            hash: 'SHA-256'
        }, true, [
            'verify'
        ]);
        const publicKey = new Uint8Array(await crypto.subtle.exportKey('raw', cryptoKey));
        return PublicKey.from(publicKey);
    } catch (error) {
        if (error.message !== 'Permission denied to access object') throw error;
        const data = new Uint8Array(response.attestationObject);
        const coordinateLength = 0x20;
        const cborPrefix = 0x58;
        const findStart = (key)=>{
            const coordinate = new Uint8Array([
                key,
                cborPrefix,
                coordinateLength
            ]);
            for(let i = 0; i < data.length - coordinate.length; i++)if (coordinate.every((byte, j)=>data[i + j] === byte)) return i + coordinate.length;
            throw new WebAuthnP256_js_1.CredentialCreationFailedError();
        };
        const xStart = findStart(0x21);
        const yStart = findStart(0x22);
        return PublicKey.from(new Uint8Array([
            0x04,
            ...data.slice(xStart, xStart + coordinateLength),
            ...data.slice(yStart, yStart + coordinateLength)
        ]));
    }
} //# sourceMappingURL=webauthn.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/WebAuthnP256.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CredentialRequestFailedError = exports.CredentialCreationFailedError = exports.createChallenge = void 0;
exports.createCredential = createCredential;
exports.getAuthenticatorData = getAuthenticatorData;
exports.getClientDataJSON = getClientDataJSON;
exports.getCredentialCreationOptions = getCredentialCreationOptions;
exports.getCredentialRequestOptions = getCredentialRequestOptions;
exports.getSignPayload = getSignPayload;
exports.sign = sign;
exports.verify = verify;
const Base64 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Base64.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hash = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hash.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const P256 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/P256.js [app-ssr] (ecmascript)");
const internal = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/internal/webauthn.js [app-ssr] (ecmascript)");
exports.createChallenge = Uint8Array.from([
    105,
    171,
    180,
    181,
    160,
    222,
    75,
    198,
    42,
    42,
    32,
    31,
    141,
    37,
    186,
    233
]);
async function createCredential(options) {
    const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
    const creationOptions = getCredentialCreationOptions(rest);
    try {
        const credential = await createFn(creationOptions);
        if (!credential) throw new CredentialCreationFailedError();
        const response = credential.response;
        const publicKey = await internal.parseCredentialPublicKey(response);
        return {
            id: credential.id,
            publicKey,
            raw: credential
        };
    } catch (error) {
        throw new CredentialCreationFailedError({
            cause: error
        });
    }
}
function getAuthenticatorData(options = {}) {
    const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
    const rpIdHash = Hash.sha256(Hex.fromString(rpId));
    const flag_bytes = Hex.fromNumber(flag, {
        size: 1
    });
    const signCount_bytes = Hex.fromNumber(signCount, {
        size: 4
    });
    return Hex.concat(rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
    const { challenge, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
    return JSON.stringify({
        type: 'webauthn.get',
        challenge: Base64.fromHex(challenge, {
            url: true,
            pad: false
        }),
        origin,
        crossOrigin,
        ...extraClientData
    });
}
function getCredentialCreationOptions(options) {
    const { attestation = 'none', authenticatorSelection = {
        residentKey: 'preferred',
        requireResidentKey: false,
        userVerification: 'required'
    }, challenge = exports.createChallenge, excludeCredentialIds, name: name_, rp = {
        id: window.location.hostname,
        name: window.document.title
    }, user, extensions } = options;
    const name = user?.name ?? name_;
    return {
        publicKey: {
            attestation,
            authenticatorSelection,
            challenge,
            ...excludeCredentialIds ? {
                excludeCredentials: excludeCredentialIds?.map((id)=>({
                        id: Base64.toBytes(id),
                        type: 'public-key'
                    }))
            } : {},
            pubKeyCredParams: [
                {
                    type: 'public-key',
                    alg: -7
                }
            ],
            rp,
            user: {
                id: user?.id ?? Hash.keccak256(Bytes.fromString(name), {
                    as: 'Bytes'
                }),
                name,
                displayName: user?.displayName ?? name
            },
            extensions
        }
    };
}
function getCredentialRequestOptions(options) {
    const { credentialId, challenge, rpId = window.location.hostname, userVerification = 'required' } = options;
    return {
        publicKey: {
            ...credentialId ? {
                allowCredentials: Array.isArray(credentialId) ? credentialId.map((id)=>({
                        id: Base64.toBytes(id),
                        type: 'public-key'
                    })) : [
                    {
                        id: Base64.toBytes(credentialId),
                        type: 'public-key'
                    }
                ]
            } : {},
            challenge: Bytes.fromHex(challenge),
            rpId,
            userVerification
        }
    };
}
function getSignPayload(options) {
    const { challenge, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = 'required' } = options;
    const authenticatorData = getAuthenticatorData({
        flag,
        rpId,
        signCount
    });
    const clientDataJSON = getClientDataJSON({
        challenge,
        crossOrigin,
        extraClientData,
        origin
    });
    const clientDataJSONHash = Hash.sha256(Hex.fromString(clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const metadata = {
        authenticatorData,
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: userVerification === 'required'
    };
    const payload = Hex.concat(authenticatorData, clientDataJSONHash);
    return {
        metadata,
        payload
    };
}
async function sign(options) {
    const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
    const requestOptions = getCredentialRequestOptions(rest);
    try {
        const credential = await getFn(requestOptions);
        if (!credential) throw new CredentialRequestFailedError();
        const response = credential.response;
        const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
        const challengeIndex = clientDataJSON.indexOf('"challenge"');
        const typeIndex = clientDataJSON.indexOf('"type"');
        const signature = internal.parseAsn1Signature(new Uint8Array(response.signature));
        return {
            metadata: {
                authenticatorData: Hex.fromBytes(new Uint8Array(response.authenticatorData)),
                clientDataJSON,
                challengeIndex,
                typeIndex,
                userVerificationRequired: requestOptions.publicKey.userVerification === 'required'
            },
            signature,
            raw: credential
        };
    } catch (error) {
        throw new CredentialRequestFailedError({
            cause: error
        });
    }
}
function verify(options) {
    const { challenge, hash = true, metadata, publicKey, signature } = options;
    const { authenticatorData, challengeIndex, clientDataJSON, typeIndex, userVerificationRequired } = metadata;
    const authenticatorDataBytes = Bytes.fromHex(authenticatorData);
    if (authenticatorDataBytes.length < 37) return false;
    const flag = authenticatorDataBytes[32];
    if ((flag & 0x01) !== 0x01) return false;
    if (userVerificationRequired && (flag & 0x04) !== 0x04) return false;
    if ((flag & 0x08) !== 0x08 && (flag & 0x10) === 0x10) return false;
    const type = '"type":"webauthn.get"';
    if (type !== clientDataJSON.slice(Number(typeIndex), type.length + 1)) return false;
    const match = clientDataJSON.slice(Number(challengeIndex)).match(/^"challenge":"(.*?)"/);
    if (!match) return false;
    const [_, challenge_extracted] = match;
    if (Hex.fromBytes(Base64.toBytes(challenge_extracted)) !== challenge) return false;
    const clientDataJSONHash = Hash.sha256(Bytes.fromString(clientDataJSON), {
        as: 'Bytes'
    });
    const payload = Bytes.concat(authenticatorDataBytes, clientDataJSONHash);
    return P256.verify({
        hash,
        payload,
        publicKey,
        signature
    });
}
class CredentialCreationFailedError extends Errors.BaseError {
    constructor({ cause } = {}){
        super('Failed to create credential.', {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialCreationFailedError'
        });
    }
}
exports.CredentialCreationFailedError = CredentialCreationFailedError;
class CredentialRequestFailedError extends Errors.BaseError {
    constructor({ cause } = {}){
        super('Failed to request credential.', {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebAuthnP256.CredentialRequestFailedError'
        });
    }
}
exports.CredentialRequestFailedError = CredentialRequestFailedError; //# sourceMappingURL=WebAuthnP256.js.map
}}),
"[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Signature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidVError = exports.InvalidYParityError = exports.InvalidSError = exports.InvalidRError = exports.MissingPropertiesError = exports.InvalidSerializedSizeError = void 0;
exports.assert = assert;
exports.fromBytes = fromBytes;
exports.fromHex = fromHex;
exports.extract = extract;
exports.from = from;
exports.fromDerBytes = fromDerBytes;
exports.fromDerHex = fromDerHex;
exports.fromLegacy = fromLegacy;
exports.fromRpc = fromRpc;
exports.fromTuple = fromTuple;
exports.toBytes = toBytes;
exports.toHex = toHex;
exports.toDerBytes = toDerBytes;
exports.toDerHex = toDerHex;
exports.toLegacy = toLegacy;
exports.toRpc = toRpc;
exports.toTuple = toTuple;
exports.validate = validate;
exports.vToYParity = vToYParity;
exports.yParityToV = yParityToV;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)");
const Bytes = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Bytes.js [app-ssr] (ecmascript)");
const Errors = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Errors.js [app-ssr] (ecmascript)");
const Hex = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Hex.js [app-ssr] (ecmascript)");
const Json = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Json.js [app-ssr] (ecmascript)");
const Solidity = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Solidity.js [app-ssr] (ecmascript)");
function assert(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (typeof signature.s === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (recovered && typeof signature.yParity === 'undefined') throw new MissingPropertiesError({
        signature
    });
    if (signature.r < 0n || signature.r > Solidity.maxUint256) throw new InvalidRError({
        value: signature.r
    });
    if (signature.s < 0n || signature.s > Solidity.maxUint256) throw new InvalidSError({
        value: signature.s
    });
    if (typeof signature.yParity === 'number' && signature.yParity !== 0 && signature.yParity !== 1) throw new InvalidYParityError({
        value: signature.yParity
    });
}
function fromBytes(signature) {
    return fromHex(Hex.fromBytes(signature));
}
function fromHex(signature) {
    if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError({
        signature
    });
    const r = BigInt(Hex.slice(signature, 0, 32));
    const s = BigInt(Hex.slice(signature, 32, 64));
    const yParity = (()=>{
        const yParity = Number(`0x${signature.slice(130)}`);
        if (Number.isNaN(yParity)) return undefined;
        try {
            return vToYParity(yParity);
        } catch  {
            throw new InvalidYParityError({
                value: yParity
            });
        }
    })();
    if (typeof yParity === 'undefined') return {
        r,
        s
    };
    return {
        r,
        s,
        yParity
    };
}
function extract(value) {
    if (typeof value.r === 'undefined') return undefined;
    if (typeof value.s === 'undefined') return undefined;
    return from(value);
}
function from(signature) {
    const signature_ = (()=>{
        if (typeof signature === 'string') return fromHex(signature);
        if (signature instanceof Uint8Array) return fromBytes(signature);
        if (typeof signature.r === 'string') return fromRpc(signature);
        if (signature.v) return fromLegacy(signature);
        return {
            r: signature.r,
            s: signature.s,
            ...typeof signature.yParity !== 'undefined' ? {
                yParity: signature.yParity
            } : {}
        };
    })();
    assert(signature_);
    return signature_;
}
function fromDerBytes(signature) {
    return fromDerHex(Hex.fromBytes(signature));
}
function fromDerHex(signature) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromDER(Hex.from(signature).slice(2));
    return {
        r,
        s
    };
}
function fromLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        yParity: vToYParity(signature.v)
    };
}
function fromRpc(signature) {
    const yParity = (()=>{
        const v = signature.v ? Number(signature.v) : undefined;
        let yParity = signature.yParity ? Number(signature.yParity) : undefined;
        if (typeof v === 'number' && typeof yParity !== 'number') yParity = vToYParity(v);
        if (typeof yParity !== 'number') throw new InvalidYParityError({
            value: signature.yParity
        });
        return yParity;
    })();
    return {
        r: BigInt(signature.r),
        s: BigInt(signature.s),
        yParity
    };
}
function fromTuple(tuple) {
    const [yParity, r, s] = tuple;
    return from({
        r: r === '0x' ? 0n : BigInt(r),
        s: s === '0x' ? 0n : BigInt(s),
        yParity: yParity === '0x' ? 0 : Number(yParity)
    });
}
function toBytes(signature) {
    return Bytes.fromHex(toHex(signature));
}
function toHex(signature) {
    assert(signature);
    const r = signature.r;
    const s = signature.s;
    const signature_ = Hex.concat(Hex.fromNumber(r, {
        size: 32
    }), Hex.fromNumber(s, {
        size: 32
    }), typeof signature.yParity === 'number' ? Hex.fromNumber(yParityToV(signature.yParity), {
        size: 1
    }) : '0x');
    return signature_;
}
function toDerBytes(signature) {
    const sig = new secp256k1_1.secp256k1.Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
}
function toDerHex(signature) {
    const sig = new secp256k1_1.secp256k1.Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
}
function toLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        v: yParityToV(signature.yParity)
    };
}
function toRpc(signature) {
    const { r, s, yParity } = signature;
    return {
        r: Hex.fromNumber(r, {
            size: 32
        }),
        s: Hex.fromNumber(s, {
            size: 32
        }),
        yParity: yParity === 0 ? '0x0' : '0x1'
    };
}
function toTuple(signature) {
    const { r, s, yParity } = signature;
    return [
        yParity ? '0x01' : '0x',
        r === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(r)),
        s === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(s))
    ];
}
function validate(signature, options = {}) {
    try {
        assert(signature, options);
        return true;
    } catch  {
        return false;
    }
}
function vToYParity(v) {
    if (v === 0 || v === 27) return 0;
    if (v === 1 || v === 28) return 1;
    if (v >= 35) return v % 2 === 0 ? 1 : 0;
    throw new InvalidVError({
        value: v
    });
}
function yParityToV(yParity) {
    if (yParity === 0) return 27;
    if (yParity === 1) return 28;
    throw new InvalidYParityError({
        value: yParity
    });
}
class InvalidSerializedSizeError extends Errors.BaseError {
    constructor({ signature }){
        super(`Value \`${signature}\` is an invalid signature size.`, {
            metaMessages: [
                'Expected: 64 bytes or 65 bytes.',
                `Received ${Hex.size(Hex.from(signature))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSerializedSizeError'
        });
    }
}
exports.InvalidSerializedSizeError = InvalidSerializedSizeError;
class MissingPropertiesError extends Errors.BaseError {
    constructor({ signature }){
        super(`Signature \`${Json.stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.MissingPropertiesError'
        });
    }
}
exports.MissingPropertiesError = MissingPropertiesError;
class InvalidRError extends Errors.BaseError {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidRError'
        });
    }
}
exports.InvalidRError = InvalidRError;
class InvalidSError extends Errors.BaseError {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSError'
        });
    }
}
exports.InvalidSError = InvalidSError;
class InvalidYParityError extends Errors.BaseError {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidYParityError'
        });
    }
}
exports.InvalidYParityError = InvalidYParityError;
class InvalidVError extends Errors.BaseError {
    constructor({ value }){
        super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidVError'
        });
    }
}
exports.InvalidVError = InvalidVError; //# sourceMappingURL=Signature.js.map
}}),

};

//# sourceMappingURL=fda25_ox_9d78c1e8._.js.map