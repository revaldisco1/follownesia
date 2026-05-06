import { CheckCircle } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-4xl mb-6">Solusi Growth Berbasis AI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Platform ini membantu meningkatkan visibilitas konten Instagram dan TikTok melalui sistem optimasi distribusi dan exposure yang terarah, sehingga mendorong pertumbuhan followers dan engagement secara bertahap.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analisis AI Mendalam</h3>
                <p className="text-sm text-muted-foreground">Sistem menganalisis setiap aspek akun dan konten Anda untuk hasil optimal</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Distribusi Teroptimasi</h3>
                <p className="text-sm text-muted-foreground">Konten didistribusikan pada waktu dan cara yang paling efektif</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Exposure Maksimal</h3>
                <p className="text-sm text-muted-foreground">Jangkauan konten diperluas ke audience yang paling relevan</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pertumbuhan Berkelanjutan</h3>
                <p className="text-sm text-muted-foreground">Followers tumbuh stabil tanpa risiko dari bot atau automation ilegal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
