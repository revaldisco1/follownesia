import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Zap, Users, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Follownesia - Platform Terpercaya Followers Growth Indonesia",
  description: "Pelajari tentang misi, visi, dan nilai-nilai Follownesia dalam membantu kreator dan bisnis meningkatkan followers Instagram & TikTok dengan teknologi AI terdepan.",
  keywords: "tentang kami, followers growth platform, AI marketing Indonesia, growth strategy, digital marketing",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Tentang Follownesia
            </h1>
            <p className="text-xl text-muted-foreground">
              Kami adalah platform terdepan dalam membantu content creator dan bisnis meningkatkan followers Instagram dan TikTok mereka dengan strategi berbasis AI.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="font-bold text-3xl mb-4">Misi Kami</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Memberdayakan content creator dan bisnis di Indonesia untuk mencapai pertumbuhan audience yang berkelanjutan dan terukur melalui teknologi AI yang inovatif dan strategi yang terbukti efektif.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-bold text-3xl mb-4">Visi Kami</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Menjadi platform pertumbuhan social media terpercaya di Asia Tenggara yang membantu ribuan kreator membangun presence digital mereka dengan cara yang authentic dan sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Inovasi",
                  description: "Kami terus berinovasi menggunakan AI dan teknologi terbaru untuk memberikan solusi terbaik."
                },
                {
                  icon: Users,
                  title: "Integritas",
                  description: "Kami berkomitmen pada praktik bisnis yang etis dan transparan dalam setiap aspek."
                },
                {
                  icon: Target,
                  title: "Hasil Nyata",
                  description: "Fokus kami adalah menghasilkan pertumbuhan yang terukur dan sustainable untuk setiap klien."
                },
                {
                  icon: CheckCircle,
                  title: "Dukungan",
                  description: "Tim kami siap memberikan dukungan terbaik untuk kesuksesan Anda di setiap langkah."
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-8 text-center border">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-center">Tim Kami</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
              Dipimpin oleh para ahli di bidang digital marketing, teknologi AI, dan growth strategy.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmad Rizki",
                  role: "Founder & CEO",
                  bio: "Pengalaman 10+ tahun dalam digital marketing dan growth strategy"
                },
                {
                  name: "Siti Nurhaliza",
                  role: "Chief Technology Officer",
                  bio: "Expert dalam AI dan machine learning untuk social media optimization"
                },
                {
                  name: "Budi Santoso",
                  role: "Head of Growth",
                  bio: "Spesialis dalam strategi pertumbuhan dan marketing campaigns"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-6">Ingin Bergabung dengan Kami?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Hubungi kami untuk diskusi lebih lanjut tentang bagaimana kami dapat membantu pertumbuhan bisnis Anda.
            </p>
            <a href="/kontak" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
