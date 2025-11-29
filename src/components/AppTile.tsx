import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface AppTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color?: string;
}

export function AppTile({ icon: Icon, title, description, link, color = "bg-primary" }: AppTileProps) {
  return (
    <Link to={link} className="block">
      <div className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 border-2 border-border hover:border-primary active:scale-95">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className={`p-5 rounded-2xl ${color} shadow-lg group-hover:shadow-xl transition-all duration-200`}>
            <Icon className="h-10 w-10 text-white" strokeWidth={2.5} />
          </div>
          
          <h3 className="text-lg font-extrabold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
