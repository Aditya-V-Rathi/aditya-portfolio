import './globals.css'
import { Syne, DM_Sans } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
})

export const metadata = {
  title: "Aditya Rathi — Software Engineer",
  description:
    "Aditya Rathi is a Software Engineer at Yardi Software India, building enterprise financial applications with C#, .NET, Angular, and AI-driven workflow automation using Flowise and MCP.",
  metadataBase: new URL("https://adityarathi.vercel.app"),
  keywords: [
    "Aditya Rathi",
    "Aditya Rathi Software Engineer",
    "Aditya Rathi Yardi",
    "Aditya Rathi Developer",
  ],
  authors: [{ name: "Aditya Rathi", url: "https://adityarathi.vercel.app" }],
  openGraph: {
    title: "Aditya Rathi — Software Engineer",
    description:
      "Software Engineer specializing in C#, .NET, Angular, and AI-driven workflow automation.",
    url: "https://adityarathi.vercel.app",
    siteName: "Aditya Rathi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Rathi — Software Engineer",
    description:
      "Software Engineer specializing in C#, .NET, Angular, and AI-driven workflow automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
       google: "lEUHZYVyRYJaiFiXXDyqUxoFIgAuY0mqS4ahGQT1uIY", // just the content value, not the full tag
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Rathi",
  url: "https://adityarathi.vercel.app",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Yardi Software India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Government College of Engineering, Aurangabad",
  },
  email: "mailto:rathiaditya.24@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/adityarathi24/",
    "https://github.com/Aditya-V-Rathi",
  ],
  knowsAbout: [
    "C#",
    ".NET",
    "Angular",
    "TypeScript",
    "React",
    "Next.js",
    "REST APIs",
    "AI workflow automation",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}