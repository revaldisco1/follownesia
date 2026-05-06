import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const packages = [
    {
      name: "Starter Growth",
      description: "Untuk akun baru yang ingin mulai berkembang",
      price: "Rp 99.000",
      period: "/bulan",
      highlight: false,
      badge: null,
      growthEstimate: "±1000 – 2000 followers",
      features: [
        "Optimasi distribusi awal",
        "Analisis performa dasar",
        "Dashboard tracking",
        "Insight sederhana",
      ],
      cta: "Mulai Sekarang",
    },
    {
      name: "Boost Growth",
      description: "Untuk meningkatkan followers & engagement lebih cepat",
      price: "Rp 299.000",
      period: "/bulan",
      highlight: true,
      badge: "⭐ Paling Dipilih",
      growthEstimate: "±3000 – 6000 followers",
      features: [
        "Semua fitur Starter",
        "Optimasi distribusi lebih agresif",
        "Growth tracking real-time",
        "Analisis performa mendalam",
        "Rekomendasi strategi AI",
        "A/B testing konten",
      ],
      cta: "Pilih Paket",
    },
    {
      name: "Scale Growth",
      description: "Untuk bisnis & brand yang ingin scaling maksimal",
      price: "Rp 699.000",
      period: "/bulan",
      highlight: false,
      badge: null,
      growthEstimate: "±8000 – 15000 followers",
      features: [
        "Semua fitur Boost",
        "Strategi custom growth",
        "Advanced audience targeting",
        "Prioritas optimasi sistem",
        "Support prioritas",
      ],
      cta: "Mulai Sekarang",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">Paket Growth Followers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan tujuan pertumbuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                pkg.highlight 
                  ? "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-purple-300 shadow-2xl md:scale-105" 
                  : "bg-white hover:shadow-lg"
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-2xl mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900 font-semibold">🎯 Estimasi pertumbuhan audience</p>
                  <p className="text-sm text-blue-800">(setara {pkg.growthEstimate})</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{pkg.period}</span>
                </div>
              </div>

              <Button
                className={`w-full mb-8 rounded-full py-6 text-base font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-purple-500 text-white hover:bg-purple-600"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {pkg.cta}
              </Button>

              <div className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-purple-500" : "text-green-500"}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground mb-6">
            Semua paket dirancang untuk optimasi pertumbuhan Instagram & TikTok secara bertahap dan terukur
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-900 font-semibold">✓ Garansi jika tidak ada results uang kembali</p>
          </div>
          <p className="text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
            ⚡ Akses terbatas untuk menjaga kualitas performa sistem
          </p>
        </div>
      </div>
    </section>
  )
}
