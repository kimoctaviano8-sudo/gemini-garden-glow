import { Sprout } from "lucide-react";

interface GrowingPlantProps {
  className?: string;
  delay?: string;
}

const GrowingPlant = ({ className = "", delay = "" }: GrowingPlantProps) => {
  return (
    <div className={`animate-grow ${delay} ${className}`}>
      <Sprout className="w-8 h-8 text-primary" />
    </div>
  );
};

export default GrowingPlant;
