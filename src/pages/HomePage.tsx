import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  profile,
  strengths,
  coreSkills,
  projects,
} from "../data/projects";

const featuredProjects = projects.slice(0, 5);

export default function HomePage() {
  return (
     <>
    <Navbar />
    <main id="top">

      {/* Hero */}

      <section className="hero section">
        <div className="hero-copy">

          <p className="eyebrow">
            Industrial Software · Backend · Control System
          </p>

          <h1>{profile.name}</h1>

          <h2>{profile.headline}</h2>

          <p className="hero-text">
            {profile.summary}
          </p>

          <div className="hero-actions">

            <a className="btn primary" href="/portfolio/projects">
              프로젝트 보기
            </a>

            <a
              className="btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

          <div className="metrics">

            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>DT/FAT/SAT</strong>
              <span>Integration Test</span>
            </div>

          </div>

        </div>

        <div className="system-card">

          <div className="card-header">

            <span />

            Live Project Stack

          </div>

          <div className="stack-core">
            C# /.NET
          </div>

          <div className="stack-lines">

            {[
              "PLC",
              "LiDAR",
              "AI Camera",
              "Android",
              "Database",
              "Replay",
            ].map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* About */}

      <section className="section about">

        <div className="section-title">

          <p>About</p>

          <h2>
            운영을 고려한 산업용 소프트웨어를 개발합니다.
          </h2>

        </div>

        <div className="about-grid">

          {strengths.map((item) => (

            <article
              key={item.title}
              className="glass-card"
            >

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>

          ))}

        </div>

      </section>

      {/* 대표 프로젝트 */}

      <section className="section">

        <div className="section-title">

          <p>Featured Projects</p>

          <h2>대표 프로젝트</h2>

        </div>

       <div className="mini-grid">
  {featuredProjects.map((project) => (
    <Link
      key={project.slug}
      className="mini-card"
      to={`/projects/${project.slug}`}
    >
      <div className="mini-card-image">
        {project.image ? (
         <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title}/>
        ) : (
          <div className="mini-card-placeholder">
            <span>{project.category}</span>
            <small>Project Image</small>
          </div>
        )}
      </div>

      <div className="mini-card-content">
        <span className="mini-card-period">{project.period}</span>

        <h3>{project.title}</h3>

        <p>{project.summary}</p>

        <div className="mini-card-tags">
          {project.techs.slice(0, 5).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <strong className="mini-card-link">
          자세히 보기 →
        </strong>
      </div>
    </Link>
  ))}
</div>

      </section>

      {/* Skills */}

      <section className="section">

        <div className="section-title">

          <p>Skills</p>

          <h2>Technology</h2>

        </div>

        <div className="skills">

          {coreSkills.map((skill) => (

            <span key={skill}>
              {skill}
            </span>

          ))}

        </div>

      </section>

    </main>
    <Footer />
      </>
  );
}