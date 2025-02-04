import { Rocket, Shield, Zap, BarChart3 } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Rug Detector",
    description: "Detect potential risks and protect your investments with our real-time analysis.",
    icon: Shield,
  },
  {
    title: "Bundle Manager",
    description: "Manage multiple tokens simultaneously with our intuitive and powerful interface.",
    icon: BarChart3,
  },
  {
    title: "Fast Trading",
    description: "Execute your trades instantly with our optimized system.",
    icon: Zap,
  },
  {
    title: "Automated Launch",
    description: "Automate your token launches with our specialized tools.",
    icon: Rocket,
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
              Main Features
            </h2>
            <p className="text-gray-400">
              Powerful tools to efficiently manage your memecoins
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