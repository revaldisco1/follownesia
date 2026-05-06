"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Apakah followers berasal dari pengguna aktif?",
    answer:
      "Ya, sistem kami fokus pada distribusi konten ke pengguna aktif dan engagement-driven audience. Kami menggunakan AI untuk mengidentifikasi dan menjangkau audience yang sebenarnya tertarik dengan konten Anda, bukan bot atau followers palsu.",
  },
  {
    question: "Apakah sistem ini aman untuk akun Instagram & TikTok?",
    answer:
      "Sangat aman. Kami hanya mengoptimalkan distribusi dan visibility konten Anda sesuai algoritma resmi Instagram dan TikTok. Semua strategi kami mematuhi kebijakan platform dan tidak menggunakan automation ilegal atau tools terlarang.",
  },
  {
    question: "Apakah hasilnya bisa cepat terlihat?",
    answer:
      "Hasil awal bisa terlihat dalam 2-4 minggu dengan engagement dan reach yang meningkat. Pertumbuhan followers yang konsisten memerlukan waktu 4-8 minggu tergantung kondisi akun dan konsistensi konten Anda.",
  },
  {
    question: "Berapa followers agar bisa live TikTok?",
    answer:
      "TikTok memerlukan minimal 1000 followers untuk mengakses fitur live. Dengan sistem kami, Anda bisa mencapai target tersebut dalam waktu yang lebih singkat dengan pertumbuhan yang terukur dan berkelanjutan.",
  },
  {
    question: "Apakah bisa digunakan untuk akun baru?",
    answer:
      "Ya, sistem kami dirancang untuk akun baru maupun akun yang sudah established. Untuk akun baru, kami fokus pada pembangunan fondasi yang kuat dengan content strategy yang tepat sejak awal.",
  },
  {
    question: "Apakah cocok untuk bisnis atau UMKM?",
    answer:
      "Sangat cocok. Kami memiliki paket khusus untuk bisnis dan UMKM yang ingin meningkatkan awareness dan engagement dengan target audience mereka melalui Instagram dan TikTok.",
  },
  {
    question: "Apakah pertumbuhan followers stabil?",
    answer:
      "Ya, dengan pendekatan berbasis data dan AI, pertumbuhan followers Anda akan konsisten dan terukur. Kami menghindari pertumbuhan spike yang artificial dan fokus pada sustainable growth.",
  },
  {
    question: "Apakah tersedia paket yang bisa disesuaikan?",
    answer:
      "Tentu saja. Kami menyediakan paket Starter, Boost, dan Scale, serta tersedia custom package untuk kebutuhan khusus. Hubungi tim kami untuk diskusi lebih lanjut tentang paket yang sesuai dengan budget dan target Anda.",
  },
  {
    question: "Bagaimana sistem meningkatkan engagement?",
    answer:
      "Sistem kami mengoptimalkan timing posting, format konten, dan hashtag strategy untuk menciptakan engagement awal yang kuat. Engagement tinggi akan memicu algoritma Instagram dan TikTok untuk menampilkan konten Anda ke audience yang lebih luas.",
  },
  {
    question: "Apakah sistem ini cocok untuk personal brand?",
    answer:
      "Sangat cocok. Personal brand membutuhkan konsistensi dan strategi jangka panjang. Sistem kami membantu Anda membangun presence yang kuat di Instagram dan TikTok dengan cara yang authentic dan berkelanjutan.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl mb-8">
              Pertanyaan yang
              <br />
              sering diajukan
            </h2>
            <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm pr-4">{faq.question}</span>
                  <Plus
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
                {openIndex === index && <div className="pb-5 text-sm text-muted-foreground">{faq.answer}</div>}
              </div>
            ))}
            <div className="border-t" />
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FAQ-followers%20instagram%20tiktok%20indonesia-FCTu9btR9Dk9HKR0YOSEz07x69wjwO.png" 
              alt="FAQ Followers Instagram TikTok Indonesia" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
