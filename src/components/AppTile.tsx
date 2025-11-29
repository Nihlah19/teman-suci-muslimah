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
    <Link to={link} className="block">
      <div className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 active:scale-98">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-2xl ${gradient} shadow-soft group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-base font-bold text-card-foreground">
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
