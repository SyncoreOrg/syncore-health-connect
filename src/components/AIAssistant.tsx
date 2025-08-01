import { useEffect, useRef, useState } from "react";
import { Sparkles, Brain, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const AIAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isFeatureVisible, setIsFeatureVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const animatedWords = ["assistant", "partner", "intelligence", "brain", "companion"];
  const animatedFeatures = ["documentation", "decision support", "medication orders", "referrals", "lab results"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWordVisible(false); // Start fade out
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        setIsWordVisible(true); // Start fade in with new word
      }, 300); // Wait for fade out to complete
    }, 2500); // Increased interval to account for fade timing

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFeatureVisible(false); // Start fade out
      
      setTimeout(() => {
        setCurrentFeatureIndex((prev) => (prev + 1) % animatedFeatures.length);
        setIsFeatureVisible(true); // Start fade in with new feature
      }, 300); // Wait for fade out to complete
    }, 3000); // Different timing to avoid synchronization

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Text Content */}
          <div className={`text-center space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-syncore-gradient">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wider uppercase bg-syncore-gradient bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Meet{" "}
              <span className="bg-syncore-gradient bg-clip-text text-transparent">
                MINA
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-xl text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  MINA is Syncore's AI-powered clinical{" "}
                  <span 
                    className={`inline-block bg-syncore-gradient bg-clip-text text-transparent font-semibold transition-all duration-300 ease-in-out transform ${
                      isWordVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2'
                    }`}
                  >
                    {animatedWords[currentWordIndex]}
                  </span>
                  {" "}that transforms your EHR from a static database into a dynamic thinking partner.
                </p>
                <p>
                  Unlike traditional tools, MINA understands context and interacts fluidly with every part of your system, {" "}
                  <span 
                    className={`inline-block bg-syncore-gradient bg-clip-text text-transparent font-semibold transition-all duration-300 ease-in-out transform ${
                      isFeatureVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2'
                    }`}
                  >
                    {animatedFeatures[currentFeatureIndex]}
                  </span>
                  {" "}— all in real time.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="grid sm:grid-cols-3 gap-8 pt-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-syncore-blue/20">
                    <Sparkles className="w-6 h-6 text-syncore-blue" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Real-time</div>
                    <div className="text-sm text-muted-foreground">Instant guidance</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-syncore-purple/20">
                    <Brain className="w-6 h-6 text-syncore-purple" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Contextual</div>
                    <div className="text-sm text-muted-foreground">Patient-specific</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-syncore-pink/20">
                    <Zap className="w-6 h-6 text-syncore-pink" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Integrated</div>
                    <div className="text-sm text-muted-foreground">In-chart assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            <div className="relative group max-w-5xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-syncore-gradient opacity-20 blur-3xl rounded-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border cursor-pointer">
                    <img 
                      src="/lovable-uploads/89f07d4a-9096-4a83-89b6-79dde24df50b.png" 
                      alt="AI-Powered Clinical Assistant in Syncore EHR" 
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
                  <div className="relative w-full h-full">
                    <img 
                      src="/lovable-uploads/89f07d4a-9096-4a83-89b6-79dde24df50b.png" 
                      alt="AI-Powered Clinical Assistant in Syncore EHR - Full Size" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* View All Features Button */}
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => navigate('/features')}
                className="bg-syncore-gradient hover:opacity-90 text-white text-lg px-8 py-3"
              >
                View All Features →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;