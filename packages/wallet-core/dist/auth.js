"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasskeyAuth = void 0;
const passkey_validator_1 = require("@zerodev/passkey-validator");
const passkey_validator_2 = require("@zerodev/passkey-validator");
const constants_1 = require("@beepboop/constants");
class PasskeyAuth {
    constructor(config) {
        this.config = {
            passkeyServerUrl: constants_1.PASSKEY_SERVER_URL,
            entryPoint: constants_1.ENTRY_POINT,
            kernelVersion: constants_1.KERNEL_VERSION,
            validatorContractVersion: passkey_validator_2.PasskeyValidatorContractVersion.V0_0_2,
            ...config,
        };
    }
    async register(username) {
        console.log("Creating passkey for username:", username);
        // Create WebAuthn key for registration
        const webAuthnKey = await (0, passkey_validator_1.toWebAuthnKey)({
            passkeyName: username,
            passkeyServerUrl: this.config.passkeyServerUrl,
            mode: passkey_validator_2.WebAuthnMode.Register,
        });
        return webAuthnKey;
    }
    async login(passkeyName = constants_1.DEFAULT_PASSKEY_NAME) {
        console.log("Attempting passkey login");
        // Create WebAuthn key for login
        const webAuthnKey = await (0, passkey_validator_1.toWebAuthnKey)({
            passkeyName,
            passkeyServerUrl: this.config.passkeyServerUrl,
            mode: passkey_validator_2.WebAuthnMode.Login,
        });
        return webAuthnKey;
    }
    async createValidator(publicClient, webAuthnKey) {
        return (0, passkey_validator_1.toPasskeyValidator)(publicClient, {
            webAuthnKey,
            kernelVersion: this.config.kernelVersion,
            entryPoint: this.config.entryPoint,
            validatorContractVersion: this.config.validatorContractVersion,
        });
    }
}
exports.PasskeyAuth = PasskeyAuth;
