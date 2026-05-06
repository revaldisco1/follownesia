import { TrendingUp, Zap, Target } from "lucide-react"

export function ResultsSection() {
  const results = [
    {
      icon: TrendingUp,
      title: "Peningkatan jangkauan konten",
      description: "Konten Anda akan mencapai audience yang jauh lebih luas dengan strategi distribusi yang tepat",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "Engagement lebih aktif",
      description: "Followers baru yang Anda dapatkan adalah audience aktif yang benar-benar tertarik dengan konten Anda",
      color: "bg-purple-500",
    },
    {
      icon: Target,
      title: "Pertumbuhan followers lebih stabil",
      description: "Pertumbuhan followers konsisten setiap bulannya tanpa naik turun drastis",
      color: "bg-green-500",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Hasil yang Umum Terlihat
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang telah merasakan peningkatan signifikan dalam pertumbuhan followers mereka
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-lg ${result.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{result.title}</h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-500 mb-2">Signifikan</div>
            <p className="text-muted-foreground">Peningkatan jangkauan (berdasarkan data pengguna)</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-500 mb-2">Konsisten</div>
            <p className="text-muted-foreground">Peningkatan engagement yang lebih terukur</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-500 mb-2">2-4 minggu</div>
            <p className="text-muted-foreground">Hasil awal terlihat</p>
          </div>
        </div>
      </div>
    </section>
  )
}
