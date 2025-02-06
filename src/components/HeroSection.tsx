import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary animate-fade-in mx-auto">
            🔥 Special Offer - 33% OFF
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Bundle Creation & Rug Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional suite of tools for creating bundles and implementing rug mechanisms.
            Build your token ecosystem with our advanced solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 animate-fade-in" onClick={scrollToPricing}>
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
            <div className="flex justify-center gap-8">
              {[
                { label: "Active Users", value: "10k+" },
                { label: "Bundles Created", value: "50k+" },
                { label: "Success Rate", value: "99%" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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