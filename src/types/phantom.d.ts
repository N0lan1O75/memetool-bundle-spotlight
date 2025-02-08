
interface Window {
  solana?: {
    isPhantom?: boolean;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    isConnected: boolean;
    publicKey: any;
    signTransaction: (transaction: any) => Promise<any>;
  };
}
