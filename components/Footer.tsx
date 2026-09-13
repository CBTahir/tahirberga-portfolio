import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
