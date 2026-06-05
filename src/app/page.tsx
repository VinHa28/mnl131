"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Layers, Users, Building2, HeartHandshake, Globe, Home, ChevronRight } from "lucide-react";
import Image from "next/image";

const chapters = [
  {
    id: 1,
    title: "Nhập môn CNXHKH",
    icon: <BookOpen className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Sự ra đời của Chủ nghĩa xã hội khoa học",
        body: "CNXHKH ra đời dựa trên những tiền đề khách quan vững chắc. **Về điều kiện Kinh tế - Xã hội:** Sự phát triển của phương thức sản xuất tư bản chủ nghĩa (TBCN) làm sâu sắc thêm mâu thuẫn giữa lực lượng sản xuất xã hội hóa và quan hệ sản xuất tư nhân tư bản chủ nghĩa. Đồng thời, sự xuất hiện của giai cấp công nhân với tư cách là một lực lượng chính trị độc lập đã được khẳng định qua các phong trào đấu tranh vĩ đại: Phong trào Hiến chương Anh, khởi nghĩa thợ dệt Lyon (Pháp) và thợ dệt Silesia (Đức).\n\n**Tiền đề Khoa học tự nhiên:** 3 phát minh vĩ đại làm sụp đổ phương pháp tư duy siêu hình: Học thuyết tiến hóa, Học thuyết Tế bào, Định luật bảo toàn và chuyển hóa năng lượng.\n\n**Tiền đề Tư tưởng lý luận:** Kế thừa tinh hoa nhân loại, đặc biệt là Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, và Chủ nghĩa xã hội không tưởng phê phán Pháp - Anh."
      },
      {
        heading: "Ba giai đoạn phát triển cơ bản",
        body: "- **Giai đoạn Mác - Ăngghen:** Các ông đã chuyển CNXH từ không tưởng thành khoa học thông qua 3 phát kiến vĩ đại: Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư, Học thuyết về sứ mệnh lịch sử của giai cấp công nhân.\n- **Giai đoạn V.I.Lênin:** Bảo vệ, vận dụng và phát triển sáng tạo CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, biến lý luận CNXH thành hiện thực qua Cách mạng Tháng Mười Nga.\n- **CNXHKH từ sau Thế chiến II đến nay:** Sự phát triển của hệ thống XHCN thế giới, và công cuộc đổi mới vững chắc tại Việt Nam, Trung Quốc..."
      }
    ]
  },
  {
    id: 2,
    title: "Sứ mệnh lịch sử của giai cấp công nhân",
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Khái niệm và Đặc điểm",
        body: "Định nghĩa giai cấp công nhân được xem xét trên 2 phương diện cốt lõi:\n- **Phương thức lao động:** Là những người lao động trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại.\n- **Vị trí trong quan hệ sản xuất TBCN:** Là giai cấp không có tư liệu sản xuất, buộc phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư.\n\nĐặc điểm nổi bật: Là lực lượng sản xuất tiên tiến nhất, có tính tổ chức kỷ luật cao, tinh thần cách mạng triệt để và mang bản chất quốc tế."
      },
      {
        heading: "Nội dung Sứ mệnh lịch sử",
        body: "- **Kinh tế:** Giai cấp công nhân là nhân tố hàng đầu của lực lượng sản xuất, tạo tiền đề vật chất - kỹ thuật cho sự ra đời của xã hội mới, đại biểu cho quan hệ sản xuất mới dựa trên sở hữu công cộng.\n- **Chính trị - Xã hội:** Tiến hành cách mạng chính trị, lật đổ sự thống trị của giai cấp tư sản, thiết lập nhà nước chuyên chính vô sản.\n- **Văn hóa - Tư tưởng:** Xây dựng hệ giá trị mới, nền văn hóa mới dựa trên hệ tư tưởng của chủ nghĩa Mác - Lênin, giải phóng con người khỏi ách áp bức tinh thần."
      },
      {
        heading: "Điều kiện thực hiện sứ mệnh",
        body: "**Điều kiện khách quan** do địa vị kinh tế và địa vị chính trị - xã hội của họ quy định. **Điều kiện chủ quan** bao gồm sự phát triển bản thân giai cấp công nhân cả về số lượng và chất lượng, đặc biệt là vai trò lãnh đạo tuyệt đối của **Đảng Cộng sản** - đội tiên phong trí tuệ của giai cấp, cùng với việc xây dựng khối liên minh giai cấp vững chắc."
      }
    ]
  },
  {
    id: 3,
    title: "Thời kỳ quá độ lên CNXH",
    icon: <Layers className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Bản chất của Chủ nghĩa xã hội",
        body: "Theo quan điểm của Mác - Lênin, CNXH là giai đoạn thấp của hình thái kinh tế - xã hội cộng sản chủ nghĩa, với 6 đặc trưng cơ bản:\n1. Giải phóng giai cấp, giải phóng dân tộc, giải phóng con người.\n2. Do nhân dân lao động làm chủ.\n3. Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.\n4. Nhà nước kiểu mới mang bản chất giai cấp công nhân.\n5. Nền văn hóa phát triển cao, kế thừa giá trị truyền thống và tinh hoa nhân loại.\n6. Mối quan hệ bình đẳng, hữu nghị và hợp tác quốc tế."
      },
      {
        heading: "Tính tất yếu và Đặc điểm của Thời kỳ quá độ",
        body: "Sự chuyển biến từ TBCN lên CNXH là một bước nhảy vọt chất lượng, đòi hỏi một thời kỳ quá độ lịch sử lâu dài. Có hai hình thức: Quá độ trực tiếp (từ các nước TB phát triển) và **Quá độ gián tiếp** (từ các nước chưa qua CNTB, như Việt Nam).\n\n**Đặc điểm nổi bật:**\n- *Kinh tế:* Tồn tại nền kinh tế nhiều thành phần đan xen.\n- *Chính trị:* Thiết lập nhà nước chuyên chính vô sản, đấu tranh giai cấp trong điều kiện mới.\n- *Tư tưởng - Văn hóa:* Sự giao tranh giữa cái cũ và cái mới, hệ tư tưởng vô sản từng bước vươn lên giữ vai trò chủ đạo."
      }
    ]
  },
  {
    id: 4,
    title: "Dân chủ XHCN và Nhà nước XHCN",
    icon: <Building2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Bản chất nền dân chủ XHCN",
        body: "Dân chủ XHCN là nền dân chủ cao hơn về chất so với dân chủ tư sản, là nền dân chủ cho đại đa số nhân dân lao động.\n- **Bản chất chính trị:** Đặt dưới sự lãnh đạo duy nhất của giai cấp công nhân thông qua đội tiên phong là Đảng Cộng sản.\n- **Bản chất kinh tế:** Dựa trên chế độ sở hữu công cộng về tư liệu sản xuất chủ yếu, phân phối theo lao động.\n- **Bản chất tư tưởng - văn hóa:** Lấy chủ nghĩa Mác - Lênin làm hệ tư tưởng chủ đạo, phát huy dân chủ trong mọi lĩnh vực đời sống tinh thần."
      },
      {
        heading: "Nhà nước XHCN",
        body: "Nhà nước XHCN là một kiểu nhà nước đặc biệt, mà V.I.Lênin gọi là \"nhà nước nửa nhà nước\", nó tồn tại để tiến tới tự tiêu vong khi không còn giai cấp.\n\n**Chức năng:**\n- *Chức năng trấn áp:* Đối phó với các lực lượng thù địch, bảo vệ thành quả cách mạng.\n- *Chức năng tổ chức và xây dựng:* Quản lý, kiến tạo xã hội mới trên mọi lĩnh vực. Đây là chức năng căn bản nhất, quan trọng và khó khăn nhất, quyết định sự thành bại của CNXH."
      }
    ]
  },
  {
    id: 5,
    title: "Cơ cấu xã hội - Liên minh giai cấp",
    icon: <HeartHandshake className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Cơ cấu xã hội - giai cấp trong TKQĐ",
        body: "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội và các mối quan hệ giữa chúng. Trong thời kỳ quá độ, cơ cấu này biến đổi phức tạp, đa dạng và có quy luật: Nó luôn **bị quy định bởi cơ cấu kinh tế nhiều thành phần**.\n\nSự biến đổi này vừa mang tính tự phát do cơ chế thị trường, vừa mang tính tự giác dưới sự quản lý của Nhà nước XHCN để đảm bảo định hướng."
      },
      {
        heading: "Tính tất yếu và Nội dung của Liên minh",
        body: "Liên minh giai cấp công nhân, nông dân và tầng lớp trí thức là đòi hỏi tất yếu khách quan của cả kinh tế và chính trị nhằm tập hợp lực lượng cách mạng toàn dân.\n\n**Nội dung liên minh:**\n- *Chính trị:* Giữ vững lập trường của giai cấp công nhân, bảo vệ Nhà nước và Đảng.\n- *Kinh tế:* Đây là nội dung **trọng tâm và quyết định nhất**, kết hợp đúng đắn lợi ích kinh tế giữa các giai tầng.\n- *Văn hóa - Xã hội:* Xây dựng nền văn hóa tiên tiến, nâng cao dân trí, phát triển an sinh xã hội."
      }
    ]
  },
  {
    id: 6,
    title: "Vấn đề Dân tộc và Tôn giáo",
    icon: <Globe className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1533422902779-dac239873efa?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Vấn đề Dân tộc",
        body: "Có hai xu hướng khách quan của sự phát triển dân tộc: (1) Xu hướng thức tỉnh ý thức quốc gia, đòi tách ra lập quốc gia độc lập; (2) Xu hướng liên hiệp, hội nhập do sự phát triển của lực lượng sản xuất.\n\n**Cương lĩnh dân tộc của V.I.Lênin:** \n1. Các dân tộc hoàn toàn bình đẳng.\n2. Các dân tộc được quyền tự quyết.\n3. Liên hiệp công nhân tất cả các dân tộc."
      },
      {
        heading: "Vấn đề Tôn giáo",
        body: "**Bản chất:** Tôn giáo là một hình thái ý thức xã hội phản ánh hư ảo thực tại khách quan.\n**Nguyên nhân tồn tại:** Do nguyên nhân kinh tế (sự bất lực trước tự nhiên/xã hội), nhận thức (khoa học chưa giải thích hết), tâm lý (sự sợ hãi, hy vọng an ủi), chính trị - xã hội.\n\n**Nguyên tắc giải quyết:** Tôn trọng và bảo đảm quyền tự do tín ngưỡng, không tín ngưỡng; Tách biệt nhà nước, nhà trường khỏi giáo hội; Quần chúng tín đồ và không tín đồ phải đoàn kết chặt chẽ; Giải quyết vấn đề tôn giáo phải gắn liền với quá trình cải tạo xã hội cũ, xây dựng xã hội mới."
      }
    ]
  },
  {
    id: 7,
    title: "Vấn đề Gia đình",
    icon: <Home className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        heading: "Vị trí và Chức năng của Gia đình",
        body: "Gia đình là tế bào của xã hội, là tổ ấm mang lại hạnh phúc, và là cầu nối trung gian giữa cá nhân và xã hội.\n\n**Các chức năng cơ bản:**\n- *Tái sản xuất ra con người:* Chức năng đặc thù nhất, duy trì nòi giống.\n- *Nuôi dưỡng, giáo dục:* Nền tảng hình thành nhân cách.\n- *Kinh tế và tổ chức tiêu dùng:* Tham gia sản xuất và phân phối thu nhập.\n- *Thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm.*"
      },
      {
        heading: "Sự biến đổi của Gia đình Việt Nam hiện nay",
        body: "Thời kỳ quá độ chứng kiến sự biến đổi sâu sắc của gia đình Việt Nam:\n- **Quy mô thu nhỏ:** Chuyển mạnh sang mô hình gia đình hạt nhân (2 thế hệ) do sức ép đô thị hóa và công nghiệp hóa.\n- **Quan hệ gia đình:** Có phần lỏng lẻo hơn so với gia đình truyền thống, nhưng đề cao tính bình đẳng, dân chủ và tôn trọng tự do cá nhân.\n- **Chức năng kinh tế:** Chuyển từ đơn vị sản xuất khép kín sang đơn vị tiêu dùng và kinh tế thị trường."
      }
    ]
  }
];

