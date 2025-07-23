import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Electronic Health Records";
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-syncore-gradient-subtle">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 
              className={`text-4xl lg:text-6xl font-bold mb-6 text-foreground transition-transform duration-300 cursor-default ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="inline-block min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
              <span className="block bg-syncore-gradient bg-clip-text text-transparent">
                Built for Care
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Fast, intuitive, and AI-powered EHR systems that work anywhere. 
              Designed by healthcare teams for healthcare teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-syncore-gradient hover:opacity-90 text-white">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-syncore-blue rounded-full"></div>
                No training required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-syncore-purple rounded-full"></div>
                Works anywhere
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-syncore-pink rounded-full"></div>
                AI-powered
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <img 
              src="/lovable-uploads/syncore-health-logo.svg" 
              alt="Syncore Health Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;