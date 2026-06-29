export type Project = {
  title: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  scale: string;
  category: string;
  techs: string[];
  systems: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
  title: "한화에너지 JIB 크레인 충돌방지 모니터링 시스템 구축",
  company: "한화에너지 / 삼우이머션",
  period: "2026.05 ~",
  role: "응용 소프트웨어 및 서버 개발 · 데이터베이스 구축",
  summary: "LIDAR, AI Camera, PLC, Database를 연동한 실시간 크레인 충돌방지 모니터링 시스템 개발",
  scale: "진행중",
  category: "Digital Twin Safety",
  techs: [
    "C#",
    ".NET",
    "WinForms",
    "OPC UA",
    "MSSQL",
    "Siemens PLC",
    "LIDAR",
    "AI Camera"
  ],
  systems: [
    "OPC UA 기반 PLC 연동",
    "AI Camera 데이터 수집",
    "LIDAR 실시간 데이터 처리",
    "Database 저장 및 조회",
    "Replay 시스템"
  ],
  highlights: [
  "LIDAR · AI Camera · PLC 데이터 통합 모니터링 시스템 개발",
  "OPC UA 기반 Siemens PLC 통신 및 실시간 데이터 처리",
  "시간 기반 Replay 기능 및 로그/DB 저장 구조 설계",
  "모니터링 UI/UX 설계 및 핵심 기능 기획"
],
},
{
  title: "CPR 인스트럭터 반응형 개발 (PICO / Quest)",
  company: "삼우이머션",
  period: "2026.04 ~ 2026.05",
  role: "응용 소프트웨어 개발",
  summary: "PICO·Quest 기반 CPR 훈련을 위한 반응형 인스트럭터 및 장비 연동 시스템 개발",
  scale: "2개월",
  category: "VR Training System",
  techs: [
    "C#",
    ".NET",
    "Arduino",
    "VR",
    "PICO",
    "Meta Quest"
  ],
  systems: [
    "Instructor",
    "Arduino",
    "VR Device",
    "Responsive UI"
  ],
  highlights: [
    "CPR 훈련용 인스트럭터 프로그램 개발",
    "Arduino 기반 CPR 장비 제어 코드 개발 및 VR 연동",
    "PICO·Quest VR 기기와 실시간 데이터 연동",
    "반응형 UI 기반 장비 추가 및 설정 기능 구현"
  ],
},


{
  title: "앱 인스트럭터 V2 및 안드로이드 서버 구축",
  company: "삼우이머션",
  period: "2026.02 ~ 2026.05",
  role: "응용 소프트웨어 및 안드로이드 서버 개발",
  summary: "안드로이드 기기를 독립적인 REST API 서버로 활용하기 위한 App Instructor V2 개발",
  scale: "4개월",
  category: "Android Device Management",
  techs: [
    "Java",
    "Android",
    "REST API",
    "Termux",
    "Python",
    "C#"
  ],
  systems: [
    "Android Server",
    "REST API",
    "Boot Service",
    "Foreground Service",
    "Device Control"
  ],
  highlights: [
    "Termux 기반 안드로이드 서버 기능 확장 및 커스터마이징",
    "Java 기반 REST API 기능 추가 및 디바이스 제어 기능 구현",
    "부팅 자동 실행(Boot Receiver) 및 Foreground Service 구현",
    "안드로이드 기기를 독립적인 REST API 서버로 동작하도록 개발"
  ],
},
{
  title: "회사 통합 관리 시스템 구축",
  company: "삼우이머션",
  period: "2026.01 ~ 2026.03",
  role: "웹 애플리케이션 및 백엔드 API 개발",
  summary: "Vue3 기반 관리자 웹 UI와 FastAPI 기반 REST API를 활용한 사내 통합 관리 시스템 개발",
  scale: "3개월",
  category: "Enterprise Management System",
  techs: [
    "Vue3",
    "TypeScript",
    "Vuetify",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "REST API"
  ],
  systems: [
    "근태 관리",
    "전자결재",
    "일정 관리",
    "CRM",
    "관리자 시스템"
  ],
  highlights: [
    "Vue3(TypeScript) 기반 관리자 웹 UI 기능 개발 및 유지보수",
    "FastAPI 기반 REST API 개발 및 프론트엔드 연동",
    "PostgreSQL 데이터베이스 설계 및 SQLAlchemy ORM 연동",
    "근태, 전자결재, 일정관리, CRM 기능 개발"
  ],
},
{
  title: "한국폴리텍대학 꿈드림 공작소 반도체 히어로",
  company: "한국폴리텍대학 / 삼우이머션",
  period: "2025.10 ~ 2025.12",
  role: "응용 소프트웨어 개발",
  summary: "VR 교육을 위한 모바일 인스트럭터 및 안드로이드 기반 제어 서버 개발",
  scale: "3개월",
  category: "VR Education System",
  techs: [
    "C#",
    ".NET",
    "Python",
    "REST API",
    "Android",
    "Termux"
  ],
  systems: [
    "모바일 인스트럭터",
    "Android REST Server",
    "Device Mirroring",
    "Group Control"
  ],
  highlights: [
    "최대 8대 안드로이드 디바이스 동시 연결 및 그룹 제어 기능 개발",
    "Termux 기반 Python REST API 서버 구축",
    "안드로이드 디바이스를 서버로 활용하는 원격 제어 구조 구현",
    "안드로이드 디바이스 미러링 기능 개발"
  ],
},
{
  title: "한화에어로스페이스 분수/살수 교육장비 개발",
  company: "한화에어로스페이스 / 삼우이머션",
  period: "2025.09 ~ 2025.10",
  role: "응용 소프트웨어 개발",
  summary: "VIVE VR 장비 및 Tracker 데이터 기반 장치 관리 프로그램 개발",
  scale: "2개월",
  category: "VR Training System",
  techs: [
    "C#",
    ".NET",
    "VIVE",
    "VR",
    "Device Management"
  ],
  systems: [
    "VR Device",
    "Tracker Management",
    "Device Monitoring"
  ],
  highlights: [
    "VIVE HMD 및 Tracker 데이터 수집 기능 개발",
    "VR 장비 상태 모니터링 및 장치 관리 프로그램 개발",
    "Tracker 데이터 기반 장비 연결 및 관리 기능 구현",
    "교육장비 운영을 위한 디바이스 관리 기능 개발"
  ],
},

