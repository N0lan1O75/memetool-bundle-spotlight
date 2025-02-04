import { Shield, Zap, BarChart3, Code } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Tools
            </h2>
            <p className="text-gray-400">
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

      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;