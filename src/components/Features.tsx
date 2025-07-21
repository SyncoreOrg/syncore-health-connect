import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Globe, Users, Shield, Smartphone } from "lucide-react";

const Features = () => {
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-syncore-gradient rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;