{
    title: "AI기반 전술개발 · 훈련용 모의비행훈련체계사업",
    company: "한국항공우주산업 / 삼우이머션",
    period: "2024.06 ~ 2025.05",
    role: "응용 소프트웨어 및 서버 개발, 데이터베이스 구축",
    summary: "비행훈련 데이터를 수집, 저장, 리플레이하는 디브리핑 서버 및 제어 프로그램 개발",
    scale: "12개월",
    category: "Flight Training Debriefing",
    techs: ["C#", "MS SQL", "UDP", "HLA/RTI", "Shared Memory", "Audio", "Video Capture"],
    systems: ["디브리핑 서버", "MS SQL DB", "오디오 제어", "영상 제어", "리플레이"],
    highlights: [
      "하위 50개 프로그램을 UDP 통신으로 제어하고 상태를 관리하는 디브리핑 서버 개발",
      "MS SQL 기반 삽입, 삭제, 선택, 업데이트 기능과 대용량 훈련 데이터 저장 구조 구현",
      "저장된 훈련 데이터를 기반으로 리플레이 기능 개발",
      "항공기 데이터를 HLA/RTI 및 공유메모리 구조로 연동",
      "실시간 입력 오디오 저장, 출력 제어, 리플레이 제어 프로그램 개발",
      "캡처보드 영상 녹화 및 프레임 단위 제어 기능 개발",
    ],
  },
 {
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
  },
{
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
  },
  {
    title: "민·군기술이전사업",
    company: "산업통상자원부, 방위사업청 / 삼우이머션",
    period: "2022.12 ~ 2024.02",
    role: "응용 소프트웨어 및 서버 개발, 데이터베이스 구축",
    summary: "확장현실 기반 다자간 잠수함 기관장비 교육훈련 체계 개발",
    scale: "15개월",
    category: "XR Training System",
    techs: ["C#", "WinForms", "WPF", "Python", "PostgreSQL", "TCP", "UDP", "REST API", "PLC"],
    systems: ["PLC 제어 미들 서버", "라즈베리파이 UI", "잠수함 EMCS", "Windows IoT 임베디드 앱", "PostgreSQL DB"],
    highlights: [
      "LS 산전 PLC 6대를 TCP 통신으로 동시 제어하는 미들 서버 소프트웨어 개발",
      "PostgreSQL 데이터베이스 연동 및 REST API 연동 기능 개발",
      "라즈베리파이 기반 UI와 UDP 서버 통신, 멀티스레딩 구조 구현",
      "WinForms Graphics 기반 EMCS UI를 직접 구현하고 서버 상태를 UDP로 반영",
      "Windows IoT 환경의 WPF 프로그램, 멀티터치 제어, UDP 통신 기능 개발",
      "훈련 체계 전체 PostgreSQL 데이터베이스 설계 및 구축",
    ],
  },
  
  
 
  {
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
  },
  




];

export const coreSkills = [
  "C#",
  ".NET",
  "WinForms",
  "WPF",
  "Python",
  "PostgreSQL",
  "MS SQL",
  "TCP/UDP",
  "PLC",
  "ADB",
  "OpenCV",
  "HLA/RTI",
];
