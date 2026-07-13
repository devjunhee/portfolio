import { Link } from "react-router-dom";
import { projects } from "../data/projects";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function ProjectsPage() {
  return (
      <>
    <Navbar />
    <main className="page">
      <section className="section">
        <div className="page-header">
          <p className="eyebrow">Projects</p>
          <h1>프로젝트 전체 보기</h1>
          <p>
            방산, 항공, Digital Twin, 산업용 IoT, Android 및 웹 시스템
            프로젝트를 정리했습니다.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-list-card"
            >
              <div className="project-list-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-list-placeholder">
                    <span>{project.category}</span>
                    <small>Project Image</small>
                  </div>
                )}
              </div>

              <div className="project-list-body">
                <div className="project-list-meta">
                  <span>{project.category}</span>
                  <span>{project.period}</span>
                </div>

                <h2>{project.title}</h2>
                <p>{project.summary}</p>

                <div className="project-list-tags">
                  {project.techs.slice(0, 6).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-list-link">
                  자세히 보기 →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer />
      </>
  );
}