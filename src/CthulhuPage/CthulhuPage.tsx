import React, { useState, useEffect } from 'react';

// 촌스러운 효과를 위한 인라인 스타일 및 컴포넌트들
const RainbowText = ({ children }: { children: React.ReactNode }) => (
  <span className="animate-rainbow font-bold text-xl md:text-3xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
    {children}
  </span>
);

const BlinkText = ({ children, color = "text-red-500" }: { children: React.ReactNode, color?: string }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);
  return <span className={`${visible ? 'opacity-100' : 'opacity-0'} ${color}`}>{children}</span>;
};

const Marquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden whitespace-nowrap bg-blue-800 text-yellow-300 border-y-4 border-red-600 font-mono p-1">
    <div className="animate-marquee inline-block text-lg">
      +++ {text} +++ {text} +++ {text} +++
    </div>
  </div>
);

// 일지 데이터
// 일지 데이터 (확장판)
const journalEntries = [
  {
    date: "2024년 10월 1일",
    title: "계절에 맞지 않는 습기",
    content: "10월임에도 불구하고 대기가 마치 늪지대처럼 무겁고 축축하다. 창문을 닫아도 스며드는 이 끈적한 습기는 단순한 날씨 탓이 아닌 것 같다. 빗물에서는 맡아본 적 없는 기이한 악취가 난다. 마치 수천 년 동안 고인 웅덩이에서 퍼올린 듯한, 비릿하면서도 금속성 냄새가 섞인 짠내다. 해안가와는 수백 킬로미터나 떨어진 이 내륙 도시에서 왜 심해의 부패한 냄새가 진동하는 것일까? 머리가 멍하고 속이 메스껍다. 단순한 기분 탓이라고 믿고 싶지만, 본능이 무언가 잘못되었다고 경고하고 있다.",
    sanityLevel: 98
  },
  {
    date: "2024년 10월 5일",
    title: "기하학적 악몽",
    content: "어젯밤, 나는 잠들지 말았어야 했다. 꿈속에서 나는 거대한 녹색 석재로 지어진 도시를 헤매고 있었다. 그곳의 건축 양식은 인류의 역사 그 어디에도 존재하지 않는 것이었다. 건물들은 '비유클리드 기하학'적으로 뒤틀려 있었고, 오목한지 볼록한지조차 구분할 수 없는 벽면이 시야를 어지럽혔다. 저 멀리 보이는 거대한 문은 분명히 수직으로 서 있었지만, 동시에 수평으로 누워있는 듯한 모순된 감각을 주었다. 깨어난 지 한참이 지났지만, 그 압도적인 거대함에 눌린 공포가 가시질 않는다. 시야 구석에서 자꾸만 그 도시의 잔상이 어른거린다.",
    sanityLevel: 94
  },
  {
    date: "2024년 10월 8일",
    title: "뒷골목의 골동품점",
    content: "퇴근길, 늘 다니던 길이었지만 오늘 처음 보는 낡은 골동품 가게가 눈에 띄었다. 홀린 듯 들어간 가게 내부는 먼지와 곰팡이 냄새로 가득했다. 주인이라 짐작되는 노인은 눈꺼풀이 없나 싶을 정도로 눈을 깜빡이지 않았고, 목소리는 물속에서 말하는 것처럼 걸걸했다. 그가 나를 보며 '별들의 위치가 잡혔다'고 중얼거렸을 때 나가야 했다. 하지만 진열장 구석에 놓인, 녹색 비누석(soapstone)으로 조각된 기이한 우상(Idol)이 내 발을 붙잡았다. 조잡한 솜씨였지만, 그 기괴한 형태는 뇌리에 박혀 지워지지 않는다.",
    sanityLevel: 90
  },
  {
    date: "2024년 10월 12일",
    title: "저주받은 우상",
    content: "미친 짓인 줄 알면서도 결국 그 조각상을 사들고 왔다. 책상 위에 올려두고 자세히 관찰해보니 더욱 끔찍하다. 문어의 머리를 한 인간의 형상, 혹은 인간을 닮은 용의 형상... 등 뒤에는 징그러운 비늘이 덮인 날개가 접혀 있다. 만져보면 돌인데도 불구하고 미세하게 체온이 느껴지는 것 같고, 표면은 늘 축축한 점액으로 덮여 있는 듯한 착각을 준다. 이 조각상의 눈동자가 내가 방 안 어디에 있든 나를 주시하고 있다는 느낌을 지울 수가 없다.",
    sanityLevel: 86
  },
  {
    date: "2024년 10월 15일",
    title: "동물들의 도주",
    content: "집안 분위기가 흉흉하다. 내 고양이 '네로'는 평소 온순했는데, 지금은 내 방 근처에는 얼씬도 하지 않는다. 억지로 데려오면 털을 곤두세우고 허공을 향해 미친 듯이 하악질을 해댄다. 더 기이한 것은 집 천장에서 들리던 쥐들의 발소리가 완전히 끊겼다는 것이다. 쥐덫에는 아무것도 걸리지 않았다. 그저 짐승들은 본능적으로 알고 있는 것이다. 이 집, 아니, 이 방에 포식자보다 더 상위의 존재가 도사리고 있다는 것을.",
    sanityLevel: 81
  },
  {
    date: "2024년 10월 19일",
    title: "변모하는 이웃들",
    content: "옆집 사는 존슨 씨와 엘리베이터에서 마주쳤다. 그는 평범한 회사원이었는데, 며칠 사이에 사람이 완전히 변해버렸다. 피부는 창백하다 못해 잿빛으로 변했고, 목 주변의 피부가 늘어져 주름이 잡혀 있었다. 무엇보다 끔찍한 건 그의 눈이었다. 눈꺼풀이 퇴화한 듯 튀어나온 안구는 퀭하게 초점을 잃고 있었다. 그가 내릴 때 내 귀에 대고 '다곤 님께서 기다리신다'라고 속삭였다. 그 목소리는 사람의 성대에서 나올 수 없는, 젖은 진흙이 뭉개지는 소리 같았다.",
    sanityLevel: 72
  },
  {
    date: "2024년 10월 24일",
    title: "지하의 북소리",
    content: "잠을 잘 수가 없다. 두통이 머리를 쪼개는 것 같다. 진통제를 한 통을 다 비웠지만 소용없다. 밤이 깊어지면 지하 깊은 곳, 지각 밑바닥에서부터 둥... 둥... 하는 북소리가 들려온다. 규칙적인 심장 박동 같기도 하고, 어떤 거대한 존재가 땅을 파고 올라오는 소리 같기도 하다. 이 리듬은 불규칙하고 혼란스러워서 듣고 있으면 정신이 아득해진다. 바닥에 귀를 대면 그 소리와 함께 미세한 진동이 느껴진다. 그들이 오고 있다.",
    sanityLevel: 65
  },
  {
    date: "2024년 10월 28일",
    title: "금지된 지식",
    content: "도서관의 폐쇄된 서고에 몰래 들어갔다. 내가 찾는 것이 거기에 있을 거라는 확신이 들었다. 그리고 발견했다. 압둘 알하자드가 저술했다는 '알 아지프', 즉 '네크로노미콘'의 라틴어 필사본을. 책에서는 썩은 흙냄새가 났다. 떨리는 손으로 페이지를 넘기자, 글자들이 살아서 꿈틀거렸다. 인간의 발성 기관으로는 발음할 수 없는 저주받은 주문들. 읽지 말아야 한다고 이성이 소리쳤지만, 내 눈은 이미 '옛 지배자(The Great Old Ones)'들에 대한 구절을 탐독하고 있었다.",
    sanityLevel: 55
  },
  {
    date: "2024년 10월 31일",
    title: "침식",
    content: "밖을 내다볼 수가 없다. 창밖에는 녹색의 끈적이는 안개가 가득 차 있다. 안개 속에서 거대한 촉수 같은 그림자가 꿈틀거리는 것이 보인다. 창문 틈새로 젤리 같은 점액질이 스며 들어와 바닥에 고여있다. 닦아내려 걸레를 대니 걸레가 치이익 소리를 내며 녹아버렸다. 옆집 개가 짖는 소리가 들렸는데, 갑자기 끔찍한 비명과 함께 뼈가 으스러지는 소리가 났다. 그리고 찾아온 정적. 이 세상의 것이 아닌 끔찍한 고요함이다.",
    sanityLevel: 45
  },
  {
    date: "2024년 11월 3일",
    title: "신체의 변화",
    content: "거울 속의 내가 낯설다. 내 눈동자가... 세로로 갈라져 있다. 아니, 다시 보니 정상이다. 환각인가? 하지만 목덜미가 간지러워 긁었더니 손톱 밑에 회색 비늘 같은 것이 묻어 나왔다. 목 양옆이 따끔거린다. 숨을 쉴 때마다 코가 아닌 목 옆에서 공기가 드나드는 느낌이 든다. 피부가 건조한 것을 견딜 수가 없다. 욕조에 물을 가득 받아놓고 몸을 담가야만 안정이 된다. 나는 무엇이 되어가고 있는 건가?",
    sanityLevel: 38
  },
  {
    date: "2024년 11월 7일",
    title: "뒤틀린 천구",
    content: "밤하늘이 잘못되었다. 천문학자인 친구에게 전화를 걸어 별자리가 이동했다고 소리쳤지만, 전화기 너머에서는 젖은 물소리와 비명소리만 들려왔다. 오리온자리는 제 자리에 있지 않다. 카시오페이아는 기괴하게 뒤틀려 있다. 별들이... 살아서 움직이고 있다. 그것들은 단순히 빛나는 가스가 아니다. 그것들은 우주 밖에서 우리를 내려다보는 수십억 개의 눈동자다. 그들이 나를 보고 있다. 나를 찾았다.",
    sanityLevel: 30
  },
  {
    date: "2024년 11월 12일",
    title: "단절",
    content: "모든 통신이 끊겼다. 인터넷도, 전화도 먹통이다. TV를 켜면 지직거리는 노이즈 화면 속에 기이한 형상들이 얼핏얼핏 지나간다. 그리고 그 소음 속에서 명확한 단어들이 들리기 시작했다. '이아(Iä)... 이아(Iä)...' 그것은 찬양인가? 비명인가? 내 입에서도 나도 모르게 그 소리가 흘러나온다. 머릿속이 끈적한 진흙으로 가득 찬 기분이다.",
    sanityLevel: 22
  },
  {
    date: "2024년 11월 15일",
    title: "르뤼에의 부상",
    content: "PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN. 죽은 크툴루가 그의 처소 르뤼에에서 꿈꾸며 기다린다. 이제 뜻을 알 것 같다. 아니, 기억해냈다. 바닥에서 바닷물이 솟구친다. 벽지가 젖어 뜯겨 나가고 그 뒤로 축축한 석조 벽이 드러난다. 이곳은 더 이상 내 방이 아니다. 심해다. 수압이 느껴진다. 하지만 고통스럽지 않다. 오히려 포근하다.",
    sanityLevel: 15
  },
  {
    date: "2024년 11월 18일",
    title: "방문자들",
    content: "방문 밖 복도에서 질척이는 발소리가 들린다. 찰박... 찰박... 하나가 아니다. 십수 명, 아니 수십 명의 발소리. 문 손잡이가 천천히, 아주 천천히 돌아간다. 나는 장롱 속에 숨어 숨을 죽인다. 틈새로 보이는 거실은 이미 물이 차오르고 해초들이 둥둥 떠다니고 있다. 썩은 생선 내장의 악취가 코를 찌른다. 문이 열린다. 그들이 들어온다.",
    sanityLevel: 10
  },
  {
    date: "2024년 11월 21일",
    title: "그림자의 춤",
    content: "빛은 사라졌다. 오로지 인광(燐光)만이 주위를 밝힌다. 그림자들이 제멋대로 벽에서 떨어져 나와 춤을 춘다. 내 그림자를 보았다. 머리가 있어야 할 곳에 촉수들이 꿈틀거리고 있다. 그림자가 본체다. 육체는 껍데기일 뿐이다. 나는 내 그림자를 어루만진다. 차갑고 미끈거린다. 우리는 하나다.",
    sanityLevel: 8
  },
  {
    date: "2024년 11월 24일",
    title: "포식",
    content: "인간의 음식은 역겨워서 토해버렸다. 냉장고를 뒤져 날생선을 꺼냈다. 비늘도 벗기지 않은 생선을 씹어 먹었다. 내장에서 터져 나오는 씁쓸하고 비릿한 액체가 입안 가득 퍼질 때, 나는 비로소 살아있음을 느꼈다. 더 큰 고기가 필요하다. 더 신선하고, 더 피가 흐르는...",
    sanityLevel: 5
  },
  {
    date: "2024년 11월 28일",
    title: "환희와 귀환",
    content: "두려움? 아니, 이것은 축복이다. 창문을 깨부수자 검은 파도가 2층인 내 방 안으로 들이닥쳤다. 저 멀리 수평선 너머로, 구름을 뚫고 솟아오른 거대한 그림자가 보인다. 그분의 날갯짓 한 번에 태풍이 몰아친다. 머릿속을 맴돌던 목소리가 이제는 천둥처럼 울린다. 테켈리-리! 테켈리-리! 우리는 바다로 돌아가야 해. 어머니 히드라와 아버지 다곤이 우릴 기다리신다.",
    sanityLevel: 2
  },
  {
    date: "2024년 11월 29일",
    title: "문",
    content: "심해의 아이들이 나를 둘러쌌다. 그들의 튀어나온 눈은 아름답다. 목덜미의 아가미가 벌려지며 바닷물이 폐로 들어온다. 숨이 막히지 않는다. 상쾌하다. 우리는 손을 잡고 가라앉는다. 저 아래, 녹색 빛이 감도는 웅장한 도시 르뤼에로. 영원한 생명이 그곳에 있다.",
    sanityLevel: 1
  },
  {
    date: "기록 불가",
    title: "END",
    content: "IÄ! IÄ! CTHULHU FHTAGN! IÄ! IÄ! CTHULHU FHTAGN! 별들이 제자리를 찾았다! 창문! 창문! 창문을 보라!",
    sanityLevel: 0
  }
];

