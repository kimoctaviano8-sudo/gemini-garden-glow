import { Wheat, TreeDeciduous, Flower2 } from "lucide-react";
import FloatingLeaf from "@/components/FloatingLeaf";
import GrowingPlant from "@/components/GrowingPlant";
import MaintenanceCard from "@/components/MaintenanceCard";

const Index = () => {
  return (
    <div className="min-h-screen gradient-agriculture relative overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingLeaf className="top-20 left-4" size={20} delay="animation-delay-200" />
      <FloatingLeaf className="top-32 right-8" size={28} delay="animation-delay-600" direction="reverse" />
      <FloatingLeaf className="top-60 left-10" size={16} delay="animation-delay-400" />
      <FloatingLeaf className="bottom-40 right-6" size={22} delay="animation-delay-800" direction="reverse" />
      <FloatingLeaf className="bottom-60 left-6" size={18} delay="animation-delay-1000" />
      
      {/* Background decorative icons */}
      <div className="absolute top-16 right-4 opacity-10 animate-sway">
        <Wheat className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute bottom-32 left-2 opacity-10 animate-sway animation-delay-400">
        <TreeDeciduous className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute top-1/2 right-2 opacity-10 animate-float">
        <Flower2 className="w-12 h-12 text-accent" />
      </div>
      
      {/* Main content */}
      <main className="relative z-10 px-6 py-12 max-w-md mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-foreground leading-tight">
            Gemini
            <span className="block text-primary">Mobile App</span>
          </h1>
          
          <p className="text-muted-foreground text-sm">
            Smart farming solutions for modern agriculture
          </p>
        </header>
        
        {/* Growing plants decoration */}
        <div className="flex justify-center gap-6">
          <GrowingPlant delay="animation-delay-200" />
          <GrowingPlant delay="animation-delay-400" />
          <GrowingPlant delay="animation-delay-600" />
        </div>
        
        {/* Maintenance card */}
        <MaintenanceCard />
        
        {/* Footer */}
        <footer className="text-center space-y-3 pt-4 animate-fade-in-up animation-delay-800">
          <div className="flex items-center justify-center gap-1">
            <Flower2 className="w-4 h-4 text-accent animate-pulse-soft" />
            <span className="text-xs text-muted-foreground">
              Growing innovation
            </span>
            <Flower2 className="w-4 h-4 text-accent animate-pulse-soft animation-delay-400" />
          </div>
          
          <p className="text-xs text-muted-foreground/60">
            © 2024 Gemini Mobile App. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
