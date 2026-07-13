import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function ProjectDetailPage() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {

        return (
            <>
                <Navbar />
                <main className="page">
                    <section className="section not-found">
                        <p className="eyebrow">Project Not Found</p>
                        <h1>프로젝트를 찾을 수 없습니다.</h1>
                        <Link to="/projects" className="btn primary">
                            프로젝트 목록으로 돌아가기
                        </Link>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="page project-detail-page">
                <section className="section project-detail">
                    <Link to="/projects" className="back-link">
                        ← 프로젝트 목록
                    </Link>

                    <header className="detail-header">
                        <div>
                            <p className="eyebrow">{project.category}</p>
                            <h1>{project.title}</h1>
                            <p className="detail-summary">{project.summary}</p>
                        </div>

                        <div className="detail-meta-card">
                            <dl>
                                <div>
                                    <dt>연계 / 소속</dt>
                                    <dd>{project.company}</dd>
                                </div>
                                <div>
                                    <dt>수행 기간</dt>
                                    <dd>{project.period}</dd>
                                </div>
                                <div>
                                    <dt>규모</dt>
                                    <dd>{project.scale}</dd>
                                </div>
                                <div>
                                    <dt>주요 역할</dt>
                                    <dd>{project.role}</dd>
                                </div>
                            </dl>
                        </div>
                    </header>

                    <section className="detail-hero-image">
                        {project.image ? (
                           <img   src={`${import.meta.env.BASE_URL}${project.image}`}   alt={`${project.title} 대표 화면`}/>
                        ) : (
                            <div className="detail-image-placeholder">
                                <span>대표 프로젝트 이미지</span>
                                <small>
                                    public/images 폴더에 이미지를 넣고 projects.ts에 image 경로를 추가하세요.
                                </small>
                            </div>
                        )}
                    </section>

                    <section className="detail-section">
                        <div className="detail-section-heading">
                            <p>Overview</p>
                            <h2>프로젝트 개요</h2>
                        </div>

                        <div className="detail-two-column">
                            <article className="detail-card">
                                <h3>담당 시스템</h3>
                                <ul>
                                    {project.systems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="detail-card">
                                <h3>핵심 기술</h3>
                                <div className="detail-tags">
                                    {project.techs.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </section>

                    {(project.problem || project.solution || project.impact) && (
                        <section className="detail-section">
                            <div className="detail-section-heading">
                                <p>Case Study</p>
                                <h2>문제와 해결 과정</h2>
                            </div>

                            <div className="case-study-grid">
                                {project.problem && (
                                    <article className="detail-card case-study-card">
                                        <span className="case-label">Problem</span>
                                        <p>{project.problem}</p>
                                    </article>
                                )}

                                {project.solution && (
                                    <article className="detail-card case-study-card">
                                        <span className="case-label">Solution</span>
                                        <ul>
                                            {project.solution.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                )}

                                {project.impact && (
                                    <article className="detail-card case-study-card impact-card">
                                        <span className="case-label">Impact</span>
                                        <p>{project.impact}</p>
                                    </article>
                                )}
                            </div>
                        </section>
                    )}

                    <section className="detail-section">
                        <div className="detail-section-heading">
                            <p>Highlights</p>
                            <h2>주요 수행 내용</h2>
                        </div>

                        <ul className="detail-highlights">
                            {project.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="detail-section">
                        <div className="detail-section-heading">
                            <p>Gallery</p>
                            <h2>프로젝트 화면</h2>
                        </div>

                        {project.gallery && project.gallery.length > 0 ? (
                            <div className="detail-gallery">
                                {project.gallery.map((image, index) => (
                                    <img
                                        key={image}
                                        src={`${import.meta.env.BASE_URL}${image}`}
                                        alt={`${project.title} 화면 ${index + 1}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="gallery-placeholder">
                                <span>프로젝트 이미지 준비 중</span>
                                <small>
                                    projects.ts의 gallery 배열에 이미지 경로를 추가하면 표시됩니다.
                                </small>
                            </div>
                        )}
                    </section>

                    <div className="detail-bottom-actions">
                        <Link to="/projects" className="btn">
                            전체 프로젝트 보기
                        </Link>
                        <Link to="/" className="btn primary">
                            홈으로 이동
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    );
}