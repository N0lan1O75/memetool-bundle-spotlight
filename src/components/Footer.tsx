import { Twitter, MessageCircle, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 MemeTools. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};