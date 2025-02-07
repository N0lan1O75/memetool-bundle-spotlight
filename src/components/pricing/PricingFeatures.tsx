
import { Check } from "lucide-react";

export const PricingFeatures = () => {
  const features = [
    "Bundle Creation Tools",
    "Rug Mechanism Builder",
    "Analytics Dashboard",
    "Priority Support",
    "24/7 Technical Assistance",
    "Regular Updates"
  ];

  return (
    <ul className="space-y-4 mb-8">
      {features.map((feature) => (
        <li key={feature} className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300">
          <Check className="h-5 w-5 text-primary mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  );
};
