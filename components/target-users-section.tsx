import { Users, Briefcase, Building2 } from "lucide-react"

export function TargetUsersSection() {
  const users = [
    {
      icon: Users,
      title: "Content Creator",
      subtitle: "Kreator Konten",
      description: "Meningkatkan reach & followers",
      color: "bg-pink-500",
    },
    {
      icon: Briefcase,
      title: "UMKM",
      subtitle: "Usaha Kecil Menengah",
      description: "Meningkatkan social proof & penjualan",
      color: "bg-blue-500",
    },
    {
      icon: Building2,
      title: "Brand",
      subtitle: "Perusahaan & Brand",
      description: "Scaling audience & engagement",
      color: "bg-green-500",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Siapa yang Cocok Menggunakan Ini?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sistem kami dirancang untuk berbagai tipe pengguna yang ingin mengakselerasi pertumbuhan social media mereka
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user, index) => {
            const IconComponent = user.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl ${user.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2">{user.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{user.subtitle}</p>
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground text-sm">
                    <span className="text-foreground font-semibold">Tujuan:</span> {user.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
