import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Follownesia - Cara Menambah Followers Instagram & TikTok dengan AI Growth System",
  description: "Tingkatkan followers Instagram & TikTok dengan sistem AI Growth terbukti. Digunakan 5000+ kreator & UMKM Indonesia. Garansi hasil atau uang kembali.",
  keywords: "tambah followers instagram, cara menambah followers tiktok, growth system instagram, algoritma instagram 2025, followers growth",
  generator: "Next.js",
  applicationName: "Follownesia",
  creator: "Follownesia Team",
  publisher: "Follownesia",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://follownesia.id"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://follownesia.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://follownesia.id",
    siteName: "Follownesia",
    title: "Follownesia - Cara Menambah Followers Instagram & TikTok dengan AI",
    description: "Platform terpercaya untuk meningkatkan followers Instagram dan TikTok dengan sistem AI Growth yang terbukti efektif.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cara%20Mendapatkan%20Followers-wjjO3rGl62x8pvr3MI37JQjNqcuO93.png",
        width: 1200,
        height: 630,
        alt: "Follownesia - AI Growth System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Follownesia - Cara Menambah Followers Instagram & TikTok",
    description: "Tingkatkan followers dengan sistem AI Growth yang terbukti efektif. Garansi hasil atau uang kembali.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cara%20Mendapatkan%20Followers-wjjO3rGl62x8pvr3MI37JQjNqcuO93.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "add-your-google-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69dfc321635de81c34a2f6a0/1jm914f6e';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
