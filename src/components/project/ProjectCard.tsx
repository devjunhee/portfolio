import type { CSSProperties } from "react";
import type { Project } from "../../types/project";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
      <div className="project-topline">
        <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
        <span>{project.period}</span>
      </div>

      <div className="project-heading">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.scale}</span>
      </div>

      <p className="project-summary">{project.summary}</p>

      <dl className="project-meta">
        <div>
          <dt>연계/소속</dt>
          <dd>{project.company}</dd>
        </div>
        <div>
          <dt>주요 역할</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>

      <div className="system-tags">
        {project.systems.map((system) => (
          <span key={system}>{system}</span>
        ))}
      </div>

      <ul className="highlight-list">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="tech-row">
        {project.techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}
