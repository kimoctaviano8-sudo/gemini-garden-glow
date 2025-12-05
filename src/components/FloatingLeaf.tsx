import { Leaf } from "lucide-react";

interface FloatingLeafProps {
  className?: string;
  size?: number;
  delay?: string;
  direction?: "normal" | "reverse";
}

const FloatingLeaf = ({ 
  className = "", 
  size = 24, 
  delay = "",
  direction = "normal" 
}: FloatingLeafProps) => {
  return (
    <div 
      className={`absolute text-accent opacity-60 ${
        direction === "normal" ? "animate-float" : "animate-float-reverse"
      } ${delay} ${className}`}
    >
      <Leaf size={size} className="animate-sway" />
    </div>
  );
};

export default FloatingLeaf;
