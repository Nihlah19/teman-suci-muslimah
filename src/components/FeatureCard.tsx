import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient?: string;
}

export function FeatureCard({ icon: Icon, title, description, link, gradient }: FeatureCardProps) {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border hover:border-primary">
        <div className={cn(
          "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-primary"
        )} />
        
        <div className="relative z-10">
          <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-hero shadow-md">
            <Icon className="h-7 w-7 text-white" />
          </div>
          
          <h3 className="text-xl font-extrabold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
