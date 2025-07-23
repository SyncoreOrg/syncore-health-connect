import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8 ">
              <img 
                src="/lovable-uploads/syncore-health-logo.svg" 
                alt="Syncore Health" 
                className={`h-8 w-auto transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
              />
            <nav className="hidden md:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/features')}
                className="text-sm hover:bg-accent"
              >
                Features
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm hover:bg-accent"
              >
                Contact
              </Button>
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