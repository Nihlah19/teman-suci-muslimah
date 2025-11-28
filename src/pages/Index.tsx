import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { Calculator, Droplets, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                TemanSuci
              </span>
              <br />
              <span className="text-foreground">
                Pendamping Ibadah Muslimah yang Modern dan Aman
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bantu memahami haid, istihadhah, dan kewajiban ibadah dengan mudah dan penuh kepercayaan
            </p>
            
            <Link to="/calculator">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300">
                Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Calculator}
              title="Kalkulator Masa Haid"
              description="Hitung dan tentukan apakah darah yang keluar termasuk haid atau istihadhah berdasarkan durasi"
              link="/calculator"
            />
            
            <FeatureCard
              icon={Droplets}
              title="Cek Warna Darah"
              description="Identifikasi kategori darah berdasarkan warna untuk membantu menentukan status ibadah"
              link="/color-checker"
            />
            
            <FeatureCard
              icon={BookOpen}
              title="Panduan Qadha Shalat"
              description="Ketahui shalat mana yang perlu diqadha berdasarkan waktu suci yang kamu alami"
              link="/qadha-guide"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-card p-12 text-center shadow-soft">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-card-foreground">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pelajari lebih dalam tentang hukum haid dan istihadhah dalam Islam
            </p>
            <Link to="/education">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Baca Panduan Lengkap
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
