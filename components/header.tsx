import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full py-4 px-6 bg-background border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-follownesia-WdKzBGgihvcvl5WjKaGvVS0QBzjcR3.png" 
              alt="Follownesia Logo" 
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#fitur" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Fitur
            </Link>
            <Link href="/#paket" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Paket
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/tentang-kami" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Kontak
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Masuk
            </Button>
            <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Daftar
            </Button>
          </div>
        </div>
      </header>

    </>
  )
}
