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

    // Waktu shalat sesuai jadwal
    const subuhStart = 4 * 60; // 04:00
    const subuhEnd = 5 * 60 + 30; // 05:30
    const dzuhurStart = 11 * 60 + 45; // 11:45
    const dzuhurEnd = 15 * 60; // 15:00
    const asarStart = 15 * 60; // 15:00
    const asarEnd = 17 * 60 + 45; // 17:45
    const maghribStart = 17 * 60 + 45; // 17:45
    const maghribEnd = 18 * 60 + 30; // 18:30
    const isyaStart = 18 * 60 + 30; // 18:30

    if (timeInMinutes >= subuhStart && timeInMinutes < subuhEnd) {
      // Suci waktu Subuh (04:00 - 05:30)
      setResult(["✓ Waktu Bersih: Waktu Subuh", "", "Shalat yang wajib:", "• Subuh", "", "Tidak wajib qadha shalat Isya.", "", "Karena kamu bersih di waktu Subuh, maka wajib shalat Subuh. Tidak perlu qadha shalat Isya karena waktu Isya sudah lewat sebelum bersih."]);
    } else if (timeInMinutes >= subuhEnd && timeInMinutes < dzuhurStart) {
      // Waktu di luar shalat (05:30 - 11:45)
      setResult(["ℹ Waktu Di Luar Waktu Shalat", "", "Kamu bersih di antara waktu Subuh dan Dzuhur (05:30 - 11:45).", "", "📌 Keterangan:", "• Tidak wajib qadha shalat Subuh karena waktu Subuh sudah habis.", "• Tunggulah masuk waktu Dzuhur, lalu segeralah shalat Dzuhur.", "", "Karena waktu Subuh sudah berlalu dan waktu Dzuhur belum masuk, kamu tidak memiliki kewajiban qadha shalat apapun saat ini. Namun, bersiaplah untuk shalat Dzuhur tepat waktu."]);
    } else if (timeInMinutes >= dzuhurStart && timeInMinutes < dzuhurEnd) {
      // Suci waktu Dzuhur (11:45 - 15:00)
      setResult(["✓ Waktu Bersih: Waktu Dzuhur", "", "Shalat yang wajib:", "• Dzuhur", "", "Tidak wajib qadha shalat Subuh.", "", "Karena kamu bersih di waktu Dzuhur, maka wajib shalat Dzuhur. Tidak perlu qadha shalat Subuh karena saat Subuh masih dalam kondisi haid."]);
    } else if (timeInMinutes >= asarStart && timeInMinutes < asarEnd) {
      // Suci waktu Asar (15:00 - 17:45)
      setResult(["✓ Waktu Bersih: Waktu Asar", "", "Shalat yang wajib:", "• Asar", "• Qadha Dzuhur", "", "📌 Catatan: Shalat Asar bisa dijamak dengan Dzuhur.", "", "Karena kamu bersih di waktu Asar, maka wajib shalat Asar dan qadha shalat Dzuhur. Boleh dijamak ta'khir (Dzuhur + Asar di waktu Asar)."]);
    } else if (timeInMinutes >= maghribStart && timeInMinutes < maghribEnd) {
      // Suci waktu Maghrib (17:45 - 18:30)
      setResult(["✓ Waktu Bersih: Waktu Maghrib", "", "Shalat yang wajib:", "• Maghrib", "", "Tidak wajib qadha shalat Asar.", "", "📌 Catatan: Shalat Maghrib TIDAK bisa dijamak dengan shalat Asar.", "", "Karena kamu bersih di waktu Maghrib, maka wajib shalat Maghrib saja. Tidak perlu qadha shalat Asar karena Maghrib tidak bisa dijamak dengan Asar."]);
    } else if (timeInMinutes >= isyaStart || timeInMinutes < subuhStart) {
      // Suci waktu Isya (18:30 - 04:00)
      setResult(["✓ Waktu Bersih: Waktu Isya", "", "Shalat yang wajib:", "• Isya", "• Qadha Maghrib", "", "📌 Catatan: Boleh dijamak Isya dengan Maghrib.", "", "Karena kamu bersih di waktu Isya, maka wajib shalat Isya dan qadha shalat Maghrib. Boleh dijamak ta'khir (Maghrib + Isya di waktu Isya)."]);
    } else {
      setResult(["ℹ Waktu Tidak Teridentifikasi", "", "Silakan masukkan waktu yang valid untuk mengetahui shalat yang perlu dilakukan."]);
    }
  };
  return <div className="min-h-screen bg-background">
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
              <Input id="purificationTime" type="time" value={purificationTime} onChange={e => setPurificationTime(e.target.value)} className="rounded-xl border-2 h-12 text-lg" />
              <p className="text-sm text-muted-foreground mt-2">
                Masukkan waktu ketika kamu selesai mandi dan dinyatakan suci
              </p>
            </div>

            <Button onClick={calculateQadha} className="w-full rounded-xl h-14 text-lg shadow-glow hover:scale-105 transition-all duration-300">
              Cek Qadha Shalat
            </Button>
          </div>
        </Card>

        {result && <Card className="mt-8 p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-primary">Hasil Panduan</h2>
            <div className="space-y-2">
              {result.map((line, index) => <p key={index} className={`text-lg leading-relaxed ${line.startsWith("•") ? "ml-4" : ""} ${line.startsWith("✓") || line.startsWith("ℹ") ? "font-semibold text-primary" : "text-card-foreground"}`}>
                  {line}
                </p>)}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-accent/20">
              <p className="text-sm text-card-foreground">
                <strong className="text-accent-foreground">Catatan Penting:</strong> Qadha shalat 
                harus dilakukan segera setelah suci. Jangan menunda-nunda ibadah yang telah menjadi 
                kewajiban.
              </p>
            </div>
          </Card>}

        
      </div>
    </div>;
};
export default QadhaGuide;