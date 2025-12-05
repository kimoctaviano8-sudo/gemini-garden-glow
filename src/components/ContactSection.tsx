import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="space-y-4 animate-fade-in-up animation-delay-600">
      <h3 className="text-center text-sm font-semibold text-foreground">
        Need Help?
      </h3>
      
      <div className="grid gap-3">
        <a 
          href="mailto:support@geminiapp.com" 
          className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-xl p-3 border border-border/30 hover:bg-card/80 transition-colors"
        >
          <div className="bg-primary/10 rounded-lg p-2">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">support@geminiapp.com</span>
        </a>
        
        <a 
          href="tel:+1234567890" 
          className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-xl p-3 border border-border/30 hover:bg-card/80 transition-colors"
        >
          <div className="bg-secondary/20 rounded-lg p-2">
            <Phone className="w-4 h-4 text-secondary" />
          </div>
          <span className="text-sm text-muted-foreground">+1 (234) 567-890</span>
        </a>
        
        <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-xl p-3 border border-border/30">
          <div className="bg-accent/20 rounded-lg p-2">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <span className="text-sm text-muted-foreground">Agricultural Valley, CA</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
