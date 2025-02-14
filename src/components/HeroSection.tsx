
import { ArrowRight, Rocket, Coins, Package, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background with stars effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-secondary/20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rocket */}
        <div className="absolute right-[20%] top-[30%] animate-float transform rotate-45">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full relative">
            <div className="absolute bottom-0 w-full h-8 bg-orange-500 animate-flame" />
          </div>
        </div>

        {/* Memecoin */}
        <div className="absolute left-[15%] top-[20%] animate-spin-slow">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-background font-bold">
            M
          </div>
        </div>

        {/* Lock Icon */}
        <div className="absolute right-[40%] bottom-[20%] animate-bounce-slow">
          <Lock className="w-8 h-8 text-primary" />
        </div>

        {/* Crystal */}
        <div className="absolute left-[35%] bottom-[30%] animate-pulse">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary/50 to-secondary/50 rotate-45 transform" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="px-2 py-0.5 bg-primary/20 rounded-full text-sm">COMING SOON</div>
            <span>Join our community to get the best news</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
            POWER UP YOUR<br />MEME COINS<br />LAUNCHES
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unleash fast, seamless token launches with MemeTools - A multi-chain platform built for both developers and degens.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-background group hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              onClick={scrollToPricing}
            >
              Buy Now
              <Rocket className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
