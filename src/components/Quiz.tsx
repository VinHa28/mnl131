"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Target,
  X,
  BookOpen,
} from "lucide-react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizData = Record<number, Question[]>;

const quizData: QuizData = {
  1: [
    {
      question:
        "Tiền đề khoa học tự nhiên nào KHÔNG gắn liền với sự ra đời của CNXHKH?",
      options: [
        "Thuyết tiến hóa",
        "Định luật bảo toàn và chuyển hóa năng lượng",
        "Thuyết tương đối",
        "Học thuyết tế bào",
      ],
      correctAnswer: 2,
      explanation:
        "Thuyết tương đối của Einstein ra đời sau (thế kỷ 20). Ba tiền đề KHTN của thế kỷ 19 là Thuyết tiến hóa, Học thuyết tế bào, và Định luật bảo toàn năng lượng.",
    },
    {
      question:
        "Ai là người phát triển CNXHKH trong giai đoạn từ sau khi C.Mác và Ph.Ăngghen qua đời?",
      options: ["Hồ Chí Minh", "V.I.Lênin", "Stalin", "Mao Trạch Đông"],
      correctAnswer: 1,
      explanation:
        "V.I.Lênin là người bảo vệ và phát triển sáng tạo CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa.",
    },
    {
      question:
        "Theo nghĩa hẹp, Chủ nghĩa xã hội khoa học được định nghĩa là gì?",
      options: [
        "Là toàn bộ chủ nghĩa Mác - Lênin luận giải về sự chuyển biến lên chủ nghĩa cộng sản",
        "Là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin",
        "Là một lý thuyết triết học thuần túy về xã hội tương lai",
        "Là phong trào đấu tranh tự phát của giai cấp công nhân thế kỷ XIX",
      ],
      correctAnswer: 1,
      explanation:
        "Theo nghĩa hẹp (được giảng dạy trong chương trình), chủ nghĩa xã hội khoa học là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin bên cạnh Triết học và Kinh tế chính trị học.",
    },
    {
      question:
        "Vào những năm 40 của thế kỷ XIX, cuộc cách mạng công nghiệp đã hoàn thành ở quốc gia nào và bắt đầu chuyển sang Pháp và Đức?",
      options: ["Nước Mỹ", "Nước Nga", "Nước Anh", "Nước Ý"],
      correctAnswer: 2,
      explanation:
        "Giáo trình nêu rõ: 'Vào những năm 40 của thế kỷ XIX, cuộc cách mạng công nghiệp đã hoàn thành ở nước Anh, bắt đầu chuyển sang nước Pháp và Đức'.",
    },
    {
      question:
        "Mâu thuẫn kinh tế cơ bản của phương thức sản xuất tư bản chủ nghĩa dẫn đến sự ra đời của CNXHKH là gì?",
      options: [
        "Mâu thuẫn giữa lực lượng sản xuất mang tính chất xã hội với quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa",
        "Mâu thuẫn giữa sự giàu có của tầng lớp quý tộc và sự nghèo đói của nông dân",
        "Mâu thuẫn giữa các tập đoàn tư bản công nghiệp và tư bản tài chính",
        "Mâu thuẫn giữa nhu cầu tiêu dùng ngày càng cao với sự khan hiếm tài nguyên",
      ],
      correctAnswer: 0,
      explanation:
        "Sự phát triển của nền đại công nghiệp làm xuất hiện mâu thuẫn quyết liệt giữa lực lượng sản xuất mang tính xã hội hóa cao với quan hệ sản xuất chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất.",
    },
    {
      question:
        "Phong trào Hiến chương của những người lao động ở nước Anh diễn ra trong khoảng thời gian nào?",
      options: ["1831 - 1834", "1836 - 1848", "1844 - 1848", "1848 - 1871"],
      correctAnswer: 1,
      explanation:
        "Theo giáo trình, 'Phong trào Hiến chương của những người lao động ở nước Anh diễn ra trên 10 năm (1836-1848)'.",
    },
    {
      question:
        "Năm 1834, khẩu hiệu của phong trào công nhân dệt thành phố Lion (Pháp) đã chuyển sang mục đích chính trị rõ nét là gì?",
      options: [
        "Sống có việc làm hay là chết trong đấu tranh",
        "Tự do, bình đẳng, bác ái",
        "Cộng hòa hay là chết",
        "Vô sản tất cả các nước đoàn kết lại",
      ],
      correctAnswer: 2,
      explanation:
        "Năm 1831 phong trào mang khẩu hiệu kinh tế 'sống có việc làm hay là chết trong đấu tranh', đến năm 1834 khẩu hiệu đã chuyển sang mục đích chính trị: 'Cộng hòa hay là chết'.",
    },
    {
      question:
        "Sự phát triển nhanh chóng có tính chính trị công khai của phong trào công nhân những năm 1830-1840 chứng minh điều gì?",
      options: [
        "Giai cấp công nhân đã hoàn toàn xóa bỏ được chủ nghĩa tư bản",
        "Giai cấp công nhân đã xuất hiện như một lực lượng chính trị độc lập",
        "Giai cấp công nhân vẫn phụ thuộc vào sự lãnh đạo của giai cấp tư sản",
        "Phong tr gian công nhân chỉ đấu tranh vì lợi ích kinh tế thuần túy",
      ],
      correctAnswer: 1,
      explanation:
        "Sự lớn mạnh của phong trào minh chứng lần đầu tiên giai cấp công nhân xuất hiện như một lực lượng chính trị độc lập với những yêu sách kinh tế, chính trị riêng của mình.",
    },
    {
      question:
        "Phát minh nào sau đây KHÔNG thuộc về ba tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử?",
      options: [
        "Học thuyết tiến hóa",
        "Định luật bảo toàn và chuyển hóa năng lượng",
        "Học thuyết tế bào",
        "Thuyết tương đối",
      ],
      correctAnswer: 3,
      explanation:
        "Ba phát minh vạch thời đại thế kỷ XIX là Học thuyết tiến hóa, Định luật bảo toàn và chuyển hóa năng lượng, Học thuyết tế bào. Thuyết tương đối thuộc về thế kỷ XX.",
    },
    {
      question:
        "Ai là những đại biểu xuất sắc nhất của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX?",
      options: [
        "Xanh Ximông, S. Phuriê và R. Oen",
        "C. Mác, Ph. Ăngghen và V.I. Lênin",
        "Ph. Héghen và L. Phoiobắc",
        "A. Smith và D. Ricardo",
      ],
      correctAnswer: 0,
      explanation:
        "Giáo trình chỉ rõ ba nhà tư tưởng đại biểu cho chủ nghĩa xã hội không tưởng phê phán là Xanh Ximông, S. Phuriê và R. Oen.",
    },
    {
      question:
        "Hạn chế lớn nhất về tầm nhìn thế giới quan của các nhà chủ nghĩa xã hội không tưởng phê phán là gì?",
      options: [
        "Không đồng tình hay phê phán chế độ quân chủ chuyên chế",
        "Không thấy được sự bất công và tội ác gia tăng của xã hội tư bản",
        "Không phát hiện ra quy luật vận động của xã hội loài người và không phát hiện ra lực lượng xã hội tiên phong (giai cấp công nhân)",
        "Không đưa ra được các luân điểm có giá trị nào về tổ chức sản xuất tương lai",
      ],
      correctAnswer: 2,
      explanation:
        "Hạn chế lịch sử lớn nhất của họ là không phát hiện ra quy luật vận động, phát triển của xã hội loài người nói chung và chủ nghĩa tư bản nói riêng, đồng thời không chỉ ra được vai trò sứ mệnh lịch sử của giai cấp công nhân.",
    },
    {
      question:
        "Tác phẩm nào đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học?",
      options: [
        "Chống Đuyrinh",
        "Tuyên ngôn của Đảng Cộng sản",
        "Bộ Tư bản",
        "Góp phần phê phán triết học pháp quyền của Héghen - Lời nói đầu",
      ],
      correctAnswer: 1,
      explanation:
        "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' do C. Mác và Ph. Ăngghen soạn thảo, công bố tháng 2 năm 1848 là văn kiện có tính chất cương lĩnh, đánh dấu sự ra đời của chủ nghĩa xã hội khoa học.",
    },
  ],
  2: [
    {
      question: "Đặc điểm nổi bật của giai cấp công nhân là gì?",
      options: [
        "Là giai cấp sản xuất bằng công cụ thủ công",
        "Đại biểu cho lực lượng sản xuất tiên tiến",
        "Sở hữu lượng tư liệu sản xuất lớn",
        "Phân tán và thiếu tổ chức",
      ],
      correctAnswer: 1,
      explanation:
        "Đặc điểm nổi bật của giai cấp công nhân là lao động bằng phương thức công nghiệp, đại biểu cho lực lượng sản xuất tiên tiến, có tính tổ chức kỷ luật cao.",
    },
    {
      question:
        "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
      options: [
        "Đấu tranh giành chính quyền",
        "Xây dựng nền văn hóa mới",
        "Tạo tiền đề vật chất - kỹ thuật cho xã hội mới",
        "Xóa bỏ các tôn giáo",
      ],
      correctAnswer: 2,
      explanation:
        "Về kinh tế, giai cấp công nhân là nhân tố hàng đầu của lực lượng sản xuất xã hội hóa cao, đại biểu cho quan hệ sản xuất mới, tạo tiền đề vật chất - kỹ thuật cho CNXH.",
    },
    {
      question:
        "Theo giáo trình, phương diện nào dưới đây là phương diện chính trị - xã hội của giai cấp công nhân?",
      options: [
        "Là sản phẩm và là chủ thể của nền sản xuất đại công nghiệp",
        "Là giai cấp không có tư liệu sản xuất, phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư",
        "Là giai cấp đại biểu cho quan hệ sản xuất phong kiến",
        "Là giai cấp chiếm số lượng tuyệt đối trong cơ cấu dân cư ở các nước nông nghiệp",
      ],
      correctAnswer: 1,
      explanation:
        "Về phương diện chính trị - xã hội, giai cấp công nhân được đặc trưng là những người không có tư liệu sản xuất, phải bán sức lao động và bị bóc lột giá trị thặng dư. Phương diện kinh tế - vật chất mới xác định họ là sản phẩm của nền đại công nghiệp.",
    },
    {
      question:
        "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
      options: [
        "Lật đổ sự thống trị của giai cấp tư sản, giành lấy quyền lực nhà nước",
        "Là nhân tố hàng đầu của lực lượng sản xuất xã hội hóa cao, đại biểu cho quan hệ sản xuất mới dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu",
        "Xây dựng hệ tư tưởng mới - chủ nghĩa Mác - Lênin để thay thế hệ tư tưởng tư sản",
        "Xây dựng nền dân chủ xã hội chủ nghĩa và phát triển văn hóa mới",
      ],
      correctAnswer: 1,
      explanation:
        "Nội dung kinh tế cốt lõi là giai cấp công nhân đại biểu cho lực lượng sản xuất tiến tiến và quan hệ sản xuất mới (công hữu tư liệu sản xuất), đóng vai trò chủ đạo trong việc sản xuất ra của cải vật chất cho xã hội.",
    },
    {
      question:
        "Để thực hiện sứ mệnh lịch sử về mặt chính trị - xã hội, bước đầu tiên giai cấp công nhân phải làm gì?",
      options: [
        "Tiến hành công nghiệp hóa, hiện đại hóa đất nước",
        "Xây dựng nền văn hóa tiên tiến đậm đà bản sắc dân tộc",
        "Lật đổ ách thống trị của giai cấp tư sản, giành lấy chính quyền nhà nước",
        "Xóa bỏ ngay lập tức mọi hình thức sản xuất hàng hóa tư nhân",
      ],
      correctAnswer: 2,
      explanation:
        "Về mặt chính trị - xã hội, trước hết giai cấp công nhân phải tiến hành cách mạng chính trị để lật đổ ách thống trị của giai cấp tư sản, giành lấy chính quyền nhà nước, thiết lập nhà nước chuyên chính vô sản/nhà nước xã hội chủ nghĩa.",
    },
    {
      question:
        "Điều kiện khách quan nào quy định sứ mệnh lịch sử của giai cấp công nhân?",
      options: [
        "Sự phát triển của Đảng Cộng sản và trình độ lý luận của công nhân",
        "Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội của giai cấp công nhân",
        "Sự ủng hộ tự phát của các tầng lớp tiểu tư sản và trí thức",
        "Sự suy yếu tự nhiên của các tập đoàn tư bản độc quyền",
      ],
      correctAnswer: 1,
      explanation:
        "Sứ mệnh lịch sử của giai cấp công nhân do các điều kiện khách quan quy định, bao gồm địa vị kinh tế - xã hội (là sản phẩm của nền đại công nghiệp) và các đặc điểm chính trị - xã hội (tính tổ chức, kỷ luật, cách mạng triệt để).",
    },
    {
      question:
        "Đặc điểm chính trị - xã hội nào của giai cấp công nhân tạo nên khả năng đoàn kết với các giai cấp, tầng lớp lao động khác?",
      options: [
        "Có lợi ích cơ bản thống nhất với lợi ích của nhân dân lao động",
        "Là giai cấp sở hữu nhiều tư liệu sản xuất quy mô nhỏ",
        "Là giai cấp có tính tự phát cao trong các cuộc đấu tranh",
        "Chỉ quan tâm đến lợi ích của riêng ngành nghề mình",
      ],
      correctAnswer: 0,
      explanation:
        "Giai cấp công nhân có lợi ích cơ bản thống nhất với lợi ích của nhân dân lao động, từ đó tạo ra cơ sở khách quan để thực hiện liên minh giai cấp, tập hợp lực lượng cách mạng.",
    },
    {
      question:
        "Nhân tố chủ quan mang tính quyết định nhất đối với việc thực hiện sứ mệnh lịch sử của giai cấp công nhân là gì?",
      options: [
        "Sự phát triển của công nghệ tự động hóa",
        "Sự suy thoái của thị trường tài chính tư bản chủ nghĩa",
        "Sự ra đời và lãnh đạo của Đảng Cộng sản - chính đảng của giai cấp công nhân",
        "Số lượng công nhân cơ khí tăng lên nhanh chóng",
      ],
      correctAnswer: 2,
      explanation:
        "Đảng Cộng sản là nhân tố chủ quan quan trọng nhất, là đội tiên phong vũ trang bằng lý luận khoa học để lãnh đạo giai cấp công nhân và nhân dân lao động thực hiện sứ mệnh lịch sử.",
    },
    {
      question:
        "Mối quan hệ giữa Đảng Cộng sản và giai cấp công nhân được giáo trình xác định như thế nào?",
      options: [
        "Đảng Cộng sản đứng trên và biệt lập hoàn toàn với giai cấp công nhân",
        "Đảng Cộng sản là bộ phận tiên phong, đại biểu trung thành cho lợi ích của giai cấp công nhân và nhân dân lao động",
        "Đảng Cộng sản chỉ là một tổ chức câu lạc bộ lý luận của các trí thức tư sản",
        "Giai cấp công nhân không cần sự lãnh đạo của Đảng vẫn tự động hoàn thành sứ mệnh",
      ],
      correctAnswer: 1,
      explanation:
        "Đảng Cộng sản là bộ phận tiên phong của giai cấp công nhân, có sự thống nhất hữu cơ với giai cấp: Đảng lấy giai cấp công nhân làm cơ sở xã hội - giai cấp, đồng thời đại biểu cho lợi ích toàn bộ giai cấp và nhân dân lao động.",
    },
    {
      question:
        "Điểm khác biệt/biến đổi nổi bật của giai cấp công nhân hiện nay so với giai cấp công nhân thế kỷ XIX là gì?",
      options: [
        "Không còn bị bóc lột giá trị thặng dư dưới bất kỳ hình thức nào",
        "Xu hướng 'trí thức hóa' ngày càng tăng và xuất hiện 'công nhân áo trắng'",
        "Đã trở thành giai cấp nắm toàn bộ tư liệu sản xuất ở các nước phương Tây",
        "Hoàn toàn mất đi tính tổ chức và tính kỷ luật lao động",
      ],
      correctAnswer: 1,
      explanation:
        "Trong bối cảnh cách mạng khoa học công nghệ hiện đại, giai cấp công nhân hiện nay có xu hướng trí thức hóa nhanh chóng, trình độ học vấn được nâng cao, hình thành bộ phận 'công nhân áo trắng' bên cạnh 'công nhân áo xanh'.",
    },
    {
      question:
        "Dù có những biến đổi về diện mạo, bản chất kinh tế - xã hội nào của giai cấp công nhân hiện nay trong xã hội tư bản VẪN KHÔNG THAY ĐỔI?",
      options: [
        "Vẫn là giai cấp nắm quyền lực chính trị tối cao trong nghị viện",
        "Vẫn là những người không sở hữu tư liệu sản xuất chủ yếu và bị bóc lột giá trị thặng dư",
        "Vẫn chủ yếu làm việc thủ công bằng công cụ thô sơ",
        "Vẫn giữ tỷ lệ sở hữu phần lớn cổ phần chi phối các tập đoàn xuyên quốc gia",
      ],
      correctAnswer: 1,
      explanation:
        "Ở các nước tư bản chủ nghĩa hiện nay, giai cấp công nhân vẫn cơ bản không có tư liệu sản xuất chủ yếu, vẫn bị các chủ tập đoàn tư bản bóc lột giá trị thặng dư, bản chất địa vị kinh tế - xã hội này không thay đổi.",
    },
    {
      question:
        "Hiện nay, giai cấp công nhân Việt Nam có nhiệm vụ lịch sử nào về mặt văn hóa, tư tưởng?",
      options: [
        "Khôi phục hoàn toàn tư tưởng Nho giáo và các lễ nghi phong kiến",
        "Tiếp thu toàn bộ lối sống và các giá trị văn hóa phương Tây không chọn lọc",
        "Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng",
        "Từ bỏ mục tiêu xây dựng chủ nghĩa xã hội để tập trung phát triển kinh tế thuần túy",
      ],
      correctAnswer: 2,
      explanation:
        "Về mặt văn hóa tư tưởng, giai cấp công nhân Việt Nam có sứ mệnh xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, giữ vững trận địa tư tưởng của giai cấp công nhân là chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.",
    },
  ],
  3: [
    {
      question: "Theo quan điểm Mác - Lênin, CNXH có mấy đặc trưng cơ bản?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 2,
      explanation:
        "Có 6 đặc trưng cơ bản của CNXH theo quan điểm của chủ nghĩa Mác - Lênin.",
    },
    {
      question:
        "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam thuộc hình thức nào?",
      options: [
        "Quá độ trực tiếp",
        "Quá độ gián tiếp",
        "Quá độ nhảy vọt",
        "Quá độ tuần tự",
      ],
      correctAnswer: 1,
      explanation:
        "Việt Nam thực hiện quá độ gián tiếp, tức là bỏ qua chế độ tư bản chủ nghĩa để tiến lên CNXH.",
    },
    {
      question:
        "Theo quan điểm của chủ nghĩa Mác - Lênin, hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển từ thấp đến cao qua những giai đoạn nào?",
      options: [
        "Thời kỳ quá độ, Chủ nghĩa xã hội và Giai đoạn cao của xã hội cộng sản chủ nghĩa",
        "Chủ nghĩa tư bản độc quyền, Chủ nghĩa xã hội và Chủ nghĩa cộng sản",
        "Xã hội phong kiến, Xã hội tư bản và Xã hội xã hội chủ nghĩa",
        "Giai đoạn thấp của xã hội cộng sản và Giai đoạn bình đẳng của xã hội cộng sản",
      ],
      correctAnswer: 0,
      explanation:
        "Chủ nghĩa Mác - Lênin phân chia hình thái kinh tế - xã hội cộng sản chủ nghĩa thành các giai đoạn: thời kỳ quá độ lên chủ nghĩa xã hội; giai đoạn thấp (chủ nghĩa xã hội); và giai đoạn cao (chủ nghĩa cộng sản).",
    },
    {
      question:
        "V.I. Lênin gọi giai đoạn thấp của hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
      options: [
        "Thời kỳ quá độ",
        "Chủ nghĩa xã hội",
        "Chủ nghĩa cộng sản",
        "Xã hội dân chủ văn minh",
      ],
      correctAnswer: 1,
      explanation:
        "C. Mác và Ph. Ăngghen gọi giai đoạn thấp là xã hội xã hội chủ nghĩa (hay giai đoạn đầu của xã hội cộng sản chủ nghĩa), và V.I. Lênin gọi giai đoạn này là chủ nghĩa xã hội.",
    },
    {
      question:
        "Đâu là một trong các đặc trưng cơ bản của chủ nghĩa xã hội được luận giải trong lý luận của chủ nghĩa Mác - Lênin?",
      options: [
        "Duy trì chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất",
        "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu",
        "Xóa bỏ hoàn toàn nhà nước và pháp luật ngay từ khi bắt đầu xây dựng",
        "Phân phối sản phẩm tiêu dùng theo nguyên tắc 'Làm theo năng lực, hưởng theo nhu cầu'",
      ],
      correctAnswer: 1,
      explanation:
        "Một trong những đặc trưng bản chất của CNXH là có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.",
    },
    {
      question:
        "Nguyên tắc phân phối sản phẩm chủ đạo trong giai đoạn thấp (chủ nghĩa xã hội) của hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
      options: [
        "Làm theo năng lực, hưởng theo nhu cầu",
        "Phân phối bình quân, cào bằng cho mọi thành viên",
        "Làm theo năng lực, làm bao nhiêu hưởng bấy nhiêu (Phân phối theo lao động)",
        "Phân phối dựa trên số lượng cổ phần sở hữu",
      ],
      correctAnswer: 2,
      explanation:
        "Trong giai đoạn chủ nghĩa xã hội, nguyên tắc phân phối chủ đạo là 'Làm theo năng lực, hưởng theo lao động' (làm nhiều hưởng nhiều, làm ít hưởng ít).",
    },
    {
      question:
        "Theo chủ nghĩa Mác - Lênin, tính tất yếu khách quan của thời kỳ quá độ lên chủ nghĩa xã hội xuất phát từ lý do nào?",
      options: [
        "Do chủ nghĩa tư bản tự nguyện bàn giao chính quyền cho nhân dân",
        "Do nhu cầu chủ quan của các nhà tư tưởng muốn thay đổi xã hội",
        "Do chủ nghĩa xã hội sạch sẽ, hoàn chỉnh ra đời ngay trong lòng chủ nghĩa tư bản",
        "Do chủ nghĩa xã hội và chủ nghĩa tư bản khác nhau về bản chất, cần có thời gian cải biến cách mạng sâu sắc trên tất cả các lĩnh vực",
      ],
      correctAnswer: 3,
      explanation:
        "Chủ nghĩa xã hội không thể tự phát ra đời trong lòng chủ nghĩa tư bản mà cần một thời kỳ cải biến cách mạng sâu sắc, toàn diện từ xã hội cũ sang xã hội mới trên tất cả các lĩnh vực kinh tế, chính trị, văn hóa, xã hội.",
    },
    {
      question:
        "V.I. Lênin đã phân chia thời kỳ quá độ lên chủ nghĩa xã hội thành hai loại hình nào?",
      options: [
        "Quá độ trực tiếp và Quá độ gián tiếp",
        "Quá độ tự phát và Quá độ tự giác",
        "Quá độ hòa bình và Quá độ bạo lực",
        "Quá độ toàn diện và Quá độ cục bộ",
      ],
      correctAnswer: 0,
      explanation:
        "V.I. Lênin khẳng định có hai loại hình quá độ: quá độ trực tiếp (từ các nước tư bản chủ nghĩa phát triển cao lên CNXH) và quá độ gián tiếp (từ các nước có nền kinh tế chưa phát triển, tiền tư bản lên CNXH bỏ qua chế độ tư bản chủ nghĩa).",
    },
    {
      question:
        "Đặc điểm nổi bật về mặt kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
      options: [
        "Nền kinh tế hoàn toàn thuần nhất, chỉ có một thành phần kinh tế quốc doanh",
        "Sự tồn tại của nền kinh tế nhiều thành phần, trong đó có sự đan xen và đấu tranh giữa các thành phần kinh tế cũ và mới",
        "Sự thống trị tuyệt đối của kinh tế tư nhân tư bản chủ nghĩa",
        "Sự biến mất hoàn toàn của quan hệ hàng hóa - tiền tệ",
      ],
      correctAnswer: 1,
      explanation:
        "Đặc điểm kinh tế của thời kỳ quá độ là sự tồn tại của nền kinh tế nhiều thành phần đan xen, vừa hợp tác vừa đấu tranh với nhau, chưa có thành phần nào chiếm vị trí tuyệt đối độc tôn.",
    },
    {
      question:
        "Về mặt chính trị, thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
      options: [
        "Sự thiết lập một xã hội vô chính phủ, không cần quản lý",
        "Sự thỏa hiệp hoàn toàn của giai cấp công nhân đối với giai cấp tư sản",
        "Sự tiếp tục cuộc đấu tranh giai cấp giữa giai cấp công nhân đã giành được chính quyền với giai cấp tư sản đã bị lật đổ dưới những hình thức mới",
        "Sự biến mất ngay lập tức của mọi mâu thuẫn giai cấp",
      ],
      correctAnswer: 2,
      explanation:
        "Thực chất về mặt chính trị của thời kỳ quá độ là sự tiếp tục cuộc đấu tranh giai cấp giữa giai cấp công nhân, nhân dân lao động với giai cấp tư sản và các thế lực thù địch dưới những điều kiện và hình thức mới.",
    },
    {
      question:
        "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011) của Đảng Cộng sản Việt Nam đã xác định mô hình CNXH ở nước ta gồm mấy đặc trưng?",
      options: ["6 đặc trưng", "7 đặc trưng", "8 đặc trưng", "9 đặc trưng"],
      correctAnswer: 2,
      explanation:
        "Cương lĩnh năm 2011 (bổ sung, phát triển) đã xác định mô hình chủ nghĩa xã hội mà nhân dân ta xây dựng gồm có 8 đặc trưng cơ bản.",
    },
    {
      question:
        "Đảng Cộng sản Việt Nam xác định con đường đi lên của nước ta là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa. Việc 'bỏ qua' này được hiểu như thế nào là đúng?",
      options: [
        "Bỏ qua lực lượng sản xuất, quay về nền kinh tế tự cung tự cấp",
        "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu của nhân loại dưới chế độ tư bản",
        "Bỏ qua toàn bộ các quy luật kinh tế thị trường và hội nhập quốc tế",
        "Bỏ qua giai đoạn phát triển công nghiệp, tiến thẳng lên kinh tế tri thức",
      ],
      correctAnswer: 1,
      explanation:
        "Quá độ bỏ qua chế độ TBCN là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN; nhưng đòi hỏi phải tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ TBCN, đặc biệt là về khoa học và công nghệ, lực lượng sản xuất.",
    },
  ],
  4: [
    {
      question: "Bản chất chính trị của nền dân chủ XHCN là gì?",
      options: [
        "Sự đa nguyên chính trị",
        "Sự thống trị của giai cấp tư sản",
        "Đặt dưới sự lãnh đạo của giai cấp công nhân thông qua Đảng tiên phong",
        "Sự tự trị của từng vùng",
      ],
      correctAnswer: 2,
      explanation:
        "Bản chất chính trị của nền dân chủ XHCN là đặt dưới sự lãnh đạo của giai cấp công nhân (thông qua Đảng) để thực hiện quyền lực của nhân dân.",
    },
    {
      question: "Chức năng căn bản và quyết định nhất của Nhà nước XHCN là gì?",
      options: [
        "Trấn áp kẻ thù",
        "Tổ chức và xây dựng xã hội mới",
        "Thu thuế",
        "Đối ngoại",
      ],
      correctAnswer: 1,
      explanation:
        "Tuy có chức năng trấn áp, nhưng chức năng tổ chức, xây dựng toàn diện xã hội mới là căn bản và quyết định nhất của Nhà nước XHCN.",
    },
    {
      question:
        "Thuật ngữ 'Dân chủ' (Demokratos) ra đời sớm nhất vào khoảng thế kỷ thứ VII - VI trước Công nguyên tại quốc gia cổ đại nào?",
      options: ["Hy Lạp", "La Mã", "Ai Cập", "Ấn Độ"],
      correctAnswer: 0,
      explanation:
        "Thuật ngữ dân chủ ra đời vào khoảng thế kỷ thứ VII - VI trước Công nguyên, từ tiếng Hy Lạp cổ đại là 'Demokratos' (Demos là nhân dân, Kratos là quyền lực).",
    },
    {
      question:
        "Dưới góc độ quyền lực, chủ nghĩa Mác - Lênin xác định bản chất cốt lõi của dân chủ là gì?",
      options: [
        "Là một hình thức nhà nước của một giai cấp cụ thể",
        "Là quyền lực thuộc về nhân dân",
        "Là sự phục tùng tuyệt đối của cấp dưới đối với cấp trên",
        "Là đặc quyền của tầng lớp trí thức tinh hoa trong xã hội",
      ],
      correctAnswer: 1,
      explanation:
        "Dưới góc độ quyền lực, dân chủ là quyền lực thuộc về nhân dân, hay quyền lực của nhân dân.",
    },
    {
      question:
        "Nền dân chủ xã hội chủ nghĩa chính thức được thiết lập sau thắng lợi của cuộc cách mạng nào dưới đây?",
      options: [
        "Cách mạng tư sản Pháp (1789)",
        "Cách mạng tư sản Anh (1642)",
        "Cách mạng Tháng Mười Nga (1917)",
        "Cách mạng công nghiệp thế kỷ XIX",
      ],
      correctAnswer: 2,
      explanation:
        "Nền dân chủ xã hội chủ nghĩa chính thức được thiết lập sau thắng lợi của Cách mạng Tháng Mười Nga năm 1917, gắn liền với sự ra đời của nhà nước chuyên chính vô sản.",
    },
    {
      question:
        "Về mặt kinh tế, bản chất của nền dân chủ xã hội chủ nghĩa dựa trên cơ sở nào?",
      options: [
        "Chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
        "Chế độ công hữu về tư liệu sản xuất chủ yếu",
        "Nền kinh tế tự cung tự cấp, đóng cửa đối với bên ngoài",
        "Sự điều tiết độc quyền, áp đặt hoàn toàn từ mệnh lệnh nhà nước",
      ],
      correctAnswer: 1,
      explanation:
        "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu, nhằm đáp ứng sự phát triển ngày càng cao của lực lượng sản xuất.",
    },
    {
      question:
        "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa được thể hiện ở điểm nào dưới đây?",
      options: [
        "Là sự thống trị tuyệt đối của giai cấp tư sản đối với nhân dân lao động",
        "Là sự lãnh đạo duy nhất của giai cấp công nhân thông qua chính đảng của mình đối với toàn xã hội, thực hiện quyền lực của nhân dân",
        "Là việc xóa bỏ hoàn toàn hệ thống pháp luật và cơ quan quản lý hành chính",
        "Là sự chia đều quyền lực cho tất cả các đảng phái đối lập nhau",
      ],
      correctAnswer: 1,
      explanation:
        "Bản chất chính trị của nền dân chủ XHCN là sự lãnh đạo của giai cấp công nhân thông qua Đảng Cộng sản để thực hiện quyền lực và lợi ích của toàn thể nhân dân lao động.",
    },
    {
      question:
        "Theo chủ nghĩa Mác - Lênin, nhà nước xã hội chủ nghĩa (nhà nước chuyên chính vô sản) mang bản chất của giai cấp nào?",
      options: [
        "Giai cấp nông dân",
        "Giai cấp tư sản",
        "Giai cấp công nhân",
        "Tầng lớp trí thức",
      ],
      correctAnswer: 2,
      explanation:
        "Nhà nước xã hội chủ nghĩa mang bản chất của giai cấp công nhân - giai cấp có lợi ích căn bản thống nhất với lợi ích của nhân dân lao động.",
    },
    {
      question:
        "Vì sao V.I. Lênin gọi nhà nước xã hội chủ nghĩa là một 'nhà nước nửa nhà nước'?",
      options: [
        "Vì nó chỉ quản lý một nửa lãnh thổ quốc gia",
        "Vì nó không còn là một cơ quan áp bức giai cấp theo nghĩa nguyên bản, mà là công cụ để nhân dân lao động tổ chức xây dựng xã hội mới và sẽ tự tiêu vong khi chủ nghĩa cộng sản hoàn toàn thắng lợi",
        "Vì nó do hai giai cấp công nhân và tư sản cùng nhau nắm giữ quyền lực",
        "Vì bộ máy nhà nước vận hành lỏng lẻo, không có thực quyền chính trị",
      ],
      correctAnswer: 1,
      explanation:
        "Nhà nước XHCN không còn là nhà nước theo đúng nghĩa nguyên bản (vốn là công cụ áp bức của thiểu số đối với đa số), mà là công cụ của đại đa số nhân dân tổ chức quản lý, xây dựng xã hội và sẽ tự tiêu vong khi không còn giai cấp.",
    },
    {
      question:
        "Căn cứ vào lĩnh vực thực hiện quyền lực nhà nước, các chức năng của nhà nước xã hội chủ nghĩa được chia thành những chức năng nào?",
      options: [
        "Chức năng giai cấp và Chức năng xã hội",
        "Chức năng kinh tế, chính trị, văn hóa - xã hội",
        "Chức năng đối nội và Chức năng đối ngoại",
        "Chức năng trấn áp và Chức năng xây dựng",
      ],
      correctAnswer: 1,
      explanation:
        "Căn cứ vào lĩnh vực thực hiện quyền lực, nhà nước XHCN có chức năng kinh tế, chức năng chính trị, chức năng văn hóa - xã hội.",
    },
    {
      question:
        "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam có đặc điểm nổi bật nào dưới đây về việc tổ chức quyền lực nhà nước?",
      options: [
        "Quyền lực nhà nước được tổ chức theo nguyên tắc tam quyền phân lập tuyệt đối",
        "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp",
        "Quyền lực nhà nước tập trung toàn bộ vào các tổ chức tôn giáo",
        "Quyền lực nhà nước bị phân tán và điều hành độc lập bởi các địa phương",
      ],
      correctAnswer: 1,
      explanation:
        "Đặc điểm của Nhà nước pháp quyền XHCN Việt Nam là quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong thực hiện các quyền lập pháp, hành pháp, tư pháp.",
    },
    {
      question:
        "Đảng Cộng sản Việt Nam xác định hình thức thực hiện dân chủ ở nước ta hiện nay bao gồm những hình thức nào?",
      options: [
        "Chỉ thực hiện hình thức dân chủ trực tiếp",
        "Chỉ thực hiện hình thức dân chủ gián tiếp (đại diện)",
        "Bao gồm cả dân chủ trực tiếp và dân chủ gián tiếp (dân chủ đại diện)",
        "Chỉ thực hiện dân chủ tại các cơ quan trung ương",
      ],
      correctAnswer: 2,
      explanation:
        "Dân chủ ở Việt Nam được thực hiện qua hai hình thức cơ bản là dân chủ trực tiếp và dân chủ gián tiếp (đại diện) nhằm đảm bảo tối đa quyền làm chủ của nhân dân.",
    },
  ],
  5: [
    {
      question:
        "Sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ bị quy định bởi yếu tố nào?",
      options: [
        "Cơ cấu kinh tế nhiều thành phần",
        "Cơ cấu dân số",
        "Cơ cấu văn hóa",
        "Cơ cấu địa lý",
      ],
      correctAnswer: 0,
      explanation:
        "Sự biến đổi của cơ cấu xã hội - giai cấp luôn bị quy định bởi cơ cấu kinh tế nhiều thành phần của thời kỳ quá độ.",
    },
    {
      question: "Nội dung trọng tâm trong liên minh giai cấp, tầng lớp là gì?",
      options: ["Chính trị", "Kinh tế", "Văn hóa", "Xã hội"],
      correctAnswer: 1,
      explanation:
        "Nội dung kinh tế là trọng tâm, là cơ sở vật chất vững chắc nhất của khối liên minh công - nông - trí thức.",
    },
    {
      question:
        "Cơ cấu xã hội nào đóng vai trò vị trí trung tâm, quyết định nhất và có tác động trực tiếp đến các loại hình cơ cấu xã hội khác trong thời kỳ quá độ lên CNXH?",
      options: [
        "Cơ cấu xã hội - dân tộc",
        "Cơ cấu xã hội - giai cấp",
        "Cơ cấu xã hội - tôn giáo",
        "Cơ cấu xã hội - nghề nghiệp",
      ],
      correctAnswer: 1,
      explanation:
        "Trong hệ thống cơ cấu xã hội, cơ cấu xã hội - giai cấp giữ vị trí chiếm vị trí trung tâm, quyết định nhất vì nó liên quan trực tiếp đến quyền lực chính trị và hệ thống sản xuất của xã hội.",
    },
    {
      question:
        "Yếu tố nào quy định sự biến đổi đan xen, đa dạng và phức tạp của cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội?",
      options: [
        "Sự đồng nhất hoàn toàn về mặt tư tưởng xã hội",
        "Sự tồn tại của cơ cấu kinh tế nhiều thành phần",
        "Sự biến mất hoàn toàn của các giai cấp cũ",
        "Sự can thiệp độc quyền từ các thế lực kinh tế bên ngoài",
      ],
      correctAnswer: 1,
      explanation:
        "Cơ cấu xã hội - giai cấp biến đổi thường xuyên và do cơ cấu kinh tế quy định. Trong thời kỳ quá độ, sự tồn tại của nền kinh tế nhiều thành phần chính là nguyên nhân quy định sự đa dạng, đan xen của cơ cấu xã hội - giai cấp.",
    },
    {
      question:
        "Xu hướng biến đổi chủ đạo mang tính quy luật của cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
      options: [
        "Các giai cấp ngày càng mâu thuẫn gay gắt và xa rời nhau",
        "Xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp về địa vị kinh tế, chính trị, văn hóa",
        "Xu hướng phân cực giàu nghèo tuyệt đối không thể cứu vãn",
        "Sự hòa nhập lập tức các giai cấp thành một thể thống nhất không còn khác biệt",
      ],
      correctAnswer: 1,
      explanation:
        "Biến đổi của cơ cấu xã hội - giai cấp mang tính quy luật là xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp về mối quan hệ với tư liệu sản xuất, tính chất lao động, phân phối và đời sống tinh thần.",
    },
    {
      question:
        "Xét dưới góc độ chính trị - xã hội, nguyên tắc/nguyên lý nào của chủ nghĩa Mác - Lênin giữ vai trò quyết định cho thắng lợi của cuộc cách mạng vô sản?",
      options: [
        "Liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác",
        "Sự cô lập hoàn toàn giai cấp nông dân để tập trung sức mạnh đô thị",
        "Liên minh chiến lược giữa giai cấp công nhân và giai cấp tư sản",
        "Xóa bỏ nhanh chóng các tầng lớp trí thức để tránh đa nguyên tư tưởng",
      ],
      correctAnswer: 0,
      explanation:
        "V.I. Lênin khẳng định liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác là nguyên tắc cao nhất của chuyên chính vô sản, quyết định thắng lợi của cách mạng.",
    },
    {
      question:
        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, nội dung nào là cơ sở vật chất - kỹ thuật vững chắc và là nội dung quyết định nhất cho sự thành công của liên minh giai cấp?",
      options: [
        "Liên minh về mặt tư tưởng văn hóa",
        "Liên minh về mặt chính trị",
        "Liên minh về mặt kinh tế",
        "Liên minh về mặt quân sự quốc phòng",
      ],
      correctAnswer: 2,
      explanation:
        "Nội dung kinh tế là nội dung cốt lõi, quyết định nhất của liên minh, vì nó thỏa mãn các nhu cầu lợi ích kinh tế thiết thực của công nhân, nông dân và các tầng lớp khác, tạo cơ sở vật chất vững chắc cho liên minh.",
    },
    {
      question:
        "Nội dung chính trị của liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức trong thời kỳ quá độ lên CNXH nhằm mục tiêu gì?",
      options: [
        "Để chia đều ghế quyền lực trong quốc hội cho mọi đảng phái",
        "Để giữ vững lập trường chính trị của giai cấp công nhân, xây dựng và bảo vệ vững chắc chế độ xã hội chủ nghĩa",
        "Để kích thích tiêu dùng và trao đổi hàng hóa giữa thành thị và nông thôn",
        "Để đồng hóa các bản sắc văn hóa vùng miền thành một khối",
      ],
      correctAnswer: 1,
      explanation:
        "Nội dung chính trị của liên minh nhằm giữ vững lập trường chính trị - xã hội của giai cấp công nhân dưới sự lãnh đạo của Đảng, bảo vệ vững chắc khối đại đoàn kết và chế độ xã hội chủ nghĩa.",
    },
    {
      question:
        "Hiện nay ở Việt Nam, giai cấp nào là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước?",
      options: [
        "Giai cấp nông dân",
        "Giai cấp công nhân",
        "Tầng lớp doanh nhân",
        "Tầng lớp trí thức",
      ],
      correctAnswer: 1,
      explanation:
        "Giai cấp công nhân Việt Nam là giai cấp lãnh đạo cách mạng, đại biểu cho phương thức sản xuất tiên tiến và là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.",
    },
    {
      question:
        "Lực lượng nào ở Việt Nam hiện nay được xác định có vị trí chiến lược trong sự nghiệp phát triển nông nghiệp, xây dựng nông thôn mới?",
      options: [
        "Giai cấp công nhân",
        "Giai cấp nông dân",
        "Tầng lớp trí thức",
        "Đội ngũ doanh nhân",
      ],
      correctAnswer: 1,
      explanation:
        "Giai cấp nông dân có vị trí chiến lược trong sự nghiệp công nghiệp hóa, hiện đại hóa nông nghiệp, nông thôn, là lực lượng quan trọng thúc đẩy phát triển kinh tế - xã hội và xây dựng nông thôn mới.",
    },
    {
      question:
        "Đội ngũ nào ở nước ta hiện nay có vai trò là nguồn lực đặc biệt quan trọng, lao động sáng tạo, đóng góp trực tiếp vào việc nâng cao dân trí và phát triển nguồn nhân lực chất lượng cao?",
      options: [
        "Đội ngũ doanh nhân",
        "Giai cấp công nhân",
        "Đội ngũ trí thức",
        "Giai cấp nông dân",
      ],
      correctAnswer: 2,
      explanation:
        "Đội ngũ trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, phát triển kinh tế tri thức.",
    },
    {
      question:
        "Đội ngũ doanh nhân ở Việt Nam hiện nay có vai trò, vị trí quan trọng như thế nào trong cơ cấu xã hội - giai cấp?",
      options: [
        "Là lực lượng nòng cốt quản lý nhà nước về mặt tư pháp",
        "Là đội ngũ đóng vai trò chủ đạo trong việc giáo dục tư tưởng chính trị",
        "Là đội ngũ có vị trí, vai trò quan trọng trong việc tổ chức sản xuất, kinh doanh, giải quyết việc làm và phát triển kinh tế đất nước",
        "Là giai cấp đại diện duy nhất cho quyền lực nhà nước",
      ],
      correctAnswer: 2,
      explanation:
        "Đội ngũ doanh nhân phát triển nhanh chóng, có vai trò quan trọng trong việc huy động các nguồn lực sản xuất, kinh doanh, tạo việc làm và góp phần nâng cao năng lực cạnh tranh của nền kinh tế.",
    },
  ],
  6: [
    {
      question:
        "Cương lĩnh dân tộc của V.I. Lênin KHÔNG bao gồm nguyên tắc nào?",
      options: [
        "Các dân tộc hoàn toàn bình đẳng",
        "Các dân tộc được quyền tự quyết",
        "Liên hiệp công nhân tất cả các dân tộc",
        "Tự do ly khai lập quốc bằng mọi giá",
      ],
      correctAnswer: 3,
      explanation:
        "Cương lĩnh gồm 3 nguyên tắc: Bình đẳng, tự quyết, và liên hiệp công nhân. Quyền tự quyết không đồng nghĩa với khuyến khích chia cắt mọi điều kiện.",
    },
    {
      question:
        "Nguyên nhân tồn tại của tôn giáo trong thời kỳ quá độ KHÔNG bao gồm:",
      options: [
        "Nguyên nhân nhận thức",
        "Nguyên nhân kinh tế",
        "Nguyên nhân tâm lý",
        "Sự ép buộc của nhà nước",
      ],
      correctAnswer: 3,
      explanation:
        "Tôn giáo tồn tại do nguyên nhân nhận thức, kinh tế, tâm lý, chính trị-xã hội, văn hóa, hoàn toàn không do sự ép buộc của nhà nước.",
    },
    {
      question:
        "Theo chủ nghĩa Mác - Lênin, hình thức cộng đồng người nào dưới đây là hình thức phát triển cao nhất, gắn liền với sự ra đời của chủ nghĩa tư bản?",
      options: ["Bộ lạc", "Bộ tộc", "Thị tộc", "Dân tộc"],
      correctAnswer: 3,
      explanation:
        "Dân tộc (Nation) là hình thức cộng đồng người phát triển cao nhất, hình thành muộn hơn so với thị tộc, bộ lạc, bộ tộc và sự xuất hiện của nó gắn liền với sự phát triển của phương thức sản xuất tư bản chủ nghĩa.",
    },
    {
      question:
        "Trong 'Cương lĩnh dân tộc' của chủ nghĩa Mác - Lênin, nội dung nào được xem là cơ sở để thực hiện quyền tự quyết và quyền bình đẳng giữa các dân tộc?",
      options: [
        "Các dân tộc hoàn toàn độc lập biệt lập",
        "Liên hiệp công nhân tất cả các dân tộc",
        "Các dân tộc tự do đồng hóa lẫn nhau",
        "Sự can thiệp của các cường quốc lớn",
      ],
      correctAnswer: 1,
      explanation:
        "Cương lĩnh dân tộc gồm 3 nội dung: Các dân tộc hoàn toàn bình đẳng; các dân tộc được quyền tự quyết; liên hiệp công nhân tất cả các dân tộc. Trong đó, liên hiệp công nhân là nội dung cốt lõi, tạo nên sức mạnh giai cấp để thực hiện thắng lợi quyền bình đẳng và tự quyết.",
    },
    {
      question:
        "Quyền tự quyết của dân tộc theo quan điểm của chủ nghĩa Mác - Lênin được hiểu như thế nào là đúng?",
      options: [
        "Là quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp với dân tộc khác trên cơ sở bình đẳng",
        "Là quyền các dân tộc lớn có thể can thiệp vào công việc nội bộ của dân tộc nhỏ",
        "Là quyền tự do ly khai vô điều kiện nhằm phá hoại khối đại đoàn kết quốc gia",
        "Là quyền ưu tiên phát triển văn hóa của dân tộc đa số",
      ],
      correctAnswer: 0,
      explanation:
        "Quyền tự quyết của dân tộc là quyền tự lựa chọn chế độ chính trị, con đường phát triển, bao gồm quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp với các dân tộc khác trên cơ sở bình đẳng.",
    },
    {
      question:
        "Đặc điểm nổi bật nhất của quan hệ dân tộc ở Việt Nam hiện nay là gì?",
      options: [
        "Các dân tộc cư trú tập trung riêng biệt theo từng tỉnh",
        "Có sự chênh lệch tuyệt đối không thể san lấp về văn hóa",
        "Các dân tộc có dân số bằng nhau",
        "Có tính đan xen, đa dạng và có truyền thống đoàn kết, hòa hợp lâu đời",
      ],
      correctAnswer: 3,
      explanation:
        "Việt Nam là quốc gia đa dân tộc với đặc điểm nổi bật là các dân tộc cư trú đan xen, không có lãnh thổ riêng biệt hoàn toàn, và có truyền thống đoàn kết, hòa hợp cùng nhau chống giặc ngoại xâm và xây dựng đất nước.",
    },
    {
      question:
        "Dưới góc độ bản chất, chủ nghĩa Mác - Lênin xem xét tôn giáo là gì?",
      options: [
        "Là một hiện tượng xã hội phản ánh chân thực và chính xác thế giới khách quan",
        "Là một hiện tượng xã hội - văn hóa do con người sáng tạo ra, phản ánh hư ảo, hoang đường hiện thực khách quan vào đầu óc con người",
        "Là một tổ chức chính trị thuần túy quản lý nhà nước",
        "Là bản tính tự nhiên sinh học có sẵn của con người từ khi sinh ra",
      ],
      correctAnswer: 1,
      explanation:
        "Về mặt bản chất, tôn giáo là một hiện tượng xã hội - văn hóa do con người sáng tạo ra. Tôn giáo phản ánh một cách hoang đường, hư ảo hiện thực khách quan vào đầu óc của con người, biến sức mạnh tự nhiên và xã hội thành sức mạnh siêu nhiên.",
    },
    {
      question:
        "Nguồn gốc nào dưới đây dẫn đến sự ra đời và tồn tại của tôn giáo liên quan đến sự yếu kém của con người trước các sức mạnh tự nhiên và xã hội?",
      options: [
        "Nguồn gốc tâm lý",
        "Nguồn gốc nhận thức",
        "Nguồn gốc kinh tế - xã hội",
        "Nguồn gốc sinh học",
      ],
      correctAnswer: 2,
      explanation:
        "Nguồn gốc kinh tế - xã hội của tôn giáo bao gồm sự bất lực của con người trước các lực lượng tự nhiên (thiên tai, bão lụt...) và lực lượng xã hội (áp bức giai cấp, khủng hoảng...) khi trình độ lực lượng sản xuất chưa phát triển.",
    },
    {
      question:
        "Sự giới hạn trong nhận thức của con người đối với những hiện tượng tự nhiên, xã hội mới mẻ hoặc chưa giải thích được là biểu hiện của nguồn gốc nào của tôn giáo?",
      options: [
        "Nguồn gốc nhận thức",
        "Nguồn gốc tâm lý",
        "Nguồn gốc kinh tế",
        "Nguồn gốc chính trị",
      ],
      correctAnswer: 0,
      explanation:
        "Khi trình độ nhận thức của con người có những giới hạn nhất định, trước những hiện tượng tự nhiên, xã hội chưa thể giải thích được một cách khoa học, con người dễ tìm đến và gán cho nó những yếu tố thần bí, siêu nhiên.",
    },
    {
      question:
        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, vì sao tôn giáo vẫn tiếp tục tồn tại vững chắc và chưa thể mất đi ngay?",
      options: [
        "Vì nhà nước xã hội chủ nghĩa khuyến khích phát triển mạnh các yếu tố mê tín",
        "Vì các nguồn gốc về kinh tế, nhận thức, tâm lý, văn hóa và chính trị của tôn giáo vẫn còn tồn tại",
        "Vì tôn giáo đã thay thế hoàn toàn vai trò của khoa học hiện đại",
        "Vì tâm lý con người thay đổi nhanh hơn sự thay đổi của tồn tại xã hội",
      ],
      correctAnswer: 1,
      explanation:
        "Trong thời kỳ quá độ, tôn giáo vẫn tồn tại vì các nguyên nhân/nguồn gốc kinh tế, nhận thức, tâm lý, văn hóa và chính trị chưa bị triệt tiêu hoàn toàn. Sự biến đổi của tâm lý, ý thức tôn giáo cũng thường lạc hậu hơn sự biến đổi của kinh tế - xã hội.",
    },
    {
      question:
        "Một trong những nguyên tắc cốt lõi của chủ nghĩa Mác - Lênin trong việc giải quyết vấn đề tôn giáo là gì?",
      options: [
        "Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân",
        "Dùng biện pháp hành chính để xóa bỏ ngay lập tức mọi cơ sở tôn giáo",
        "Ưu tiên phong chức và trao quyền lực chính trị cho các chức sắc tôn giáo",
        "Cấm đoán hoàn toàn các hoạt động sinh hoạt văn hóa có yếu tố tâm linh",
      ],
      correctAnswer: 0,
      explanation:
        "Nguyên tắc hàng đầu là tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân, bao gồm quyền theo hoặc không theo một tôn giáo nào, quyền bình đẳng giữa các tôn giáo trước pháp luật.",
    },
    {
      question:
        "Đảng và Nhà nước Việt Nam luôn khẳng định công tác tôn giáo thực chất là nội dung nào dưới đây?",
      options: [
        "Là công tác đối ngoại quốc tế thuần túy",
        "Là công tác vận động quần chúng nhân dân",
        "Là công tác phát triển kinh tế vùng sâu vùng xa",
        "Là công tác bài trừ hoàn toàn văn hóa truyền thống",
      ],
      correctAnswer: 1,
      explanation:
        "Chính sách của Đảng và Nhà nước Việt Nam xác định: Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng (đoàn kết đồng bào có đạo và không có đạo nhằm xây dựng và bảo vệ Tổ quốc).",
    },
  ],
  7: [
    {
      question: "Đâu là chức năng cơ bản, đặc thù nhất của gia đình?",
      options: [
        "Tái sản xuất ra con người",
        "Tổ chức tiêu dùng",
        "Thỏa mãn nhu cầu tâm lý",
        "Tham gia lao động sản xuất",
      ],
      correctAnswer: 0,
      explanation:
        "Tái sản xuất ra con người là chức năng đặc thù nhất, đảm bảo sự duy trì và phát triển nòi giống của xã hội loài người.",
    },
    {
      question:
        "Xu hướng biến đổi quy mô gia đình Việt Nam hiện nay chủ yếu là gì?",
      options: [
        "Chuyển từ gia đình hạt nhân sang gia đình đa thế hệ",
        "Quy mô gia đình ngày càng thu nhỏ lại",
        "Quy mô gia đình giữ nguyên không đổi",
        "Mở rộng không giới hạn",
      ],
      correctAnswer: 1,
      explanation:
        "Gia đình Việt Nam hiện nay có xu hướng quy mô thu nhỏ lại, chuyển chủ yếu sang mô hình gia đình hạt nhân (chỉ gồm cha mẹ và con cái).",
    },
    {
      question:
        "Theo quan điểm của chủ nghĩa Mác - Lênin, hình thức cộng đồng người đặc biệt nào được hình thành trên cơ sở quan hệ hôn nhân và quan hệ huyết thống?",
      options: ["Gia đình", "Giai cấp", "Dân tộc", "Bộ tộc"],
      correctAnswer: 0,
      explanation:
        "Gia đình là một cộng đồng người đặc biệt, được hình thành trên cơ sở quan hệ hôn nhân và quan hệ huyết thống, cùng với những quy định về quyền lợi và nghĩa vụ giữa các thành viên.",
    },
    {
      question:
        "Trong các mối quan hệ cơ bản của gia đình, quan hệ nào được xem là cơ sở, nền tảng hình thành nên các mối quan hệ khác?",
      options: [
        "Quan hệ huyết thống",
        "Quan hệ hôn nhân (vợ - chồng)",
        "Quan hệ nuôi dưỡng, đỡ đầu",
        "Quan hệ họ hàng dòng tộc",
      ],
      correctAnswer: 1,
      explanation:
        "Quan hệ hôn nhân (vợ - chồng) là cơ sở, nền tảng hình thành nên gia đình. Từ quan hệ hôn nhân mới nảy sinh quan hệ huyết thống và các mối quan hệ khác.",
    },
    {
      question:
        "Chức năng nào được coi là chức năng tự nhiên, đặc thù riêng có của gia đình mà các cộng đồng xã hội khác không thể thay thế được?",
      options: [
        "Chức năng nuôi dưỡng, giáo dục",
        "Chức năng tái sản xuất ra con người",
        "Chức năng kinh tế và tổ chức tiêu dùng",
        "Chức năng thỏa mãn nhu cầu tâm sinh lý",
      ],
      correctAnswer: 1,
      explanation:
        "Tái sản xuất ra con người là chức năng đặc thù của gia đình, không chỉ đáp ứng nhu cầu tự nhiên, duy trì nòi giống mà còn cung cấp sức lao động cho xã hội.",
    },
    {
      question:
        "Chức năng nào của gia đình có ảnh hưởng lâu dài và toàn diện đến sự hình thành nhân cách, đạo đức, lối sống của mỗi cá nhân từ thuở nhỏ cho đến khi trưởng thành?",
      options: [
        "Chức năng kinh tế",
        "Chức năng nuôi dưỡng, giáo dục (xã hội hóa)",
        "Chức năng tái sản xuất ra con người",
        "Chức năng thỏa mãn nhu cầu tâm sinh lý",
      ],
      correctAnswer: 1,
      explanation:
        "Chức năng nuôi dưỡng, giáo dục thể hiện tình cảm thiêng liêng, trách nhiệm của cha mẹ với con cái và đóng vai trò quan trọng trong việc xã hội hóa, hình thành nhân cách thế hệ trẻ.",
    },
    {
      question:
        "Cơ sở chính trị - xã hội để xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
      options: [
        "Việc thiết lập chế độ công hữu về tư liệu sản xuất chủ yếu",
        "Sự phát triển mạnh mẽ của khoa học - kỹ thuật hiện đại",
        "Thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động (Nhà nước XHCN)",
        "Sự giải phóng hoàn toàn tư tưởng của các nhà hiền triết cổ đại",
      ],
      correctAnswer: 2,
      explanation:
        "Cơ sở chính trị để xây dựng gia đình trong thời kỳ quá độ là việc thiết lập nhà nước xã hội chủ nghĩa, thể hiện quyền lực của nhân dân, thông qua hệ thống pháp luật bảo vệ và phát triển gia đình.",
    },
    {
      question:
        "Cơ sở kinh tế - xã hội cốt lõi nhất để xóa bỏ chế độ áp bức, bất bình đẳng trong gia đình và xã hội tư sản là gì?",
      options: [
        "Xóa bỏ chế độ tư hữu, thiết lập chế độ công hữu về tư liệu sản xuất chủ yếu",
        "Tăng thuế thu nhập đối với các tập đoàn kinh tế tư nhân lớn",
        "Hỗ trợ tiền mặt trực tiếp cho tất cả phụ nữ không có việc làm",
        "Duy trì mô hình kinh tế thị trường tự do tuyệt đối",
      ],
      correctAnswer: 0,
      explanation:
        "Cơ sở kinh tế để xây dựng gia đình mới là việc xóa bỏ chế độ tư hữu tư bản chủ nghĩa - nguồn gốc của sự áp bức, bất bình đẳng; thay vào đó là xác lập chế độ công hữu về tư liệu sản xuất chủ yếu.",
    },
    {
      question:
        "Một trong những nội dung cốt lõi của chế độ hôn nhân tiến bộ trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
      options: [
        "Hôn nhân dựa trên sự môn đăng hộ đối về tài sản",
        "Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng",
        "Hôn nhân đa thê để tăng nhanh quy mô dân số",
        "Hôn nhân do cha mẹ áp đặt hoàn toàn bằng hợp đồng kinh tế",
      ],
      correctAnswer: 1,
      explanation:
        "Hôn nhân tiến bộ trong chủ nghĩa xã hội bao gồm các nguyên tắc: Hôn nhân tự nguyện (dựa trên tình yêu chân chính); Hôn nhân một vợ một chồng, vợ chồng bình đẳng; Hôn nhân được đảm bảo về pháp lý.",
    },
    {
      question:
        "Xu hướng biến đổi nổi bật về quy mô và cấu trúc của gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội hiện nay là gì?",
      options: [
        "Gia đình truyền thống nhiều thế hệ (đại gia đình) ngày càng tăng lên",
        "Gia đình có xu hướng thu nhỏ quy mô, gia đình hạt nhân (2 thế hệ) trở nên phổ biến",
        "Gia đình Việt Nam hoàn toàn tan rã, nhường chỗ cho lối sống độc thân tuyệt đối",
        "Quy mô số thành viên trong một gia đình ngày càng mở rộng và không kiểm soát",
      ],
      correctAnswer: 1,
      explanation:
        "Xu hướng biến đổi hiện nay là gia đình đơn (gia đình hạt nhân) gồm hai thế hệ (vợ chồng và con cái) ngày càng phổ biến, quy mô gia đình thu nhỏ lại để linh hoạt thích ứng với đời sống công nghiệp hiện đại.",
    },
    {
      question:
        "Sự biến đổi của chức năng kinh tế và tổ chức tiêu dùng của gia đình Việt Nam hiện nay thể hiện ở điểm nào?",
      options: [
        "Gia đình không còn là một đơn vị tiêu dùng hàng hóa nữa",
        "Từ kinh tế tự cấp tự túc chuyển sang kinh tế hàng hóa, gia đình trở thành một đơn vị sản xuất, kinh doanh và tiêu dùng chủ động",
        "Nhà nước bao cấp toàn bộ các nhu cầu vật chất, gia đình không cần làm kinh tế",
        "Gia đình chỉ giữ vai trò sản xuất, hoàn toàn không có quyền quyết định tiêu dùng",
      ],
      correctAnswer: 1,
      explanation:
        "Trong nền kinh tế thị trường định hướng XHCN, gia đình không còn thuần túy là đơn vị tiêu dùng tự cấp tự túc mà đã biến đổi mạnh mẽ thành một thực thể kinh tế chủ động tham gia vào sản xuất, kinh doanh hàng hóa và dịch vụ.",
    },
    {
      question:
        "Yếu tố nào đóng vai trò là 'tế bào của xã hội', là tổ ấm nuôi dưỡng và giáo dục con người, góp phần duy trì và phát triển bền vững đất nước?",
      options: ["Nhà trường", "Gia đình", "Doanh nghiệp", "Đảng phái"],
      correctAnswer: 1,
      explanation:
        "Gia đình có vai trò quyết định đối với sự tồn tại và phát triển của xã hội, được mệnh danh là 'tế bào của xã hội'. Xã hội chỉ phát triển lành mạnh khi từng gia đình (tế bào) ổn định và hạnh phúc.",
    },
  ],
};

