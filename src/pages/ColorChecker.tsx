import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const ColorChecker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const colors = [
    {
      name: "Hitam",
      value: "black",
      color: "bg-gray-900",
      category: "haid",
      description: "Warna hitam pekat menandakan darah haid yang kuat",
    },
    {
      name: "Merah Gelap",
      value: "dark-red",
      color: "bg-red-900",
      category: "haid",
      description: "Warna merah gelap/kecoklatan cenderung darah haid",
    },
    {
      name: "Coklat Tua",
      value: "dark-brown",
      color: "bg-amber-900",
      category: "haid",
      description: "Warna coklat tua biasanya termasuk kategori haid",
    },
    {
      name: "Merah Terang",
      value: "bright-red",
      color: "bg-red-500",
      category: "istihadhah",
      description: "Warna merah terang/segar cenderung istihadhah",
    },
    {
      name: "Kekuningan",
      value: "yellow",
      color: "bg-yellow-600",
      category: "istihadhah",
      description: "Warna kuning/kekuningan termasuk kategori istihadhah",
    },
  ];

  const handleColorSelect = (colorData: typeof colors[0]) => {
    setSelectedColor(colorData.value);
    
    if (colorData.category === "haid") {
      setResult(
        `✓ Cenderung HAID\n\n${colorData.description}\n\nDarah dengan warna ini umumnya dikategorikan sebagai darah haid. Selama masa ini, kamu tidak wajib shalat dan puasa. Namun untuk kepastian, perhatikan juga durasi dan gejala lainnya.`
      );
    } else {
      setResult(
        `⚠ Cenderung ISTIHADHAH\n\n${colorData.description}\n\nDarah dengan warna ini umumnya dikategorikan sebagai istihadhah. Kamu tetap wajib shalat dan berwudhu setiap waktu shalat. Konsultasikan dengan ustadzah jika ragu.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <Droplets className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Cek Warna Darah
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih warna yang paling mendekati untuk membantu mengidentifikasi kategori
          </p>
        </div>

        <Card className="p-8 shadow-soft rounded-3xl bg-gradient-card mb-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Pilih Warna Darah</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((colorData) => (
              <button
                key={colorData.value}
                onClick={() => handleColorSelect(colorData)}
                className={cn(
                  "group relative flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300",
                  selectedColor === colorData.value
                    ? "border-primary shadow-glow scale-105"
                    : "border-border hover:border-primary/50 hover:shadow-soft"
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-full shadow-soft transition-transform duration-300 group-hover:scale-110",
                    colorData.color
                  )}
                />
                <span className="text-sm font-medium text-center">
                  {colorData.name}
                </span>
              </button>
            ))}
          </div>
        </Card>

        {result && (
          <Card className="p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hasil Identifikasi</h2>
            <div className="whitespace-pre-line text-lg leading-relaxed text-card-foreground">
              {result}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <strong>Catatan:</strong> Penentuan berdasarkan warna saja tidak cukup akurat. 
                Perhatikan juga durasi, gejala, dan konsultasikan dengan ustadzah atau ahli fiqih 
                untuk kepastian yang lebih baik.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ColorChecker;
