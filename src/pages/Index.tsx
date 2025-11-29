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
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-5 animate-bounce-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              TemanSuci
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Pendamping Ibadah Muslimah 🌙
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Bantu memahami haid, istihadhah, dan kewajiban ibadah dengan mudah dan penuh kepercayaan
            </p>
            
            <Link to="/calculator">
              <Button size="lg" className="rounded-lg px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-200 bg-white text-primary hover:bg-white/95 border-2 border-white animate-pulse-glow">
                🚀 Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Tools Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-center mb-8 text-foreground">
            ⚡ Fitur Aplikasi
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <AppTile
              icon={Calculator}
              title="Kalkulator Haid"
              description="Hitung durasi haid & istihadhah"
              link="/calculator"
              color="bg-gradient-to-br from-orange-500 to-red-500"
            />
            
            <AppTile
              icon={Droplets}
              title="Cek Warna"
              description="Identifikasi warna darah"
              link="/color-checker"
              color="bg-gradient-to-br from-pink-500 to-rose-600"
            />
            
            <AppTile
              icon={BookOpen}
              title="Panduan Qadha"
              description="Info qadha shalat"
              link="/qadha-guide"
              color="bg-gradient-to-br from-purple-500 to-indigo-600"
            />
            
            <AppTile
              icon={GraduationCap}
              title="Edukasi Islam"
              description="Pelajari hukum haid & istihadhah"
              link="/education"
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