const chapterTitles = [
  "Chương 1: Nhập môn CNXHKH",
  "Chương 2: Sứ mệnh GCCN",
  "Chương 3: Thời kỳ quá độ",
  "Chương 4: Dân chủ & Nhà nước",
  "Chương 5: Cơ cấu xã hội",
  "Chương 6: Dân tộc & Tôn giáo",
  "Chương 7: Vấn đề Gia đình",
];

export function QuizModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
        <p className="text-slate-600">
          Lựa chọn một chuyên đề để bắt đầu kiểm tra kiến thức của bạn.
        </p>
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
              <p className="text-sm text-slate-500">
                {quizData[idx + 1]?.length || 0} câu hỏi
              </p>
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
          <h3 className="text-3xl font-bold text-slate-900 mb-3">
            Hoàn thành!
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Chương {selectedChapter}: Bạn trả lời đúng{" "}
            <span className="font-bold text-primary text-xl mx-1">
              {score}/{questions.length}
            </span>{" "}
            câu.
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
              Chương {selectedChapter} - Câu {currentQuestion + 1} /{" "}
              {questions.length}
            </span>
          </div>
          <span className="text-sm font-medium text-slate-500 mr-[50px]">
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
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
              >
                <span className="font-medium text-base md:text-lg">
                  {option}
                </span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 ml-4" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 ml-4" />
                )}
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
            <div
              className={`p-4 rounded-xl ${selectedOption === questions[currentQuestion].correctAnswer ? "bg-green-100 text-green-800" : "bg-amber-50 text-amber-800"} border ${selectedOption === questions[currentQuestion].correctAnswer ? "border-green-200" : "border-amber-200"}`}
            >
              <p className="font-bold mb-2 uppercase tracking-wide text-xs">
                {selectedOption === questions[currentQuestion].correctAnswer
                  ? "Chính xác!"
                  : "Giải thích học thuật:"}
              </p>
              <p className="text-sm font-medium leading-relaxed">
                {questions[currentQuestion].explanation}
              </p>
            </div>

            <button
              onClick={handleNextQuestion}
              className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {currentQuestion < questions.length - 1
                ? "Câu tiếp theo"
                : "Xem kết quả chương"}
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

          {selectedChapter === null
            ? renderChapterSelection()
            : renderQuizContent()}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
