"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const chapters = [
  {
    id: 1,
    title: "Chương 1: Nhập môn Chủ nghĩa xã hội khoa học",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "1. Sự ra đời của Chủ nghĩa xã hội khoa học",
        body: "- **Điều kiện kinh tế - xã hội:** Vào những năm 40 của thế kỷ XIX, cuộc cách mạng công nghiệp phát triển mạnh mẽ làm thay đổi sâu sắc phương thức sản xuất tư bản chủ nghĩa (TBCN). Đại công nghiệp cơ khí xuất hiện làm tăng năng suất lao động, nhưng đồng thời làm sâu sắc thêm mâu thuẫn cơ bản của xã hội tư bản: mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất. Giai cấp công nhân (GCCN) hiện đại ra đời, bị bóc lột nặng nề, đã đứng lên đấu tranh. Các phong trào lớn như: Phong trào Hiến chương ở Anh (1836 - 1848), Phong trào công nhân dệt Lion ở Pháp (1831 và 1834), Phong trào công nhân dệt Silesia ở Đức (1844) đã minh chứng GCCN đã trở thành một lực lượng chính trị độc lập, đặt ra yêu cầu bức thiết phải có một hệ thống lý luận khoa học dẫn đường.\n- **Tiền đề khoa học tự nhiên:** Ba phát minh vĩ đại gồm: Học thuyết tế bào, Định luật bảo toàn và chuyển hóa năng lượng, Học thuyết tiến hóa. Đây là cơ sở khoa học đập tan tư duy siêu hình, thần bí, chứng minh tính biện chứng khách quan của thế giới vật chất.\n- **Tiền đề tư tưởng lý luận:** Kế thừa xuất sắc Triết học cổ điển Đức (phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoiơbắc); Kinh tế chính trị học cổ điển Anh (A.Smith và D.Ricardo); Chủ nghĩa xã hội không tưởng phê phán Pháp - Anh (Xanh Ximông, Phuriê, Ôoen). Mác và Ăngghen đã khắc phục những hạn chế không tưởng để xây dựng lý luận khoa học.",
      },
      {
        heading: "2. Các giai đoạn phát triển cơ bản",
        body: "- **Giai đoạn C.Mác và Ph.Ăngghen:** Thời kỳ hình thành, phát triển lý luận và thành lập Quốc tế I, Quốc tế II.\n- **Giai đoạn V.I.Lênin:** Vận dụng và phát triển CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn độc quyền (chủ nghĩa đế quốc), lãnh đạo thành công Cách mạng Tháng Mười Nga (1917), khai sinh nhà nước XHCN đầu tiên.\n- **Giai đoạn từ sau Chiến tranh thế giới thứ hai đến nay:** CNXH trở thành hệ thống thế giới, trải qua thời kỳ khủng hoảng trì trệ (Liên Xô sụp đổ) và thời kỳ đổi mới, cải cách thắng lợi (tiêu biểu là Việt Nam và Trung Quốc).",
      },
    ],
  },
  {
    id: 2,
    title: "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
    image: "/chuong_2.png",
    sections: [
      {
        heading: "1. Khái niệm và đặc điểm của giai cấp công nhân",
        body: "- **Trên phương diện phương thức sản xuất:** GCCN là tập đoàn xã hội ổn định, ra đời và phát triển cùng với quá trình phát triển của nền đại công nghiệp; là lực lượng sản xuất cơ bản, trực tiếp hoặc gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại.\n- **Trên phương diện quan hệ sản xuất:** Trong chế độ TBCN, GCCN là những người lao động không có tư liệu sản xuất, phải bán sức lao động cho nhà tư bản và bị giai cấp tư sản bóc lột giá trị thặng dư.",
      },
      {
        heading: "2. Nội dung sứ mệnh lịch sử",
        body: "- **Nội dung kinh tế:** GCCN là lực lượng sản xuất hàng đầu, đại biểu cho phương thức sản xuất tiến bộ. Sứ mệnh của họ là xóa bỏ chế độ tư hữu tư bản chủ nghĩa, thiết lập chế độ công hữu về tư liệu sản xuất chủ yếu, giải phóng lực lượng sản xuất.\n- **Nội dung chính trị - xã hội:** Lật đổ quyền thống trị của giai cấp tư sản, giành lấy chính quyền nhà nước, thiết lập nền chuyên chính vô sản, tổ chức và xây dựng xã hội mới.\n- **Nội dung văn hóa - tư tưởng:** Xây dựng hệ tư tưởng mới (chủ nghĩa Mác - Lênin) làm chủ đạo trong đời sống tinh thần xã hội; cải tạo thế giới quan cũ, xây dựng nền văn hóa tiên tiến, đậm đà bản sắc.",
      },
      {
        heading: "3. Điều kiện thực hiện sứ mệnh lịch sử",
        body: "- **Điều kiện khách quan:** Do địa vị kinh tế (đại biểu cho phương thức sản xuất tương lai) và địa vị chính trị - xã hội (tính tổ chức, kỷ luật cao, tinh thần cách mạng triệt để) quy định.\n- **Điều kiện chủ quan:** Sự phát triển về số lượng và chất lượng của GCCN; phải thành lập được Đảng Cộng sản - đội tiên phong vũ trang bằng lý luận khoa học; thực hiện thành công khối liên minh giai cấp giữa công nhân, nông dân và các tầng lớp lao động khác.",
      },
    ],
  },
  {
    id: 3,
    title: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
    image: "/chuong_3.png",
    sections: [
      {
        heading: "1. Các đặc trưng cơ bản của Chủ nghĩa xã hội (6 đặc trưng)",
        body: "- Một là, giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện.\n- Hai là, có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.\n- Ba là, là xã hội do nhân dân lao động làm chủ.\n- Bốn là, có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.\n- Năm là, có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hoa văn hóa nhân loại.\n- Sáu là, bảo đảm bình đẳng, đoàn kết giữa các dân tộc và có quan hệ hữu nghị, hợp tác với nhân dân các nước trên thế giới.",
      },
      {
        heading: "2. Thời kỳ quá độ lên chủ nghĩa xã hội",
        body: "- **Tính tất yếu khách quan:** Là thời kỳ tất yếu cho mọi quốc gia đi lên CNXH. Bản chất kinh tế, chính trị, văn hóa của CNXH không tự phát sinh trong lòng xã hội tư bản mà cần một quá trình cải biến cách mạng lâu dài và sâu sắc.\n- **Đặc điểm của thời kỳ quá độ:** Đan xen giữa những tàn dư của xã hội cũ và những nhân tố mới của CNXH. Về kinh tế: Tồn tại nền kinh tế nhiều thành phần. Về chính trị: Tồn tại nhiều giai cấp, tầng lớp xã hội vừa hợp tác vừa đấu tranh. Về tư tưởng - văn hóa: Các yếu tố tư tưởng mới và cũ đấu tranh gay gắt.\n- **Hình thức quá độ:** Quá độ trực tiếp (từ các nước tư bản phát triển cao) và Quá độ gián tiếp (từ các nước tiền tư bản hoặc tư bản kém phát triển đi lên CNXH, bỏ qua chế độ TBCN).",
      },
    ],
  },
  {
    id: 4,
    title: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
    image: "/so_4.png",
    sections: [
      {
        heading: "1. Nền dân chủ xã hội chủ nghĩa",
        body: "- **Bản chất chính trị:** Đặt dưới sự lãnh đạo duy nhất của Đảng Cộng sản, thực hiện quyền lực của đại đa số nhân dân, là sự kế thừa và phát triển cao nhất lịch sử dân chủ nhân loại.\n- **Bản chất kinh tế:** Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu, nhằm thỏa mãn nhu cầu vật chất và tinh thần ngày càng cao của nhân dân, không bị chi phối bởi các tập đoàn tư bản tư nhân.\n- **Bản chất tư tưởng - văn hóa:** Lấy chủ nghĩa Mác - Lênin làm nền tảng tinh thần; nhân dân được giải phóng khỏi áp bức tinh thần, được tham gia vào các hoạt động sáng tạo văn hóa.",
      },
      {
        heading: "2. Nhà nước xã hội chủ nghĩa",
        body: '- **Bản chất:** Mang bản chất của GCCN nhưng đại biểu cho lợi ích của toàn thể nhân dân lao động. V.I.Lênin gọi đây là "nhà nước nửa nhà nước", một nhà nước đặc biệt tự tiêu vong khi không còn giai cấp.\n- **Chức năng:** Chức năng trấn áp (đối với các thế lực đi ngược lại lợi ích nhân dân) và Chức năng tổ chức, xây dựng kinh tế, văn hóa, xã hội (đây là chức năng căn bản, giữ vai trò quyết định thắng lợi của xã hội mới).',
      },
    ],
  },
  {
    id: 5,
    title: "Chương 5: Cơ cấu xã hội - giai cấp và liên minh",
    image: "/chuong_5.png",
    sections: [
      {
        heading: "1. Cơ cấu xã hội - giai cấp trong thời kỳ quá độ",
        body: "- **Khái niệm:** Là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, liên kết với nhau bằng những quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý và phân phối.\n- **Quy luật biến đổi:** Biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế nhiều thành phần của thời kỳ quá độ. Xu hướng biến đổi chính là sự xích lại gần nhau giữa các giai cấp, tầng lớp về mối quan hệ với tư liệu sản xuất, tính chất lao động và phương thức phân phối.",
      },
      {
        heading: "2. Liên minh giai cấp, tầng lớp trong thời kỳ quá độ",
        body: "- **Tính tất yếu:** Về chính trị, liên minh giữa công nhân, nông dân và trí thức là điều kiện quyết định để giữ vững chính quyền và bảo vệ chế độ. Về kinh tế, đây là yêu cầu khách quan của quá trình sản xuất đại công nghiệp gắn liền với nông nghiệp hiện đại và khoa học công nghệ.\n- **Nội dung liên minh:** Liên minh chính trị (bảo vệ nền tảng tư tưởng và chính quyền); Liên minh kinh tế (Nội dung cốt lõi, gắn kết lợi ích vật chất giữa các giai cấp); Liên minh văn hóa - xã hội (nâng cao trình độ học vấn, khoa học kỹ thuật).",
      },
    ],
  },
  {
    id: 6,
    title: "Chương 6: Vấn đề dân tộc và tôn giáo",
    image: "/chuong_6.png",
    sections: [
      {
        heading: "1. Vấn đề dân tộc",
        body: "- **Hai xu hướng khách quan:** Xu hướng các cộng đồng dân cư tách ra để hình thành các quốc gia dân tộc độc lập; và Xu hướng các dân tộc liên hiệp, xích lại gần nhau, xóa bỏ hàng rào ngăn cách kinh tế, văn hóa.\n- **Cương lĩnh dân tộc của V.I.Lênin:** \n  * Các dân tộc hoàn toàn bình đẳng (quyền lợi và nghĩa vụ như nhau, không có đặc quyền dân tộc lớn).\n  * Các dân tộc được quyền tự quyết (quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp).\n  * Liên hiệp công nhân tất cả các dân tộc (nội dung cốt lõi, đoàn kết giai cấp vô sản toàn thế giới).",
      },
      {
        heading: "2. Vấn đề tôn giáo",
        body: "- **Bản chất:** Tôn giáo là một hình thái ý thức xã hội phản ánh hoang đường, hư ảo thực tại khách quan vào đầu óc con người.\n- **Các tính chất:** Tính lịch sử (tôn giáo có sinh ra, biến đổi và sẽ mất đi khi điều kiện kinh tế - xã hội thay đổi); Tính quần chúng (phản ánh nhu cầu tinh thần của một bộ phận lớn nhân dân); Tính chính trị (xuất hiện khi các giai cấp bóc lột lợi dụng tôn giáo để phục vụ lợi ích thống trị).\n- **Nguyên tắc giải quyết:** Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng; Đoàn kết đồng bào theo đạo và không theo đạo; Phân biệt rõ mặt tư tưởng và mặt chính trị trong giải quyết vấn đề tôn giáo; Nghiêm cấm lợi dụng tôn giáo để phá hoại khối đại đoàn kết.",
      },
    ],
  },
  {
    id: 7,
    title: "Chương 7: Vấn đề gia đình",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "1. Khái niệm và vị trí của gia đình",
        body: "- **Khái niệm:** Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành trên cơ sở quan hệ hôn nhân và quan hệ huyết thống, cùng sống chung và có ngân sách chung.\n- **Vị trí:** Là tế bào của xã hội; là tổ ấm thân yêu mang lại sự bình yên cho mỗi cá nhân; là cầu nối giữa cá nhân và xã hội.",
      },
      {
        heading: "2. Chức năng cơ bản của gia đình",
        body: "- Chức năng tái sản xuất con người (đáp ứng nhu cầu duy trì nòi giống và cung cấp sức lao động cho xã hội).\n- Chức năng nuôi dưỡng, giáo dục (hình thành nhân cách, đạo đức cho thế hệ trẻ).\n- Chức năng kinh tế và tổ chức tiêu dùng (đảm bảo nguồn thu nhập và sử dụng hợp lý của cải vật chất).\n- Chức năng thỏa mãn nhu cầu tâm - sinh lý, duy trì tình cảm gia đình.",
      },
      {
        heading: "3. Cơ sở xây dựng gia đình trong thời kỳ quá độ",
        body: "- **Cơ sở kinh tế - xã hội:** Xóa bỏ chế độ tư hữu, thiết lập chế độ công hữu tư liệu sản xuất, giải phóng phụ nữ khỏi sự ràng buộc kinh tế phụ thuộc.\n- **Cơ sở chính trị - xã hội:** Thiết lập nhà nước XHCN và hệ thống pháp luật hôn nhân tiến bộ (Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, bình đẳng giới).",
      },
    ],
  },
];

