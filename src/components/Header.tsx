import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/8ba7cf05-5630-40ee-9b7f-877ddd8507c7.png" 
                alt="Syncore Health" 
                className={`h-8 w-auto transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button className="bg-syncore-gradient hover:opacity-90 text-white">
              Request Demo
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;