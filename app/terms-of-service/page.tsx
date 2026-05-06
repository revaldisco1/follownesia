import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service Follownesia",
  description: "Baca syarat dan ketentuan penggunaan layanan Follownesia untuk memahami hak dan kewajiban Anda.",
  keywords: "terms of service, syarat dan ketentuan, terms and conditions, user agreement",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl mb-4">Syarat dan Ketentuan</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: April 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-bold text-2xl mb-4">1. Penerimaan Syarat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dengan mengakses dan menggunakan situs https://follownesia.id, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan perjanjian ini. Jika Anda tidak setuju dengan bagian apa pun dari syarat ini, maka Anda mungkin tidak dapat menggunakan Situs ini.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">2. Lisensi Penggunaan</h2>
              <p className="text-muted-foreground leading-relaxed">
                Izin diberikan untuk sementara mengunduh satu salinan bahan (informasi atau perangkat lunak) di situs Follownesia untuk akses dan penggunaan pribadi Anda saja. Ini adalah pemberian lisensi, bukan transfer kepemilikan, dan di bawah lisensi ini Anda mungkin tidak:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Memodifikasi atau menyalin materi</li>
                <li>Menggunakan materi untuk tujuan komersial atau untuk penggunaan publik apa pun</li>
                <li>Mencoba mendekompilasi atau merekayasa balik perangkat lunak apa pun yang terdapat di situs Follownesia</li>
                <li>Menghapus atau mengubah pemberitahuan hak cipta atau kepemilikan lainnya dari materi</li>
                <li>Mentransfer materi ke orang lain atau "mencerminkan" materi di server lain</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">3. Akun Pengguna</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ketika Anda membuat akun dengan kami, Anda harus memberikan informasi yang akurat, lengkap, dan terkini. Anda bertanggung jawab untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Menjaga kerahasiaan password Anda</li>
                <li>Menerima tanggung jawab untuk semua aktivitas yang terjadi di bawah akun Anda</li>
                <li>Memberi tahu kami segera tentang penggunaan akun Anda yang tidak sah</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">4. Layanan dan Paket</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami menyediakan layanan growth berbasis AI untuk membantu meningkatkan followers Instagram dan TikTok Anda. Paket yang tersedia antara lain Starter, Boost, dan Scale dengan fitur-fitur yang berbeda. Perincian lengkap tersedia di halaman Paket kami.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami memberikan garansi bahwa jika tidak ada results, Anda bisa mendapatkan uang kembali sepenuhnya sesuai dengan kebijakan refund kami.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">5. Pembayaran dan Penagihan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan membeli paket dari kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Memberikan informasi pembayaran yang akurat dan lengkap</li>
                <li>Membayar semua biaya dan penagihan yang timbul dari penggunaan layanan Anda</li>
                <li>Membayar dalam mata uang yang ditentukan pada waktu pembelian</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">6. Kebijakan Pengembalian Dana</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami menawarkan garansi: jika tidak ada results yang terukur dari layanan kami, Anda dapat meminta pengembalian dana penuh. Permintaan pengembalian dana harus dilakukan dalam 60 hari sejak tanggal pembelian. Untuk memproses pengembalian dana, hubungi kami di refund@follownesia.id dengan bukti pembelian Anda.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">7. Batasan Tanggung Jawab</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dalam keadaan apa pun Follownesia.id, direktur, karyawan, atau agennya tidak akan bertanggung jawab kepada Anda atas kerusakan langsung, tidak langsung, insidental, khusus, atau akibat yang timbul dari atau berkaitan dengan penggunaan Situs ini atau materi yang ditemukan di Situs ini.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">8. Pelarangan Konten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anda tidak diizinkan untuk memposting konten atau menggunakan layanan kami dengan cara yang:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Melanggar hukum atau mendorong aktivitas ilegal</li>
                <li>Melecehkan atau membahayakan orang lain</li>
                <li>Meniru atau menyerupai konten yang melanggar hak kekayaan intelektual</li>
                <li>Menyebarkan spam atau materi berbahaya</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">9. Terminasi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami dapat mengakhiri atau menangguhkan akun Anda dan akses ke Situs ini seketika, tanpa pemberitahuan sebelumnya atau tanggung jawab, karena alasan apa pun, termasuk jika Anda melanggar Syarat ini.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">10. Perubahan Syarat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami berhak memodifikasi syarat ini kapan saja. Perubahan akan efektif segera setelah diposting di Situs. Penggunaan Situs yang berkelanjutan oleh Anda setelah perubahan seperti itu berarti Anda menerima dan setuju dengan modifikasi tersebut.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl mb-4">11. Hubungi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:<br />
                <span className="font-semibold">Email:</span> legal@follownesia.id<br />
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
