# Tính năng hiện có — Flamee Mobile

## Khởi động và tài khoản

- **Đăng ký / đăng nhập:** email và mật khẩu; quản lý phiên, làm mới phiên và đồng bộ phiên đăng nhập. Client nối API auth. Google/Apple/OTP và quên/reset mật khẩu không thuộc luồng được tích hợp hiện tại.
- **Onboarding:** màn giới thiệu/thiết lập ban đầu trước khi vào ứng dụng; không được nhầm trạng thái UI với xác minh tài khoản.

## Kết nối cặp đôi

- **Chờ kết nối:** màn trạng thái khi tài khoản chưa ghép đôi.
- **Tạo lời mời:** tạo/mở mã mời qua API; hiển thị mã hoặc thông tin chia sẻ theo response.
- **Tham gia bằng mã:** nhập/kiểm tra mã và chấp nhận lời mời qua API; lỗi/hết hạn/đã sử dụng phải phản ánh theo kết quả server.
- **Trạng thái người dùng đã kết nối:** hiển thị thông tin đối tác/trạng thái kết nối nếu API cung cấp.
- **Giới hạn:** vòng đời hủy ghép đôi, xử lý retention và một số trường hợp deep link chưa hoàn thiện đầy đủ.

## Home — Dòng thời gian và Kỷ niệm

- **Home/Dòng thời gian:** tab Home hiển thị feed kỷ niệm dạng bài đăng dạng thẻ; header kính có nút tạo, tiêu đề chuyển ngữ cảnh và chuông theo thiết kế. Feed lấy dữ liệu từ API thật, có trạng thái tải/lỗi/rỗng phù hợp; không tạo feed rỗng giả.
- **Tạo kỷ niệm:** soạn nội dung kỷ niệm và chọn ảnh; ảnh được chuẩn bị trên thiết bị rồi tải lên API. Chỉ xác nhận đăng khi server trả thành công.
- **Chi tiết kỷ niệm:** xem nội dung và ảnh của một kỷ niệm theo ID route.
- **Kỷ niệm dạng lịch:** lịch tháng 7 cột, thumbnail, sticker sự kiện và đường kết nối nét đứt; chọn ngày/kỷ niệm để xem nội dung tương ứng.
- **Giới hạn:** sửa/xóa kỷ niệm và các thao tác chưa có API client không được giả lập thành công.

## Cảm xúc và check-in

- **Ghi nhận cảm xúc:** chọn cảm xúc/mood, cảm nhận liên quan và thông tin tự phản ánh theo các bước UI; có thể chọn phạm vi chia sẻ `full`, `mood_only` hoặc `private_only`.
- **Ghi chú/trình soạn check-in:** nhập ghi chú ngắn; giao diện có lựa chọn sticker/mascot và các trường biểu đạt theo flow hiện tại.
- **Lịch sử cảm xúc:** xem dữ liệu lịch sử và trình bày theo lịch/tuần khi dữ liệu khả dụng.
- **Giới hạn tích hợp:** theo ma trận API hiện tại, mood API chưa được nối đầy đủ với các trường/cảm xúc của UI. Không được tuyên bố đã lưu/chia sẻ check-in nếu chưa có API xác nhận; nội dung riêng tư không đưa vào AI, log hoặc route/storage không an toàn.

## Tiny Mission và nhiệm vụ

- **Tiny Mission:** tab nhiệm vụ/đổi quà, trang chi tiết nhiệm vụ, tiến độ và các popup đổi nhiệm vụ/đổi quà được dựng như giao diện xem trước.
- **Trạng thái hiện tại:** dữ liệu và thao tác nghiệp vụ Tiny Mission chưa có backend/API tương ứng; nội dung điểm, nhiệm vụ, quà và mã chỉ minh họa. Không ghi điểm, đánh dấu hoàn thành hay xác nhận đổi quà thật.
- **Tasks/Nudge:** màn nhiệm vụ và chi tiết nhắc nhở hiện hiển thị trạng thái chưa khả dụng; chưa nối API nudge. Không xem nội dung preview mẫu là nhiệm vụ đang hoạt động.

## Hồ sơ, cài đặt và bảo mật tài khoản

- **Hồ sơ:** xem thông tin hồ sơ người dùng, ảnh đại diện và trạng thái kết nối.
- **Chỉnh sửa hồ sơ:** cập nhật trường hồ sơ và ảnh đại diện qua API; ảnh có thể được gỡ qua API nếu server xác nhận.
- **Đổi mật khẩu:** nhập/xác nhận mật khẩu hiện tại và mật khẩu mới, gửi qua API; xử lý lỗi và phiên sau đổi mật khẩu.
- **Cài đặt thông báo:** có màn tùy chọn thông báo; chưa đồng nghĩa đã có toàn bộ luồng đồng bộ token push/cài đặt lên server.
- **Tài khoản:** xác nhận nhiều bước trước thao tác nhạy cảm và đăng xuất; xóa tài khoản/kiểm soát dữ liệu chưa được mô tả là hoàn tất nếu chưa có API lifecycle.