export default function HomePage() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
            alt="Library background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent mix-blend-multiply"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 mb-6 font-medium text-sm backdrop-blur-sm">
              <BookOpen size={16} /> Giáo trình chuẩn quốc gia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Kho Tàng Tri Thức <br />
              <span className="text-accent">CNXHKH Toàn Tập</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Trạm học tập tổng hợp 7 chương cốt lõi. Đi sâu vào chi tiết lý luận học thuật, sự phát triển của chủ nghĩa Mác - Lênin và thực tiễn cách mạng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT - SIDEBAR LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR (Tabs) */}
          <div className="w-full lg:w-1/3 flex-shrink-0 sticky top-24 z-10">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 px-4 pt-2 text-lg uppercase tracking-wider">Danh mục Chương</h3>
              <div className="flex flex-col gap-2">
                {chapters.map((chapter) => {
                  const isActive = activeChapter.id === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-300 w-full group ${
                        isActive 
                          ? 'bg-primary text-white shadow-md shadow-primary/20' 
                          : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-500'}`}>
                        {chapter.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`text-xs font-bold mb-1 ${isActive ? 'text-primary-200' : 'text-accent'}`}>CHƯƠNG {chapter.id}</div>
                        <div className={`font-semibold text-sm leading-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
                          {chapter.title}
                        </div>
                      </div>
                      <ChevronRight size={18} className={`transition-transform ${isActive ? 'text-white translate-x-1' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
              >
                {/* Header Image */}
                <div className="relative h-64 md:h-80 w-full bg-slate-200 group">
                  <Image 
                    src={activeChapter.image} 
                    alt={activeChapter.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-bold uppercase tracking-widest rounded mb-3">
                      Chương {activeChapter.id}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                      {activeChapter.title}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12">
                  <div className="prose prose-slate prose-lg max-w-none">
                    {activeChapter.sections.map((sec, idx) => (
                      <div key={idx} className="mb-10 last:mb-0">
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                            {idx + 1}
                          </span>
                          {sec.heading}
                        </h3>
                        {/* Rendering text with line breaks and basic markdown-like bold parsing */}
                        <div className="text-slate-700 leading-relaxed space-y-4">
                          {sec.body.split('\n').map((paragraph, pIdx) => {
                            if (!paragraph.trim()) return null;
                            
                            // Simple parsing for **bold** text
                            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                            return (
                              <p key={pIdx}>
                                {parts.map((part, i) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={i} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
                                  }
                                  if (part.startsWith('- ') || part.startsWith('* ')) {
                                    return <span key={i} className="block pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">{part.substring(2)}</span>;
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
                  <div className="mt-12 p-6 bg-slate-50 border-l-4 border-accent rounded-r-xl">
                    <p className="text-slate-600 font-medium italic">
                      Đây là kiến thức trọng tâm đã được chọn lọc bám sát chương trình chuẩn của Bộ Giáo dục và Đào tạo. Hãy sử dụng "Trắc nghiệm tương tác" để kiểm tra lại những gì bạn vừa ôn tập.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </section>
    </div>
  );
}
