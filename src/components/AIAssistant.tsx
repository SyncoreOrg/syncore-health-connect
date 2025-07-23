import { useEffect, useRef, useState } from "react";
import { Sparkles, Brain, Zap } from "lucide-react";

const AIAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-syncore-gradient">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wider uppercase bg-syncore-gradient bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Clinical Intelligence,{" "}
              <span className="bg-syncore-gradient bg-clip-text text-transparent">
                Redefined
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Introducing a groundbreaking innovation in Syncore's EHR system — our AI-Powered Clinical Assistant delivers real-time, patient-specific medical guidance directly within the platform. By analyzing individual medical histories, current medications, and treatment progress, it provides context-aware recommendations to support clinical decisions — such as safe prescribing of medications like clonazepam.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This intelligent assistant enhances accuracy, speeds up care delivery, and empowers providers with deeper insights — all without leaving the patient chart. It's not just EHR — it's clinical intelligence, redefined.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-syncore-blue/20">
                  <Sparkles className="w-5 h-5 text-syncore-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Real-time</div>
                  <div className="text-sm text-muted-foreground">Instant guidance</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-syncore-purple/20">
                  <Brain className="w-5 h-5 text-syncore-purple" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Contextual</div>
                  <div className="text-sm text-muted-foreground">Patient-specific</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-syncore-pink/20">
                  <Zap className="w-5 h-5 text-syncore-pink" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Integrated</div>
                  <div className="text-sm text-muted-foreground">In-chart assistance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-syncore-gradient opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-border">
                <img 
                  src="/lovable-uploads/89f07d4a-9096-4a83-89b6-79dde24df50b.png" 
                  alt="AI-Powered Clinical Assistant in Syncore EHR" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-syncore-gradient rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-syncore-blue rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;