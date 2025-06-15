(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
__turbopack_context__.s({
    "bytesRegex": (()=>bytesRegex),
    "execTyped": (()=>execTyped),
    "integerRegex": (()=>integerRegex),
    "isTupleRegex": (()=>isTupleRegex)
});
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiParameter": (()=>formatAbiParameter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
;
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiParameters": (()=>formatAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
;
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameter"])(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiItem": (()=>formatAbiItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
;
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventModifiers": (()=>eventModifiers),
    "execConstructorSignature": (()=>execConstructorSignature),
    "execErrorSignature": (()=>execErrorSignature),
    "execEventSignature": (()=>execEventSignature),
    "execFallbackSignature": (()=>execFallbackSignature),
    "execFunctionSignature": (()=>execFunctionSignature),
    "execStructSignature": (()=>execStructSignature),
    "functionModifiers": (()=>functionModifiers),
    "isConstructorSignature": (()=>isConstructorSignature),
    "isErrorSignature": (()=>isErrorSignature),
    "isEventSignature": (()=>isEventSignature),
    "isFallbackSignature": (()=>isFallbackSignature),
    "isFunctionSignature": (()=>isFunctionSignature),
    "isReceiveSignature": (()=>isReceiveSignature),
    "isStructSignature": (()=>isStructSignature),
    "modifiers": (()=>modifiers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
;
// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(fallbackSignatureRegex, signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
const eventModifiers = new Set([
    'indexed'
]);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
const version = '1.0.8'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/version.js [app-client] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`
        ].join('\n');
        super(message);
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
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAbiItemError": (()=>InvalidAbiItemError),
    "UnknownSolidityTypeError": (()=>UnknownSolidityTypeError),
    "UnknownTypeError": (()=>UnknownTypeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidAbiItemError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
} //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAbiParameterError": (()=>InvalidAbiParameterError),
    "InvalidAbiParametersError": (()=>InvalidAbiParametersError),
    "InvalidAbiTypeParameterError": (()=>InvalidAbiTypeParameterError),
    "InvalidFunctionModifierError": (()=>InvalidFunctionModifierError),
    "InvalidModifierError": (()=>InvalidModifierError),
    "InvalidParameterError": (()=>InvalidParameterError),
    "SolidityProtectedKeywordError": (()=>SolidityProtectedKeywordError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidAbiParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
} //# sourceMappingURL=abiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidSignatureError": (()=>InvalidSignatureError),
    "InvalidStructSignatureError": (()=>InvalidStructSignatureError),
    "UnknownSignatureError": (()=>UnknownSignatureError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
} //# sourceMappingURL=signature.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CircularReferenceError": (()=>CircularReferenceError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class CircularReferenceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
} //# sourceMappingURL=struct.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidParenthesisError": (()=>InvalidParenthesisError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
;
class InvalidParenthesisError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
} //# sourceMappingURL=splitParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Gets {@link parameterCache} cache key namespaced by {@link type}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`).
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @returns Cache key for {@link parameterCache}
 */ __turbopack_context__.s({
    "getParameterCacheKey": (()=>getParameterCacheKey),
    "parameterCache": (()=>parameterCache)
});
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return param;
}
const parameterCache = new Map([
    // Unnamed
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    // Named
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    // Indexed
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSolidityKeyword": (()=>isSolidityKeyword),
    "isSolidityType": (()=>isSolidityType),
    "isValidDataLocation": (()=>isValidDataLocation),
    "parseAbiParameter": (()=>parseAbiParameter),
    "parseConstructorSignature": (()=>parseConstructorSignature),
    "parseErrorSignature": (()=>parseErrorSignature),
    "parseEventSignature": (()=>parseEventSignature),
    "parseFallbackSignature": (()=>parseFallbackSignature),
    "parseFunctionSignature": (()=>parseFunctionSignature),
    "parseSignature": (()=>parseSignature),
    "splitParameters": (()=>splitParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function parseSignature(signature, structs = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunctionSignature"])(signature)) return parseFunctionSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEventSignature"])(signature)) return parseEventSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isErrorSignature"])(signature)) return parseErrorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConstructorSignature"])(signature)) return parseConstructorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFallbackSignature"])(signature)) return parseFallbackSignature(signature);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReceiveSignature"])(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownSignatureError"]({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execFunctionSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"],
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"],
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execEventSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventModifiers"],
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execErrorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execConstructorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execFallbackSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParameterCacheKey"])(param, options?.type, options?.structs);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].has(parameterCacheKey)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].get(parameterCacheKey);
    const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleRegex"].test(param);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidParameterError"]({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolidityProtectedKeywordError"]({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownSolidityTypeError"]({
            type
        });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        // Check if resolved `type` is valid if there is a function modifier
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionModifiers"].has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidFunctionModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parameterCache"].set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidParenthesisError"]({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesRegex"].test(type) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integerRegex"].test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesRegex"].test(name) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integerRegex"].test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseStructs": (()=>parseStructs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/regex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execStructSignature"])(signature);
        if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStructSignatureError"]({
            signature
        });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTupleRegex"].test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execTyped"])(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiTypeParameterError"]({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircularReferenceError"]({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolidityType"])(type)) components.push(abiParameter);
                else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownTypeError"]({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbi": (()=>parseAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
function parseAbi(signatures) {
    const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        abi.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbiItem": (()=>parseAbiItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature);
    else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature_)) continue;
            abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSignature"])(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiItemError"]({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbiParameters": (()=>parseAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-client] (ecmascript)");
;
;
;
;
;
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitParameters"])(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiers"]
            }));
        }
    } else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStructs"])(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
            const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitParameters"])(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[k], {
                    modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifiers"],
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAbiParametersError"]({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '1.0.8'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
const version_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/version.js [app-client] (ecmascript)");
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${version_js_1.version}`
        ].join('\n');
        super(message);
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
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
}
exports.BaseError = BaseError; //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.narrow = narrow;
function narrow(value) {
    return value;
} //# sourceMappingURL=narrow.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTupleRegex = exports.integerRegex = exports.bytesRegex = void 0;
exports.execTyped = execTyped;
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
exports.isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameter = formatAbiParameter;
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, regex_js_1.execTyped)(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParameters = formatAbiParameters;
const formatAbiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, formatAbiParameter_js_1.formatAbiParameter)(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItem = formatAbiItem;
const formatAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, formatAbiParameters_js_1.formatAbiParameters)(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbi = formatAbi;
const formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
function formatAbi(abi) {
    const signatures = [];
    const length = abi.length;
    for(let i = 0; i < length; i++){
        const abiItem = abi[i];
        const signature = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
        signatures.push(signature);
    }
    return signatures;
} //# sourceMappingURL=formatAbi.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.functionModifiers = exports.eventModifiers = exports.modifiers = void 0;
exports.isErrorSignature = isErrorSignature;
exports.execErrorSignature = execErrorSignature;
exports.isEventSignature = isEventSignature;
exports.execEventSignature = execEventSignature;
exports.isFunctionSignature = isFunctionSignature;
exports.execFunctionSignature = execFunctionSignature;
exports.isStructSignature = isStructSignature;
exports.execStructSignature = execStructSignature;
exports.isConstructorSignature = isConstructorSignature;
exports.execConstructorSignature = execConstructorSignature;
exports.isFallbackSignature = isFallbackSignature;
exports.execFallbackSignature = execFallbackSignature;
exports.isReceiveSignature = isReceiveSignature;
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, regex_js_1.execTyped)(errorSignatureRegex, signature);
}
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, regex_js_1.execTyped)(eventSignatureRegex, signature);
}
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, regex_js_1.execTyped)(functionSignatureRegex, signature);
}
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, regex_js_1.execTyped)(structSignatureRegex, signature);
}
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, regex_js_1.execTyped)(constructorSignatureRegex, signature);
}
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, regex_js_1.execTyped)(fallbackSignatureRegex, signature);
}
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
exports.modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
exports.eventModifiers = new Set([
    'indexed'
]);
exports.functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownSolidityTypeError = exports.UnknownTypeError = exports.InvalidAbiItemError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiItemError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
exports.InvalidAbiItemError = InvalidAbiItemError;
class UnknownTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
exports.UnknownTypeError = UnknownTypeError;
class UnknownSolidityTypeError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
}
exports.UnknownSolidityTypeError = UnknownSolidityTypeError; //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAbiTypeParameterError = exports.InvalidFunctionModifierError = exports.InvalidModifierError = exports.SolidityProtectedKeywordError = exports.InvalidParameterError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidAbiParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
exports.InvalidAbiParameterError = InvalidAbiParameterError;
class InvalidAbiParametersError extends errors_js_1.BaseError {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
exports.InvalidAbiParametersError = InvalidAbiParametersError;
class InvalidParameterError extends errors_js_1.BaseError {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
exports.InvalidParameterError = InvalidParameterError;
class SolidityProtectedKeywordError extends errors_js_1.BaseError {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
exports.SolidityProtectedKeywordError = SolidityProtectedKeywordError;
class InvalidModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
exports.InvalidModifierError = InvalidModifierError;
class InvalidFunctionModifierError extends errors_js_1.BaseError {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
exports.InvalidFunctionModifierError = InvalidFunctionModifierError;
class InvalidAbiTypeParameterError extends errors_js_1.BaseError {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
}
exports.InvalidAbiTypeParameterError = InvalidAbiTypeParameterError; //# sourceMappingURL=abiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidStructSignatureError = exports.UnknownSignatureError = exports.InvalidSignatureError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidSignatureError extends errors_js_1.BaseError {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
exports.InvalidSignatureError = InvalidSignatureError;
class UnknownSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
exports.UnknownSignatureError = UnknownSignatureError;
class InvalidStructSignatureError extends errors_js_1.BaseError {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
}
exports.InvalidStructSignatureError = InvalidStructSignatureError; //# sourceMappingURL=signature.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class CircularReferenceError extends errors_js_1.BaseError {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
}
exports.CircularReferenceError = CircularReferenceError; //# sourceMappingURL=struct.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidParenthesisError = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
class InvalidParenthesisError extends errors_js_1.BaseError {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
}
exports.InvalidParenthesisError = InvalidParenthesisError; //# sourceMappingURL=splitParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parameterCache = void 0;
exports.getParameterCacheKey = getParameterCacheKey;
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return param;
}
exports.parameterCache = new Map([
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSignature = parseSignature;
exports.parseFunctionSignature = parseFunctionSignature;
exports.parseEventSignature = parseEventSignature;
exports.parseErrorSignature = parseErrorSignature;
exports.parseConstructorSignature = parseConstructorSignature;
exports.parseFallbackSignature = parseFallbackSignature;
exports.parseAbiParameter = parseAbiParameter;
exports.splitParameters = splitParameters;
exports.isSolidityType = isSolidityType;
exports.isSolidityKeyword = isSolidityKeyword;
exports.isValidDataLocation = isValidDataLocation;
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const splitParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
const cache_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/cache.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
function parseSignature(signature, structs = {}) {
    if ((0, signatures_js_1.isFunctionSignature)(signature)) return parseFunctionSignature(signature, structs);
    if ((0, signatures_js_1.isEventSignature)(signature)) return parseEventSignature(signature, structs);
    if ((0, signatures_js_1.isErrorSignature)(signature)) return parseErrorSignature(signature, structs);
    if ((0, signatures_js_1.isConstructorSignature)(signature)) return parseConstructorSignature(signature, structs);
    if ((0, signatures_js_1.isFallbackSignature)(signature)) return parseFallbackSignature(signature);
    if ((0, signatures_js_1.isReceiveSignature)(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new signature_js_1.UnknownSignatureError({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execFunctionSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: signatures_js_1.functionModifiers,
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: signatures_js_1.functionModifiers,
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execEventSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: signatures_js_1.eventModifiers,
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execErrorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, signatures_js_1.execConstructorSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, signatures_js_1.execFallbackSignature)(signature);
    if (!match) throw new signature_js_1.InvalidSignatureError({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    const parameterCacheKey = (0, cache_js_1.getParameterCacheKey)(param, options?.type, options?.structs);
    if (cache_js_1.parameterCache.has(parameterCacheKey)) return cache_js_1.parameterCache.get(parameterCacheKey);
    const isTuple = regex_js_1.isTupleRegex.test(param);
    const match = (0, regex_js_1.execTyped)(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new abiParameter_js_1.InvalidParameterError({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new abiParameter_js_1.SolidityProtectedKeywordError({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new abiItem_js_1.UnknownSolidityTypeError({
            type
        });
    }
    if (match.modifier) {
        if (!options?.modifiers?.has?.(match.modifier)) throw new abiParameter_js_1.InvalidModifierError({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        if (signatures_js_1.functionModifiers.has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new abiParameter_js_1.InvalidFunctionModifierError({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    cache_js_1.parameterCache.set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new splitParameters_js_1.InvalidParenthesisError({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || regex_js_1.bytesRegex.test(type) || regex_js_1.integerRegex.test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || regex_js_1.bytesRegex.test(name) || regex_js_1.integerRegex.test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseStructs = parseStructs;
const regex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/regex.js [app-client] (ecmascript)");
const abiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const abiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
const struct_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseStructs(signatures) {
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, signatures_js_1.isStructSignature)(signature)) continue;
        const match = (0, signatures_js_1.execStructSignature)(signature);
        if (!match) throw new signature_js_1.InvalidSignatureError({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, utils_js_1.parseAbiParameter)(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new signature_js_1.InvalidStructSignatureError({
            signature
        });
        shallowStructs[match.name] = components;
    }
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = regex_js_1.isTupleRegex.test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, regex_js_1.execTyped)(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new abiParameter_js_1.InvalidAbiTypeParameterError({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new struct_js_1.CircularReferenceError({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, utils_js_1.isSolidityType)(type)) components.push(abiParameter);
                else throw new abiItem_js_1.UnknownTypeError({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbi = parseAbi;
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbi(signatures) {
    const structs = (0, structs_js_1.parseStructs)(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, signatures_js_1.isStructSignature)(signature)) continue;
        abi.push((0, utils_js_1.parseSignature)(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiItem = parseAbiItem;
const abiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, utils_js_1.parseSignature)(signature);
    else {
        const structs = (0, structs_js_1.parseStructs)(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, signatures_js_1.isStructSignature)(signature_)) continue;
            abiItem = (0, utils_js_1.parseSignature)(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new abiItem_js_1.InvalidAbiItemError({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameter = parseAbiParameter;
const abiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameter(param) {
    let abiParameter;
    if (typeof param === 'string') abiParameter = (0, utils_js_1.parseAbiParameter)(param, {
        modifiers: signatures_js_1.modifiers
    });
    else {
        const structs = (0, structs_js_1.parseStructs)(param);
        const length = param.length;
        for(let i = 0; i < length; i++){
            const signature = param[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            abiParameter = (0, utils_js_1.parseAbiParameter)(signature, {
                modifiers: signatures_js_1.modifiers,
                structs
            });
            break;
        }
    }
    if (!abiParameter) throw new abiParameter_js_1.InvalidAbiParameterError({
        param
    });
    return abiParameter;
} //# sourceMappingURL=parseAbiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAbiParameters = parseAbiParameters;
const abiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
const signatures_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/signatures.js [app-client] (ecmascript)");
const structs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/structs.js [app-client] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
const utils_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/runtime/utils.js [app-client] (ecmascript)");
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, utils_js_1.splitParameters)(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[i], {
                modifiers: signatures_js_1.modifiers
            }));
        }
    } else {
        const structs = (0, structs_js_1.parseStructs)(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, signatures_js_1.isStructSignature)(signature)) continue;
            const parameters = (0, utils_js_1.splitParameters)(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, utils_js_2.parseAbiParameter)(parameters[k], {
                    modifiers: signatures_js_1.modifiers,
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new abiParameter_js_1.InvalidAbiParametersError({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircularReferenceError = exports.InvalidParenthesisError = exports.UnknownSignatureError = exports.InvalidSignatureError = exports.InvalidStructSignatureError = exports.InvalidAbiParameterError = exports.InvalidAbiParametersError = exports.InvalidParameterError = exports.SolidityProtectedKeywordError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.UnknownSolidityTypeError = exports.InvalidAbiItemError = exports.UnknownTypeError = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.formatAbiParameters = exports.formatAbiParameter = exports.formatAbiItem = exports.formatAbi = exports.narrow = exports.BaseError = void 0;
var errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/errors.js [app-client] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return errors_js_1.BaseError;
    }
});
var narrow_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/narrow.js [app-client] (ecmascript)");
Object.defineProperty(exports, "narrow", {
    enumerable: true,
    get: function() {
        return narrow_js_1.narrow;
    }
});
var formatAbi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbi", {
    enumerable: true,
    get: function() {
        return formatAbi_js_1.formatAbi;
    }
});
var formatAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
var formatAbiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameter", {
    enumerable: true,
    get: function() {
        return formatAbiParameter_js_1.formatAbiParameter;
    }
});
var formatAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/formatAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "formatAbiParameters", {
    enumerable: true,
    get: function() {
        return formatAbiParameters_js_1.formatAbiParameters;
    }
});
var parseAbi_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbi.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return parseAbi_js_1.parseAbi;
    }
});
var parseAbiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return parseAbiItem_js_1.parseAbiItem;
    }
});
var parseAbiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return parseAbiParameter_js_1.parseAbiParameter;
    }
});
var parseAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/parseAbiParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return parseAbiParameters_js_1.parseAbiParameters;
    }
});
var abiItem_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiItem.js [app-client] (ecmascript)");
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "UnknownSolidityTypeError", {
    enumerable: true,
    get: function() {
        return abiItem_js_1.UnknownSolidityTypeError;
    }
});
var abiParameter_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/abiParameter.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abiParameter_js_1.InvalidAbiParameterError;
    }
});
var signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/signature.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return signature_js_1.UnknownSignatureError;
    }
});
var splitParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/splitParameters.js [app-client] (ecmascript)");
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return splitParameters_js_1.InvalidParenthesisError;
    }
});
var struct_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/human-readable/errors/struct.js [app-client] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return struct_js_1.CircularReferenceError;
    }
}); //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=8581c_abitype_dist_449557d5._.js.map