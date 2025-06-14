module.exports = {

"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/createWebAuthnCredential.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createWebAuthnCredential = createWebAuthnCredential;
const PublicKey = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/PublicKey.js [app-ssr] (ecmascript)");
const WebAuthnP256 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/WebAuthnP256.js [app-ssr] (ecmascript)");
async function createWebAuthnCredential(parameters) {
    const credential = await WebAuthnP256.createCredential(parameters);
    return {
        id: credential.id,
        publicKey: PublicKey.toHex(credential.publicKey, {
            includePrefix: false
        }),
        raw: credential.raw
    };
} //# sourceMappingURL=createWebAuthnCredential.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/abis.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entryPoint08Abi = exports.entryPoint07Abi = exports.entryPoint06Abi = void 0;
exports.entryPoint06Abi = [
    {
        inputs: [
            {
                name: 'preOpGas',
                type: 'uint256'
            },
            {
                name: 'paid',
                type: 'uint256'
            },
            {
                name: 'validAfter',
                type: 'uint48'
            },
            {
                name: 'validUntil',
                type: 'uint48'
            },
            {
                name: 'targetSuccess',
                type: 'bool'
            },
            {
                name: 'targetResult',
                type: 'bytes'
            }
        ],
        name: 'ExecutionResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'sigFailed',
                        type: 'bool'
                    },
                    {
                        name: 'validAfter',
                        type: 'uint48'
                    },
                    {
                        name: 'validUntil',
                        type: 'uint48'
                    },
                    {
                        name: 'paymasterContext',
                        type: 'bytes'
                    }
                ],
                name: 'returnInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'senderInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'factoryInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'paymasterInfo',
                type: 'tuple'
            }
        ],
        name: 'ValidationResult',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'sigFailed',
                        type: 'bool'
                    },
                    {
                        name: 'validAfter',
                        type: 'uint48'
                    },
                    {
                        name: 'validUntil',
                        type: 'uint48'
                    },
                    {
                        name: 'paymasterContext',
                        type: 'bytes'
                    }
                ],
                name: 'returnInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'senderInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'factoryInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'stake',
                        type: 'uint256'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint256'
                    }
                ],
                name: 'paymasterInfo',
                type: 'tuple'
            },
            {
                components: [
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        components: [
                            {
                                name: 'stake',
                                type: 'uint256'
                            },
                            {
                                name: 'unstakeDelaySec',
                                type: 'uint256'
                            }
                        ],
                        name: 'stakeInfo',
                        type: 'tuple'
                    }
                ],
                name: 'aggregatorInfo',
                type: 'tuple'
            }
        ],
        name: 'ValidationResultWithAggregation',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [],
        name: 'SIG_VALIDATION_FAILED',
        outputs: [
            {
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
                name: 'initCode',
                type: 'bytes'
            },
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'paymasterAndData',
                type: 'bytes'
            }
        ],
        name: '_validateSenderAndPaymaster',
        outputs: [],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
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
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'deposits',
        outputs: [
            {
                name: 'deposit',
                type: 'uint112'
            },
            {
                name: 'staked',
                type: 'bool'
            },
            {
                name: 'stake',
                type: 'uint112'
            },
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            },
            {
                name: 'withdrawTime',
                type: 'uint48'
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
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        name: 'deposit',
                        type: 'uint112'
                    },
                    {
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
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
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'ops',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                name: 'opInfo',
                type: 'tuple'
            },
            {
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                name: 'actualGasCost',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            },
            {
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
        outputs: [
            {
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
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'op',
                type: 'tuple'
            },
            {
                name: 'target',
                type: 'address'
            },
            {
                name: 'targetCallData',
                type: 'bytes'
            }
        ],
        name: 'simulateHandleOp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'simulateValidation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
exports.entryPoint07Abi = [
    {
        inputs: [
            {
                name: 'success',
                type: 'bool'
            },
            {
                name: 'ret',
                type: 'bytes'
            }
        ],
        name: 'DelegateAndRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'opIndex',
                type: 'uint256'
            },
            {
                name: 'reason',
                type: 'string'
            },
            {
                name: 'inner',
                type: 'bytes'
            }
        ],
        name: 'FailedOpWithRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'PostOpReverted',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ReentrancyGuardReentrantCall',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'PostOpRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
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
                name: 'target',
                type: 'address'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'deposits',
        outputs: [
            {
                name: 'deposit',
                type: 'uint256'
            },
            {
                name: 'staked',
                type: 'bool'
            },
            {
                name: 'stake',
                type: 'uint112'
            },
            {
                name: 'unstakeDelaySec',
                type: 'uint32'
            },
            {
                name: 'withdrawTime',
                type: 'uint48'
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
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        name: 'deposit',
                        type: 'uint256'
                    },
                    {
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                name: 'accountGasLimits',
                                type: 'bytes32'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'gasFees',
                                type: 'bytes32'
                            },
                            {
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'ops',
                type: 'tuple[]'
            },
            {
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256'
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                name: 'opInfo',
                type: 'tuple'
            },
            {
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                name: 'actualGasCost',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '',
                type: 'address'
            },
            {
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
        outputs: [
            {
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
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
exports.entryPoint08Abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: 'success',
                type: 'bool'
            },
            {
                internalType: 'bytes',
                name: 'ret',
                type: 'bytes'
            }
        ],
        name: 'DelegateAndRevert',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'opIndex',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: 'reason',
                type: 'string'
            }
        ],
        name: 'FailedOp',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'opIndex',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: 'reason',
                type: 'string'
            },
            {
                internalType: 'bytes',
                name: 'inner',
                type: 'bytes'
            }
        ],
        name: 'FailedOpWithRevert',
        type: 'error'
    },
    {
        inputs: [],
        name: 'InvalidShortString',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'PostOpReverted',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ReentrancyGuardReentrantCall',
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
        name: 'SenderAddressResult',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureValidationFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'str',
                type: 'string'
            }
        ],
        name: 'StringTooLong',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'factory',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'paymaster',
                type: 'address'
            }
        ],
        name: 'AccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'BeforeExecution',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'totalDeposit',
                type: 'uint256'
            }
        ],
        name: 'Deposited',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'PostOpRevertReason',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'aggregator',
                type: 'address'
            }
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'totalStaked',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'unstakeDelaySec',
                type: 'uint256'
            }
        ],
        name: 'StakeLocked',
        type: 'event'
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
                indexed: false,
                internalType: 'uint256',
                name: 'withdrawTime',
                type: 'uint256'
            }
        ],
        name: 'StakeUnlocked',
        type: 'event'
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
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'StakeWithdrawn',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'paymaster',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'success',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasUsed',
                type: 'uint256'
            }
        ],
        name: 'UserOperationEvent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes'
            }
        ],
        name: 'UserOperationRevertReason',
        type: 'event'
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
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint32',
                name: 'unstakeDelaySec',
                type: 'uint32'
            }
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
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
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                internalType: 'bytes1',
                name: 'fields',
                type: 'bytes1'
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            },
            {
                internalType: 'uint256[]',
                name: 'extensions',
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
            }
        ],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'deposit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bool',
                        name: 'staked',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint112',
                        name: 'stake',
                        type: 'uint112'
                    },
                    {
                        internalType: 'uint32',
                        name: 'unstakeDelaySec',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint48',
                        name: 'withdrawTime',
                        type: 'uint48'
                    }
                ],
                internalType: 'struct IStakeManager.DepositInfo',
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getDomainSeparatorV4',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                internalType: 'uint192',
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'getNonce',
        outputs: [
            {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPackedUserOpTypeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'initCode',
                type: 'bytes'
            }
        ],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct PackedUserOperation',
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                internalType: 'bytes',
                                name: 'initCode',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes',
                                name: 'callData',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes32',
                                name: 'accountGasLimits',
                                type: 'bytes32'
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'bytes32',
                                name: 'gasFees',
                                type: 'bytes32'
                            },
                            {
                                internalType: 'bytes',
                                name: 'paymasterAndData',
                                type: 'bytes'
                            },
                            {
                                internalType: 'bytes',
                                name: 'signature',
                                type: 'bytes'
                            }
                        ],
                        internalType: 'struct PackedUserOperation[]',
                        name: 'userOps',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'contract IAggregator',
                        name: 'aggregator',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct IEntryPoint.UserOpsPerAggregator[]',
                name: 'opsPerAggregator',
                type: 'tuple[]'
            },
            {
                internalType: 'address payable',
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct PackedUserOperation[]',
                name: 'ops',
                type: 'tuple[]'
            },
            {
                internalType: 'address payable',
                name: 'beneficiary',
                type: 'address'
            }
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint192',
                name: 'key',
                type: 'uint192'
            }
        ],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes'
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'sender',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'nonce',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'verificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'callGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'paymaster',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxFeePerGas',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct EntryPoint.MemoryUserOp',
                        name: 'mUserOp',
                        type: 'tuple'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'userOpHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'prefund',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'contextOffset',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preOpGas',
                        type: 'uint256'
                    }
                ],
                internalType: 'struct EntryPoint.UserOpInfo',
                name: 'opInfo',
                type: 'tuple'
            },
            {
                internalType: 'bytes',
                name: 'context',
                type: 'bytes'
            }
        ],
        name: 'innerHandleOp',
        outputs: [
            {
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint192',
                name: '',
                type: 'uint192'
            }
        ],
        name: 'nonceSequenceNumber',
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
        inputs: [],
        name: 'senderCreator',
        outputs: [
            {
                internalType: 'contract ISenderCreator',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
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
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address'
            }
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'withdrawAmount',
                type: 'uint256'
            }
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
]; //# sourceMappingURL=abis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInitCode = getInitCode;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
function getInitCode(userOperation) {
    const { authorization, factory, factoryData } = userOperation;
    if (factory === '0x7702' || factory === '0x7702000000000000000000000000000000000000') {
        if (!authorization) return '0x7702000000000000000000000000000000000000';
        const delegation = authorization.address;
        return (0, concat_js_1.concat)([
            delegation,
            factoryData ?? '0x'
        ]);
    }
    if (!factory) return '0x';
    return (0, concat_js_1.concat)([
        factory,
        factoryData ?? '0x'
    ]);
} //# sourceMappingURL=getInitCode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toPackedUserOperation = toPackedUserOperation;
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const getInitCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)");
function toPackedUserOperation(userOperation) {
    const { callGasLimit, callData, maxPriorityFeePerGas, maxFeePerGas, paymaster, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, sender, signature = '0x', verificationGasLimit } = userOperation;
    const accountGasLimits = (0, concat_js_1.concat)([
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(verificationGasLimit || 0n), {
            size: 16
        }),
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(callGasLimit || 0n), {
            size: 16
        })
    ]);
    const initCode = (0, getInitCode_js_1.getInitCode)(userOperation);
    const gasFees = (0, concat_js_1.concat)([
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(maxPriorityFeePerGas || 0n), {
            size: 16
        }),
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(maxFeePerGas || 0n), {
            size: 16
        })
    ]);
    const nonce = userOperation.nonce ?? 0n;
    const paymasterAndData = paymaster ? (0, concat_js_1.concat)([
        paymaster,
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(paymasterVerificationGasLimit || 0n), {
            size: 16
        }),
        (0, pad_js_1.pad)((0, index_js_1.numberToHex)(paymasterPostOpGasLimit || 0n), {
            size: 16
        }),
        paymasterData || '0x'
    ]) : '0x';
    const preVerificationGas = userOperation.preVerificationGas ?? 0n;
    return {
        accountGasLimits,
        callData,
        initCode,
        gasFees,
        nonce,
        paymasterAndData,
        preVerificationGas,
        sender,
        signature
    };
} //# sourceMappingURL=toPackedUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserOperationTypedData = getUserOperationTypedData;
const toPackedUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)");
const types = {
    PackedUserOperation: [
        {
            type: 'address',
            name: 'sender'
        },
        {
            type: 'uint256',
            name: 'nonce'
        },
        {
            type: 'bytes',
            name: 'initCode'
        },
        {
            type: 'bytes',
            name: 'callData'
        },
        {
            type: 'bytes32',
            name: 'accountGasLimits'
        },
        {
            type: 'uint256',
            name: 'preVerificationGas'
        },
        {
            type: 'bytes32',
            name: 'gasFees'
        },
        {
            type: 'bytes',
            name: 'paymasterAndData'
        }
    ]
};
function getUserOperationTypedData(parameters) {
    const { chainId, entryPointAddress, userOperation } = parameters;
    const packedUserOp = (0, toPackedUserOperation_js_1.toPackedUserOperation)(userOperation);
    return {
        types,
        primaryType: 'PackedUserOperation',
        domain: {
            name: 'ERC4337',
            version: '1',
            chainId,
            verifyingContract: entryPointAddress
        },
        message: packedUserOp
    };
} //# sourceMappingURL=getUserOperationTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserOperationHash = getUserOperationHash;
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
const getInitCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getInitCode.js [app-ssr] (ecmascript)");
const getUserOperationTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)");
const toPackedUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)");
function getUserOperationHash(parameters) {
    const { chainId, entryPointAddress, entryPointVersion } = parameters;
    const userOperation = parameters.userOperation;
    const { authorization, callData = '0x', callGasLimit, maxFeePerGas, maxPriorityFeePerGas, nonce, paymasterAndData = '0x', preVerificationGas, sender, verificationGasLimit } = userOperation;
    if (entryPointVersion === '0.8') return (0, hashTypedData_js_1.hashTypedData)((0, getUserOperationTypedData_js_1.getUserOperationTypedData)({
        chainId,
        entryPointAddress,
        userOperation
    }));
    const packedUserOp = (()=>{
        if (entryPointVersion === '0.6') {
            const factory = userOperation.initCode?.slice(0, 42);
            const factoryData = userOperation.initCode?.slice(42);
            const initCode = (0, getInitCode_js_1.getInitCode)({
                authorization,
                factory,
                factoryData
            });
            return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
                {
                    type: 'address'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                }
            ], [
                sender,
                nonce,
                (0, keccak256_js_1.keccak256)(initCode),
                (0, keccak256_js_1.keccak256)(callData),
                callGasLimit,
                verificationGasLimit,
                preVerificationGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                (0, keccak256_js_1.keccak256)(paymasterAndData)
            ]);
        }
        if (entryPointVersion === '0.7') {
            const packedUserOp = (0, toPackedUserOperation_js_1.toPackedUserOperation)(userOperation);
            return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
                {
                    type: 'address'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'uint256'
                },
                {
                    type: 'bytes32'
                },
                {
                    type: 'bytes32'
                }
            ], [
                packedUserOp.sender,
                packedUserOp.nonce,
                (0, keccak256_js_1.keccak256)(packedUserOp.initCode),
                (0, keccak256_js_1.keccak256)(packedUserOp.callData),
                packedUserOp.accountGasLimits,
                packedUserOp.preVerificationGas,
                packedUserOp.gasFees,
                (0, keccak256_js_1.keccak256)(packedUserOp.paymasterAndData)
            ]);
        }
        throw new Error(`entryPointVersion "${entryPointVersion}" not supported.`);
    })();
    return (0, keccak256_js_1.keccak256)((0, encodeAbiParameters_js_1.encodeAbiParameters)([
        {
            type: 'bytes32'
        },
        {
            type: 'address'
        },
        {
            type: 'uint256'
        }
    ], [
        (0, keccak256_js_1.keccak256)(packedUserOp),
        entryPointAddress,
        BigInt(chainId)
    ]));
} //# sourceMappingURL=getUserOperationHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSmartAccount = toSmartAccount;
const abitype_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3/node_modules/abitype/dist/cjs/exports/index.js [app-ssr] (ecmascript)");
const getCode_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getCode.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const nonceManager_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/nonceManager.js [app-ssr] (ecmascript)");
const serializeErc6492Signature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/serializeErc6492Signature.js [app-ssr] (ecmascript)");
async function toSmartAccount(implementation) {
    const { extend, nonceKeyManager = (0, nonceManager_js_1.createNonceManager)({
        source: {
            get () {
                return Date.now();
            },
            set () {}
        }
    }), ...rest } = implementation;
    let deployed = false;
    const address = await implementation.getAddress();
    return {
        ...extend,
        ...rest,
        address,
        async getFactoryArgs () {
            if ('isDeployed' in this && await this.isDeployed()) return {
                factory: undefined,
                factoryData: undefined
            };
            return implementation.getFactoryArgs();
        },
        async getNonce (parameters) {
            const key = parameters?.key ?? BigInt(await nonceKeyManager.consume({
                address,
                chainId: implementation.client.chain.id,
                client: implementation.client
            }));
            if (implementation.getNonce) return await implementation.getNonce({
                ...parameters,
                key
            });
            const nonce = await (0, readContract_js_1.readContract)(implementation.client, {
                abi: (0, abitype_1.parseAbi)([
                    'function getNonce(address, uint192) pure returns (uint256)'
                ]),
                address: implementation.entryPoint.address,
                functionName: 'getNonce',
                args: [
                    address,
                    key
                ]
            });
            return nonce;
        },
        async isDeployed () {
            if (deployed) return true;
            const code = await (0, getAction_js_1.getAction)(implementation.client, getCode_js_1.getCode, 'getCode')({
                address
            });
            deployed = Boolean(code);
            return deployed;
        },
        ...implementation.sign ? {
            async sign (parameters) {
                const [{ factory, factoryData }, signature] = await Promise.all([
                    this.getFactoryArgs(),
                    implementation.sign(parameters)
                ]);
                if (factory && factoryData) return (0, serializeErc6492Signature_js_1.serializeErc6492Signature)({
                    address: factory,
                    data: factoryData,
                    signature
                });
                return signature;
            }
        } : {},
        async signMessage (parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signMessage(parameters)
            ]);
            if (factory && factoryData && factory !== '0x7702') return (0, serializeErc6492Signature_js_1.serializeErc6492Signature)({
                address: factory,
                data: factoryData,
                signature
            });
            return signature;
        },
        async signTypedData (parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signTypedData(parameters)
            ]);
            if (factory && factoryData && factory !== '0x7702') return (0, serializeErc6492Signature_js_1.serializeErc6492Signature)({
                address: factory,
                data: factoryData,
                signature
            });
            return signature;
        },
        type: 'smart'
    };
} //# sourceMappingURL=toSmartAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toCoinbaseSmartAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toCoinbaseSmartAccount = toCoinbaseSmartAccount;
exports.signTypedData = signTypedData;
exports.sign = sign;
exports.toReplaySafeTypedData = toReplaySafeTypedData;
exports.toWebAuthnSignature = toWebAuthnSignature;
exports.wrapSignature = wrapSignature;
const Signature = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Signature.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const decodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const encodePacked_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
const parseSignature_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/parseSignature.js [app-ssr] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/abis.js [app-ssr] (ecmascript)");
const getUserOperationHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)");
const toSmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)");
async function toCoinbaseSmartAccount(parameters) {
    const { client, ownerIndex = 0, owners, nonce = 0n } = parameters;
    let address = parameters.address;
    const entryPoint = {
        abi: abis_js_1.entryPoint06Abi,
        address: address_js_1.entryPoint06Address,
        version: '0.6'
    };
    const factory = {
        abi: factoryAbi,
        address: '0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a'
    };
    const owners_bytes = owners.map((owner)=>{
        if (typeof owner === 'string') return (0, pad_js_1.pad)(owner);
        if (owner.type === 'webAuthn') return owner.publicKey;
        if (owner.type === 'local') return (0, pad_js_1.pad)(owner.address);
        throw new base_js_1.BaseError('invalid owner type');
    });
    const owner = (()=>{
        const owner = owners[ownerIndex] ?? owners[0];
        if (typeof owner === 'string') return {
            address: owner,
            type: 'address'
        };
        return owner;
    })();
    return (0, toSmartAccount_js_1.toSmartAccount)({
        client,
        entryPoint,
        extend: {
            abi,
            factory
        },
        async decodeCalls (data) {
            const result = (0, decodeFunctionData_js_1.decodeFunctionData)({
                abi,
                data
            });
            if (result.functionName === 'execute') return [
                {
                    to: result.args[0],
                    value: result.args[1],
                    data: result.args[2]
                }
            ];
            if (result.functionName === 'executeBatch') return result.args[0].map((arg)=>({
                    to: arg.target,
                    value: arg.value,
                    data: arg.data
                }));
            throw new base_js_1.BaseError(`unable to decode calls for "${result.functionName}"`);
        },
        async encodeCalls (calls) {
            if (calls.length === 1) return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'execute',
                args: [
                    calls[0].to,
                    calls[0].value ?? 0n,
                    calls[0].data ?? '0x'
                ]
            });
            return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'executeBatch',
                args: [
                    calls.map((call)=>({
                            data: call.data ?? '0x',
                            target: call.to,
                            value: call.value ?? 0n
                        }))
                ]
            });
        },
        async getAddress () {
            address ??= await (0, readContract_js_1.readContract)(client, {
                ...factory,
                functionName: 'getAddress',
                args: [
                    owners_bytes,
                    nonce
                ]
            });
            return address;
        },
        async getFactoryArgs () {
            const factoryData = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi: factory.abi,
                functionName: 'createAccount',
                args: [
                    owners_bytes,
                    nonce
                ]
            });
            return {
                factory: factory.address,
                factoryData
            };
        },
        async getStubSignature () {
            if (owner.type === 'webAuthn') return '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000';
            return wrapSignature({
                ownerIndex,
                signature: '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c'
            });
        },
        async sign (parameters) {
            const address = await this.getAddress();
            const typedData = toReplaySafeTypedData({
                address,
                chainId: client.chain.id,
                hash: parameters.hash
            });
            if (owner.type === 'address') throw new Error('owner cannot sign');
            const signature = await signTypedData({
                owner,
                typedData
            });
            return wrapSignature({
                ownerIndex,
                signature
            });
        },
        async signMessage (parameters) {
            const { message } = parameters;
            const address = await this.getAddress();
            const typedData = toReplaySafeTypedData({
                address,
                chainId: client.chain.id,
                hash: (0, hashMessage_js_1.hashMessage)(message)
            });
            if (owner.type === 'address') throw new Error('owner cannot sign');
            const signature = await signTypedData({
                owner,
                typedData
            });
            return wrapSignature({
                ownerIndex,
                signature
            });
        },
        async signTypedData (parameters) {
            const { domain, types, primaryType, message } = parameters;
            const address = await this.getAddress();
            const typedData = toReplaySafeTypedData({
                address,
                chainId: client.chain.id,
                hash: (0, hashTypedData_js_1.hashTypedData)({
                    domain,
                    message,
                    primaryType,
                    types
                })
            });
            if (owner.type === 'address') throw new Error('owner cannot sign');
            const signature = await signTypedData({
                owner,
                typedData
            });
            return wrapSignature({
                ownerIndex,
                signature
            });
        },
        async signUserOperation (parameters) {
            const { chainId = client.chain.id, ...userOperation } = parameters;
            const address = await this.getAddress();
            const hash = (0, getUserOperationHash_js_1.getUserOperationHash)({
                chainId,
                entryPointAddress: entryPoint.address,
                entryPointVersion: entryPoint.version,
                userOperation: {
                    ...userOperation,
                    sender: address
                }
            });
            if (owner.type === 'address') throw new Error('owner cannot sign');
            const signature = await sign({
                hash,
                owner
            });
            return wrapSignature({
                ownerIndex,
                signature
            });
        },
        userOperation: {
            async estimateGas (userOperation) {
                if (owner.type !== 'webAuthn') return;
                return {
                    verificationGasLimit: BigInt(Math.max(Number(userOperation.verificationGasLimit ?? 0n), 800_000))
                };
            }
        }
    });
}
async function signTypedData({ typedData, owner }) {
    if (owner.type === 'local' && owner.signTypedData) return owner.signTypedData(typedData);
    const hash = (0, hashTypedData_js_1.hashTypedData)(typedData);
    return sign({
        hash,
        owner
    });
}
async function sign({ hash, owner }) {
    if (owner.type === 'webAuthn') {
        const { signature, webauthn } = await owner.sign({
            hash
        });
        return toWebAuthnSignature({
            signature,
            webauthn
        });
    }
    if (owner.sign) return owner.sign({
        hash
    });
    throw new base_js_1.BaseError('`owner` does not support raw sign.');
}
function toReplaySafeTypedData({ address, chainId, hash }) {
    return {
        domain: {
            chainId,
            name: 'Coinbase Smart Wallet',
            verifyingContract: address,
            version: '1'
        },
        types: {
            CoinbaseSmartWalletMessage: [
                {
                    name: 'hash',
                    type: 'bytes32'
                }
            ]
        },
        primaryType: 'CoinbaseSmartWalletMessage',
        message: {
            hash
        }
    };
}
function toWebAuthnSignature({ webauthn, signature }) {
    const { r, s } = Signature.fromHex(signature);
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
        {
            components: [
                {
                    name: 'authenticatorData',
                    type: 'bytes'
                },
                {
                    name: 'clientDataJSON',
                    type: 'bytes'
                },
                {
                    name: 'challengeIndex',
                    type: 'uint256'
                },
                {
                    name: 'typeIndex',
                    type: 'uint256'
                },
                {
                    name: 'r',
                    type: 'uint256'
                },
                {
                    name: 's',
                    type: 'uint256'
                }
            ],
            type: 'tuple'
        }
    ], [
        {
            authenticatorData: webauthn.authenticatorData,
            clientDataJSON: (0, toHex_js_1.stringToHex)(webauthn.clientDataJSON),
            challengeIndex: BigInt(webauthn.challengeIndex),
            typeIndex: BigInt(webauthn.typeIndex),
            r,
            s
        }
    ]);
}
function wrapSignature(parameters) {
    const { ownerIndex = 0 } = parameters;
    const signatureData = (()=>{
        if ((0, size_js_1.size)(parameters.signature) !== 65) return parameters.signature;
        const signature = (0, parseSignature_js_1.parseSignature)(parameters.signature);
        return (0, encodePacked_js_1.encodePacked)([
            'bytes32',
            'bytes32',
            'uint8'
        ], [
            signature.r,
            signature.s,
            signature.yParity === 0 ? 27 : 28
        ]);
    })();
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
        {
            components: [
                {
                    name: 'ownerIndex',
                    type: 'uint8'
                },
                {
                    name: 'signatureData',
                    type: 'bytes'
                }
            ],
            type: 'tuple'
        }
    ], [
        {
            ownerIndex,
            signatureData
        }
    ]);
}
const abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'AlreadyOwner',
        type: 'error'
    },
    {
        inputs: [],
        name: 'Initialized',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'InvalidEthereumAddressOwner',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'key',
                type: 'uint256'
            }
        ],
        name: 'InvalidNonceKey',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'InvalidOwnerBytesLength',
        type: 'error'
    },
    {
        inputs: [],
        name: 'LastOwner',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        name: 'NoOwnerAtIndex',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'ownersRemaining',
                type: 'uint256'
            }
        ],
        name: 'NotLastOwner',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'selector',
                type: 'bytes4'
            }
        ],
        name: 'SelectorNotAllowed',
        type: 'error'
    },
    {
        inputs: [],
        name: 'Unauthorized',
        type: 'error'
    },
    {
        inputs: [],
        name: 'UnauthorizedCallContext',
        type: 'error'
    },
    {
        inputs: [],
        name: 'UpgradeFailed',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            },
            {
                name: 'expectedOwner',
                type: 'bytes'
            },
            {
                name: 'actualOwner',
                type: 'bytes'
            }
        ],
        name: 'WrongOwnerAtIndex',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'index',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'AddOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'index',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'RemoveOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'implementation',
                type: 'address'
            }
        ],
        name: 'Upgraded',
        type: 'event'
    },
    {
        stateMutability: 'payable',
        type: 'fallback'
    },
    {
        inputs: [],
        name: 'REPLAYABLE_NONCE_KEY',
        outputs: [
            {
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
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'addOwnerAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'x',
                type: 'bytes32'
            },
            {
                name: 'y',
                type: 'bytes32'
            }
        ],
        name: 'addOwnerPublicKey',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'functionSelector',
                type: 'bytes4'
            }
        ],
        name: 'canSkipChainIdValidation',
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [],
        name: 'domainSeparator',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
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
    },
    {
        inputs: [],
        name: 'entryPoint',
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'target',
                type: 'address'
            },
            {
                name: 'value',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        name: 'data',
                        type: 'bytes'
                    }
                ],
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'executeBatch',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'calls',
                type: 'bytes[]'
            }
        ],
        name: 'executeWithoutChainIdValidation',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            }
        ],
        name: 'getUserOpHashWithoutChainId',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'implementation',
        outputs: [
            {
                name: '$',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owners',
                type: 'bytes[]'
            }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'isOwnerAddress',
        outputs: [
            {
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
                name: 'account',
                type: 'bytes'
            }
        ],
        name: 'isOwnerBytes',
        outputs: [
            {
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
                name: 'x',
                type: 'bytes32'
            },
            {
                name: 'y',
                type: 'bytes32'
            }
        ],
        name: 'isOwnerPublicKey',
        outputs: [
            {
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
                name: 'hash',
                type: 'bytes32'
            },
            {
                name: 'signature',
                type: 'bytes'
            }
        ],
        name: 'isValidSignature',
        outputs: [
            {
                name: 'result',
                type: 'bytes4'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'nextOwnerIndex',
        outputs: [
            {
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
                name: 'index',
                type: 'uint256'
            }
        ],
        name: 'ownerAtIndex',
        outputs: [
            {
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'ownerCount',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            },
            {
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'removeLastOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            },
            {
                name: 'owner',
                type: 'bytes'
            }
        ],
        name: 'removeOwnerAtIndex',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'removedOwnersCount',
        outputs: [
            {
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
                name: 'hash',
                type: 'bytes32'
            }
        ],
        name: 'replaySafeHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'newImplementation',
                type: 'address'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'callGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256'
                    },
                    {
                        name: 'preVerificationGas',
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
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                name: 'userOp',
                type: 'tuple'
            },
            {
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                name: 'missingAccountFunds',
                type: 'uint256'
            }
        ],
        name: 'validateUserOp',
        outputs: [
            {
                name: 'validationData',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
const factoryAbi = [
    {
        inputs: [
            {
                name: 'implementation_',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'OwnerRequired',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'owners',
                type: 'bytes[]'
            },
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'createAccount',
        outputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owners',
                type: 'bytes[]'
            },
            {
                name: 'nonce',
                type: 'uint256'
            }
        ],
        name: 'getAddress',
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'implementation',
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'initCodeHash',
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]; //# sourceMappingURL=toCoinbaseSmartAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toSoladySmartAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSoladySmartAccount = toSoladySmartAccount;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const signMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const signMessage_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/actions/signMessage.js [app-ssr] (ecmascript)");
const signTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/experimental/erc7739/actions/signTypedData.js [app-ssr] (ecmascript)");
const decodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/abis.js [app-ssr] (ecmascript)");
const getUserOperationHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)");
const toSmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)");
async function toSoladySmartAccount(parameters) {
    const { address, client, entryPoint: entryPoint_ = {
        abi: abis_js_1.entryPoint07Abi,
        address: address_js_1.entryPoint07Address,
        version: '0.7'
    }, factoryAddress = '0x5d82735936c6Cd5DE57cC3c1A799f6B2E6F933Df', getNonce, salt = '0x0' } = parameters;
    const entryPoint = {
        abi: entryPoint_.abi,
        address: entryPoint_.address,
        version: entryPoint_.version
    };
    const factory = {
        abi: factoryAbi,
        address: factoryAddress
    };
    const owner = (0, parseAccount_js_1.parseAccount)(parameters.owner);
    return (0, toSmartAccount_js_1.toSmartAccount)({
        client,
        entryPoint,
        getNonce,
        extend: {
            abi,
            factory
        },
        async decodeCalls (data) {
            const result = (0, decodeFunctionData_js_1.decodeFunctionData)({
                abi,
                data
            });
            if (result.functionName === 'execute') return [
                {
                    to: result.args[0],
                    value: result.args[1],
                    data: result.args[2]
                }
            ];
            if (result.functionName === 'executeBatch') return result.args[0].map((arg)=>({
                    to: arg.target,
                    value: arg.value,
                    data: arg.data
                }));
            throw new base_js_1.BaseError(`unable to decode calls for "${result.functionName}"`);
        },
        async encodeCalls (calls) {
            if (calls.length === 1) return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'execute',
                args: [
                    calls[0].to,
                    calls[0].value ?? 0n,
                    calls[0].data ?? '0x'
                ]
            });
            return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'executeBatch',
                args: [
                    calls.map((call)=>({
                            data: call.data ?? '0x',
                            target: call.to,
                            value: call.value ?? 0n
                        }))
                ]
            });
        },
        async getAddress () {
            if (address) return address;
            return await (0, readContract_js_1.readContract)(client, {
                ...factory,
                functionName: 'getAddress',
                args: [
                    (0, pad_js_1.pad)(salt)
                ]
            });
        },
        async getFactoryArgs () {
            const factoryData = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi: factory.abi,
                functionName: 'createAccount',
                args: [
                    owner.address,
                    (0, pad_js_1.pad)(salt)
                ]
            });
            return {
                factory: factory.address,
                factoryData
            };
        },
        async getStubSignature () {
            return '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c';
        },
        async signMessage (parameters) {
            const { message } = parameters;
            const [address, { factory, factoryData }] = await Promise.all([
                this.getAddress(),
                this.getFactoryArgs()
            ]);
            return await (0, signMessage_js_2.signMessage)(client, {
                account: owner,
                factory,
                factoryData,
                message,
                verifier: address
            });
        },
        async signTypedData (parameters) {
            const { domain, types, primaryType, message } = parameters;
            const [address, { factory, factoryData }] = await Promise.all([
                this.getAddress(),
                this.getFactoryArgs()
            ]);
            return await (0, signTypedData_js_1.signTypedData)(client, {
                account: owner,
                domain,
                message,
                factory,
                factoryData,
                primaryType,
                types,
                verifier: address
            });
        },
        async signUserOperation (parameters) {
            const { chainId = client.chain.id, ...userOperation } = parameters;
            const address = await this.getAddress();
            const userOpHash = (0, getUserOperationHash_js_1.getUserOperationHash)({
                chainId,
                entryPointAddress: entryPoint.address,
                entryPointVersion: entryPoint.version,
                userOperation: {
                    ...userOperation,
                    sender: address
                }
            });
            const signature = await (0, getAction_js_1.getAction)(client, signMessage_js_1.signMessage, 'signMessage')({
                account: owner,
                message: {
                    raw: userOpHash
                }
            });
            return signature;
        }
    });
}
const abi = [
    {
        type: 'fallback',
        stateMutability: 'payable'
    },
    {
        type: 'receive',
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'addDeposit',
        inputs: [],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'cancelOwnershipHandover',
        inputs: [],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'completeOwnershipHandover',
        inputs: [
            {
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'delegateExecute',
        inputs: [
            {
                name: 'delegate',
                type: 'address'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: 'result',
                type: 'bytes'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'eip712Domain',
        inputs: [],
        outputs: [
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
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'entryPoint',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'execute',
        inputs: [
            {
                name: 'target',
                type: 'address'
            },
            {
                name: 'value',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: 'result',
                type: 'bytes'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'executeBatch',
        inputs: [
            {
                name: 'calls',
                type: 'tuple[]',
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        name: 'data',
                        type: 'bytes'
                    }
                ]
            }
        ],
        outputs: [
            {
                name: 'results',
                type: 'bytes[]'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'getDeposit',
        inputs: [],
        outputs: [
            {
                name: 'result',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'initialize',
        inputs: [
            {
                name: 'newOwner',
                type: 'address'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'isValidSignature',
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
                name: 'result',
                type: 'bytes4'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'owner',
        inputs: [],
        outputs: [
            {
                name: 'result',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'ownershipHandoverExpiresAt',
        inputs: [
            {
                name: 'pendingOwner',
                type: 'address'
            }
        ],
        outputs: [
            {
                name: 'result',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'proxiableUUID',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'renounceOwnership',
        inputs: [],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'requestOwnershipHandover',
        inputs: [],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'storageLoad',
        inputs: [
            {
                name: 'storageSlot',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'result',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'storageStore',
        inputs: [
            {
                name: 'storageSlot',
                type: 'bytes32'
            },
            {
                name: 'storageValue',
                type: 'bytes32'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'transferOwnership',
        inputs: [
            {
                name: 'newOwner',
                type: 'address'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'upgradeToAndCall',
        inputs: [
            {
                name: 'newImplementation',
                type: 'address'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'validateUserOp',
        inputs: [
            {
                name: 'userOp',
                type: 'tuple',
                components: [
                    {
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        name: 'signature',
                        type: 'bytes'
                    }
                ]
            },
            {
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                name: 'missingAccountFunds',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'validationData',
                type: 'uint256'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'withdrawDepositTo',
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
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'event',
        name: 'OwnershipHandoverCanceled',
        inputs: [
            {
                name: 'pendingOwner',
                type: 'address',
                indexed: true
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'OwnershipHandoverRequested',
        inputs: [
            {
                name: 'pendingOwner',
                type: 'address',
                indexed: true
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'OwnershipTransferred',
        inputs: [
            {
                name: 'oldOwner',
                type: 'address',
                indexed: true
            },
            {
                name: 'newOwner',
                type: 'address',
                indexed: true
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'Upgraded',
        inputs: [
            {
                name: 'implementation',
                type: 'address',
                indexed: true
            }
        ],
        anonymous: false
    },
    {
        type: 'error',
        name: 'AlreadyInitialized',
        inputs: []
    },
    {
        type: 'error',
        name: 'FnSelectorNotRecognized',
        inputs: []
    },
    {
        type: 'error',
        name: 'NewOwnerIsZeroAddress',
        inputs: []
    },
    {
        type: 'error',
        name: 'NoHandoverRequest',
        inputs: []
    },
    {
        type: 'error',
        name: 'Unauthorized',
        inputs: []
    },
    {
        type: 'error',
        name: 'UnauthorizedCallContext',
        inputs: []
    },
    {
        type: 'error',
        name: 'UpgradeFailed',
        inputs: []
    }
];
const factoryAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: 'erc4337',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'createAccount',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'salt',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'getAddress',
        inputs: [
            {
                name: 'salt',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'implementation',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'initCodeHash',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    }
]; //# sourceMappingURL=toSoladySmartAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toSimple7702SmartAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSimple7702SmartAccount = toSimple7702SmartAccount;
const address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const decodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/abis.js [app-ssr] (ecmascript)");
const getUserOperationTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)");
const toSmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)");
async function toSimple7702SmartAccount(parameters) {
    const { client, implementation = '0xe6Cae83BdE06E4c305530e199D7217f42808555B', getNonce, owner } = parameters;
    const entryPoint = {
        abi: abis_js_1.entryPoint08Abi,
        address: address_js_1.entryPoint08Address,
        version: '0.8'
    };
    return (0, toSmartAccount_js_1.toSmartAccount)({
        authorization: {
            account: owner,
            address: implementation
        },
        abi,
        client,
        extend: {
            abi,
            owner
        },
        entryPoint,
        getNonce,
        async decodeCalls (data) {
            const result = (0, decodeFunctionData_js_1.decodeFunctionData)({
                abi,
                data
            });
            if (result.functionName === 'execute') return [
                {
                    to: result.args[0],
                    value: result.args[1],
                    data: result.args[2]
                }
            ];
            if (result.functionName === 'executeBatch') return result.args[0].map((arg)=>({
                    to: arg.target,
                    value: arg.value,
                    data: arg.data
                }));
            throw new base_js_1.BaseError(`unable to decode calls for "${result.functionName}"`);
        },
        async encodeCalls (calls) {
            if (calls.length === 1) return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'execute',
                args: [
                    calls[0].to,
                    calls[0].value ?? 0n,
                    calls[0].data ?? '0x'
                ]
            });
            return (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                functionName: 'executeBatch',
                args: [
                    calls.map((call)=>({
                            data: call.data ?? '0x',
                            target: call.to,
                            value: call.value ?? 0n
                        }))
                ]
            });
        },
        async getAddress () {
            return owner.address;
        },
        async getFactoryArgs () {
            return {
                factory: '0x7702',
                factoryData: '0x'
            };
        },
        async getStubSignature () {
            return '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c';
        },
        async signMessage (parameters) {
            const { message } = parameters;
            return await owner.signMessage({
                message
            });
        },
        async signTypedData (parameters) {
            const { domain, types, primaryType, message } = parameters;
            return await owner.signTypedData({
                domain,
                message,
                primaryType,
                types
            });
        },
        async signUserOperation (parameters) {
            const { chainId = client.chain.id, ...userOperation } = parameters;
            const address = await this.getAddress();
            const typedData = (0, getUserOperationTypedData_js_1.getUserOperationTypedData)({
                chainId,
                entryPointAddress: entryPoint.address,
                userOperation: {
                    ...userOperation,
                    sender: address
                }
            });
            return await owner.signTypedData(typedData);
        }
    });
}
const abi = [
    {
        inputs: [],
        name: 'ECDSAInvalidSignature',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'length',
                type: 'uint256'
            }
        ],
        name: 'ECDSAInvalidSignatureLength',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 's',
                type: 'bytes32'
            }
        ],
        name: 'ECDSAInvalidSignatureS',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'error',
                type: 'bytes'
            }
        ],
        name: 'ExecuteError',
        type: 'error'
    },
    {
        stateMutability: 'payable',
        type: 'fallback'
    },
    {
        inputs: [],
        name: 'entryPoint',
        outputs: [
            {
                internalType: 'contract IEntryPoint',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
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
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'target',
                        type: 'address'
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
                internalType: 'struct BaseAccount.Call[]',
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'executeBatch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getNonce',
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
                internalType: 'bytes32',
                name: 'hash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes'
            }
        ],
        name: 'isValidSignature',
        outputs: [
            {
                internalType: 'bytes4',
                name: 'magicValue',
                type: 'bytes4'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC1155BatchReceived',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC1155Received',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC721Received',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'id',
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
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCode',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'gasFees',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterAndData',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct PackedUserOperation',
                name: 'userOp',
                type: 'tuple'
            },
            {
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: 'missingAccountFunds',
                type: 'uint256'
            }
        ],
        name: 'validateUserOp',
        outputs: [
            {
                internalType: 'uint256',
                name: 'validationData',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
]; //# sourceMappingURL=toSimple7702SmartAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toWebAuthnAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toWebAuthnAccount = toWebAuthnAccount;
const Signature = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/Signature.js [app-ssr] (ecmascript)");
const WebAuthnP256 = __turbopack_context__.r("[project]/node_modules/.pnpm/ox@0.8.1_typescript@5.8.3/node_modules/ox/_cjs/core/WebAuthnP256.js [app-ssr] (ecmascript)");
const hashMessage_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
const hashTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
function toWebAuthnAccount(parameters) {
    const { getFn, rpId } = parameters;
    const { id, publicKey } = parameters.credential;
    return {
        id,
        publicKey,
        async sign ({ hash }) {
            const { metadata, raw, signature } = await WebAuthnP256.sign({
                credentialId: id,
                getFn,
                challenge: hash,
                rpId
            });
            return {
                signature: Signature.toHex(signature),
                raw,
                webauthn: metadata
            };
        },
        async signMessage ({ message }) {
            return this.sign({
                hash: (0, hashMessage_js_1.hashMessage)(message)
            });
        },
        async signTypedData (parameters) {
            return this.sign({
                hash: (0, hashTypedData_js_1.hashTypedData)(parameters)
            });
        },
        type: 'webAuthn'
    };
} //# sourceMappingURL=toWebAuthnAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerificationGasLimitTooLowError = exports.VerificationGasLimitExceededError = exports.UnknownBundlerError = exports.UserOperationOutOfTimeRangeError = exports.UserOperationRejectedByOpCodeError = exports.UserOperationRejectedByPaymasterError = exports.UserOperationRejectedByEntryPointError = exports.UserOperationPaymasterSignatureError = exports.UserOperationSignatureError = exports.UserOperationPaymasterExpiredError = exports.UserOperationExpiredError = exports.UnsupportedSignatureAggregatorError = exports.SmartAccountFunctionRevertedError = exports.SignatureCheckFailedError = exports.SenderAlreadyConstructedError = exports.PaymasterPostOpFunctionRevertedError = exports.PaymasterStakeTooLowError = exports.PaymasterRateLimitError = exports.PaymasterNotDeployedError = exports.PaymasterFunctionRevertedError = exports.PaymasterDepositTooLowError = exports.InvalidPaymasterAndDataError = exports.InvalidFieldsError = exports.InvalidBeneficiaryError = exports.InvalidAccountNonceError = exports.InvalidAggregatorError = exports.InternalCallOnlyError = exports.InsufficientPrefundError = exports.InitCodeMustReturnSenderError = exports.InitCodeMustCreateSenderError = exports.InitCodeFailedError = exports.HandleOpsOutOfGasError = exports.GasValuesOverflowError = exports.FailedToSendToBeneficiaryError = exports.ExecutionRevertedError = exports.AccountNotDeployedError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class AccountNotDeployedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Smart Account is not deployed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.',
                '- An incorrect `sender` address is provided.'
            ],
            name: 'AccountNotDeployedError'
        });
    }
}
exports.AccountNotDeployedError = AccountNotDeployedError;
Object.defineProperty(AccountNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa20/
});
class ExecutionRevertedError extends base_js_1.BaseError {
    constructor({ cause, data, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError'
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
exports.ExecutionRevertedError = ExecutionRevertedError;
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32521
});
Object.defineProperty(ExecutionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FailedToSendToBeneficiaryError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Failed to send funds to beneficiary.', {
            cause,
            name: 'FailedToSendToBeneficiaryError'
        });
    }
}
exports.FailedToSendToBeneficiaryError = FailedToSendToBeneficiaryError;
Object.defineProperty(FailedToSendToBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa91/
});
class GasValuesOverflowError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Gas value overflowed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- one of the gas values exceeded 2**120 (uint120)'
            ].filter(Boolean),
            name: 'GasValuesOverflowError'
        });
    }
}
exports.GasValuesOverflowError = GasValuesOverflowError;
Object.defineProperty(GasValuesOverflowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa94/
});
class HandleOpsOutOfGasError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The `handleOps` function was called by the Bundler with a gas limit too low.', {
            cause,
            name: 'HandleOpsOutOfGasError'
        });
    }
}
exports.HandleOpsOutOfGasError = HandleOpsOutOfGasError;
Object.defineProperty(HandleOpsOutOfGasError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa95/
});
class InitCodeFailedError extends base_js_1.BaseError {
    constructor({ cause, factory, factoryData, initCode }){
        super('Failed to simulate deployment for Smart Account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- Invalid `factory`/`factoryData` or `initCode` properties are present',
                '- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)',
                '- Smart Account deployment execution reverted with an error\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`
            ].filter(Boolean),
            name: 'InitCodeFailedError'
        });
    }
}
exports.InitCodeFailedError = InitCodeFailedError;
Object.defineProperty(InitCodeFailedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa13/
});
class InitCodeMustCreateSenderError extends base_js_1.BaseError {
    constructor({ cause, factory, factoryData, initCode }){
        super('Smart Account initialization implementation did not create an account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- `factory`/`factoryData` or `initCode` properties are invalid',
                '- Smart Account initialization implementation is incorrect\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`
            ].filter(Boolean),
            name: 'InitCodeMustCreateSenderError'
        });
    }
}
exports.InitCodeMustCreateSenderError = InitCodeMustCreateSenderError;
Object.defineProperty(InitCodeMustCreateSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa15/
});
class InitCodeMustReturnSenderError extends base_js_1.BaseError {
    constructor({ cause, factory, factoryData, initCode, sender }){
        super('Smart Account initialization implementation does not return the expected sender.', {
            cause,
            metaMessages: [
                'This could arise when:',
                'Smart Account initialization implementation does not return a sender address\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`,
                sender && `sender: ${sender}`
            ].filter(Boolean),
            name: 'InitCodeMustReturnSenderError'
        });
    }
}
exports.InitCodeMustReturnSenderError = InitCodeMustReturnSenderError;
Object.defineProperty(InitCodeMustReturnSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa14/
});
class InsufficientPrefundError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Smart Account does not have sufficient funds to execute the User Operation.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Smart Account does not have sufficient funds to cover the required prefund, or',
                '- a Paymaster was not provided'
            ].filter(Boolean),
            name: 'InsufficientPrefundError'
        });
    }
}
exports.InsufficientPrefundError = InsufficientPrefundError;
Object.defineProperty(InsufficientPrefundError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa21/
});
class InternalCallOnlyError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Bundler attempted to call an invalid function on the EntryPoint.', {
            cause,
            name: 'InternalCallOnlyError'
        });
    }
}
exports.InternalCallOnlyError = InternalCallOnlyError;
Object.defineProperty(InternalCallOnlyError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa92/
});
class InvalidAggregatorError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Bundler used an invalid aggregator for handling aggregated User Operations.', {
            cause,
            name: 'InvalidAggregatorError'
        });
    }
}
exports.InvalidAggregatorError = InvalidAggregatorError;
Object.defineProperty(InvalidAggregatorError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa96/
});
class InvalidAccountNonceError extends base_js_1.BaseError {
    constructor({ cause, nonce }){
        super('Invalid Smart Account nonce used for User Operation.', {
            cause,
            metaMessages: [
                nonce && `nonce: ${nonce}`
            ].filter(Boolean),
            name: 'InvalidAccountNonceError'
        });
    }
}
exports.InvalidAccountNonceError = InvalidAccountNonceError;
Object.defineProperty(InvalidAccountNonceError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa25/
});
class InvalidBeneficiaryError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Bundler has not set a beneficiary address.', {
            cause,
            name: 'InvalidBeneficiaryError'
        });
    }
}
exports.InvalidBeneficiaryError = InvalidBeneficiaryError;
Object.defineProperty(InvalidBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa90/
});
class InvalidFieldsError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Invalid fields set on User Operation.', {
            cause,
            name: 'InvalidFieldsError'
        });
    }
}
exports.InvalidFieldsError = InvalidFieldsError;
Object.defineProperty(InvalidFieldsError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InvalidPaymasterAndDataError extends base_js_1.BaseError {
    constructor({ cause, paymasterAndData }){
        super('Paymaster properties provided are invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `paymasterAndData` property is of an incorrect length\n',
                paymasterAndData && `paymasterAndData: ${paymasterAndData}`
            ].filter(Boolean),
            name: 'InvalidPaymasterAndDataError'
        });
    }
}
exports.InvalidPaymasterAndDataError = InvalidPaymasterAndDataError;
Object.defineProperty(InvalidPaymasterAndDataError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa93/
});
class PaymasterDepositTooLowError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Paymaster deposit for the User Operation is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Paymaster has deposited less than the expected amount via the `deposit` function'
            ].filter(Boolean),
            name: 'PaymasterDepositTooLowError'
        });
    }
}
exports.PaymasterDepositTooLowError = PaymasterDepositTooLowError;
Object.defineProperty(PaymasterDepositTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32508
});
Object.defineProperty(PaymasterDepositTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa31/
});
class PaymasterFunctionRevertedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The `validatePaymasterUserOp` function on the Paymaster reverted.', {
            cause,
            name: 'PaymasterFunctionRevertedError'
        });
    }
}
exports.PaymasterFunctionRevertedError = PaymasterFunctionRevertedError;
Object.defineProperty(PaymasterFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa33/
});
class PaymasterNotDeployedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The Paymaster contract has not been deployed.', {
            cause,
            name: 'PaymasterNotDeployedError'
        });
    }
}
exports.PaymasterNotDeployedError = PaymasterNotDeployedError;
Object.defineProperty(PaymasterNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa30/
});
class PaymasterRateLimitError extends base_js_1.BaseError {
    constructor({ cause }){
        super('UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.', {
            cause,
            name: 'PaymasterRateLimitError'
        });
    }
}
exports.PaymasterRateLimitError = PaymasterRateLimitError;
Object.defineProperty(PaymasterRateLimitError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32504
});
class PaymasterStakeTooLowError extends base_js_1.BaseError {
    constructor({ cause }){
        super('UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.', {
            cause,
            name: 'PaymasterStakeTooLowError'
        });
    }
}
exports.PaymasterStakeTooLowError = PaymasterStakeTooLowError;
Object.defineProperty(PaymasterStakeTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32505
});
class PaymasterPostOpFunctionRevertedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Paymaster `postOp` function reverted.', {
            cause,
            name: 'PaymasterPostOpFunctionRevertedError'
        });
    }
}
exports.PaymasterPostOpFunctionRevertedError = PaymasterPostOpFunctionRevertedError;
Object.defineProperty(PaymasterPostOpFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa50/
});
class SenderAlreadyConstructedError extends base_js_1.BaseError {
    constructor({ cause, factory, factoryData, initCode }){
        super('Smart Account has already been deployed.', {
            cause,
            metaMessages: [
                'Remove the following properties and try again:',
                factory && '`factory`',
                factoryData && '`factoryData`',
                initCode && '`initCode`'
            ].filter(Boolean),
            name: 'SenderAlreadyConstructedError'
        });
    }
}
exports.SenderAlreadyConstructedError = SenderAlreadyConstructedError;
Object.defineProperty(SenderAlreadyConstructedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa10/
});
class SignatureCheckFailedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).', {
            cause,
            name: 'SignatureCheckFailedError'
        });
    }
}
exports.SignatureCheckFailedError = SignatureCheckFailedError;
Object.defineProperty(SignatureCheckFailedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32507
});
class SmartAccountFunctionRevertedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The `validateUserOp` function on the Smart Account reverted.', {
            cause,
            name: 'SmartAccountFunctionRevertedError'
        });
    }
}
exports.SmartAccountFunctionRevertedError = SmartAccountFunctionRevertedError;
Object.defineProperty(SmartAccountFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa23/
});
class UnsupportedSignatureAggregatorError extends base_js_1.BaseError {
    constructor({ cause }){
        super('UserOperation rejected because account specified unsupported signature aggregator.', {
            cause,
            name: 'UnsupportedSignatureAggregatorError'
        });
    }
}
exports.UnsupportedSignatureAggregatorError = UnsupportedSignatureAggregatorError;
Object.defineProperty(UnsupportedSignatureAggregatorError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32506
});
class UserOperationExpiredError extends base_js_1.BaseError {
    constructor({ cause }){
        super('User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied'
            ].filter(Boolean),
            name: 'UserOperationExpiredError'
        });
    }
}
exports.UserOperationExpiredError = UserOperationExpiredError;
Object.defineProperty(UserOperationExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa22/
});
class UserOperationPaymasterExpiredError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Paymaster for User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied'
            ].filter(Boolean),
            name: 'UserOperationPaymasterExpiredError'
        });
    }
}
exports.UserOperationPaymasterExpiredError = UserOperationPaymasterExpiredError;
Object.defineProperty(UserOperationPaymasterExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa32/
});
class UserOperationSignatureError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account'
            ].filter(Boolean),
            name: 'UserOperationSignatureError'
        });
    }
}
exports.UserOperationSignatureError = UserOperationSignatureError;
Object.defineProperty(UserOperationSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa24/
});
class UserOperationPaymasterSignatureError extends base_js_1.BaseError {
    constructor({ cause }){
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster'
            ].filter(Boolean),
            name: 'UserOperationPaymasterSignatureError'
        });
    }
}
exports.UserOperationPaymasterSignatureError = UserOperationPaymasterSignatureError;
Object.defineProperty(UserOperationPaymasterSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa34/
});
class UserOperationRejectedByEntryPointError extends base_js_1.BaseError {
    constructor({ cause }){
        super("User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.", {
            cause,
            name: 'UserOperationRejectedByEntryPointError'
        });
    }
}
exports.UserOperationRejectedByEntryPointError = UserOperationRejectedByEntryPointError;
Object.defineProperty(UserOperationRejectedByEntryPointError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32500
});
class UserOperationRejectedByPaymasterError extends base_js_1.BaseError {
    constructor({ cause }){
        super("User Operation rejected by Paymaster's `validatePaymasterUserOp`.", {
            cause,
            name: 'UserOperationRejectedByPaymasterError'
        });
    }
}
exports.UserOperationRejectedByPaymasterError = UserOperationRejectedByPaymasterError;
Object.defineProperty(UserOperationRejectedByPaymasterError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32501
});
class UserOperationRejectedByOpCodeError extends base_js_1.BaseError {
    constructor({ cause }){
        super('User Operation rejected with op code validation error.', {
            cause,
            name: 'UserOperationRejectedByOpCodeError'
        });
    }
}
exports.UserOperationRejectedByOpCodeError = UserOperationRejectedByOpCodeError;
Object.defineProperty(UserOperationRejectedByOpCodeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32502
});
class UserOperationOutOfTimeRangeError extends base_js_1.BaseError {
    constructor({ cause }){
        super('UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).', {
            cause,
            name: 'UserOperationOutOfTimeRangeError'
        });
    }
}
exports.UserOperationOutOfTimeRangeError = UserOperationOutOfTimeRangeError;
Object.defineProperty(UserOperationOutOfTimeRangeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32503
});
class UnknownBundlerError extends base_js_1.BaseError {
    constructor({ cause }){
        super(`An error occurred while executing user operation: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownBundlerError'
        });
    }
}
exports.UnknownBundlerError = UnknownBundlerError;
class VerificationGasLimitExceededError extends base_js_1.BaseError {
    constructor({ cause }){
        super('User Operation verification gas limit exceeded.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the gas used for verification exceeded the `verificationGasLimit`'
            ].filter(Boolean),
            name: 'VerificationGasLimitExceededError'
        });
    }
}
exports.VerificationGasLimitExceededError = VerificationGasLimitExceededError;
Object.defineProperty(VerificationGasLimitExceededError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa40/
});
class VerificationGasLimitTooLowError extends base_js_1.BaseError {
    constructor({ cause }){
        super('User Operation verification gas limit is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `verificationGasLimit` is too low to verify the User Operation'
            ].filter(Boolean),
            name: 'VerificationGasLimitTooLowError'
        });
    }
}
exports.VerificationGasLimitTooLowError = VerificationGasLimitTooLowError;
Object.defineProperty(VerificationGasLimitTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa41/
}); //# sourceMappingURL=bundler.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForUserOperationReceiptTimeoutError = exports.UserOperationNotFoundError = exports.UserOperationReceiptNotFoundError = exports.UserOperationExecutionError = void 0;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
class UserOperationExecutionError extends base_js_1.BaseError {
    constructor(cause, { callData, callGasLimit, docsPath, factory, factoryData, initCode, maxFeePerGas, maxPriorityFeePerGas, nonce, paymaster, paymasterAndData, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, preVerificationGas, sender, signature, verificationGasLimit }){
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            callData,
            callGasLimit,
            factory,
            factoryData,
            initCode,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, index_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, index_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce,
            paymaster,
            paymasterAndData,
            paymasterData,
            paymasterPostOpGasLimit,
            paymasterVerificationGasLimit,
            preVerificationGas,
            sender,
            signature,
            verificationGasLimit
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
            name: 'UserOperationExecutionError'
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
exports.UserOperationExecutionError = UserOperationExecutionError;
class UserOperationReceiptNotFoundError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`User Operation receipt with hash "${hash}" could not be found. The User Operation may not have been processed yet.`, {
            name: 'UserOperationReceiptNotFoundError'
        });
    }
}
exports.UserOperationReceiptNotFoundError = UserOperationReceiptNotFoundError;
class UserOperationNotFoundError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`User Operation with hash "${hash}" could not be found.`, {
            name: 'UserOperationNotFoundError'
        });
    }
}
exports.UserOperationNotFoundError = UserOperationNotFoundError;
class WaitForUserOperationReceiptTimeoutError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Timed out while waiting for User Operation with hash "${hash}" to be confirmed.`, {
            name: 'WaitForUserOperationReceiptTimeoutError'
        });
    }
}
exports.WaitForUserOperationReceiptTimeoutError = WaitForUserOperationReceiptTimeoutError; //# sourceMappingURL=userOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getBundlerError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBundlerError = getBundlerError;
const bundler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)");
const bundlerErrors = [
    bundler_js_1.ExecutionRevertedError,
    bundler_js_1.InvalidFieldsError,
    bundler_js_1.PaymasterDepositTooLowError,
    bundler_js_1.PaymasterRateLimitError,
    bundler_js_1.PaymasterStakeTooLowError,
    bundler_js_1.SignatureCheckFailedError,
    bundler_js_1.UnsupportedSignatureAggregatorError,
    bundler_js_1.UserOperationOutOfTimeRangeError,
    bundler_js_1.UserOperationRejectedByEntryPointError,
    bundler_js_1.UserOperationRejectedByPaymasterError,
    bundler_js_1.UserOperationRejectedByOpCodeError
];
function getBundlerError(err, args) {
    const message = (err.details || '').toLowerCase();
    if (bundler_js_1.AccountNotDeployedError.message.test(message)) return new bundler_js_1.AccountNotDeployedError({
        cause: err
    });
    if (bundler_js_1.FailedToSendToBeneficiaryError.message.test(message)) return new bundler_js_1.FailedToSendToBeneficiaryError({
        cause: err
    });
    if (bundler_js_1.GasValuesOverflowError.message.test(message)) return new bundler_js_1.GasValuesOverflowError({
        cause: err
    });
    if (bundler_js_1.HandleOpsOutOfGasError.message.test(message)) return new bundler_js_1.HandleOpsOutOfGasError({
        cause: err
    });
    if (bundler_js_1.InitCodeFailedError.message.test(message)) return new bundler_js_1.InitCodeFailedError({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (bundler_js_1.InitCodeMustCreateSenderError.message.test(message)) return new bundler_js_1.InitCodeMustCreateSenderError({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (bundler_js_1.InitCodeMustReturnSenderError.message.test(message)) return new bundler_js_1.InitCodeMustReturnSenderError({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode,
        sender: args.sender
    });
    if (bundler_js_1.InsufficientPrefundError.message.test(message)) return new bundler_js_1.InsufficientPrefundError({
        cause: err
    });
    if (bundler_js_1.InternalCallOnlyError.message.test(message)) return new bundler_js_1.InternalCallOnlyError({
        cause: err
    });
    if (bundler_js_1.InvalidAccountNonceError.message.test(message)) return new bundler_js_1.InvalidAccountNonceError({
        cause: err,
        nonce: args.nonce
    });
    if (bundler_js_1.InvalidAggregatorError.message.test(message)) return new bundler_js_1.InvalidAggregatorError({
        cause: err
    });
    if (bundler_js_1.InvalidBeneficiaryError.message.test(message)) return new bundler_js_1.InvalidBeneficiaryError({
        cause: err
    });
    if (bundler_js_1.InvalidPaymasterAndDataError.message.test(message)) return new bundler_js_1.InvalidPaymasterAndDataError({
        cause: err
    });
    if (bundler_js_1.PaymasterDepositTooLowError.message.test(message)) return new bundler_js_1.PaymasterDepositTooLowError({
        cause: err
    });
    if (bundler_js_1.PaymasterFunctionRevertedError.message.test(message)) return new bundler_js_1.PaymasterFunctionRevertedError({
        cause: err
    });
    if (bundler_js_1.PaymasterNotDeployedError.message.test(message)) return new bundler_js_1.PaymasterNotDeployedError({
        cause: err
    });
    if (bundler_js_1.PaymasterPostOpFunctionRevertedError.message.test(message)) return new bundler_js_1.PaymasterPostOpFunctionRevertedError({
        cause: err
    });
    if (bundler_js_1.SmartAccountFunctionRevertedError.message.test(message)) return new bundler_js_1.SmartAccountFunctionRevertedError({
        cause: err
    });
    if (bundler_js_1.SenderAlreadyConstructedError.message.test(message)) return new bundler_js_1.SenderAlreadyConstructedError({
        cause: err,
        factory: args.factory,
        factoryData: args.factoryData,
        initCode: args.initCode
    });
    if (bundler_js_1.UserOperationExpiredError.message.test(message)) return new bundler_js_1.UserOperationExpiredError({
        cause: err
    });
    if (bundler_js_1.UserOperationPaymasterExpiredError.message.test(message)) return new bundler_js_1.UserOperationPaymasterExpiredError({
        cause: err
    });
    if (bundler_js_1.UserOperationPaymasterSignatureError.message.test(message)) return new bundler_js_1.UserOperationPaymasterSignatureError({
        cause: err
    });
    if (bundler_js_1.UserOperationSignatureError.message.test(message)) return new bundler_js_1.UserOperationSignatureError({
        cause: err
    });
    if (bundler_js_1.VerificationGasLimitExceededError.message.test(message)) return new bundler_js_1.VerificationGasLimitExceededError({
        cause: err
    });
    if (bundler_js_1.VerificationGasLimitTooLowError.message.test(message)) return new bundler_js_1.VerificationGasLimitTooLowError({
        cause: err
    });
    const error = err.walk((e)=>bundlerErrors.some((error)=>error.code === e.code));
    if (error) {
        if (error.code === bundler_js_1.ExecutionRevertedError.code) return new bundler_js_1.ExecutionRevertedError({
            cause: err,
            data: error.data,
            message: error.details
        });
        if (error.code === bundler_js_1.InvalidFieldsError.code) return new bundler_js_1.InvalidFieldsError({
            cause: err
        });
        if (error.code === bundler_js_1.PaymasterDepositTooLowError.code) return new bundler_js_1.PaymasterDepositTooLowError({
            cause: err
        });
        if (error.code === bundler_js_1.PaymasterRateLimitError.code) return new bundler_js_1.PaymasterRateLimitError({
            cause: err
        });
        if (error.code === bundler_js_1.PaymasterStakeTooLowError.code) return new bundler_js_1.PaymasterStakeTooLowError({
            cause: err
        });
        if (error.code === bundler_js_1.SignatureCheckFailedError.code) return new bundler_js_1.SignatureCheckFailedError({
            cause: err
        });
        if (error.code === bundler_js_1.UnsupportedSignatureAggregatorError.code) return new bundler_js_1.UnsupportedSignatureAggregatorError({
            cause: err
        });
        if (error.code === bundler_js_1.UserOperationOutOfTimeRangeError.code) return new bundler_js_1.UserOperationOutOfTimeRangeError({
            cause: err
        });
        if (error.code === bundler_js_1.UserOperationRejectedByEntryPointError.code) return new bundler_js_1.UserOperationRejectedByEntryPointError({
            cause: err
        });
        if (error.code === bundler_js_1.UserOperationRejectedByPaymasterError.code) return new bundler_js_1.UserOperationRejectedByPaymasterError({
            cause: err
        });
        if (error.code === bundler_js_1.UserOperationRejectedByOpCodeError.code) return new bundler_js_1.UserOperationRejectedByOpCodeError({
            cause: err
        });
    }
    return new bundler_js_1.UnknownBundlerError({
        cause: err
    });
} //# sourceMappingURL=getBundlerError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserOperationError = getUserOperationError;
const base_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
const bundler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)");
const userOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
const getBundlerError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getBundlerError.js [app-ssr] (ecmascript)");
function getUserOperationError(err, { calls, docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getBundlerError_js_1.getBundlerError)(err, args);
        if (calls && cause instanceof bundler_js_1.ExecutionRevertedError) {
            const revertData = getRevertData(cause);
            const contractCalls = calls?.filter((call)=>call.abi);
            if (revertData && contractCalls.length > 0) return getContractError({
                calls: contractCalls,
                revertData
            });
        }
        return cause;
    })();
    return new userOperation_js_1.UserOperationExecutionError(cause, {
        docsPath,
        ...args
    });
}
function getRevertData(error) {
    let revertData;
    error.walk((e)=>{
        const error = e;
        if (typeof error.data === 'string' || typeof error.data?.revertData === 'string' || !(error instanceof base_js_1.BaseError) && typeof error.message === 'string') {
            const match = (error.data?.revertData || error.data || error.message).match?.(/(0x[A-Za-z0-9]*)/);
            if (match) {
                revertData = match[1];
                return true;
            }
        }
        return false;
    });
    return revertData;
}
function getContractError(parameters) {
    const { calls, revertData } = parameters;
    const { abi, functionName, args, to } = (()=>{
        const contractCalls = calls?.filter((call)=>Boolean(call.abi));
        if (contractCalls.length === 1) return contractCalls[0];
        const compatContractCalls = contractCalls.filter((call)=>{
            try {
                return Boolean((0, decodeErrorResult_js_1.decodeErrorResult)({
                    abi: call.abi,
                    data: revertData
                }));
            } catch  {
                return false;
            }
        });
        if (compatContractCalls.length === 1) return compatContractCalls[0];
        return {
            abi: [],
            functionName: contractCalls.reduce((acc, call)=>`${acc ? `${acc} | ` : ''}${call.functionName}`, ''),
            args: undefined,
            to: undefined
        };
    })();
    const cause = (()=>{
        if (revertData === '0x') return new contract_js_1.ContractFunctionZeroDataError({
            functionName
        });
        return new contract_js_1.ContractFunctionRevertedError({
            abi,
            data: revertData,
            functionName
        });
    })();
    return new contract_js_1.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: to,
        functionName
    });
} //# sourceMappingURL=getUserOperationError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUserOperationGas = formatUserOperationGas;
function formatUserOperationGas(parameters) {
    const gas = {};
    if (parameters.callGasLimit) gas.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.preVerificationGas) gas.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit) gas.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    if (parameters.paymasterPostOpGasLimit) gas.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit) gas.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    return gas;
} //# sourceMappingURL=userOperationGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUserOperationRequest = formatUserOperationRequest;
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
function formatUserOperationRequest(request) {
    const rpcRequest = {};
    if (typeof request.callData !== 'undefined') rpcRequest.callData = request.callData;
    if (typeof request.callGasLimit !== 'undefined') rpcRequest.callGasLimit = (0, toHex_js_1.numberToHex)(request.callGasLimit);
    if (typeof request.factory !== 'undefined') rpcRequest.factory = request.factory;
    if (typeof request.factoryData !== 'undefined') rpcRequest.factoryData = request.factoryData;
    if (typeof request.initCode !== 'undefined') rpcRequest.initCode = request.initCode;
    if (typeof request.maxFeePerGas !== 'undefined') rpcRequest.maxFeePerGas = (0, toHex_js_1.numberToHex)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined') rpcRequest.maxPriorityFeePerGas = (0, toHex_js_1.numberToHex)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined') rpcRequest.nonce = (0, toHex_js_1.numberToHex)(request.nonce);
    if (typeof request.paymaster !== 'undefined') rpcRequest.paymaster = request.paymaster;
    if (typeof request.paymasterAndData !== 'undefined') rpcRequest.paymasterAndData = request.paymasterAndData || '0x';
    if (typeof request.paymasterData !== 'undefined') rpcRequest.paymasterData = request.paymasterData;
    if (typeof request.paymasterPostOpGasLimit !== 'undefined') rpcRequest.paymasterPostOpGasLimit = (0, toHex_js_1.numberToHex)(request.paymasterPostOpGasLimit);
    if (typeof request.paymasterVerificationGasLimit !== 'undefined') rpcRequest.paymasterVerificationGasLimit = (0, toHex_js_1.numberToHex)(request.paymasterVerificationGasLimit);
    if (typeof request.preVerificationGas !== 'undefined') rpcRequest.preVerificationGas = (0, toHex_js_1.numberToHex)(request.preVerificationGas);
    if (typeof request.sender !== 'undefined') rpcRequest.sender = request.sender;
    if (typeof request.signature !== 'undefined') rpcRequest.signature = request.signature;
    if (typeof request.verificationGasLimit !== 'undefined') rpcRequest.verificationGasLimit = (0, toHex_js_1.numberToHex)(request.verificationGasLimit);
    if (typeof request.authorization !== 'undefined') rpcRequest.eip7702Auth = formatAuthorization(request.authorization);
    return rpcRequest;
}
function formatAuthorization(authorization) {
    return {
        address: authorization.address,
        chainId: (0, toHex_js_1.numberToHex)(authorization.chainId),
        nonce: (0, toHex_js_1.numberToHex)(authorization.nonce),
        r: authorization.r ? (0, toHex_js_1.numberToHex)(BigInt(authorization.r), {
            size: 32
        }) : (0, index_js_1.pad)('0x', {
            size: 32
        }),
        s: authorization.s ? (0, toHex_js_1.numberToHex)(BigInt(authorization.s), {
            size: 32
        }) : (0, index_js_1.pad)('0x', {
            size: 32
        }),
        yParity: authorization.yParity ? (0, toHex_js_1.numberToHex)(authorization.yParity, {
            size: 1
        }) : (0, index_js_1.pad)('0x', {
            size: 32
        })
    };
} //# sourceMappingURL=userOperationRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPaymasterData = getPaymasterData;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const userOperationRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
async function getPaymasterData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = (0, userOperationRequest_js_1.formatUserOperationRequest)(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0'
            },
            entryPointAddress,
            (0, toHex_js_1.numberToHex)(chainId),
            context
        ]
    });
    return {
        ...rest,
        ...paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0, fromHex_js_1.hexToBigInt)(paymasterPostOpGasLimit)
        },
        ...paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0, fromHex_js_1.hexToBigInt)(paymasterVerificationGasLimit)
        }
    };
} //# sourceMappingURL=getPaymasterData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPaymasterStubData = getPaymasterStubData;
const fromHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const userOperationRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
async function getPaymasterStubData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = (0, userOperationRequest_js_1.formatUserOperationRequest)(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterStubData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0'
            },
            entryPointAddress,
            (0, toHex_js_1.numberToHex)(chainId),
            context
        ]
    });
    return {
        ...rest,
        ...paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0, fromHex_js_1.hexToBigInt)(paymasterPostOpGasLimit)
        },
        ...paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0, fromHex_js_1.hexToBigInt)(paymasterVerificationGasLimit)
        }
    };
} //# sourceMappingURL=getPaymasterStubData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareUserOperation = prepareUserOperation;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/index.js [app-ssr] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getPaymasterData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)");
const getPaymasterStubData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)");
const estimateUserOperationGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)");
const defaultParameters = [
    'factory',
    'fees',
    'gas',
    'paymaster',
    'nonce',
    'signature',
    'authorization'
];
async function prepareUserOperation(client, parameters_) {
    const parameters = parameters_;
    const { account: account_ = client.account, parameters: properties = defaultParameters, stateOverride } = parameters;
    if (!account_) throw new account_js_1.AccountNotFoundError();
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const bundlerClient = client;
    const paymaster = parameters.paymaster ?? bundlerClient?.paymaster;
    const paymasterAddress = typeof paymaster === 'string' ? paymaster : undefined;
    const { getPaymasterStubData, getPaymasterData } = (()=>{
        if (paymaster === true) return {
            getPaymasterStubData: (parameters)=>(0, getAction_js_1.getAction)(bundlerClient, getPaymasterStubData_js_1.getPaymasterStubData, 'getPaymasterStubData')(parameters),
            getPaymasterData: (parameters)=>(0, getAction_js_1.getAction)(bundlerClient, getPaymasterData_js_1.getPaymasterData, 'getPaymasterData')(parameters)
        };
        if (typeof paymaster === 'object') {
            const { getPaymasterStubData, getPaymasterData } = paymaster;
            return {
                getPaymasterStubData: getPaymasterData && getPaymasterStubData ? getPaymasterStubData : getPaymasterData,
                getPaymasterData: getPaymasterData && getPaymasterStubData ? getPaymasterData : undefined
            };
        }
        return {
            getPaymasterStubData: undefined,
            getPaymasterData: undefined
        };
    })();
    const paymasterContext = parameters.paymasterContext ? parameters.paymasterContext : bundlerClient?.paymasterContext;
    let request = {
        ...parameters,
        paymaster: paymasterAddress,
        sender: account.address
    };
    const [callData, factory, fees, nonce, authorization] = await Promise.all([
        (async ()=>{
            if (parameters.calls) return account.encodeCalls(parameters.calls.map((call_)=>{
                const call = call_;
                if (call.abi) return {
                    data: (0, encodeFunctionData_js_1.encodeFunctionData)(call),
                    to: call.to,
                    value: call.value
                };
                return call;
            }));
            return parameters.callData;
        })(),
        (async ()=>{
            if (!properties.includes('factory')) return undefined;
            if (parameters.initCode) return {
                initCode: parameters.initCode
            };
            if (parameters.factory && parameters.factoryData) {
                return {
                    factory: parameters.factory,
                    factoryData: parameters.factoryData
                };
            }
            const { factory, factoryData } = await account.getFactoryArgs();
            if (account.entryPoint.version === '0.6') return {
                initCode: factory && factoryData ? (0, concat_js_1.concat)([
                    factory,
                    factoryData
                ]) : undefined
            };
            return {
                factory,
                factoryData
            };
        })(),
        (async ()=>{
            if (!properties.includes('fees')) return undefined;
            if (typeof parameters.maxFeePerGas === 'bigint' && typeof parameters.maxPriorityFeePerGas === 'bigint') return request;
            if (bundlerClient?.userOperation?.estimateFeesPerGas) {
                const fees = await bundlerClient.userOperation.estimateFeesPerGas({
                    account,
                    bundlerClient,
                    userOperation: request
                });
                return {
                    ...request,
                    ...fees
                };
            }
            try {
                const client_ = bundlerClient.client ?? client;
                const fees = await (0, getAction_js_1.getAction)(client_, estimateFeesPerGas_js_1.estimateFeesPerGas, 'estimateFeesPerGas')({
                    chain: client_.chain,
                    type: 'eip1559'
                });
                return {
                    maxFeePerGas: typeof parameters.maxFeePerGas === 'bigint' ? parameters.maxFeePerGas : BigInt(2n * fees.maxFeePerGas),
                    maxPriorityFeePerGas: typeof parameters.maxPriorityFeePerGas === 'bigint' ? parameters.maxPriorityFeePerGas : BigInt(2n * fees.maxPriorityFeePerGas)
                };
            } catch  {
                return undefined;
            }
        })(),
        (async ()=>{
            if (!properties.includes('nonce')) return undefined;
            if (typeof parameters.nonce === 'bigint') return parameters.nonce;
            return account.getNonce();
        })(),
        (async ()=>{
            if (!properties.includes('authorization')) return undefined;
            if (typeof parameters.authorization === 'object') return parameters.authorization;
            if (account.authorization && !await account.isDeployed()) {
                const authorization = await (0, index_js_1.prepareAuthorization)(account.client, account.authorization);
                return {
                    ...authorization,
                    r: '0xfffffffffffffffffffffffffffffff000000000000000000000000000000000',
                    s: '0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    yParity: 1
                };
            }
            return undefined;
        })()
    ]);
    if (typeof callData !== 'undefined') request.callData = callData;
    if (typeof factory !== 'undefined') request = {
        ...request,
        ...factory
    };
    if (typeof fees !== 'undefined') request = {
        ...request,
        ...fees
    };
    if (typeof nonce !== 'undefined') request.nonce = nonce;
    if (typeof authorization !== 'undefined') request.authorization = authorization;
    if (properties.includes('signature')) {
        if (typeof parameters.signature !== 'undefined') request.signature = parameters.signature;
        else request.signature = await account.getStubSignature(request);
    }
    if (account.entryPoint.version === '0.6' && !request.initCode) request.initCode = '0x';
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (client.chain) return client.chain.id;
        const chainId_ = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    let isPaymasterPopulated = false;
    if (properties.includes('paymaster') && getPaymasterStubData && !paymasterAddress && !parameters.paymasterAndData) {
        const { isFinal = false, sponsor, ...paymasterArgs } = await getPaymasterStubData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request
        });
        isPaymasterPopulated = isFinal;
        request = {
            ...request,
            ...paymasterArgs
        };
    }
    if (account.entryPoint.version === '0.6' && !request.paymasterAndData) request.paymasterAndData = '0x';
    if (properties.includes('gas')) {
        if (account.userOperation?.estimateGas) {
            const gas = await account.userOperation.estimateGas(request);
            request = {
                ...request,
                ...gas
            };
        }
        if (typeof request.callGasLimit === 'undefined' || typeof request.preVerificationGas === 'undefined' || typeof request.verificationGasLimit === 'undefined' || request.paymaster && typeof request.paymasterPostOpGasLimit === 'undefined' || request.paymaster && typeof request.paymasterVerificationGasLimit === 'undefined') {
            const gas = await (0, getAction_js_1.getAction)(bundlerClient, estimateUserOperationGas_js_1.estimateUserOperationGas, 'estimateUserOperationGas')({
                account,
                callGasLimit: 0n,
                preVerificationGas: 0n,
                verificationGasLimit: 0n,
                stateOverride,
                ...request.paymaster ? {
                    paymasterPostOpGasLimit: 0n,
                    paymasterVerificationGasLimit: 0n
                } : {},
                ...request
            });
            request = {
                ...request,
                callGasLimit: request.callGasLimit ?? gas.callGasLimit,
                preVerificationGas: request.preVerificationGas ?? gas.preVerificationGas,
                verificationGasLimit: request.verificationGasLimit ?? gas.verificationGasLimit,
                paymasterPostOpGasLimit: request.paymasterPostOpGasLimit ?? gas.paymasterPostOpGasLimit,
                paymasterVerificationGasLimit: request.paymasterVerificationGasLimit ?? gas.paymasterVerificationGasLimit
            };
        }
    }
    if (properties.includes('paymaster') && getPaymasterData && !paymasterAddress && !parameters.paymasterAndData && !isPaymasterPopulated) {
        const paymaster = await getPaymasterData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request
        });
        request = {
            ...request,
            ...paymaster
        };
    }
    delete request.calls;
    delete request.parameters;
    delete request.paymasterContext;
    if (typeof request.paymaster !== 'string') delete request.paymaster;
    return request;
} //# sourceMappingURL=prepareUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateUserOperationGas = estimateUserOperationGas;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const stateOverride_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stateOverride.js [app-ssr] (ecmascript)");
const getUserOperationError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)");
const userOperationGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationGas.js [app-ssr] (ecmascript)");
const userOperationRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
const prepareUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
async function estimateUserOperationGas(client, parameters) {
    const { account: account_ = client.account, entryPointAddress, stateOverride } = parameters;
    if (!account_ && !parameters.sender) throw new account_js_1.AccountNotFoundError();
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    const rpcStateOverride = (0, stateOverride_js_1.serializeStateOverride)(stateOverride);
    const request = account ? await (0, getAction_js_1.getAction)(client, prepareUserOperation_js_1.prepareUserOperation, 'prepareUserOperation')({
        ...parameters,
        parameters: [
            'authorization',
            'factory',
            'nonce',
            'paymaster',
            'signature'
        ]
    }) : parameters;
    try {
        const params = [
            (0, userOperationRequest_js_1.formatUserOperationRequest)(request),
            entryPointAddress ?? account?.entryPoint?.address
        ];
        const result = await client.request({
            method: 'eth_estimateUserOperationGas',
            params: rpcStateOverride ? [
                ...params,
                rpcStateOverride
            ] : [
                ...params
            ]
        });
        return (0, userOperationGas_js_1.formatUserOperationGas)(result);
    } catch (error) {
        const calls = parameters.calls;
        throw (0, getUserOperationError_js_1.getUserOperationError)(error, {
            ...request,
            ...calls ? {
                calls
            } : {}
        });
    }
} //# sourceMappingURL=estimateUserOperationGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getSupportedEntryPoints.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSupportedEntryPoints = getSupportedEntryPoints;
function getSupportedEntryPoints(client) {
    return client.request({
        method: 'eth_supportedEntryPoints'
    });
} //# sourceMappingURL=getSupportedEntryPoints.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUserOperation = formatUserOperation;
function formatUserOperation(parameters) {
    const userOperation = {
        ...parameters
    };
    if (parameters.callGasLimit) userOperation.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.maxFeePerGas) userOperation.maxFeePerGas = BigInt(parameters.maxFeePerGas);
    if (parameters.maxPriorityFeePerGas) userOperation.maxPriorityFeePerGas = BigInt(parameters.maxPriorityFeePerGas);
    if (parameters.nonce) userOperation.nonce = BigInt(parameters.nonce);
    if (parameters.paymasterPostOpGasLimit) userOperation.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit) userOperation.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    if (parameters.preVerificationGas) userOperation.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit) userOperation.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    return userOperation;
} //# sourceMappingURL=userOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserOperation = getUserOperation;
const userOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
const userOperation_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperation.js [app-ssr] (ecmascript)");
async function getUserOperation(client, { hash }) {
    const result = await client.request({
        method: 'eth_getUserOperationByHash',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!result) throw new userOperation_js_1.UserOperationNotFoundError({
        hash
    });
    const { blockHash, blockNumber, entryPoint, transactionHash, userOperation } = result;
    return {
        blockHash,
        blockNumber: BigInt(blockNumber),
        entryPoint,
        transactionHash,
        userOperation: (0, userOperation_js_2.formatUserOperation)(userOperation)
    };
} //# sourceMappingURL=getUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUserOperationReceipt = formatUserOperationReceipt;
const log_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
function formatUserOperationReceipt(parameters) {
    const receipt = {
        ...parameters
    };
    if (parameters.actualGasCost) receipt.actualGasCost = BigInt(parameters.actualGasCost);
    if (parameters.actualGasUsed) receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
    if (parameters.logs) receipt.logs = parameters.logs.map((log)=>(0, log_js_1.formatLog)(log));
    if (parameters.receipt) receipt.receipt = (0, transactionReceipt_js_1.formatTransactionReceipt)(receipt.receipt);
    return receipt;
} //# sourceMappingURL=userOperationReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserOperationReceipt = getUserOperationReceipt;
const userOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
const userOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationReceipt.js [app-ssr] (ecmascript)");
async function getUserOperationReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getUserOperationReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new userOperation_js_1.UserOperationReceiptNotFoundError({
        hash
    });
    return (0, userOperationReceipt_js_1.formatUserOperationReceipt)(receipt);
} //# sourceMappingURL=getUserOperationReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendUserOperation = sendUserOperation;
const parseAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getUserOperationError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)");
const userOperationRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
const prepareUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
async function sendUserOperation(client, parameters) {
    const { account: account_ = client.account, entryPointAddress } = parameters;
    if (!account_ && !parameters.sender) throw new account_js_1.AccountNotFoundError();
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    const request = account ? await (0, getAction_js_1.getAction)(client, prepareUserOperation_js_1.prepareUserOperation, 'prepareUserOperation')(parameters) : parameters;
    const signature = parameters.signature || await account?.signUserOperation?.(request);
    const rpcParameters = (0, userOperationRequest_js_1.formatUserOperationRequest)({
        ...request,
        signature
    });
    try {
        return await client.request({
            method: 'eth_sendUserOperation',
            params: [
                rpcParameters,
                entryPointAddress ?? account?.entryPoint?.address
            ]
        }, {
            retryCount: 0
        });
    } catch (error) {
        const calls = parameters.calls;
        throw (0, getUserOperationError_js_1.getUserOperationError)(error, {
            ...request,
            ...calls ? {
                calls
            } : {},
            signature
        });
    }
} //# sourceMappingURL=sendUserOperation.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitForUserOperationReceipt = waitForUserOperationReceipt;
const getAction_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const userOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
const getUserOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)");
function waitForUserOperationReceipt(client, parameters) {
    const { hash, pollingInterval = client.pollingInterval, retryCount, timeout = 120_000 } = parameters;
    let count = 0;
    const observerId = (0, stringify_js_1.stringify)([
        'waitForUserOperationReceipt',
        client.uid,
        hash
    ]);
    return new Promise((resolve, reject)=>{
        const unobserve = (0, observe_js_1.observe)(observerId, {
            resolve,
            reject
        }, (emit)=>{
            const done = (fn)=>{
                unpoll();
                fn();
                unobserve();
            };
            const unpoll = (0, poll_js_1.poll)(async ()=>{
                if (retryCount && count >= retryCount) done(()=>emit.reject(new userOperation_js_1.WaitForUserOperationReceiptTimeoutError({
                        hash
                    })));
                try {
                    const receipt = await (0, getAction_js_1.getAction)(client, getUserOperationReceipt_js_1.getUserOperationReceipt, 'getUserOperationReceipt')({
                        hash
                    });
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    const error = err;
                    if (error.name !== 'UserOperationReceiptNotFoundError') done(()=>emit.reject(error));
                }
                count++;
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            if (timeout) setTimeout(()=>done(()=>emit.reject(new userOperation_js_1.WaitForUserOperationReceiptTimeoutError({
                        hash
                    }))), timeout);
            return unpoll;
        });
    });
} //# sourceMappingURL=waitForUserOperationReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bundlerActions = bundlerActions;
const getChainId_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const estimateUserOperationGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)");
const getSupportedEntryPoints_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getSupportedEntryPoints.js [app-ssr] (ecmascript)");
const getUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperation.js [app-ssr] (ecmascript)");
const getUserOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)");
const prepareUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
const sendUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
const waitForUserOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)");
function bundlerActions(client) {
    return {
        estimateUserOperationGas: (parameters)=>(0, estimateUserOperationGas_js_1.estimateUserOperationGas)(client, parameters),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getSupportedEntryPoints: ()=>(0, getSupportedEntryPoints_js_1.getSupportedEntryPoints)(client),
        getUserOperation: (parameters)=>(0, getUserOperation_js_1.getUserOperation)(client, parameters),
        getUserOperationReceipt: (parameters)=>(0, getUserOperationReceipt_js_1.getUserOperationReceipt)(client, parameters),
        prepareUserOperation: (parameters)=>(0, prepareUserOperation_js_1.prepareUserOperation)(client, parameters),
        sendUserOperation: (parameters)=>(0, sendUserOperation_js_1.sendUserOperation)(client, parameters),
        waitForUserOperationReceipt: (parameters)=>(0, waitForUserOperationReceipt_js_1.waitForUserOperationReceipt)(client, parameters)
    };
} //# sourceMappingURL=bundler.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/paymaster.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paymasterActions = paymasterActions;
const getPaymasterData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)");
const getPaymasterStubData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)");
function paymasterActions(client) {
    return {
        getPaymasterData: (parameters)=>(0, getPaymasterData_js_1.getPaymasterData)(client, parameters),
        getPaymasterStubData: (parameters)=>(0, getPaymasterStubData_js_1.getPaymasterStubData)(client, parameters)
    };
} //# sourceMappingURL=paymaster.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/createBundlerClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBundlerClient = createBundlerClient;
const createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
const bundler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)");
function createBundlerClient(parameters) {
    const { client: client_, key = 'bundler', name = 'Bundler Client', paymaster, paymasterContext, transport, userOperation } = parameters;
    const client = Object.assign((0, createClient_js_1.createClient)({
        ...parameters,
        chain: parameters.chain ?? client_?.chain,
        key,
        name,
        transport,
        type: 'bundlerClient'
    }), {
        client: client_,
        paymaster,
        paymasterContext,
        userOperation
    });
    return client.extend(bundler_js_1.bundlerActions);
} //# sourceMappingURL=createBundlerClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/createPaymasterClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPaymasterClient = createPaymasterClient;
const createClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
const paymaster_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/paymaster.js [app-ssr] (ecmascript)");
function createPaymasterClient(parameters) {
    const { key = 'bundler', name = 'Bundler Client', transport } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        transport,
        type: 'PaymasterClient'
    });
    return client.extend(paymaster_js_1.paymasterActions);
} //# sourceMappingURL=createPaymasterClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/address.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entryPoint08Address = exports.entryPoint07Address = exports.entryPoint06Address = void 0;
exports.entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
exports.entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
exports.entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108'; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownBundlerError = exports.VerificationGasLimitTooLowError = exports.VerificationGasLimitExceededError = exports.UserOperationSignatureError = exports.UserOperationPaymasterSignatureError = exports.UserOperationPaymasterExpiredError = exports.UserOperationExpiredError = exports.SmartAccountFunctionRevertedError = exports.SenderAlreadyConstructedError = exports.PaymasterPostOpFunctionRevertedError = exports.PaymasterNotDeployedError = exports.PaymasterFunctionRevertedError = exports.PaymasterDepositTooLowError = exports.InvalidPaymasterAndDataError = exports.InvalidBeneficiaryError = exports.InvalidAggregatorError = exports.InitCodeFailedError = exports.InternalCallOnlyError = exports.InsufficientPrefundError = exports.InitCodeMustReturnSenderError = exports.InitCodeMustCreateSenderError = exports.HandleOpsOutOfGasError = exports.GasValuesOverflowError = exports.FailedToSendToBeneficiaryError = exports.AccountNotDeployedError = exports.entryPoint08Address = exports.entryPoint07Address = exports.entryPoint06Address = exports.entryPoint08Abi = exports.entryPoint07Abi = exports.entryPoint06Abi = exports.createPaymasterClient = exports.createBundlerClient = exports.paymasterActions = exports.bundlerActions = exports.getPaymasterStubData = exports.getPaymasterData = exports.waitForUserOperationReceipt = exports.sendUserOperation = exports.prepareUserOperation = exports.getUserOperationReceipt = exports.getUserOperation = exports.getSupportedEntryPoints = exports.estimateUserOperationGas = exports.toWebAuthnAccount = exports.toSmartAccount = exports.toSimple7702SmartAccount = exports.toSoladySmartAccount = exports.toCoinbaseSmartAccount = exports.createWebAuthnCredential = void 0;
exports.toPackedUserOperation = exports.getUserOperationTypedData = exports.getUserOperationHash = exports.formatUserOperationRequest = exports.formatUserOperationReceipt = exports.formatUserOperationGas = exports.formatUserOperation = exports.getUserOperationError = exports.getBundlerError = exports.WaitForUserOperationReceiptTimeoutError = exports.UserOperationReceiptNotFoundError = exports.UserOperationNotFoundError = exports.UserOperationExecutionError = void 0;
var createWebAuthnCredential_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/createWebAuthnCredential.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createWebAuthnCredential", {
    enumerable: true,
    get: function() {
        return createWebAuthnCredential_js_1.createWebAuthnCredential;
    }
});
var toCoinbaseSmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toCoinbaseSmartAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toCoinbaseSmartAccount", {
    enumerable: true,
    get: function() {
        return toCoinbaseSmartAccount_js_1.toCoinbaseSmartAccount;
    }
});
var toSoladySmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toSoladySmartAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toSoladySmartAccount", {
    enumerable: true,
    get: function() {
        return toSoladySmartAccount_js_1.toSoladySmartAccount;
    }
});
var toSimple7702SmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/implementations/toSimple7702SmartAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toSimple7702SmartAccount", {
    enumerable: true,
    get: function() {
        return toSimple7702SmartAccount_js_1.toSimple7702SmartAccount;
    }
});
var toSmartAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toSmartAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toSmartAccount", {
    enumerable: true,
    get: function() {
        return toSmartAccount_js_1.toSmartAccount;
    }
});
var toWebAuthnAccount_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/accounts/toWebAuthnAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toWebAuthnAccount", {
    enumerable: true,
    get: function() {
        return toWebAuthnAccount_js_1.toWebAuthnAccount;
    }
});
var estimateUserOperationGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/estimateUserOperationGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "estimateUserOperationGas", {
    enumerable: true,
    get: function() {
        return estimateUserOperationGas_js_1.estimateUserOperationGas;
    }
});
var getSupportedEntryPoints_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getSupportedEntryPoints.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getSupportedEntryPoints", {
    enumerable: true,
    get: function() {
        return getSupportedEntryPoints_js_1.getSupportedEntryPoints;
    }
});
var getUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getUserOperation", {
    enumerable: true,
    get: function() {
        return getUserOperation_js_1.getUserOperation;
    }
});
var getUserOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/getUserOperationReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getUserOperationReceipt", {
    enumerable: true,
    get: function() {
        return getUserOperationReceipt_js_1.getUserOperationReceipt;
    }
});
var prepareUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/prepareUserOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "prepareUserOperation", {
    enumerable: true,
    get: function() {
        return prepareUserOperation_js_1.prepareUserOperation;
    }
});
var sendUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/sendUserOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sendUserOperation", {
    enumerable: true,
    get: function() {
        return sendUserOperation_js_1.sendUserOperation;
    }
});
var waitForUserOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/bundler/waitForUserOperationReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "waitForUserOperationReceipt", {
    enumerable: true,
    get: function() {
        return waitForUserOperationReceipt_js_1.waitForUserOperationReceipt;
    }
});
var getPaymasterData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getPaymasterData", {
    enumerable: true,
    get: function() {
        return getPaymasterData_js_1.getPaymasterData;
    }
});
var getPaymasterStubData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/actions/paymaster/getPaymasterStubData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getPaymasterStubData", {
    enumerable: true,
    get: function() {
        return getPaymasterStubData_js_1.getPaymasterStubData;
    }
});
var bundler_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/bundler.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "bundlerActions", {
    enumerable: true,
    get: function() {
        return bundler_js_1.bundlerActions;
    }
});
var paymaster_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/decorators/paymaster.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "paymasterActions", {
    enumerable: true,
    get: function() {
        return paymaster_js_1.paymasterActions;
    }
});
var createBundlerClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/createBundlerClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createBundlerClient", {
    enumerable: true,
    get: function() {
        return createBundlerClient_js_1.createBundlerClient;
    }
});
var createPaymasterClient_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/clients/createPaymasterClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createPaymasterClient", {
    enumerable: true,
    get: function() {
        return createPaymasterClient_js_1.createPaymasterClient;
    }
});
var abis_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/abis.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "entryPoint06Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.entryPoint06Abi;
    }
});
Object.defineProperty(exports, "entryPoint07Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.entryPoint07Abi;
    }
});
Object.defineProperty(exports, "entryPoint08Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.entryPoint08Abi;
    }
});
var address_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/constants/address.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "entryPoint06Address", {
    enumerable: true,
    get: function() {
        return address_js_1.entryPoint06Address;
    }
});
Object.defineProperty(exports, "entryPoint07Address", {
    enumerable: true,
    get: function() {
        return address_js_1.entryPoint07Address;
    }
});
Object.defineProperty(exports, "entryPoint08Address", {
    enumerable: true,
    get: function() {
        return address_js_1.entryPoint08Address;
    }
});
var bundler_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/bundler.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "AccountNotDeployedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.AccountNotDeployedError;
    }
});
Object.defineProperty(exports, "FailedToSendToBeneficiaryError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.FailedToSendToBeneficiaryError;
    }
});
Object.defineProperty(exports, "GasValuesOverflowError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.GasValuesOverflowError;
    }
});
Object.defineProperty(exports, "HandleOpsOutOfGasError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.HandleOpsOutOfGasError;
    }
});
Object.defineProperty(exports, "InitCodeMustCreateSenderError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InitCodeMustCreateSenderError;
    }
});
Object.defineProperty(exports, "InitCodeMustReturnSenderError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InitCodeMustReturnSenderError;
    }
});
Object.defineProperty(exports, "InsufficientPrefundError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InsufficientPrefundError;
    }
});
Object.defineProperty(exports, "InternalCallOnlyError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InternalCallOnlyError;
    }
});
Object.defineProperty(exports, "InitCodeFailedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InitCodeFailedError;
    }
});
Object.defineProperty(exports, "InvalidAggregatorError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InvalidAggregatorError;
    }
});
Object.defineProperty(exports, "InvalidBeneficiaryError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InvalidBeneficiaryError;
    }
});
Object.defineProperty(exports, "InvalidPaymasterAndDataError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.InvalidPaymasterAndDataError;
    }
});
Object.defineProperty(exports, "PaymasterDepositTooLowError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.PaymasterDepositTooLowError;
    }
});
Object.defineProperty(exports, "PaymasterFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.PaymasterFunctionRevertedError;
    }
});
Object.defineProperty(exports, "PaymasterNotDeployedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.PaymasterNotDeployedError;
    }
});
Object.defineProperty(exports, "PaymasterPostOpFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.PaymasterPostOpFunctionRevertedError;
    }
});
Object.defineProperty(exports, "SenderAlreadyConstructedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.SenderAlreadyConstructedError;
    }
});
Object.defineProperty(exports, "SmartAccountFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.SmartAccountFunctionRevertedError;
    }
});
Object.defineProperty(exports, "UserOperationExpiredError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.UserOperationExpiredError;
    }
});
Object.defineProperty(exports, "UserOperationPaymasterExpiredError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.UserOperationPaymasterExpiredError;
    }
});
Object.defineProperty(exports, "UserOperationPaymasterSignatureError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.UserOperationPaymasterSignatureError;
    }
});
Object.defineProperty(exports, "UserOperationSignatureError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.UserOperationSignatureError;
    }
});
Object.defineProperty(exports, "VerificationGasLimitExceededError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.VerificationGasLimitExceededError;
    }
});
Object.defineProperty(exports, "VerificationGasLimitTooLowError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.VerificationGasLimitTooLowError;
    }
});
Object.defineProperty(exports, "UnknownBundlerError", {
    enumerable: true,
    get: function() {
        return bundler_js_2.UnknownBundlerError;
    }
});
var userOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/errors/userOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "UserOperationExecutionError", {
    enumerable: true,
    get: function() {
        return userOperation_js_1.UserOperationExecutionError;
    }
});
Object.defineProperty(exports, "UserOperationNotFoundError", {
    enumerable: true,
    get: function() {
        return userOperation_js_1.UserOperationNotFoundError;
    }
});
Object.defineProperty(exports, "UserOperationReceiptNotFoundError", {
    enumerable: true,
    get: function() {
        return userOperation_js_1.UserOperationReceiptNotFoundError;
    }
});
Object.defineProperty(exports, "WaitForUserOperationReceiptTimeoutError", {
    enumerable: true,
    get: function() {
        return userOperation_js_1.WaitForUserOperationReceiptTimeoutError;
    }
});
var getBundlerError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getBundlerError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getBundlerError", {
    enumerable: true,
    get: function() {
        return getBundlerError_js_1.getBundlerError;
    }
});
var getUserOperationError_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/errors/getUserOperationError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getUserOperationError", {
    enumerable: true,
    get: function() {
        return getUserOperationError_js_1.getUserOperationError;
    }
});
var userOperation_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUserOperation", {
    enumerable: true,
    get: function() {
        return userOperation_js_2.formatUserOperation;
    }
});
var userOperationGas_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUserOperationGas", {
    enumerable: true,
    get: function() {
        return userOperationGas_js_1.formatUserOperationGas;
    }
});
var userOperationReceipt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUserOperationReceipt", {
    enumerable: true,
    get: function() {
        return userOperationReceipt_js_1.formatUserOperationReceipt;
    }
});
var userOperationRequest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/formatters/userOperationRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUserOperationRequest", {
    enumerable: true,
    get: function() {
        return userOperationRequest_js_1.formatUserOperationRequest;
    }
});
var getUserOperationHash_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationHash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getUserOperationHash", {
    enumerable: true,
    get: function() {
        return getUserOperationHash_js_1.getUserOperationHash;
    }
});
var getUserOperationTypedData_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/getUserOperationTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getUserOperationTypedData", {
    enumerable: true,
    get: function() {
        return getUserOperationTypedData_js_1.getUserOperationTypedData;
    }
});
var toPackedUserOperation_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/viem@2.31.2_typescript@5.8.3/node_modules/viem/_cjs/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toPackedUserOperation", {
    enumerable: true,
    get: function() {
        return toPackedUserOperation_js_1.toPackedUserOperation;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=0aa7d_viem__cjs_account-abstraction_b585e018._.js.map