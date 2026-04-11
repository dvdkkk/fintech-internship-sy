import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Users, BookOpen, Briefcase, Award, MessageSquare, 
  CheckCircle2, ArrowRight, Monitor, Cloud, Layers, Settings, 
  Target, TrendingUp, MapPin, Coffee, Laptop, Book, Cpu, 
  FileText, Headphones, UserCheck, Building2, GraduationCap, 
  Lightbulb, Zap, Globe, ShieldCheck, ChevronRight,
  Phone, Send, ChevronDown, Menu, X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navItems = [
    { name: "풀스택 개발자", href: "https://fintech-internship-fullstack-sy.vercel.app", external: true },
    { name: "서비스 기획자", href: "https://fintech-internship-serviceplanning-sy.vercel.app", external: true },
    { name: "취업지원", href: "#partners" },
    { name: "교육환경", href: "#support" },
    { name: "선발 절차", href: "#selection-process" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span 
              className="font-gmarket text-[#3752A6] text-xl font-bold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              핀테크 인턴십 코스
            </span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-bold text-gray-700">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-blue-600 transition-colors"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#apply" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">
              지원하기
            </a>
          </div>

          {/* Mobile Apply Button */}
          <a 
            href="#apply" 
            className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse hover:animate-none transition-all"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담신청
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm font-bold text-gray-700">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="hover:text-blue-600 transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      {/* Partners & Career Support */}
      <section className="py-24 bg-white text-gray-900 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="mb-14 mt-[-3rem] rounded-3xl overflow-hidden">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAzMjZfNzkg/MDAxNzc0NTA3NzUwODY1._w_hKkdDtDgGrzl5YKuGQjRTSQO8tsmBaJXoDqFUmL8g.eTRuw-FJJQ1ETF_feX-BGrVCTOD6ZGqW6HoJel7LQ34g.JPEG/image+(30).jpg?type=w966" 
              alt="Partners" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">국내 최대 규모 한국핀테크지원센터가 함께합니다</h2>
            <p className="text-gray-600 text-lg max-w-3xl break-keep">
              한국핀테크지원센터와 구름이 기업과 인재를 잇는 커리어 여정을 함께합니다. 국내 최대 핀테크 지원 기관인 한국핀테크지원센터와 에듀테크 기업 구름이 공동으로 운영하는 핀테크 인턴십 코스는 실제 핀테크 기업 수요를 기반으로 설계된 실무 교육과 기업 연계 기회를 제공합니다. 현장에서 요구되는 역량을 쌓고 채용으로 이어지는 경험을 통해 핀테크 분야의 핵심 인재로 성장하세요.
            </p>
          </div>

          {/* Recruitment Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">모집 과정</h2>
            <div className="grid md:grid-cols-2 gap-8 divide-x divide-gray-200">
              {[
                {
                  title: "핀테크 풀스택 개발자 과정",
                  subtitle: "핀테크 풀스택 개발자",
                  period: "26. 04. 28(화) - 26. 11. 02(월)",
                  image: "https://postfiles.pstatic.net/MjAyNjA0MDlfMTU2/MDAxNzc1NzI1MDY3MTI5.H--U0RYkzb-0ipYXNfD4JlOMky3PvTMFVhFzh79vxAMg.YvrriT-1VcyGZ-1Pd5jCrg5xASNNHEZJ1N5ezrZQs4wg.JPEG/image_(43).jpg?type=w966",
                  href: "https://fintech-internship-fullstack-sy.vercel.app"
                },
                {
                  title: "핀테크 서비스 기획자 과정",
                  subtitle: "핀테크 서비스 기획자",
                  period: "26. 04. 28(화) - 26. 11. 02(월)",
                  image: "https://postfiles.pstatic.net/MjAyNjA0MDlfMzAw/MDAxNzc1NzI1MDY3MDg3.lkwBWAW5qZsU4eKF7n8o2WYBenY3CAAQjiDUMGG70o0g.mL1EFRV-ES_quEDqPPUvqdmZ3Sz1PcbMlpvcqAOaJj4g.JPEG/image_(44).jpg?type=w966",
                  href: "https://fintech-internship-fullstack-sy.vercel.app"
                }
              ].map((item, idx) => (
                <motion.a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${idx === 0 ? 'md:border-r md:border-gray-200 md:rounded-r-none' : 'md:border-l-0 md:rounded-l-none'}`}
                >
                  <div className="rounded-2xl mb-6">
                    <img src={item.image} alt={item.subtitle} className="w-full h-80 object-contain rounded-xl" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-xl font-bold mb-1">{item.subtitle}</h4>
                  <p className="text-gray-600">교육일정 | {item.period}</p>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfODEg/MDAxNzc0NTA1NjQwNDQ2.SOvsitI7wNXa2j6DhyCiAjkTOC7Yuf7zot7cP3JJYNIg.yRLmsnjqYlf7_WslXjAp2U0yDpr04qZzifDCh0i6x0gg.JPEG/image_(38).jpg?type=w966" alt="한국핀테크지원센터" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">한국핀테크지원센터</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> 금융위원회 산하 국내 최대 핀테크 전문 지원 센터</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> 핀테크 기업 육성, 정책 지원 등 산업 전 주기 지원</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> 핀테크 규제 샌드박스 운영 기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> 일자리 매칭존 통한 핀테크 산업 전문 취업 연계</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMjkw/MDAxNzc0NTA1NjQwNjMw.97ng_jouaFHb5yUYgVkB4luIwBrNQUYCY5TznUExU0Mg.OmjiNjtizRBb_t3Hjs1wyiwz0PtMt5nKjs9413Soh_Mg.JPEG/image_(39).jpg?type=w966" alt="구름 (goorm)" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-3 text-indigo-600">구름 (goorm)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" /> 고용노동부 인증 K-디지털 트레이닝 전문 훈련기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" /> 국내 대표 AX(AI Transformation) 전문 기업</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" /> 올해의 브랜드 대상 2024·2025 2년 연속 1위 수상</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" /> KDT 교육 과정 통해 1,800명의 누적 교육생 배출</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6 scroll-mt-32" id="partners">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">취업기회 확실한 기업 연계 코스</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "우수 수료생 혜택", desc: "핀테크 인턴십 코스 연계 기업 지원 시 서류 전형 면제", highlight: true },
                { title: "대표 핀테크 기업 협력", desc: "국내 대표 핀테크 기업과 함께하는 실무 중심 커리큘럼" },
                { title: "기업 연계 프로젝트", desc: "핀테크 기업의 실제 프로젝트 수행 기회 제공" },
                { title: "맞춤형 잡 매칭 서비스", desc: "‘핀테크 일자리 매칭 플랫폼’ 통한 구인 등록 및 관리 지원" },
                { title: "전문 상담사의 취업 컨설팅", desc: "‘일자리매칭존’ 통한 전문가의 취업 상담 제공" },
                { title: "현직자 네트워킹 행사", desc: "전문가 만남 통해 최신 기술 및 업계 동향 파악" }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${item.highlight ? 'bg-blue-600 border-blue-500 shadow-lg' : 'bg-gray-50 border-gray-200'}`}>
                  <h4 className={`font-bold text-lg mb-2 ${item.highlight ? 'text-white' : 'text-blue-600'}`}>{item.title}</h4>
                  <p className={`text-sm break-keep ${item.highlight ? 'text-blue-50' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Support & Location */}
      <section className="py-24 bg-white scroll-mt-20" id="support">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Support (Moved to top) */}
            <div>
              <h2 className="text-3xl font-bold mb-8">실전 역량 키우는 밀착 지원</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Monitor, title: "성취도별 학습 관리", desc: "구름 LXP를 통한 학습 현황 모니터링 및 취약 분야 보완" },
                  { icon: MessageSquare, title: "언제든 가능한 질문", desc: "실시간 질문, 게시판, AI 튜터를 통해 궁금증 해결" },
                  { icon: UserCheck, title: "전문가 피드백", desc: "프로젝트 전 과정에서의 실무 피드백 제공" },
                  { icon: Users, title: "팀별 멘토링 진행", desc: "현직 개발자 멘토가 전담하여 팀별 성장 서포트" },
                  { icon: ShieldCheck, title: "전담 매니저의 관리", desc: "학습 집중을 위한 교육 운영 매니저의 전담 케어" },
                  { icon: Coffee, title: "오피스아워 with C-Level", desc: "구름 C-Level과의 1:1 대화 시간 지원" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Center (Moved to bottom) */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-4">역삼역 1분 거리!<br/>집중하기 좋은 교육장</h2>
              <p className="text-gray-600 mb-8 break-keep">
                교육생은 강남 교육장 회의실을 무료로 이용할 수 있습니다.<br/>
                <span className="text-sm text-gray-500">(위치: 서울 강남구 테헤란로 145 13, 14층)</span>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfNDMg/MDAxNzcwOTY4NDUxNjE5.591OWwUJSnBWA9DwlmaYSoDSYpAjriX0X57uKfwjdy4g.Jqib9AJzXW_lgPd-DoNFY5Gf3SzwgQm1w7YGZWaTHAQg.PNG/techup_learning_place_03.png?type=w966" alt="Lounge" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">라운지</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfMTg2/MDAxNzcwOTY4NDUxNjEy.8amY2OKWNQ5xGWpz8qF3nEuUoujNVrKxq9-j9E101G0g._kNERBC0F2uyAJiWEvauAz3uZZQ2s4XTrrOWTU0uEHog.PNG/techup_learning_place_05.png?type=w966" alt="Meeting Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">회의실</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-900 text-white scroll-mt-20" id="selection-process">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">선발 절차</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "지원서 작성", desc: "수강하고 싶은 과정의 지원서를 작성합니다." },
              { step: "02", title: "HRD-Net 수강 신청", desc: "본 과정은 국민내일배움카드 소지자를 대상으로 진행합니다." },
              { step: "03", title: "지원자 평가", desc: "1차 서류 평가, 2차 비대면 인터뷰를 진행합니다." },
              { step: "04", title: "선발 발표", desc: "합격 여부는 개별 연락으로 안내드립니다." },
              { step: "05", title: "오리엔테이션", desc: "교육 과정에 대한 세부 사항을 안내드립니다." },
              { step: "06", title: "수강 시작", desc: "커리큘럼에 따라 본격적인 학습이 시작됩니다." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-blue-400 font-bold text-xl mb-4">STEP {item.step}</div>
                <h4 className="font-bold mb-2 break-keep">{item.title}</h4>
                <p className="text-sm text-gray-400 break-keep">{item.desc}</p>
                {idx < 5 && (
                  <ChevronRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-[#FFD600] scroll-mt-20" id="apply">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black tracking-tight">
              망설이지 마세요.<br/>
              국비교육 전문가가<br/>
              무료 상담해드립니다.
            </h2>
            <p className="text-lg text-black mb-12 font-medium break-keep">
              국비지원 자격 여부부터 취업 및 교육과정까지<br/>
              무료로 상담해드립니다.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD600] shrink-0">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">교육방식</div>
                  <div className="text-2xl font-extrabold text-black">50%온라인 + 50%오프라인</div>
                </div>
              </div>
            </div>
            
            <div className="text-xl font-extrabold text-black">
              여러분의 꿈을 응원합니다!
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-2">
              빠른 교육상담 신청 <span className="w-2 h-2 rounded-full bg-red-600"></span>
            </h3>
            
            <form 
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitted(true);
                const formData = new FormData(e.currentTarget);
                const data = {
                  _form_id: "c6397110de9deec24d35de40e8d1e38b",
                  course: formData.get('course'),
                  name: formData.get('name'),
                  age: formData.get('age'),
                  phone: formData.get('phone'),
                  message: formData.get('message')
                };
                
                fetch("https://inputhaven.com/api/v1/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                  keepalive: true
                }).catch(console.error);
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-10 text-xl font-bold text-black">
                  상담 신청이 완료되었습니다!
                  <button 
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="block w-full mt-4 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">과정명</label>
                    <input 
                      type="text" 
                      name="course"
                      readOnly 
                      value="핀테크 인텁십 코스(통합)" 
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold focus:outline-none" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">이름</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="홍길동" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">나이</label>
                      <input 
                        type="text" 
                        name="age"
                        placeholder="예: 30" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="010-0000-0000" 
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">문의내용</label>
                    <textarea 
                      name="message"
                      placeholder="궁금하신 점을 자유롭게 적어주세요." 
                      rows={2} 
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 accent-red-600" 
                        defaultChecked 
                        required
                      />
                      <span className="text-sm font-bold text-gray-800">개인정보 수집 및 이용에 동의합니다.</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 font-medium"
                      onClick={() => {
                        const content = `개인정보 수집 및 이용 동의 (필수)
핀테크인턴쉽코스 실시간온라인문의 신청을 위해 다음과 같이 개인정보를 수집 및 이용합니다.

수집목적
온라인문의

수집항목
이름, 나이, 연락처, 문의내용

보유기간
60일`;
                        alert(content);
                      }}
                    >
                      자세히 보기
                    </button>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#111111] text-white font-bold text-lg py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors mt-4"
                  >
                    무료상담 신청하기 <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                    개인정보는 상담 목적으로만 사용됩니다.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} goorm. All rights reserved.</p>
        </div>
      </footer>
      {/* Floating Apply Button */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <a 
            href="#apply" 
            className="block w-full bg-blue-600 text-white py-3 md:py-4 text-center font-bold text-base md:text-lg hover:bg-blue-700 transition-colors shadow-lg rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담 신청하기
          </a>
        </div>
      </motion.div>
    </div>
  );
}
