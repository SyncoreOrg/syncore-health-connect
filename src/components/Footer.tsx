import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-background/70">
              Building the future of Electronic Health Records with AI-powered, intuitive software designed for healthcare teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><button onClick={() => navigate('/features')} className="hover:text-background transition-colors text-left">Features</button></li>
              <li><button onClick={() => {}} className="hover:text-background transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => {}} className="hover:text-background transition-colors text-left">Security</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><button onClick={() => {}} className="hover:text-background transition-colors text-left">About Us</button></li>
              <li><button onClick={scrollToContact} className="hover:text-background transition-colors text-left">Contact</button></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>&copy; 2025 Syncore Medical Technologies Inc.  All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => {}} className="hover:text-background transition-colors">Privacy Policy</button>
            <button onClick={() => {}} className="hover:text-background transition-colors">Terms of Service</button>
            <button onClick={() => {}} className="hover:text-background transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;