# Flamee — Ý tưởng landing page đã duyệt

## Phạm vi hiện tại

Chỉ đề xuất ý tưởng. Người dùng duyệt ý tưởng trước khi thiết kế, duyệt thiết kế trước khi triển khai. Chưa chọn stack, chưa viết mã sản phẩm.

## Cơ sở từ dự án

- Tên Flamee và hình tượng ngọn lửa trong điều hướng mobile.
- Sản phẩm dành cho hai người đã có mối quan hệ.
- Ghép đôi bằng mã mời.
- Dòng thời gian kỷ niệm có nội dung và ảnh.
- Xem lại kỷ niệm theo lịch tháng.
- Thumbnail ảnh gắn với ngày và đường kết nối trong giao diện lịch.
- Check-in cảm xúc có lựa chọn phạm vi chia sẻ, nhưng API chưa tích hợp đầy đủ.
- Tiny Mission và đổi quà mới là giao diện xem trước.
- Nền kem, trắng ấm, chữ nâu, coral và cam đào theo QUY_DINH_MAU_SAC.md.
- Có ảnh giao diện trong public, chưa có liên kết cửa hàng ứng dụng hoặc giá được xác nhận.

## Người đọc và mục tiêu đề xuất

Người đọc là các cặp đôi muốn giữ lại những khoảnh khắc đời thường. Sau màn đầu, họ hiểu Flamee giúp kết nối với người yêu và lưu kỷ niệm của hai người. Trong bản thiết kế đầu, hành động chính đề xuất là xem trước ứng dụng; chỉ dùng CTA tải ứng dụng khi có đích tải được xác nhận.

## Các hướng được taste skill v2 đề xuất

Lệnh draw.mjs: consumer-app, warm, product-ui, giữ palette; các vai trò showcase, how-it-works, features, faq, cta, footer.

- page-is-the-object: trang mang hình thức một vật thể có ý nghĩa với sản phẩm.
- split-stage: một bên giữ hình sản phẩm, một bên cuộn nội dung.
- one-motif: một hình từ sản phẩm trở thành hệ thống thị giác.

## Đề xuất chính — Cuốn nhật ký của hai đứa

Áp dụng page-is-the-object. Trên trang này, lịch kỷ niệm của Flamee trở thành các trang của một cuốn nhật ký chung. Ảnh giao diện thực tế là bằng chứng sản phẩm, ngày và kỷ niệm tạo mạch kể chuyện. Tránh trang trí scrapbook tùy tiện và tránh biến giao diện thành một lưới thẻ tính năng.

Headline đề xuất: “Chuyện mình, giữ ở đây.”

Mô tả: “Flamee là ứng dụng dành cho cặp đôi, giúp kết nối với người yêu và lưu lại những kỷ niệm của hai bạn.”

Tương tác đề xuất: chọn Dòng thời gian / Lịch kỷ niệm để đổi ảnh xem trước bằng các ảnh có sẵn. Không mô phỏng lưu dữ liệu hoặc ghép đôi thật.

## Mạch nội dung và bằng chứng

1. Có một nơi lưu chuyện của hai người → ảnh giao diện kỷ niệm lớn ở phần mở đầu.
2. Khoảnh khắc nhỏ có thể được tìm lại → xem trước dòng thời gian và lịch, chuyển qua lại được.
3. Hai người bắt đầu bằng một lời mời → mô tả đăng ký email, tạo mã mời, người còn lại tham gia bằng mã; không suy diễn từ ảnh trạng thái đã kết nối thành màn nhập mã.
4. Sản phẩm đang được mở rộng → tách riêng mục cảm xúc và Tiny Mission với trạng thái đang hoàn thiện / xem trước, có thể rút gọn nếu làm loãng thông điệp.
5. Người đọc biết cách bắt đầu và tính năng nào khả dụng → FAQ ngắn và CTA theo đích thực tế.

Không thêm bảng giá, số người dùng, đánh giá hoặc logo đối tác khi chưa có dữ liệu.

## Hai hướng còn lại

- split-stage / “Một bên là bạn, một bên là mình”: nhấn mạnh cặp đôi bằng bố cục chia đôi và ảnh app cố định; rõ sản phẩm nhưng kém cảm giác lưu giữ kỷ niệm, cần chuyển bố cục trên mobile.
- one-motif / “Giữ lửa từ điều nhỏ”: lấy ngọn lửa Flamee làm hình chủ đạo; nhận diện mạnh nhưng cần tiết chế để nội dung và giao diện app vẫn là trọng tâm.

## Trạng thái

Người dùng đã duyệt ý tưởng “Cuốn nhật ký của hai đứa”, nhưng không duyệt cách thể hiện của thiết kế v1. Yêu cầu mới: ảnh public chỉ hỗ trợ thiết kế quảng cáo app, không lạm dụng. Đề xuất thiết kế sửa đổi tại `docs/design/v2/DESIGN.md`, chờ duyệt; chưa cho phép triển khai sản phẩm.
