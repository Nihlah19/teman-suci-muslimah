import { Navigation } from "@/components/Navigation";
import { AppTile } from "@/components/AppTile";
import { Calculator, Droplets, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                TemanSuci
              </h1>
              <p className="text-base sm:text-lg text-white/95 max-w-xl mx-auto leading-relaxed font-medium">
                Pendamping ibadah muslimah untuk memahami haid dan istihadhah dengan mudah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Tools Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <AppTile
                icon={Calculator}
                title="Kalkulator Haid"
                description="Hitung durasi haid & istihadhah"
                link="/calculator"
                gradient="bg-gradient-hero"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <AppTile
                icon={Droplets}
                title="Cek Warna Darah"
                description="Identifikasi kategori darah"
                link="/color-checker"
                gradient="bg-gradient-accent"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <AppTile
                icon={BookOpen}
                title="Panduan Qadha"
                description="Ketahui shalat yang perlu diqadha"
                link="/qadha-guide"
                gradient="bg-gradient-purple"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <AppTile
                icon={GraduationCap}
                title="Edukasi Islam"
                description="Pelajari hukum haid lengkap"
                link="/education"
                gradient="bg-gradient-sunset"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
