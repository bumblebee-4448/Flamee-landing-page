export interface MemoryMoment {
  id: string
  date: string
  title: string
  caption: string
  story: string
  image: string
  alt: string
}

export const memoryMoments: MemoryMoment[] = [
  { id: 'first-date', date: '2024-08-18', title: 'Lần đầu hẹn nhau', caption: 'Một buổi cà phê tưởng bình thường, mà mở đầu cho rất nhiều điều.', story: 'Hôm ấy mình đến sớm một chút, chọn chiếc bàn cạnh cửa sổ. Hai ly cà phê nguội dần, còn câu chuyện thì mãi chưa hết. Có những khởi đầu nhẹ đến mức chỉ khi nhìn lại, mình mới biết đã đáng nhớ đến thế nào.', image: '/memories/first-date.webp', alt: 'Hai người cười ngại ngùng trong buổi hẹn cà phê đầu tiên' },
  { id: 'first-christmas', date: '2024-12-24', title: 'Mùa lễ đầu tiên', caption: 'Phố lên đèn. Mình có thêm một người để cùng về.', story: 'Không có kế hoạch cầu kỳ, chỉ rủ nhau đi dạo khi phố vừa lên đèn. Mình kể những điều muốn làm trong năm tới, rồi nhận ra điều vui nhất là có người muốn cùng mình làm những điều đó.', image: '/memories/first-christmas.webp', alt: 'Cặp đôi đi dạo dưới ánh đèn ấm áp trong mùa lễ đầu tiên' },
  { id: 'flowers', date: '2025-03-08', title: 'Một ngày dành cho nhau', caption: 'Một bó hoa nhỏ, một nụ cười giữ được thật lâu.', story: 'Bó hoa không lớn, cũng chẳng cần một lời nói thật hay. Điều làm mình vui là biết người ấy đã nghĩ đến mình trong một ngày bận rộn. Có những sự quan tâm rất nhỏ, mà nhớ rất lâu.', image: '/memories/flowers.webp', alt: 'Người ấy trao một bó hoa nhỏ trong khoảng sân đầy nắng' },
  { id: 'seaside', date: '2025-07-12', title: 'Một chiều đi trốn', caption: 'Nghe sóng một lúc, rồi kể nhau nghe thật nhiều dự định.', story: 'Mình cùng nhau ra biển, ngồi thật lâu mà chẳng cần làm gì vội. Có lúc chỉ nghe sóng, có lúc lại kể về những nơi muốn đến. Một buổi chiều không có kế hoạch, nhưng có nhau.', image: '/memories/seaside.webp', alt: 'Hai người ngồi bên biển, nhìn nhau trong ánh hoàng hôn' },
  { id: 'dinner', date: '2026-02-14', title: 'Bữa tối không vội', caption: 'Không cần một dịp thật lớn để dành thời gian cho nhau.', story: 'Mình cất điện thoại, gọi những món quen và hỏi nhau hôm nay thế nào. Giữa rất nhiều lịch hẹn và việc phải làm, vẫn muốn để dành một khoảng không vội cho hai người.', image: '/memories/dinner.webp', alt: 'Cặp đôi trò chuyện trong bữa tối ấm áp cạnh cửa sổ' },
  { id: 'still-us', date: '2026-10-12', title: 'Vẫn chọn bên nhau', caption: 'Giữa những bận rộn, mình vẫn luôn chọn ở bên nhau.', story: 'Một đoạn đường quen, một câu chuyện kể dở, một bàn tay vẫn nắm. Không phải ngày nào cũng có điều đặc biệt. Nhưng những ngày bình thường được đi cùng nhau, tự chúng đã là một điều đáng giữ.', image: '/memories/still-us.webp', alt: 'Hai người đi cạnh nhau trên con đường rợp cây xanh' },
]

export const memoryDate = (date: string) => date.split('-').reverse().join('.')
