
import { Package, TrendingUp, Rocket, PaintBucket, Map, Bot, BarChart } from "lucide-react";

export const PricingFeatures = () => {
  const features = [
    {
      name: "Bundler Bot",
      description: "Create and manage token bundles easily",
      icon: Package,
      available: true
    },
    {
      name: "Volume Bot",
      description: "Track and optimize trading volumes",
      icon: TrendingUp,
      available: true
    },
    {
      name: "BumpIt Bot",
      description: "Automated token promotion system",
      icon: Rocket,
      available: true
    },
    {
      name: "Painter Bot",
      description: "Customize and style your tokens",
      icon: PaintBucket,
      available: true
    },
    {
      name: "Anti Bubble Map Detection",
      description: "Advanced market analysis tools",
      icon: Map,
      available: true
    },
    {
      name: "Comment Bot",
      description: "Automated community engagement",
      icon: Bot,
      available: true
    },
    {
      name: "Live In-App Charts",
      description: "Real-time performance tracking",
      icon: BarChart,
      available: false,
      comingSoon: true
    }
  ];

  return (
    <div className="space-y-4 mb-8">
      <div className="mb-6">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-2">
          <span className="text-sm font-medium">Lifetime Access</span>
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li 
            key={feature.name} 
            className={`flex items-center p-3 rounded-lg transition-colors duration-300
              ${feature.available ? 'hover:bg-primary/5' : 'opacity-80'}`}
          >
            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-200">{feature.name}</h3>
                {feature.comingSoon && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
