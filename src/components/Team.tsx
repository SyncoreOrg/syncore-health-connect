import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Code, Users } from "lucide-react";

const Team = () => {
  const teamAspects = [
    {
      icon: Stethoscope,
      title: "Clinical Researchers",
      description: "Canadian healthcare researchers with experience across Parkinson's disease, mobility disorders, and autoimmune conditions."
    },
    {
      icon: Code,
      title: "Software Engineers", 
      description: "Years of experience building secure, scalable healthcare systems with a focus on usability and performance."
    },
    {
      icon: GraduationCap,
      title: "Student Contributors",
      description: "Talented students from top institutions, including Ivy League universities, bringing fresh perspectives and global awareness."
    },
    {
      icon: Users,
      title: "Local Consultants",
      description: "In-country experts providing critical insight into local clinic workflows, regulations, and specific care needs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Built by Healthcare Experts
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Syncore Health team brings together clinical researchers, software engineers, 
              and local consultants with a shared goal: to make Electronic Health Records smarter, 
              faster, and easier to use in every corner of the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {teamAspects.map((aspect, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-syncore-gradient rounded-lg flex items-center justify-center">
                      <aspect.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{aspect.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center p-8 bg-syncore-gradient-subtle rounded-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Together, this diverse and collaborative team helps Syncore build technology that is not only 
              powerful and intuitive, but also practical and adaptable to real-world care environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;