import { CheckCircle2 } from "lucide-react"

export function TargetPlatformSection() {
  const features = [
    "Optimasi performa konten Instagram",
    "Peningkatan exposure video TikTok",
    "Strategi distribusi audience yang lebih luas",
    "Monitoring growth secara real-time",
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
              Fokus pada Growth Instagram & TikTok
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sistem ini dirancang khusus untuk membantu akun Instagram dan TikTok berkembang melalui pendekatan distribusi konten, optimasi algoritma, dan peningkatan engagement awal.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Instagram Optimization</h3>
              <p className="text-sm text-muted-foreground">Optimasi konten feed, Reels, dan Stories untuk jangkauan maksimal</p>
            </div>

            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                <span className="text-white text-xl">♪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">TikTok Growth</h3>
              <p className="text-sm text-muted-foreground">Strategi viral dan FYP optimization untuk exposure maksimal</p>
            </div>

            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Analytics & Insights</h3>
              <p className="text-sm text-muted-foreground">Data mendalam tentang audience dan performa konten real-time</p>
            </div>

            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sustainable Growth</h3>
              <p className="text-sm text-muted-foreground">Pertumbuhan organik yang stabil tanpa risiko untuk akun Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
