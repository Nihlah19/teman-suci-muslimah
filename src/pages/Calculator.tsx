import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { toast } from "sonner";

const Calculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hasRegularCycle, setHasRegularCycle] = useState<boolean | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const calculateDays = () => {
    if (!startDate || !endDate) {
      toast.error("Mohon isi tanggal mulai dan selesai");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    let resultText = "";
    
    if (diffDays >= 1 && diffDays <= 15) {
      resultText = `Durasi: ${diffDays} hari\n\n✓ Ini termasuk HAID\n\nDarah yang keluar selama ${diffDays} hari ini dikategorikan sebagai darah haid. Selama masa ini, kamu tidak wajib shalat dan puasa.`;
    } else if (diffDays > 15) {
      if (hasRegularCycle) {
        resultText = `Durasi: ${diffDays} hari\n\n⚠ Ini termasuk ISTIHADHAH\n\nDurasi melebihi 15 hari. Karena kamu memiliki adat haid tetap, maka:\n- Hari sesuai adat tetap = haid\n- Selebihnya = istihadhah\n\nSelama istihadhah, kamu tetap wajib shalat dan berwudhu setiap waktu shalat.`;
      } else {
        resultText = `Durasi: ${diffDays} hari\n\n⚠ Ini termasuk ISTIHADHAH\n\nDurasi melebihi 15 hari dan kamu tidak memiliki adat haid tetap. Sebaiknya konsultasikan dengan ustadzah atau ahli fiqih untuk penentuan yang lebih akurat.`;
      }
    }

    setResult(resultText);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Kalkulator Masa Haid
          </h1>
          <p className="text-lg text-muted-foreground">
            Hitung durasi untuk menentukan apakah termasuk haid atau istihadhah
          </p>
        </div>

        <Card className="p-8 shadow-soft rounded-3xl bg-gradient-card">
          <div className="space-y-6">
            <div>
              <Label htmlFor="startDate" className="text-base font-medium mb-2 block">
                Tanggal Mulai Darah Keluar
              </Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded-xl border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="endDate" className="text-base font-medium mb-2 block">
                Tanggal Berhenti
              </Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="rounded-xl border-2 h-12"
              />
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Apakah kamu punya adat haid tetap?
              </Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={hasRegularCycle === true ? "default" : "outline"}
                  onClick={() => setHasRegularCycle(true)}
                  className="flex-1 rounded-xl h-12 border-2"
                >
                  Ya, punya
                </Button>
                <Button
                  type="button"
                  variant={hasRegularCycle === false ? "default" : "outline"}
                  onClick={() => setHasRegularCycle(false)}
                  className="flex-1 rounded-xl h-12 border-2"
                >
                  Tidak punya
                </Button>
              </div>
            </div>

            <Button
              onClick={calculateDays}
              className="w-full rounded-xl h-14 text-lg shadow-glow hover:scale-105 transition-all duration-300"
            >
              Hitung Sekarang
            </Button>
          </div>
        </Card>

        {result && (
          <Card className="mt-8 p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hasil Perhitungan</h2>
            <div className="whitespace-pre-line text-lg leading-relaxed text-card-foreground">
              {result}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Calculator;
