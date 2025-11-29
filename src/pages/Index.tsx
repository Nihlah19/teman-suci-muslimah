import { Navigation } from "@/components/Navigation";
import { AppTile } from "@/components/AppTile";
import { Calculator, Droplets, BookOpen } from "lucide-react";
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AppTile
              icon={Calculator}
              title="Kalkulator Haid"
              description="Hitung durasi haid"
              link="/calculator"
              color="bg-gradient-hero"
            />
            
            <AppTile
              icon={Droplets}
              title="Cek Warna"
              description="Identifikasi warna darah"
              link="/color-checker"
              color="bg-gradient-hero"
            />
            
            <AppTile
              icon={BookOpen}
              title="Panduan Qadha"
              description="Info qadha shalat"
              link="/qadha-guide"
              color="bg-gradient-hero"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-lg bg-gradient-hero p-10 text-center shadow-xl border-2 border-primary/20">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
              📚 Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-base text-white/90 mb-6 font-medium">
              Pelajari lebih dalam tentang hukum haid dan istihadhah dalam Islam
            </p>
            <Link to="/education">
              <Button variant="secondary" size="lg" className="rounded-lg px-10 py-6 text-lg font-bold border-2 border-white bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg">
                Baca Panduan Lengkap →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
