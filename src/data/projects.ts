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
