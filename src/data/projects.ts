import type { Project } from "../types/project";

export const profile = {
  name: "김준희",
  title: "Application & Backend Developer",
  headline: "C#/.NET 기반 산업용 소프트웨어 · 백엔드 개발자",
  summary:
    "방산, 항공, Digital Twin, 산업용 IoT 프로젝트에서 기획·설계·개발·시험·운영까지 경험했습니다. 실시간 장비 데이터, DB, 제어 UI, 리플레이 구조를 현장 운영까지 고려해 개발합니다.",
  email: "kimjunhee4523@naver.com",
  github: "https://github.com/devjunhee",
  resume: "#contact",
};

export const coreSkills = [
  "C#",
  ".NET",
  "WPF",
  "WinForms",
  "Python",
  "Java(Android)",
  "PostgreSQL",
  "MS SQL",
  "MySQL",
  "TCP/UDP",
  "REST API",
  "PLC",
  "LiDAR",
  "Android",
  "HLA/RTI",
  "OpenCV",
];

export const strengths = [
  {
    title: "운영을 고려한 설계",
    description:
      "현장 장비 PC에서 코드 수정이 어려운 환경을 고려해 설정 UI, 로그, Replay 등 유지보수 기능을 설계했습니다.",
  },
  {
    title: "실시간 장비 연동",
    description:
      "PLC, LiDAR, AI Camera, VR Device, Android 기기 등 실제 장비 데이터를 수집·제어하는 시스템을 개발했습니다.",
  },
  {
    title: "체계통합·시험 경험",
    description:
      "방산·항공 프로젝트에서 DT, OT, FAT, SAT, 체계통합, 정적 분석, 신뢰성 검증을 경험했습니다.",
  },
  {
    title: "프로토타입 기반 협업",
    description:
      "요구사항이 구체화되지 않은 프로젝트에서 프로토타입을 먼저 제작하고 리뷰를 반복해 기능을 확정했습니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "jib",
    title: "한화에너지 JIB 크레인 충돌방지 모니터링 시스템 구축",
    company: "한화에너지 / 삼우이머션",
    period: "2026.05 ~ 진행중",
    role: "응용 소프트웨어 및 서버 개발 · 데이터베이스 구축 · UI 설계",
    summary:
      "LiDAR, AI Camera, Siemens PLC, Database를 연동한 실시간 크레인 충돌방지 모니터링 시스템입니다.",
    scale: "진행중",
    category: "Digital Twin Safety",
    techs: ["C#", ".NET", "WinForms", "OPC UA", "MSSQL", "Siemens PLC", "LiDAR", "AI Camera"],
    systems: ["PLC 연동", "AI Camera", "LiDAR", "Database", "Replay", "설정 UI"],
    problem:
      "크레인 상부 산업용 PC에서 동작하는 시스템이라 현장에서 코드 수정·재배포가 어렵고, 장비 펌웨어 업데이트에 따라 기능과 인터페이스가 반복적으로 변경되었습니다.",
    solution: [
      "코드 수정 없이 UI에서 주소·데이터 타입·매핑 정보를 변경할 수 있는 설정 구조 설계",
      "LiDAR·AI Camera 펌웨어 변경 사항을 분석하고 프로토타입으로 고객사와 기능 조율",
      "Replay, 로그 조회, 테스트 화면을 추가하여 운영 편의성과 장애 분석 효율 향상",
    ],
    highlights: [
      "LiDAR · AI Camera · PLC 데이터 통합 모니터링 시스템 개발",
      "OPC UA 기반 Siemens PLC 통신 및 실시간 데이터 처리",
      "코드 수정 없이 UI에서 설정 변경이 가능한 구조 설계",
      "Replay, 로그 조회, 테스트 기능 등 운영 편의 기능 기획 및 개발",
      "펌웨어 변경에 따른 기능 조율 및 고객 리뷰 대응",
    ],
    impact: "현장 운영과 유지보수를 고려한 구조로 시스템 확장성과 운영 편의성을 높였습니다.",
    
    image: "images/jib/main.png",

    // 👇 여러 장이면 Gallery
    gallery: [
    "images/jib/agentapp_main.png",
    "images/jib/agentapp_plcmonitoring.png",
    "images/jib/agentapp_unitymonitoring.png",
    "images/jib/agentapp_lidartest.png",
  ],
  },
  {
    slug: "ai",
    title: "AI기반 전술개발 · 훈련용 모의비행훈련체계사업",
    company: "한국항공우주산업(KAI) / 삼우이머션",
    period: "2024.06 ~ 2025.05",
    role: "응용 소프트웨어 및 서버 개발 · 데이터베이스 구축 · 체계통합 및 시험 지원",
    summary:
      "비행훈련 데이터를 수집, 저장, 리플레이하는 디브리핑 서버와 오디오·영상 제어 프로그램을 개발했습니다.",
    scale: "12개월",
    category: "Flight Training Debriefing",
    techs: ["C#", "MS SQL", "UDP", "HLA/RTI", "Shared Memory", "Audio", "Video Capture"],
    systems: ["디브리핑 서버", "MS SQL DB", "오디오 제어", "영상 제어", "리플레이", "체계통합"],
    problem:
      "KAI 및 여러 협력업체가 함께 수행하는 대규모 프로젝트로, 하나의 기능 오류가 전체 시험 일정에 영향을 줄 수 있는 환경이었습니다.",
    solution: [
      "UDP 기반 50여 개 프로그램 제어 및 상태 관리 서버 개발",
      "HLA/RTI·Shared Memory 기반 실시간 항공 데이터 연동",
      "DT, OT, FAT, SAT, 체계통합 시험 대응 및 현장 기술 지원",
    ],
    highlights: [
      "하위 50여 개 프로그램을 UDP 통신으로 제어하는 디브리핑 서버 개발",
      "MS SQL 기반 대용량 훈련 데이터 저장 및 Replay 기능 개발",
      "항공기 데이터를 HLA/RTI 및 Shared Memory 구조로 연동",
      "오디오·영상 저장 및 프레임 단위 제어 기능 개발",
      "DT, OT, FAT, SAT, 체계통합 시험 및 현장 기술 지원 수행",
      "정적 분석 및 신뢰성 검증을 통한 품질 기준 대응",
    ],
    impact: "장기간 현장 시험과 협력업체 협업을 통해 체계통합과 안정화 경험을 쌓았습니다.",
    image: "images/ai/main.png",
    gallery: [
    "images/ai/main.png",
     ],
  },
  {
    slug: "submarine",
    title: "민·군기술이전사업 - 잠수함 XR 교육훈련체계",
    company: "산업통상자원부 · 방위사업청 / 삼우이머션",
    period: "2022.12 ~ 2024.02",
    role: "응용 소프트웨어 및 서버 개발 · 데이터베이스 구축",
    summary:
      "확장현실 기반 다자간 잠수함 기관장비 교육훈련 체계의 서버, UI, DB, 임베디드 프로그램을 개발했습니다.",
    scale: "15개월",
    category: "XR Training System",
    techs: ["C#", "WinForms", "WPF", "Python", "PostgreSQL", "TCP", "UDP", "REST API", "PLC"],
    systems: ["PLC 미들 서버", "Raspberry Pi UI", "EMCS", "Windows IoT", "PostgreSQL"],
    highlights: [
      "LS PLC 6대를 TCP 통신으로 동시 제어하는 미들웨어 서버 개발",
      "PostgreSQL 데이터베이스 설계 및 구축",
      "Raspberry Pi 기반 UI와 UDP 멀티스레드 통신 기능 구현",
      "WinForms Graphics 기반 EMCS 화면 개발",
      "Windows IoT 환경 WPF 프로그램 및 멀티터치 기능 개발",
      "REST API 및 PostgreSQL 연동 기능 구현",
    ],
    impact: "명확한 요구사항과 방산 품질 기준에 맞춰 안정성과 정확성을 우선한 개발을 수행했습니다.",
      image: "images/submarine/main.png",
    gallery: [
    "images/submarine/main.png",
     ],
  },
  {
    slug: "company-management",
    title: "회사 통합 관리 시스템 구축",
    company: "삼우이머션",
    period: "2026.01 ~ 2026.03",
    role: "웹 애플리케이션 개발 · 백엔드 API 개발",
    summary:
      "Vue3 관리자 웹 UI와 FastAPI REST API를 활용한 사내 통합 관리 시스템을 개발했습니다.",
    scale: "3개월",
    category: "Enterprise Management System",
    techs: ["Vue3", "TypeScript", "Vuetify", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "REST API"],
    systems: ["근태 관리", "전자결재", "일정 관리", "CRM", "관리자 시스템"],
    highlights: [
      "Vue3(TypeScript) 기반 관리자 웹 UI 기능 개발 및 유지보수",
      "FastAPI 기반 REST API 개발 및 프론트엔드 연동",
      "PostgreSQL 데이터베이스 설계 및 SQLAlchemy ORM 적용",
      "근태, 전자결재, 일정관리, CRM 기능 개발",
    ],
    impact: "사내 운영 업무를 하나의 관리 시스템으로 통합하기 위한 웹·API 구조를 구축했습니다.",
    image: "images/management/main.png",

    gallery: [
    "images/management/main.png",
    "images/management/tasklist.png",
    "images/management/trip.png",
    "images/management/vacation.png",
  ],

  },
  {
    slug: "app-instructor-v2",
    title: "App Instructor V2 및 안드로이드 서버 구축",
    company: "삼우이머션",
    period: "2026.02 ~ 2026.05",
    role: "안드로이드 서버 개발 · 응용 소프트웨어 개발",
    summary:
      "Android 기기를 독립적인 REST API 서버로 활용하고 원격 제어하는 App Instructor V2를 개발했습니다.",
    scale: "4개월",
    category: "Android Device Management",
    techs: ["Java", "Android", "REST API", "Termux", "Python", "C#"],
    systems: ["Android Server", "REST API", "Boot Service", "Foreground Service", "Device Control"],
    highlights: [
      "Android 기기를 독립적인 REST API 서버로 활용하는 구조 설계",
      "Java 기반 REST API 및 디바이스 제어 기능 개발",
      "Boot Receiver 및 Foreground Service 구현",
      "Termux 기반 서버 기능 확장 및 커스터마이징",
      "Android 원격 제어 및 장비 관리 기능 개발",
    ],
    impact: "VR·Android 장비 제어 환경에서 운영 자동화와 원격 제어 가능성을 확장했습니다.",
    image: "images/android/v2/main.png",

    gallery: [
    "images/android/v2/main.png",
    "images/android/v2/setting.png"
  ],
  },
  {
    slug: "semiconductor-hero",
    title: "한국폴리텍대학 꿈드림 공작소 반도체 히어로",
    company: "한국폴리텍대학 / 삼우이머션",
    period: "2025.10 ~ 2025.12",
    role: "응용 소프트웨어 개발",
    summary: "VR 교육을 위한 모바일 인스트럭터 및 안드로이드 기반 제어 서버 개발",
    scale: "3개월",
    category: "VR Education System",
    techs: ["C#", ".NET", "Python", "REST API", "Android", "Termux"],
    systems: ["모바일 인스트럭터", "Android REST Server", "Device Mirroring", "Group Control"],
    highlights: [
      "최대 8대 안드로이드 디바이스 동시 연결 및 그룹 제어 기능 개발",
      "Termux 기반 Python REST API 서버 구축",
      "안드로이드 디바이스를 서버로 활용하는 원격 제어 구조 구현",
      "안드로이드 디바이스 미러링 기능 개발",
    ],

    image: "images/jobworld/main.png",

    gallery: [
    "images/jobworld/main.png"
  ],

  },
  {
    slug: "app-instructor",
    title: "앱 인스트럭터",
    company: "삼우이머션",
    period: "2024.02 ~ 2024.04",
    role: "응용 소프트웨어 개발",
    summary: "VR 기기 다중 제어, 상태 체크, 원격 앱 제어를 지원하는 상용 프로그램",
    scale: "3개월",
    category: "Commercial Control Tool",
    techs: ["C#", ".NET", "ADB", "Android", "Device Control", "Mirroring"],
    systems: ["VR 디바이스 제어", "ADB 명령 연동", "상태 모니터링", "원격 앱 제어", "미러링"],
    highlights: [
      "안드로이드 기반 VR 기기와 ADB 명령어를 연동하는 제어 기능 구현",
      "안드로이드 디바이스 50대 동시 제어 및 상태 체크 기능 개발",
      "원격 앱 실행, 종료, 제어와 미러링 기능을 상용 프로그램 형태로 구현",
    ],
    image: "images/android/v1/main.png",

    gallery: [
    "images/android/v1/main.png"],
  },
  {
    slug: "lsf2",
    title: "KAI 고속상륙정(LSF-II) 시뮬레이터 영상발생장치",
    company: "한국항공우주산업 / 삼우이머션",
    period: "2023.05 ~ 2023.07",
    role: "응용 소프트웨어 개발",
    summary: "시뮬레이터 영상발생장치를 위한 영상 단독 제어 소프트웨어 개발",
    scale: "3개월",
    category: "Simulator Control",
    techs: ["C#", "WinForms", "UDP", "Graphics", "Electronic Chart"],
    systems: ["영상 단독 제어", "전자 해도 UI", "위치 계산", "자선 위치 Drawing"],
    highlights: [
      "WinForms 기반 영상 단독 제어 소프트웨어 개발",
      "UDP 통신 기능 구현",
      "전자 해도 UI 추가와 위치 계산 연동 기능 개발",
      "전자 해도 위에 Graphics 기반 현재 자선 위치 Drawing 기능 구현",
    ],

    image: "images/lsf/main.png",

    gallery: [
    "images/lsf/main.png"
     ],

  },
  {
    slug: "digital-twin-safety",
    title: "2022년도 5G기반 디지털트윈 시설물 안전 실증 과제",
    company: "과학기술정보통신부 / 삼우이머션",
    period: "2022.08 ~ 2022.10",
    role: "응용 소프트웨어 개발",
    summary: "IoT 모드버스 통신 서버와 영상 기반 사람 인식 프로그램 개발",
    scale: "3개월",
    category: "Digital Twin Safety",
    techs: ["C#", "WinForms", "Modbus", "Database", "Python", "RTSP", "OpenCV"],
    systems: ["모드버스 통신 서버", "DB 연동", "RTSP 미러링", "사람 인식", "트래킹"],
    highlights: [
      "IoT 모드버스 프로토콜 송수신 기능 개발",
      "모드버스 통신 서버의 데이터베이스 연동 기능 구현",
      "CCTV 영상 RTSP 미러링 기능 개발",
      "OpenCV 기반 사람 형체 인식 및 트래킹 기능 구현",
    ],

    image: "images/jagalchi/main.png",

    gallery: [
    "images/jagalchi/main.png"
     ],
  },
];
