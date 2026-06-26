import type { CSSProperties } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const expertise = [
  {
    title: "Real-time Communication",
    body: "TCP/UDP 기반 장비 제어, 상태 수집, 다중 프로그램 동기화 경험",
  },
  {
    title: "Control Application",
    body: "WinForms, WPF, Windows IoT, 라즈베리파이 UI까지 운영 환경에 맞춘 앱 개발",
  },
  {
    title: "Database Architecture",
    body: "PostgreSQL, MS SQL 기반 훈련/장비 데이터 저장 구조 설계 및 구축",
  },
  {
    title: "Training Replay System",
    body: "오디오, 영상, 항공 데이터, 훈련 로그를 저장하고 재생하는 리플레이 기능 구현",
  },
];

export default function Projects() {
  return (
    <>
      <section id="expertise" className="section expertise-section">
        <div className="section-heading">
          <p>Expertise</p>
          <h2>장비와 데이터가 동시에 움직이는 시스템을 개발합니다.</h2>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article key={item.title} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading wide">
          <p>Selected Projects</p>
          <h2>방산, XR, 시뮬레이터, 디지털트윈 영역에서 만든 실무 결과물</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="timeline" className="section timeline-section">
        <div className="section-heading">
          <p>Timeline</p>
          <h2>최근 프로젝트 흐름</h2>
        </div>

        <div className="timeline">
          {projects.map((project) => (
            <div key={project.title} className="timeline-item">
              <span>{project.period}</span>
              <strong>{project.title}</strong>
              <p>{project.category}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
