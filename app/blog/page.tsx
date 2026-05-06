import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog Follownesia - Tips & Strategi Followers Instagram & TikTok",
  description: "Baca artikel terbaru tentang cara meningkatkan followers Instagram & TikTok, algoritma media sosial, dan strategi growth terbukti dari para ahli.",
  keywords: "blog Instagram, tips TikTok, strategi growth, algoritma Instagram 2025, viral content, engagement rate",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Cara Meningkatkan Engagement Instagram dengan Strategi Hashtag yang Tepat",
      excerpt: "Pelajari strategi hashtag terbaik untuk meningkatkan jangkauan dan engagement konten Instagram Anda secara signifikan.",
      date: "2025-04-10",
      author: "Follownesia Team",
      category: "Instagram",
      image: "https://images.unsplash.com/photo-1611532736900-6b086d8bc47e?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "5 Tip Membuat Konten TikTok yang Viral dan Menarik Perhatian",
      excerpt: "Dapatkan tips eksklusif tentang cara membuat konten TikTok yang engaging dan berpotensi tinggi untuk menjadi viral.",
      date: "2025-04-08",
      author: "Follownesia Team",
      category: "TikTok",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Algoritma Instagram 2025: Apa yang Perlu Anda Ketahui",
      excerpt: "Pahami bagaimana algoritma Instagram bekerja di tahun 2025 untuk mengoptimalkan visibilitas konten Anda.",
      date: "2025-04-05",
      author: "Follownesia Team",
      category: "Instagram",
      image: "https://images.unsplash.com/photo-1460925895917-aaf4f2d9a2d0?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Personal Branding di Social Media: Membangun Identitas Digital Anda",
      excerpt: "Panduan lengkap tentang cara membangun personal branding yang kuat di Instagram dan TikTok.",
      date: "2025-04-01",
      author: "Follownesia Team",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Blog Header */}
        <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Blog Follownesia
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, strategi, dan insight tentang cara meningkatkan followers Instagram dan TikTok Anda dengan efektif.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden bg-gray-200">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    </div>
                    <h2 className="font-bold text-xl mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
