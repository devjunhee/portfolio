import { Github, Mail, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
            Application & Backend Developer
          </p>

          <h1 className="text-6xl font-black leading-tight text-white">
            김준희
          </h1>

          <h2 className="text-2xl mt-3 font-semibold text-zinc-300">
            C# · .NET · Database · Industrial Software
          </h2>

          <p className="mt-8 text-zinc-400 leading-8 text-lg max-w-xl">
            방산, 항공, Digital Twin, 산업용 IoT 프로젝트에서
            <br />
            기획 · 설계 · 개발 · 시험 · 운영까지 수행한
            응용 소프트웨어 및 백엔드 개발자입니다.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://github.com/devjunhee"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="mailto:kjhh4523@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-white hover:border-orange-400 transition"
            >
              <Mail size={18} />
              Contact
            </a>

            <a
              href="/portfolio/resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="w-[430px] rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">

            <div className="aspect-[4/3] bg-zinc-800 flex items-center justify-center text-zinc-500">

              <span>
                대표 프로젝트 이미지
                <br />
                (JIB 메인 화면 넣기)
              </span>

            </div>

            <div className="p-6">

              <h3 className="text-xl font-bold text-white">
                한화에너지 JIB
              </h3>

              <p className="text-zinc-400 mt-2">
                LIDAR · AI Camera · PLC 기반
                실시간 크레인 충돌방지 모니터링 시스템
              </p>

              <div className="flex flex-wrap gap-2 mt-5">

                {[
                  "C#",
                  ".NET",
                  "MSSQL",
                  "PLC",
                  "LIDAR",
                  "AI Camera",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 animate-bounce">

        <ChevronDown className="text-zinc-500" size={36} />

      </div>

    </section>
  );
}