
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("L'email n'est pas valide"),
});

export const PricingSection = () => {
  const { toast } = useToast();
  const solAddress = "494Lzck5PvzNMKYRReLPBhDCthjk91SCUCg6voDmH3sA";
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const originalPrice = 3;
  const discountedPrice = 2;
  const [isDiscountActive, setIsDiscountActive] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Email enregistré!",
      description: "Vous recevrez bientôt les détails de votre licence.",
    });
    console.log(values);
  };

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        endTime.setHours(endTime.getHours() + 24);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(solAddress);
      toast({
        title: "Adresse copiée!",
        description: "L'adresse Solana a été copiée dans votre presse-papiers.",
      });
    } catch (err) {
      toast({
        title: "Échec de la copie",
        description: "Veuillez essayer de copier l'adresse manuellement.",
        variant: "destructive",
      });
    }
  };

  return (
    <div id="pricing-section" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-secondary/20 animate-gradient-y"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400">
            Get access to all bundle and rug tools
          </p>
        </div>
        <Card className="max-w-md mx-auto p-8 bg-background/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-500 transform hover:scale-105">
          {isDiscountActive && (
            <div className="mb-8 text-center">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 mb-4 shadow-lg backdrop-blur-sm">
                <p className="text-primary font-bold mb-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
                  🔥 Limited Time Offer! 🔥
                </p>
                <div className="flex justify-center gap-4 font-mono text-3xl">
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <span className="text-primary">{formatTime(timeLeft.hours)}</span>
                    <span className="text-sm text-primary/70">h</span>
                  </div>
                  <span className="text-primary self-center animate-pulse">:</span>
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <span className="text-primary">{formatTime(timeLeft.minutes)}</span>
                    <span className="text-sm text-primary/70">m</span>
                  </div>
                  <span className="text-primary self-center animate-pulse">:</span>
                  <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <span className="text-primary">{formatTime(timeLeft.seconds)}</span>
                    <span className="text-sm text-primary/70">s</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="text-center mb-8">
            <div className="text-primary font-display text-4xl font-bold mb-2 flex items-center justify-center gap-3">
              {isDiscountActive ? (
                <>
                  <span className="text-gray-400 line-through text-2xl">{originalPrice} SOL</span>
                  <span className="animate-bounce flex items-center gap-2">
                    {discountedPrice} 
                    <img 
                      src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                      alt="SOL" 
                      className="w-8 h-8 inline animate-spin-slow" 
                    />
                  </span>
                </>
              ) : (
                <span className="flex items-center gap-2">
                  {originalPrice}
                  <img 
                    src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                    alt="SOL" 
                    className="w-8 h-8 inline animate-spin-slow" 
                  />
                </span>
              )}
            </div>
            <div className="text-sm text-gray-400">Lifetime License</div>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              "Bundle Creation Tools",
              "Rug Mechanism Builder",
              "Analytics Dashboard",
              "Priority Support",
              "24/7 Technical Assistance",
              "Regular Updates"
            ].map((feature) => (
              <li key={feature} className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300">
                <Check className="h-5 w-5 text-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Entrez votre email"
                          className="bg-background/80 border-primary/30 placeholder:text-gray-500 text-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-background hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Enregistrer mon email
                </Button>
              </form>
            </Form>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white p-4 rounded-lg mb-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <QRCodeSVG
                  value={`solana:${solAddress}`}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                Scan to pay with 
                <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="w-5 h-5 inline" />
                Solana
              </p>
            </div>
            <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg break-all text-sm text-gray-300 hover:bg-gray-900/70 transition-colors duration-300">
              {solAddress}
              <button
                onClick={copyToClipboard}
                className="ml-2 inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <Button className="w-full bg-primary text-background hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group">
              Get License
              <img 
                src="https://cryptologos.cc/logos/solana-sol-logo.png" 
                alt="SOL" 
                className="w-6 h-6 ml-2 group-hover:animate-spin" 
              />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
