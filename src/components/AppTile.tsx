import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface AppTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient?: string;
}

export function AppTile({ icon: Icon, title, description, link, gradient = "bg-gradient-hero" }: AppTileProps) {
  return (
    <Link to={link} className="block h-full">
      <div className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 active:scale-95 h-full border border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-2xl ${gradient} shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-base font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
