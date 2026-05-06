import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-red-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
            Kenapa Followers Instagram & TikTok Sulit Bertambah?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tanpa distribusi yang tepat, konten sulit berkembang meskipun kualitasnya baik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Problem 1 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Konten tidak mendapatkan jangkauan maksimal</h3>
                <p className="text-muted-foreground text-sm">
                  Meskipun konten berkualitas, algoritma tidak menampilkannya ke audience yang tepat tanpa strategi yang jelas.
                </p>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Engagement awal rendah</h3>
                <p className="text-muted-foreground text-sm">
                  Tanpa engagement awal yang kuat, konten tidak masuk algoritma dan tertanam di deep feed.
                </p>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sulit masuk algoritma platform</h3>
                <p className="text-muted-foreground text-sm">
                  Algoritma Instagram dan TikTok kompleks dan terus berubah, membuat organik growth sulit diprediksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