export default function HomePage() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  return (
    <div
      className={`${lora.variable} bg-[#fcfbf9] min-h-screen font-sans text-slate-800`}
    >
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#2c1815] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
            alt="Library background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1815] to-transparent mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded border border-white/20 mb-6 font-medium text-sm tracking-widest text-[#f0e6d2] uppercase backdrop-blur-sm">
              <BookOpen size={16} /> Giáo trình Chuẩn Quốc gia
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fdfcf8] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Chủ Nghĩa Xã Hội Khoa Học <br />
              <span
                className="text-[#d9a05b] font-normal italic text-3xl md:text-4xl lg:text-5xl block mt-4"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Hệ Thống Kiến Thức Cốt Lõi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#d4c5b0] max-w-2xl mx-auto font-light leading-relaxed">
              Tài liệu học thuật bài bản theo 7 chương, cung cấp nền tảng lý
              luận toàn diện và thực tiễn cách mạng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT - SIDEBAR LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT SIDEBAR (Tabs) */}
          <div className="w-full lg:w-[30%] flex-shrink-0 sticky top-24 z-10">
            <div className="bg-[#fdfcf8] rounded-none p-1 border border-[#e5e0d8] shadow-sm">
              <h3
                className="font-bold text-[#4a2e2b] mb-2 px-5 pt-5 pb-3 text-sm tracking-widest uppercase border-b border-[#e5e0d8]"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Danh mục Học phần
              </h3>
              <div className="flex flex-col gap-1 p-2">
                {chapters.map((chapter) => {
                  const isActive = activeChapter.id === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter)}
                      className={`flex items-center gap-3 px-4 py-4 text-left transition-all duration-200 w-full group border-l-4 ${
                        isActive
                          ? "bg-[#f4efe6] border-[#8b2621]"
                          : "border-transparent hover:bg-[#faf7f2]"
                      }`}
                    >
                      <div className="flex-1">
                        <div
                          className={`text-sm leading-snug ${isActive ? "text-[#8b2621] font-bold" : "text-[#5c4a45] font-medium group-hover:text-[#8b2621]"}`}
                        >
                          {chapter.title}
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform flex-shrink-0 ${isActive ? "text-[#8b2621] translate-x-1" : "text-[#c2b5a3]"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="w-full lg:w-[70%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#fdfcf8] border border-[#e5e0d8] overflow-hidden shadow-sm"
              >
                {/* Header Image */}
                <div className="relative h-64 md:h-72 w-full bg-slate-200 border-b border-[#e5e0d8]">
                  <Image
                    src={activeChapter.image}
                    alt={activeChapter.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c1815]/90 via-[#2c1815]/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-[#d9a05b] text-white text-xs font-bold tracking-widest rounded-sm mb-3 font-sans">
                      CHƯƠNG {activeChapter.id}
                    </span>
                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug"
                      style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                    >
                      {activeChapter.title.split(": ")[1] ||
                        activeChapter.title}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-p:font-sans prose-li:font-sans">
                    {activeChapter.sections.map((sec, idx) => (
                      <div key={idx} className="mb-12 last:mb-0">
                        <h3
                          className="text-xl md:text-2xl font-bold text-[#8b2621] mb-6 pb-2 border-b border-[#f0e6d2]"
                          style={{
                            fontFamily: "var(--font-lora), Georgia, serif",
                          }}
                        >
                          {sec.heading}
                        </h3>
                        <div className="text-[#3c3633] leading-relaxed space-y-4 text-base md:text-lg">
                          {sec.body.split("\n").map((paragraph, pIdx) => {
                            if (!paragraph.trim()) return null;

                            if (
                              paragraph.startsWith("- ") ||
                              paragraph.startsWith("* ")
                            ) {
                              const content = paragraph.substring(2);
                              const parts = content.split(/(\*\*.*?\*\*)/g);
                              return (
                                <div key={pIdx} className="flex gap-3 mt-3">
                                  <span className="text-[#d9a05b] mt-1.5 text-sm">
                                    ✦
                                  </span>
                                  <p className="flex-1 m-0">
                                    {parts.map((part, i) => {
                                      if (
                                        part.startsWith("**") &&
                                        part.endsWith("**")
                                      ) {
                                        return (
                                          <strong
                                            key={i}
                                            className="text-[#2c1815] font-semibold"
                                          >
                                            {part.slice(2, -2)}
                                          </strong>
                                        );
                                      }
                                      return <span key={i}>{part}</span>;
                                    })}
                                  </p>
                                </div>
                              );
                            }

                            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                            return (
                              <p key={pIdx} className="text-justify mb-4">
                                {parts.map((part, i) => {
                                  if (
                                    part.startsWith("**") &&
                                    part.endsWith("**")
                                  ) {
                                    return (
                                      <strong
                                        key={i}
                                        className="text-[#2c1815] font-semibold"
                                      >
                                        {part.slice(2, -2)}
                                      </strong>
                                    );
                                  }
                                  return <span key={i}>{part}</span>;
                                })}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Knowledge Summary Blockquote */}
                  <blockquote
                    className="mt-14 p-6 bg-[#f9f5f0] border-l-4 border-[#d9a05b] text-[#5c4a45] italic text-lg leading-relaxed shadow-sm"
                    style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    "Lý luận không có thực tiễn là lý luận suông. Thực tiễn
                    không có lý luận hướng dẫn là thực tiễn mù quáng." <br />
                    <span className="block mt-4 text-sm font-sans font-bold uppercase tracking-wider text-[#8b2621] not-italic">
                      — Hồ Chí Minh
                    </span>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
