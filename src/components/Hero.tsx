import type { CSSProperties } from "react";
import { coreSkills, projects } from "../data/projects";

const metrics = [
  { value: "5+", label: "주요 실무 프로젝트" },
  { value: "100+", label: "동시 제어 대상" },
  { value: "3", label: "DB 설계/구축 경험" },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <nav className="top-nav" aria-label="주요 메뉴">
        <a className="brand" href="#top">System Developer</a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">C#/.NET · Real-time Control · Training System</p>
          <h1>
            실시간 제어와 훈련 데이터를 다루는
            <span> 응용 소프트웨어 개발자</span>
          </h1>
          <p className="hero-description">
            PLC, VR 디바이스, 라즈베리파이, 항공 훈련 데이터처럼 실제 장비와 맞닿은 시스템을
            C#/.NET 중심으로 개발해왔습니다. 통신, 데이터베이스, 제어 UI, 리플레이 구조까지
            현장에서 필요한 기능을 끝까지 구현하는 개발자입니다.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#projects">프로젝트 보기</a>
            <a className="secondary-action" href="#expertise">핵심 역량</a>
          </div>

          <div className="metrics" aria-label="주요 지표">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="system-panel" aria-label="개발 영역 요약">
          <div className="panel-header">
            <span className="status-dot" />
            <span>Live System Stack</span>
          </div>
          <div className="orbit-map">
            <div className="core-node">C#/.NET</div>
            <span style={{ "--i": 0 } as CSSProperties}>PLC</span>
            <span style={{ "--i": 1 } as CSSProperties}>UDP</span>
            <span style={{ "--i": 2 } as CSSProperties}>DB</span>
            <span style={{ "--i": 3 } as CSSProperties}>XR</span>
            <span style={{ "--i": 4 } as CSSProperties}>ADB</span>
            <span style={{ "--i": 5 } as CSSProperties}>HLA</span>
          </div>
          <div className="signal-list">
            {projects.slice(0, 3).map((project) => (
              <div key={project.title}>
                <span>{project.category}</span>
                <strong>{project.systems[0]}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skill-marquee" aria-label="기술 스택">
        <div>
          {[...coreSkills, ...coreSkills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
