(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/version.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '2.31.2'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
exports.setErrorConfig = setErrorConfig;
const version_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/version.js [app-client] (ecmascript)");
let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug })=>docsPath ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}` : undefined,
    version: `viem@${version_js_1.version}`
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = (()=>{
            if (args.cause instanceof BaseError) return args.cause.details;
            if (args.cause?.message) return args.cause.message;
            return args.details;
        })();
        const docsPath = (()=>{
            if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({
            ...args,
            docsPath
        });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsUrl ? [
                `Docs: ${docsUrl}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            ...errorConfig.version ? [
                `Version: ${errorConfig.version}`
            ] : []
        ].join('\n');
        super(message, args.cause ? {
            cause: args.cause
        } : undefined);
        Object.defineProperty(this, "details", {
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
        Object.defineProperty(this, "metaMessages", {
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
        Object.defineProperty(this, "version", {
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
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version_js_1.version;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
exports.BaseError = BaseError;
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause !== undefined) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiDecodingTypeError = exports.InvalidAbiEncodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiItemAmbiguityError = exports.AbiFunctionSignatureNotFoundError = exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = exports.AbiConstructorNotFoundError = void 0;
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AbiConstructorNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError'
        });
    }
}
exports.AbiConstructorNotFoundError = AbiConstructorNotFoundError;
class AbiConstructorParamsNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError'
        });
    }
}
exports.AbiConstructorParamsNotFoundError = AbiConstructorParamsNotFoundError;
class AbiDecodingDataSizeInvalidError extends base_js_1.BaseError {
    constructor({ data, size }){
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).'
        ].join('\n'), {
            metaMessages: [
                `Data: ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
exports.AbiDecodingDataSizeInvalidError = AbiDecodingDataSizeInvalidError;
class AbiDecodingDataSizeTooSmallError extends base_js_1.BaseError {
    constructor({ data, params, size }){
        super([
            `Data size of ${size} bytes is too small for given parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.AbiDecodingDataSizeTooSmallError = AbiDecodingDataSizeTooSmallError;
class AbiDecodingZeroDataError extends base_js_1.BaseError {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError'
        });
    }
}
exports.AbiDecodingZeroDataError = AbiDecodingZeroDataError;
class AbiEncodingArrayLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength, type }){
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
exports.AbiEncodingArrayLengthMismatchError = AbiEncodingArrayLengthMismatchError;
class AbiEncodingBytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, size_js_1.size)(value)}) does not match expected size (bytes${expectedSize}).`, {
            name: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
exports.AbiEncodingBytesSizeMismatchError = AbiEncodingBytesSizeMismatchError;
class AbiEncodingLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingLengthMismatchError'
        });
    }
}
exports.AbiEncodingLengthMismatchError = AbiEncodingLengthMismatchError;
class AbiErrorInputsNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath }){
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError'
        });
    }
}
exports.AbiErrorInputsNotFoundError = AbiErrorInputsNotFoundError;
class AbiErrorNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath } = {}){
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError'
        });
    }
}
exports.AbiErrorNotFoundError = AbiErrorNotFoundError;
class AbiErrorSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
exports.AbiErrorSignatureNotFoundError = AbiErrorSignatureNotFoundError;
class AbiEventSignatureEmptyTopicsError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
exports.AbiEventSignatureEmptyTopicsError = AbiEventSignatureEmptyTopicsError;
class AbiEventSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError'
        });
    }
}
exports.AbiEventSignatureNotFoundError = AbiEventSignatureNotFoundError;
class AbiEventNotFoundError extends base_js_1.BaseError {
    constructor(eventName, { docsPath } = {}){
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError'
        });
    }
}
exports.AbiEventNotFoundError = AbiEventNotFoundError;
class AbiFunctionNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath } = {}){
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError'
        });
    }
}
exports.AbiFunctionNotFoundError = AbiFunctionNotFoundError;
class AbiFunctionOutputsNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath }){
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
exports.AbiFunctionOutputsNotFoundError = AbiFunctionOutputsNotFoundError;
class AbiFunctionSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
exports.AbiFunctionSignatureNotFoundError = AbiFunctionSignatureNotFoundError;
class AbiItemAmbiguityError extends base_js_1.BaseError {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ],
            name: 'AbiItemAmbiguityError'
        });
    }
}
exports.AbiItemAmbiguityError = AbiItemAmbiguityError;
class BytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: 'BytesSizeMismatchError'
        });
    }
}
exports.BytesSizeMismatchError = BytesSizeMismatchError;
class DecodeLogDataMismatch extends base_js_1.BaseError {
    constructor({ abiItem, data, params, size }){
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.DecodeLogDataMismatch = DecodeLogDataMismatch;
class DecodeLogTopicsMismatch extends base_js_1.BaseError {
    constructor({ abiItem, param }){
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                includeName: true
            })}".`
        ].join('\n'), {
            name: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
exports.DecodeLogTopicsMismatch = DecodeLogTopicsMismatch;
class InvalidAbiEncodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiEncodingType'
        });
    }
}
exports.InvalidAbiEncodingTypeError = InvalidAbiEncodingTypeError;
class InvalidAbiDecodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiDecodingType'
        });
    }
}
exports.InvalidAbiDecodingTypeError = InvalidAbiDecodingTypeError;
class InvalidArrayError extends base_js_1.BaseError {
    constructor(value){
        super([
            `Value "${value}" is not a valid array.`
        ].join('\n'), {
            name: 'InvalidArrayError'
        });
    }
}
exports.InvalidArrayError = InvalidArrayError;
class InvalidDefinitionTypeError extends base_js_1.BaseError {
    constructor(type){
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"'
        ].join('\n'), {
            name: 'InvalidDefinitionTypeError'
        });
    }
}
exports.InvalidDefinitionTypeError = InvalidDefinitionTypeError;
class UnsupportedPackedAbiType extends base_js_1.BaseError {
    constructor(type){
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: 'UnsupportedPackedAbiType'
        });
    }
}
exports.UnsupportedPackedAbiType = UnsupportedPackedAbiType; //# sourceMappingURL=abi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterTypeNotSupportedError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class FilterTypeNotSupportedError extends base_js_1.BaseError {
    constructor(type){
        super(`Filter type "${type}" is not supported.`, {
            name: 'FilterTypeNotSupportedError'
        });
    }
}
exports.FilterTypeNotSupportedError = FilterTypeNotSupportedError; //# sourceMappingURL=log.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidBytesLengthError = exports.SizeExceedsPaddingSizeError = exports.SliceOffsetOutOfBoundsError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class SliceOffsetOutOfBoundsError extends base_js_1.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, {
            name: 'SliceOffsetOutOfBoundsError'
        });
    }
}
exports.SliceOffsetOutOfBoundsError = SliceOffsetOutOfBoundsError;
class SizeExceedsPaddingSizeError extends base_js_1.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, {
            name: 'SizeExceedsPaddingSizeError'
        });
    }
}
exports.SizeExceedsPaddingSizeError = SizeExceedsPaddingSizeError;
class InvalidBytesLengthError extends base_js_1.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, {
            name: 'InvalidBytesLengthError'
        });
    }
}
exports.InvalidBytesLengthError = InvalidBytesLengthError; //# sourceMappingURL=data.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeOverflowError = exports.InvalidHexValueError = exports.InvalidHexBooleanError = exports.InvalidBytesBooleanError = exports.IntegerOutOfRangeError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class IntegerOutOfRangeError extends base_js_1.BaseError {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, {
            name: 'IntegerOutOfRangeError'
        });
    }
}
exports.IntegerOutOfRangeError = IntegerOutOfRangeError;
class InvalidBytesBooleanError extends base_js_1.BaseError {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError'
        });
    }
}
exports.InvalidBytesBooleanError = InvalidBytesBooleanError;
class InvalidHexBooleanError extends base_js_1.BaseError {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: 'InvalidHexBooleanError'
        });
    }
}
exports.InvalidHexBooleanError = InvalidHexBooleanError;
class InvalidHexValueError extends base_js_1.BaseError {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, {
            name: 'InvalidHexValueError'
        });
    }
}
exports.InvalidHexValueError = InvalidHexValueError;
class SizeOverflowError extends base_js_1.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, {
            name: 'SizeOverflowError'
        });
    }
}
exports.SizeOverflowError = SizeOverflowError; //# sourceMappingURL=encoding.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAddressError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidAddressError extends base_js_1.BaseError {
    constructor({ address }){
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.'
            ],
            name: 'InvalidAddressError'
        });
    }
}
exports.InvalidAddressError = InvalidAddressError; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/cursor.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecursiveReadLimitExceededError = exports.PositionOutOfBoundsError = exports.NegativeOffsetError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class NegativeOffsetError extends base_js_1.BaseError {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: 'NegativeOffsetError'
        });
    }
}
exports.NegativeOffsetError = NegativeOffsetError;
class PositionOutOfBoundsError extends base_js_1.BaseError {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, {
            name: 'PositionOutOfBoundsError'
        });
    }
}
exports.PositionOutOfBoundsError = PositionOutOfBoundsError;
class RecursiveReadLimitExceededError extends base_js_1.BaseError {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, {
            name: 'RecursiveReadLimitExceededError'
        });
    }
}
exports.RecursiveReadLimitExceededError = RecursiveReadLimitExceededError; //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateAssignmentConflictError = exports.AccountStateConflictError = void 0;
exports.prettyStateMapping = prettyStateMapping;
exports.prettyStateOverride = prettyStateOverride;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AccountStateConflictError extends base_js_1.BaseError {
    constructor({ address }){
        super(`State for account "${address}" is set multiple times.`, {
            name: 'AccountStateConflictError'
        });
    }
}
exports.AccountStateConflictError = AccountStateConflictError;
class StateAssignmentConflictError extends base_js_1.BaseError {
    constructor(){
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError'
        });
    }
}
exports.StateAssignmentConflictError = StateAssignmentConflictError;
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value })=>{
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride.reduce((pretty, { address, ...state })=>{
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce) val += `      nonce: ${state.nonce}\n`;
        if (state.balance) val += `      balance: ${state.balance}\n`;
        if (state.code) val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n').slice(0, -1);
} //# sourceMappingURL=stateOverride.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionError = exports.InvalidSerializedTransactionTypeError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = void 0;
exports.prettyPrint = prettyPrint;
const formatEther_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
function prettyPrint(args) {
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
}
class FeeConflictError extends base_js_1.BaseError {
    constructor(){
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'
        ].join('\n'), {
            name: 'FeeConflictError'
        });
    }
}
exports.FeeConflictError = FeeConflictError;
class InvalidLegacyVError extends base_js_1.BaseError {
    constructor({ v }){
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: 'InvalidLegacyVError'
        });
    }
}
exports.InvalidLegacyVError = InvalidLegacyVError;
class InvalidSerializableTransactionError extends base_js_1.BaseError {
    constructor({ transaction }){
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`'
            ],
            name: 'InvalidSerializableTransactionError'
        });
    }
}
exports.InvalidSerializableTransactionError = InvalidSerializableTransactionError;
class InvalidSerializedTransactionTypeError extends base_js_1.BaseError {
    constructor({ serializedType }){
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
exports.InvalidSerializedTransactionTypeError = InvalidSerializedTransactionTypeError;
class InvalidSerializedTransactionError extends base_js_1.BaseError {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map(([key, value])=>typeof value === 'undefined' ? key : undefined).filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : ''
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
exports.InvalidSerializedTransactionError = InvalidSerializedTransactionError;
class InvalidStorageKeySizeError extends base_js_1.BaseError {
    constructor({ storageKey }){
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, {
            name: 'InvalidStorageKeySizeError'
        });
    }
}
exports.InvalidStorageKeySizeError = InvalidStorageKeySizeError;
class TransactionExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Request Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'TransactionExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.TransactionExecutionError = TransactionExecutionError;
class TransactionNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = 'Transaction';
        if (blockTag && index !== undefined) identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined) identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined) identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash) identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: 'TransactionNotFoundError'
        });
    }
}
exports.TransactionNotFoundError = TransactionNotFoundError;
class TransactionReceiptNotFoundError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: 'TransactionReceiptNotFoundError'
        });
    }
}
exports.TransactionReceiptNotFoundError = TransactionReceiptNotFoundError;
class WaitForTransactionReceiptTimeoutError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, {
            name: 'WaitForTransactionReceiptTimeoutError'
        });
    }
}
exports.WaitForTransactionReceiptTimeoutError = WaitForTransactionReceiptTimeoutError; //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrl = exports.getContractAddress = void 0;
const getContractAddress = (address)=>address;
exports.getContractAddress = getContractAddress;
const getUrl = (url)=>url;
exports.getUrl = getUrl; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RawContractError = exports.CounterfactualDeploymentFailedError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = void 0;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const solidity_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
const formatAbiItemWithArgs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)");
const getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
const formatEther_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class CallExecutionError extends base_js_1.BaseError {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }){
        const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
        let prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        if (stateOverride) {
            prettyArgs += `\n${(0, stateOverride_js_1.prettyStateOverride)(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Raw Call Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'CallExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.CallExecutionError = CallExecutionError;
class ContractFunctionExecutionError extends base_js_1.BaseError {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
            includeName: true
        }) : undefined;
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            address: contractAddress && (0, utils_js_1.getContractAddress)(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== '()' && `${[
                ...Array(functionName?.length ?? 0).keys()
            ].map(()=>' ').join('')}${formattedArgs}`,
            sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                prettyArgs && 'Contract Call:',
                prettyArgs
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError'
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
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
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
exports.ContractFunctionExecutionError = ContractFunctionExecutionError;
class ContractFunctionRevertedError extends base_js_1.BaseError {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0, decodeErrorResult_js_1.decodeErrorResult)({
                    abi,
                    data
                });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                } else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = solidity_js_1.panicReasons[firstArg];
                } else {
                    const errorWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                        includeName: true
                    }) : undefined;
                    const formattedArgs = abiItem && errorArgs ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
                        abiItem,
                        args: errorArgs,
                        includeFunctionName: false,
                        includeName: false
                    }) : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()' ? `       ${[
                            ...Array(errorName?.length ?? 0).keys()
                        ].map(()=>' ').join('')}${formattedArgs}` : ''
                    ];
                }
            } catch (err) {
                cause = err;
            }
        } else if (message) reason = message;
        let signature;
        if (cause instanceof abi_js_1.AbiErrorSignatureNotFoundError) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
            ];
        }
        super(reason && reason !== 'execution reverted' || signature ? [
            `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
            reason || signature
        ].join('\n') : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "raw", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.raw = data;
        this.reason = reason;
        this.signature = signature;
    }
}
exports.ContractFunctionRevertedError = ContractFunctionRevertedError;
class ContractFunctionZeroDataError extends base_js_1.BaseError {
    constructor({ functionName }){
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.'
            ],
            name: 'ContractFunctionZeroDataError'
        });
    }
}
exports.ContractFunctionZeroDataError = ContractFunctionZeroDataError;
class CounterfactualDeploymentFailedError extends base_js_1.BaseError {
    constructor({ factory }){
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ''}`, {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.'
            ],
            name: 'CounterfactualDeploymentFailedError'
        });
    }
}
exports.CounterfactualDeploymentFailedError = CounterfactualDeploymentFailedError;
class RawContractError extends base_js_1.BaseError {
    constructor({ data, message }){
        super(message || '', {
            name: 'RawContractError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
exports.RawContractError = RawContractError; //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeoutError = exports.SocketClosedError = exports.RpcRequestError = exports.WebSocketRequestError = exports.HttpRequestError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class HttpRequestError extends base_js_1.BaseError {
    constructor({ body, cause, details, headers, status, url }){
        super('HTTP request failed.', {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                body && `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ].filter(Boolean),
            name: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
