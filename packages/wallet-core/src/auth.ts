import { toWebAuthnKey, toPasskeyValidator } from "@zerodev/passkey-validator";
import { PasskeyValidatorContractVersion, WebAuthnMode } from "@zerodev/passkey-validator";
import { PASSKEY_SERVER_URL, ENTRY_POINT, KERNEL_VERSION, DEFAULT_PASSKEY_NAME } from "@beepboop/constants";

export interface AuthConfig {
  passkeyServerUrl: string;
  entryPoint: any;
  kernelVersion: any;
  validatorContractVersion?: PasskeyValidatorContractVersion;
}

export class PasskeyAuth {
  private config: AuthConfig;

  constructor(config?: Partial<AuthConfig>) {
    this.config = {
      passkeyServerUrl: PASSKEY_SERVER_URL,
      entryPoint: ENTRY_POINT,
      kernelVersion: KERNEL_VERSION,
      validatorContractVersion: PasskeyValidatorContractVersion.V0_0_2,
      ...config,
    };
  }

  async register(username: string) {
    console.log("Creating passkey for username:", username);
    
    // Create WebAuthn key for registration
    const webAuthnKey = await toWebAuthnKey({
      passkeyName: username,
      passkeyServerUrl: this.config.passkeyServerUrl,
      mode: WebAuthnMode.Register,
    });

    return webAuthnKey;
  }

  async login(passkeyName: string = DEFAULT_PASSKEY_NAME) {
    console.log("Attempting passkey login");
    
    // Create WebAuthn key for login
    const webAuthnKey = await toWebAuthnKey({
      passkeyName,
      passkeyServerUrl: this.config.passkeyServerUrl,
      mode: WebAuthnMode.Login,
    });

    return webAuthnKey;
  }

  async createValidator(publicClient: any, webAuthnKey: any) {
    return toPasskeyValidator(publicClient, {
      webAuthnKey,
      kernelVersion: this.config.kernelVersion,
      entryPoint: this.config.entryPoint,
      validatorContractVersion: this.config.validatorContractVersion!,
    });
  }
}