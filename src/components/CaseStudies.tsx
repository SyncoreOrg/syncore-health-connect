import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Trees, Globe } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: Building2,
      badge: "Urban Private Clinic",
      title: "Dr. Malik's Toronto Family Clinic",
      description: "A fast-growing family clinic that needed an EHR that didn't slow them down or require weeks of training.",
      result: "Fully onboarded in a single afternoon. Now sees more patients with less admin stress.",
      location: "Toronto, Canada"
    },
    {
      icon: Trees,
      badge: "Rural Community Health",
      title: "Northern Alberta Clinic",
      description: "Previously used paper records and spreadsheets with spotty internet access and stretched-thin staff.",
      result: "Went fully digital with no IT support needed. Works smoothly even with limited connectivity.",
      location: "Northern Alberta, Canada"
    },
    {
      icon: Globe,
      badge: "International NGO",
      title: "Regional Hospital Pilot",
      description: "Previous EHR adoption had been difficult due to complex interfaces and poor support.",
      result: "Within weeks, the clinic was fully digital with providers spending more time with patients.",
      location: "Mumbai, India"
    }
  ];

  return (
    <section className="py-20 bg-syncore-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Syncore is transforming healthcare delivery across different environments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-syncore-gradient rounded-lg flex items-center justify-center">
                    <caseStudy.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="secondary">{caseStudy.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{caseStudy.location}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{caseStudy.description}</p>
                <div className="border-l-4 border-syncore-blue pl-4">
                  <p className="font-medium text-foreground">{caseStudy.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;