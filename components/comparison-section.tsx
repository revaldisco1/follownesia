import { CheckCircle, AlertCircle, X } from "lucide-react"

export function ComparisonSection() {
  const approaches = [
    {
      title: "Tanpa strategi",
      result: "Tidak stabil",
      icon: X,
      color: "text-red-500",
      description: "Pertumbuhan tidak konsisten dan sulit diprediksi tanpa perencanaan yang matang",
    },
    {
      title: "Metode instan tidak terarah",
      result: "Berisiko",
      icon: AlertCircle,
      color: "text-yellow-500",
      description: "Menggunakan bot atau automation ilegal berisiko ban dan merugikan jangka panjang",
    },
    {
      title: "AI Growth System",
      result: "Stabil & optimal",
      icon: CheckCircle,
      color: "text-green-500",
      description: "Pertumbuhan terukur, berkelanjutan, dan aman sesuai kebijakan platform",
    },
  ]

  return (
    <>
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cara%20Mendapatkan%20Followers-wjjO3rGl62x8pvr3MI37JQjNqcuO93.png" 
            alt="Cara Mendapatkan Followers Instagram & TikTok" 
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Pendekatan Growth yang Lebih Efektif
            </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bandingkan berbagai pendekatan untuk meningkatkan followers dan pilih yang terbaik untuk akun Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            return (
              <div
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 ${
                  index === 2
                    ? "bg-white border-green-200 shadow-lg hover:shadow-xl"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className={`w-8 h-8 ${approach.color}`} />
                  <h3 className="font-bold text-lg">{approach.title}</h3>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className={`text-center font-bold text-lg ${approach.color}`}>
                    {approach.result}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm">{approach.description}</p>

                {index === 2 && (
                  <div className="mt-6 pt-6 border-t border-green-200">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Organik & aman</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Followers aktif</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Pertumbuhan berkelanjutan</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
