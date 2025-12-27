import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Calculator as CalcIcon, Droplets, Sparkles, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
interface CalculationResult {
  condition: number;
  description: string;
  firstBloodStatus: string;
  purityStatus: string;
  secondBloodBreakdown: {
    istihadohDays: number;
    menstruationDays: number;
  };
  explanation: string;
}
const Calculator = () => {
  const [firstBloodDays, setFirstBloodDays] = useState<string>("");
  const [purityDays, setPurityDays] = useState<string>("");
  const [secondBloodDays, setSecondBloodDays] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const calculateCycle = () => {
    const first = parseInt(firstBloodDays);
    const purity = parseInt(purityDays);
    const second = parseInt(secondBloodDays);
    if (isNaN(first) || isNaN(purity) || isNaN(second)) {
      toast.error("Mohon isi semua field dengan angka yang valid");
      return;
    }
    if (first < 1 || purity < 1 || second < 1) {
      toast.error("Durasi minimal adalah 1 hari");
      return;
    }
    let calculationResult: CalculationResult;

    // Condition 2: If purity period is 15 days or more → second bleeding is menstruation
    if (purity >= 15) {
      calculationResult = {
        condition: 2,
        description: "Masa Bersih ≥ 15 Hari",
        firstBloodStatus: `Haid (${first} hari)`,
        purityStatus: `Bersih Sempurna (${purity} hari)`,
        secondBloodBreakdown: {
          istihadohDays: 0,
          menstruationDays: second
        },
        explanation: `Karena masa bersih ${purity} hari (≥15 hari), maka darah kedua seluruhnya dianggap sebagai HAID baru selama ${second} hari.`
      };
    }
    // Condition 1: If first bleeding + purity >= 15 days → intermittent istihadoh
    else if (first + purity >= 15) {
      const daysNeededForPurity = 15 - purity;
      const istihadohDays = Math.min(daysNeededForPurity, second);
      const menstruationDays = Math.max(0, second - istihadohDays);
      calculationResult = {
        condition: 1,
        description: "Istihadhah Mutaqotti'ah (Terputus)",
        firstBloodStatus: `Haid (${first} hari)`,
        purityStatus: `Bersih Belum Sempurna (${purity} hari)`,
        secondBloodBreakdown: {
          istihadohDays,
          menstruationDays
        },
        explanation: `Darah pertama ${first} hari + masa bersih ${purity} hari = ${first + purity} hari (≥15 hari).\n\nMasa bersih perlu disempurnakan menjadi 15 hari, sehingga ${istihadohDays} hari pertama dari darah kedua adalah ISTIHADHAH (penyempurna masa bersih).${menstruationDays > 0 ? `\n\nSisa ${menstruationDays} hari berikutnya adalah HAID baru.` : ''}`
      };
    }
    // Condition 3: If purity + first bleeding < 15 days → second bleeding starts with menstruation to complete cycle
    else {
      const daysShort = 15 - (first + purity);
      const menstruationDays = Math.min(daysShort, second);
      const istihadohDays = Math.max(0, second - menstruationDays);
      calculationResult = {
        condition: 3,
        description: "Penyempurnaan Siklus Haid",
        firstBloodStatus: `Haid (${first} hari)`,
        purityStatus: `Bersih (${purity} hari)`,
        secondBloodBreakdown: {
          istihadohDays,
          menstruationDays
        },
        explanation: `Darah pertama ${first} hari + masa bersih ${purity} hari = ${first + purity} hari (<15 hari).\n\nKurang ${daysShort} hari untuk mencapai 15 hari, sehingga ${menstruationDays} hari pertama dari darah kedua adalah HAID (penyempurna siklus).${istihadohDays > 0 ? `\n\nSisa ${istihadohDays} hari berikutnya adalah ISTIHADHAH.` : ''}`
      };
    }
    setResult(calculationResult);
  };
  const resetForm = () => {
    setFirstBloodDays("");
    setPurityDays("");
    setSecondBloodDays("");
    setResult(null);
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <CalcIcon className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Kalkulator Siklus Haid
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hitung status darah berdasarkan pola siklus untuk menentukan haid atau istihadhah
          </p>
        </div>

        {/* Input Table Card */}
        <Card className="p-6 md:p-8 shadow-soft rounded-3xl bg-gradient-card mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            Input Data Siklus
          </h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Fase</TableHead>
                  <TableHead className="text-center">Durasi (Hari)</TableHead>
                  <TableHead className="hidden md:table-cell">Keterangan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      Darah Pertama
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input type="number" min="1" max="60" value={firstBloodDays} onChange={e => setFirstBloodDays(e.target.value)} placeholder="0" className="w-24 mx-auto text-center rounded-xl border-2 h-12" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    Durasi darah pertama keluar
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      Masa Bersih
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input type="number" min="1" max="60" value={purityDays} onChange={e => setPurityDays(e.target.value)} placeholder="0" className="w-24 mx-auto text-center rounded-xl border-2 h-12" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    Durasi tidak keluar darah
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      Darah Kedua
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input type="number" min="1" max="60" value={secondBloodDays} onChange={e => setSecondBloodDays(e.target.value)} placeholder="0" className="w-24 mx-auto text-center rounded-xl border-2 h-12" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    Durasi darah keluar lagi
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex gap-4 mt-8">
            <Button onClick={calculateCycle} className="flex-1 rounded-xl h-14 text-lg shadow-glow hover:scale-105 transition-all duration-300">
              <Sparkles className="mr-2 h-5 w-5" />
              Hitung Sekarang
            </Button>
            <Button onClick={resetForm} variant="outline" className="rounded-xl h-14 px-6">
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Result Card */}
        {result && <Card className="p-6 md:p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Hasil Perhitungan
            </h2>

            {/* Condition Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Kondisi {result.condition}: {result.description}
              </span>
            </div>

            {/* Result Table */}
            <div className="overflow-x-auto mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fase</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        Darah Pertama
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-3 py-1 rounded-full text-sm bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                        {result.firstBloodStatus}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        Masa Bersih
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {result.purityStatus}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        Darah Kedua
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {result.secondBloodBreakdown.istihadohDays > 0 && <span className="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                            Istihadhah ({result.secondBloodBreakdown.istihadohDays} hari)
                          </span>}
                        {result.secondBloodBreakdown.menstruationDays > 0 && <span className="px-3 py-1 rounded-full text-sm bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                            Haid ({result.secondBloodBreakdown.menstruationDays} hari)
                          </span>}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Explanation */}
            <div className="p-4 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">Penjelasan:</h3>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {result.explanation}
              </p>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Catatan:</strong> Perhitungan ini berdasarkan kaidah fiqih. 
                Untuk kasus yang lebih kompleks, sebaiknya konsultasikan dengan ustadzah atau ahli fiqih.
              </p>
            </div>
          </Card>}
      </div>
    </div>;
};
export default Calculator;