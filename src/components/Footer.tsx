import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/8ba7cf05-5630-40ee-9b7f-877ddd8507c7.png" 
              alt="Syncore Health" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/70">
              Building the future of Electronic Health Records with AI-powered, intuitive software designed for healthcare teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">News</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>&copy; 2024 Syncore Health. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;