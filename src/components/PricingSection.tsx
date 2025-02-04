import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PricingSection = () => {
  return (
    <div className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-secondary/20 animate-gradient-y"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tarification Simple
          </h2>
          <p className="text-gray-400">
            Accédez à tous nos outils avec une licence unique
          </p>
        </div>
        <Card className="max-w-md mx-auto p-8 bg-background/50 border border-gray-800">
          <div className="text-center mb-8">
            <div className="text-primary font-display text-4xl font-bold mb-2">
              3 SOL
            </div>
            <div className="text-sm text-gray-400">Licence à vie</div>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              "Accès à tous les outils",
              "Mises à jour gratuites",
              "Support prioritaire",
              "Analyses en temps réel",
            ].map((feature) => (
              <li key={feature} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-primary text-background hover:bg-primary/90">
            Obtenir la licence
          </Button>
        </Card>
      </div>
    </div>
  );
};