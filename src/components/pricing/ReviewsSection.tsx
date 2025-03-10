
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
            className="bg-background/30 backdrop-blur-sm p-5 rounded-xl border border-primary/30
              hover:border-primary/50 transition-all duration-300 group
              hover:shadow-[0_10px_25px_-5px_rgba(46,204,113,0.3)]
              transform hover:translate-y-[-5px]"
          >
            <div className="flex items-start gap-4">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-primary/40 group-hover:border-primary/70
                  transition-all duration-300 shadow-lg"
              />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                  <h4 className="font-medium text-primary text-lg">{review.name}</h4>
                  <span className="text-xs text-primary/70 bg-primary/10 px-2 py-1 rounded-full">{review.role}</span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary/90 text-primary/90" 
                    />
                  ))}
                </div>
                <p className="text-sm text-primary/90 italic">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 
          transform hover:scale-105 transition-all duration-300">
          <p className="text-sm text-primary/90">
            Join our growing community of satisfied creators
          </p>
        </div>
      </div>
    </div>
  );
};
