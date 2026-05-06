import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-purple-50/40 to-pink-50/30" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Mulai tingkatkan performa akun Anda hari ini</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Bergabunglah dengan ribuan kreator dan bisnis yang telah meningkatkan followers mereka dengan sistem AI kami.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base">
            Mulai Sekarang
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base">
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  )
}
