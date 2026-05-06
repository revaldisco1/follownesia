import { Brain, Share2, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Optimization Engine untuk Instagram & TikTok",
      description: "Menganalisis performa konten Instagram dan TikTok untuk meningkatkan jangkauan maksimal",
      color: "bg-blue-500",
    },
    {
      icon: Share2,
      title: "Smart Distribution",
      description: "Mendistribusikan konten ke audience yang lebih luas di Instagram dan TikTok",
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "Memantau peningkatan followers dan engagement secara real-time untuk kedua platform",
      color: "bg-green-500",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">Fitur Unggulan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Platform kami dilengkapi dengan teknologi AI terdepan untuk memaksimalkan pertumbuhan akun Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
