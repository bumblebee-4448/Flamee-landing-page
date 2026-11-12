# Flamee — Thiết kế v2, chờ duyệt

## Phản hồi dẫn đến bản sửa

Người dùng không duyệt thiết kế v1. Ảnh trong public là công cụ hỗ trợ quảng cáo ứng dụng; không lấy chúng làm trung tâm của toàn bộ thiết kế. V1 không còn là thiết kế để triển khai.

V2 giữ tinh thần lưu chuyện của hai người, chuyển cách thể hiện sang landing page đời sống hiện đại. Bỏ hình trang giấy/lời mời, góc lõm và chữ condensed in hoa. Đây là đề xuất thiết kế mới, chưa được người dùng duyệt và chưa có mã sản phẩm.

## Hướng thị giác

Taste frontend v2: split-stage, seed 320732308, lưu tại `.taste-skill/v2/direction.json`. Chọn hướng này trong ba hướng được rút vì có thể đặt con người ở một phía và thông điệp sản phẩm ở phía còn lại. Thay đổi khỏi page-is-the-object vì phản hồi trực tiếp của người dùng.

Giữ palette từ docs. Dùng Public Sans xuyên suốt, bỏ Big Shoulders. Đây là quyết định mới của người thiết kế, không phải một yêu cầu font từ người dùng. Bảng rút giữ type để không tự đưa lại một bộ chữ condensed tương tự v1.

- Nền kem `#EEECEA` và trắng ấm `#FFFCF8`; chữ nâu `#302924`; chữ phụ `#70655D`.
- Coral `#FF7158` dành cho hành động chính; chữ nâu trên nút coral. Kiểm tra tương phản thực tế trước triển khai, không dùng coral cho đoạn chữ nhỏ mặc định.
- Cỡ hero khoảng 64–80px desktop, 40–44px mobile, hai dòng; body 16–19px. Khoảng thở thoải mái, không chữ in hoa đậm đặc.
- Layout lề đối xứng 20–32px. Có thể inset nội dung bên trong hai nửa hero, nhưng toàn trang dùng cùng hệ lề.
- Ảnh đời sống làm chất liệu kể chuyện. Ảnh app minh họa chọn lọc trong một mục; không lặp lại ở hero, FAQ và CTA.
- Không texture giấy, khung thiệp, shadow, gradient của landing page, badge, sticker hoặc grid feature cards.

## Hai mockup để duyệt hướng mới

1. `hero.png`: mở đầu với cặp đôi cùng chuẩn bị bữa sáng; headline **Gần nhau / từ điều nhỏ.** Nội dung nói rõ Flamee là app cho cặp đôi, giúp kết nối và lưu kỷ niệm. Nút **Khám phá Flamee** và liên kết **Xem cách kết nối**. Hero không có screenshot.
2. `memories-section.png`: mục **Kỷ niệm có chỗ để về.** Ảnh một khoảnh khắc cùng nhau và chi tiết bàn cà phê dẫn chuyện; một crop lịch app nhỏ bên cạnh phần giải thích chức năng làm bằng chứng sản phẩm.

Hai ảnh được tạo bằng imagegen tích hợp để xem bố cục và cảm giác. Ảnh đôi nam nữ là hình đời sống minh họa, không gắn tên hay lời chứng thực khách hàng. Khi triển khai, dùng ảnh app gốc từ public thay phần giao diện mà mô hình vẽ lại; màu, font, độ tương phản và góc nút được thực hiện theo spec thay vì sao chép sai lệch từ mockup.

## Mạch toàn trang đề xuất

### Hero: Gần nhau từ điều nhỏ.

Ảnh đời sống chiếm khoảng nửa vùng mở đầu. Bên còn lại là headline, một lời giải thích app, CTA khám phá. Ở desktop ảnh có thể giữ vị trí trong phần mở đầu và lời dẫn ngắn tiếp theo; không ghim ảnh suốt cả trang.

Copy: “Flamee là ứng dụng dành cho cặp đôi, giúp kết nối với người yêu và lưu lại những kỷ niệm của hai bạn.”

