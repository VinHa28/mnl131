"use client";

import { motion } from "framer-motion";
import {
  Flag,
  BookOpen,
  Compass,
  Shield,
  Target,
  Users,
  TrendingUp,
  Globe2,
  HeartHandshake,
  Scale,
  Landmark,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Activity,
} from "lucide-react";
import Image from "next/image";

export default function VietnamSpecial() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/VN_hero.jpg"
            alt="Vietnam background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-md">
              <Flag size={18} className="text-accent" />
              <span className="font-semibold tracking-wider text-sm uppercase">
                Thực Tiễn Cách Mạng Việt Nam
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.15]">
              Bản Lĩnh{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">
                &
              </span>{" "}
              <br />
              Khát Vọng Đổi Mới
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed font-light max-w-3xl">
              <span className=" bg-black/40 px-2 py-1 rounded inline">
                Nghiên cứu chuyên sâu về sự vận dụng sáng tạo chủ nghĩa Mác -
                Lênin vào điều kiện đặc thù của Việt Nam: Từ sự lựa chọn lịch sử
                tất yếu đến khát vọng hùng cường năm 2045.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: SỰ LỰA CHỌN LỊCH SỬ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2"
            >
              <Compass size={18} /> Khởi Nguồn & Quyết Định
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              Sự Lựa Chọn Lịch Sử & Bước Ngoặt Lý Luận
            </motion.h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Bối cảnh Khủng hoảng
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Cuối thế kỷ XIX, đầu thế kỷ XX, cách mạng Việt Nam chìm trong
                cuộc khủng hoảng sâu sắc về đường lối cứu nước. Sự thất bại liên
                tiếp của các phong trào yêu nước từ lập trường phong kiến (Cần
                Vương, khởi nghĩa Yên Thế) đến lập trường tư sản (xu hướng bạo
                động của Phan Bội Châu, cải cách của Phan Châu Trinh) đặt ra yêu
                cầu bức thiết phải tìm một con đường mới.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-primary rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb size={120} className="text-white" />
              </div>
              <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Lightbulb size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                Bước ngoặt Lý luận 1920
              </h4>
              <p className="text-primary-100 leading-relaxed">
                Tháng 7/1920, Nguyễn Ái Quốc đọc bản{" "}
                <span className="font-semibold text-white">
                  "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và
                  vấn đề thuộc địa"
                </span>{" "}
                của V.I. Lênin. Sự kiện vĩ đại này giúp Người tìm ra chân lý:{" "}
                <strong className="text-accent">
                  "Muốn cứu nước và giải phóng dân tộc không có con đường nào
                  khác con đường cách mạng vô sản"
                </strong>
                . Độc lập dân tộc phải gắn liền với Chủ nghĩa xã hội.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Flag size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Cột mốc Lịch sử 1930
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Thành lập Đảng Cộng sản Việt Nam (3/2/1930) với{" "}
                <span className="font-medium text-slate-800">
                  Chánh cương vắn tắt, Sách lược vắn tắt
                </span>{" "}
                do Hồ Chí Minh soạn thảo. Văn kiện đã khẳng định phương hướng
                chiến lược vô cùng đúng đắn:{" "}
                <span className="italic">
                  "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới
                  xã hội cộng sản"
                </span>
                , chính thức gắn kết cách mạng Việt Nam với quỹ đạo cách mạng vô
                sản thế giới.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BẢN CHẤT MÔ HÌNH CNXH */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Bản Chất Mô Hình CNXH Tại Việt Nam
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã
              hội (Bổ sung, phát triển năm 2011) đã khái quát 8 đặc trưng cốt
              lõi của xã hội XHCN mà nhân dân ta đang xây dựng:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
              "Do nhân dân làm chủ.",
              "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp.",
              "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
              "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện.",
              "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
              "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.",
              "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới.",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors group"
              >
                <div className="text-accent font-bold text-xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </div>
                <p className="text-slate-200 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THỰC TIỄN VẬN DỤNG SÁNG TẠO */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Thực Tiễn Vận Dụng Sáng Tạo
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Từ Đại hội Đổi mới (1986) đến nay, Đảng ta đã có những bước đột
              phá mạnh mẽ về tư duy lý luận, cụ thể hóa Chủ nghĩa Mác - Lênin
              vào 4 trụ cột trọng tâm.
            </p>
          </div>

          <div className="space-y-16">
            {/* Trụ cột 1 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/kinh_te.jpg"
                    alt="Kinh tế thị trường"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Kinh Tế Thị Trường Định Hướng XHCN
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Đây là **đột phá lý luận sáng tạo độc đáo** của Đảng ta. Nền
                  kinh tế này không phải là nền kinh tế tư bản chủ nghĩa, cũng
                  không phải là nền kinh tế kế hoạch hóa tập trung quan liêu bao
                  cấp.
                </p>
                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-2xl shadow-sm">
                  <p className="text-slate-700 italic">
                    "Đó là nền kinh tế thị trường hiện đại, hội nhập quốc tế,
                    vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị
                    trường, có sự quản lý của Nhà nước pháp quyền XHCN, do Đảng
                    Cộng sản Việt Nam lãnh đạo; bảo đảm định hướng XHCN nhằm mục
                    tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.
                    Đặc trưng nổi bật là **phát triển kinh tế đi đôi với thực
                    hiện tiến bộ và công bằng xã hội ngay trong từng bước, từng
                    chính sách**."
                  </p>
                </div>
              </div>
            </div>

            {/* Trụ cột 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/giai_cap_cong_nhan.jpg"
                    alt="Giai cấp công nhân"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pr-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-primary rounded-xl mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Xây Dựng Giai Cấp Công Nhân Hiện Đại
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Trong thời đại Cách mạng Công nghiệp 4.0, giai cấp công nhân
                  Việt Nam đang có sự chuyển dịch mạnh mẽ từ công nhân lao động
                  cơ bắp sang **công nhân tri thức** (công nghệ thông tin, tự
                  động hóa, trí tuệ nhân tạo).
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Đảng ta khẳng định: Sự lớn mạnh của giai cấp công nhân là nhân
                  tố quyết định bảo đảm thành công của công cuộc đổi mới. Việc
                  xây dựng giai cấp công nhân phải gắn liền với việc thắt chặt
                  **khối liên minh Công - Nông - Trí thức**, tạo nền tảng vững
                  chắc cho hệ thống chính trị và sự phát triển bền vững của đất
                  nước.
                </p>
              </div>
            </div>

            {/* Trụ cột 3 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/anh_3.png"
                    alt="Dân chủ XHCN"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mb-6">
                  <Scale size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Dân Chủ XHCN & Hệ Thống Chính Trị
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Nền dân chủ XHCN được vận hành thông qua cơ chế tổng thể:
                  **"Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ"**. Dân
                  chủ vừa là mục tiêu, vừa là động lực của công cuộc đổi mới.
                </p>

                {/* Highlight Box */}
                <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={24} className="text-emerald-200" />
                    <h4 className="font-bold text-xl tracking-wide uppercase">
                      Phương Châm Hành Động
                    </h4>
                  </div>
                  <p className="text-2xl font-black leading-tight">
                    "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân
                    thụ hưởng"
                  </p>
                  <p className="mt-4 text-emerald-100 text-sm">
                    Đại hội XIII của Đảng (2021)
                  </p>
                </div>
              </div>
            </div>

            {/* Trụ cột 4 */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/doan_ket_dan_toc.jpg"
                    alt="Đoàn kết dân tộc"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pr-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-xl mb-6">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Chính Sách Dân Tộc & Tôn Giáo
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Thực hiện nhất quán chính sách đại đoàn kết toàn dân tộc. Các
                  dân tộc bình đẳng, tôn trọng, đoàn kết và giúp nhau cùng phát
                  triển.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Đảng và Nhà nước ta tôn trọng và bảo đảm **quyền tự do tín
                  ngưỡng, tôn giáo và quyền không tín ngưỡng, tôn giáo** của
                  nhân dân; các tôn giáo bình đẳng trước pháp luật. Đồng thời,
                  kiên quyết đấu tranh, ngăn chặn, xử lý nghiêm các hành vi vi
                  phạm pháp luật, phản bác các luận điệu lợi dụng vấn đề dân
                  tộc, tôn giáo của các thế lực thù địch nhằm chia rẽ khối đại
                  đoàn kết toàn dân tộc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THỜI KỲ QUÁ ĐỘ GIÁN TIẾP VÀ KHÁT VỌNG 2045 */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Concept Box */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Thời Kỳ Quá Độ Gián Tiếp
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Đại hội IX của Đảng khẳng định: Con đường đi lên của nước ta là
                sự phát triển quá độ lên CNXH **bỏ qua chế độ tư bản chủ
                nghĩa**. Nghĩa là:{" "}
                <span className="text-white font-medium">
                  Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và
                  kiến trúc thượng tầng TBCN
                </span>
                , nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt
                được dưới chế độ TBCN (đặc biệt là khoa học, công nghệ và lực
                lượng sản xuất) để phát triển nhanh lực lượng sản xuất, xây dựng
                nền kinh tế hiện đại.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-primary/30 flex items-center justify-center bg-primary text-white shadow-[0_0_50px_rgba(139,0,0,0.5)]">
                <Landmark size={48} />
              </div>
            </div>
          </div>

          {/* Achievements Showcases */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Thành Tựu 40 Năm Đổi Mới
            </h2>
            <p className="text-lg text-slate-600">
              Những con số biết nói minh chứng cho đường lối đúng đắn của Đảng.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-200/50 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Globe2 size={32} />
              </div>
              <h4 className="text-4xl font-black text-slate-900 mb-2">
                Top 40
              </h4>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Nền Kinh Tế Thế Giới
              </p>
              <p className="mt-4 text-slate-600 text-sm">
                Từ một nước nghèo, bị bao vây cấm vận, Việt Nam đã vươn lên
                thành nền kinh tế có quy mô lớn, hội nhập quốc tế sâu rộng.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-200/50 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Activity size={32} />
              </div>
              <h4 className="text-4xl font-black text-slate-900 mb-2">
                Đột Phá
              </h4>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Cải Thiện Đời Sống
              </p>
              <p className="mt-4 text-slate-600 text-sm">
                Thu nhập bình quân đầu người liên tục tăng, đời sống vật chất và
                tinh thần của nhân dân được nâng cao vượt bậc.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-200/50 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-4xl font-black text-slate-900 mb-2">
                &lt; 3%
              </h4>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Tỷ lệ Hộ Nghèo Đa Chiều
              </p>
              <p className="mt-4 text-slate-600 text-sm">
                Trở thành điểm sáng toàn cầu trong việc thực hiện các Mục tiêu
                Thiên niên kỷ của Liên Hợp Quốc về xóa đói giảm nghèo.
              </p>
            </motion.div>
          </div>

          {/* STRATEGIC GOALS 2045 */}
          <div className="relative rounded-3xl overflow-hidden bg-primary text-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542360663-8f4023704c56?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 p-10 md:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-widest text-sm mb-4 border border-accent/30">
                  <Target size={16} /> MỤC TIÊU CHIẾN LƯỢC TƯƠNG LAI
                </div>
                <h2 className="text-3xl md:text-5xl font-black">
                  Khát Vọng Hùng Cường
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* 2030 Goal */}
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-slate-900/60 transition-colors">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4 opacity-50">
                    2030
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Kỷ niệm 100 năm thành lập Đảng
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Trở thành nước đang phát triển, có công nghiệp hiện đại, thu
                    nhập trung bình cao.
                  </p>
                </div>

                {/* 2045 Goal */}
                <div className="bg-accent/90 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(217,119,6,0.3)] transform md:-translate-y-4">
                  <div className="text-5xl font-black text-white mb-4 opacity-90 drop-shadow-md">
                    2045
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Kỷ niệm 100 năm thành lập Nước
                  </h4>
                  <p className="text-amber-100 font-medium leading-relaxed text-lg">
                    Trở thành nước phát triển, thu nhập cao, theo định hướng xã
                    hội chủ nghĩa. Khẳng định sự vươn mình mạnh mẽ của dân tộc
                    Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
