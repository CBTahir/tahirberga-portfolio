import Link from "next/link";

const nav = [["About", "/about"]] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Tahir Berga home">
          TB<span className="brand-dot">.</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
