import { ArrowRight, Rocket, Coins, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 animate-gradient-xy"></div>
      
      {/* Floating Memecoins Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src="https://cryptologos.cc/logos/solana-sol-logo.png"
            alt="Floating Coin"
            className={`absolute w-8 h-8 animate-bounce opacity-20 
              ${i % 2 === 0 ? 'animate-spin-slow' : 'animate-pulse'}
              ${i % 3 === 0 ? 'left-1/4' : i % 3 === 1 ? 'left-2/4' : 'left-3/4'}
              ${i % 2 === 0 ? 'top-1/4' : 'top-3/4'}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary animate-pulse">
            <Rocket className="w-4 h-4" />
            <span>🚀 Special Launch Offer - 33% OFF</span>
            <Rocket className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ultimate Bundle & Memecoin Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create viral memecoins and powerful token bundles with our advanced suite. 
            Join the next generation of crypto innovation! 🌟
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 animate-fade-in group" onClick={scrollToPricing}>
                Launch Your Token <Rocket className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Examples <Package className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center gap-8">
              {[
                { label: "Active Projects", value: "10k+", icon: <Coins className="w-6 h-6 text-primary" /> },
                { label: "Bundles Created", value: "50k+", icon: <Package className="w-6 h-6 text-primary" /> },
                { label: "Price Growth", value: "99%", icon: <TrendingUp className="w-6 h-6 text-primary" /> }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl filter blur-3xl"></div>
            <div className="relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <img 
                src="photo-1487058792275-0ad4aaf24ca7" 
                alt="Platform Preview" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};