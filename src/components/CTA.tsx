import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-syncore-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join healthcare providers worldwide who are delivering better care with Syncore Health.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="mb-6 opacity-90">See Syncore in action with a personalized demonstration</p>
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6 opacity-90">Speak with our team about your specific needs</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a 
                    href="mailto:syncoremedicaltechnologies@gmail.com"
                    className="hover:underline transition-all duration-200 cursor-pointer"
                  >
                    syncoremedicaltechnologies@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a 
                    href="tel:+14034618358"
                    className="hover:underline transition-all duration-200 cursor-pointer"
                  >
                    +1 (403) 461-8358
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm opacity-80">
            <span>✓ Canadian-built and supported</span>
            <span>✓ HIPAA & PIPEDA compliant</span>
            <span>✓ 24/7 customer support</span>
            <span>✓ No long-term contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;