exports.HttpRequestError = HttpRequestError;
class WebSocketRequestError extends base_js_1.BaseError {
    constructor({ body, cause, details, url }){
        super('WebSocket request failed.', {
            cause,
            details,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                body && `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ].filter(Boolean),
            name: 'WebSocketRequestError'
        });
    }
}
exports.WebSocketRequestError = WebSocketRequestError;
class RpcRequestError extends base_js_1.BaseError {
    constructor({ body, error, url }){
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ],
            name: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
        this.data = error.data;
    }
}
exports.RpcRequestError = RpcRequestError;
class SocketClosedError extends base_js_1.BaseError {
    constructor({ url } = {}){
        super('The socket has been closed.', {
            metaMessages: [
                url && `URL: ${(0, utils_js_1.getUrl)(url)}`
            ].filter(Boolean),
            name: 'SocketClosedError'
        });
    }
}
exports.SocketClosedError = SocketClosedError;
class TimeoutError extends base_js_1.BaseError {
    constructor({ body, url }){
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ],
            name: 'TimeoutError'
        });
    }
}
exports.TimeoutError = TimeoutError; //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownRpcError = exports.AtomicityNotSupportedError = exports.AtomicReadyWalletRejectedUpgradeError = exports.BundleTooLargeError = exports.UnknownBundleIdError = exports.DuplicateIdError = exports.UnsupportedChainIdError = exports.UnsupportedNonOptionalCapabilityError = exports.SwitchChainError = exports.ChainDisconnectedError = exports.ProviderDisconnectedError = exports.UnsupportedProviderMethodError = exports.UnauthorizedProviderError = exports.UserRejectedRequestError = exports.JsonRpcVersionUnsupportedError = exports.LimitExceededRpcError = exports.MethodNotSupportedRpcError = exports.TransactionRejectedRpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.InvalidParamsRpcError = exports.MethodNotFoundRpcError = exports.InvalidRequestRpcError = exports.ParseRpcError = exports.ProviderRpcError = exports.RpcError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const unknownErrorCode = -1;
class RpcError extends base_js_1.BaseError {
    constructor(cause, { code, docsPath, metaMessages, name, shortMessage }){
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
            name: name || 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name || cause.name;
        this.code = cause instanceof request_js_1.RpcRequestError ? cause.code : code ?? unknownErrorCode;
    }
}
exports.RpcError = RpcError;
class ProviderRpcError extends RpcError {
    constructor(cause, options){
        super(cause, options);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
exports.ProviderRpcError = ProviderRpcError;
class ParseRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ParseRpcError.code,
            name: 'ParseRpcError',
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
        });
    }
}
exports.ParseRpcError = ParseRpcError;
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidRequestRpcError.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.'
        });
    }
}
exports.InvalidRequestRpcError = InvalidRequestRpcError;
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotFoundRpcError.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${method ? ` "${method}"` : ''} does not exist / is not available.`
        });
    }
}
exports.MethodNotFoundRpcError = MethodNotFoundRpcError;
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidParamsRpcError.code,
            name: 'InvalidParamsRpcError',
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
exports.InvalidParamsRpcError = InvalidParamsRpcError;
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InternalRpcError.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.'
        });
    }
}
exports.InternalRpcError = InternalRpcError;
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidInputRpcError.code,
            name: 'InvalidInputRpcError',
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
exports.InvalidInputRpcError = InvalidInputRpcError;
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
exports.ResourceNotFoundRpcError = ResourceNotFoundRpcError;
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.'
        });
    }
}
exports.ResourceUnavailableRpcError = ResourceUnavailableRpcError;
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: TransactionRejectedRpcError.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.'
        });
    }
}
exports.TransactionRejectedRpcError = TransactionRejectedRpcError;
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${method ? ` "${method}"` : ''} is not supported.`
        });
    }
}
exports.MethodNotSupportedRpcError = MethodNotSupportedRpcError;
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: LimitExceededRpcError.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.'
        });
    }
}
exports.LimitExceededRpcError = LimitExceededRpcError;
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause){
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.'
        });
    }
}
exports.JsonRpcVersionUnsupportedError = JsonRpcVersionUnsupportedError;
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UserRejectedRequestError.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.'
        });
    }
}
exports.UserRejectedRequestError = UserRejectedRequestError;
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnauthorizedProviderError.code,
            name: 'UnauthorizedProviderError',
            shortMessage: 'The requested method and/or account has not been authorized by the user.'
        });
    }
}
exports.UnauthorizedProviderError = UnauthorizedProviderError;
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ''}.`
        });
    }
}
exports.UnsupportedProviderMethodError = UnsupportedProviderMethodError;
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ProviderDisconnectedError.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.'
        });
    }
}
exports.ProviderDisconnectedError = ProviderDisconnectedError;
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ChainDisconnectedError.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.'
        });
    }
}
exports.ChainDisconnectedError = ChainDisconnectedError;
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: SwitchChainError.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.'
        });
    }
}
exports.SwitchChainError = SwitchChainError;
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnsupportedNonOptionalCapabilityError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnsupportedNonOptionalCapabilityError.code,
            name: 'UnsupportedNonOptionalCapabilityError',
            shortMessage: 'This Wallet does not support a capability that was not marked as optional.'
        });
    }
}
exports.UnsupportedNonOptionalCapabilityError = UnsupportedNonOptionalCapabilityError;
Object.defineProperty(UnsupportedNonOptionalCapabilityError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5700
});
class UnsupportedChainIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnsupportedChainIdError.code,
            name: 'UnsupportedChainIdError',
            shortMessage: 'This Wallet does not support the requested chain ID.'
        });
    }
}
exports.UnsupportedChainIdError = UnsupportedChainIdError;
Object.defineProperty(UnsupportedChainIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5710
});
class DuplicateIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: DuplicateIdError.code,
            name: 'DuplicateIdError',
            shortMessage: 'There is already a bundle submitted with this ID.'
        });
    }
}
exports.DuplicateIdError = DuplicateIdError;
Object.defineProperty(DuplicateIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5720
});
class UnknownBundleIdError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnknownBundleIdError.code,
            name: 'UnknownBundleIdError',
            shortMessage: 'This bundle id is unknown / has not been submitted'
        });
    }
}
exports.UnknownBundleIdError = UnknownBundleIdError;
Object.defineProperty(UnknownBundleIdError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5730
});
class BundleTooLargeError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: BundleTooLargeError.code,
            name: 'BundleTooLargeError',
            shortMessage: 'The call bundle is too large for the Wallet to process.'
        });
    }
}
exports.BundleTooLargeError = BundleTooLargeError;
Object.defineProperty(BundleTooLargeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5740
});
class AtomicReadyWalletRejectedUpgradeError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: AtomicReadyWalletRejectedUpgradeError.code,
            name: 'AtomicReadyWalletRejectedUpgradeError',
            shortMessage: 'The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.'
        });
    }
}
exports.AtomicReadyWalletRejectedUpgradeError = AtomicReadyWalletRejectedUpgradeError;
Object.defineProperty(AtomicReadyWalletRejectedUpgradeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5750
});
class AtomicityNotSupportedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: AtomicityNotSupportedError.code,
            name: 'AtomicityNotSupportedError',
            shortMessage: 'The wallet does not support atomic execution but the request requires it.'
        });
    }
}
exports.AtomicityNotSupportedError = AtomicityNotSupportedError;
Object.defineProperty(AtomicityNotSupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 5760
});
class UnknownRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            name: 'UnknownRpcError',
            shortMessage: 'An unknown RPC error occurred.'
        });
    }
}
exports.UnknownRpcError = UnknownRpcError; //# sourceMappingURL=rpc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EstimateGasExecutionError = void 0;
const formatEther_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-client] (ecmascript)");
const formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
class EstimateGasExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Estimate Gas Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'EstimateGasExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
exports.EstimateGasExecutionError = EstimateGasExecutionError; //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownNodeError = exports.TipAboveFeeCapError = exports.TransactionTypeNotSupportedError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.NonceMaxValueError = exports.NonceTooLowError = exports.NonceTooHighError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = void 0;
const formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class ExecutionRevertedError extends base_js_1.BaseError {
    constructor({ cause, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError'
        });
    }
}
exports.ExecutionRevertedError = ExecutionRevertedError;
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
            name: 'FeeCapTooHighError'
        });
    }
}
exports.FeeCapTooHighError = FeeCapTooHighError;
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
            name: 'FeeCapTooLowError'
        });
    }
}
exports.FeeCapTooLowError = FeeCapTooLowError;
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, {
            cause,
            name: 'NonceTooHighError'
        });
    }
}
exports.NonceTooHighError = NonceTooHighError;
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.'
        ].join('\n'), {
            cause,
            name: 'NonceTooLowError'
        });
    }
}
exports.NonceTooLowError = NonceTooLowError;
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, {
            cause,
            name: 'NonceMaxValueError'
        });
    }
}
exports.NonceMaxValueError = NonceMaxValueError;
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends base_js_1.BaseError {
    constructor({ cause } = {}){
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.'
            ],
            name: 'InsufficientFundsError'
        });
    }
}
exports.InsufficientFundsError = InsufficientFundsError;
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
            name: 'IntrinsicGasTooHighError'
        });
    }
}
exports.IntrinsicGasTooHighError = IntrinsicGasTooHighError;
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
            name: 'IntrinsicGasTooLowError'
        });
    }
}
exports.IntrinsicGasTooLowError = IntrinsicGasTooLowError;
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The transaction type is not supported for this chain.', {
            cause,
            name: 'TransactionTypeNotSupportedError'
        });
    }
}
exports.TransactionTypeNotSupportedError = TransactionTypeNotSupportedError;
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends base_js_1.BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}).`
        ].join('\n'), {
            cause,
            name: 'TipAboveFeeCapError'
        });
    }
}
exports.TipAboveFeeCapError = TipAboveFeeCapError;
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends base_js_1.BaseError {
    constructor({ cause }){
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownNodeError'
        });
    }
}
exports.UnknownNodeError = UnknownNodeError; //# sourceMappingURL=node.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = void 0;
const formatGwei_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BaseFeeScalarError extends base_js_1.BaseError {
    constructor(){
        super('`baseFeeMultiplier` must be greater than 1.', {
            name: 'BaseFeeScalarError'
        });
    }
}
exports.BaseFeeScalarError = BaseFeeScalarError;
class Eip1559FeesNotSupportedError extends base_js_1.BaseError {
    constructor(){
        super('Chain does not support EIP-1559 fees.', {
            name: 'Eip1559FeesNotSupportedError'
        });
    }
}
exports.Eip1559FeesNotSupportedError = Eip1559FeesNotSupportedError;
class MaxFeePerGasTooLowError extends base_js_1.BaseError {
    constructor({ maxPriorityFeePerGas }){
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei).`, {
            name: 'MaxFeePerGasTooLowError'
        });
    }
}
exports.MaxFeePerGasTooLowError = MaxFeePerGasTooLowError; //# sourceMappingURL=fee.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlockNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BlockNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber }){
        let identifier = 'Block';
        if (blockHash) identifier = `Block at hash "${blockHash}"`;
        if (blockNumber) identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`, {
            name: 'BlockNotFoundError'
        });
    }
}
exports.BlockNotFoundError = BlockNotFoundError; //# sourceMappingURL=block.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/blob.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidVersionedHashVersionError = exports.InvalidVersionedHashSizeError = exports.EmptyBlobError = exports.BlobSizeTooLargeError = void 0;
const kzg_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BlobSizeTooLargeError extends base_js_1.BaseError {
    constructor({ maxSize, size }){
        super('Blob size is too large.', {
            metaMessages: [
                `Max: ${maxSize} bytes`,
                `Given: ${size} bytes`
            ],
            name: 'BlobSizeTooLargeError'
        });
    }
}
exports.BlobSizeTooLargeError = BlobSizeTooLargeError;
class EmptyBlobError extends base_js_1.BaseError {
    constructor(){
        super('Blob data must not be empty.', {
            name: 'EmptyBlobError'
        });
    }
}
exports.EmptyBlobError = EmptyBlobError;
class InvalidVersionedHashSizeError extends base_js_1.BaseError {
    constructor({ hash, size }){
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: [
                'Expected: 32',
                `Received: ${size}`
            ],
            name: 'InvalidVersionedHashSizeError'
        });
    }
}
exports.InvalidVersionedHashSizeError = InvalidVersionedHashSizeError;
class InvalidVersionedHashVersionError extends base_js_1.BaseError {
    constructor({ hash, version }){
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${kzg_js_1.versionedHashVersionKzg}`,
                `Received: ${version}`
            ],
            name: 'InvalidVersionedHashVersionError'
        });
    }
}
exports.InvalidVersionedHashVersionError = InvalidVersionedHashVersionError; //# sourceMappingURL=blob.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class ChainDoesNotSupportContract extends base_js_1.BaseError {
    constructor({ blockNumber, chain, contract }){
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
                    `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
                ] : [
                    `- The chain does not have the contract "${contract.name}" configured.`
                ]
            ],
            name: 'ChainDoesNotSupportContract'
        });
    }
}
exports.ChainDoesNotSupportContract = ChainDoesNotSupportContract;
class ChainMismatchError extends base_js_1.BaseError {
    constructor({ chain, currentChainId }){
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`
            ],
            name: 'ChainMismatchError'
        });
    }
}
exports.ChainMismatchError = ChainMismatchError;
class ChainNotFoundError extends base_js_1.BaseError {
    constructor(){
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.'
        ].join('\n'), {
            name: 'ChainNotFoundError'
        });
    }
}
exports.ChainNotFoundError = ChainNotFoundError;
class ClientChainNotConfiguredError extends base_js_1.BaseError {
    constructor(){
        super('No chain was provided to the Client.', {
            name: 'ClientChainNotConfiguredError'
        });
    }
}
exports.ClientChainNotConfiguredError = ClientChainNotConfiguredError;
class InvalidChainIdError extends base_js_1.BaseError {
    constructor({ chainId }){
        super(typeof chainId === 'number' ? `Chain ID "${chainId}" is invalid.` : 'Chain ID is invalid.', {
            name: 'InvalidChainIdError'
        });
    }
}
exports.InvalidChainIdError = InvalidChainIdError; //# sourceMappingURL=chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/ccip.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OffchainLookupSenderMismatchError = exports.OffchainLookupResponseMalformedError = exports.OffchainLookupError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/utils.js [app-client] (ecmascript)");
class OffchainLookupError extends base_js_1.BaseError {
    constructor({ callbackSelector, cause, data, extraData, sender, urls }){
        super(cause.shortMessage || 'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...cause.metaMessages || [],
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url)=>`    ${(0, utils_js_1.getUrl)(url)}`)
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
exports.OffchainLookupError = OffchainLookupError;
class OffchainLookupResponseMalformedError extends base_js_1.BaseError {
    constructor({ result, url }){
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Response: ${(0, stringify_js_1.stringify)(result)}`
            ],
            name: 'OffchainLookupResponseMalformedError'
        });
    }
}
exports.OffchainLookupResponseMalformedError = OffchainLookupResponseMalformedError;
class OffchainLookupSenderMismatchError extends base_js_1.BaseError {
    constructor({ sender, to }){
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`
            ],
            name: 'OffchainLookupSenderMismatchError'
        });
    }
}
exports.OffchainLookupSenderMismatchError = OffchainLookupSenderMismatchError; //# sourceMappingURL=ccip.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountTypeNotSupportedError = exports.AccountNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class AccountNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
            name: 'AccountNotFoundError'
        });
    }
}
exports.AccountNotFoundError = AccountNotFoundError;
class AccountTypeNotSupportedError extends base_js_1.BaseError {
    constructor({ docsPath, metaMessages, type }){
        super(`Account type "${type}" is not supported.`, {
            docsPath,
            metaMessages,
            name: 'AccountTypeNotSupportedError'
        });
    }
}
exports.AccountTypeNotSupportedError = AccountTypeNotSupportedError; //# sourceMappingURL=account.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlRequiredError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class UrlRequiredError extends base_js_1.BaseError {
    constructor(){
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro',
            name: 'UrlRequiredError'
        });
    }
}
exports.UrlRequiredError = UrlRequiredError; //# sourceMappingURL=transport.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarUriResolutionError = exports.EnsAvatarInvalidNftUriError = exports.EnsAvatarInvalidMetadataError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class EnsAvatarInvalidMetadataError extends base_js_1.BaseError {
    constructor({ data }){
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`
            ],
            name: 'EnsAvatarInvalidMetadataError'
        });
    }
}
exports.EnsAvatarInvalidMetadataError = EnsAvatarInvalidMetadataError;
class EnsAvatarInvalidNftUriError extends base_js_1.BaseError {
    constructor({ reason }){
        super(`ENS NFT avatar URI is invalid. ${reason}`, {
            name: 'EnsAvatarInvalidNftUriError'
        });
    }
}
exports.EnsAvatarInvalidNftUriError = EnsAvatarInvalidNftUriError;
class EnsAvatarUriResolutionError extends base_js_1.BaseError {
    constructor({ uri }){
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
            name: 'EnsAvatarUriResolutionError'
        });
    }
}
exports.EnsAvatarUriResolutionError = EnsAvatarUriResolutionError;
class EnsAvatarUnsupportedNamespaceError extends base_js_1.BaseError {
    constructor({ namespace }){
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, {
            name: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
}
exports.EnsAvatarUnsupportedNamespaceError = EnsAvatarUnsupportedNamespaceError; //# sourceMappingURL=ens.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/eip712.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Eip712DomainNotFoundError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class Eip712DomainNotFoundError extends base_js_1.BaseError {
    constructor({ address }){
        super(`No EIP-712 domain found on contract "${address}".`, {
            metaMessages: [
                'Ensure that:',
                `- The contract is deployed at the address "${address}".`,
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.'
            ],
            name: 'Eip712DomainNotFoundError'
        });
    }
}
exports.Eip712DomainNotFoundError = Eip712DomainNotFoundError; //# sourceMappingURL=eip712.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidStructTypeError = exports.InvalidPrimaryTypeError = exports.InvalidDomainError = void 0;
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidDomainError extends base_js_1.BaseError {
    constructor({ domain }){
        super(`Invalid domain "${(0, stringify_js_1.stringify)(domain)}".`, {
            metaMessages: [
                'Must be a valid EIP-712 domain.'
            ]
        });
    }
}
exports.InvalidDomainError = InvalidDomainError;
class InvalidPrimaryTypeError extends base_js_1.BaseError {
    constructor({ primaryType, types }){
        super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
            docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
            metaMessages: [
                'Check that the primary type is a key in `types`.'
            ]
        });
    }
}
exports.InvalidPrimaryTypeError = InvalidPrimaryTypeError;
class InvalidStructTypeError extends base_js_1.BaseError {
    constructor({ type }){
        super(`Struct type "${type}" is invalid.`, {
            metaMessages: [
                'Struct type must not be a Solidity type.'
            ],
            name: 'InvalidStructTypeError'
        });
    }
}
exports.InvalidStructTypeError = InvalidStructTypeError; //# sourceMappingURL=typedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidDecimalNumberError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidDecimalNumberError extends base_js_1.BaseError {
    constructor({ value }){
        super(`Number \`${value}\` is not a valid decimal number.`, {
            name: 'InvalidDecimalNumberError'
        });
    }
}
exports.InvalidDecimalNumberError = InvalidDecimalNumberError; //# sourceMappingURL=unit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAccount = parseAccount;
function parseAccount(account) {
    if (typeof account === 'string') return {
        address: account,
        type: 'json-rpc'
    };
    return account;
} //# sourceMappingURL=parseAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicKeyToAddress = publicKeyToAddress;
const getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
function publicKeyToAddress(publicKey) {
    const address = (0, keccak256_js_1.keccak256)(`0x${publicKey.substring(4)}`).substring(26);
    return (0, getAddress_js_1.checksumAddress)(`0x${address}`);
} //# sourceMappingURL=publicKeyToAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/wordlists.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.traditionalChinese = exports.spanish = exports.simplifiedChinese = exports.portuguese = exports.korean = exports.japanese = exports.italian = exports.french = exports.english = exports.czech = void 0;
var czech_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/czech.js [app-client] (ecmascript)");
Object.defineProperty(exports, "czech", {
    enumerable: true,
    get: function() {
        return czech_1.wordlist;
    }
});
var english_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/english.js [app-client] (ecmascript)");
Object.defineProperty(exports, "english", {
    enumerable: true,
    get: function() {
        return english_1.wordlist;
    }
});
var french_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/french.js [app-client] (ecmascript)");
Object.defineProperty(exports, "french", {
    enumerable: true,
    get: function() {
        return french_1.wordlist;
    }
});
var italian_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/italian.js [app-client] (ecmascript)");
Object.defineProperty(exports, "italian", {
    enumerable: true,
    get: function() {
        return italian_1.wordlist;
    }
});
var japanese_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/japanese.js [app-client] (ecmascript)");
Object.defineProperty(exports, "japanese", {
    enumerable: true,
    get: function() {
        return japanese_1.wordlist;
    }
});
var korean_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/korean.js [app-client] (ecmascript)");
Object.defineProperty(exports, "korean", {
    enumerable: true,
    get: function() {
        return korean_1.wordlist;
    }
});
var portuguese_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/portuguese.js [app-client] (ecmascript)");
Object.defineProperty(exports, "portuguese", {
    enumerable: true,
    get: function() {
        return portuguese_1.wordlist;
    }
});
var simplified_chinese_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/simplified-chinese.js [app-client] (ecmascript)");
Object.defineProperty(exports, "simplifiedChinese", {
    enumerable: true,
    get: function() {
        return simplified_chinese_1.wordlist;
    }
});
var spanish_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/spanish.js [app-client] (ecmascript)");
Object.defineProperty(exports, "spanish", {
    enumerable: true,
    get: function() {
        return spanish_1.wordlist;
    }
});
var traditional_chinese_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/wordlists/traditional-chinese.js [app-client] (ecmascript)");
Object.defineProperty(exports, "traditionalChinese", {
    enumerable: true,
    get: function() {
        return traditional_chinese_1.wordlist;
    }
}); //# sourceMappingURL=wordlists.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/generateMnemonic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateMnemonic = generateMnemonic;
const bip39_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/index.js [app-client] (ecmascript)");
function generateMnemonic(wordlist, strength) {
    return (0, bip39_1.generateMnemonic)(wordlist, strength);
} //# sourceMappingURL=generateMnemonic.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/generatePrivateKey.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generatePrivateKey = generatePrivateKey;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
function generatePrivateKey() {
    return (0, toHex_js_1.toHex)(secp256k1_1.secp256k1.utils.randomPrivateKey());
} //# sourceMappingURL=generatePrivateKey.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/toAccount.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toAccount = toAccount;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
function toAccount(source) {
    if (typeof source === 'string') {
        if (!(0, isAddress_js_1.isAddress)(source, {
            strict: false
        })) throw new address_js_1.InvalidAddressError({
            address: source
        });
        return {
            address: source,
            type: 'json-rpc'
        };
    }
    if (!(0, isAddress_js_1.isAddress)(source.address, {
        strict: false
    })) throw new address_js_1.InvalidAddressError({
        address: source.address
    });
    return {
        address: source.address,
        nonceManager: source.nonceManager,
        sign: source.sign,
        signAuthorization: source.signAuthorization,
        signMessage: source.signMessage,
        signTransaction: source.signTransaction,
        signTypedData: source.signTypedData,
        source: 'custom',
        type: 'local'
    };
} //# sourceMappingURL=toAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setSignEntropy = setSignEntropy;
exports.sign = sign;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const serializeSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)");
let extraEntropy = false;
function setSignEntropy(entropy) {
    if (!entropy) throw new Error('must be a `true` or a hex value.');
    extraEntropy = entropy;
}
async function sign({ hash, privateKey, to = 'object' }) {
    const { r, s, recovery } = secp256k1_1.secp256k1.sign(hash.slice(2), privateKey.slice(2), {
        lowS: true,
        extraEntropy
    });
    const signature = {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        v: recovery ? 28n : 27n,
        yParity: recovery
    };
    return (()=>{
        if (to === 'bytes' || to === 'hex') return (0, serializeSignature_js_1.serializeSignature)({
            ...signature,
            to
        });
        return signature;
    })();
} //# sourceMappingURL=sign.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signAuthorization.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signAuthorization = signAuthorization;
const hashAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/authorization/hashAuthorization.js [app-client] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
async function signAuthorization(parameters) {
    const { chainId, nonce, privateKey, to = 'object' } = parameters;
    const address = parameters.contractAddress ?? parameters.address;
    const signature = await (0, sign_js_1.sign)({
        hash: (0, hashAuthorization_js_1.hashAuthorization)({
            address,
            chainId,
            nonce
        }),
        privateKey,
        to
    });
    if (to === 'object') return {
        address,
        chainId,
        nonce,
        ...signature
    };
    return signature;
} //# sourceMappingURL=signAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signMessage = signMessage;
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
async function signMessage({ message, privateKey }) {
    return await (0, sign_js_1.sign)({
        hash: (0, hashMessage_js_1.hashMessage)(message),
        privateKey,
        to: 'hex'
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTransaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTransaction = signTransaction;
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
async function signTransaction(parameters) {
    const { privateKey, transaction, serializer = serializeTransaction_js_1.serializeTransaction } = parameters;
    const signableTransaction = (()=>{
        if (transaction.type === 'eip4844') return {
            ...transaction,
            sidecars: false
        };
        return transaction;
    })();
    const signature = await (0, sign_js_1.sign)({
        hash: (0, keccak256_js_1.keccak256)(serializer(signableTransaction)),
        privateKey
    });
    return serializer(transaction, signature);
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTypedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTypedData = signTypedData;
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
async function signTypedData(parameters) {
    const { privateKey, ...typedData } = parameters;
    return await (0, sign_js_1.sign)({
        hash: (0, hashTypedData_js_1.hashTypedData)(typedData),
        privateKey,
        to: 'hex'
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/privateKeyToAccount.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.privateKeyToAccount = privateKeyToAccount;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/toAccount.js [app-client] (ecmascript)");
const publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
const signAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signAuthorization.js [app-client] (ecmascript)");
const signMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signMessage.js [app-client] (ecmascript)");
const signTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTransaction.js [app-client] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTypedData.js [app-client] (ecmascript)");
function privateKeyToAccount(privateKey, options = {}) {
    const { nonceManager } = options;
    const publicKey = (0, toHex_js_1.toHex)(secp256k1_1.secp256k1.getPublicKey(privateKey.slice(2), false));
    const address = (0, publicKeyToAddress_js_1.publicKeyToAddress)(publicKey);
    const account = (0, toAccount_js_1.toAccount)({
        address,
        nonceManager,
        async sign ({ hash }) {
            return (0, sign_js_1.sign)({
                hash,
                privateKey,
                to: 'hex'
            });
        },
        async signAuthorization (authorization) {
            return (0, signAuthorization_js_1.signAuthorization)({
                ...authorization,
                privateKey
            });
        },
        async signMessage ({ message }) {
            return (0, signMessage_js_1.signMessage)({
                message,
                privateKey
            });
        },
        async signTransaction (transaction, { serializer } = {}) {
            return (0, signTransaction_js_1.signTransaction)({
                privateKey,
                transaction,
                serializer
            });
        },
        async signTypedData (typedData) {
            return (0, signTypedData_js_1.signTypedData)({
                ...typedData,
                privateKey
            });
        }
    });
    return {
        ...account,
        publicKey,
        source: 'privateKey'
    };
} //# sourceMappingURL=privateKeyToAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/hdKeyToAccount.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hdKeyToAccount = hdKeyToAccount;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const privateKeyToAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/privateKeyToAccount.js [app-client] (ecmascript)");
function hdKeyToAccount(hdKey_, { accountIndex = 0, addressIndex = 0, changeIndex = 0, path, ...options } = {}) {
    const hdKey = hdKey_.derive(path || `m/44'/60'/${accountIndex}'/${changeIndex}/${addressIndex}`);
    const account = (0, privateKeyToAccount_js_1.privateKeyToAccount)((0, toHex_js_1.toHex)(hdKey.privateKey), options);
    return {
        ...account,
        getHdKey: ()=>hdKey,
        source: 'hd'
    };
} //# sourceMappingURL=hdKeyToAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/mnemonicToAccount.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mnemonicToAccount = mnemonicToAccount;
const bip32_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip32@1.7.0/node_modules/@scure/bip32/lib/index.js [app-client] (ecmascript)");
const bip39_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/index.js [app-client] (ecmascript)");
const hdKeyToAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/hdKeyToAccount.js [app-client] (ecmascript)");
function mnemonicToAccount(mnemonic, opts = {}) {
    const seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
    return (0, hdKeyToAccount_js_1.hdKeyToAccount)(bip32_1.HDKey.fromMasterSeed(seed), opts);
} //# sourceMappingURL=mnemonicToAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/privateKeyToAddress.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.privateKeyToAddress = privateKeyToAddress;
const secp256k1_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.9.2/node_modules/@noble/curves/secp256k1.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const publicKeyToAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
function privateKeyToAddress(privateKey) {
    const publicKey = (0, toHex_js_1.bytesToHex)(secp256k1_1.secp256k1.getPublicKey(privateKey.slice(2), false));
    return (0, publicKeyToAddress_js_1.publicKeyToAddress)(publicKey);
} //# sourceMappingURL=privateKeyToAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nonceManager = exports.createNonceManager = exports.privateKeyToAddress = exports.publicKeyToAddress = exports.parseAccount = exports.signTypedData = exports.signTransaction = exports.signMessage = exports.signAuthorization = exports.serializeSignature = exports.signatureToHex = exports.sign = exports.setSignEntropy = exports.toAccount = exports.privateKeyToAccount = exports.mnemonicToAccount = exports.hdKeyToAccount = exports.generatePrivateKey = exports.generateMnemonic = exports.traditionalChinese = exports.spanish = exports.simplifiedChinese = exports.portuguese = exports.korean = exports.japanese = exports.italian = exports.french = exports.english = exports.czech = exports.HDKey = void 0;
var bip32_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@scure+bip32@1.7.0/node_modules/@scure/bip32/lib/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "HDKey", {
    enumerable: true,
    get: function() {
        return bip32_1.HDKey;
    }
});
var wordlists_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/wordlists.js [app-client] (ecmascript)");
Object.defineProperty(exports, "czech", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.czech;
    }
});
Object.defineProperty(exports, "english", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.english;
    }
});
Object.defineProperty(exports, "french", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.french;
    }
});
Object.defineProperty(exports, "italian", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.italian;
    }
});
Object.defineProperty(exports, "japanese", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.japanese;
    }
});
Object.defineProperty(exports, "korean", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.korean;
    }
});
Object.defineProperty(exports, "portuguese", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.portuguese;
    }
});
Object.defineProperty(exports, "simplifiedChinese", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.simplifiedChinese;
    }
});
Object.defineProperty(exports, "spanish", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.spanish;
    }
});
Object.defineProperty(exports, "traditionalChinese", {
    enumerable: true,
    get: function() {
        return wordlists_js_1.traditionalChinese;
    }
});
var generateMnemonic_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/generateMnemonic.js [app-client] (ecmascript)");
Object.defineProperty(exports, "generateMnemonic", {
    enumerable: true,
    get: function() {
        return generateMnemonic_js_1.generateMnemonic;
    }
});
var generatePrivateKey_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/generatePrivateKey.js [app-client] (ecmascript)");
Object.defineProperty(exports, "generatePrivateKey", {
    enumerable: true,
    get: function() {
        return generatePrivateKey_js_1.generatePrivateKey;
    }
});
var hdKeyToAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/hdKeyToAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hdKeyToAccount", {
    enumerable: true,
    get: function() {
        return hdKeyToAccount_js_1.hdKeyToAccount;
    }
});
var mnemonicToAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/mnemonicToAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "mnemonicToAccount", {
    enumerable: true,
    get: function() {
        return mnemonicToAccount_js_1.mnemonicToAccount;
    }
});
var privateKeyToAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/privateKeyToAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "privateKeyToAccount", {
    enumerable: true,
    get: function() {
        return privateKeyToAccount_js_1.privateKeyToAccount;
    }
});
var toAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/toAccount.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toAccount", {
    enumerable: true,
    get: function() {
        return toAccount_js_1.toAccount;
    }
});
var sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/sign.js [app-client] (ecmascript)");
Object.defineProperty(exports, "setSignEntropy", {
    enumerable: true,
    get: function() {
        return sign_js_1.setSignEntropy;
    }
});
Object.defineProperty(exports, "sign", {
    enumerable: true,
    get: function() {
        return sign_js_1.sign;
    }
});
var serializeSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signatureToHex", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
Object.defineProperty(exports, "serializeSignature", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
var signAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signAuthorization.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signAuthorization", {
    enumerable: true,
    get: function() {
        return signAuthorization_js_1.signAuthorization;
    }
});
var signMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signMessage", {
    enumerable: true,
    get: function() {
        return signMessage_js_1.signMessage;
    }
});
var signTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signTransaction", {
    enumerable: true,
    get: function() {
        return signTransaction_js_1.signTransaction;
    }
});
var signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/signTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signTypedData", {
    enumerable: true,
    get: function() {
        return signTypedData_js_1.signTypedData;
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
var privateKeyToAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/privateKeyToAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "privateKeyToAddress", {
    enumerable: true,
    get: function() {
        return privateKeyToAddress_js_1.privateKeyToAddress;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/solidity.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.solidityPanic = exports.solidityError = exports.panicReasons = void 0;
exports.panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.'
};
exports.solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string'
        }
    ],
    name: 'Error',
    type: 'error'
};
exports.solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256'
        }
    ],
    name: 'Panic',
    type: 'error'
}; //# sourceMappingURL=solidity.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weiUnits = exports.gweiUnits = exports.etherUnits = void 0;
exports.etherUnits = {
    gwei: 9,
    wei: 18
};
exports.gweiUnits = {
    ether: -9,
    wei: 9
};
exports.weiUnits = {
    ether: -18,
    gwei: -9
}; //# sourceMappingURL=unit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = exports.maxInt8 = void 0;
exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = void 0;
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
exports.maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/blob.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxBytesPerTransaction = exports.bytesPerBlob = exports.fieldElementsPerBlob = exports.bytesPerFieldElement = void 0;
const blobsPerTransaction = 6;
exports.bytesPerFieldElement = 32;
exports.fieldElementsPerBlob = 4096;
exports.bytesPerBlob = exports.bytesPerFieldElement * exports.fieldElementsPerBlob;
exports.maxBytesPerTransaction = exports.bytesPerBlob * blobsPerTransaction - 1 - 1 * exports.fieldElementsPerBlob * blobsPerTransaction; //# sourceMappingURL=blob.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/kzg.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.versionedHashVersionKzg = void 0;
exports.versionedHashVersionKzg = 1; //# sourceMappingURL=kzg.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.erc4626Abi = exports.erc721Abi = exports.erc1155Abi = exports.erc20Abi_bytes32 = exports.erc20Abi = exports.universalSignatureValidatorAbi = exports.smartAccountAbi = exports.addressResolverAbi = exports.textResolverAbi = exports.universalResolverReverseAbi = exports.universalResolverResolveAbi = exports.batchGatewayAbi = exports.multicall3Abi = void 0;
exports.multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool'
                    },
                    {
                        name: 'returnData',
                        type: 'bytes'
                    }
                ],
                name: 'returnData',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
