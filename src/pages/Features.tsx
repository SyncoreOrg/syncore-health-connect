import { useEffect, useRef, useState } from "react";
import { Brain, FileText, Users, DollarSign, Shield, Sparkles, Mic, MessageSquare, Stethoscope, ClipboardList, AlertTriangle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const [visibleMinaFeatures, setVisibleMinaFeatures] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const minaFeatureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const minaFeatures = [
    {
      icon: Mic,
      title: "Multimodal Interaction",
      description: "Accepts voice commands, typed input, or point-and-click. Users interact however they prefer, and MINA responds instantly with full context awareness.",
      color: "syncore-blue"
    },
    {
      icon: Stethoscope,
      title: "Smart Clinical Reasoning",
      description: "Reads physician notes and automatically synthesizes patient history, medications, labs, and more. Suggests potential diagnoses, appropriate investigations, and referral pathways.",
      color: "syncore-purple"
    },
    {
      icon: AlertTriangle,
      title: "Medication Safety & Precision",
      description: "Proactively checks for drug interactions, allergies, duplications, and contraindications. Flags unsafe medications based on comorbidities, age, pregnancy, and renal function.",
      color: "syncore-pink"
    },
    {
      icon: ClipboardList,
      title: "Documentation Automation",
      description: "Auto-generates notes based on voice or typed input, including SOAP notes, consult letters, and discharge summaries. Fills out forms and updates fields automatically.",
      color: "syncore-blue"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Learns from user feedback, preferences, and corrections to improve suggestions over time. Continuously updates based on new medical knowledge and real-world outcomes.",
      color: "syncore-purple"
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Support",
      description: "Surfaces relevant medical guidelines and literature when needed. Integrates with the latest research to support evidence-based clinical decision making.",
      color: "syncore-pink"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Smarter chart review, powered by AI",
      description: "All information is easily accessible, no need to scroll through pages. Summaries are auto generated, and you can ask Syncore anything about the patient's history. This intelligent approach eliminates the time-consuming task of manually searching through lengthy medical records.",
      color: "syncore-blue",
      image: "/smarterchart.png"
    },
    {
      icon: FileText,
      title: "Documentation and Workflow",
      description: "Built-in AI Scribe & auto-documentation, removing the hassle of filling out paperwork. Talk to the software - use your voice to fill out forms and take notes. Save hours every day with intelligent automation that understands clinical context and medical terminology.",
      color: "syncore-purple",
      image: "/documentation.png"
    },
    {
      icon: Users,
      title: "Effortless Admin Management",
      description: "Add doctors, nurses, and technicians in seconds, no IT help needed. No training required: If you can use your email, you can use Syncore. Our intuitive interface ensures your entire team can be productive from day one without extensive onboarding.",
      color: "syncore-pink",
      image: "/admin.png"
    },
    {
      icon: DollarSign,
      title: "Simplified Billing, Full Visibility",
      description: "Track claims, payments, denials, and revenue in one clean dashboard. Syncore makes it easy to manage the full billing lifecycle without relying on external tools or messy spreadsheets. Real-time analytics help you optimize revenue and identify billing bottlenecks instantly.",
      color: "syncore-blue",
      image: "/billing.png"
    },
    {
      icon: Shield,
      title: "Smarter Decisions. Safer Prescriptions.",
      description: "Clinical Assistant: Instant clinical recommendations from symptoms, history, and notes. Gets smarter with every case. Prescription Safety: Flags interactions, duplications, and dosage issues in real time. Advanced algorithms continuously monitor patient safety and provide evidence-based guidance.",
      color: "syncore-purple",
      image: "/prescribing.png"
    }
  ];

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(prev => [...prev, index]);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-50px 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  useEffect(() => {
    const observers = minaFeatureRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleMinaFeatures(prev => [...prev, index]);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-50px 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-syncore-gradient">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase bg-syncore-gradient bg-clip-text text-transparent">
                  Core Features
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Powerful Features for{" "}
                <span className="bg-syncore-gradient bg-clip-text text-transparent">
                  Modern Healthcare
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how Syncore's advanced features transform healthcare workflows, 
                streamline operations, and enhance patient care through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* MINA Section */}
        <section className="py-20 bg-gradient-to-b from-syncore-gradient-subtle to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-syncore-gradient">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg font-semibold tracking-wider uppercase bg-syncore-gradient bg-clip-text text-transparent">
                  Meet MINA
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The{" "}
                <span className="bg-syncore-gradient bg-clip-text text-transparent">
                  Mind Inside
                </span>{" "}
                Syncore
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                MINA is Syncore's proprietary AI assistant, not just a helper, but a thinking partner. 
                Unlike traditional tools, MINA understands context and acts as the intelligent brain of the platform.
              </p>

              <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-8 border border-syncore-gradient/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why MINA Matters</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-syncore-blue rounded-full mt-2"></div>
                      <p className="text-muted-foreground"><strong>Reduces cognitive load</strong> — clinicians don't need to remember everything</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-syncore-purple rounded-full mt-2"></div>
                      <p className="text-muted-foreground"><strong>Frees up time</strong> — less clicking, less typing, less back-and-forth</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-syncore-pink rounded-full mt-2"></div>
                      <p className="text-muted-foreground"><strong>Improves safety</strong> — catches what humans might miss</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-syncore-blue rounded-full mt-2"></div>
                      <p className="text-muted-foreground"><strong>Elevates care</strong> — helps clinicians make better decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MINA Features Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {minaFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const isVisible = visibleMinaFeatures.includes(index);
                  
                  return (
                    <div
                      key={index}
                      ref={el => minaFeatureRefs.current[index] = el}
                      className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <Card className={`p-6 border-2 hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-xl group h-full`}>
                        <div className="space-y-4">
                          <div className={`inline-flex p-3 rounded-xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                            <Icon className={`w-6 h-6 text-${feature.color}`} />
                          </div>
                          
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Core Platform Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Beyond MINA, discover the comprehensive features that make Syncore the complete healthcare solution.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isVisible = visibleFeatures.includes(index);
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    ref={el => featureRefs.current[index] = el}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Card className={`p-8 lg:p-12 border-2 hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-2xl group ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex flex-col lg:flex gap-8 lg:gap-12`}>
                      {/* Icon and Content */}
                      <div className="flex-1 space-y-6">
                        <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                          <Icon className={`w-8 h-8 text-${feature.color}`} />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="flex-1 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className={`${
                              feature.title.includes('Smarter chart') 
                                ? 'w-fit h-fit' 
                                : 'w-full max-w-md h-64 lg:h-80'
                            } rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500 cursor-pointer`}>
                              <img 
                                src={feature.image} 
                                alt={`${feature.title} interface preview`}
                                className={`${
                                  feature.title.includes('Smarter chart')
                                    ? 'w-auto h-auto max-w-full max-h-96 object-contain'
                                    : 'w-full h-full object-contain bg-gray-50 dark:bg-gray-800'
                                } group-hover:scale-105 transition-transform duration-500`}
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl w-[95vw] h-[95vh] p-2">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <img 
                                src={feature.image} 
                                alt={`${feature.title} interface preview - Full Size`}
                                className="max-w-full max-h-full object-contain rounded-lg"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Transform Your{" "}
                <span className="bg-syncore-gradient bg-clip-text text-transparent">
                  Healthcare Workflow?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Join thousands of healthcare professionals who trust Syncore to streamline their operations.
              </p>
              
              <div className="flex justify-center">
                <Button size="lg" className="bg-syncore-gradient hover:opacity-90 text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;