import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Heart, 
  Droplets, 
  Ban, 
  ShowerHead, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Quote,
  Flower2
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Education = () => {
  const prohibitedActivities = [
    { no: 1, activity: "Shalat lima waktu", status: false },
    { no: 2, activity: "Puasa Ramadhan atau sunnah", status: false, note: "wajib diganti setelah suci" },
    { no: 3, activity: "Thawaf di Ka'bah", status: false },
    { no: 4, activity: "Menyentuh atau membaca mushaf Al-Qur'an dengan tangan langsung", status: false },
    { no: 5, activity: "Hubungan suami istri", status: false, note: "QS. Al-Baqarah: 222" },
    { no: 6, activity: "Masuk ke dalam masjid (menetap lama di dalamnya)", status: false, note: "kecuali darurat" },
  ];

  const summaryTable = [
    { kondisi: "Haid", shalat: "Tidak boleh", qadha: "Tidak perlu", puasa: "Tidak boleh (diganti setelah suci)", mandi: "Ya, setelah suci" },
    { kondisi: "Istihadhah", shalat: "Wajib shalat", qadha: "Tidak perlu", puasa: "Boleh", mandi: "Tidak wajib setiap kali, cukup wudhu" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex p-5 rounded-3xl bg-gradient-hero shadow-glow mb-8">
            <BookOpen className="h-14 w-14 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Panduan Shalat, Haid, dan Istihadhah
            <br />
            <span className="text-primary">bagi Muslimah</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Memahami hukum ibadah dengan bahasa sederhana dan penuh hikmah
          </p>
        </div>

        {/* 🌸 Pendahuluan */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in border-l-4 border-primary">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-accent shadow-soft">
              <Flower2 className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
              Pendahuluan
            </h2>
          </div>
          <div className="space-y-4 text-card-foreground/90 leading-relaxed text-lg">
            <p>
              Dalam ajaran Islam, wanita memiliki kondisi alami yang berbeda dari laki-laki, yaitu keluarnya darah dari rahim pada waktu-waktu tertentu. Ada dua kondisi yang sering dialami: <strong className="text-primary">haid</strong> dan <strong className="text-accent">istihadhah</strong>.
            </p>
            <p>
              Banyak perempuan bingung membedakan keduanya, padahal hukum ibadah seperti shalat, puasa, dan mandi wajib sangat bergantung pada kondisi ini.
            </p>
            <p className="text-muted-foreground italic">
              Mari kita pahami satu per satu dengan bahasa sederhana agar mudah dipahami oleh siapa pun.
            </p>
          </div>
        </Card>

        {/* 🩸 1. Pengertian Haid */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-hero shadow-soft">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-1 block">Bagian 1</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Pengertian Haid
              </h2>
            </div>
          </div>
          
          <div className="space-y-5 text-card-foreground/90 leading-relaxed">
            <p className="text-lg">
              <strong>Haid (الحيض)</strong> adalah darah alami yang keluar dari rahim wanita pada waktu tertentu setiap bulan, tanpa sebab penyakit atau melahirkan.
            </p>
            <p className="text-lg">
              Darah ini biasanya berwarna <span className="font-semibold">hitam, merah tua, atau coklat</span>, agak kental, dan berbau khas.
            </p>
            <p className="text-lg">
              Haid adalah tanda bahwa seorang perempuan telah <strong>baligh</strong> dan mulai memikul kewajiban ibadah seperti shalat dan puasa ketika dalam keadaan suci.
            </p>
            
            {/* Ayat Quote */}
            <div className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-accent mt-6">
              <div className="flex items-start gap-3">
                <Quote className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg italic text-card-foreground mb-3">
                    "Mereka bertanya kepadamu tentang haid. Katakanlah: Haid itu adalah sesuatu yang kotor. Maka jauhilah istri pada waktu haid, dan janganlah kamu mendekati mereka sebelum mereka suci."
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    — (QS. Al-Baqarah [2]: 222)
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Ayat ini menunjukkan bahwa haid adalah kondisi alami yang memerlukan penghormatan terhadap batas-batas tertentu dalam ibadah.
            </p>
          </div>
        </Card>

        {/* 💧 2. Pengertian Istihadhah */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-purple shadow-soft">
              <Droplets className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-accent mb-1 block">Bagian 2</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Pengertian Istihadhah
              </h2>
            </div>
          </div>
          
          <div className="space-y-5 text-card-foreground/90 leading-relaxed">
            <p className="text-lg">
              <strong>Istihadhah (الاستحاضة)</strong> adalah darah yang keluar dari rahim di luar waktu haid karena penyakit atau gangguan hormon.
            </p>
            <p className="text-lg">
              Ciri darah istihadhah biasanya lebih <span className="font-semibold">encer, berwarna merah cerah</span>, dan tidak berbau seperti darah haid.
            </p>
            <p className="text-lg">
              Wanita yang mengalami istihadhah <strong className="text-accent">tetap dianggap suci secara hukum</strong>, sehingga wajib melaksanakan shalat, puasa, dan ibadah lainnya seperti biasa.
            </p>
            
            {/* Hadits Quote */}
            <div className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-primary mt-6">
              <div className="flex items-start gap-3">
                <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg italic text-card-foreground mb-3">
                    "Apabila itu darah haid, maka warnanya hitam yang dikenal. Jika tidak demikian, maka itu adalah darah penyakit (istihadhah)."
                  </p>
                  <p className="text-sm font-semibold text-accent">
                    — (HR. Abu Dawud no. 304, an-Nasa'i no. 216)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 🙏 3. Hukum Shalat */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-sunset shadow-soft">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-1 block">Bagian 3</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Hukum Shalat bagi Wanita Haid dan Istihadhah
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Wanita Haid */}
            <div className="bg-destructive/10 p-6 rounded-2xl border border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-destructive" />
                <h3 className="text-xl font-bold text-card-foreground">Wanita Haid</h3>
              </div>
              <ul className="space-y-3 text-card-foreground/90">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span><strong>Tidak boleh shalat.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Tidak perlu mengganti (qadha) shalat setelah haid selesai.</span>
                </li>
              </ul>
              
              <div className="bg-background/50 p-4 rounded-xl mt-4 border-l-2 border-destructive">
                <p className="text-sm italic text-muted-foreground mb-2">
                  Nabi ﷺ bersabda kepada Aisyah r.a.:
                </p>
                <p className="text-sm italic">
                  "Bukankah bila kamu haid, kamu tidak shalat dan tidak berpuasa?"
                </p>
                <p className="text-xs font-semibold text-destructive mt-2">
                  — (HR. Bukhari no. 321, Muslim no. 335)
                </p>
              </div>
            </div>

            {/* Wanita Istihadhah */}
            <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold text-card-foreground">Wanita Istihadhah</h3>
              </div>
              <ul className="space-y-3 text-card-foreground/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Wajib shalat seperti biasa.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Berwudhu setiap masuk waktu shalat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Boleh membaca Al-Qur'an, thawaf, dan ibadah lainnya.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* 🚫 4. Hal-hal yang Dilarang Saat Haid */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-destructive/80 shadow-soft">
              <Ban className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-destructive mb-1 block">Bagian 4</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Hal-hal yang Dilarang Saat Haid
              </h2>
            </div>
          </div>
          
          <p className="text-card-foreground/90 mb-6 text-lg">
            Selama masa haid, seorang wanita tidak boleh melakukan ibadah tertentu yang mensyaratkan kesucian jasmani:
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-muted-foreground font-semibold w-12">No</TableHead>
                  <TableHead className="text-muted-foreground font-semibold">Aktivitas</TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-center w-24">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prohibitedActivities.map((item) => (
                  <TableRow key={item.no} className="border-border">
                    <TableCell className="font-medium text-card-foreground">{item.no}</TableCell>
                    <TableCell className="text-card-foreground">
                      {item.activity}
                      {item.note && (
                        <span className="text-muted-foreground text-sm ml-2">
                          ({item.note})
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <XCircle className="h-5 w-5 text-destructive mx-auto" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
            <p className="text-card-foreground">
              <strong className="text-accent">Namun</strong>, wanita haid boleh tetap <strong>berzikir, berdoa, mendengarkan Al-Qur'an, bershalawat, dan belajar ilmu agama</strong>.
            </p>
          </div>
        </Card>

        {/* 💦 5. Panduan Mandi Wajib Setelah Haid */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-hero shadow-soft">
              <ShowerHead className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-1 block">Bagian 5</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Panduan Mandi Wajib Setelah Haid
              </h2>
            </div>
          </div>
          
          <p className="text-card-foreground/90 mb-6 text-lg">
            Setelah darah haid berhenti dan keluar tanda suci (biasanya cairan putih bening), wanita <strong>wajib mandi janabah</strong> (mandi wajib) sebelum kembali beribadah.
          </p>
          
          {/* Niat Mandi Haid */}
          <div className="bg-gradient-hero/10 p-6 rounded-2xl border border-primary/20 mb-6">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Niat Mandi Wajib Setelah Haid
            </h3>
            <p className="text-muted-foreground text-sm mb-3">(نِيَّةُ الغُسْلِ مِنَ الحَيْضِ)</p>
            
            <div className="bg-background/80 p-4 rounded-xl text-center">
              <p className="text-2xl font-arabic mb-3 text-card-foreground" dir="rtl">
                نَوَيْتُ الغُسْلَ لِرَفْعِ الحَيْضِ لِلّٰهِ تَعَالَى
              </p>
              <p className="text-lg italic text-primary mb-2">
                "Nawaitul ghusla li raf'il haidhi lillāhi ta'ālā."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Artinya:</strong> Aku niat mandi untuk menghilangkan hadas besar karena haid karena Allah Ta'ala.
              </p>
            </div>
          </div>
        </Card>

        {/* 💧 6. Panduan Mandi Wajib bagi Wanita Istihadhah */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-purple shadow-soft">
              <Droplets className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-accent mb-1 block">Bagian 6</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Panduan Mandi Wajib bagi Wanita Istihadhah
              </h2>
            </div>
          </div>
          
          <p className="text-card-foreground/90 mb-6 text-lg">
            Karena istihadhah bukan haid, mandi wajib <strong>hanya dilakukan satu kali</strong> saat awal terjadinya istihadhah, sebagai bentuk penyucian diri. Setelah itu, <strong>cukup berwudhu</strong> setiap masuk waktu shalat.
          </p>
          
          {/* Niat Mandi Istihadhah */}
          <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
            <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Niat Mandi Wajib Istihadhah
            </h3>
            <p className="text-muted-foreground text-sm mb-3">(نِيَّةُ الغُسْلِ مِنَ الِاسْتِحَاضَةِ)</p>
            
            <div className="bg-background/80 p-4 rounded-xl text-center">
              <p className="text-2xl font-arabic mb-3 text-card-foreground" dir="rtl">
                نَوَيْتُ الغُسْلَ لِرَفْعِ الِاسْتِحَاضَةِ لِلّٰهِ تَعَالَى
              </p>
              <p className="text-lg italic text-accent mb-2">
                "Nawaitul ghusla li raf'il istihādah lillāhi ta'ālā."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Artinya:</strong> Aku niat mandi untuk menghilangkan hadas besar karena istihadhah karena Allah Ta'ala.
              </p>
            </div>
          </div>
        </Card>

        {/* 🌺 7. Cara Menjaga Kebersihan dan Ibadah Saat Istihadhah */}
        <Card className="p-8 md:p-10 shadow-medium rounded-3xl bg-gradient-card mb-10 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-accent shadow-soft">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-1 block">Bagian 7</span>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Cara Menjaga Kebersihan dan Ibadah Saat Istihadhah
              </h2>
            </div>
          </div>
          
          <p className="text-card-foreground/90 mb-6 text-lg">
            Wanita yang mengalami istihadhah disunnahkan:
          </p>
          
          <ul className="space-y-3 text-card-foreground/90 mb-6">
            <li className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Menggunakan pembalut atau kain untuk menahan darah.</span>
            </li>
            <li className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Berwudhu setiap kali waktu shalat masuk.</span>
            </li>
            <li className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Tetap melaksanakan shalat, membaca Al-Qur'an, dan puasa.</span>
            </li>
          </ul>
          
          {/* Hadits Quote */}
          <div className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-primary">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Hal ini berdasarkan sabda Nabi ﷺ kepada Fāṭimah binti Abi Hubaisy:
                </p>
                <p className="text-lg italic text-card-foreground mb-3">
                  "Berwudhulah setiap kali hendak shalat, lalu shalatlah, meskipun darah terus mengalir."
                </p>
                <p className="text-sm font-semibold text-primary">
                  — (HR. Bukhari no. 306 dan Muslim no. 333)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* 🌷 Kesimpulan Umum - Table */}
        <Card className="p-8 md:p-10 shadow-glow rounded-3xl bg-gradient-card mb-10 animate-fade-in border-2 border-primary/20" style={{ animationDelay: '800ms' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-hero shadow-soft">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
              Kesimpulan Umum
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border bg-secondary/30">
                  <TableHead className="text-foreground font-bold">Kondisi</TableHead>
                  <TableHead className="text-foreground font-bold">Hukum Shalat</TableHead>
                  <TableHead className="text-foreground font-bold">Perlu Qadha?</TableHead>
                  <TableHead className="text-foreground font-bold">Boleh Puasa?</TableHead>
                  <TableHead className="text-foreground font-bold">Wajib Mandi?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {summaryTable.map((item, index) => (
                  <TableRow key={index} className="border-border">
                    <TableCell className="font-bold text-card-foreground">
                      <span className={index === 0 ? "text-primary" : "text-accent"}>
                        {item.kondisi}
                      </span>
                    </TableCell>
                    <TableCell className="text-card-foreground">{item.shalat}</TableCell>
                    <TableCell className="text-card-foreground">{item.qadha}</TableCell>
                    <TableCell className="text-card-foreground">{item.puasa}</TableCell>
                    <TableCell className="text-card-foreground">{item.mandi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* 💖 Penutup */}
        <Card className="p-8 md:p-10 rounded-3xl bg-gradient-hero text-white shadow-glow animate-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="text-center">
            <Flower2 className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Penutup</h2>
            <div className="space-y-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
              <p className="text-lg">
                Islam tidak memandang haid atau istihadhah sebagai kekurangan, melainkan <strong>bagian dari fitrah wanita</strong>.
              </p>
              <p className="text-lg">
                Allah menciptakan setiap keadaan perempuan dengan hikmah. Maka, ketika haid datang, bukan berarti ibadah berhenti — <strong>hanya bentuknya yang berubah</strong>: dari gerakan fisik menuju ibadah hati dan lisan.
              </p>
              <p className="text-lg italic opacity-90">
                Selama seorang muslimah menjaga niat, kebersihan, dan dzikirnya, maka ia tetap dalam keadaan dekat dengan Allah ﷻ.
              </p>
            </div>
          </div>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-10 p-6 rounded-2xl bg-muted/30 border border-border">
          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            <strong>Disclaimer:</strong> Informasi di atas adalah panduan umum berdasarkan literatur Islam. 
            Untuk kasus spesifik atau kondisi medis tertentu, sebaiknya konsultasikan 
            dengan ustadzah, ahli fiqih, atau tenaga medis profesional.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Education;
