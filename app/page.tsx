import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { TargetUsersSection } from "@/components/target-users-section"
import { TargetPlatformSection } from "@/components/target-platform-section"
import { PricingSection } from "@/components/pricing-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ResultsSection } from "@/components/results-section"
import { SeoSection } from "@/components/seo-section"
import { HowItWorks } from "@/components/how-it-works"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Follownesia - Cara Menambah Followers Instagram & TikTok dengan AI",
  description: "Tingkatkan followers Instagram & TikTok hingga 1000+ dalam 4-8 minggu dengan sistem AI Growth terbukti. Digunakan 5000+ kreator Indonesia. Garansi hasil atau uang kembali.",
  keywords: "tambah followers instagram, cara menambah followers tiktok, growth system, followers growth, strategi instagram, algoritma tiktok",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TargetUsersSection />
      <TargetPlatformSection />
      <PricingSection />
      <ComparisonSection />
      <ResultsSection />
      <SeoSection />
      <HowItWorks />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
