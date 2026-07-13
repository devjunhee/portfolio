import { profile } from "../../data/projects";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h2>김준희 Portfolio</h2>
          <p>
            C#/.NET 기반 산업용 소프트웨어 및 백엔드 개발자
          </p>
        </div>

        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href={`mailto:${profile.email}`}>
            Email
          </a>

          <a href="/portfolio/projects">
            Projects
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Kim Junhee. All rights reserved.
      </div>
    </footer>
  );
}