### Lợi ích: Ngày thường, thành kỷ niệm.

Lời dẫn ngắn: “Một bữa sáng cùng nhau. Một buổi hẹn bất chợt. Những điều nhỏ cũng đáng để giữ lại.” Đặt trên vùng kem đổi nhịp dưới hero, không kéo thành một màn hình gần trống.

### Sản phẩm: Kỷ niệm có chỗ để về.

Ảnh đời sống và giải thích cách lưu ảnh, nội dung, xem lại theo timeline/lịch. Một crop lịch hỗ trợ. Khi người xem chủ động chọn **Khám phá giao diện**, có thể mở phần xem trước ảnh rõ hơn bằng dialog; không ép ảnh nhỏ thành ảnh lớn ở mọi section.

Tương tác duy nhất đề xuất: chọn một khoảnh khắc **Bữa sáng / Buổi hẹn / Chuyến đi** để đổi ảnh và câu chuyện minh họa trong section này. Nội dung là gợi ý kể chuyện, không giả lập lưu kỷ niệm thật. Có ảnh mặc định khi không có JS.

### Cách bắt đầu: Một lời mời, hai người.

Ba dòng nội dung theo thứ tự trên một vùng nền đầy đủ chiều rộng: tạo tài khoản email; tạo và gửi mã mời; người còn lại nhập mã và chấp nhận. Trình bày bằng chữ và bố cục, không cần thêm screenshot trạng thái tài khoản. Không tạo mã mời hoạt động giả.

### FAQ và trạng thái sản phẩm

Các câu hỏi tập trung vào đối tượng, ghép đôi, lưu ảnh/nội dung, check-in và Tiny Mission. Cảm xúc ghi rõ đang hoàn thiện; Tiny Mission ghi rõ bản xem trước, chưa đổi quà thật. Không tạo một màn hình marketing lớn dành cho mỗi chức năng chưa hoàn thiện.

### CTA và footer

Một mảng nền nâu đậm, câu **Chuyện mình còn dài.**, lời mời khám phá Flamee và nút trở lại mục sản phẩm. Wordmark nhỏ cùng ba anchor nội trang tạo kết thúc gọn. Chưa có link store nên không dùng nút tải app hoặc badges App Store/Google Play giả. Chưa có backend nên không tạo form nhận đăng ký giả.

## Mobile đề xuất

Nav một hàng với wordmark và hành động. Hero xếp thông điệp, nút rồi ảnh; headline và mô tả xuất hiện ngay trong màn hình đầu. Ảnh lifestyle crop lại theo chiều dọc. Section sản phẩm xếp ảnh, copy và crop app theo thứ tự đọc; phần app không cao hơn vùng kể chuyện. Nút chạm ít nhất 44px, nội dung 16px trở lên, không tràn ngang.

Chưa tạo mockup mobile v2; sẽ dựng chi tiết sau khi người dùng xác nhận hướng thị giác mới này. Không tái sử dụng mockup mobile v1.

## Điều chỉnh so với blueprint máy rút

Hero menu/photo được chuyển từ thông tin địa chỉ/giờ mở cửa sang mô tả app và CTA. Không thêm dữ liệu địa điểm không tồn tại. Người dùng yêu cầu ảnh app chỉ hỗ trợ nên không tuân theo khuyến nghị chung của skill về chiếm diện tích lớn bằng UI có sẵn. Public Sans được giữ làm một family duy nhất từ bộ chữ trước. Các blueprint của toàn trang chưa phải bản triển khai: thay pinned-fragment nhiều trạng thái bằng lời giải thích luồng ghép đôi vì không có ảnh/API cho demo tương tác thật.

## Trạng thái kiểm tra

Đã xem hai ảnh mockup, đọc lại feedback và giới hạn tính năng trong docs. Chưa chạy lint, inspector, responsive browser tests hoặc chấm điểm website vì chưa có website được triển khai. Thiết kế chi tiết mobile và các phần sau vẫn chờ duyệt hướng mới; không tuyên bố v2 đã hoàn thiện toàn bộ thiết kế.
