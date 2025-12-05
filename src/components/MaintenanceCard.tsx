import { Settings, Wrench } from "lucide-react";

const MaintenanceCard = () => {
  return (
    <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50 animate-fade-in-up">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-primary rounded-full p-3 shadow-lg">
          <Settings className="w-6 h-6 text-primary-foreground animate-spin-slow" />
        </div>
      </div>
      
      <div className="mt-6 text-center space-y-4">
        <h2 className="text-xl font-bold text-foreground">
          Under Maintenance
        </h2>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          We're cultivating something amazing! Our team is working hard to bring you 
          an improved experience.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-secondary">
          <Wrench className="w-4 h-4" />
          <span className="text-sm font-semibold">Back soon</span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
