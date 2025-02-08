
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { CountdownTimer } from "./pricing/CountdownTimer";
import { PaymentQRCode } from "./pricing/PaymentQRCode";
import { EmailRegistrationForm } from "./pricing/EmailRegistrationForm";
import { PricingFeatures } from "./pricing/PricingFeatures";
import { PhantomWalletButton } from "./pricing/PhantomWalletButton";

export const PricingSection = () => {
  const { toast } = useToast();
  const solAddress = "494Lzck5PvzNMKYRReLPBhDCthjk91SCUCg6voDmH3sA";
  const originalPrice = 3;
  const discountedPrice = 2;
  const [isDiscountActive] = useState(true);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(solAddress);
      toast({
        title: "Address copied!",
        description: "The Solana address has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the address manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div id="pricing-section" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-secondary/20 animate-gradient-y"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400">
            Get access to all bundle and rug tools
          </p>
        </div>
        <Card className="max-w-md mx-auto p-8 bg-background/50 backdrop-blur-sm border border-gray-800 
          hover:border-primary/50 transition-all duration-500 transform hover:scale-105
          hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] hover:bg-gradient-to-br hover:from-background 
          hover:to-primary/5 group relative before:absolute before:inset-0 before:rounded-lg 
          before:border before:border-primary/0 before:transition-all hover:before:border-primary/50 
          before:duration-500 before:scale-[1.01] hover:before:scale-105 before:opacity-0 
          hover:before:opacity-100 before:pointer-events-none">
          {isDiscountActive && (
            <div className="mb-8 text-center">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 mb-4 
                shadow-lg backdrop-blur-sm transition-all duration-300 hover:from-primary/30 
                hover:to-secondary/30 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]">
                <p className="text-primary font-bold mb-4 text-xl bg-clip-text text-transparent 
                  bg-gradient-to-r from-primary to-secondary animate-pulse group-hover:animate-none
                  group-hover:from-primary group-hover:to-secondary/80">
                  🔥 Limited Time Offer! 🔥
                </p>
                <CountdownTimer formatTime={formatTime} />
              </div>
            </div>
          )}
          <div className="text-center mb-8">
            <div className="text-primary font-display text-4xl font-bold mb-2 flex items-center 
              justify-center gap-3 transition-transform duration-300 group-hover:scale-110">
              {isDiscountActive ? (
                <>
                  <span className="text-gray-400 line-through text-2xl">{originalPrice} SOL</span>
                  <span className="animate-bounce flex items-center gap-2">
                    {discountedPrice} 
                    <img 
                      src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                      alt="SOL" 
                      className="w-8 h-8 inline animate-spin-slow group-hover:animate-none 
                        transition-transform duration-300 group-hover:scale-125" 
                    />
                  </span>
                </>
              ) : (
                <span className="flex items-center gap-2">
                  {originalPrice}
                  <img 
                    src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                    alt="SOL" 
                    className="w-8 h-8 inline animate-spin-slow" 
                  />
                </span>
              )}
            </div>
            <div className="text-sm text-gray-400 transition-colors duration-300 
              group-hover:text-primary/80">
              Lifetime License
            </div>
          </div>
          
          <PricingFeatures />
          <div className="space-y-4">
            <EmailRegistrationForm />
            <PaymentQRCode address={solAddress} />
            <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg break-all text-sm 
              text-gray-300 hover:bg-gray-900/70 transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(94,234,212,0.2)] group-hover:border-primary/30 
              border border-transparent">
              {solAddress}
              <button
                onClick={copyToClipboard}
                className="ml-2 inline-flex items-center text-primary hover:text-primary/80 
                  transition-all duration-300 hover:scale-110"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <PhantomWalletButton 
              amount={isDiscountActive ? discountedPrice : originalPrice} 
              recipientAddress={solAddress}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
