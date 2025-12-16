import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Clock } from "lucide-react";
import { toast } from "sonner";

const QadhaGuide = () => {
  const [purificationTime, setPurificationTime] = useState("");
  const [result, setResult] = useState<string[] | null>(null);

  const calculateQadha = () => {
    if (!purificationTime) {
      toast.error("Mohon isi waktu suci");
      return;
    }

    const [hours, minutes] = purificationTime.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes;

    // Waktu shalat (perkiraan umum)
    const subuhStart = 4 * 60 + 30;   // 04:30
    const subuhEnd = 6 * 60;          // 06:00
    const dhuhurStart = 12 * 60;      // 12:00
    const dhuhurEnd = 15 * 60;        // 15:00
    const asarStart = 15 * 60;        // 15:00
    const asarEnd = 18 * 60;          // 18:00
    const maghribStart = 18 * 60;     // 18:00
    const maghribEnd = 19 * 60 + 15;  // 19:15
    const isyaStart = 19 * 60 + 15;   // 19:15

    if (timeInMinutes >= subuhStart && timeInMinutes < subuhEnd) {
      // Suci waktu Subuh
      setResult([
        "✓ Waktu Suci: Waktu Subuh",
        "",
        "Shalat yang wajib:",
        "• Subuh",
        "",
        "Tidak wajib qadha shalat Isya.",
        "",
        "Karena kamu suci di waktu Subuh, maka wajib shalat Subuh. Tidak perlu qadha shalat Isya karena waktu Isya sudah lewat sebelum suci."
      ]);
    } else if (timeInMinutes >= dhuhurStart && timeInMinutes < dhuhurEnd) {
      // Suci waktu Dhuhur
      setResult([
        "✓ Waktu Suci: Waktu Dhuhur",
        "",
        "Shalat yang wajib:",
        "• Dhuhur",
        "",
        "Tidak wajib qadha shalat Subuh (jika darah haid masih keluar).",
        "",
        "Karena kamu suci di waktu Dhuhur, maka wajib shalat Dhuhur. Tidak perlu qadha shalat Subuh karena saat Subuh masih dalam kondisi haid."
      ]);
    } else if (timeInMinutes >= asarStart && timeInMinutes < asarEnd) {
      // Suci waktu Asar
      setResult([
        "✓ Waktu Suci: Waktu Asar",
        "",
        "Shalat yang wajib:",
        "• Asar",
        "• Qadha Dhuhur",
        "",
        "📌 Catatan: Shalat Asar bisa dijamak dengan Dhuhur.",
        "",
        "Karena kamu suci di waktu Asar, maka wajib shalat Asar dan qadha shalat Dhuhur. Boleh dijamak ta'khir (Dhuhur + Asar di waktu Asar)."
      ]);
    } else if (timeInMinutes >= maghribStart && timeInMinutes < maghribEnd) {
      // Suci waktu Maghrib
      setResult([
        "✓ Waktu Suci: Waktu Maghrib",
        "",
        "Shalat yang wajib:",
        "• Maghrib",
        "",
        "Tidak wajib qadha shalat Asar.",
        "",
        "📌 Catatan: Shalat Maghrib TIDAK bisa dijamak dengan shalat Asar.",
        "",
        "Karena kamu suci di waktu Maghrib, maka wajib shalat Maghrib saja. Tidak perlu qadha shalat Asar karena Maghrib tidak bisa dijamak dengan Asar."
      ]);
    } else if (timeInMinutes >= isyaStart || timeInMinutes < subuhStart) {
      // Suci waktu Isya (termasuk malam sampai sebelum Subuh)
      setResult([
        "✓ Waktu Suci: Waktu Isya",
        "",
        "Shalat yang wajib:",
        "• Isya",
        "• Qadha Maghrib",
        "",
        "📌 Catatan: Boleh dijamak Isya dengan Maghrib.",
        "",
        "Karena kamu suci di waktu Isya, maka wajib shalat Isya dan qadha shalat Maghrib. Boleh dijamak ta'khir (Maghrib + Isya di waktu Isya)."
      ]);
    } else {
      setResult([
        "ℹ Waktu Tidak Teridentifikasi",
        "",
        "Silakan masukkan waktu yang valid untuk mengetahui shalat yang perlu dilakukan."
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <Clock className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Panduan Qadha Shalat
          </h1>
          <p className="text-lg text-muted-foreground">
            Ketahui shalat mana yang perlu diqadha berdasarkan waktu suci
          </p>
        </div>

        <Card className="p-8 shadow-soft rounded-3xl bg-gradient-card">
          <div className="space-y-6">
            <div>
              <Label htmlFor="purificationTime" className="text-base font-medium mb-2 block">
                Waktu Suci (Selesai Mandi Junub)
              </Label>
              <Input
                id="purificationTime"
                type="time"
                value={purificationTime}
                onChange={(e) => setPurificationTime(e.target.value)}
                className="rounded-xl border-2 h-12 text-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Masukkan waktu ketika kamu selesai mandi dan dinyatakan suci
              </p>
            </div>

            <Button
              onClick={calculateQadha}
              className="w-full rounded-xl h-14 text-lg shadow-glow hover:scale-105 transition-all duration-300"
            >
              Cek Qadha Shalat
            </Button>
          </div>
        </Card>

        {result && (
          <Card className="mt-8 p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-primary">Hasil Panduan</h2>
            <div className="space-y-2">
              {result.map((line, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${
                    line.startsWith("•") ? "ml-4" : ""
                  } ${
                    line.startsWith("✓") || line.startsWith("ℹ") ? "font-semibold text-primary" : "text-card-foreground"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-accent/20">
              <p className="text-sm text-card-foreground">
                <strong className="text-accent-foreground">Catatan Penting:</strong> Qadha shalat 
                harus dilakukan segera setelah suci. Jangan menunda-nunda ibadah yang telah menjadi 
                kewajiban.
              </p>
            </div>
          </Card>
        )}

        <Card className="mt-8 p-6 rounded-3xl bg-secondary/50">
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            Panduan Waktu Suci & Shalat
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Suci waktu Subuh → Wajib Subuh, tidak qadha Isya</li>
            <li>• Suci waktu Dhuhur → Wajib Dhuhur, tidak qadha Subuh</li>
            <li>• Suci waktu Asar → Wajib Asar + Qadha Dhuhur (boleh jamak)</li>
            <li>• Suci waktu Maghrib → Wajib Maghrib, tidak qadha Asar</li>
            <li>• Suci waktu Isya → Wajib Isya + Qadha Maghrib (boleh jamak)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default QadhaGuide;
