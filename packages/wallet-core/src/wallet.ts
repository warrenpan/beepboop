export interface WalletAccount {
  address: string;
  encodeCalls: (calls: any[]) => Promise<string>;
}

export interface WalletClient {
  sendUserOperation: (userOp: any) => Promise<string>;
  waitForUserOperationReceipt: (params: { hash: string }) => Promise<any>;
}

export interface WalletConfig {
  account?: WalletAccount;
  client?: WalletClient;
}

export class Wallet {
  private account?: WalletAccount;
  private client?: WalletClient;

  constructor(config: WalletConfig = {}) {
    this.account = config.account;
    this.client = config.client;
  }

  setAccount(account: WalletAccount) {
    this.account = account;
  }

  setClient(client: WalletClient) {
    this.client = client;
  }

  getAccount(): WalletAccount | undefined {
    return this.account;
  }

  getClient(): WalletClient | undefined {
    return this.client;
  }

  getAddress(): string | undefined {
    return this.account?.address;
  }

  isReady(): boolean {
    return !!(this.account && this.client);
  }

  async sendTransaction(callData: string): Promise<string> {
    if (!this.client) {
      throw new Error('Wallet client not initialized');
    }
    
    return this.client.sendUserOperation({ callData });
  }

  async waitForTransactionReceipt(hash: string) {
    if (!this.client) {
      throw new Error('Wallet client not initialized');
    }
    
    return this.client.waitForUserOperationReceipt({ hash });
  }
}