import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Globe, Users, Shield, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "Fast & Intuitive",
      description: "No weeks of training. Get started in a single afternoon with our clean, simple interface."
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Smart automation that highlights critical notes, flags overdue follow-ups, and reduces typing time."
    },
    {
      icon: Globe,
      title: "Works Anywhere",
      description: "From urban hospitals to rural clinics. Designed to run smoothly even with limited connectivity."
    },
    {
      icon: Users,
      title: "Built by Healthcare Teams",
      description: "Developed with input from real doctors, nurses, and administrators who understand clinical workflows."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with healthcare compliance built-in from the ground up."
    },
    {
      icon: Smartphone,
      title: "Modern Design",
      description: "Clean, accessible interface that works on any device without compromising functionality."
    }
  ];

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[currentFeatureIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Syncore?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most EHR systems are built for billing departments. We build for the people delivering care.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevFeature}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-syncore-gradient text-white hover:opacity-90 transition-opacity shadow-lg"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextFeature}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-syncore-gradient text-white hover:opacity-90 transition-opacity shadow-lg"
              aria-label="Next feature"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Feature Card */}
            <Card className="border-border shadow-2xl min-h-[400px] overflow-hidden">
              <div className="relative h-full">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentFeatureIndex * 100}%)` }}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-8 flex flex-col justify-center items-center text-center">
                      <CardHeader className="pb-6">
                        <div className="w-20 h-20 bg-syncore-gradient rounded-2xl flex items-center justify-center mb-6 mx-auto">
                          <feature.icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-3xl mb-4">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                          {feature.description}
                        </p>
                      </CardContent>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Feature Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeatureIndex 
                      ? 'bg-syncore-gradient scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;