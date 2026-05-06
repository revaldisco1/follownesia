import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kebijakan Privasi Follownesia",
  description: "Pelajari bagaimana Follownesia melindungi dan mengelola data pribadi Anda dengan standar keamanan tertinggi.",
  keywords: "kebijakan privasi, perlindungan data, privacy policy, GDPR, keamanan data",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl mb-4">Kebijakan Privasi</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: April 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-bold text-2xl mb-4">1. Pendahuluan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Follownesia.id ("kami", "kami", atau "perusahaan kami") mengoperasikan situs web https://follownesia.id (selanjutnya disebut sebagai "Situs"). Halaman Kebijakan Privasi ini menginformasikan kepada Anda tentang kebijakan privasi kami dan bagaimana kami menangani informasi pribadi yang kami kumpulkan.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami mengumpulkan berbagai informasi dalam proses ini, antara lain:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Informasi akun (nama, email, nomor telepon)</li>
                <li>Data Instagram dan TikTok yang Anda hubungkan dengan platform kami</li>
                <li>Informasi pembayaran (diproses melalui gateway pembayaran aman)</li>
                <li>Data penggunaan situs (log akses, halaman yang dikunjungi, waktu kunjungan)</li>
                <li>Cookies dan informasi teknologi serupa</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menyediakan dan meningkatkan layanan kami</li>
                <li>Memproses pembayaran dan transaksi</li>
                <li>Mengirim notifikasi dan update tentang layanan</li>
                <li>Melakukan analisis untuk meningkatkan pengalaman pengguna</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">4. Keamanan Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami mengambil keamanan data Anda dengan serius dan menggunakan enkripsi SSL serta standar keamanan industri lainnya untuk melindungi informasi pribadi Anda dari akses, pengubahan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi melalui Internet yang 100% aman.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">5. Berbagi Informasi dengan Pihak Ketiga</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya berbagi informasi dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Penyedia layanan pembayaran (untuk memproses transaksi)</li>
                <li>Penyedia analytics (untuk meningkatkan layanan)</li>
                <li>Otoritas hukum jika diperlukan oleh undang-undang</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Situs kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Anda dapat mengatur browser Anda untuk menolak cookies atau untuk memberitahu Anda ketika cookie sedang dikirim. Namun, beberapa bagian dari Situs mungkin tidak berfungsi dengan baik jika Anda menonaktifkan cookies.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">7. Hak Pengguna</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Menolak pemrosesan data tertentu</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Untuk menggunakan hak-hak ini, silakan hubungi kami di privacy@follownesia.id.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">8. Perubahan Kebijakan Privasi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di Situs ini dan memperbarui tanggal "Terakhir Diperbarui" di bagian atas halaman ini.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">9. Hubungi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:<br />
                <span className="font-semibold">Email:</span> privacy@follownesia.id<br />
                <span className="font-semibold">Telepon:</span> +62 821 2345 6789
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
