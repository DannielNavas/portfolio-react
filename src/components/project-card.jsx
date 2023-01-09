import "./project-card.css";
export function ProjectCard({ project }) {
  return (
    <article className="article-card projects">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a target="_blank" rel="noreferrer" href={project.html_url}>
        Ver proyecto
      </a>
    </article>
  );
}
