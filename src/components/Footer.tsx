export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-bold text-2xl text-white mx-auto mb-6">
          V
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Chủ Nghĩa Xã Hội Khoa Học</h4>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Sản phẩm sáng tạo môn học Chủ nghĩa Xã hội Khoa học - Nền tảng lý luận và thực tiễn cách mạng Việt Nam.
        </p>
        
        <div className="bg-slate-800/50 rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-slate-700/50">
          <p className="font-medium text-slate-300 mb-2">Thực hiện bởi: <span className="text-white font-bold">Nhóm [Tên Nhóm]</span></p>
          <p className="text-slate-400 text-sm">Giảng viên hướng dẫn: <span className="text-slate-300">[Tên Giảng Viên]</span></p>
        </div>

        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Bản quyền thuộc về Nhóm [Tên Nhóm]. Được thiết kế với Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
