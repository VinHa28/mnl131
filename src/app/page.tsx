"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Banknote,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// Sample Quiz Questions
const quizQuestions = [
  {
    question:
      "Ai là người hệ thống hóa và phát triển CNXHKH trong giai đoạn mới?",
    options: ["C.Mác", "Ph.Ăngghen", "V.I.Lênin", "Hồ Chí Minh"],
    correctAnswer: 2,
    explanation:
      "V.I.Lênin là người có công bảo vệ, hệ thống hóa và phát triển sáng tạo CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa.",
  },
  {
    question:
      "Mục tiêu tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    options: [
      "Xây dựng thành công chế độ tư bản chủ nghĩa",
      "Xây dựng nước Việt Nam dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      "Phát triển kinh tế thị trường tự do tuyệt đối",
      "Xây dựng nền văn hóa mang đậm đà bản sắc dân tộc",
    ],
    correctAnswer: 1,
    explanation:
      "Đó là mục tiêu tổng quát được Đảng Cộng sản Việt Nam xác định, thể hiện bản chất tốt đẹp của chế độ XHCN.",
  },
  {
    question:
      "Đặc điểm nổi bật của giai cấp công nhân Việt Nam trong thời đại 4.0 là gì?",
    options: [
      "Chỉ làm việc trong các doanh nghiệp nhà nước",
      "Không ngừng lớn mạnh, đang được trí tuệ hóa",
      "Trực tiếp lãnh đạo đất nước mà không cần Đảng tiên phong",
      "Tập trung chủ yếu ở khu vực nông nghiệp",
    ],
    correctAnswer: 1,
    explanation:
      "Giai cấp công nhân Việt Nam hiện đại đang phát triển mạnh mẽ về chất lượng, đặc biệt là xu hướng trí tuệ hóa để làm chủ công nghệ mới.",
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const navLinks = [
    { name: "Nền tảng", href: "#theory" },
    { name: "Công nhân", href: "#working-class" },
    { name: "Con đường", href: "#timeline" },
    { name: "Trắc nghiệm", href: "#quiz" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20">
      {/* SECTION 1: NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/30">
                V
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                CNXHKH <span className="text-primary">&</span> Việt Nam
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#hero"
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5"
              >
                Khám phá
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* SECTION 1: HERO */}
        <section
          id="hero"
          className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-slate-100/80"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Lý luận & Thực tiễn
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                  Chủ Nghĩa Xã Hội Khoa Học:
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Bản Lĩnh & Khát Vọng Việt Nam
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Khám phá sức sống vĩ đại của lý luận khoa học trong công cuộc
                  đổi mới và phát triển đất nước, hướng tới mục tiêu dân giàu,
                  nước mạnh.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#theory"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-primary/30 hover:-translate-y-1"
                  >
                    Khám phá ngay
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="#quiz"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all hover:border-slate-300 shadow-sm hover:-translate-y-1"
                  >
                    Làm bài trắc nghiệm
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto w-full max-w-lg lg:max-w-none"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-200 border-8 border-white group">
                  {/* Placeholder for Main Banner Image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-slate-50 transition-colors">
                    <Image
                      src="/banner.png"
                      alt="Banner Image"
                      fill
                      className="object-cover opacity-80 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <p className="text-sm font-medium text-primary-200 mb-1">
                        IMAGE PLACEHOLDER (800x600)
                      </p>
                      <p className="font-bold text-xl">
                        Thủ đô Hà Nội - Trái tim của cả nước
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements for aesthetics */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KHỞI NGUỒN LÝ LUẬN */}
        <section id="theory" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
              >
                Ba Phát Minh Vĩ Đại
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6"
              >
                Nền Tảng Lý Luận Vĩ Đại
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600"
              >
                Những phát kiến khoa học đã làm nên bước ngoặt vĩ đại, chuyển
                chủ nghĩa xã hội từ không tưởng trở thành khoa học.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-white" />,
                  title: "Chủ nghĩa duy vật lịch sử",
                  desc: "Làm rõ quy luật phát triển của xã hội loài người, chứng minh sự thay thế các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên.",
                  color: "from-blue-600 to-indigo-600",
                },
                {
                  icon: <Banknote className="w-8 h-8 text-white" />,
                  title: "Học thuyết giá trị thặng dư",
                  desc: "Vạch trần bản chất bóc lột của phương thức sản xuất tư bản chủ nghĩa, tìm ra quy luật vận động kinh tế đặc thù của chủ nghĩa tư bản.",
                  color: "from-emerald-600 to-teal-600",
                },
                {
                  icon: <Users className="w-8 h-8 text-white" />,
                  title: "Sứ mệnh lịch sử của GCCN",
                  desc: "Phát hiện ra lực lượng xã hội có khả năng giải quyết mâu thuẫn cơ bản của chủ nghĩa tư bản - giai cấp công nhân hiện đại.",
                  color: "from-primary to-red-600",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: GIAI CẤP CÔNG NHÂN */}
        <section
          id="working-class"
          className="py-24 bg-slate-900 text-white relative overflow-hidden"
        >
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute left-0 top-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 100 L100 0 L100 100 Z"
                fill="currentColor"
                className="text-slate-800"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold tracking-wider uppercase text-sm mb-3"
              >
                Động Lực Phát Triển
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold mb-6"
              >
                Trái Tim Của Thời Đại Mới
              </motion.h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center z-10">
                    <span className="text-slate-400 font-medium mb-2">
                      IMAGE PLACEHOLDER (600x400)
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Giai cấp công nhân truyền thống
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Gắn liền với nền công nghiệp đại cơ khí, tinh thần kỷ luật
                      cao và tinh thần cách mạng triệt để.
                    </p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="Traditional Industry"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                  />
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/80 to-slate-900 border border-primary/30 shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center z-10">
                    <span className="text-primary-200 font-medium mb-2">
                      IMAGE PLACEHOLDER (600x400)
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Giai cấp công nhân 4.0
                    </h4>
                    <p className="text-slate-200 text-sm">
                      Trí tuệ hóa, làm chủ công nghệ tiên tiến, động lực cốt lõi
                      của nền kinh tế tri thức và đổi mới sáng tạo.
                    </p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                    alt="Modern Technology"
                    fill
                    className="object-cover opacity-30 mix-blend-overlay"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <Target className="text-accent w-6 h-6" />
                <span className="font-medium text-slate-100">
                  Dưới sự lãnh đạo sáng suốt của Đảng Cộng sản Việt Nam
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: TIMELINE */}
        <section id="timeline" className="py-24 bg-slate-50 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
              >
                Con đường phát triển
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-slate-900"
              >
                Hành Trình Đổi Mới & Khát Vọng
              </motion.h3>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full"></div>

              <div className="space-y-16">
                {[
                  {
                    step: "Bước 1",
                    title: "Vận Dụng Sáng Tạo",
                    desc: "Lấy Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh làm kim chỉ nam cho mọi hành động, phù hợp với thực tiễn cách mạng Việt Nam.",
                    icon: <BookOpen className="w-6 h-6 text-white" />,
                    align: "right",
                  },
                  {
                    step: "Bước 2",
                    title: "Thời Kỳ Đổi Mới (Từ 1986)",
                    desc: "Phát triển nền kinh tế thị trường định hướng XHCN, hội nhập quốc tế sâu rộng, đạt được những thành tựu to lớn, có ý nghĩa lịch sử.",
                    icon: <Lightbulb className="w-6 h-6 text-white" />,
                    align: "left",
                  },
                  {
                    step: "Bước 3",
                    title: "Khát Vọng 2045",
                    desc: "Mục tiêu trở thành nước phát triển, thu nhập cao theo định hướng xã hội chủ nghĩa nhân kỷ niệm 100 năm thành lập nước.",
                    icon: <Target className="w-6 h-6 text-white" />,
                    align: "right",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex items-center md:justify-between flex-col md:flex-row ${item.align === "left" ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Circle Icon */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-primary rounded-full border-4 border-slate-50 flex items-center justify-center shadow-lg z-10">
                      {item.icon}
                    </div>

                    {/* Content Box */}
                    <div
                      className={`w-full md:w-[45%] pl-20 md:pl-0 ${item.align === "left" ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                        <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">
                          {item.step}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: QUIZ */}
        <section id="quiz" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              >
                Bạn Hiểu Bao Nhiêu Về CNXHKH?
              </motion.h2>
              <p className="text-slate-600 text-lg">
                Kiểm tra kiến thức của bạn với một bài trắc nghiệm nhỏ.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
            >
              {!showResult ? (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Câu hỏi {currentQuestion + 1} / {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      Điểm: {score}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map(
                      (option, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrect =
                          idx === quizQuestions[currentQuestion].correctAnswer;

                        let buttonStyle =
                          "bg-white border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700";

                        if (isAnswered) {
                          if (isCorrect) {
                            buttonStyle =
                              "bg-green-50 border-green-500 text-green-800 ring-1 ring-green-500";
                          } else if (isSelected && !isCorrect) {
                            buttonStyle =
                              "bg-red-50 border-red-500 text-red-800 ring-1 ring-red-500";
                          } else {
                            buttonStyle =
                              "bg-white border-slate-200 text-slate-400 opacity-50";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            disabled={isAnswered}
                            onClick={() => handleOptionClick(idx)}
                            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
                          >
                            <span className="font-medium text-lg">
                              {option}
                            </span>
                            {isAnswered && isCorrect && (
                              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                            )}
                            {isAnswered && isSelected && !isCorrect && (
                              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                            )}
                          </button>
                        );
                      },
                    )}
                  </div>

                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6"
                    >
                      <div
                        className={`p-4 rounded-xl ${selectedOption === quizQuestions[currentQuestion].correctAnswer ? "bg-green-100 text-green-800" : "bg-blue-50 text-blue-800"} border ${selectedOption === quizQuestions[currentQuestion].correctAnswer ? "border-green-200" : "border-blue-200"}`}
                      >
                        <p className="font-medium mb-1">
                          {selectedOption ===
                          quizQuestions[currentQuestion].correctAnswer
                            ? "Chính xác!"
                            : "Giải thích:"}
                        </p>
                        <p className="text-sm">
                          {quizQuestions[currentQuestion].explanation}
                        </p>
                      </div>

                      <button
                        onClick={handleNextQuestion}
                        className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        {currentQuestion < quizQuestions.length - 1
                          ? "Câu tiếp theo"
                          : "Xem kết quả"}
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Hoàn thành!
                  </h3>
                  <p className="text-xl text-slate-600 mb-8">
                    Bạn trả lời đúng{" "}
                    <span className="font-bold text-primary">
                      {score}/{quizQuestions.length}
                    </span>{" "}
                    câu hỏi.
                  </p>
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg shadow-primary/30"
                  >
                    Làm lại bài trắc nghiệm
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-bold text-2xl text-white mx-auto mb-6">
            V
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            Chủ Nghĩa Xã Hội Khoa Học
          </h4>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Sản phẩm sáng tạo môn học Chủ nghĩa Xã hội Khoa học - Tìm hiểu về
            hành trình và khát vọng phát triển của Việt Nam.
          </p>

          <div className="bg-slate-800/50 rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-slate-700/50">
            <p className="font-medium text-slate-300 mb-2">
              Thực hiện bởi:{" "}
              <span className="text-white font-bold">Nhóm [Tên Nhóm]</span>
            </p>
            <p className="text-slate-400 text-sm">
              Giảng viên hướng dẫn:{" "}
              <span className="text-slate-300">[Tên Giảng Viên]</span>
            </p>
          </div>

          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Bản quyền thuộc về Nhóm [Tên
            Nhóm]. Được thiết kế với Next.js & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
