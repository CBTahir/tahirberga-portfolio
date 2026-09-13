import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <section className="hero shell minimalist-shell">
      <p className="eyebrow">ABOUT</p>
      <h1>{profile.name}</h1>
      <p className="hero-copy">{profile.intro}</p>

      <div className="minimal-about">
        <p>{profile.about}</p>
      </div>

      <div className="hero-meta">
        <span>{profile.location}</span>
        <span>tahirberga.com</span>
      </div>
    </section>
  );
}
