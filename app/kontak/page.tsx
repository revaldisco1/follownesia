import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Hubungi Follownesia - Layanan Followers Growth Indonesia",
  description: "Hubungi tim Follownesia untuk konsultasi gratis tentang strategi pertumbuhan followers Instagram & TikTok. Tersedia via WhatsApp, email, atau form kontak.",
  keywords: "hubungi kami, kontak Follownesia, konsultasi growth, customer service, dukungan pelanggan",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Hubungi Kami
            </h1>
            <p className="text-xl text-muted-foreground">
              Ada pertanyaan? Tim kami siap membantu Anda. Hubungi kami melalui berbagai channel yang tersedia.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-3xl mb-8">Informasi Kontak</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@follownesia.id</p>
                    <p className="text-muted-foreground">support@follownesia.id</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telepon</h3>
                    <p className="text-muted-foreground">+62 821 2345 6789</p>
                    <p className="text-sm text-muted-foreground mt-2">Senin-Jumat: 09:00 - 18:00 WIB</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Teknologi No. 123<br />
                      Jakarta Selatan, 12345<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Jam Operasional</h3>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 09:00 - 18:00<br />
                      Sabtu: 10:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  {[
                    { label: "Instagram", href: "https://instagram.com/follownesia" },
                    { label: "TikTok", href: "https://tiktok.com/@follownesia" },
                    { label: "LinkedIn", href: "https://linkedin.com/company/follownesia" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border rounded-xl p-8">
              <h2 className="font-bold text-2xl mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+62 8xx xxxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subjek pesan Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button className="w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700 py-2">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Pertanyaan Umum</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Berapa lama waktu untuk melihat hasil?",
                  a: "Hasil awal biasanya terlihat dalam 2-4 minggu. Pertumbuhan yang optimal memerlukan waktu 4-8 minggu tergantung kondisi akun Anda."
                },
                {
                  q: "Apakah ada garansi uang kembali?",
                  a: "Ya, kami menawarkan garansi jika tidak ada results, Anda bisa mendapatkan uang kembali sepenuhnya."
                },
                {
                  q: "Apa paket yang paling populer?",
                  a: "Paket Boost adalah yang paling populer di antara content creator karena menawarkan balance terbaik antara harga dan hasil."
                },
                {
                  q: "Apakah bisa cancel kapan saja?",
                  a: "Ya, Anda bisa cancel subscription kapan saja tanpa commitment jangka panjang."
                },
              ].map((item, index) => (
                <details key={index} className="bg-white border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold flex items-center gap-2">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                    {item.q}
                  </summary>
                  <p className="text-muted-foreground mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
