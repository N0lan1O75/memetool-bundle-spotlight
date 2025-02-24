
import { Star } from "lucide-react";

interface Review {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Alex Thompson",
    role: "Crypto Trader",
    content: "This bundle creation tool is a game-changer! Made my first successful bundle in minutes. Worth every SOL!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "Sarah Chen",
    role: "DeFi Developer",
    content: "The analytics tools are incredibly powerful. Great investment for any serious crypto developer.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Mike Roberts",
    role: "NFT Creator",
    content: "Amazing support and perfect for launching bundles. I've been using it for months now!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
];

export const ReviewsSection = () => {
  return (
    <div className="mt-8 space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-primary/90 mb-2">Trusted by Creators</h3>
        <div className="flex items-center justify-center gap-1">
          <Star className="w-5 h-5 fill-primary text-primary" />
          <Star className="w-5 h-5 fill-primary text-primary" />
          <Star className="w-5 h-5 fill-primary text-primary" />
          <Star className="w-5 h-5 fill-primary text-primary" />
          <Star className="w-5 h-5 fill-primary text-primary" />
          <span className="ml-2 text-primary/90">(150+ reviews)</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-primary/20
              hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-primary/30 group-hover:border-primary/60
                  transition-all duration-300"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-primary">{review.name}</h4>
                  <span className="text-xs text-primary/60">• {review.role}</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary/80 text-primary/80" 
                    />
                  ))}
                </div>
                <p className="text-sm text-primary/80">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-primary/70">
          Join our growing community of satisfied creators
        </p>
      </div>
    </div>
  );
};
