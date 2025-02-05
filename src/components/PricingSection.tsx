
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
      // Set end time to 24 hours from when the component first mounts
      const endTime = now + (timeLeft.hours * 3600000 + timeLeft.minutes * 60000 + timeLeft.seconds * 1000);
      const difference = endTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Reset timer to initial values instead of stopping
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

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
        <Card className="max-w-md mx-auto p-8 bg-background/50 border border-gray-800">
          {isDiscountActive && (
            <div className="mb-8 text-center">
              <div className="bg-primary/10 rounded-lg p-4 mb-4 animate-pulse">
                <p className="text-primary font-bold mb-2 text-lg">🔥 Limited Time Offer! 🔥</p>
                <div className="flex justify-center gap-2 font-mono text-2xl">
                  <div className="bg-primary/20 rounded px-3 py-1">
                    <span className="text-primary animate-bounce">{formatTime(timeLeft.hours)}h</span>
                  </div>
                  <span className="text-primary">:</span>
                  <div className="bg-primary/20 rounded px-3 py-1">
                    <span className="text-primary animate-bounce">{formatTime(timeLeft.minutes)}m</span>
                  </div>
                  <span className="text-primary">:</span>
                  <div className="bg-primary/20 rounded px-3 py-1">
                    <span className="text-primary animate-bounce">{formatTime(timeLeft.seconds)}s</span>
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
                  <span className="animate-scale-in">{discountedPrice} SOL</span>
                </>
              ) : (
                <span>{originalPrice} SOL</span>
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
              <li key={feature} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white p-4 rounded-lg mb-4">
                <QRCodeSVG
                  value={`solana:${solAddress}`}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-400 mb-4">Scan to pay with Solana</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg break-all text-sm text-gray-300">
              {solAddress}
              <button
                onClick={copyToClipboard}
                className="ml-2 inline-flex items-center text-primary hover:text-primary/80"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <Button className="w-full bg-primary text-background hover:bg-primary/90">
              Get License
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
