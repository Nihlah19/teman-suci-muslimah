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

    const maghribTime = 18 * 60; // 18:00
    const midnightTime = 0 * 60; // 00:00 (midnight)
    const fajrTime = 5 * 60; // 05:00

    let qadhaList: string[] = [];

    if (timeInMinutes >= 12 * 60 && timeInMinutes < maghribTime) {
      // Suci sebelum maghrib (siang sampai sebelum maghrib)
      qadhaList = ["Dhuhur", "Ashar"];
      setResult([
        "✓ Waktu Suci: Sebelum Maghrib",
        "",
        "Shalat yang perlu diqadha:",
        "• Dhuhur",
        "• Ashar",
        "",
        "Karena kamu suci sebelum waktu Maghrib, maka shalat Dhuhur dan Ashar wajib diqadha. Segera qadha kedua shalat ini setelah mandi suci."
      ]);
    } else if (timeInMinutes >= maghribTime || timeInMinutes < midnightTime + 60) {
      // Suci antara maghrib dan tengah malam
      qadhaList = ["Maghrib", "Isya"];
      setResult([
        "✓ Waktu Suci: Sebelum Tengah Malam",
        "",
        "Shalat yang perlu diqadha:",
        "• Maghrib",
        "• Isya",
        "",
        "Karena kamu suci sebelum tengah malam, maka shalat Maghrib dan Isya wajib diqadha. Segera qadha kedua shalat ini setelah mandi suci."
      ]);
    } else if (timeInMinutes >= midnightTime + 60 && timeInMinutes < fajrTime) {
      // Suci antara tengah malam dan subuh
      qadhaList = ["Subuh"];
      setResult([
        "✓ Waktu Suci: Sebelum Subuh",
        "",
        "Shalat yang perlu diqadha:",
        "• Subuh",
        "",
        "Karena kamu suci sebelum waktu Subuh, maka shalat Subuh wajib diqadha. Segera qadha shalat ini setelah mandi suci."
      ]);
    } else {
      // Suci setelah subuh sampai siang
      qadhaList = [];
      setResult([
        "ℹ Tidak Ada Qadha Saat Ini",
        "",
        "Berdasarkan waktu suci yang kamu masukkan, tidak ada shalat yang wajib diqadha pada saat ini. Kamu dapat melakukan shalat sesuai waktunya yang akan datang."
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
            Waktu Acuan Qadha
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Suci sebelum Maghrib → Qadha Dhuhur & Ashar</li>
            <li>• Suci sebelum tengah malam → Qadha Maghrib & Isya</li>
            <li>• Suci sebelum Subuh → Qadha Subuh</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default QadhaGuide;
