import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/calculator", label: "Kalkulator" },
    { path: "/color-checker", label: "Cek Warna" },
    { path: "/qadha-guide", label: "Panduan Qadha" },
    { path: "/education", label: "Edukasi" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow">
              <span className="text-xl font-bold text-white">TS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TemanSuci
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
