export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Follownesia",
    "url": "https://follownesia.id",
    "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-follownesia-WdKzBGgihvcvl5WjKaGvVS0QBzjcR3.png",
    "description": "Platform terpercaya untuk meningkatkan followers Instagram dan TikTok dengan sistem AI Growth yang terbukti efektif.",
    "sameAs": [
      "https://www.instagram.com/follownesia",
      "https://www.tiktok.com/@follownesia",
      "https://www.youtube.com/@follownesia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "Customer Support",
      "email": "support@follownesia.id"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Growth Digital No. 123",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "areaServed": "ID",
    "priceRange": "IDR 99000 - IDR 999000"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function ProductStructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Follownesia Growth System",
    "description": "Platform AI Growth System untuk meningkatkan followers Instagram dan TikTok dengan cara yang aman dan terukur.",
    "brand": {
      "@type": "Brand",
      "name": "Follownesia"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Paket Starter",
        "price": "99000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Paket Boost",
        "price": "299000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Paket Scale",
        "price": "999000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2543",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah followers berasal dari pengguna aktif?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, sistem kami fokus pada distribusi konten ke pengguna aktif dan engagement-driven audience. Kami menggunakan AI untuk mengidentifikasi dan menjangkau audience yang sebenarnya tertarik dengan konten Anda, bukan bot atau followers palsu."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah sistem ini aman untuk akun Instagram & TikTok?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sangat aman. Kami hanya mengoptimalkan distribusi dan visibility konten Anda sesuai algoritma resmi Instagram dan TikTok. Semua strategi kami mematuhi kebijakan platform dan tidak menggunakan automation ilegal atau tools terlarang."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah hasilnya bisa cepat terlihat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hasil awal bisa terlihat dalam 2-4 minggu dengan engagement dan reach yang meningkat. Pertumbuhan followers yang konsisten memerlukan waktu 4-8 minggu tergantung kondisi akun dan konsistensi konten Anda."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}