exports.batchGatewayAbi = [
    {
        name: 'query',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'tuple[]',
                name: 'queries',
                components: [
                    {
                        type: 'address',
                        name: 'sender'
                    },
                    {
                        type: 'string[]',
                        name: 'urls'
                    },
                    {
                        type: 'bytes',
                        name: 'data'
                    }
                ]
            }
        ],
        outputs: [
            {
                type: 'bool[]',
                name: 'failures'
            },
            {
                type: 'bytes[]',
                name: 'responses'
            }
        ]
    },
    {
        name: 'HttpError',
        type: 'error',
        inputs: [
            {
                type: 'uint16',
                name: 'status'
            },
            {
                type: 'string',
                name: 'message'
            }
        ]
    }
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ResolverNotContract',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'ResolverError',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'status',
                        type: 'uint16'
                    },
                    {
                        name: 'message',
                        type: 'string'
                    }
                ],
                name: 'errors',
                type: 'tuple[]'
            }
        ],
        name: 'HttpError',
        type: 'error'
    }
];
exports.universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    },
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            },
            {
                name: 'gateways',
                type: 'string[]'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    }
];
exports.universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolvedAddress'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            },
            {
                type: 'address',
                name: 'resolver'
            }
        ]
    },
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            },
            {
                type: 'string[]',
                name: 'gateways'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolvedAddress'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            },
            {
                type: 'address',
                name: 'resolver'
            }
        ]
    }
];
exports.textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'key',
                type: 'string'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    }
];
exports.addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ]
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'coinType',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            }
        ]
    }
];
exports.smartAccountAbi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32'
            },
            {
                name: 'signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4'
            }
        ]
    }
];
exports.universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        name: 'isValidSig'
    }
];
exports.erc20Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
exports.erc20Abi_bytes32 = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32'
            }
        ]
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
exports.erc1155Abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'needed',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InsufficientBalance',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'approver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidApprover',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'idsLength',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'valuesLength',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InvalidArrayLength',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidOperator',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidReceiver',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidSender',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'ERC1155MissingApprovalForAll',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            }
        ],
        name: 'TransferBatch',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'TransferSingle',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'value',
                type: 'string'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'URI',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'accounts',
                type: 'address[]'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            }
        ],
        name: 'balanceOfBatch',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeBatchTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'uri',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
