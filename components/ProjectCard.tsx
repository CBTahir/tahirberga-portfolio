type Props = {
  name: string;
  description: string;
  tags: readonly string[];
  href: string;
};

export function ProjectCard({ name, description, tags, href }: Props) {
  const content = (
    <>
      <div className="project-topline">
        <h3>{name}</h3>
        <span aria-hidden="true">↗</span>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </>
  );

  if (href === "#") {
    return <article className="card project-card">{content}</article>;
  }

  return <a className="card project-card" href={href}>{content}</a>;
}
