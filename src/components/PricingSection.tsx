
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export const PricingSection = () => {
  const { toast } = useToast();
  const solAddress = "494Lzck5PvzNMKYRReLPBhDCthjk91SCUCg6voDmH3sA";
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const originalPrice = 3;
  const discountedPrice = 2;
  const [isDiscountActive, setIsDiscountActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = now + (timeLeft.hours * 3600000 + timeLeft.minutes * 60000 + timeLeft.seconds * 1000);
      const difference = endTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

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

  const formatTime = (value: number) => value.toString().padStart(2, '0');

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
        <Card className="max-w-md mx-auto p-8 bg-background/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-500">
          {isDiscountActive && (
            <div className="mb-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 mb-4 shadow-lg">
                <p className="text-primary font-bold mb-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  🔥 Limited Time Offer! 🔥
                </p>
                <div className="flex justify-center gap-4 font-mono text-3xl">
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl">
                    <span className="text-primary animate-pulse">{formatTime(timeLeft.hours)}</span>
                    <span className="text-sm text-primary/70">h</span>
                  </div>
                  <span className="text-primary self-center">:</span>
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl">
                    <span className="text-primary animate-pulse">{formatTime(timeLeft.minutes)}</span>
                    <span className="text-sm text-primary/70">m</span>
                  </div>
                  <span className="text-primary self-center">:</span>
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl">
                    <span className="text-primary animate-pulse">{formatTime(timeLeft.seconds)}</span>
                    <span className="text-sm text-primary/70">s</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="text-center mb-8">
            <div className="text-primary font-display text-4xl font-bold mb-2 flex items-center justify-center gap-3">
              {isDiscountActive ? (
                <>
                  <span className="text-gray-400 line-through text-2xl">{originalPrice} SOL</span>
                  <span className="animate-scale-in flex items-center gap-2">
                    {discountedPrice} 
                    <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="SOL" className="w-8 h-8 inline animate-spin-slow" />
                  </span>
                </>
              ) : (
                <span className="flex items-center gap-2">
                  {originalPrice}
                  <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="SOL" className="w-8 h-8 inline animate-spin-slow" />
                </span>
              )}
            </div>
            <div className="text-sm text-gray-400">Lifetime License</div>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              "Bundle Creation Tools",
              "Rug Mechanism Builder",
              "Analytics Dashboard",
              "Priority Support",
            ].map((feature) => (
              <li key={feature} className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300">
                <Check className="h-5 w-5 text-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white p-4 rounded-lg mb-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <QRCodeSVG
                  value={`solana:${solAddress}`}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                Scan to pay with 
                <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="w-5 h-5 inline" />
                Solana
              </p>
            </div>
            <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg break-all text-sm text-gray-300 hover:bg-gray-900/70 transition-colors duration-300">
              {solAddress}
              <button
                onClick={copyToClipboard}
                className="ml-2 inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <Button className="w-full bg-primary text-background hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Get License
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
