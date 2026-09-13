import type { Metadata } from "next";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about,
  alternates: { canonical: "/about" },
};

const sections = [
  {
    title: "Now",
    text: profile.current,
  },
  {
    title: "Security Work",
    text: profile.security,
  },
  {
    title: "Direction",
    text: profile.direction,
  },
] as const;

export default function AboutPage() {
  return (
    <section className="page shell about-page">
      <div className="about-hero">
        <p className="kicker">ABOUT</p>
        <h1 className="page-title">{profile.name}</h1>
        <div className="lead-copy">
          <p>{profile.intro}</p>
          <p>{profile.about}</p>
        </div>
      </div>

      <div className="about-layout">
        <div className="about-stack">
          {sections.map((section) => (
            <section className="about-section" key={section.title}>
              <p className="section-label">{section.title}</p>
              <p>{section.text}</p>
            </section>
          ))}
        </div>

        <aside className="about-aside" aria-label="Profile details">
          <div>
            <p className="section-label">Location</p>
            <p>{profile.location}</p>
          </div>
          <div>
            <p className="section-label">Interests</p>
            <ul className="interest-list">
              {profile.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
