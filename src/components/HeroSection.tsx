import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Outils Avancés pour Memecoins
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Suite complète d'outils pour la gestion et l'analyse de vos tokens meme. 
            Maximisez vos opportunités avec nos solutions professionnelles.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
              Découvrir les outils <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Voir la démo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};