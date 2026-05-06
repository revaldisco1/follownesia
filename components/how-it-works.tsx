import { FileText, Globe, Upload, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6">Bagaimana Sistem Bekerja</span>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
            Sistem Growth Berbasis AI
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Platform ini membantu meningkatkan visibilitas konten melalui sistem optimasi distribusi dan exposure yang terarah, sehingga mendorong pertumbuhan followers dan engagement secara bertahap.
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">1. Analisis performa akun dan konten</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sistem AI kami menganalisis data akun Anda, performa konten, dan pola audience untuk mengidentifikasi peluang pertumbuhan yang optimal.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <AnalysisCard />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex justify-center">
            <OptimizationCard />
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-3xl mb-4">2. Optimasi distribusi konten</h3>
            <p className="text-muted-foreground leading-relaxed">
              Kami mengoptimalkan timing posting, hashtag strategy, dan format konten untuk memaksimalkan jangkauan organik di Instagram dan TikTok.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">3. Peningkatan exposure awal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategi exposure kami memastikan konten Anda mendapat engagement awal yang kuat untuk masuk algoritma, sehingga menjangkau audience yang lebih luas.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <ExposureCard />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <GrowthCard />
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-3xl mb-4">4. Pertumbuhan audience secara bertahap</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dengan optimasi berkelanjutan, followers dan engagement Anda tumbuh secara konsisten dan terukur tanpa risiko.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function AnalysisCard() {
  return (
    <div className="w-full max-w-sm bg-blue-50 rounded-2xl p-8 border border-blue-200">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
      </div>
      <h4 className="text-center font-semibold text-lg mb-3">Analisis Data Real-time</h4>
      <p className="text-center text-sm text-muted-foreground">Sistem AI memproses data akun Anda untuk menemukan pola pertumbuhan optimal</p>
    </div>
  )
}

function OptimizationCard() {
  return (
    <div className="w-full max-w-sm bg-purple-50 rounded-2xl p-8 border border-purple-200">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </div>
      <h4 className="text-center font-semibold text-lg mb-3">Optimasi Otomatis</h4>
      <p className="text-center text-sm text-muted-foreground">Distribusi konten dioptimalkan dengan strategi timing dan engagement yang tepat</p>
    </div>
  )
}

function ExposureCard() {
  return (
    <div className="w-full max-w-sm bg-pink-50 rounded-2xl p-8 border border-pink-200">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </div>
      <h4 className="text-center font-semibold text-lg mb-3">Exposure Maksimal</h4>
      <p className="text-center text-sm text-muted-foreground">Konten Anda menjangkau audience lebih luas melalui algoritma platform</p>
    </div>
  )
}

function GrowthCard() {
  return (
    <div className="w-full max-w-sm bg-green-50 rounded-2xl p-8 border border-green-200">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
      </div>
      <h4 className="text-center font-semibold text-lg mb-3">Pertumbuhan Terukur</h4>
      <p className="text-center text-sm text-muted-foreground">Followers dan engagement tumbuh konsisten dengan metrik yang jelas</p>
    </div>
  )
}
