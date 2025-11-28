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
      <div className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
        <div className={cn(
          "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500",
          gradient || "bg-primary"
        )} />
        
        <div className="relative z-10">
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft">
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
