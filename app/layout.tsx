import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  authors: [{ name: profile.fullName, url: profile.domain }],
  keywords: [
    profile.name,
    profile.fullName,
    profile.headline,
    profile.university,
    ...profile.interests,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.domain,
    title: `${profile.name} — ${profile.headline}`,
    description: profile.intro,
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.intro,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  url: profile.domain,
  jobTitle: profile.headline,
  description: profile.intro,
  sameAs: [profile.links.github, profile.links.linkedin],
  affiliation: profile.affiliations.map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.university },
  knowsAbout: profile.interests,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="background-grid" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
