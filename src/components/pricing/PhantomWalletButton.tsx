
import { useEffect, useState } from 'react';
import { Connection, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram } from '@solana/web3.js';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PhantomWalletButtonProps {
  amount: number;
  recipientAddress: string;
}

export const PhantomWalletButton = ({ amount, recipientAddress }: PhantomWalletButtonProps) => {
  const [phantom, setPhantom] = useState<any>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window.solana);
    }
  }, []);

  const connectWallet = async () => {
    try {
      await phantom?.connect();
      toast({
        title: "Wallet connected!",
        description: "Your Phantom wallet has been connected successfully.",
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Failed to connect to Phantom wallet.",
        variant: "destructive",
      });
    }
  };

  const handlePayment = async () => {
    if (!phantom?.isConnected) {
      await connectWallet();
      return;
    }

    setLoading(true);
    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const recipientKey = new PublicKey(recipientAddress);
      const amountInLamports = amount * LAMPORTS_PER_SOL;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: phantom.publicKey,
          toPubkey: recipientKey,
          lamports: amountInLamports,
        })
      );

      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = phantom.publicKey;

      const signedTransaction = await phantom.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(signature);

      toast({
        title: "Payment successful!",
        description: "Thank you for your purchase!",
      });
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!phantom) {
    return (
      <Button
        className="w-full bg-primary text-background hover:bg-primary/90"
        onClick={() => window.open("https://phantom.app/", "_blank")}
      >
        Install Phantom Wallet
      </Button>
    );
  }

  return (
    <Button
      className="w-full bg-primary text-background hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group"
      onClick={handlePayment}
      disabled={loading}
    >
      {loading ? (
        "Processing..."
      ) : (
        <>
          Pay with Phantom
          <img 
            src="https://cryptologos.cc/logos/solana-sol-logo.png" 
            alt="SOL" 
            className="w-6 h-6 ml-2 group-hover:animate-spin" 
          />
        </>
      )}
    </Button>
  );
};

