import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Play, Check, X, RotateCcw, HelpCircle, AlertCircle, Trophy, BookOpen, ArrowRight, Home, Repeat, Eye, Keyboard, FileText, Tag, Lightbulb, Languages } from 'lucide-react';

// --- 데이터 인터페이스 정의 ---
interface QuizItem {
  id: number;
  acronym: string;
  fullTerm: string;
  desc: string;
}

interface WrongAnswer extends QuizItem {
  userAnswer: string;
}

interface SentenceItem {
  id: number;
  category: string;
  originalText: string;
  translation: string; // 한글 해석 추가
  parts: { text: string; isAnswer: boolean }[];
  answers: string[];
}

type GameState = 'menu' | 'playing' | 'result' | 'flashcard' | 'sentence';
type Feedback = 'correct' | 'incorrect' | null;

const NetworkQuiz: React.FC = () => {
  // --- 1. 약어 데이터 (Acronym Data - Original 109 items) ---
  const fullData: QuizItem[] = [
    { id: 1, acronym: "SDN", fullTerm: "Software-Defined Networking", desc: "소프트웨어로 네트워크를 정의하고 제어하는 기술" },
    { id: 2, acronym: "TCAM", fullTerm: "Ternary Content Addressable Memory", desc: "0, 1, X 세 가지 상태를 저장하는 고속 검색 메모리" },
    { id: 3, acronym: "SNMP", fullTerm: "Simple Network Management Protocol", desc: "네트워크 장비를 간단하게 관리하고 감시하는 프로토콜" },
    { id: 4, acronym: "VBR", fullTerm: "Variable Bit Rate", desc: "전송률이 상황에 따라 변하는 방식" },
    { id: 5, acronym: "ICMP", fullTerm: "Internet Control Message Protocol", desc: "인터넷 제어 메시지(오류 보고, Ping 등)를 보내는 프로토콜" },
    { id: 6, acronym: "OSPF", fullTerm: "Open Shortest Path First", desc: "개방형 최단 경로 우선 라우팅 프로토콜" },
    { id: 7, acronym: "ATM", fullTerm: "Asynchronous Transfer Mode", desc: "비동기 전송 모드 (셀 단위 전송)" },
    { id: 8, acronym: "MAC", fullTerm: "Media Access Control", desc: "매체에 접근을 제어하는 고유 물리 주소" },
    { id: 9, acronym: "DPI", fullTerm: "Deep Packet Inspection", desc: "패킷의 내용까지 깊게 검사하는 기술" },
    { id: 10, acronym: "RIP", fullTerm: "Routing Information Protocol", desc: "라우팅 정보를 홉 수 기반으로 교환하는 프로토콜" },
    { id: 11, acronym: "ASN", fullTerm: "Autonomous System Number", desc: "자율 시스템(AS)을 식별하는 고유 번호" },
    { id: 12, acronym: "ISIS", fullTerm: "Intermediate System to Intermediate System", desc: "중간 시스템(라우터) 끼리의 라우팅 프로토콜" },
    { id: 13, acronym: "EIGRP", fullTerm: "Enhanced Interior Gateway Routing Protocol", desc: "향상된 내부 게이트웨이 라우팅 (Cisco 전용)" },
    { id: 14, acronym: "MOSPF", fullTerm: "Multicast Open Shortest Path First", desc: "멀티캐스트를 지원하는 OSPF" },
    { id: 15, acronym: "ONOS", fullTerm: "Open Network Operating System", desc: "개방형 네트워크 운영체제 (SDN 컨트롤러)" },
    { id: 16, acronym: "NAT", fullTerm: "Network Address Translation", desc: "네트워크 주소(IP)를 변환하는 기술" },
    { id: 17, acronym: "OFC", fullTerm: "Optical Fiber Cable", desc: "광 섬유 케이블" },
    { id: 18, acronym: "PDU", fullTerm: "Protocol Data Unit", desc: "프로토콜에서 처리하는 데이터의 단위" },
    { id: 19, acronym: "NCS", fullTerm: "Network Control System", desc: "네트워크를 제어하는 시스템" },
    { id: 20, acronym: "ONF", fullTerm: "Open Networking Foundation", desc: "개방형 네트워킹 표준화 재단" },
    { id: 21, acronym: "WFQ", fullTerm: "Weighted Fair Queuing", desc: "가중치를 두어 공평하게 처리하는 큐 방식" },
    { id: 22, acronym: "NCP", fullTerm: "Network Control Protocol", desc: "네트워크 계층을 제어/설정하는 프로토콜" },
    { id: 23, acronym: "CBR", fullTerm: "Constant Bit Rate", desc: "전송률이 일정하게 고정된 방식" },
    { id: 24, acronym: "SOHO", fullTerm: "Small Office Home Office", desc: "소규모 사무실이나 재택 근무 환경" },
    { id: 25, acronym: "DHCP", fullTerm: "Dynamic Host Configuration Protocol", desc: "호스트 설정을 동적으로 자동 할당하는 프로토콜" },
    { id: 26, acronym: "BGP", fullTerm: "Border Gateway Protocol", desc: "AS 경계에서 사용하는 게이트웨이 프로토콜" },
    { id: 27, acronym: "CIDR", fullTerm: "Classless Inter-Domain Routing", desc: "클래스 구분 없는 도메인 간 라우팅" },
    { id: 28, acronym: "HOL", fullTerm: "Head-of-the-Line", desc: "줄의 맨 앞이 막혀 뒤까지 지연되는 현상" },
    { id: 29, acronym: "AQM", fullTerm: "Active Queue Management", desc: "큐를 능동적으로 관리하여 혼잡 방지" },
    { id: 30, acronym: "VRRP", fullTerm: "Virtual Router Redundancy Protocol", desc: "가상 라우터를 만들어 중복(예비) 구성" },
    { id: 31, acronym: "OVSDB", fullTerm: "Open vSwitch Database Management Protocol", desc: "Open vSwitch의 데이터베이스를 관리하는 프로토콜" },
    { id: 32, acronym: "SAL", fullTerm: "Service Abstraction Layer", desc: "서비스를 추상화하여 하드웨어 종속성 제거" },
    { id: 33, acronym: "VMM", fullTerm: "Virtual Machine Monitor", desc: "가상 머신을 감시/관리하는 모니터" },
    { id: 34, acronym: "NLRI", fullTerm: "Network Layer Reachability Information", desc: "네트워크 계층의 도달 가능성 정보" },
    { id: 35, acronym: "CLI", fullTerm: "Command Line Interface", desc: "명령 줄로 입력하는 텍스트 인터페이스" },
    { id: 36, acronym: "MIB", fullTerm: "Management Information Base", desc: "관리 정보가 저장된 베이스" },
    { id: 37, acronym: "SMI", fullTerm: "Structure of Management Information", desc: "관리 정보를 정의하는 구조 및 규칙" },
    { id: 38, acronym: "RPC", fullTerm: "Remote Procedure Call", desc: "원격에 있는 프로시저를 호출함" },
    { id: 39, acronym: "EGP", fullTerm: "Exterior Gateway Protocol", desc: "외부 게이트웨이(AS 간) 프로토콜" },
    { id: 40, acronym: "IGP", fullTerm: "Interior Gateway Protocol", desc: "내부 게이트웨이(AS 내) 프로토콜" },
    { id: 41, acronym: "SDN", fullTerm: "Software-Defined Networking", desc: "소프트웨어로 정의된 네트워킹 (중복)" },
    { id: 42, acronym: "OFP", fullTerm: "OpenFlow Protocol", desc: "오픈플로우 스위치와 컨트롤러 간 프로토콜" },
    { id: 43, acronym: "OFS", fullTerm: "OpenFlow Switch", desc: "오픈플로우를 지원하는 스위치" },
    { id: 44, acronym: "ONOS", fullTerm: "Open Network Operating System", desc: "개방형 네트워크 OS (중복)" },
    { id: 45, acronym: "NFV", fullTerm: "Network Functions Virtualization", desc: "네트워크 기능을 가상화하는 기술" },
    { id: 46, acronym: "CLI", fullTerm: "Command Line Interface", desc: "명령 줄 인터페이스 (중복)" },
    { id: 47, acronym: "DCN", fullTerm: "Data Center Network", desc: "데이터 센터 내부 네트워크" },
    { id: 48, acronym: "NFVI", fullTerm: "NFV Infrastructure", desc: "NFV를 구동하기 위한 인프라 자원" },
    { id: 49, acronym: "NBI", fullTerm: "Northbound Interface", desc: "북쪽(상위 응용) 방향 인터페이스" },
    { id: 50, acronym: "SBI", fullTerm: "Southbound Interface", desc: "남쪽(하부 장비) 방향 인터페이스" },
    { id: 51, acronym: "VLAN", fullTerm: "Virtual Local Area Network", desc: "가상으로 나눈 근거리 통신망" },
    { id: 52, acronym: "VPN", fullTerm: "Virtual Private Network", desc: "가상으로 만든 사설 네트워크" },
    { id: 53, acronym: "OVS", fullTerm: "Open vSwitch", desc: "오픈 소스 가상 스위치" },
    { id: 54, acronym: "YANG", fullTerm: "Yet Another Next Generation", desc: "또 다른 차세대 데이터 모델링 언어" },
    { id: 55, acronym: "NETCONF", fullTerm: "Network Configuration Protocol", desc: "네트워크 설정을 위한 프로토콜" },
    { id: 56, acronym: "MPLS", fullTerm: "Multiprotocol Label Switching", desc: "다양한 프로토콜 위에서 라벨로 스위칭" },
    { id: 57, acronym: "MANO", fullTerm: "Management and Orchestration", desc: "NFV의 관리와 조율" },
    { id: 58, acronym: "ODL", fullTerm: "OpenDaylight", desc: "오픈데이라이트 (SDN 컨트롤러)" },
    { id: 59, acronym: "MPLS", fullTerm: "Multiprotocol Label Switching", desc: "라벨 스위칭 (중복)" },
    { id: 60, acronym: "LSR", fullTerm: "Label Switch Router", desc: "라벨을 보고 스위칭하는 라우터" },
    { id: 61, acronym: "LLC", fullTerm: "Logical Link Control", desc: "논리적인 링크 제어" },
    { id: 62, acronym: "MAC", fullTerm: "Media Access Control", desc: "매체 접근 제어 (중복)" },
    { id: 63, acronym: "HDLC", fullTerm: "High Level Data Link Protocol", desc: "고수준 데이터 링크 제어 프로토콜" },
    { id: 64, acronym: "CSMA", fullTerm: "Carrier Sense Multiple Access", desc: "반송파 감지 후 다중 접속" },
    { id: 65, acronym: "FDMA", fullTerm: "Frequency Division Multiple Access", desc: "주파수를 나누어 접속" },
    { id: 66, acronym: "TDMA", fullTerm: "Time Division Multiple Access", desc: "시간을 나누어 접속" },
    { id: 67, acronym: "CDMA", fullTerm: "Code Division Multiple Access", desc: "코드로 구분하여 나누어 접속" },
    { id: 68, acronym: "ARP", fullTerm: "Address Resolution Protocol", desc: "주소(IP)를 해석하여 MAC 주소를 알아냄" },
    { id: 69, acronym: "FDDI", fullTerm: "Fiber Distributed Data Interface", desc: "광섬유로 분산된 데이터 인터페이스" },
    { id: 70, acronym: "SFD", fullTerm: "Start Frame Delimiter", desc: "프레임의 시작을 알리는 구분자" },
    { id: 71, acronym: "VLAN", fullTerm: "Virtual Local Area Network", desc: "가상 LAN (중복)" },
    { id: 72, acronym: "DTP", fullTerm: "Dynamic Trunking Protocol", desc: "트렁킹을 동적으로 협상함" },
    { id: 73, acronym: "VTP", fullTerm: "VLAN Trunking Protocol", desc: "VLAN 정보를 트렁킹 구간에 전파" },
    { id: 74, acronym: "TPID", fullTerm: "Tag Protocol Identifier", desc: "태그 프로토콜임을 식별하는 필드" },
    { id: 75, acronym: "TCI", fullTerm: "Tag Control Information", desc: "태그를 제어하는 정보" },
    { id: 76, acronym: "PCP", fullTerm: "Priority Code Point", desc: "우선순위를 나타내는 코드 지점" },
    { id: 77, acronym: "DEI", fullTerm: "Drop Eligible Indicator", desc: "폐기 해도 되는지 나타내는 표시" },
    { id: 78, acronym: "LER", fullTerm: "Label Edge Router", desc: "MPLS망 가장자리에 있는 라우터" },
    { id: 79, acronym: "LSP", fullTerm: "Label-Switched Path", desc: "라벨로 스위칭되어 지나가는 경로" },
    { id: 80, acronym: "LDP", fullTerm: "Label Distribution Protocol", desc: "라벨을 분배하는 프로토콜" },
    { id: 81, acronym: "SIFS", fullTerm: "Short Inter-frame Spacing", desc: "짧은 프레임 간 간격" },
    { id: 82, acronym: "DIFS", fullTerm: "Distributed Inter-frame Space", desc: "분산 제어용 프레임 간격" },
    { id: 83, acronym: "RTS", fullTerm: "Request to Send", desc: "송신을 요청함" },
    { id: 84, acronym: "CTS", fullTerm: "Clear to Send", desc: "송신 해도 좋다" },
    { id: 85, acronym: "FHSS", fullTerm: "Frequency-Hopping Spread Spectrum", desc: "주파수를 깡충깡충 뛰며 대역 확산" },
    { id: 86, acronym: "RAN", fullTerm: "Radio Access Network", desc: "무선으로 접속하는 네트워크망" },
    { id: 87, acronym: "MTSO", fullTerm: "Mobile Telecommunications Switching Office", desc: "이동통신 교환국" },
    { id: 88, acronym: "SIM", fullTerm: "Subscriber Identity Module", desc: "가입자를 식별하는 모듈" },
    { id: 89, acronym: "LTE", fullTerm: "Long Term Evolution", desc: "길게 보고 진화시킨 4G 기술" },
    { id: 90, acronym: "GPRS", fullTerm: "General Packet Radio Service", desc: "일반적인 패킷 무선 서비스" },
    { id: 91, acronym: "OFDMA", fullTerm: "Orthogonal Frequency-Division Multiple Access", desc: "직교 주파수 분할 다중 접속" },
    { id: 92, acronym: "LTE", fullTerm: "Long Term Evolution", desc: "4G 이동통신 (중복)" },
    { id: 93, acronym: "HSPA", fullTerm: "High Speed Packet Access", desc: "고속 패킷 접속" },
    { id: 94, acronym: "RNC", fullTerm: "Radio Network Controller", desc: "무선 네트워크를 제어하는 장비" },
    { id: 95, acronym: "HSDPA", fullTerm: "High Speed Downlink Packet Access", desc: "고속 하향 패킷 접속" },
    { id: 96, acronym: "WCDMA", fullTerm: "Wideband Code Division Multiple Access", desc: "광대역 코드 분할 다중 접속" },
    { id: 97, acronym: "SIM", fullTerm: "Subscriber Identity Module", desc: "가입자 식별 모듈 (중복)" },
    { id: 98, acronym: "GPRS", fullTerm: "General Packet Radio Service", desc: "2.5G 서비스 (중복)" },
    { id: 99, acronym: "IMSI", fullTerm: "International Mobile Subscriber Identity", desc: "국제 모바일 가입자 고유 식별 번호" },
    { id: 100, acronym: "EDGE", fullTerm: "Enhanced Data Rates for GSM Evolution", desc: "GSM의 진화로 데이터 속도 향상" },
    { id: 101, acronym: "MIMO", fullTerm: "Multiple Input Multiple Output", desc: "다중 입력 다중 출력" },
    { id: 102, acronym: "SC-FDMA", fullTerm: "Single Carrier Frequency Division Multiple Access", desc: "단일 반송파를 사용하는 FDMA" },
    { id: 103, acronym: "EPC", fullTerm: "Evolved Packet Core", desc: "진화된 패킷 코어 망" },
    { id: 104, acronym: "MME", fullTerm: "Mobility Management Entity", desc: "이동성을 관리하는 개체" },
    { id: 105, acronym: "eMBB", fullTerm: "Enhanced Mobile Broadband", desc: "향상된 초광대역 서비스" },
    { id: 106, acronym: "DSS", fullTerm: "Dynamic Spectrum Sharing", desc: "주파수를 동적으로 공유" },
    { id: 107, acronym: "FWA", fullTerm: "Fixed Wireless Access", desc: "고정된 위치에서 무선으로 접속" },
    { id: 108, acronym: "RAN", fullTerm: "Radio Access Network", desc: "무선 접속망 (중복)" },
    { id: 109, acronym: "UTRAN", fullTerm: "Universal Terrestrial Radio Access Network", desc: "범용 지상 무선 접속망" },
  ];

  // --- 2. 보충 용어 데이터 ---
  const supplementaryData: QuizItem[] = [
    { id: 1001, acronym: "Random Access", fullTerm: "Random Access", desc: "임의 접근 (데이터 전송 시 경쟁하며 충돌 가능성이 있는 방식)" },
    { id: 1002, acronym: "Controlled Access", fullTerm: "Controlled Access", desc: "제어 접근 (순서나 규칙에 따라 전송하여 충돌을 방지하는 방식)" },
    { id: 1003, acronym: "Channelization", fullTerm: "Channelization", desc: "채널화 (대역폭을 주파수, 시간, 코드 등으로 나누어 할당하는 방식)" },
    { id: 1004, acronym: "Ethernet", fullTerm: "Ethernet", desc: "이더넷 (가장 널리 사용되는 유선 LAN 기술 표준)" },
    { id: 1005, acronym: "CRC", fullTerm: "Cyclic Redundancy Check", desc: "순환 중복 검사 (데이터 전송 오류를 검출하기 위한 수학적 알고리즘)" },
    { id: 1006, acronym: "Loopback", fullTerm: "Loopback", desc: "루프백 (데이터를 송신한 장치로 다시 되돌려 보내는 기능, 예: 127.0.0.1)" },
    { id: 1007, acronym: "Unicast", fullTerm: "Unicast", desc: "유니캐스트 (1:1 통신, 특정 단일 수신자에게 전송)" },
    { id: 1008, acronym: "Multicast", fullTerm: "Multicast", desc: "멀티캐스트 (1:N 통신, 특정 그룹의 멤버들에게 전송)" },
    { id: 1009, acronym: "Anycast", fullTerm: "Anycast", desc: "애니캐스트 (1:1 통신이나, 네트워크상에서 가장 가까운 노드와 통신)" },
    { id: 1010, acronym: "IPv4", fullTerm: "Internet Protocol version 4", desc: "인터넷 프로토콜 버전 4 (32비트 주소 체계)" },
    { id: 1011, acronym: "IPv6", fullTerm: "Internet Protocol version 6", desc: "인터넷 프로토콜 버전 6 (128비트 주소 체계, 무한대에 가까운 주소)" },
    { id: 1012, acronym: "Subnet Mask", fullTerm: "Subnet Mask", desc: "서브넷 마스크 (IP 주소에서 네트워크 부분과 호스트 부분을 구분)" },
    { id: 1013, acronym: "Dijkstra", fullTerm: "Dijkstra Algorithm", desc: "다익스트라 알고리즘 (OSPF 등에서 사용하는 최단 경로 탐색 알고리즘)" },
    { id: 1014, acronym: "STP", fullTerm: "Spanning Tree Protocol", desc: "스패닝 트리 프로토콜 (스위치 네트워크의 루프 방지)" },
    { id: 1015, acronym: "Flooding", fullTerm: "Flooding", desc: "플러딩 (수신 포트를 제외한 모든 포트로 프레임을 전송하는 것)" },
    { id: 1016, acronym: "Star Topology", fullTerm: "Star Topology", desc: "성형 토폴로지 (중앙 허브나 스위치를 중심으로 모든 노드가 연결된 형태)" },
    { id: 1017, acronym: "Traffic Engineering", fullTerm: "Traffic Engineering", desc: "트래픽 엔지니어링 (네트워크 트래픽의 흐름을 최적화하고 제어하는 기술)" },
    { id: 1018, acronym: "Spread-spectrum", fullTerm: "Spread-spectrum", desc: "대역 확산 (신호를 넓은 주파수 대역으로 퍼뜨려 간섭을 줄이는 기술)" },
    { id: 1019, acronym: "Gateway", fullTerm: "Gateway", desc: "게이트웨이 (서로 다른 네트워크 프로토콜을 사용하는 네트워크 간의 연결점)" },
    { id: 1020, acronym: "SLAAC", fullTerm: "Stateless Address Autoconfiguration", desc: "상태 비보존 주소 자동 설정 (IPv6에서 라우터 없이 IP를 자동 생성)" },
    { id: 1021, acronym: "NDP", fullTerm: "Neighbor Discovery Protocol", desc: "이웃 탐색 프로토콜 (IPv6에서 ARP를 대체하여 이웃 노드 관리)" },
    { id: 1022, acronym: "IPsec", fullTerm: "Internet Protocol Security", desc: "IP 보안 (IP 계층에서 데이터를 암호화하고 인증하는 프로토콜 모음)" },
    { id: 1023, acronym: "Collision", fullTerm: "Collision", desc: "충돌 (두 개 이상의 장치가 동시에 데이터를 전송하여 신호가 겹치는 현상)" },
    { id: 1024, acronym: "MTU", fullTerm: "Maximum Transmission Unit", desc: "최대 전송 단위 (네트워크 인터페이스가 한 번에 보낼 수 있는 최대 데이터 크기)" },
  ];

  // --- 3. 문장 데이터 (Raw Sentence Data with Translation) ---
  const rawSentenceText = `
The three broad categories of multiple access protocols are (random access), (controlled access), and (channelization). | 다중 접속 프로토콜의 세 가지 광범위한 범주는 (임의 접근), (제어 접근), 그리고 (채널화)입니다.
In (random access protocols), devices transmit whenever they have data to send, which may result in collisions. | (임의 접근 프로토콜)에서는 장치가 전송할 데이터가 있을 때마다 전송하므로 충돌이 발생할 수 있습니다.
The (CSMA Carrier Sense Multiple Access) protocol is a type of random access protocol that uses a "listen before talk" strategy to avoid collisions. | (CSMA 반송파 감지 다중 접속) 프로토콜은 충돌을 피하기 위해 "말하기 전에 듣기" 전략을 사용하는 임의 접근 프로토콜의 일종입니다.
(CSMA/CD) and (CSMA/CA) are two variations of CSMA used to reduce the chance of collisions. | (CSMA/CD)와 (CSMA/CA)는 충돌 가능성을 줄이기 위해 사용되는 CSMA의 두 가지 변형입니다.
(CSMA/CD Carrier Sense Multiple Access with Collision Detection) is widely used in wired Ethernet networks and detects collisions to retransmit data. | (CSMA/CD)는 유선 이더넷 네트워크에서 널리 사용되며 충돌을 감지하여 데이터를 재전송합니다.
(CSMA/CA Carrier Sense Multiple Access with Collision Avoidance) is used in wireless networks like Wi-Fi to avoid collisions due to the hidden terminal problem. | (CSMA/CA)는 숨겨진 터미널 문제로 인한 충돌을 방지하기 위해 Wi-Fi와 같은 무선 네트워크에서 사용됩니다.
Examples of channelization protocols include (Time Division Multiple Access), (Frequency Division Multiple Access), and (Code Division Multiple Access). | 채널화 프로토콜의 예로는 (시분할 다중 접속), (주파수 분할 다중 접속), (코드 분할 다중 접속)이 있습니다.
In CDMA, each user is assigned a unique (code) sequence to differentiate their signal from others. | CDMA에서 각 사용자는 자신의 신호를 다른 사용자와 구별하기 위해 고유한 (코드) 시퀀스를 할당받습니다.
The (spread-spectrum) technique used in CDMA ensures that multiple signals can coexist without significant interference. | CDMA에서 사용되는 (대역 확산) 기술은 여러 신호가 심각한 간섭 없이 공존할 수 있도록 보장합니다.
CSMA/CA reduces the likelihood of collisions by implementing a (random backoff time) before transmission. | CSMA/CA는 전송 전에 (임의 백오프 시간)을 구현하여 충돌 가능성을 줄입니다.
1.2 Ethernet protocols |
Ethernet is a widely used technology for (Local) Area Networks. | 이더넷은 (근거리) 통신망(LAN)에 널리 사용되는 기술입니다.
The smallest size of an Ethernet frame is (64) bytes, including the header and the trailer. | 이더넷 프레임의 최소 크기는 헤더와 트레일러를 포함하여 (64)바이트입니다.
The standard Ethernet MTU (Maximum Transmission Unit) is (1500) bytes, excluding headers and trailers. | 표준 이더넷 MTU(최대 전송 단위)는 헤더와 트레일러를 제외하고 (1500)바이트입니다.
In an Ethernet frame, the field that specifies the protocol being carried (e.g., IPv4 or ARP) is the (Ether Type) field. | 이더넷 프레임에서 전송되는 프로토콜(예: IPv4 또는 ARP)을 지정하는 필드는 (이더 타입) 필드입니다.
The Ethernet field used to mark the beginning of a frame is called the (Start Frame Delimiter - SFD). | 프레임의 시작을 표시하는 데 사용되는 이더넷 필드를 (SFD)라고 합니다.
(Cyclic Redundancy Check - CRC) is the error-checking mechanism used in Ethernet frames to ensure data integrity. | (CRC)는 데이터 무결성을 보장하기 위해 이더넷 프레임에서 사용되는 오류 검사 메커니즘입니다.
Ethernet uses (MAC addresses) to uniquely identify devices on a network. | 이더넷은 네트워크상의 장치를 고유하게 식별하기 위해 (MAC 주소)를 사용합니다.
(IEEE 802.1Q) is a virtual LAN (VLAN) tagging protocol often used with Ethernet to segregate network traffic. | (IEEE 802.1Q)는 네트워크 트래픽을 분리하기 위해 이더넷과 함께 자주 사용되는 VLAN 태깅 프로토콜입니다.
The (ARP Address Resolution Protocol) protocol is used for resolving IP addresses into MAC addresses in an Ethernet network. | (ARP) 프로토콜은 이더넷 네트워크에서 IP 주소를 MAC 주소로 변환하는 데 사용됩니다.
ARP is a protocol used to map an (IP) address to a (MAC) address. | ARP는 (IP) 주소를 (MAC) 주소에 매핑하는 데 사용되는 프로토콜입니다.
ARP is used in (IPv4) networks to resolve addresses, while (NDP Neighbor Discovery Protocol) is its counterpart in IPv6 networks. | ARP는 (IPv4) 네트워크에서 주소를 확인하는 데 사용되며, (NDP)는 IPv6 네트워크에서의 대응 프로토콜입니다.
A malicious attack that exploits ARP by sending fake ARP replies is called (ARP spoofing or ARP poisoning). | 가짜 ARP 응답을 보내 ARP를 악용하는 악의적인 공격을 (ARP 스푸핑 또는 ARP 포이즈닝)이라고 합니다.
ARP requests are sent to the Ethernet broadcast address (FF:FF:FF:FF:FF:FF). | ARP 요청은 이더넷 브로드캐스트 주소 (FF:FF:FF:FF:FF:FF)로 전송됩니다.
Link layer switches use the (MAC) address to forward frames to the appropriate port. | 링크 계층 스위치는 프레임을 적절한 포트로 전달하기 위해 (MAC) 주소를 사용합니다.
A switch maintains a (forwarding table or MAC address table) to map MAC addresses to specific switch ports. | 스위치는 MAC 주소를 특정 스위치 포트에 매핑하기 위해 (전송 테이블 또는 MAC 주소 테이블)을 유지합니다.
When a switch receives a frame with a destination MAC address not in its table, it performs (flooding) to send the frame to all ports except the source. | 스위치가 테이블에 없는 목적지 MAC 주소를 가진 프레임을 수신하면, 소스를 제외한 모든 포트로 프레임을 보내는 (플러딩)을 수행합니다.
The Spanning Tree Protocol (STP) is used to prevent (loops) in networks with redundant switch connections. | 스패닝 트리 프로토콜(STP)은 중복 스위치 연결이 있는 네트워크에서 (루프)를 방지하는 데 사용됩니다.
Switches reduce network congestion by creating separate (collision) domains for each connected device. | 스위치는 각 연결된 장치에 대해 별도의 (충돌) 도메인을 생성하여 네트워크 혼잡을 줄입니다.
A link layer switch operates primarily at the (Data Link) layer of the OSI model. | 링크 계층 스위치는 주로 OSI 모델의 (데이터 링크) 계층에서 작동합니다.
In modern networks, switches are often used in a (star) topology to connect devices. | 현대 네트워크에서 스위치는 장치를 연결하기 위해 종종 (성형) 토폴로지에서 사용됩니다.
1.3 VLAN and MPLS |
VLANs are implemented to improve (network performance) by segmenting networks into smaller, manageable sections. | VLAN은 네트워크를 더 작고 관리하기 쉬운 섹션으로 분할하여 (네트워크 성능)을 향상시키기 위해 구현됩니다.
VLANs operate at the (Data Link) layer of the OSI model. | VLAN은 OSI 모델의 (데이터 링크) 계층에서 작동합니다.
VLANs can reduce (unnecessary traffic or broadcast traffic) by limiting broadcasts to a specific VLAN. | VLAN은 특정 VLAN으로 브로드캐스트를 제한하여 (불필요한 트래픽)을 줄일 수 있습니다.
A VLAN can span across multiple switches using a (trunk) link. | VLAN은 (트렁크) 링크를 사용하여 여러 스위치에 걸쳐 확장될 수 있습니다.
(VLAN Trunking Protocol (VTP)) is used to distribute VLAN information across switches in a network. | (VTP)는 네트워크의 스위치 전체에 VLAN 정보를 배포하는 데 사용됩니다.
In MPLS, packets are forwarded based on a (label) rather than a destination IP address. | MPLS에서 패킷은 목적지 IP 주소가 아닌 (라벨)을 기반으로 전달됩니다.
MPLS allows for faster packet forwarding by eliminating the need for (IP) lookups at each router. | MPLS는 각 라우터에서 (IP) 조회의 필요성을 제거하여 더 빠른 패킷 전달을 가능하게 합니다.
MPLS supports multiple types of traffic, such as (IP) and (non-IP) traffic, in a single network. | MPLS는 단일 네트워크에서 (IP) 및 (비 IP) 트래픽과 같은 여러 유형의 트래픽을 지원합니다.
The (Label Edge) router is responsible for adding labels to incoming packets from external networks in MPLS. | (레이블 에지) 라우터는 MPLS에서 외부 네트워크로부터 들어오는 패킷에 라벨을 추가하는 역할을 합니다.
The (Label Switch) router makes forwarding decisions based solely on the label and does not modify the packet's label. | (레이블 스위치) 라우터는 오직 라벨에 기반하여 전달 결정을 내리며 패킷의 라벨을 수정하지 않습니다.
MPLS enables the creation of (Label Switched Paths - LSPs) to define specific, optimized paths for traffic, improving network performance. | MPLS는 트래픽에 대한 특정하고 최적화된 경로를 정의하는 (LSP) 생성을 가능하게 하여 네트워크 성능을 향상시킵니다.
(MPLS Label Distribution Protocol (LDP)) is a protocol that generates, distributes, and takes care of various labels in the MPLS network. | (LDP)는 MPLS 네트워크에서 다양한 라벨을 생성, 배포 및 관리하는 프로토콜입니다.
MPLS can be used for (traffic engineering) by directing traffic along pre-configured paths and controlling the bandwidth of each flow. | MPLS는 미리 구성된 경로를 따라 트래픽을 유도하고 각 흐름의 대역폭을 제어함으로써 (트래픽 엔지니어링)에 사용될 수 있습니다.
HW05A: Software Defined Networks (Answers) |
1.1 SDN |
The concept of SDN is based on decoupling the (data) plane from the (control) plane, allowing network control to be centrally managed. | SDN의 개념은 (데이터) 평면과 (제어) 평면을 분리하여 네트워크 제어를 중앙에서 관리할 수 있게 하는 것에 기초합니다.
In SDN, a central (controller) controls multiple network devices and defines the flow of traffic within the network. | SDN에서는 중앙 (컨트롤러)가 여러 네트워크 장치를 제어하고 네트워크 내의 트래픽 흐름을 정의합니다.
The protocol most commonly associated with SDN for managing network traffic flow rules is (OpenFlow). | 네트워크 트래픽 흐름 규칙을 관리하기 위해 SDN과 가장 일반적으로 관련된 프로토콜은 (OpenFlow)입니다.
The three main layers of an SDN architecture are the (application) layer, the (control) layer, and the (data) layer. | SDN 아키텍처의 세 가지 주요 계층은 (애플리케이션) 계층, (제어) 계층, (데이터) 계층입니다.
SDN uses a (northbound) interface between the control layer and the application layer to allow communication and policy enforcement. | SDN은 통신 및 정책 시행을 허용하기 위해 제어 계층과 애플리케이션 계층 사이에 (노스바운드) 인터페이스를 사용합니다.
The (southbound) interface connects the control plane to network devices, enabling the controller to manage the data plane. | (사우스바운드) 인터페이스는 제어 평면을 네트워크 장치에 연결하여 컨트롤러가 데이터 평면을 관리할 수 있게 합니다.
An SDN controller can use (telemetry or monitoring tools) to gather and report statistics about network performance. | SDN 컨트롤러는 (원격 측정 또는 모니터링 도구)를 사용하여 네트워크 성능에 대한 통계를 수집하고 보고할 수 있습니다.
(Open vSwitch or OVS) is a virtual switch commonly used in SDN to handle traffic between virtual machines. | (Open vSwitch 또는 OVS)는 가상 머신 간의 트래픽을 처리하기 위해 SDN에서 일반적으로 사용되는 가상 스위치입니다.
(NETCONF) protocol is used for configuration management in SDN. | (NETCONF) 프로토콜은 SDN에서 구성 관리에 사용됩니다.
1.2 OpenFlow |
The (OpenFlow) protocol is a standard communication interface that allows an SDN controller to interact directly with the forwarding plane of network devices. | (OpenFlow) 프로토콜은 SDN 컨트롤러가 네트워크 장치의 전달 평면과 직접 상호 작용할 수 있게 하는 표준 통신 인터페이스입니다.
The organization responsible for OpenFlow standards is the (Open Networking Foundation or ONF). | OpenFlow 표준을 담당하는 조직은 (ONF)입니다.
OpenFlow switches use (flow) tables to determine how to handle packets based on specified flow entries. | OpenFlow 스위치는 지정된 흐름 항목에 따라 패킷을 처리하는 방법을 결정하기 위해 (플로우) 테이블을 사용합니다.
In OpenFlow protocol, the (OUTPUT) action forwards the packet to a specified port. | OpenFlow 프로토콜에서 (OUTPUT) 동작은 패킷을 지정된 포트로 전달합니다.
The (group) table is used to implement flooding, multicast, and broadcast forwarding. | (그룹) 테이블은 플러딩, 멀티캐스트 및 브로드캐스트 전달을 구현하는 데 사용됩니다.
1.3 Virtual Network Functions |
(Network virtualization) allows multiple virtual networks to run on the same physical infrastructure. | (네트워크 가상화)를 통해 동일한 물리적 인프라에서 여러 가상 네트워크를 실행할 수 있습니다.
In SDN, (VNFs or Virtual Network Functions) are virtualized versions of network functions such as firewalls, load balancers, and routers. | SDN에서 (VNF)는 방화벽, 로드 밸런서 및 라우터와 같은 네트워크 기능의 가상화된 버전입니다.
The (Open Networking Foundation or ONF) foundation is an organization that promotes the development and adoption of SDN and NFV technologies. | (ONF) 재단은 SDN 및 NFV 기술의 개발과 채택을 촉진하는 조직입니다.
(vSwitch/Virtual Switch) is a software implementation of a physical switch. | (vSwitch/가상 스위치)는 물리적 스위치의 소프트웨어 구현입니다.
(VPN or Virtual Private Network) is a network virtualization technology that enables private, secure connections over a shared or public network. | (VPN)은 공유 또는 공용 네트워크를 통해 비공개 보안 연결을 가능하게 하는 네트워크 가상화 기술입니다.
(VLAN or Virtual Local Area Network) isolated network segments within a single physical network, often used for security or multi-tenant environments. | (VLAN)은 단일 물리적 네트워크 내의 격리된 네트워크 세그먼트로, 종종 보안 또는 멀티 테넌트 환경에 사용됩니다.
HW04A: Routing & IP (Answers) |
1.1 Routing |
Routers operate at the (network) layer of the OSI model. | 라우터는 OSI 모델의 (네트워크) 계층에서 작동합니다.
The device that connects different networks and routes traffic between them is called a(n) (router). | 서로 다른 네트워크를 연결하고 그 사이에서 트래픽을 라우팅하는 장치를 (라우터)라고 합니다.
A router typically has two or more (network) interfaces, each connected to a different network. | 라우터는 일반적으로 두 개 이상의 (네트워크) 인터페이스를 가지며, 각 인터페이스는 다른 네트워크에 연결됩니다.
Routers use the (routing) protocol to exchange routing information between them. | 라우터는 라우팅 정보를 교환하기 위해 (라우팅) 프로토콜을 사용합니다.
Routers can also be configured to act as a (firewall) which blocks or allows traffic based on certain security rules. | 라우터는 특정 보안 규칙에 따라 트래픽을 차단하거나 허용하는 (방화벽) 역할을 하도록 구성될 수도 있습니다.
A router that connects two networks with different IP address schemes is called a (gateway) router. | 서로 다른 IP 주소 체계를 가진 두 네트워크를 연결하는 라우터를 (게이트웨이) 라우터라고 합니다.
The act of dividing a large network into smaller subnets to improve performance and security is called (subnetting or Network Segmentation). | 성능과 보안을 향상시키기 위해 대규모 네트워크를 더 작은 서브넷으로 나누는 행위를 (서브네팅)이라고 합니다.
A router's interface is typically configured with an IP address and a corresponding (subnet mask) to define the local network's range. | 라우터의 인터페이스는 일반적으로 로컬 네트워크의 범위를 정의하기 위해 IP 주소와 해당 (서브넷 마스크)로 구성됩니다.
The most common intra-AS routing protocol is (RIP (Routing Information Protocol)) which uses the distance-vector method to find the best path. | 가장 일반적인 AS 내부 라우팅 프로토콜은 (RIP)이며, 이는 거리 벡터 방식을 사용하여 최적의 경로를 찾습니다.
The routing protocol that uses a link-state method to find the best path and is commonly used in larger networks is (OSPF (Open Shortest Path First)). | 링크 상태 방식을 사용하여 최적의 경로를 찾고 대규모 네트워크에서 일반적으로 사용되는 라우팅 프로토콜은 (OSPF)입니다.
The routing protocol used to exchange routing information between different autonomous systems (AS) on the internet is (BGP (Border Gateway Protocol)). | 인터넷상의 서로 다른 자율 시스템(AS) 간에 라우팅 정보를 교환하는 데 사용되는 라우팅 프로토콜은 (BGP)입니다.
In RIP, each router sends its entire routing table to its neighbors every (30) seconds. | RIP에서 각 라우터는 전체 라우팅 테이블을 (30)초마다 이웃에게 보냅니다.
The main disadvantage of RIP is that it is limited to a maximum hop count of (15) which can restrict its scalability. | RIP의 주요 단점은 최대 홉 수가 (15)로 제한되어 있어 확장성이 제한될 수 있다는 것입니다.
OSPF uses the concept of a (area) which is a logical grouping of routers that share the same routing information. | OSPF는 동일한 라우팅 정보를 공유하는 라우터의 논리적 그룹인 (영역)의 개념을 사용합니다.
OSPF routers use the (Dijkstra) algorithm to calculate the shortest path to each destination. | OSPF 라우터는 각 목적지까지의 최단 경로를 계산하기 위해 (다익스트라) 알고리즘을 사용합니다.
EIGRP (Enhanced Interior Gateway Routing Protocol) is a hybrid routing protocol that combines the best features of (distance-vector) and (link-state) protocols. | EIGRP는 (거리 벡터) 및 (링크 상태) 프로토콜의 장점을 결합한 하이브리드 라우팅 프로토콜입니다.
1.2 IPv4 |
The length of the IPv4 address is (32) bits. | IPv4 주소의 길이는 (32)비트입니다.
The minimum length of an IPv4 packet header is (20) bytes. | IPv4 패킷 헤더의 최소 길이는 (20)바이트입니다.
The maximum size of an IPv4 packet is (65,535) bytes. | IPv4 패킷의 최대 크기는 (65,535)바이트입니다.
The Maximum Transmission Unit (MTU) value is (1500) bytes. | 최대 전송 단위(MTU) 값은 (1500)바이트입니다.
The four main classes of IPv4 addresses are (A), (B), (C), and (D). | IPv4 주소의 네 가지 주요 클래스는 (A), (B), (C), (D)입니다.
The address range for Class A IPv4 addresses is from (0.0.0.0) to (127.255.255.255). | 클래스 A IPv4 주소의 범위는 (0.0.0.0)에서 (127.255.255.255)까지입니다.
The address range for Class B IPv4 addresses is from (128.0.0.0) to (191.255.255.255). | 클래스 B IPv4 주소의 범위는 (128.0.0.0)에서 (191.255.255.255)까지입니다.
The address range for Class C IPv4 addresses is from (192.0.0.0) to (223.255.255.255). | 클래스 C IPv4 주소의 범위는 (192.0.0.0)에서 (223.255.255.255)까지입니다.
Class D addresses, used for multicast, range from (224.0.0.0) to (239.255.255.255). | 멀티캐스트에 사용되는 클래스 D 주소는 (224.0.0.0)에서 (239.255.255.255)까지입니다.
The address 127.0.0.1 is known as the (loopback) address, which refers to the local machine. | 주소 127.0.0.1은 로컬 머신을 나타내는 (루프백) 주소로 알려져 있습니다.
1.3 IPv6 |
The length of the IPv6 address is (128) bits. | IPv6 주소의 길이는 (128)비트입니다.
The size of an IPv6 header is (40) bytes. | IPv6 헤더의 크기는 (40)바이트입니다.
Write three major categories/types of IPv6 addresses: i. (Unicast), ii. (Multicast), iii. (Anycast). | IPv6 주소의 세 가지 주요 범주/유형은 (유니캐스트), (멀티캐스트), (애니캐스트)입니다.
Write six categories/types of IPv6 unicast addresses: i. (Global Unicast), ii. (Unique Local), iii. (Link-Local), iv. (Site-Local), v. (Unspecified), vi. (Loopback). | IPv6 유니캐스트 주소의 6가지 유형은 (글로벌 유니캐스트), (유니크 로컬), (링크 로컬), (사이트 로컬), (미지정), (루프백)입니다.
An IPv6 (unicast) address is used to identify a single unique interface on a device. | IPv6 (유니캐스트) 주소는 장치의 단일 고유 인터페이스를 식별하는 데 사용됩니다.
IPv6 (multicast) addresses are used to deliver packets to multiple interfaces, typically for group communication within the same subnet. | IPv6 (멀티캐스트) 주소는 일반적으로 동일한 서브넷 내의 그룹 통신을 위해 여러 인터페이스로 패킷을 전달하는 데 사용됩니다.
IPv6 (link-local) addresses are used to communicate with devices within the same local network segment and start with "FE80." | IPv6 (링크 로컬) 주소는 동일한 로컬 네트워크 세그먼트 내의 장치와 통신하는 데 사용되며 "FE80"으로 시작합니다.
The IPv6 (loopback) address is similar to an IPv4 loopback address and is used by a device to send packets to itself. | IPv6 (루프백) 주소는 IPv4 루프백 주소와 유사하며 장치가 자신에게 패킷을 보내는 데 사용됩니다.
IPv6 (unique local) addresses are not assigned to specific interfaces and cannot be routed across the internet. They are reserved for unique, private communications. | IPv6 (유니크 로컬) 주소는 특정 인터페이스에 할당되지 않으며 인터넷을 통해 라우팅할 수 없습니다. 이는 고유한 비공개 통신을 위해 예약되어 있습니다.
An IPv6 (multicast) address starts with "FF" and is intended for delivery to a group of hosts, rather than a single interface. | IPv6 (멀티캐스트) 주소는 "FF"로 시작하며 단일 인터페이스가 아닌 호스트 그룹으로의 전달을 목적으로 합니다.
The IPv6 (link-local) address type enables communication with all devices on a local link, without the need for a router. | IPv6 (링크 로컬) 주소 유형은 라우터 없이 로컬 링크의 모든 장치와 통신할 수 있게 합니다.
An IPv6 address beginning with "2000" through "3FFF" is classified as a (global unicast) address, which is routable on the public internet. | "2000"에서 "3FFF"로 시작하는 IPv6 주소는 공용 인터넷에서 라우팅 가능한 (글로벌 유니캐스트) 주소로 분류됩니다.
The (anycast) address type in IPv6 is used to identify a set of interfaces across different devices, such as all devices on a network segment. | IPv6의 (애니캐스트) 주소 유형은 네트워크 세그먼트의 모든 장치와 같이 서로 다른 장치에 걸친 인터페이스 집합을 식별하는 데 사용됩니다.
IPv6 addresses beginning with "FC00" or "FD00" are considered (unique local) addresses, intended for private, non-routable network use. | "FC00" 또는 "FD00"으로 시작하는 IPv6 주소는 개인용, 비라우팅 네트워크 사용을 목적으로 하는 (유니크 로컬) 주소로 간주됩니다.
The IPv6 address "FF02::1" is a (multicast (all-nodes multicast)) address used to reach all nodes on a local link. | IPv6 주소 "FF02::1"은 로컬 링크의 모든 노드에 도달하는 데 사용되는 (멀티캐스트) 주소입니다.
IPv6 (link-local) addresses provide automatic address configuration and facilitate connectivity within a local network. | IPv6 (링크 로컬) 주소는 자동 주소 구성을 제공하고 로컬 네트워크 내 연결을 용이하게 합니다.
(Link-local) addresses in IPv6 are typically generated automatically, and their scope is restricted to a single link or network segment. | IPv6의 (링크 로컬) 주소는 일반적으로 자동으로 생성되며 범위는 단일 링크 또는 네트워크 세그먼트로 제한됩니다.
The IPv6 (anycast) address type does not exist in IPv4 and allows a single address to represent multiple devices, which can each respond to requests as needed. | IPv6 (애니캐스트) 주소 유형은 IPv4에는 존재하지 않으며, 단일 주소가 여러 장치를 나타내도록 하여 필요에 따라 각 장치가 요청에 응답할 수 있게 합니다.
The standard notation for an IPv6 address is (hexadecimal) notation, using colons to separate blocks. | IPv6 주소의 표준 표기법은 콜론을 사용하여 블록을 구분하는 (16진수) 표기법입니다.
The IPv6 loopback address is (::1). | IPv6 루프백 주소는 (::1)입니다.
An IPv6 address that starts with "FE80" is classified as a (link-local) address. | "FE80"으로 시작하는 IPv6 주소는 (링크 로컬) 주소로 분류됩니다.
(Multicast) is a type of IPv6 address used to deliver a packet to multiple interfaces, typically within a defined group. | (멀티캐스트)는 일반적으로 정의된 그룹 내의 여러 인터페이스로 패킷을 전달하는 데 사용되는 IPv6 주소 유형입니다.
IPv6 does not use (fragmentation) which was used in IPv4 to fragment packets along the network path. | IPv6는 네트워크 경로를 따라 패킷을 조각화하기 위해 IPv4에서 사용되었던 (단편화)를 사용하지 않습니다.
In IPv6, addresses that begin with "FF" are (multicast) addresses. | IPv6에서 "FF"로 시작하는 주소는 (멀티캐스트) 주소입니다.
The IPv6 address type that allows for the automatic configuration of IP addresses is known as (Stateless Address Autoconfiguration (SLAAC)). | IP 주소의 자동 구성을 허용하는 IPv6 주소 유형을 (SLAAC)라고 합니다.
IPv6 has integrated (IPsec) support to improve security, whereas in IPv4, it was optional. | IPv6에는 보안을 강화하기 위해 (IPsec) 지원이 통합되어 있는 반면, IPv4에서는 선택 사항이었습니다.
The IPv6 (unspecified) address (::) is known as the "unspecified" address and is used when a device has not yet been assigned an IP address. | IPv6 (미지정) 주소(::)는 장치에 아직 IP 주소가 할당되지 않았을 때 사용됩니다.
The IPv6 (multicast) address type includes addresses that start with "FF" and is used for sending data to multiple devices as part of a group. | IPv6 (멀티캐스트) 주소 유형에는 "FF"로 시작하는 주소가 포함되며 그룹의 일부인 여러 장치로 데이터를 전송하는 데 사용됩니다.
`;

  // --- 4. State & Ref ---
  const [gameState, setGameState] = useState<GameState>('menu');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [currentQuestions, setCurrentQuestions] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [score, setScore] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flashcard Mode State
  const [flashcardItem, setFlashcardItem] = useState<QuizItem | null>(null);
  const [flashcardCount, setFlashcardCount] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  // Sentence Mode State
  const [sentenceData, setSentenceData] = useState<SentenceItem[]>([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [isSentenceRevealed, setIsSentenceRevealed] = useState<boolean>(false);

  // --- 5. Logic: Parse Sentences ---
  useEffect(() => {
    // Parse raw text into structured data
    const lines = rawSentenceText.split('\n');
    let currentCategory = "General";
    const parsedData: SentenceItem[] = [];
    let idCounter = 1;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Check for headers
      if (/^(\d+\.\d+|HW\d+[A-Z]*)/.test(trimmed)) {
        currentCategory = trimmed.replace('|', '').trim(); // Remove delimiter from header if present
        return;
      }

      // Check for sentences with blanks (parentheses)
      if (trimmed.includes('(') && trimmed.includes(')')) {
        // Split English and Korean parts
        const splitLine = trimmed.split('|');
        const englishText = splitLine[0].trim();
        const translation = splitLine[1] ? splitLine[1].trim() : "";

        const parts: { text: string; isAnswer: boolean }[] = [];
        const answers: string[] = [];
        
        // Regex to split by (answer)
        const splitRegex = /(\([^)]+\))/g;
        const tokens = englishText.split(splitRegex);

        tokens.forEach(token => {
          if (token.startsWith('(') && token.endsWith(')')) {
            // It's an answer
            const ans = token.slice(1, -1); // remove parens
            parts.push({ text: ans, isAnswer: true });
            answers.push(ans);
          } else if (token.length > 0) {
            // It's normal text
            parts.push({ text: token, isAnswer: false });
          }
        });

        parsedData.push({
          id: idCounter++,
          category: currentCategory,
          originalText: englishText,
          translation: translation,
          parts,
          answers
        });
      }
    });

    setSentenceData(parsedData);
  }, []);

  // --- 6. Logic: Find Related Korean Explanations (Combined) ---
  const getRelatedExplanations = useMemo(() => {
    if (gameState !== 'sentence' || !sentenceData[currentSentenceIndex]) return [];
    
    const currentItem = sentenceData[currentSentenceIndex];
    const foundExplanations: QuizItem[] = [];

    currentItem.answers.forEach(answer => {
      const ansUpper = answer.toUpperCase();
      const ansLower = answer.toLowerCase();

      // Helper to add if not exists
      const addIfNotExists = (item: QuizItem) => {
        if (!foundExplanations.some(ex => ex.id === item.id)) {
          foundExplanations.push(item);
        }
      };

      // 1. Check Full Data (Acronyms)
      fullData.forEach(data => {
        // Acronym match (e.g., "CSMA" in "CSMA/CD")
        if (ansUpper.includes(data.acronym.toUpperCase())) {
          addIfNotExists(data);
        }
        // Full Term match
        if (data.fullTerm && ansLower.includes(data.fullTerm.toLowerCase())) {
          addIfNotExists(data);
        }
      });

      // 2. Check Supplementary Data (General Terms)
      supplementaryData.forEach(data => {
        // Acronym/Keyword match
        if (ansUpper.includes(data.acronym.toUpperCase())) {
           addIfNotExists(data);
        }
         // Full Term match
        if (data.fullTerm && ansLower.includes(data.fullTerm.toLowerCase())) {
           addIfNotExists(data);
        }
      });
    });

    return foundExplanations;
  }, [gameState, currentSentenceIndex, sentenceData]);


  // --- 7. Helper Functions ---
  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, gameState]);

  const startGame = (count: number | 'all') => {
    let selectedQuestions: QuizItem[] = [];
    if (count === 'all') {
      selectedQuestions = [...fullData];
    } else {
      const shuffled = [...fullData].sort(() => 0.5 - Math.random());
      selectedQuestions = shuffled.slice(0, count);
    }
    setCurrentQuestions(selectedQuestions);
    setQuestionCount(selectedQuestions.length);
    setCurrentIndex(0);
    setScore(0);
    setWrongAnswers([]);
    setGameState('playing');
    resetQuestionState();
  };

  const startFlashcardMode = () => {
    setGameState('flashcard');
    setFlashcardCount(1);
    setFlashcardItem(getRandomItem());
    setIsRevealed(false);
  };

  const startSentenceMode = () => {
    setGameState('sentence');
    const shuffled = [...sentenceData].sort(() => 0.5 - Math.random());
    setSentenceData(shuffled);
    setCurrentSentenceIndex(0);
    setIsSentenceRevealed(false);
  }

  const getRandomItem = (): QuizItem => {
    const randomIndex = Math.floor(Math.random() * fullData.length);
    return fullData[randomIndex];
  };

  const nextFlashcard = useCallback(() => {
    let newItem = getRandomItem();
    if (fullData.length > 1) {
       while (newItem.id === flashcardItem?.id) {
        newItem = getRandomItem();
      }
    }
    setFlashcardItem(newItem);
    setFlashcardCount(prev => prev + 1);
    setIsRevealed(false);
  }, [flashcardItem, fullData]);

  const nextSentence = useCallback(() => {
    setCurrentSentenceIndex(prev => (prev + 1) % sentenceData.length);
    setIsSentenceRevealed(false);
  }, [sentenceData.length]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (gameState === 'flashcard') {
          e.preventDefault();
          if (!isRevealed) setIsRevealed(true);
          else nextFlashcard();
        } else if (gameState === 'sentence') {
          e.preventDefault();
          if (!isSentenceRevealed) setIsSentenceRevealed(true);
          else nextSentence();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, isRevealed, nextFlashcard, isSentenceRevealed, nextSentence]);


  const resetQuestionState = () => {
    setInputValue('');
    setShowHint(false);
    setFeedback(null);
  };

  const normalizeString = (str: string): string => {
    return str.toLowerCase().replace(/[\s-]/g, '');
  };

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback) return;

    const currentQ = currentQuestions[currentIndex];
    const isCorrect = normalizeString(inputValue) === normalizeString(currentQ.fullTerm);

    if (isCorrect) {
      setFeedback('correct');
      setScore(prev => prev + 1);
    } else {
      setFeedback('incorrect');
      setWrongAnswers(prev => [...prev, {
        ...currentQ,
        userAnswer: inputValue
      }]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      setGameState('result');
    }
  };

  // --- Render Sections ---

  // 1. Menu
  if (gameState === 'menu') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border-t-4 border-indigo-600">
          <BookOpen className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
          <h1 className="text-3xl font-bold mb-2">네트워크 마스터</h1>
          <p className="text-slate-500 mb-8">약어 암기 및 핵심 문장 학습</p>
          
          <div className="space-y-3">
            <button onClick={() => startGame(10)} className="w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" /> 약어 퀴즈 (10문제)
            </button>
            <button onClick={() => startGame(20)} className="w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" /> 약어 퀴즈 (20문제)
            </button>
            <button onClick={() => startGame('all')} className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200">
              약어 전체 109문제 도전
            </button>
            
            <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
              <button onClick={startFlashcardMode} className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                <Repeat className="w-5 h-5" /> 무한 약어 단어장
              </button>
              <button onClick={startSentenceMode} className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" /> 문장 빈칸 채우기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Result
  if (gameState === 'result') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-slate-800">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border-t-4 border-indigo-600">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold mb-2">결과 리포트</h2>
            <div className="text-5xl font-black text-indigo-600 my-4">
              {score} / {questionCount}
            </div>
            <p className="text-slate-500">
              {score === questionCount ? "완벽합니다! 모든 약어를 마스터하셨네요!" : "수고하셨습니다. 틀린 문제를 확인해보세요."}
            </p>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4 text-red-500 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> 오답 노트 ({wrongAnswers.length})
              </h3>
              <div className="bg-red-50 rounded-xl overflow-hidden border border-red-100 max-h-96 overflow-y-auto">
                {wrongAnswers.map((item, idx) => (
                  <div key={idx} className="p-4 border-b border-red-100 last:border-0 hover:bg-red-100 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 text-lg">{item.acronym}</span>
                      <span className="text-xs font-mono bg-red-200 text-red-800 px-2 py-1 rounded">오답: {item.userAnswer}</span>
                    </div>
                    <div className="text-indigo-700 font-medium">{item.fullTerm}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={() => setGameState('menu')} 
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <RotateCcw className="w-5 h-5" /> 다시 시작하기
          </button>
        </div>
      </div>
    );
  }

  // 3. Sentence Mode (New)
  if (gameState === 'sentence') {
    const currentSentence = sentenceData[currentSentenceIndex];
    const relatedExplanations = getRelatedExplanations;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative">
        <button 
          onClick={() => setGameState('menu')}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors"
          title="메뉴로 돌아가기"
        >
          <Home className="w-6 h-6" />
        </button>

        <div className="w-full max-w-3xl">
           <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none"
            onClick={() => !isSentenceRevealed ? setIsSentenceRevealed(true) : nextSentence()}
          >
             {/* Category Header */}
            <div className="bg-blue-50 px-6 py-3 flex items-center gap-2 border-b border-blue-100">
               <Tag className="w-4 h-4 text-blue-600" />
               <span className="font-bold text-blue-800 text-sm uppercase tracking-wide">{currentSentence?.category}</span>
               <span className="ml-auto text-blue-400 text-xs">#{currentSentence?.id}</span>
            </div>

            <div className="flex-1 p-10 flex flex-col justify-center">
              {/* English Sentence */}
              <div className="text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 mb-6">
                {currentSentence?.parts.map((part, idx) => (
                  <span key={idx} className={part.isAnswer ? "font-bold mx-1" : ""}>
                    {part.isAnswer ? (
                      isSentenceRevealed ? (
                        <span className="text-blue-600 underline decoration-2 underline-offset-4 animate-fade-in">{part.text}</span>
                      ) : (
                        <span className="bg-slate-200 text-slate-200 rounded px-2 select-none">( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
                      )
                    ) : (
                      part.text
                    )}
                  </span>
                ))}
              </div>

              {/* Korean Translation (New) */}
              {isSentenceRevealed && currentSentence?.translation && (
                 <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-400 animate-fade-in mb-6">
                    <div className="flex items-center gap-2 text-slate-500 mb-1 font-bold text-xs uppercase">
                        <Languages className="w-4 h-4" /> 한국어 해석
                    </div>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed break-keep">
                        {currentSentence.translation}
                    </p>
                 </div>
              )}

              {/* Related Explanations (Show when revealed) */}
              {isSentenceRevealed && relatedExplanations.length > 0 && (
                <div className="mt-4 pt-6 border-t border-slate-100 animate-fade-in-up">
                  <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" /> 관련 용어 해설
                  </h3>
                  <div className="grid gap-3">
                    {relatedExplanations.map(exp => (
                      <div key={exp.id} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-blue-700">{exp.acronym}</span>
                          <span className="text-xs text-blue-400">({exp.fullTerm})</span>
                        </div>
                        <p className="text-slate-700 text-sm">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fallback if no specific acronym found but revealed */}
              {isSentenceRevealed && relatedExplanations.length === 0 && (
                <div className="mt-4 pt-6 border-t border-slate-100 animate-fade-in-up">
                  <p className="text-slate-500 text-sm text-center italic">
                    스페이스바를 눌러 다음 문장으로 넘어갑니다.
                  </p>
                </div>
              )}
            </div>

             {/* Footer Prompt */}
            {!isSentenceRevealed && (
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center text-slate-400 animate-pulse">
                 <span className="flex items-center gap-2 text-sm font-semibold">
                    <Eye className="w-4 h-4" /> 탭하여 정답 확인
                 </span>
              </div>
            )}
            {isSentenceRevealed && (
              <div className="p-4 bg-blue-500 text-white flex justify-center hover:bg-blue-600 transition-colors">
                 <span className="flex items-center gap-2 text-lg font-bold">
                    다음 문장 <ArrowRight className="w-5 h-5" />
                 </span>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Keyboard className="w-4 h-4" />
            <span>스페이스바(Space)를 눌러 넘기세요</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Flashcard Mode
  if (gameState === 'flashcard') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800 relative">
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md font-bold text-emerald-600 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <span>본 단어 수: {flashcardCount}</span>
        </div>
        
        <button 
          onClick={() => setGameState('menu')}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md text-slate-500 hover:text-slate-800 transition-colors"
          title="메뉴로 돌아가기"
        >
          <Home className="w-6 h-6" />
        </button>

        <div className="w-full max-w-xl">
          <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-emerald-500 min-h-[400px] flex flex-col relative cursor-pointer group select-none"
            onClick={() => !isRevealed ? setIsRevealed(true) : nextFlashcard()}
          >
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
               <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-6">No. {flashcardItem?.id}</span>
              
              <h1 className="text-7xl font-black text-slate-800 tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-300">
                {flashcardItem?.acronym}
              </h1>
              
              <div className="w-full h-px bg-slate-100 mb-6"></div>
              
              {isRevealed ? (
                <>
                  <h2 className="text-2xl font-bold text-emerald-700 mb-3 animate-fade-in-up">
                    {flashcardItem?.fullTerm}
                  </h2>
                  
                  <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md animate-fade-in-up delay-75">
                    {flashcardItem?.desc}
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center py-6 text-slate-300 animate-pulse">
                  <div className="bg-slate-100 p-3 rounded-full mb-3">
                    <Eye className="w-8 h-8 text-slate-400" />
                  </div>
                  <span className="font-bold text-sm">탭하여 정답 확인</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  nextFlashcard();
                }}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 active:scale-95 transform"
              >
                다음 단어 <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Keyboard className="w-4 h-4" />
            <span>스페이스바(Space)를 눌러 넘기세요</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. Regular Quiz Game
  const currentQ = currentQuestions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans text-slate-800">
      <div className="w-full max-w-xl">
        {/* Progress Bar */}
        <div className="mb-6 flex items-center justify-between text-sm font-semibold text-slate-500">
          <span>Question {currentIndex + 1} / {questionCount}</span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
          <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / questionCount) * 100}%` }}></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-indigo-600">
          <div className="p-10 text-center bg-slate-50 border-b border-slate-100">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4">No. {currentQ.id}</span>
            <h1 className="text-6xl font-black text-indigo-900 tracking-tighter mb-2">{currentQ.acronym}</h1>
            <p className="text-slate-400 text-sm">Full Name을 입력하세요</p>
          </div>

          <div className="p-8">
            {/* Input Form */}
            {!feedback ? (
              <form onSubmit={checkAnswer}>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                  placeholder="예: Software Defined Networking"
                  className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all mb-4 text-center placeholder:text-slate-300"
                  autoComplete="off"
                />
                
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setShowHint(!showHint)}
                    className="flex-1 py-3 px-4 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <HelpCircle className="w-5 h-5" /> 힌트 보기
                  </button>
                  <button 
                    type="submit"
                    className="flex-[2] py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-200"
                  >
                    정답 확인
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center animate-fade-in-up">
                {feedback === 'correct' ? (
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-1">정답입니다!</h3>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <X className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-500 mb-1">오답입니다</h3>
                    <p className="text-slate-400 text-sm mb-2">내가 쓴 답: {inputValue}</p>
                    <div className="p-3 bg-indigo-50 rounded-lg inline-block w-full">
                      <p className="text-indigo-800 font-bold text-lg">{currentQ.fullTerm}</p>
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={nextQuestion}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  다음 문제 <Play className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Hint Section */}
            {(showHint || feedback) && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-center">
                <span className="block text-xs font-bold text-yellow-600 mb-1">💡 암기 팁</span>
                <p className="text-slate-700 font-medium">{currentQ.desc}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          띄어쓰기, 대소문자, 하이픈(-)은 틀려도 정답 처리됩니다.
        </div>
      </div>
    </div>
  );
};

export default NetworkQuiz;