export default function CthulhuPage() {
  const [sanity, setSanity] = useState(100);
  const [visitorCount, setVisitorCount] = useState(665);

  // 이성 수치가 서서히 떨어지는 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setSanity((prev) => Math.max(0, prev - 1));
    }, 500); // 더 빨리 떨어지게 수정
    return () => clearInterval(timer);
  }, []);

  // 방문자 수 증가 (666을 만들기 위함)
  useEffect(() => {
    const timer = setTimeout(() => setVisitorCount(666), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-lime-400 font-serif overflow-x-hidden selection:bg-red-500 selection:text-white">
      {/* 글로벌 스타일 주입 (Tailwind로 표현하기 힘든 구식 애니메이션) */}
      <style>{`
        @keyframes rainbow {
          0% { color: red; } 14% { color: orange; } 28% { color: yellow; }
          42% { color: green; } 57% { color: blue; } 71% { color: indigo; } 85% { color: violet; } 100% { color: red; }
        }
        .animate-rainbow { animation: rainbow 2s linear infinite; }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 10s linear infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-3d { animation: spin-slow 3s linear infinite; }
        
        .bg-pattern {
          background-image: radial-gradient(circle, #330033 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .word-art {
          background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #fff;
          font-family: Impact, sans-serif;
          transform: skewY(-10deg);
          text-shadow: 2px 2px 0px #000;
        }

        /* 스크롤바 커스텀 (옛날 느낌) */
        ::-webkit-scrollbar {
          width: 16px;
        }
        ::-webkit-scrollbar-track {
          background: #333;
          border-left: 1px solid white;
        }
        ::-webkit-scrollbar-thumb {
          background: #008000;
          border: 2px outset #00ff00;
        }
      `}</style>

      {/* 헤더 섹션 */}
      <header className="border-b-8 border-double border-purple-600 bg-indigo-900 p-4 text-center">
        <div className="flex justify-center items-center gap-4">
          <span className="text-6xl spin-3d">🐙</span>
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-red-600 drop-shadow-[4px_4px_0_rgba(255,255,255,0.8)]">
               ~*~ 금지된 지식 ~*~
            </h1>
            <h2 className="text-xl md:text-2xl mt-2 word-art">
              THE FORBIDDEN LOG
            </h2>
          </div>
          <span className="text-6xl spin-3d">👁️</span>
        </div>
        <p className="mt-4 text-yellow-300 font-mono text-sm">
          Best Viewed with Netscape Navigator 4.0
        </p>
      </header>

      {/* 흐르는 텍스트 */}
      <Marquee text="경고: 이곳에 오래 머물지 마시오... 별들이 제자리를 찾았다... 이아! 이아! 크툴루 파탄... DO NOT READ THE LATIN TEXT..." />

      <main className="container mx-auto p-2 md:p-4 flex flex-col md:flex-row gap-4 bg-pattern min-h-screen">
        
        {/* 사이드바 (메뉴) */}
        <aside className="w-full md:w-64 bg-blue-900 border-4 border-ridge border-gray-400 p-2 text-center h-fit shrink-0">
          <div className="mb-4">
            <h3 className="bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold p-1 border-2 border-white">
              M E N U
            </h3>
            <ul className="list-disc list-inside text-left mt-2 space-y-2 pl-2 text-cyan-300 underline cursor-pointer">
              <li className="hover:text-white hover:bg-blue-700">HOME</li>
              <li className="hover:text-white hover:bg-blue-700">MY PROFILE</li>
              <li className="hover:text-white hover:bg-blue-700">CTHULHU PICS</li>
              <li className="hover:text-white hover:bg-blue-700">GUESTBOOK</li>
              <li className="hover:text-white hover:bg-blue-700">EMAIL ME</li>
              <li className="hover:text-white hover:bg-blue-700 text-red-500 font-bold">SECRET LINK</li>
            </ul>
          </div>

          <div className="border-4 border-dotted border-red-500 p-2 bg-black mb-4">
            <BlinkText color="text-red-500">
              <p className="font-bold text-lg">WARNING!!</p>
            </BlinkText>
            <p className="text-xs text-white mt-1">Don't scroll down if you are scare!!</p>
            <div className="mt-2 text-4xl">👻</div>
          </div>

          <div className="bg-gray-300 border-2 border-inset border-gray-500 p-1">
            <p className="text-black text-xs font-bold mb-1">Total Visitors:</p>
            <div className="bg-black text-red-600 font-mono text-xl border border-gray-500 tracking-widest">
              {visitorCount.toString().padStart(6, '0')}
            </div>
          </div>
          
          <div className="mt-4">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Spinning_globe.gif" 
                alt="spinning globe" 
                className="mx-auto w-16 h-16"
            />
          </div>
          
          <div className="mt-4 border-2 border-white p-1">
            <p className="text-[10px] text-yellow-300">Join our WebRing!</p>
            <div className="flex justify-center gap-1 mt-1">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </aside>

        {/* 메인 컨텐츠 (일지) */}
        <section className="flex-1 bg-gray-900 border-8 border-double border-green-700 p-4 md:p-8 relative">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 p-2 text-xs text-gray-500">
            Last updated: 2024.11.30
          </div>

          <div className="text-center mb-8">
            <RainbowText>WELCOME TO MY DARK WORLD</RainbowText>
            <br/>
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5eDh4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LpSf6D96Q9J5L3T75m/giphy.gif" 
              alt="Under Construction" 
              className="inline-block my-4 h-12"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
            <p className="text-xs text-green-500 mt-2">
                "이곳은 나의 광기를 기록하는 성소..."
            </p>
          </div>

          {/* 상태창 */}
          <div className="bg-red-900 border-2 border-red-500 p-2 mb-6 text-center animate-pulse sticky top-0 z-10 shadow-lg shadow-red-900/50">
             <span className="text-yellow-400 font-bold text-xl drop-shadow-md">현재 당신의 이성(Sanity): {sanity}/100</span>
             {sanity < 30 && <p className="text-white font-bold text-2xl mt-1 blink">RUN AWAY!!!</p>}
          </div>

          {/* 일지 리스트 렌더링 */}
          <div className="space-y-8 font-mono">
            {journalEntries.map((entry, index) => (
              <article key={index} className="border-b-2 border-dashed border-gray-600 pb-4 hover:bg-gray-800 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-xl text-fuchsia-400 font-bold bg-blue-900 inline-block px-2 border border-blue-400">
                    {entry.date} - {entry.title}
                    </h3>
                    <span className="text-xs text-gray-400">[Sanity Level: {entry.sanityLevel}%]</span>
                </div>
                
                {entry.sanityLevel < 30 ? (
                     <div className="bg-black text-center p-4 my-2 border-4 border-yellow-500 transform rotate-1">
                        <BlinkText color="text-cyan-400">
                        <span className="text-lg md:text-2xl font-bold">{entry.content}</span>
                        </BlinkText>
                    </div>
                ) : (
                    <p className={`mt-2 leading-relaxed text-lg ${entry.sanityLevel < 60 ? 'text-red-400' : 'text-green-300'}`}>
                        {entry.content}
                    </p>
                )}
                
                {/* 중간중간 이미지 삽입 효과 */}
                {index === 8 && (
                    <div className="my-4 text-center">
                        <div className="inline-block border-4 border-red-600 p-1 bg-white">
                             <span className="text-black font-bold text-4xl block transform skew-x-12">👁️ 👁️ 👁️</span>
                             <span className="text-red-600 text-xs">THEY ARE WATCHING</span>
                        </div>
                    </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 text-center p-4 border-t-2 border-gray-600">
            <p className="text-purple-500 text-xl mb-4 font-bold">
                방명록을 남겨주세요 (남기지 않으면 저주함)
            </p>
            <input type="text" placeholder="Name" className="bg-gray-200 border-2 border-inset border-gray-500 p-1 mr-2 text-black" />
            <button className="bg-gray-300 border-2 border-outset border-gray-500 px-4 py-1 text-black font-bold active:border-inset">
                Sign Guestbook
            </button>
            <br/><br/>
            <a href="#" className="text-blue-400 underline text-sm hover:bg-white hover:text-black">
              [Top으로 돌아가기]
            </a>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-center p-4 border-t-4 border-gray-500 text-xs text-gray-400">
        <p>Copyright (c) 1999 Mystic Keeper. All rights reserved.</p>
        <p>이 사이트의 모든 저작권은 위대한 옛 지배자에게 있습니다.</p>
        <div className="flex justify-center gap-2 mt-2">
           <div className="w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]">HTML 4.01</div>
           <div className="w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]">IE 5.0</div>
           <div className="w-20 h-8 bg-gray-700 border border-white flex items-center justify-center text-[10px]">Netscape</div>
        </div>
        <br />
        <BlinkText>
            <span className="text-yellow-500 font-bold">공사중 (Under Construction)</span>
        </BlinkText>
        <div className="mt-4 text-[10px] text-gray-600">
            Design by: DarkSoulMaster666
        </div>
      </footer>
    </div>
  );
}