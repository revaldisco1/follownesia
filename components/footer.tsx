import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t">
      <div className="max-w-6xl mx-auto">
        {/* Navigation links */}
        <nav className="flex flex-wrap gap-6 mb-12">
          <Link href="/blog" className="text-sm hover:text-muted-foreground transition-colors">
            Blog
          </Link>
          <Link href="/tentang-kami" className="text-sm hover:text-muted-foreground transition-colors">
            Tentang Kami
          </Link>
          <Link href="/kontak" className="text-sm hover:text-muted-foreground transition-colors">
            Kontak
          </Link>
          <Link href="/kebijakan-privasi" className="text-sm hover:text-muted-foreground transition-colors">
            Kebijakan Privasi
          </Link>
        </nav>

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <p className="text-sm text-muted-foreground">© 2025 Follownesia.id. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/kebijakan-privasi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-follownesia-WdKzBGgihvcvl5WjKaGvVS0QBzjcR3.png" 
            alt="Follownesia Logo" 
            className="h-12 mx-auto"
          />
        </div>
      </div>
    </footer>
  )
}
