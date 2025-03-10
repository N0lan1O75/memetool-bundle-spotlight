
import { Shield, Zap, BarChart3, Code, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { ReviewsSection } from "@/components/pricing/ReviewsSection";

const features = [
  {
    title: "Bundle Creator",
    description: "Create and manage token bundles with our intuitive bundle creation tools.",
    icon: Code,
  },
  {
    title: "Rug Mechanism",
    description: "Implement sophisticated rug mechanisms with our secure and tested tools.",
    icon: Shield,
  },
  {
    title: "Performance Analytics",
    description: "Track and analyze your bundle performance with real-time data.",
    icon: BarChart3,
  },
  {
    title: "Quick Deployment",
    description: "Deploy your bundles and mechanisms instantly with our optimized system.",
    icon: Zap,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <HeroSection />
      
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Tools
            </h2>
            <p className="text-primary/80">
              Professional tools for bundle creation and rug implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden bg-background/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                fontSize: `${Math.random() * (2.2 - 1.2) + 1.2}rem`
              }}
            >
              <span className="text-2xl inline-block text-primary/20 animate-shamrock"
                    style={{ animationDelay: `${i * -0.7}s` }}>
                ☘️
              </span>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
              <Users className="w-5 h-5 text-primary/80" />
              <span>Trusted by hundreds of creators</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-primary/80">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ReviewsSection />
          </div>
        </div>
      </section>

      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