exports.erc721Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'ApprovalForAll',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                name: 'approved',
                type: 'bool'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'getApproved',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'isApprovedForAll',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'operator',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'ownerOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'id',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'setApprovalForAll',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'operator',
                type: 'address'
            },
            {
                name: 'approved',
                type: 'bool'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenURI',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    }
];
exports.erc4626Abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Deposit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Withdraw',
        type: 'event'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        name: 'allowance',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'asset',
        outputs: [
            {
                name: 'assetTokenAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'convertToAssets',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'convertToShares',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'deposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxDeposit',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxMint',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxRedeem',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxWithdraw',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'mint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewDeposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewMint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewRedeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewWithdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'redeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalAssets',
        outputs: [
            {
                name: 'totalManagedAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transfer',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'withdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=abis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contract.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aggregate3Signature = void 0;
exports.aggregate3Signature = '0x82ad56cb'; //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.universalSignatureValidatorByteCode = exports.deploylessCallViaFactoryBytecode = exports.deploylessCallViaBytecodeBytecode = void 0;
exports.deploylessCallViaBytecodeBytecode = '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe';
exports.deploylessCallViaFactoryBytecode = '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe';
exports.universalSignatureValidatorByteCode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572'; //# sourceMappingURL=contracts.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.presignMessagePrefix = void 0;
exports.presignMessagePrefix = '\x19Ethereum Signed Message:\n'; //# sourceMappingURL=strings.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroHash = exports.erc6492MagicBytes = void 0;
exports.erc6492MagicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
exports.zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000'; //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroAddress = exports.ethAddress = exports.entryPoint08Address = exports.entryPoint07Address = exports.entryPoint06Address = void 0;
exports.entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
exports.entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
exports.entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108';
exports.ethAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
exports.zeroAddress = '0x0000000000000000000000000000000000000000'; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClient = createClient;
exports.rpcSchema = rpcSchema;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const uid_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)");
function createClient(parameters) {
    const { batch, chain, ccipRead, key = 'base', name = 'Base Client', type = 'base' } = parameters;
    const blockTime = chain?.blockTime ?? 12_000;
    const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4_000);
    const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
    const cacheTime = parameters.cacheTime ?? pollingInterval;
    const account = parameters.account ? (0, parseAccount_js_1.parseAccount)(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, uid_js_1.uid)()
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
function rpcSchema() {
    return null;
} //# sourceMappingURL=createClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTransport = createTransport;
const buildRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/buildRequest.js [app-client] (ecmascript)");
const uid_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/uid.js [app-client] (ecmascript)");
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    const uid = (0, uid_js_1.uid)();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, buildRequest_js_1.buildRequest)(request, {
            methods,
            retryCount,
            retryDelay,
            uid
        }),
        value
    };
} //# sourceMappingURL=createTransport.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/custom.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.custom = custom;
const createTransport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function custom(provider, config = {}) {
    const { key = 'custom', methods, name = 'Custom Provider', retryDelay } = config;
    return ({ retryCount: defaultRetryCount })=>(0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            request: provider.request.bind(provider),
            retryCount: config.retryCount ?? defaultRetryCount,
            retryDelay,
            type: 'custom'
        });
} //# sourceMappingURL=custom.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/fallback.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fallback = fallback;
exports.shouldThrow = shouldThrow;
exports.rankTransports = rankTransports;
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
const wait_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/wait.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function fallback(transports_, config = {}) {
    const { key = 'fallback', name = 'Fallback', rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
    return ({ chain, pollingInterval = 4_000, timeout, ...rest })=>{
        let transports = transports_;
        let onResponse = ()=>{};
        const transport = (0, createTransport_js_1.createTransport)({
            key,
            name,
            async request ({ method, params }) {
                let includes;
                const fetch = async (i = 0)=>{
                    const transport = transports[i]({
                        ...rest,
                        chain,
                        retryCount: 0,
                        timeout
                    });
                    try {
                        const response = await transport.request({
                            method,
                            params
                        });
                        onResponse({
                            method,
                            params: params,
                            response,
                            transport,
                            status: 'success'
                        });
                        return response;
                    } catch (err) {
                        onResponse({
                            error: err,
                            method,
                            params: params,
                            transport,
                            status: 'error'
                        });
                        if (shouldThrow_(err)) throw err;
                        if (i === transports.length - 1) throw err;
                        includes ??= transports.slice(i + 1).some((transport)=>{
                            const { include, exclude } = transport({
                                chain
                            }).config.methods || {};
                            if (include) return include.includes(method);
                            if (exclude) return !exclude.includes(method);
                            return true;
                        });
                        if (!includes) throw err;
                        return fetch(i + 1);
                    }
                };
                return fetch();
            },
            retryCount,
            retryDelay,
            type: 'fallback'
        }, {
            onResponse: (fn)=>onResponse = fn,
            transports: transports.map((fn)=>fn({
                    chain,
                    retryCount: 0
                }))
        });
        if (rank) {
            const rankOptions = typeof rank === 'object' ? rank : {};
            rankTransports({
                chain,
                interval: rankOptions.interval ?? pollingInterval,
                onTransports: (transports_)=>transports = transports_,
                ping: rankOptions.ping,
                sampleCount: rankOptions.sampleCount,
                timeout: rankOptions.timeout,
                transports,
                weights: rankOptions.weights
            });
        }
        return transport;
    };
}
function shouldThrow(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === rpc_js_1.TransactionRejectedRpcError.code || error.code === rpc_js_1.UserRejectedRequestError.code || node_js_1.ExecutionRevertedError.nodeMessage.test(error.message) || error.code === 5000) return true;
    }
    return false;
}
function rankTransports({ chain, interval = 4_000, onTransports, ping, sampleCount = 10, timeout = 1_000, transports, weights = {} }) {
    const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
    const samples = [];
    const rankTransports_ = async ()=>{
        const sample = await Promise.all(transports.map(async (transport)=>{
            const transport_ = transport({
                chain,
                retryCount: 0,
                timeout
            });
            const start = Date.now();
            let end;
            let success;
            try {
                await (ping ? ping({
                    transport: transport_
                }) : transport_.request({
                    method: 'net_listening'
                }));
                success = 1;
            } catch  {
                success = 0;
            } finally{
                end = Date.now();
            }
            const latency = end - start;
            return {
                latency,
                success
            };
        }));
        samples.push(sample);
        if (samples.length > sampleCount) samples.shift();
        const maxLatency = Math.max(...samples.map((sample)=>Math.max(...sample.map(({ latency })=>latency))));
        const scores = transports.map((_, i)=>{
            const latencies = samples.map((sample)=>sample[i].latency);
            const meanLatency = latencies.reduce((acc, latency)=>acc + latency, 0) / latencies.length;
            const latencyScore = 1 - meanLatency / maxLatency;
            const successes = samples.map((sample)=>sample[i].success);
            const stabilityScore = successes.reduce((acc, success)=>acc + success, 0) / successes.length;
            if (stabilityScore === 0) return [
                0,
                i
            ];
            return [
                latencyWeight * latencyScore + stabilityWeight * stabilityScore,
                i
            ];
        }).sort((a, b)=>b[0] - a[0]);
        onTransports(scores.map(([, i])=>transports[i]));
        await (0, wait_js_1.wait)(interval);
        rankTransports_();
    };
    rankTransports_();
} //# sourceMappingURL=fallback.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/http.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.http = http;
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const transport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
const http_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/http.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function http(url, config = {}) {
    const { batch, fetchOptions, key = 'http', methods, name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay, raw } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new transport_js_1.UrlRequiredError();
        const rpcClient = (0, http_js_1.getHttpRpcClient)(url_, {
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout
        });
        return (0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
                    id: url_,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpcClient.request({
                            body
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpcClient.request({
                            body
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (raw) return {
                    error,
                    result
                };
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url: url_
        });
    };
} //# sourceMappingURL=http.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicActions = publicActions;
const getEnsAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-client] (ecmascript)");
const getEnsAvatar_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-client] (ecmascript)");
const getEnsName_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-client] (ecmascript)");
const getEnsResolver_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-client] (ecmascript)");
const getEnsText_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-client] (ecmascript)");
const call_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/call.js [app-client] (ecmascript)");
const createAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createAccessList.js [app-client] (ecmascript)");
const createBlockFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-client] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
const createEventFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-client] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-client] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
const estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-client] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
const getBalance_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-client] (ecmascript)");
const getBlobBaseFee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlobBaseFee.js [app-client] (ecmascript)");
const getBlock_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-client] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-client] (ecmascript)");
const getBlockTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const getCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getCode.js [app-client] (ecmascript)");
const getContractEvents_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-client] (ecmascript)");
const getEip712Domain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-client] (ecmascript)");
const getFeeHistory_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-client] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-client] (ecmascript)");
const getFilterLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-client] (ecmascript)");
const getGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-client] (ecmascript)");
const getLogs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-client] (ecmascript)");
const getProof_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getProof.js [app-client] (ecmascript)");
const getStorageAt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-client] (ecmascript)");
const getTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-client] (ecmascript)");
const getTransactionConfirmations_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-client] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
const multicall_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/multicall.js [app-client] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-client] (ecmascript)");
const simulateBlocks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateBlocks.js [app-client] (ecmascript)");
const simulateCalls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateCalls.js [app-client] (ecmascript)");
const simulateContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-client] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-client] (ecmascript)");
const verifyMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-client] (ecmascript)");
const verifyTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-client] (ecmascript)");
const waitForTransactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
const watchBlocks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-client] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-client] (ecmascript)");
const watchEvent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchEvent.js [app-client] (ecmascript)");
const watchPendingTransactions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-client] (ecmascript)");
const verifySiweMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/siwe/verifySiweMessage.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
function publicActions(client) {
    return {
        call: (args)=>(0, call_js_1.call)(client, args),
        createAccessList: (args)=>(0, createAccessList_js_1.createAccessList)(client, args),
        createBlockFilter: ()=>(0, createBlockFilter_js_1.createBlockFilter)(client),
        createContractEventFilter: (args)=>(0, createContractEventFilter_js_1.createContractEventFilter)(client, args),
        createEventFilter: (args)=>(0, createEventFilter_js_1.createEventFilter)(client, args),
        createPendingTransactionFilter: ()=>(0, createPendingTransactionFilter_js_1.createPendingTransactionFilter)(client),
        estimateContractGas: (args)=>(0, estimateContractGas_js_1.estimateContractGas)(client, args),
        estimateGas: (args)=>(0, estimateGas_js_1.estimateGas)(client, args),
        getBalance: (args)=>(0, getBalance_js_1.getBalance)(client, args),
        getBlobBaseFee: ()=>(0, getBlobBaseFee_js_1.getBlobBaseFee)(client),
        getBlock: (args)=>(0, getBlock_js_1.getBlock)(client, args),
        getBlockNumber: (args)=>(0, getBlockNumber_js_1.getBlockNumber)(client, args),
        getBlockTransactionCount: (args)=>(0, getBlockTransactionCount_js_1.getBlockTransactionCount)(client, args),
        getBytecode: (args)=>(0, getCode_js_1.getCode)(client, args),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getCode: (args)=>(0, getCode_js_1.getCode)(client, args),
        getContractEvents: (args)=>(0, getContractEvents_js_1.getContractEvents)(client, args),
        getEip712Domain: (args)=>(0, getEip712Domain_js_1.getEip712Domain)(client, args),
        getEnsAddress: (args)=>(0, getEnsAddress_js_1.getEnsAddress)(client, args),
        getEnsAvatar: (args)=>(0, getEnsAvatar_js_1.getEnsAvatar)(client, args),
        getEnsName: (args)=>(0, getEnsName_js_1.getEnsName)(client, args),
        getEnsResolver: (args)=>(0, getEnsResolver_js_1.getEnsResolver)(client, args),
        getEnsText: (args)=>(0, getEnsText_js_1.getEnsText)(client, args),
        getFeeHistory: (args)=>(0, getFeeHistory_js_1.getFeeHistory)(client, args),
        estimateFeesPerGas: (args)=>(0, estimateFeesPerGas_js_1.estimateFeesPerGas)(client, args),
        getFilterChanges: (args)=>(0, getFilterChanges_js_1.getFilterChanges)(client, args),
        getFilterLogs: (args)=>(0, getFilterLogs_js_1.getFilterLogs)(client, args),
        getGasPrice: ()=>(0, getGasPrice_js_1.getGasPrice)(client),
        getLogs: (args)=>(0, getLogs_js_1.getLogs)(client, args),
        getProof: (args)=>(0, getProof_js_1.getProof)(client, args),
        estimateMaxPriorityFeePerGas: (args)=>(0, estimateMaxPriorityFeePerGas_js_1.estimateMaxPriorityFeePerGas)(client, args),
        getStorageAt: (args)=>(0, getStorageAt_js_1.getStorageAt)(client, args),
        getTransaction: (args)=>(0, getTransaction_js_1.getTransaction)(client, args),
        getTransactionConfirmations: (args)=>(0, getTransactionConfirmations_js_1.getTransactionConfirmations)(client, args),
        getTransactionCount: (args)=>(0, getTransactionCount_js_1.getTransactionCount)(client, args),
        getTransactionReceipt: (args)=>(0, getTransactionReceipt_js_1.getTransactionReceipt)(client, args),
        multicall: (args)=>(0, multicall_js_1.multicall)(client, args),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        readContract: (args)=>(0, readContract_js_1.readContract)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        simulate: (args)=>(0, simulateBlocks_js_1.simulateBlocks)(client, args),
        simulateBlocks: (args)=>(0, simulateBlocks_js_1.simulateBlocks)(client, args),
        simulateCalls: (args)=>(0, simulateCalls_js_1.simulateCalls)(client, args),
        simulateContract: (args)=>(0, simulateContract_js_1.simulateContract)(client, args),
        verifyMessage: (args)=>(0, verifyMessage_js_1.verifyMessage)(client, args),
        verifySiweMessage: (args)=>(0, verifySiweMessage_js_1.verifySiweMessage)(client, args),
        verifyTypedData: (args)=>(0, verifyTypedData_js_1.verifyTypedData)(client, args),
        uninstallFilter: (args)=>(0, uninstallFilter_js_1.uninstallFilter)(client, args),
        waitForTransactionReceipt: (args)=>(0, waitForTransactionReceipt_js_1.waitForTransactionReceipt)(client, args),
        watchBlocks: (args)=>(0, watchBlocks_js_1.watchBlocks)(client, args),
        watchBlockNumber: (args)=>(0, watchBlockNumber_js_1.watchBlockNumber)(client, args),
        watchContractEvent: (args)=>(0, watchContractEvent_js_1.watchContractEvent)(client, args),
        watchEvent: (args)=>(0, watchEvent_js_1.watchEvent)(client, args),
        watchPendingTransactions: (args)=>(0, watchPendingTransactions_js_1.watchPendingTransactions)(client, args)
    };
} //# sourceMappingURL=public.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createPublicClient.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPublicClient = createPublicClient;
const createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const public_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)");
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(public_js_1.publicActions);
} //# sourceMappingURL=createPublicClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testActions = testActions;
const dropTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-client] (ecmascript)");
const dumpState_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/dumpState.js [app-client] (ecmascript)");
const getAutomine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getAutomine.js [app-client] (ecmascript)");
const getTxpoolContent_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-client] (ecmascript)");
const getTxpoolStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-client] (ecmascript)");
const impersonateAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-client] (ecmascript)");
const increaseTime_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/increaseTime.js [app-client] (ecmascript)");
const inspectTxpool_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-client] (ecmascript)");
const loadState_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/loadState.js [app-client] (ecmascript)");
const mine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/mine.js [app-client] (ecmascript)");
const removeBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-client] (ecmascript)");
const reset_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/reset.js [app-client] (ecmascript)");
const revert_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/revert.js [app-client] (ecmascript)");
const sendUnsignedTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-client] (ecmascript)");
const setAutomine_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setAutomine.js [app-client] (ecmascript)");
const setBalance_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBalance.js [app-client] (ecmascript)");
const setBlockGasLimit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-client] (ecmascript)");
const setBlockTimestampInterval_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-client] (ecmascript)");
const setCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCode.js [app-client] (ecmascript)");
const setCoinbase_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-client] (ecmascript)");
const setIntervalMining_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-client] (ecmascript)");
const setLoggingEnabled_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-client] (ecmascript)");
const setMinGasPrice_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-client] (ecmascript)");
const setNextBlockBaseFeePerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-client] (ecmascript)");
const setNextBlockTimestamp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-client] (ecmascript)");
const setNonce_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setNonce.js [app-client] (ecmascript)");
const setRpcUrl_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-client] (ecmascript)");
const setStorageAt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-client] (ecmascript)");
const snapshot_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/snapshot.js [app-client] (ecmascript)");
const stopImpersonatingAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-client] (ecmascript)");
function testActions({ mode }) {
    return (client_)=>{
        const client = client_.extend(()=>({
                mode
            }));
        return {
            dropTransaction: (args)=>(0, dropTransaction_js_1.dropTransaction)(client, args),
            dumpState: ()=>(0, dumpState_js_1.dumpState)(client),
            getAutomine: ()=>(0, getAutomine_js_1.getAutomine)(client),
            getTxpoolContent: ()=>(0, getTxpoolContent_js_1.getTxpoolContent)(client),
            getTxpoolStatus: ()=>(0, getTxpoolStatus_js_1.getTxpoolStatus)(client),
            impersonateAccount: (args)=>(0, impersonateAccount_js_1.impersonateAccount)(client, args),
            increaseTime: (args)=>(0, increaseTime_js_1.increaseTime)(client, args),
            inspectTxpool: ()=>(0, inspectTxpool_js_1.inspectTxpool)(client),
            loadState: (args)=>(0, loadState_js_1.loadState)(client, args),
            mine: (args)=>(0, mine_js_1.mine)(client, args),
            removeBlockTimestampInterval: ()=>(0, removeBlockTimestampInterval_js_1.removeBlockTimestampInterval)(client),
            reset: (args)=>(0, reset_js_1.reset)(client, args),
            revert: (args)=>(0, revert_js_1.revert)(client, args),
            sendUnsignedTransaction: (args)=>(0, sendUnsignedTransaction_js_1.sendUnsignedTransaction)(client, args),
            setAutomine: (args)=>(0, setAutomine_js_1.setAutomine)(client, args),
            setBalance: (args)=>(0, setBalance_js_1.setBalance)(client, args),
            setBlockGasLimit: (args)=>(0, setBlockGasLimit_js_1.setBlockGasLimit)(client, args),
            setBlockTimestampInterval: (args)=>(0, setBlockTimestampInterval_js_1.setBlockTimestampInterval)(client, args),
            setCode: (args)=>(0, setCode_js_1.setCode)(client, args),
            setCoinbase: (args)=>(0, setCoinbase_js_1.setCoinbase)(client, args),
            setIntervalMining: (args)=>(0, setIntervalMining_js_1.setIntervalMining)(client, args),
            setLoggingEnabled: (args)=>(0, setLoggingEnabled_js_1.setLoggingEnabled)(client, args),
            setMinGasPrice: (args)=>(0, setMinGasPrice_js_1.setMinGasPrice)(client, args),
            setNextBlockBaseFeePerGas: (args)=>(0, setNextBlockBaseFeePerGas_js_1.setNextBlockBaseFeePerGas)(client, args),
            setNextBlockTimestamp: (args)=>(0, setNextBlockTimestamp_js_1.setNextBlockTimestamp)(client, args),
            setNonce: (args)=>(0, setNonce_js_1.setNonce)(client, args),
            setRpcUrl: (args)=>(0, setRpcUrl_js_1.setRpcUrl)(client, args),
            setStorageAt: (args)=>(0, setStorageAt_js_1.setStorageAt)(client, args),
            snapshot: ()=>(0, snapshot_js_1.snapshot)(client),
            stopImpersonatingAccount: (args)=>(0, stopImpersonatingAccount_js_1.stopImpersonatingAccount)(client, args)
        };
    };
} //# sourceMappingURL=test.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createTestClient.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTestClient = createTestClient;
const createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const test_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)");
function createTestClient(parameters) {
    const { key = 'test', name = 'Test Client', mode } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'testClient'
    });
    return client.extend((config)=>({
            mode,
            ...(0, test_js_1.testActions)({
                mode
            })(config)
        }));
} //# sourceMappingURL=createTestClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.walletActions = walletActions;
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-client] (ecmascript)");
const addChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/addChain.js [app-client] (ecmascript)");
const deployContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-client] (ecmascript)");
const getAddresses_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-client] (ecmascript)");
const getCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCallsStatus.js [app-client] (ecmascript)");
const getCapabilities_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getCapabilities.js [app-client] (ecmascript)");
const getPermissions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-client] (ecmascript)");
const prepareAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
const requestAddresses_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-client] (ecmascript)");
const requestPermissions_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-client] (ecmascript)");
const sendCalls_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendCalls.js [app-client] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
const sendTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
const showCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/showCallsStatus.js [app-client] (ecmascript)");
const signAuthorization_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signAuthorization.js [app-client] (ecmascript)");
const signMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-client] (ecmascript)");
const signTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-client] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-client] (ecmascript)");
const switchChain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-client] (ecmascript)");
const waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)");
const watchAsset_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-client] (ecmascript)");
const writeContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-client] (ecmascript)");
function walletActions(client) {
    return {
        addChain: (args)=>(0, addChain_js_1.addChain)(client, args),
        deployContract: (args)=>(0, deployContract_js_1.deployContract)(client, args),
        getAddresses: ()=>(0, getAddresses_js_1.getAddresses)(client),
        getCallsStatus: (args)=>(0, getCallsStatus_js_1.getCallsStatus)(client, args),
        getCapabilities: (args)=>(0, getCapabilities_js_1.getCapabilities)(client, args),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getPermissions: ()=>(0, getPermissions_js_1.getPermissions)(client),
        prepareAuthorization: (args)=>(0, prepareAuthorization_js_1.prepareAuthorization)(client, args),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        requestAddresses: ()=>(0, requestAddresses_js_1.requestAddresses)(client),
        requestPermissions: (args)=>(0, requestPermissions_js_1.requestPermissions)(client, args),
        sendCalls: (args)=>(0, sendCalls_js_1.sendCalls)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        sendTransaction: (args)=>(0, sendTransaction_js_1.sendTransaction)(client, args),
        showCallsStatus: (args)=>(0, showCallsStatus_js_1.showCallsStatus)(client, args),
        signAuthorization: (args)=>(0, signAuthorization_js_1.signAuthorization)(client, args),
        signMessage: (args)=>(0, signMessage_js_1.signMessage)(client, args),
        signTransaction: (args)=>(0, signTransaction_js_1.signTransaction)(client, args),
        signTypedData: (args)=>(0, signTypedData_js_1.signTypedData)(client, args),
        switchChain: (args)=>(0, switchChain_js_1.switchChain)(client, args),
        waitForCallsStatus: (args)=>(0, waitForCallsStatus_js_1.waitForCallsStatus)(client, args),
        watchAsset: (args)=>(0, watchAsset_js_1.watchAsset)(client, args),
        writeContract: (args)=>(0, writeContract_js_1.writeContract)(client, args)
    };
} //# sourceMappingURL=wallet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createWalletClient.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createWalletClient = createWalletClient;
const createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
const wallet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)");
function createWalletClient(parameters) {
    const { key = 'wallet', name = 'Wallet Client', transport } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        transport,
        type: 'walletClient'
    });
    return client.extend(wallet_js_1.walletActions);
} //# sourceMappingURL=createWalletClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/webSocket.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.webSocket = webSocket;
const request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
const transport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
const compat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/compat.js [app-client] (ecmascript)");
const webSocket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/rpc/webSocket.js [app-client] (ecmascript)");
const createTransport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
function webSocket(url, config = {}) {
    const { keepAlive, key = 'webSocket', methods, name = 'WebSocket JSON-RPC', reconnect, retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.webSocket?.[0];
        const wsRpcClientOpts = {
            keepAlive,
            reconnect
        };
        if (!url_) throw new transport_js_1.UrlRequiredError();
        return (0, createTransport_js_1.createTransport)({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const rpcClient = await (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
                const { error, result } = await rpcClient.requestAsync({
                    body,
                    timeout
                });
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'webSocket'
        }, {
            getSocket () {
                return (0, compat_js_1.getSocket)(url_);
            },
            getRpcClient () {
                return (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
            },
            async subscribe ({ params, onData, onError }) {
                const rpcClient = await (0, webSocket_js_1.getWebSocketRpcClient)(url_, wsRpcClientOpts);
                const { result: subscriptionId } = await new Promise((resolve, reject)=>rpcClient.request({
                        body: {
                            method: 'eth_subscribe',
                            params
                        },
                        onError (error) {
                            reject(error);
                            onError?.(error);
                            return;
                        },
                        onResponse (response) {
                            if (response.error) {
                                reject(response.error);
                                onError?.(response.error);
                                return;
                            }
                            if (typeof response.id === 'number') {
                                resolve(response);
                                return;
                            }
                            if (response.method !== 'eth_subscription') return;
                            onData(response.params);
                        }
                    }));
                return {
                    subscriptionId,
                    async unsubscribe () {
                        return new Promise((resolve)=>rpcClient.request({
                                body: {
                                    method: 'eth_unsubscribe',
                                    params: [
                                        subscriptionId
                                    ]
                                },
                                onResponse: resolve
                            }));
                    }
                };
            }
        });
    };
} //# sourceMappingURL=webSocket.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/types/eip1193.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProviderRpcError = void 0;
class ProviderRpcError extends Error {
    constructor(code, message){
        super(message);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = code;
        this.details = message;
    }
}
exports.ProviderRpcError = ProviderRpcError; //# sourceMappingURL=eip1193.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxInt8 = exports.weiUnits = exports.gweiUnits = exports.etherUnits = exports.universalSignatureValidatorByteCode = exports.deploylessCallViaFactoryBytecode = exports.deploylessCallViaBytecodeBytecode = exports.zeroAddress = exports.ethAddress = exports.universalSignatureValidatorAbi = exports.erc4626Abi = exports.erc1155Abi = exports.erc721Abi = exports.erc20Abi_bytes32 = exports.erc20Abi = exports.multicall3Abi = exports.webSocket = exports.createWalletClient = exports.createTransport = exports.walletActions = exports.testActions = exports.publicActions = exports.createTestClient = exports.createPublicClient = exports.http = exports.shouldThrow = exports.fallback = exports.custom = exports.rpcSchema = exports.createClient = exports.WaitForCallsStatusTimeoutError = exports.getContract = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.UnknownSignatureError = exports.UnknownTypeError = exports.SolidityProtectedKeywordError = exports.InvalidStructSignatureError = exports.InvalidSignatureError = exports.InvalidParenthesisError = exports.InvalidParameterError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.InvalidAbiItemError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = exports.CircularReferenceError = void 0;
exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = void 0;
exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = exports.AbiConstructorNotFoundError = exports.presignMessagePrefix = exports.zeroHash = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = void 0;
exports.ProviderRpcError = exports.ProviderDisconnectedError = exports.ParseRpcError = exports.MethodNotSupportedRpcError = exports.MethodNotFoundRpcError = exports.LimitExceededRpcError = exports.JsonRpcVersionUnsupportedError = exports.InvalidRequestRpcError = exports.InvalidParamsRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.DuplicateIdError = exports.ChainDisconnectedError = exports.BundleTooLargeError = exports.AtomicityNotSupportedError = exports.AtomicReadyWalletRejectedUpgradeError = exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = exports.CounterfactualDeploymentFailedError = exports.RawContractError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = exports.BlockNotFoundError = exports.setErrorConfig = exports.BaseError = exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiEncodingTypeError = exports.InvalidAbiDecodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiFunctionSignatureNotFoundError = exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiEventNotFoundError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = void 0;
exports.InvalidSerializedTransactionError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = exports.InvalidAddressError = exports.WebSocketRequestError = exports.SocketClosedError = exports.TimeoutError = exports.RpcRequestError = exports.HttpRequestError = exports.FilterTypeNotSupportedError = exports.UnknownNodeError = exports.TransactionTypeNotSupportedError = exports.TipAboveFeeCapError = exports.NonceTooLowError = exports.NonceTooHighError = exports.NonceMaxValueError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = exports.EstimateGasExecutionError = exports.InvalidDecimalNumberError = exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarInvalidNftUriError = exports.EnsAvatarUriResolutionError = exports.SizeOverflowError = exports.InvalidHexValueError = exports.InvalidHexBooleanError = exports.IntegerOutOfRangeError = exports.InvalidBytesBooleanError = exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = exports.UserRejectedRequestError = exports.UnsupportedProviderMethodError = exports.UnsupportedNonOptionalCapabilityError = exports.UnsupportedChainIdError = exports.UnknownRpcError = exports.UnknownBundleIdError = exports.UnauthorizedProviderError = exports.TransactionRejectedRpcError = exports.SwitchChainError = exports.RpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = void 0;
exports.hashStruct = exports.hashDomain = exports.getTransactionType = exports.getSerializedTransactionType = exports.getCreateAddress = exports.getCreate2Address = exports.getContractAddress = exports.getAbiItem = exports.rpcTransactionType = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.formatTransactionReceipt = exports.defineTransactionReceipt = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.parseEventLogs = exports.encodeFunctionResult = exports.prepareEncodeFunctionData = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeDeployData = exports.decodeAbiParameters = exports.formatLog = exports.formatBlock = exports.defineBlock = exports.namehash = exports.labelhash = exports.EIP1193ProviderRpcError = exports.InvalidStructTypeError = exports.InvalidPrimaryTypeError = exports.InvalidDomainError = exports.StateAssignmentConflictError = exports.AccountStateConflictError = exports.UrlRequiredError = exports.SliceOffsetOutOfBoundsError = exports.SizeExceedsPaddingSizeError = exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionTypeError = void 0;
exports.blobsToCommitments = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.ccipRequest = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigInt = exports.toHex = exports.stringToHex = exports.numberToHex = exports.bytesToHex = exports.boolToHex = exports.toBytes = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.boolToBytes = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.serializeErc6492Signature = exports.isErc6492Signature = exports.parseErc6492Signature = exports.verifyTypedData = exports.verifyMessage = exports.verifyHash = exports.toRlp = exports.hexToRlp = exports.bytesToRlp = exports.serializeSignature = exports.signatureToHex = exports.serializeCompactSignature = exports.compactSignatureToHex = exports.signatureToCompactSignature = exports.recoverTypedDataAddress = exports.recoverTransactionAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.parseSignature = exports.hexToSignature = exports.parseCompactSignature = exports.hexToCompactSignature = exports.compactSignatureToSignature = exports.hashTypedData = void 0;
exports.keccak256 = exports.isHex = exports.isHash = exports.isBytes = exports.isAddressEqual = exports.isAddress = exports.toPrefixedMessage = exports.hashMessage = exports.toFunctionHash = exports.toEventHash = exports.getFunctionSignature = exports.toFunctionSignature = exports.getEventSignature = exports.toEventSignature = exports.getFunctionSelector = exports.toFunctionSelector = exports.getEventSelector = exports.toEventSelector = exports.getContractError = exports.getAddress = exports.checksumAddress = exports.fromRlp = exports.hexToString = exports.hexToNumber = exports.hexToBool = exports.hexToBigInt = exports.fromHex = exports.formatUnits = exports.formatGwei = exports.formatEther = exports.withTimeout = exports.withRetry = exports.withCache = exports.encodePacked = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.concatHex = exports.concatBytes = exports.concat = exports.setupKzg = exports.defineKzg = exports.toBlobs = exports.toBlobSidecars = exports.fromBlobs = exports.blobsToProofs = exports.sidecarsToVersionedHashes = exports.commitmentsToVersionedHashes = exports.commitmentToVersionedHash = void 0;
exports.nonceManager = exports.createNonceManager = exports.getTypesForEIP712Domain = exports.domainSeparator = exports.validateTypedData = exports.serializeTypedData = exports.trim = exports.stringify = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.serializeTransaction = exports.serializeAccessList = exports.parseUnits = exports.parseTransaction = exports.parseGwei = exports.parseEther = exports.padHex = exports.padBytes = exports.pad = exports.ripemd160 = exports.sha256 = void 0;
var abitype_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return abitype_1.CircularReferenceError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParenthesisError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abitype_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownTypeError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownSignatureError;
    }
});
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
var getContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/getContract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContract", {
    enumerable: true,
    get: function() {
        return getContract_js_1.getContract;
    }
});
var waitForCallsStatus_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)");
Object.defineProperty(exports, "WaitForCallsStatusTimeoutError", {
    enumerable: true,
    get: function() {
        return waitForCallsStatus_js_1.WaitForCallsStatusTimeoutError;
    }
});
var createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createClient", {
    enumerable: true,
    get: function() {
        return createClient_js_1.createClient;
    }
});
Object.defineProperty(exports, "rpcSchema", {
    enumerable: true,
    get: function() {
        return createClient_js_1.rpcSchema;
    }
});
var custom_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/custom.js [app-client] (ecmascript)");
Object.defineProperty(exports, "custom", {
    enumerable: true,
    get: function() {
        return custom_js_1.custom;
    }
});
var fallback_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/fallback.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fallback", {
    enumerable: true,
    get: function() {
        return fallback_js_1.fallback;
    }
});
Object.defineProperty(exports, "shouldThrow", {
    enumerable: true,
    get: function() {
        return fallback_js_1.shouldThrow;
    }
});
var http_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/http.js [app-client] (ecmascript)");
Object.defineProperty(exports, "http", {
    enumerable: true,
    get: function() {
        return http_js_1.http;
    }
});
var createPublicClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createPublicClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createPublicClient", {
    enumerable: true,
    get: function() {
        return createPublicClient_js_1.createPublicClient;
    }
});
var createTestClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createTestClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createTestClient", {
    enumerable: true,
    get: function() {
        return createTestClient_js_1.createTestClient;
    }
});
var public_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/public.js [app-client] (ecmascript)");
Object.defineProperty(exports, "publicActions", {
    enumerable: true,
    get: function() {
        return public_js_1.publicActions;
    }
});
var test_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/test.js [app-client] (ecmascript)");
Object.defineProperty(exports, "testActions", {
    enumerable: true,
    get: function() {
        return test_js_1.testActions;
    }
});
var wallet_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-client] (ecmascript)");
Object.defineProperty(exports, "walletActions", {
    enumerable: true,
    get: function() {
        return wallet_js_1.walletActions;
    }
});
var createTransport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createTransport", {
    enumerable: true,
    get: function() {
        return createTransport_js_1.createTransport;
    }
});
var createWalletClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createWalletClient.js [app-client] (ecmascript)");
Object.defineProperty(exports, "createWalletClient", {
    enumerable: true,
    get: function() {
        return createWalletClient_js_1.createWalletClient;
    }
});
var webSocket_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/transports/webSocket.js [app-client] (ecmascript)");
Object.defineProperty(exports, "webSocket", {
    enumerable: true,
    get: function() {
        return webSocket_js_1.webSocket;
    }
});
var abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/abis.js [app-client] (ecmascript)");
Object.defineProperty(exports, "multicall3Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.multicall3Abi;
    }
});
Object.defineProperty(exports, "erc20Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc20Abi;
    }
});
Object.defineProperty(exports, "erc20Abi_bytes32", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc20Abi_bytes32;
    }
});
Object.defineProperty(exports, "erc721Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc721Abi;
    }
});
Object.defineProperty(exports, "erc1155Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc1155Abi;
    }
});
Object.defineProperty(exports, "erc4626Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.erc4626Abi;
    }
});
Object.defineProperty(exports, "universalSignatureValidatorAbi", {
    enumerable: true,
    get: function() {
        return abis_js_1.universalSignatureValidatorAbi;
    }
});
var address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ethAddress", {
    enumerable: true,
    get: function() {
        return address_js_1.ethAddress;
    }
});
Object.defineProperty(exports, "zeroAddress", {
    enumerable: true,
    get: function() {
        return address_js_1.zeroAddress;
    }
});
var contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/contracts.js [app-client] (ecmascript)");
Object.defineProperty(exports, "deploylessCallViaBytecodeBytecode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.deploylessCallViaBytecodeBytecode;
    }
});
Object.defineProperty(exports, "deploylessCallViaFactoryBytecode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.deploylessCallViaFactoryBytecode;
    }
});
Object.defineProperty(exports, "universalSignatureValidatorByteCode", {
    enumerable: true,
    get: function() {
        return contracts_js_1.universalSignatureValidatorByteCode;
    }
});
var unit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/unit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "etherUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.etherUnits;
    }
});
Object.defineProperty(exports, "gweiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.gweiUnits;
    }
});
Object.defineProperty(exports, "weiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.weiUnits;
    }
});
var number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
Object.defineProperty(exports, "maxInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt8;
    }
});
Object.defineProperty(exports, "maxInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt16;
    }
});
Object.defineProperty(exports, "maxInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt24;
    }
});
Object.defineProperty(exports, "maxInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt32;
    }
});
Object.defineProperty(exports, "maxInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt40;
    }
});
Object.defineProperty(exports, "maxInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt48;
    }
});
Object.defineProperty(exports, "maxInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt56;
    }
});
Object.defineProperty(exports, "maxInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt64;
    }
});
Object.defineProperty(exports, "maxInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt72;
    }
});
Object.defineProperty(exports, "maxInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt80;
    }
});
Object.defineProperty(exports, "maxInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt88;
    }
});
Object.defineProperty(exports, "maxInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt96;
    }
});
Object.defineProperty(exports, "maxInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt104;
    }
});
Object.defineProperty(exports, "maxInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt112;
    }
});
Object.defineProperty(exports, "maxInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt120;
    }
});
Object.defineProperty(exports, "maxInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt128;
    }
});
Object.defineProperty(exports, "maxInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt136;
    }
});
Object.defineProperty(exports, "maxInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt144;
    }
});
Object.defineProperty(exports, "maxInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt152;
    }
});
Object.defineProperty(exports, "maxInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt160;
    }
});
Object.defineProperty(exports, "maxInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt168;
    }
});
Object.defineProperty(exports, "maxInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt176;
    }
});
Object.defineProperty(exports, "maxInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt184;
    }
});
Object.defineProperty(exports, "maxInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt192;
    }
});
Object.defineProperty(exports, "maxInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt200;
    }
});
Object.defineProperty(exports, "maxInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt208;
    }
});
Object.defineProperty(exports, "maxInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt216;
    }
});
Object.defineProperty(exports, "maxInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt224;
    }
});
Object.defineProperty(exports, "maxInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt232;
    }
});
Object.defineProperty(exports, "maxInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt240;
    }
});
Object.defineProperty(exports, "maxInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt248;
    }
});
Object.defineProperty(exports, "maxInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt256;
    }
});
Object.defineProperty(exports, "maxUint8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint8;
    }
});
Object.defineProperty(exports, "maxUint16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint16;
    }
});
Object.defineProperty(exports, "maxUint24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint24;
    }
});
Object.defineProperty(exports, "maxUint32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint32;
    }
});
Object.defineProperty(exports, "maxUint40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint40;
    }
});
Object.defineProperty(exports, "maxUint48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint48;
    }
});
Object.defineProperty(exports, "maxUint56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint56;
    }
});
Object.defineProperty(exports, "maxUint64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint64;
    }
});
Object.defineProperty(exports, "maxUint72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint72;
    }
});
Object.defineProperty(exports, "maxUint80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint80;
    }
});
Object.defineProperty(exports, "maxUint88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint88;
    }
});
Object.defineProperty(exports, "maxUint96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint96;
    }
});
Object.defineProperty(exports, "maxUint104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint104;
    }
});
Object.defineProperty(exports, "maxUint112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint112;
    }
});
Object.defineProperty(exports, "maxUint120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint120;
    }
});
Object.defineProperty(exports, "maxUint128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint128;
    }
});
Object.defineProperty(exports, "maxUint136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint136;
    }
});
Object.defineProperty(exports, "maxUint144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint144;
    }
});
Object.defineProperty(exports, "maxUint152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint152;
    }
});
Object.defineProperty(exports, "maxUint160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint160;
    }
});
Object.defineProperty(exports, "maxUint168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint168;
    }
});
Object.defineProperty(exports, "maxUint176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint176;
    }
});
Object.defineProperty(exports, "maxUint184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint184;
    }
});
Object.defineProperty(exports, "maxUint192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint192;
    }
});
Object.defineProperty(exports, "maxUint200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint200;
    }
});
Object.defineProperty(exports, "maxUint208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint208;
    }
});
Object.defineProperty(exports, "maxUint216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint216;
    }
});
Object.defineProperty(exports, "maxUint224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint224;
    }
});
Object.defineProperty(exports, "maxUint232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint232;
    }
});
Object.defineProperty(exports, "maxUint240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint240;
    }
});
Object.defineProperty(exports, "maxUint248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint248;
    }
});
Object.defineProperty(exports, "maxUint256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint256;
    }
});
Object.defineProperty(exports, "minInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt8;
    }
});
Object.defineProperty(exports, "minInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt16;
    }
});
Object.defineProperty(exports, "minInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt24;
    }
});
Object.defineProperty(exports, "minInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt32;
    }
});
Object.defineProperty(exports, "minInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt40;
    }
});
Object.defineProperty(exports, "minInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt48;
    }
});
Object.defineProperty(exports, "minInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt56;
    }
});
Object.defineProperty(exports, "minInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt64;
    }
});
Object.defineProperty(exports, "minInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt72;
    }
});
Object.defineProperty(exports, "minInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt80;
    }
});
Object.defineProperty(exports, "minInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt88;
    }
});
Object.defineProperty(exports, "minInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt96;
    }
});
Object.defineProperty(exports, "minInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt104;
    }
});
Object.defineProperty(exports, "minInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt112;
    }
});
Object.defineProperty(exports, "minInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt120;
    }
});
Object.defineProperty(exports, "minInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt128;
    }
});
Object.defineProperty(exports, "minInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt136;
    }
});
Object.defineProperty(exports, "minInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt144;
    }
});
Object.defineProperty(exports, "minInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt152;
    }
});
Object.defineProperty(exports, "minInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt160;
    }
});
Object.defineProperty(exports, "minInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt168;
    }
});
Object.defineProperty(exports, "minInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt176;
    }
});
Object.defineProperty(exports, "minInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt184;
    }
});
Object.defineProperty(exports, "minInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt192;
    }
});
Object.defineProperty(exports, "minInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt200;
    }
});
Object.defineProperty(exports, "minInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt208;
    }
});
Object.defineProperty(exports, "minInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt216;
    }
});
Object.defineProperty(exports, "minInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt224;
    }
});
Object.defineProperty(exports, "minInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt232;
    }
});
Object.defineProperty(exports, "minInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt240;
    }
});
Object.defineProperty(exports, "minInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt248;
    }
});
Object.defineProperty(exports, "minInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt256;
    }
});
var bytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/bytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "zeroHash", {
    enumerable: true,
    get: function() {
        return bytes_js_1.zeroHash;
    }
});
var strings_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/strings.js [app-client] (ecmascript)");
Object.defineProperty(exports, "presignMessagePrefix", {
    enumerable: true,
    get: function() {
        return strings_js_1.presignMessagePrefix;
    }
});
var abi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/abi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AbiConstructorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiConstructorParamsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorParamsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeInvalidError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeInvalidError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeTooSmallError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeTooSmallError;
    }
});
Object.defineProperty(exports, "AbiDecodingZeroDataError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingZeroDataError;
    }
});
Object.defineProperty(exports, "AbiEncodingArrayLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingArrayLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingBytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingBytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "AbiErrorInputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorInputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureEmptyTopicsError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureEmptyTopicsError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionOutputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionOutputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "BytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.BytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "DecodeLogDataMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogDataMismatch;
    }
});
Object.defineProperty(exports, "DecodeLogTopicsMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogTopicsMismatch;
    }
});
Object.defineProperty(exports, "InvalidAbiDecodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiDecodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiEncodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiEncodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidArrayError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidArrayError;
    }
});
Object.defineProperty(exports, "InvalidDefinitionTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidDefinitionTypeError;
    }
});
Object.defineProperty(exports, "UnsupportedPackedAbiType", {
    enumerable: true,
    get: function() {
        return abi_js_1.UnsupportedPackedAbiType;
    }
});
var base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return base_js_1.BaseError;
    }
});
Object.defineProperty(exports, "setErrorConfig", {
    enumerable: true,
    get: function() {
        return base_js_1.setErrorConfig;
    }
});
var block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BlockNotFoundError", {
    enumerable: true,
    get: function() {
        return block_js_1.BlockNotFoundError;
    }
});
var contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CallExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.CallExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionRevertedError;
    }
});
Object.defineProperty(exports, "ContractFunctionZeroDataError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionZeroDataError;
    }
});
Object.defineProperty(exports, "RawContractError", {
    enumerable: true,
    get: function() {
        return contract_js_1.RawContractError;
    }
});
Object.defineProperty(exports, "CounterfactualDeploymentFailedError", {
    enumerable: true,
    get: function() {
        return contract_js_1.CounterfactualDeploymentFailedError;
    }
});
var fee_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/fee.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseFeeScalarError", {
    enumerable: true,
    get: function() {
        return fee_js_1.BaseFeeScalarError;
    }
});
Object.defineProperty(exports, "Eip1559FeesNotSupportedError", {
    enumerable: true,
    get: function() {
        return fee_js_1.Eip1559FeesNotSupportedError;
    }
});
Object.defineProperty(exports, "MaxFeePerGasTooLowError", {
    enumerable: true,
    get: function() {
        return fee_js_1.MaxFeePerGasTooLowError;
    }
});
var rpc_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/rpc.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AtomicReadyWalletRejectedUpgradeError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.AtomicReadyWalletRejectedUpgradeError;
    }
});
Object.defineProperty(exports, "AtomicityNotSupportedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.AtomicityNotSupportedError;
    }
});
Object.defineProperty(exports, "BundleTooLargeError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.BundleTooLargeError;
    }
});
Object.defineProperty(exports, "ChainDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ChainDisconnectedError;
    }
});
Object.defineProperty(exports, "DuplicateIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.DuplicateIdError;
    }
});
Object.defineProperty(exports, "InternalRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InternalRpcError;
    }
});
Object.defineProperty(exports, "InvalidInputRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidInputRpcError;
    }
});
Object.defineProperty(exports, "InvalidParamsRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidParamsRpcError;
    }
});
Object.defineProperty(exports, "InvalidRequestRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidRequestRpcError;
    }
});
Object.defineProperty(exports, "JsonRpcVersionUnsupportedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.JsonRpcVersionUnsupportedError;
    }
});
Object.defineProperty(exports, "LimitExceededRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.LimitExceededRpcError;
    }
});
Object.defineProperty(exports, "MethodNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotFoundRpcError;
    }
});
Object.defineProperty(exports, "MethodNotSupportedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotSupportedRpcError;
    }
});
Object.defineProperty(exports, "ParseRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ParseRpcError;
    }
});
Object.defineProperty(exports, "ProviderDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderDisconnectedError;
    }
});
Object.defineProperty(exports, "ProviderRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderRpcError;
    }
});
Object.defineProperty(exports, "ResourceNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceNotFoundRpcError;
    }
});
Object.defineProperty(exports, "ResourceUnavailableRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceUnavailableRpcError;
    }
});
Object.defineProperty(exports, "RpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.RpcError;
    }
});
Object.defineProperty(exports, "SwitchChainError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.SwitchChainError;
    }
});
Object.defineProperty(exports, "TransactionRejectedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.TransactionRejectedRpcError;
    }
});
Object.defineProperty(exports, "UnauthorizedProviderError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnauthorizedProviderError;
    }
});
Object.defineProperty(exports, "UnknownBundleIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnknownBundleIdError;
    }
});
Object.defineProperty(exports, "UnknownRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnknownRpcError;
    }
});
Object.defineProperty(exports, "UnsupportedChainIdError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedChainIdError;
    }
});
Object.defineProperty(exports, "UnsupportedNonOptionalCapabilityError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedNonOptionalCapabilityError;
    }
});
Object.defineProperty(exports, "UnsupportedProviderMethodError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedProviderMethodError;
    }
});
Object.defineProperty(exports, "UserRejectedRequestError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UserRejectedRequestError;
    }
});
var chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ChainDoesNotSupportContract", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainDoesNotSupportContract;
    }
});
Object.defineProperty(exports, "ChainMismatchError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainMismatchError;
    }
});
Object.defineProperty(exports, "ChainNotFoundError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainNotFoundError;
    }
});
Object.defineProperty(exports, "ClientChainNotConfiguredError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ClientChainNotConfiguredError;
    }
});
Object.defineProperty(exports, "InvalidChainIdError", {
    enumerable: true,
    get: function() {
        return chain_js_1.InvalidChainIdError;
    }
});
var encoding_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/encoding.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidBytesBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidBytesBooleanError;
    }
});
Object.defineProperty(exports, "IntegerOutOfRangeError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.IntegerOutOfRangeError;
    }
});
Object.defineProperty(exports, "InvalidHexBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexBooleanError;
    }
});
Object.defineProperty(exports, "InvalidHexValueError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexValueError;
    }
});
Object.defineProperty(exports, "SizeOverflowError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.SizeOverflowError;
    }
});
var ens_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/ens.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EnsAvatarUriResolutionError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUriResolutionError;
    }
});
Object.defineProperty(exports, "EnsAvatarInvalidNftUriError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarInvalidNftUriError;
    }
});
Object.defineProperty(exports, "EnsAvatarUnsupportedNamespaceError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUnsupportedNamespaceError;
    }
});
var unit_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/unit.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidDecimalNumberError", {
    enumerable: true,
    get: function() {
        return unit_js_2.InvalidDecimalNumberError;
    }
});
var estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/estimateGas.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EstimateGasExecutionError", {
    enumerable: true,
    get: function() {
        return estimateGas_js_1.EstimateGasExecutionError;
    }
});
var node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
Object.defineProperty(exports, "ExecutionRevertedError", {
    enumerable: true,
    get: function() {
        return node_js_1.ExecutionRevertedError;
    }
});
Object.defineProperty(exports, "FeeCapTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooHighError;
    }
});
Object.defineProperty(exports, "FeeCapTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooLowError;
    }
});
Object.defineProperty(exports, "InsufficientFundsError", {
    enumerable: true,
    get: function() {
        return node_js_1.InsufficientFundsError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooHighError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooLowError;
    }
});
Object.defineProperty(exports, "NonceMaxValueError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceMaxValueError;
    }
});
Object.defineProperty(exports, "NonceTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooHighError;
    }
});
Object.defineProperty(exports, "NonceTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooLowError;
    }
});
Object.defineProperty(exports, "TipAboveFeeCapError", {
    enumerable: true,
    get: function() {
        return node_js_1.TipAboveFeeCapError;
    }
});
Object.defineProperty(exports, "TransactionTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return node_js_1.TransactionTypeNotSupportedError;
    }
});
Object.defineProperty(exports, "UnknownNodeError", {
    enumerable: true,
    get: function() {
        return node_js_1.UnknownNodeError;
    }
});
var log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FilterTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return log_js_1.FilterTypeNotSupportedError;
    }
});
var request_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/request.js [app-client] (ecmascript)");
Object.defineProperty(exports, "HttpRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.HttpRequestError;
    }
});
Object.defineProperty(exports, "RpcRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.RpcRequestError;
    }
});
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return request_js_1.TimeoutError;
    }
});
Object.defineProperty(exports, "SocketClosedError", {
    enumerable: true,
    get: function() {
        return request_js_1.SocketClosedError;
    }
});
Object.defineProperty(exports, "WebSocketRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.WebSocketRequestError;
    }
});
var address_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidAddressError", {
    enumerable: true,
    get: function() {
        return address_js_2.InvalidAddressError;
    }
});
var transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FeeConflictError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.FeeConflictError;
    }
});
Object.defineProperty(exports, "InvalidLegacyVError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidLegacyVError;
    }
});
Object.defineProperty(exports, "InvalidSerializableTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializableTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionTypeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionTypeError;
    }
});
Object.defineProperty(exports, "InvalidStorageKeySizeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidStorageKeySizeError;
    }
});
Object.defineProperty(exports, "TransactionExecutionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionExecutionError;
    }
});
Object.defineProperty(exports, "TransactionNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionNotFoundError;
    }
});
Object.defineProperty(exports, "TransactionReceiptNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionReceiptNotFoundError;
    }
});
Object.defineProperty(exports, "WaitForTransactionReceiptTimeoutError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.WaitForTransactionReceiptTimeoutError;
    }
});
var data_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/data.js [app-client] (ecmascript)");
Object.defineProperty(exports, "SizeExceedsPaddingSizeError", {
    enumerable: true,
    get: function() {
        return data_js_1.SizeExceedsPaddingSizeError;
    }
});
Object.defineProperty(exports, "SliceOffsetOutOfBoundsError", {
    enumerable: true,
    get: function() {
        return data_js_1.SliceOffsetOutOfBoundsError;
    }
});
var transport_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transport.js [app-client] (ecmascript)");
Object.defineProperty(exports, "UrlRequiredError", {
    enumerable: true,
    get: function() {
        return transport_js_1.UrlRequiredError;
    }
});
var stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/stateOverride.js [app-client] (ecmascript)");
Object.defineProperty(exports, "AccountStateConflictError", {
    enumerable: true,
    get: function() {
        return stateOverride_js_1.AccountStateConflictError;
    }
});
Object.defineProperty(exports, "StateAssignmentConflictError", {
    enumerable: true,
    get: function() {
        return stateOverride_js_1.StateAssignmentConflictError;
    }
});
var typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidDomainError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidDomainError;
    }
});
Object.defineProperty(exports, "InvalidPrimaryTypeError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidPrimaryTypeError;
    }
});
Object.defineProperty(exports, "InvalidStructTypeError", {
    enumerable: true,
    get: function() {
        return typedData_js_1.InvalidStructTypeError;
    }
});
var eip1193_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/types/eip1193.js [app-client] (ecmascript)");
Object.defineProperty(exports, "EIP1193ProviderRpcError", {
    enumerable: true,
    get: function() {
        return eip1193_js_1.ProviderRpcError;
    }
});
var labelhash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "labelhash", {
    enumerable: true,
    get: function() {
        return labelhash_js_1.labelhash;
    }
});
var namehash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "namehash", {
    enumerable: true,
    get: function() {
        return namehash_js_1.namehash;
    }
});
var block_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.formatBlock;
    }
});
var log_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_2.formatLog;
    }
});
var decodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeDeployData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "decodeDeployData", {
    enumerable: true,
    get: function() {
        return decodeDeployData_js_1.decodeDeployData;
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
var prepareEncodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/prepareEncodeFunctionData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "prepareEncodeFunctionData", {
    enumerable: true,
    get: function() {
        return prepareEncodeFunctionData_js_1.prepareEncodeFunctionData;
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
var transaction_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_2.transactionType;
    }
});
var transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
Object.defineProperty(exports, "formatTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.formatTransactionReceipt;
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
Object.defineProperty(exports, "rpcTransactionType", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.rpcTransactionType;
    }
});
var getAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var getContractAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
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
var hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashDomain", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashDomain;
    }
});
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
var compactSignatureToSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToSignature", {
    enumerable: true,
    get: function() {
        return compactSignatureToSignature_js_1.compactSignatureToSignature;
    }
});
var parseCompactSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hexToCompactSignature", {
    enumerable: true,
    get: function() {
        return parseCompactSignature_js_1.parseCompactSignature;
    }
});
Object.defineProperty(exports, "parseCompactSignature", {
    enumerable: true,
    get: function() {
        return parseCompactSignature_js_1.parseCompactSignature;
    }
});
var parseSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hexToSignature", {
    enumerable: true,
    get: function() {
        return parseSignature_js_1.parseSignature;
    }
});
Object.defineProperty(exports, "parseSignature", {
    enumerable: true,
    get: function() {
        return parseSignature_js_1.parseSignature;
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
var recoverTransactionAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTransactionAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTransactionAddress", {
    enumerable: true,
    get: function() {
        return recoverTransactionAddress_js_1.recoverTransactionAddress;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var signatureToCompactSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signatureToCompactSignature", {
    enumerable: true,
    get: function() {
        return signatureToCompactSignature_js_1.signatureToCompactSignature;
    }
});
var serializeCompactSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeCompactSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToHex", {
    enumerable: true,
    get: function() {
        return serializeCompactSignature_js_1.serializeCompactSignature;
    }
});
Object.defineProperty(exports, "serializeCompactSignature", {
    enumerable: true,
    get: function() {
        return serializeCompactSignature_js_1.serializeCompactSignature;
    }
});
var serializeSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeSignature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "signatureToHex", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
Object.defineProperty(exports, "serializeSignature", {
    enumerable: true,
    get: function() {
        return serializeSignature_js_1.serializeSignature;
    }
});
var toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.bytesToRlp;
    }
});
Object.defineProperty(exports, "hexToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.hexToRlp;
    }
});
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
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
var toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
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
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
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
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
var fromBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
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
var blobsToCommitments_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blobsToCommitments", {
    enumerable: true,
    get: function() {
        return blobsToCommitments_js_1.blobsToCommitments;
    }
});
var commitmentToVersionedHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentToVersionedHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "commitmentToVersionedHash", {
    enumerable: true,
    get: function() {
        return commitmentToVersionedHash_js_1.commitmentToVersionedHash;
    }
});
var commitmentsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "commitmentsToVersionedHashes", {
    enumerable: true,
    get: function() {
        return commitmentsToVersionedHashes_js_1.commitmentsToVersionedHashes;
    }
});
var sidecarsToVersionedHashes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/sidecarsToVersionedHashes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "sidecarsToVersionedHashes", {
    enumerable: true,
    get: function() {
        return sidecarsToVersionedHashes_js_1.sidecarsToVersionedHashes;
    }
});
var blobsToProofs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "blobsToProofs", {
    enumerable: true,
    get: function() {
        return blobsToProofs_js_1.blobsToProofs;
    }
});
var fromBlobs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/fromBlobs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromBlobs", {
    enumerable: true,
    get: function() {
        return fromBlobs_js_1.fromBlobs;
    }
});
var toBlobSidecars_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toBlobSidecars", {
    enumerable: true,
    get: function() {
        return toBlobSidecars_js_1.toBlobSidecars;
    }
});
var toBlobs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/blob/toBlobs.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toBlobs", {
    enumerable: true,
    get: function() {
        return toBlobs_js_1.toBlobs;
    }
});
var defineKzg_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/kzg/defineKzg.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineKzg", {
    enumerable: true,
    get: function() {
        return defineKzg_js_1.defineKzg;
    }
});
var setupKzg_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/kzg/setupKzg.js [app-client] (ecmascript)");
Object.defineProperty(exports, "setupKzg", {
    enumerable: true,
    get: function() {
        return setupKzg_js_1.setupKzg;
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
var encodePacked_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var withCache_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withCache.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withCache", {
    enumerable: true,
    get: function() {
        return withCache_js_1.withCache;
    }
});
var withRetry_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withRetry", {
    enumerable: true,
    get: function() {
        return withRetry_js_1.withRetry;
    }
});
var withTimeout_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-client] (ecmascript)");
Object.defineProperty(exports, "withTimeout", {
    enumerable: true,
    get: function() {
        return withTimeout_js_1.withTimeout;
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
var fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
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
var getAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-client] (ecmascript)");
Object.defineProperty(exports, "checksumAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.checksumAddress;
    }
});
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var getContractError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-client] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
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
var hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var toPrefixedMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
Object.defineProperty(exports, "toPrefixedMessage", {
    enumerable: true,
    get: function() {
        return toPrefixedMessage_js_1.toPrefixedMessage;
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
var isBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
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
var parseTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var parseUnits_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
});
var serializeAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
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
var stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-client] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var typedData_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
Object.defineProperty(exports, "serializeTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_2.serializeTypedData;
    }
});
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_2.validateTypedData;
    }
});
Object.defineProperty(exports, "domainSeparator", {
    enumerable: true,
    get: function() {
        return typedData_js_2.domainSeparator;
    }
});
Object.defineProperty(exports, "getTypesForEIP712Domain", {
    enumerable: true,
    get: function() {
        return typedData_js_2.getTypesForEIP712Domain;
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
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/constants/number.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requiredL1ToL2GasPerPubdataLimit = exports.maxBytecodeSize = exports.gasPerPubdataDefault = void 0;
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
exports.gasPerPubdataDefault = 50000n;
exports.maxBytecodeSize = number_js_1.maxUint16 * 32n;
exports.requiredL1ToL2GasPerPubdataLimit = 800n; //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/formatters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatters = void 0;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/constants/number.js [app-client] (ecmascript)");
exports.formatters = {
    block: (0, block_js_1.defineBlock)({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = exports.formatters.transaction?.format(transaction);
                if (formatted.typeHex === '0x71') formatted.type = 'eip712';
                else if (formatted.typeHex === '0xff') formatted.type = 'priority';
                return formatted;
            });
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchNumber) : null,
                l1BatchTimestamp: args.l1BatchTimestamp ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchTimestamp) : null,
                transactions
            };
        }
    }),
    transaction: (0, transaction_js_1.defineTransaction)({
        format (args) {
            const transaction = {};
            if (args.type === '0x71') transaction.type = 'eip712';
            else if (args.type === '0xff') transaction.type = 'priority';
            return {
                ...transaction,
                l1BatchNumber: args.l1BatchNumber ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchTxIndex) : null
            };
        }
    }),
    transactionReceipt: (0, transactionReceipt_js_1.defineTransactionReceipt)({
        format (args) {
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, fromHex_js_1.hexToBigInt)(args.l1BatchTxIndex) : null,
                logs: args.logs.map((log)=>{
                    return {
                        ...(0, log_js_1.formatLog)(log),
                        l1BatchNumber: log.l1BatchNumber ? (0, fromHex_js_1.hexToBigInt)(log.l1BatchNumber) : null,
                        transactionLogIndex: (0, fromHex_js_1.hexToNumber)(log.transactionLogIndex),
                        logType: log.logType
                    };
                }),
                l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log)=>{
                    return {
                        blockNumber: (0, fromHex_js_1.hexToBigInt)(l2ToL1Log.blockHash),
                        blockHash: l2ToL1Log.blockHash,
                        l1BatchNumber: l2ToL1Log.l1BatchNumber ? (0, fromHex_js_1.hexToBigInt)(l2ToL1Log.l1BatchNumber) : null,
                        transactionIndex: (0, fromHex_js_1.hexToBigInt)(l2ToL1Log.transactionIndex),
                        shardId: (0, fromHex_js_1.hexToBigInt)(l2ToL1Log.shardId),
                        isService: l2ToL1Log.isService,
                        sender: l2ToL1Log.sender,
                        key: l2ToL1Log.key,
                        value: l2ToL1Log.value,
                        transactionHash: l2ToL1Log.transactionHash,
                        logIndex: (0, fromHex_js_1.hexToBigInt)(l2ToL1Log.logIndex)
                    };
                })
            };
        }
    }),
    transactionRequest: (0, transactionRequest_js_1.defineTransactionRequest)({
        exclude: [
            'customSignature',
            'factoryDeps',
            'gasPerPubdata',
            'paymaster',
            'paymasterInput'
        ],
        format (args) {
            if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature) return {
                eip712Meta: {
                    ...args.gasPerPubdata ? {
                        gasPerPubdata: (0, toHex_js_1.toHex)(args.gasPerPubdata)
                    } : {
                        gasPerPubdata: (0, toHex_js_1.toHex)(number_js_1.gasPerPubdataDefault)
                    },
                    ...args.paymaster && args.paymasterInput ? {
                        paymasterParams: {
                            paymaster: args.paymaster,
                            paymasterInput: Array.from((0, toBytes_js_1.hexToBytes)(args.paymasterInput))
                        }
                    } : {},
                    ...args.factoryDeps ? {
                        factoryDeps: args.factoryDeps.map((dep)=>Array.from((0, toBytes_js_1.hexToBytes)(dep)))
                    } : {},
                    ...args.customSignature ? {
                        customSignature: Array.from((0, toBytes_js_1.hexToBytes)(args.customSignature))
                    } : {}
                },
                type: '0x71'
            };
            return {};
        }
    })
}; //# sourceMappingURL=formatters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/errors/transaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidEip712TransactionError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class InvalidEip712TransactionError extends base_js_1.BaseError {
    constructor(){
        super([
            'Transaction is not an EIP712 transaction.',
            '',
            'Transaction must:',
            '  - include `type: "eip712"`',
            '  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`'
        ].join('\n'), {
            name: 'InvalidEip712TransactionError'
        });
    }
}
exports.InvalidEip712TransactionError = InvalidEip712TransactionError; //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/isEip712Transaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEIP712Transaction = isEIP712Transaction;
function isEIP712Transaction(transaction) {
    if (transaction.type === 'eip712') return true;
    if ('customSignature' in transaction && transaction.customSignature || 'paymaster' in transaction && transaction.paymaster || 'paymasterInput' in transaction && transaction.paymasterInput || 'gasPerPubdata' in transaction && typeof transaction.gasPerPubdata === 'bigint' || 'factoryDeps' in transaction && transaction.factoryDeps) return true;
    return false;
} //# sourceMappingURL=isEip712Transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/assertEip712Transaction.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertEip712Transaction = assertEip712Transaction;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/errors/transaction.js [app-client] (ecmascript)");
const isEip712Transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/isEip712Transaction.js [app-client] (ecmascript)");
function assertEip712Transaction(transaction) {
    const { chainId, to, from, paymaster, paymasterInput } = transaction;
    if (!(0, isEip712Transaction_js_1.isEIP712Transaction)(transaction)) throw new transaction_js_1.InvalidEip712TransactionError();
    if (!chainId || chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (from && !(0, isAddress_js_1.isAddress)(from)) throw new address_js_1.InvalidAddressError({
        address: from
    });
    if (paymaster && !(0, isAddress_js_1.isAddress)(paymaster)) throw new address_js_1.InvalidAddressError({
        address: paymaster
    });
    if (paymaster && !paymasterInput) {
        throw new base_js_1.BaseError('`paymasterInput` must be provided when `paymaster` is defined');
    }
    if (!paymaster && paymasterInput) {
        throw new base_js_1.BaseError('`paymaster` must be provided when `paymasterInput` is defined');
    }
} //# sourceMappingURL=assertEip712Transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/serializers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializers = void 0;
exports.serializeTransaction = serializeTransaction;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/constants/number.js [app-client] (ecmascript)");
const assertEip712Transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/assertEip712Transaction.js [app-client] (ecmascript)");
const isEip712Transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/isEip712Transaction.js [app-client] (ecmascript)");
function serializeTransaction(transaction, signature) {
    if ((0, isEip712Transaction_js_1.isEIP712Transaction)(transaction)) return serializeTransactionEIP712(transaction);
    return (0, serializeTransaction_js_1.serializeTransaction)(transaction, signature);
}
exports.serializers = {
    transaction: serializeTransaction
};
function serializeTransactionEIP712(transaction) {
    const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    (0, assertEip712Transaction_js_1.assertEip712Transaction)(transaction);
    const serializedTransaction = [
        nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.toHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.toHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        data ?? '0x',
        (0, toHex_js_1.toHex)(chainId),
        (0, toHex_js_1.toHex)(''),
        (0, toHex_js_1.toHex)(''),
        (0, toHex_js_1.toHex)(chainId),
        from ?? '0x',
        gasPerPubdata ? (0, toHex_js_1.toHex)(gasPerPubdata) : (0, toHex_js_1.toHex)(number_js_1.gasPerPubdataDefault),
        factoryDeps ?? [],
        customSignature ?? '0x',
        paymaster && paymasterInput ? [
            paymaster,
            paymasterInput
        ] : []
    ];
    return (0, concat_js_1.concatHex)([
        '0x71',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
} //# sourceMappingURL=serializers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/errors/bytecode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BytecodeLengthMustBeDivisibleBy32Error = exports.BytecodeLengthInWordsMustBeOddError = exports.BytecodeLengthExceedsMaxSizeError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
class BytecodeLengthExceedsMaxSizeError extends base_js_1.BaseError {
    constructor({ givenLength, maxBytecodeSize }){
        super(`Bytecode cannot be longer than ${maxBytecodeSize} bytes. Given length: ${givenLength}`, {
            name: 'BytecodeLengthExceedsMaxSizeError'
        });
    }
}
exports.BytecodeLengthExceedsMaxSizeError = BytecodeLengthExceedsMaxSizeError;
class BytecodeLengthInWordsMustBeOddError extends base_js_1.BaseError {
    constructor({ givenLengthInWords }){
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${givenLengthInWords}`, {
            name: 'BytecodeLengthInWordsMustBeOddError'
        });
    }
}
exports.BytecodeLengthInWordsMustBeOddError = BytecodeLengthInWordsMustBeOddError;
class BytecodeLengthMustBeDivisibleBy32Error extends base_js_1.BaseError {
    constructor({ givenLength }){
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${givenLength}`, {
            name: 'BytecodeLengthMustBeDivisibleBy32Error'
        });
    }
}
exports.BytecodeLengthMustBeDivisibleBy32Error = BytecodeLengthMustBeDivisibleBy32Error; //# sourceMappingURL=bytecode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/hashBytecode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashBytecode = hashBytecode;
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-client] (ecmascript)");
const toBytes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-client] (ecmascript)");
const sha256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/constants/number.js [app-client] (ecmascript)");
const bytecode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/errors/bytecode.js [app-client] (ecmascript)");
function hashBytecode(bytecode) {
    const bytecodeBytes = (0, toBytes_js_1.toBytes)(bytecode);
    if (bytecodeBytes.length % 32 !== 0) throw new bytecode_js_1.BytecodeLengthMustBeDivisibleBy32Error({
        givenLength: bytecodeBytes.length
    });
    if (bytecodeBytes.length > number_js_1.maxBytecodeSize) throw new bytecode_js_1.BytecodeLengthExceedsMaxSizeError({
        givenLength: bytecodeBytes.length,
        maxBytecodeSize: number_js_1.maxBytecodeSize
    });
    const hashStr = (0, sha256_js_1.sha256)(bytecodeBytes);
    const hash = (0, toBytes_js_1.toBytes)(hashStr);
    const bytecodeLengthInWords = bytecodeBytes.length / 32;
    if (bytecodeLengthInWords % 2 === 0) {
        throw new bytecode_js_1.BytecodeLengthInWordsMustBeOddError({
            givenLengthInWords: bytecodeLengthInWords
        });
    }
    const bytecodeLength = (0, toBytes_js_1.toBytes)(bytecodeLengthInWords);
    const bytecodeLengthPadded = (0, pad_js_1.pad)(bytecodeLength, {
        size: 2
    });
    const codeHashVersion = new Uint8Array([
        1,
        0
    ]);
    hash.set(codeHashVersion, 0);
    hash.set(bytecodeLengthPadded, 2);
    return hash;
} //# sourceMappingURL=hashBytecode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/getEip712Domain.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEip712Domain = void 0;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/constants/number.js [app-client] (ecmascript)");
const assertEip712Transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/assertEip712Transaction.js [app-client] (ecmascript)");
const hashBytecode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/hashBytecode.js [app-client] (ecmascript)");
const getEip712Domain = (transaction)=>{
    (0, assertEip712Transaction_js_1.assertEip712Transaction)(transaction);
    const message = transactionToMessage(transaction);
    return {
        domain: {
            name: 'zkSync',
            version: '2',
            chainId: transaction.chainId
        },
        types: {
            Transaction: [
                {
                    name: 'txType',
                    type: 'uint256'
                },
                {
                    name: 'from',
                    type: 'uint256'
                },
                {
                    name: 'to',
                    type: 'uint256'
                },
                {
                    name: 'gasLimit',
                    type: 'uint256'
                },
                {
                    name: 'gasPerPubdataByteLimit',
                    type: 'uint256'
                },
                {
                    name: 'maxFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'maxPriorityFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'paymaster',
                    type: 'uint256'
                },
                {
                    name: 'nonce',
                    type: 'uint256'
                },
                {
                    name: 'value',
                    type: 'uint256'
                },
                {
                    name: 'data',
                    type: 'bytes'
                },
                {
                    name: 'factoryDeps',
                    type: 'bytes32[]'
                },
                {
                    name: 'paymasterInput',
                    type: 'bytes'
                }
            ]
        },
        primaryType: 'Transaction',
        message: message
    };
};
exports.getEip712Domain = getEip712Domain;
function transactionToMessage(transaction) {
    const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    return {
        txType: 113n,
        from: BigInt(from),
        to: to ? BigInt(to) : 0n,
        gasLimit: gas ?? 0n,
        gasPerPubdataByteLimit: gasPerPubdata ?? number_js_1.gasPerPubdataDefault,
        maxFeePerGas: maxFeePerGas ?? 0n,
        maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
        paymaster: paymaster ? BigInt(paymaster) : 0n,
        nonce: nonce ? BigInt(nonce) : 0n,
        value: value ?? 0n,
        data: data ?? '0x',
        factoryDeps: factoryDeps?.map((dep)=>(0, toHex_js_1.toHex)((0, hashBytecode_js_1.hashBytecode)(dep))) ?? [],
        paymasterInput: paymasterInput ? paymasterInput : '0x'
    };
} //# sourceMappingURL=getEip712Domain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/chainConfig.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chainConfig = void 0;
const formatters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/formatters.js [app-client] (ecmascript)");
const serializers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/serializers.js [app-client] (ecmascript)");
const getEip712Domain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/zksync/utils/getEip712Domain.js [app-client] (ecmascript)");
exports.chainConfig = {
    blockTime: 1_000,
    formatters: formatters_js_1.formatters,
    serializers: serializers_js_1.serializers,
    custom: {
        getEip712Domain: getEip712Domain_js_1.getEip712Domain
    }
}; //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/contracts.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contracts = void 0;
exports.contracts = {
    gasPriceOracle: {
        address: '0x420000000000000000000000000000000000000F'
    },
    l1Block: {
        address: '0x4200000000000000000000000000000000000015'
    },
    l2CrossDomainMessenger: {
        address: '0x4200000000000000000000000000000000000007'
    },
    l2Erc721Bridge: {
        address: '0x4200000000000000000000000000000000000014'
    },
    l2StandardBridge: {
        address: '0x4200000000000000000000000000000000000010'
    },
    l2ToL1MessagePasser: {
        address: '0x4200000000000000000000000000000000000016'
    }
}; //# sourceMappingURL=contracts.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/formatters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatters = void 0;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
exports.formatters = {
    block: (0, block_js_1.defineBlock)({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = (0, transaction_js_1.formatTransaction)(transaction);
                if (formatted.typeHex === '0x7e') {
                    formatted.isSystemTx = transaction.isSystemTx;
                    formatted.mint = transaction.mint ? (0, fromHex_js_1.hexToBigInt)(transaction.mint) : undefined;
                    formatted.sourceHash = transaction.sourceHash;
                    formatted.type = 'deposit';
                }
                return formatted;
            });
            return {
                transactions,
                stateRoot: args.stateRoot
            };
        }
    }),
    transaction: (0, transaction_js_1.defineTransaction)({
        format (args) {
            const transaction = {};
            if (args.type === '0x7e') {
                transaction.isSystemTx = args.isSystemTx;
                transaction.mint = args.mint ? (0, fromHex_js_1.hexToBigInt)(args.mint) : undefined;
                transaction.sourceHash = args.sourceHash;
                transaction.type = 'deposit';
            }
            return transaction;
        }
    }),
    transactionReceipt: (0, transactionReceipt_js_1.defineTransactionReceipt)({
        format (args) {
            return {
                l1GasPrice: args.l1GasPrice ? (0, fromHex_js_1.hexToBigInt)(args.l1GasPrice) : null,
                l1GasUsed: args.l1GasUsed ? (0, fromHex_js_1.hexToBigInt)(args.l1GasUsed) : null,
                l1Fee: args.l1Fee ? (0, fromHex_js_1.hexToBigInt)(args.l1Fee) : null,
                l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
            };
        }
    })
}; //# sourceMappingURL=formatters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/serializers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializers = void 0;
exports.serializeTransaction = serializeTransaction;
exports.assertTransactionDeposit = assertTransactionDeposit;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
function serializeTransaction(transaction, signature) {
    if (isDeposit(transaction)) return serializeTransactionDeposit(transaction);
    return (0, serializeTransaction_js_1.serializeTransaction)(transaction, signature);
}
exports.serializers = {
    transaction: serializeTransaction
};
function serializeTransactionDeposit(transaction) {
    assertTransactionDeposit(transaction);
    const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
    const serializedTransaction = [
        sourceHash,
        from,
        to ?? '0x',
        mint ? (0, toHex_js_1.toHex)(mint) : '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        isSystemTx ? '0x1' : '0x',
        data ?? '0x'
    ];
    return (0, concat_js_1.concatHex)([
        '0x7e',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function isDeposit(transaction) {
    if (transaction.type === 'deposit') return true;
    if (typeof transaction.sourceHash !== 'undefined') return true;
    return false;
}
function assertTransactionDeposit(transaction) {
    const { from, to } = transaction;
    if (from && !(0, isAddress_js_1.isAddress)(from)) throw new address_js_1.InvalidAddressError({
        address: from
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
} //# sourceMappingURL=serializers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/chainConfig.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chainConfig = void 0;
const contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/contracts.js [app-client] (ecmascript)");
const formatters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/formatters.js [app-client] (ecmascript)");
const serializers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/serializers.js [app-client] (ecmascript)");
exports.chainConfig = {
    blockTime: 2_000,
    contracts: contracts_js_1.contracts,
    formatters: formatters_js_1.formatters,
    serializers: serializers_js_1.serializers
}; //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/fees.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fees = void 0;
exports.fees = {
    estimateFeesPerGas: async (params)=>{
        if (!params.request?.feeCurrency) return null;
        const [gasPrice, maxPriorityFeePerGas] = await Promise.all([
            estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
            estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency)
        ]);
        const maxFeePerGas = params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
};
async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
    const fee = await client.request({
        method: 'eth_gasPrice',
        params: [
            feeCurrency
        ]
    });
    return BigInt(fee);
}
async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
    const feesPerGas = await client.request({
        method: 'eth_maxPriorityFeePerGas',
        params: [
            feeCurrency
        ]
    });
    return BigInt(feesPerGas);
} //# sourceMappingURL=fees.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmpty = isEmpty;
exports.isPresent = isPresent;
exports.isEIP1559 = isEIP1559;
exports.isCIP64 = isCIP64;
const trim_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/trim.js [app-client] (ecmascript)");
function isEmpty(value) {
    return value === 0 || value === 0n || value === undefined || value === null || value === '0' || value === '' || typeof value === 'string' && ((0, trim_js_1.trim)(value).toLowerCase() === '0x' || (0, trim_js_1.trim)(value).toLowerCase() === '0x00');
}
function isPresent(value) {
    return !isEmpty(value);
}
function isEIP1559(transaction) {
    return typeof transaction.maxFeePerGas !== 'undefined' && typeof transaction.maxPriorityFeePerGas !== 'undefined';
}
function isCIP64(transaction) {
    if (transaction.type === 'cip64') {
        return true;
    }
    return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/formatters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatters = void 0;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-client] (ecmascript)");
const block_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/block.js [app-client] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/utils.js [app-client] (ecmascript)");
exports.formatters = {
    block: (0, block_js_1.defineBlock)({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = (0, transaction_js_1.formatTransaction)(transaction);
                return {
                    ...formatted,
                    ...transaction.gatewayFee ? {
                        gatewayFee: (0, fromHex_js_1.hexToBigInt)(transaction.gatewayFee),
                        gatewayFeeRecipient: transaction.gatewayFeeRecipient
                    } : {},
                    feeCurrency: transaction.feeCurrency
                };
            });
            return {
                transactions
            };
        }
    }),
    transaction: (0, transaction_js_1.defineTransaction)({
        format (args) {
            if (args.type === '0x7e') return {
                isSystemTx: args.isSystemTx,
                mint: args.mint ? (0, fromHex_js_1.hexToBigInt)(args.mint) : undefined,
                sourceHash: args.sourceHash,
                type: 'deposit'
            };
            const transaction = {
                feeCurrency: args.feeCurrency
            };
            if (args.type === '0x7b') transaction.type = 'cip64';
            else {
                if (args.type === '0x7c') transaction.type = 'cip42';
                transaction.gatewayFee = args.gatewayFee ? (0, fromHex_js_1.hexToBigInt)(args.gatewayFee) : null;
                transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
            }
            return transaction;
        }
    }),
    transactionRequest: (0, transactionRequest_js_1.defineTransactionRequest)({
        format (args) {
            const request = {};
            if (args.feeCurrency) request.feeCurrency = args.feeCurrency;
            if ((0, utils_js_1.isCIP64)(args)) request.type = '0x7b';
            return request;
        }
    })
}; //# sourceMappingURL=formatters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/serializers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializers = void 0;
exports.serializeTransaction = serializeTransaction;
exports.assertTransactionCIP42 = assertTransactionCIP42;
exports.assertTransactionCIP64 = assertTransactionCIP64;
const number_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/number.js [app-client] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/address.js [app-client] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-client] (ecmascript)");
const chain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/chain.js [app-client] (ecmascript)");
const node_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/node.js [app-client] (ecmascript)");
const serializers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/serializers.js [app-client] (ecmascript)");
const isAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-client] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const toRlp_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-client] (ecmascript)");
const serializeAccessList_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
const serializeTransaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/utils.js [app-client] (ecmascript)");
function serializeTransaction(transaction, signature) {
    if ((0, utils_js_1.isCIP64)(transaction)) return serializeTransactionCIP64(transaction, signature);
    return (0, serializers_js_1.serializeTransaction)(transaction, signature);
}
exports.serializers = {
    transaction: serializeTransaction
};
function serializeTransactionCIP64(transaction, signature) {
    assertTransactionCIP64(transaction);
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
    const serializedTransaction = [
        (0, toHex_js_1.toHex)(chainId),
        nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.toHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.toHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        data ?? '0x',
        (0, serializeAccessList_js_1.serializeAccessList)(accessList),
        feeCurrency,
        ...(0, serializeTransaction_js_1.toYParitySignatureArray)(transaction, signature)
    ];
    return (0, concat_js_1.concatHex)([
        '0x7b',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
const MAX_MAX_FEE_PER_GAS = number_js_1.maxUint256;
function assertTransactionCIP42(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (gasPrice) throw new base_js_1.BaseError('`gasPrice` is not a valid CIP-42 Transaction attribute.');
    if ((0, utils_js_1.isPresent)(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if ((0, utils_js_1.isPresent)(maxPriorityFeePerGas) && (0, utils_js_1.isPresent)(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, utils_js_1.isPresent)(gatewayFee) && (0, utils_js_1.isEmpty)(gatewayFeeRecipient) || (0, utils_js_1.isPresent)(gatewayFeeRecipient) && (0, utils_js_1.isEmpty)(gatewayFee)) {
        throw new base_js_1.BaseError('`gatewayFee` and `gatewayFeeRecipient` must be provided together.');
    }
    if ((0, utils_js_1.isPresent)(feeCurrency) && !(0, isAddress_js_1.isAddress)(feeCurrency)) {
        throw new base_js_1.BaseError('`feeCurrency` MUST be a token address for CIP-42 transactions.');
    }
    if ((0, utils_js_1.isPresent)(gatewayFeeRecipient) && !(0, isAddress_js_1.isAddress)(gatewayFeeRecipient)) {
        throw new address_js_1.InvalidAddressError(gatewayFeeRecipient);
    }
    if ((0, utils_js_1.isEmpty)(feeCurrency) && (0, utils_js_1.isEmpty)(gatewayFeeRecipient)) {
        throw new base_js_1.BaseError('Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.');
    }
}
function assertTransactionCIP64(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (gasPrice) throw new base_js_1.BaseError('`gasPrice` is not a valid CIP-64 Transaction attribute.');
    if ((0, utils_js_1.isPresent)(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if ((0, utils_js_1.isPresent)(maxPriorityFeePerGas) && (0, utils_js_1.isPresent)(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, utils_js_1.isPresent)(feeCurrency) && !(0, isAddress_js_1.isAddress)(feeCurrency)) {
        throw new base_js_1.BaseError('`feeCurrency` MUST be a token address for CIP-64 transactions.');
    }
    if ((0, utils_js_1.isEmpty)(feeCurrency)) {
        throw new base_js_1.BaseError('`feeCurrency` must be provided for CIP-64 transactions.');
    }
} //# sourceMappingURL=serializers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/chainConfig.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chainConfig = void 0;
const contracts_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/op-stack/contracts.js [app-client] (ecmascript)");
const fees_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/fees.js [app-client] (ecmascript)");
const formatters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/formatters.js [app-client] (ecmascript)");
const serializers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/celo/serializers.js [app-client] (ecmascript)");
exports.chainConfig = {
    blockTime: 2_000,
    contracts: contracts_js_1.contracts,
    formatters: formatters_js_1.formatters,
    serializers: serializers_js_1.serializers,
    fees: fees_js_1.fees
}; //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/actions/estimateGas.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateGas = estimateGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const getCallError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-client] (ecmascript)");
const extract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-client] (ecmascript)");
const transactionRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
const assertRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-client] (ecmascript)");
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    if (!account_) throw new account_js_1.AccountNotFoundError();
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    try {
        const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        (0, assertRequest_js_1.assertRequest)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        const { baseFeePerGas, gasLimit, priorityFeePerGas } = await client.request({
            method: 'linea_estimateGas',
            params: block ? [
                request,
                block
            ] : [
                request
            ]
        });
        return {
            baseFeePerGas: BigInt(baseFeePerGas),
            gasLimit: BigInt(gasLimit),
            priorityFeePerGas: BigInt(priorityFeePerGas)
        };
    } catch (err) {
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/chainConfig.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chainConfig = void 0;
const estimateGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/linea/actions/estimateGas.js [app-client] (ecmascript)");
exports.chainConfig = {
    fees: {
        estimateFeesPerGas,
        async maxPriorityFeePerGas ({ block, client, request }) {
            const response = await estimateFeesPerGas({
                block,
                client,
                multiply: (x)=>x,
                request,
                type: 'eip1559'
            });
            if (!response?.maxPriorityFeePerGas) return null;
            return response.maxPriorityFeePerGas;
        }
    }
};
async function estimateFeesPerGas({ client, multiply, request, type }) {
    try {
        const response = await (0, estimateGas_js_1.estimateGas)(client, {
            ...request,
            account: request?.account
        });
        const { priorityFeePerGas: maxPriorityFeePerGas } = response;
        const baseFeePerGas = multiply(BigInt(response.baseFeePerGas));
        const maxFeePerGas = baseFeePerGas + maxPriorityFeePerGas;
        if (type === 'legacy') return {
            gasPrice: maxFeePerGas
        };
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    } catch  {
        return null;
    }
} //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/actions/signMessage.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signMessage = signMessage;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const getEip712Domain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-client] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const toPrefixedMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
async function signMessage(client, parameters) {
    const { account: account_ = client.account, factory, factoryData, message, verifier } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/experimental/erc7739/signMessage'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const { salt, ...domain } = await (async ()=>{
        if (parameters.verifierDomain) return parameters.verifierDomain;
        const { domain } = await (0, getAction_js_1.getAction)(client, getEip712Domain_js_1.getEip712Domain, 'getEip712Domain')({
            address: verifier,
            factory,
            factoryData
        });
        return domain;
    })();
    return (0, getAction_js_1.getAction)(client, signTypedData_js_1.signTypedData, 'signTypedData')({
        account,
        domain,
        types: {
            PersonalSign: [
                {
                    name: 'prefixed',
                    type: 'bytes'
                }
            ]
        },
        primaryType: 'PersonalSign',
        message: {
            prefixed: (0, toPrefixedMessage_js_1.toPrefixedMessage)(message)
        }
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/utils/wrapTypedDataSignature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapTypedDataSignature = wrapTypedDataSignature;
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/index.js [app-client] (ecmascript)");
const encodePacked_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-client] (ecmascript)");
const isHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/isHex.js [app-client] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-client] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-client] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-client] (ecmascript)");
const typedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/typedData.js [app-client] (ecmascript)");
function wrapTypedDataSignature(parameters) {
    const { domain, message, primaryType, signature, types } = parameters;
    const signatureHex = (()=>{
        if ((0, isHex_js_1.isHex)(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, index_js_1.serializeSignature)(signature);
        return (0, toHex_js_1.bytesToHex)(signature);
    })();
    const hashedDomain = (0, hashTypedData_js_1.hashStruct)({
        data: domain ?? {},
        types: {
            EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
                domain
            })
        },
        primaryType: 'EIP712Domain'
    });
    const hashedContents = (0, hashTypedData_js_1.hashStruct)({
        data: message,
        types: types,
        primaryType
    });
    const encodedType = (0, hashTypedData_js_1.encodeType)({
        primaryType,
        types: types
    });
    return (0, encodePacked_js_1.encodePacked)([
        'bytes',
        'bytes32',
        'bytes32',
        'bytes',
        'uint16'
    ], [
        signatureHex,
        hashedDomain,
        hashedContents,
        (0, toHex_js_1.stringToHex)(encodedType),
        (0, size_js_1.size)((0, toHex_js_1.stringToHex)(encodedType))
    ]);
} //# sourceMappingURL=wrapTypedDataSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/actions/signTypedData.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTypedData = signTypedData;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-client] (ecmascript)");
const getEip712Domain_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getEip712Domain.js [app-client] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-client] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-client] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-client] (ecmascript)");
const wrapTypedDataSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/utils/wrapTypedDataSignature.js [app-client] (ecmascript)");
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, factory, factoryData, message, primaryType, types, verifier } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/experimental/erc7739/signTypedData'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const { domain: verifierDomain } = await (async ()=>{
        if (parameters.verifierDomain) return {
            domain: parameters.verifierDomain
        };
        return (0, getAction_js_1.getAction)(client, getEip712Domain_js_1.getEip712Domain, 'getEip712Domain')({
            address: verifier,
            factory,
            factoryData
        });
    })();
    const signature = await (0, getAction_js_1.getAction)(client, signTypedData_js_1.signTypedData, 'signTypedData')({
        account,
        domain,
        types: {
            ...types,
            TypedDataSign: [
                {
                    name: 'contents',
                    type: primaryType
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
                }
            ]
        },
        primaryType: 'TypedDataSign',
        message: {
            contents: message,
            ...verifierDomain
        }
    });
    return (0, wrapTypedDataSignature_js_1.wrapTypedDataSignature)({
        domain,
        message,
        primaryType,
        signature,
        types
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
}]);

//# sourceMappingURL=0aa7d_viem__cjs_e024b5a7._.js.map