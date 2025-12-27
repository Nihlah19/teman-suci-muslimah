import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Droplets, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const ColorChecker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const colors = [
    {
      name: "Hitam",
      value: "black",
      color: "bg-gray-900",
      emoji: "🖤",
      category: "haid",
      shortDesc: "Warna hitam pekat menandakan darah haid yang kuat",
      fullDescription: `Darah haid berwarna hitam pekat adalah yang paling jelas menandakan haid. Biasanya warnanya gelap, kental, dan memiliki bau khas yang lebih kuat dibanding darah biasa. Warna ini menunjukkan darah yang sudah lama berada di rahim sebelum keluar, sehingga warnanya menjadi gelap. Nabi ﷺ sendiri menyebut darah hitam sebagai warna yang dikenal sebagai haid.`,
    },
    {
      name: "Merah",
      value: "red",
      color: "bg-red-600",
      emoji: "❤️",
      category: "haid",
      shortDesc: "Warna merah adalah warna paling umum dari darah haid",
      fullDescription: `Warna merah adalah warna yang paling umum dari darah haid. Warnanya bisa bervariasi dari merah terang hingga merah tua. Biasanya muncul di awal atau pertengahan masa haid ketika darah masih segar. Selama berada dalam rentang waktu haid, darah merah ini dihukumi sebagai haid yang sah.`,
    },
    {
      name: "Kuning",
      value: "yellow",
      color: "bg-yellow-500",
      emoji: "💛",
      category: "conditional",
      shortDesc: "Warna kuning dihukumi haid jika masih dalam masa haid",
      fullDescription: `Darah haid berwarna kuning tampak seperti cairan encer kekuningan yang bercampur darah tipis. Kadang menyerupai air berwarna kuning tua, seperti warna nanah atau karat muda. Jika warna kuning ini keluar masih dalam masa haid, maka tetap dihukumi haid. Namun bila keluar setelah bersih (setelah terlihat cairan putih bening), maka bukan haid, melainkan darah sisa atau istihadhah.

Hal ini sesuai hadis Ummu 'Athiyyah r.a.:
"Kami tidak menganggap sesuatu yang keruh dan kekuningan setelah bersih sebagai haid."
— (HR. Abu Dawud no. 307)`,
    },
    {
      name: "Coklat",
      value: "brown",
      color: "bg-amber-800",
      emoji: "🤎",
      category: "conditional",
      shortDesc: "Warna coklat seperti karat besi, muncul di akhir haid",
      fullDescription: `Darah coklat adalah darah yang warnanya seperti karat besi atau kopi susu, tampak gelap kecoklatan dan lebih kental dibanding darah biasa. Biasanya muncul di akhir masa haid, ketika darah segar mulai berhenti dan bercampur dengan cairan tubuh. Warna coklat ini merupakan tanda bahwa rahim hampir bersih dari darah.

Selama darah coklat keluar dalam masa kebiasaan haid, ia tetap dihukumi haid. Namun jika keluar setelah tanda bersih (cairan putih bening), maka bukan haid menurut ijma' (kesepakatan) ulama.`,
    },
    {
      name: "Keruh",
      value: "murky",
      color: "bg-stone-500",
      emoji: "🤍",
      category: "conditional",
      shortDesc: "Warna keruh abu-abu kehitaman, sering di awal/akhir haid",
      fullDescription: `Darah keruh (kadang disebut juga mudhahimmah) berwarna abu-abu kehitaman atau kecoklatan pucat, seperti air yang tercampur sedikit darah. Teksturnya lebih encer dan warnanya tidak sejelas darah merah atau coklat. Darah keruh sering keluar di awal atau akhir haid, ketika aliran darah mulai lemah.

Jika masih berada dalam waktu haid, maka darah keruh tetap dianggap haid. Tetapi apabila keluar setelah tanda bersih, hukumnya sama seperti darah coklat dan kuning — bukan haid lagi.`,
    },
  ];

  const handleColorSelect = (colorData: typeof colors[0]) => {
    setSelectedColor(colorData.value);
    
    if (colorData.category === "haid") {
      setResult(
        `✓ HAID\n\n${colorData.fullDescription}\n\n📌 Kesimpulan: Darah dengan warna ini dihukumi sebagai darah haid. Selama masa ini, kamu tidak wajib shalat dan puasa.`
      );
    } else {
      setResult(
        `⚠ TERGANTUNG WAKTU KELUARNYA\n\n${colorData.fullDescription}\n\n📌 Kesimpulan: Jika keluar dalam masa haid → dihukumi HAID. Jika keluar setelah tanda bersih (cairan putih bening) → bukan haid, melainkan ISTIHADHAH.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <Droplets className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Cek Warna Darah
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenali warna darah haid berdasarkan penjelasan hadis dan pendapat ulama
          </p>
        </div>

        {/* Introductory Explanation Section */}
        <Card className="p-6 md:p-8 shadow-soft rounded-3xl bg-gradient-card mb-8 animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Dasar Hukum Warna Darah Haid</h2>
              <p className="text-muted-foreground text-sm">Berdasarkan hadis Nabi ﷺ dan penjelasan ulama</p>
            </div>
          </div>
          
          <div className="space-y-6 text-card-foreground">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="italic text-base leading-relaxed mb-3">
                Dalam hadis dari Fāṭimah bint Abi Hubaisy, Nabi ﷺ bersabda:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-background/50 rounded-r-lg">
                <p className="font-medium text-foreground">
                  "Apabila itu darah haid, maka warnanya hitam yang dikenal. Jika tidak demikian, maka berwudhulah dan shalatlah."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">— (HR. Abu Dawud no. 304, an-Nasa'i no. 216)</footer>
              </blockquote>
            </div>

            <div className="text-base leading-relaxed space-y-4">
              <p>
                Hadis ini menjadi dasar bagi para ulama untuk menjelaskan bahwa <strong>warna darah haid tidak hanya hitam atau merah</strong>, tetapi juga dapat berupa kuning dan keruh (coklat), selama masih keluar dalam masa kebiasaan haid.
              </p>
              
              <p>
                <strong>Darah haid berwarna coklat (كدرة)</strong> biasanya tampak seperti cairan kental berwarna coklat tua, menyerupai sisa darah kering atau karat, yang muncul menjelang berakhirnya masa haid atau sesudah darah merah berhenti. Warnanya tidak sepekat darah segar, namun masih memiliki sifat darah seperti bau khas dan tekstur agak lengket.
              </p>
              
              <p>
                <strong>Sedangkan darah keruh</strong> tampak lebih pucat dari darah coklat, dengan warna seperti air yang tercampur sedikit darah — tidak merah jelas, melainkan abu-abu kehitaman atau kecoklatan muda.
              </p>
              
              <p>
                Kedua warna ini dihukumi sebagai darah haid apabila keluar dalam rentang waktu haid yang masih berlangsung, sebab termasuk bagian dari perubahan alami warna darah ketika proses haid hampir selesai.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-base leading-relaxed mb-3">
                Namun, bila warna coklat atau keruh muncul <strong>setelah tanda bersih</strong> — yaitu setelah keluarnya cairan putih bening (qashshah al-baydhā') — maka darah tersebut tidak lagi dianggap haid. Hal ini sesuai dengan sabda Ummu 'Athiyyah r.a.:
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-background/50 rounded-r-lg">
                <p className="font-medium text-foreground">
                  "Kami tidak menganggap sesuatu yang keruh dan kekuningan setelah bersih sebagai haid."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">— (HR. Abu Dawud no. 307)</footer>
              </blockquote>
            </div>

            <div className="p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <strong>📌 Kesimpulan:</strong> Penentuan status darah coklat dan keruh sangat bergantung pada waktu keluarnya: selama masih dalam masa haid, keduanya termasuk haid; tetapi jika setelah masa bersih, maka dihukumi bukan haid, melainkan istihadhah atau darah sisa biasa.
              </p>
            </div>
          </div>
        </Card>

        {/* Color Selection Section */}
        <Card className="p-6 md:p-8 shadow-soft rounded-3xl bg-gradient-card mb-8">
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
                <div className="text-3xl mb-1">{colorData.emoji}</div>
                <div
                  className={cn(
                    "w-14 h-14 rounded-full shadow-soft transition-transform duration-300 group-hover:scale-110",
                    colorData.color
                  )}
                />
                <span className="text-sm font-medium text-center">
                  {colorData.name}
                </span>
                <span className="text-xs text-muted-foreground text-center line-clamp-2">
                  {colorData.shortDesc}
                </span>
              </button>
            ))}
          </div>
        </Card>

        {result && (
          <Card className="p-6 md:p-8 shadow-glow rounded-3xl bg-gradient-card animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hasil Identifikasi</h2>
            <div className="whitespace-pre-line text-base leading-relaxed text-card-foreground">
              {result}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <strong>Catatan:</strong> Penentuan berdasarkan warna saja tidak cukup akurat. 
                Perhatikan juga durasi, waktu keluarnya darah, dan konsultasikan dengan ustadzah atau ahli fiqih 
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
