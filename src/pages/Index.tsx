import { Rocket, Shield, Zap, BarChart3 } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Rug Detector",
    description: "Détectez les risques potentiels et protégez vos investissements avec notre analyse en temps réel.",
    icon: Shield,
  },
  {
    title: "Bundle Manager",
    description: "Gérez plusieurs tokens simultanément avec notre interface intuitive et performante.",
    icon: BarChart3,
  },
  {
    title: "Trading Rapide",
    description: "Exécutez vos trades instantanément avec notre système optimisé.",
    icon: Zap,
  },
  {
    title: "Lancement Automatisé",
    description: "Automatisez le lancement de vos tokens avec nos outils spécialisés.",
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
              Fonctionnalités Principales
            </h2>
            <p className="text-gray-400">
              Des outils puissants pour gérer vos memecoins efficacement
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