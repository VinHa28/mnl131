"use client";

import { motion } from "framer-motion";
import { Flag, Compass, Users, Scale, Shield, Home, Target, TrendingUp, Globe2, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function VietnamSpecial() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=2000&auto=format&fit=crop" 
            alt="Vietnam background" 
            fill 
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-md">
              <Flag size={18} className="text-accent" />
              <span className="font-semibold tracking-wide text-sm">Thực Tiễn Việt Nam</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Bản Lĩnh <span className="text-accent">&</span> <br />
              Khát Vọng Đổi Mới
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Khám phá con đường đi lên Chủ nghĩa xã hội mang đậm bản sắc Việt Nam - sự vận dụng sáng tạo lý luận Mác - Lênin vào điều kiện cụ thể của đất nước.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: SỰ LỰA CHỌN LỊCH SỬ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
                <Compass size={18} /> Giai đoạn lịch sử
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Sự Lựa Chọn Lịch Sử</h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Tiếp cận chân lý</h4>
                    <p className="text-sm text-slate-600">Lãnh tụ Nguyễn Ái Quốc tiếp cận chủ nghĩa Mác - Lênin, tìm thấy con đường cứu nước giải phóng dân tộc.</p>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Bước ngoặt 1930</h4>
                    <p className="text-sm text-slate-600">Thành lập Đảng Cộng sản Việt Nam, chấm dứt thời kỳ khủng hoảng về đường lối cứu nước.</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Target size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-white mb-2">Khẳng định con đường</h4>
                    <p className="text-sm text-primary-100">Độc lập dân tộc gắn liền với Chủ nghĩa xã hội là sợi chỉ đỏ xuyên suốt con đường cách mạng Việt Nam.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Vietnam History"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-medium italic">"Không có gì quý hơn độc lập tự do"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VẬN DỤNG SÁNG TẠO */}
      <section className="py-24 bg-slate-900 text-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Vận Dụng Sáng Tạo Lý Luận</h2>
            <p className="text-lg text-slate-400">Chủ nghĩa Mác - Lênin không phải là một giáo điều cứng nhắc, mà là kim chỉ nam cho hành động, được Đảng ta vận dụng linh hoạt vào thực tiễn.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={120} />
              </div>
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sứ mệnh Giai cấp Công nhân VN</h3>
              <p className="text-slate-400 leading-relaxed">
                Gắn liền với việc thắt chặt liên minh Công - Nông - Trí thức. Xây dựng giai cấp công nhân hiện đại với xu hướng trí tuệ hóa trong thời đại công nghiệp 4.0.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale size={120} />
              </div>
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
                <Scale size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nền Dân chủ XHCN</h3>
              <p className="text-slate-400 leading-relaxed">
                Phát huy cao độ quyền làm chủ của nhân dân theo phương châm cốt lõi: <span className="text-white font-medium">"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng"</span>.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <HeartHandshake size={120} />
              </div>
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-8">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Đại đoàn kết Dân tộc & Tôn giáo</h3>
              <p className="text-slate-400 leading-relaxed">
                Thực hiện chính sách nhất quán tôn trọng tự do tín ngưỡng, tôn giáo; đoàn kết toàn dân tộc tạo thành sức mạnh nội sinh to lớn để xây dựng và bảo vệ Tổ quốc.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Home size={120} />
              </div>
              <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8">
                <Home size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gia đình Việt Nam hiện đại</h3>
              <p className="text-slate-400 leading-relaxed">
                Xây dựng gia đình no ấm, tiến bộ, hạnh phúc, văn minh. Kế thừa những giá trị truyền thống tốt đẹp kết hợp linh hoạt với tiêu chuẩn văn minh của thời đại mới.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THÀNH TỰU VÀ KHÁT VỌNG */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Đặc Điểm Quá Độ Lên CNXH Ở Việt Nam</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Việt Nam tiến lên chủ nghĩa xã hội với một đặc thù lịch sử: <strong className="text-primary">"Quá độ gián tiếp, bỏ qua chế độ tư bản chủ nghĩa"</strong>.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-slate-700">
                  <p>
                    Tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt về khoa học và công nghệ, để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1542360663-8f4023704c56?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Vietnam"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-16 mt-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Thành Tựu 40 Năm Đổi Mới</h2>
            <p className="text-lg text-slate-600">Đất nước chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { icon: <TrendingUp size={32} />, label: "Kinh Tế Tăng Trưởng", value: "Quy Mô Lớn" },
              { icon: <Shield size={32} />, label: "Chính Trị - Xã Hội", value: "Ổn Định" },
              { icon: <Users size={32} />, label: "Xóa Đói Giảm Nghèo", value: "Ấn Tượng" },
              { icon: <Globe2 size={32} />, label: "Uy Tín Ngoại Giao", value: "Toàn Cầu" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* VISION 2045 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-hover rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold tracking-widest text-sm mb-6">
                TẦM NHÌN KHÁT VỌNG
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Mục Tiêu 2045</h2>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto font-medium leading-relaxed">
                Kỷ niệm 100 năm thành lập nước Việt Nam Dân chủ Cộng hòa, nay là nước Cộng hòa XHCN Việt Nam: Trở thành <span className="text-white font-bold bg-accent/80 px-2 py-1 rounded">nước phát triển, thu nhập cao</span> theo định hướng xã hội chủ nghĩa.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
