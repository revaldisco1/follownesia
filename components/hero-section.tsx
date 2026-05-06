import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/50 to-pink-50/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Cara Menambah Followers Instagram & TikTok dengan AI Growth System
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Optimalkan jangkauan, engagement, dan pertumbuhan audience Instagram & TikTok melalui sistem distribusi konten berbasis AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base">
              Mulai Sekarang
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base">
              Coba Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            ✨ Digunakan oleh kreator & bisnis di Indonesia
          </p>
        </div>

        <div className="mt-12">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
