import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Info, CheckCircle } from "lucide-react";
const Education = () => {
  const articles = [{
    icon: Heart,
    title: "Pengertian Haid",
    content: ["Haid adalah darah yang keluar dari rahim wanita secara alami dalam kondisi sehat, bukan karena melahirkan atau sebab lain.", "Ciri-ciri haid:", "• Durasi minimal 1 hari (24 jam) dan maksimal 15 hari", "• Warna cenderung hitam, merah gelap, atau coklat tua", "• Biasanya disertai gejala seperti nyeri perut atau kram", "", "Hukum saat haid:", "✗ Tidak boleh shalat", "✗ Tidak boleh puasa", "✗ Tidak boleh membaca Al-Qur'an", "✗ Tidak boleh menyentuh mushaf", "✗ Tidak boleh masuk masjid", "✗ Tidak boleh berhubungan intim"]
  }, {
    icon: Info,
    title: "Pengertian Istihadhah",
    content: ["Istihadhah adalah darah yang keluar dari rahim wanita di luar masa haid atau nifas, biasanya karena penyakit atau gangguan kesehatan.", "Ciri-ciri istihadhah:", "• Durasi lebih dari 15 hari berturut-turut", "• Warna cenderung merah terang, kuning, atau keruh", "• Tidak mengikuti pola haid yang biasa", "", "Hukum saat istihadhah:", "✓ Tetap wajib shalat (dengan berwudhu setiap waktu)", "✓ Tetap wajib puasa", "✓ Boleh membaca Al-Qur'an", "✓ Boleh masuk masjid", "✓ Namun tetap harus menjaga kebersihan dengan mengganti pembalut secara rutin"]
  }, {
    icon: CheckCircle,
    title: "Cara Membedakan Haid dan Istihadhah",
    content: ["1. Berdasarkan Durasi:", "• Haid: 1-15 hari", "• Istihadhah: Lebih dari 15 hari", "", "2. Berdasarkan Warna:", "• Haid: Hitam, merah gelap, coklat tua", "• Istihadhah: Merah terang, kekuningan, keruh", "", "3. Berdasarkan Adat (Kebiasaan):", "• Jika kamu memiliki siklus haid tetap (misal: 7 hari setiap bulan), maka darah yang keluar pada hari ke-1 sampai ke-7 adalah haid", "• Darah yang keluar setelah hari ke-7 adalah istihadhah", "", "4. Konsultasi dengan Ahli:", "• Jika masih ragu, sebaiknya konsultasi dengan ustadzah atau ahli fiqih", "• Dokumentasikan pola haid bulananmu untuk membantu identifikasi"]
  }, {
    icon: BookOpen,
    title: "Ketentuan Shalat Ketika Haid/Istihadhah",
    content: ["Ketentuan saat Haid:", "• Tidak wajib shalat selama masa haid", "• Tidak perlu mengqadha shalat yang ditinggalkan saat haid", "• Setelah suci, langsung mandi junub dan mulai shalat seperti biasa", "• Jika suci sebelum waktu shalat habis (misal: suci sebelum maghrib), wajib shalat pada waktu tersebut", "", "Ketentuan saat Istihadhah:", "• Tetap wajib shalat", "• Berwudhu setiap kali akan shalat", "• Menjaga kebersihan dengan mengganti pembalut", "• Boleh menggabungkan niat wudhu dengan tayammum jika khawatir", "", "Qadha Shalat:", "• Jika suci sebelum Maghrib → Qadha Dhuhur & Ashar", "• Jika suci sebelum tengah malam → Qadha Maghrib & Isya", "• Jika suci sebelum Subuh → Qadha Subuh"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-hero shadow-soft mb-6">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Panduan Edukasi Islami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari lebih dalam tentang hukum haid dan istihadhah dalam Islam
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article, index) => <Card key={index} className="p-8 shadow-soft rounded-3xl bg-gradient-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-hero shadow-soft">
                  <article.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">
                  {article.title}
                </h2>
              </div>
              
              <div className="space-y-2 text-card-foreground">
                {article.content.map((line, lineIndex) => {})}
              </div>
            </Card>)}
        </div>

        <Card className="mt-12 p-8 rounded-3xl bg-accent/20">
          <p className="text-center text-card-foreground leading-relaxed">
            <strong className="text-accent-foreground text-lg">Disclaimer:</strong>
            <br />
            Informasi di atas adalah panduan umum berdasarkan literatur Islam. 
            Untuk kasus spesifik atau kondisi medis tertentu, sebaiknya konsultasikan 
            dengan ustadzah, ahli fiqih, atau tenaga medis profesional.
          </p>
        </Card>
      </div>
    </div>;
};
export default Education;