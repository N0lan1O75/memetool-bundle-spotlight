import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    const mouseXValue = (x / rect.width) * 100;
    const mouseYValue = (y / rect.height) * 100;
    
    setMouseX(mouseXValue);
    setMouseY(mouseYValue);
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMouseX(50);
    setMouseY(50);
  };

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
    <div id="pricing-section" className="py-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-secondary/20 animate-gradient-y"></div>
      {/* Trèfles décoratifs flottants */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fade-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${Math.random() * (2.5 - 1.5) + 1.5}rem`
            }}
          >
            <span className="text-2xl inline-block text-primary/30 animate-float"
                  style={{ animationDelay: `${i * -0.5}s` }}>
              ☘️
            </span>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-primary/80 text-sm">
            Get access to all bundle and rug tools
          </p>
        </div>
        <div className="max-w-md mx-auto perspective-1000">
          <Card 
            className="p-4 bg-background/50 backdrop-blur-sm border-2 border-primary/30
              transition-all duration-700 ease-out transform hover:scale-105
              hover:shadow-[0_0_50px_rgba(46,204,113,0.2)] 
              hover:bg-gradient-to-br hover:from-background hover:via-primary/5 hover:to-secondary/5
              group relative before:absolute before:inset-0 before:rounded-lg 
              before:border-2 before:border-primary/0 before:transition-all 
              before:duration-700 before:ease-out hover:before:border-primary/50 
              before:scale-[1.02] hover:before:scale-110 before:opacity-0 
              hover:before:opacity-100 before:pointer-events-none will-change-transform
              hover:border-primary/50 hover:rotate-[1deg]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundImage: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(46,204,113,0.15) 0%, rgba(56,178,172,0.15) 50%, rgba(0,0,0,0) 100%)`,
            }}
          >
            {isDiscountActive && (
              <div className="mb-4 text-center">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3 mb-3
                  shadow-lg backdrop-blur-sm transition-all duration-500 hover:from-primary/30 
                  hover:to-secondary/30 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]
                  hover:scale-[1.02] transform">
                  <p className="text-primary font-bold mb-2 text-base bg-clip-text text-transparent 
                    bg-gradient-to-r from-primary to-secondary animate-pulse group-hover:animate-none
                    group-hover:from-primary group-hover:to-secondary/80">
                    🔥 Limited Time Offer! 🔥
                  </p>
                  <CountdownTimer formatTime={formatTime} />
                </div>
              </div>
            )}
            <div className="text-center mb-4">
              <div className="text-primary font-display text-3xl font-bold mb-2 flex items-center 
                justify-center gap-2 transition-transform duration-500 group-hover:scale-110">
                {isDiscountActive ? (
                  <>
                    <span className="text-gray-400 line-through text-xl">{originalPrice} SOL</span>
                    <span className="animate-bounce flex items-center gap-2">
                      {discountedPrice} 
                      <img 
                        src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                        alt="SOL" 
                        className="w-6 h-6 inline animate-spin-slow group-hover:animate-none 
                          transition-transform duration-500 group-hover:scale-125" 
                      />
                    </span>
                  </>
                ) : (
                  <span className="flex items-center gap-2">
                    {originalPrice}
                    <img 
                      src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                      alt="SOL" 
                      className="w-6 h-6 inline animate-spin-slow" 
                    />
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-400 transition-colors duration-300 
                group-hover:text-primary/80">
                Lifetime License
              </div>
            </div>
            
            <PricingFeatures />
            <div className="space-y-2">
              <EmailRegistrationForm />
              <PaymentQRCode address={solAddress} />
              <div className="p-2 bg-gray-900/50 backdrop-blur-sm rounded-lg break-all text-xs 
                text-gray-300 hover:bg-gray-900/70 transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(94,234,212,0.2)] group-hover:border-primary/30 
                border border-transparent hover:scale-[1.02] transform">
                {solAddress}
                <button
                  onClick={copyToClipboard}
                  className="ml-2 inline-flex items-center text-primary hover:text-primary/80 
                    transition-all duration-300 hover:scale-110"
                >
                  <Copy className="h-3 w-3" />
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
    </div>
  );
};
