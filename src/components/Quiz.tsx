"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, Target, X, BookOpen } from "lucide-react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizData = Record<number, Question[]>;

const quizData: QuizData = {
  1: [
    { question: "Tiền đề khoa học tự nhiên nào KHÔNG gắn liền với sự ra đời của CNXHKH?", options: ["Thuyết tiến hóa", "Định luật bảo toàn và chuyển hóa năng lượng", "Thuyết tương đối", "Học thuyết tế bào"], correctAnswer: 2, explanation: "Thuyết tương đối của Einstein ra đời sau (thế kỷ 20). Ba tiền đề KHTN của thế kỷ 19 là Thuyết tiến hóa, Học thuyết tế bào, và Định luật bảo toàn năng lượng." },
    { question: "Ai là người phát triển CNXHKH trong giai đoạn từ sau khi C.Mác và Ph.Ăngghen qua đời?", options: ["Hồ Chí Minh", "V.I.Lênin", "Stalin", "Mao Trạch Đông"], correctAnswer: 1, explanation: "V.I.Lênin là người bảo vệ và phát triển sáng tạo CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa." }
  ],
  2: [
    { question: "Đặc điểm nổi bật của giai cấp công nhân là gì?", options: ["Là giai cấp sản xuất bằng công cụ thủ công", "Đại biểu cho lực lượng sản xuất tiên tiến", "Sở hữu lượng tư liệu sản xuất lớn", "Phân tán và thiếu tổ chức"], correctAnswer: 1, explanation: "Đặc điểm nổi bật của giai cấp công nhân là lao động bằng phương thức công nghiệp, đại biểu cho lực lượng sản xuất tiên tiến, có tính tổ chức kỷ luật cao." },
    { question: "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân là gì?", options: ["Đấu tranh giành chính quyền", "Xây dựng nền văn hóa mới", "Tạo tiền đề vật chất - kỹ thuật cho xã hội mới", "Xóa bỏ các tôn giáo"], correctAnswer: 2, explanation: "Về kinh tế, giai cấp công nhân là nhân tố hàng đầu của lực lượng sản xuất xã hội hóa cao, đại biểu cho quan hệ sản xuất mới, tạo tiền đề vật chất - kỹ thuật cho CNXH." }
  ],
  3: [
    { question: "Theo quan điểm Mác - Lênin, CNXH có mấy đặc trưng cơ bản?", options: ["4", "5", "6", "7"], correctAnswer: 2, explanation: "Có 6 đặc trưng cơ bản của CNXH theo quan điểm của chủ nghĩa Mác - Lênin." },
    { question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam thuộc hình thức nào?", options: ["Quá độ trực tiếp", "Quá độ gián tiếp", "Quá độ nhảy vọt", "Quá độ tuần tự"], correctAnswer: 1, explanation: "Việt Nam thực hiện quá độ gián tiếp, tức là bỏ qua chế độ tư bản chủ nghĩa để tiến lên CNXH." }
  ],
  4: [
    { question: "Bản chất chính trị của nền dân chủ XHCN là gì?", options: ["Sự đa nguyên chính trị", "Sự thống trị của giai cấp tư sản", "Đặt dưới sự lãnh đạo của giai cấp công nhân thông qua Đảng tiên phong", "Sự tự trị của từng vùng"], correctAnswer: 2, explanation: "Bản chất chính trị của nền dân chủ XHCN là đặt dưới sự lãnh đạo của giai cấp công nhân (thông qua Đảng) để thực hiện quyền lực của nhân dân." },
    { question: "Chức năng căn bản và quyết định nhất của Nhà nước XHCN là gì?", options: ["Trấn áp kẻ thù", "Tổ chức và xây dựng xã hội mới", "Thu thuế", "Đối ngoại"], correctAnswer: 1, explanation: "Tuy có chức năng trấn áp, nhưng chức năng tổ chức, xây dựng toàn diện xã hội mới là căn bản và quyết định nhất của Nhà nước XHCN." }
  ],
  5: [
    { question: "Sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ bị quy định bởi yếu tố nào?", options: ["Cơ cấu kinh tế nhiều thành phần", "Cơ cấu dân số", "Cơ cấu văn hóa", "Cơ cấu địa lý"], correctAnswer: 0, explanation: "Sự biến đổi của cơ cấu xã hội - giai cấp luôn bị quy định bởi cơ cấu kinh tế nhiều thành phần của thời kỳ quá độ." },
    { question: "Nội dung trọng tâm trong liên minh giai cấp, tầng lớp là gì?", options: ["Chính trị", "Kinh tế", "Văn hóa", "Xã hội"], correctAnswer: 1, explanation: "Nội dung kinh tế là trọng tâm, là cơ sở vật chất vững chắc nhất của khối liên minh công - nông - trí thức." }
  ],
  6: [
    { question: "Cương lĩnh dân tộc của V.I. Lênin KHÔNG bao gồm nguyên tắc nào?", options: ["Các dân tộc hoàn toàn bình đẳng", "Các dân tộc được quyền tự quyết", "Liên hiệp công nhân tất cả các dân tộc", "Tự do ly khai lập quốc bằng mọi giá"], correctAnswer: 3, explanation: "Cương lĩnh gồm 3 nguyên tắc: Bình đẳng, tự quyết, và liên hiệp công nhân. Quyền tự quyết không đồng nghĩa với khuyến khích chia cắt mọi điều kiện." },
    { question: "Nguyên nhân tồn tại của tôn giáo trong thời kỳ quá độ KHÔNG bao gồm:", options: ["Nguyên nhân nhận thức", "Nguyên nhân kinh tế", "Nguyên nhân tâm lý", "Sự ép buộc của nhà nước"], correctAnswer: 3, explanation: "Tôn giáo tồn tại do nguyên nhân nhận thức, kinh tế, tâm lý, chính trị-xã hội, văn hóa, hoàn toàn không do sự ép buộc của nhà nước." }
  ],
  7: [
    { question: "Đâu là chức năng cơ bản, đặc thù nhất của gia đình?", options: ["Tái sản xuất ra con người", "Tổ chức tiêu dùng", "Thỏa mãn nhu cầu tâm lý", "Tham gia lao động sản xuất"], correctAnswer: 0, explanation: "Tái sản xuất ra con người là chức năng đặc thù nhất, đảm bảo sự duy trì và phát triển nòi giống của xã hội loài người." },
    { question: "Xu hướng biến đổi quy mô gia đình Việt Nam hiện nay chủ yếu là gì?", options: ["Chuyển từ gia đình hạt nhân sang gia đình đa thế hệ", "Quy mô gia đình ngày càng thu nhỏ lại", "Quy mô gia đình giữ nguyên không đổi", "Mở rộng không giới hạn"], correctAnswer: 1, explanation: "Gia đình Việt Nam hiện nay có xu hướng quy mô thu nhỏ lại, chuyển chủ yếu sang mô hình gia đình hạt nhân (chỉ gồm cha mẹ và con cái)." }
  ]
};

const chapterTitles = [
  "Chương 1: Nhập môn CNXHKH",
  "Chương 2: Sứ mệnh GCCN",
  "Chương 3: Thời kỳ quá độ",
  "Chương 4: Dân chủ & Nhà nước",
  "Chương 5: Cơ cấu xã hội",
  "Chương 6: Dân tộc & Tôn giáo",
  "Chương 7: Vấn đề Gia đình"
];

export function QuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const handleSelectChapter = (chapIndex: number) => {
    setSelectedChapter(chapIndex);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered || selectedChapter === null) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === quizData[selectedChapter][currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedChapter === null) return;
    if (currentQuestion < quizData[selectedChapter].length - 1) {
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

  const renderChapterSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8 pr-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
          Chọn Chương Làm Bài
        </h2>
        <p className="text-slate-600">Lựa chọn một chuyên đề để bắt đầu kiểm tra kiến thức của bạn.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
        {chapterTitles.map((title, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectChapter(idx + 1)}
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary/40 hover:bg-slate-50 transition-all text-left group"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{title}</h4>
              <p className="text-sm text-slate-500">{quizData[idx + 1]?.length || 0} câu hỏi</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuizContent = () => {
    if (selectedChapter === null) return null;
    const questions = quizData[selectedChapter];
    
    if (showResult) {
      return (
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-3">Hoàn thành!</h3>
          <p className="text-lg text-slate-600 mb-8">
            Chương {selectedChapter}: Bạn trả lời đúng <span className="font-bold text-primary text-xl mx-1">{score}/{questions.length}</span> câu.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={handleResetQuiz}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:-translate-y-0.5"
            >
              Làm lại chương này
            </button>
            <button 
              onClick={() => setSelectedChapter(null)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5"
            >
              Chọn chương khác
            </button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSelectedChapter(null)}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 underline underline-offset-4"
            >
              &larr; Quay lại
            </button>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              Chương {selectedChapter} - Câu {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <span className="text-sm font-medium text-slate-500">
            Điểm: {score}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === questions[currentQuestion].correctAnswer;
            
            let buttonStyle = "bg-white border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700";
            
            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = "bg-green-50 border-green-500 text-green-800 ring-1 ring-green-500";
              } else if (isSelected && !isCorrect) {
                buttonStyle = "bg-red-50 border-red-500 text-red-800 ring-1 ring-red-500";
              } else {
                buttonStyle = "bg-white border-slate-200 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
              >
                <span className="font-medium text-base md:text-lg">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 ml-4" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 ml-4" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6"
          >
            <div className={`p-4 rounded-xl ${selectedOption === questions[currentQuestion].correctAnswer ? 'bg-green-100 text-green-800' : 'bg-amber-50 text-amber-800'} border ${selectedOption === questions[currentQuestion].correctAnswer ? 'border-green-200' : 'border-amber-200'}`}>
              <p className="font-bold mb-2 uppercase tracking-wide text-xs">
                {selectedOption === questions[currentQuestion].correctAnswer ? 'Chính xác!' : 'Giải thích học thuật:'}
              </p>
              <p className="text-sm font-medium leading-relaxed">{questions[currentQuestion].explanation}</p>
            </div>
            
            <button 
              onClick={handleNextQuestion}
              className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả chương'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl w-full max-w-4xl relative max-h-[95vh] overflow-y-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {selectedChapter === null ? renderChapterSelection() : renderQuizContent()}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
