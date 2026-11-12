# Flamee — Thiết kế landing page

Trạng thái: thiết kế v1 KHÔNG ĐƯỢC DUYỆT. Người dùng yêu cầu ảnh public chỉ đóng vai trò hỗ trợ, không làm trọng tâm thiết kế. Xem đề xuất thay thế tại `docs/design/v2/DESIGN.md`. Giữ tài liệu này để tham chiếu lịch sử, không triển khai theo v1.

## Ý định và mục tiêu

Flamee là ứng dụng mobile cho cặp đôi. Landing page tiếng Việt giúp người xem hiểu sản phẩm, xem giao diện thật và biết cách kết nối với người yêu. Ý tưởng được duyệt: **Cuốn nhật ký của hai đứa**. Trên trang này, lịch kỷ niệm của Flamee trở thành các trang của một cuốn nhật ký chung.

Ưu tiên trải nghiệm ấm áp, chữ rõ, ảnh app lớn. Không thêm giá, số người dùng, lời đánh giá, đối tác hoặc kết quả sức khỏe tinh thần khi chưa có nguồn. Không mô phỏng đăng ký, ghép đôi, lưu cảm xúc hay đổi quà thật trên landing page.

## Phương án đã xem xét

1. The page is the object / Cuốn nhật ký của hai đứa: nội dung mang hình thức các trang nhật ký, ảnh lịch là bằng chứng. Người dùng chọn hướng này.
2. Split stage: giao diện cố định một bên, lời kể bên còn lại. Rõ sản phẩm nhưng ít cảm giác lưu giữ.
3. One motif: ngọn lửa làm hình chủ đạo. Nhận diện mạnh nhưng dễ lấn át sản phẩm.

Direction taste skill v2: `page-is-the-object`, seed `1145490710`, bảng màu giữ từ thương hiệu. Hero cuối cùng: `invitation-card-cropped`.

## Hệ thống thị giác

- Nền ngoài `#EEECEA`; trang nhật ký `#FFFCF8`; chữ chính `#302924`; chữ phụ `#70655D`.
- Coral `#FF7158` dùng cho CTA; cam đào `#FCB76D` hỗ trợ. Viền be `#E6DDD3` chỉ khi cần cho điều khiển biểu mẫu, không dùng để kẻ khung nội dung.
- Không dùng gradient cho thành phần của landing page. Ảnh app giữ nguyên gradient/đổ bóng bên trong ảnh gốc.
- Nút coral dùng chữ nâu đậm để bảo đảm tương phản; không mặc định chữ trắng trên coral.
- Display: Big Shoulders 800, chữ in hoa, tối đa hai dòng. Nội dung: Public Sans 400/600. Cả hai có bộ ký tự tiếng Việt theo metadata Google Fonts.
- Năm cấp chữ: chú thích 14px; nội dung 16–18px; lời dẫn 20–24px; tiêu đề mục 36–64px; hero 48–96px. Giảm travel và tăng line-height đủ cho dấu tiếng Việt; kiểm tra thực tế trước khi chốt CSS.
- Lề ngoài đối xứng: desktop 32px, tablet 24px, mobile 20px. Nội dung các trang dùng lưới 12 cột trên desktop.
- Trang giấy cạnh thẳng, không viền hay đổ bóng; hero có hai góc lõm nhẹ ở mép trên. Nút chữ nhật. Bo góc trong ảnh app được giữ nguyên.
- Không badge trên headline, không hàng thẻ icon, không sticker/trái tim bay, không texture giấy giả.

## Bố cục desktop và nội dung

### Mở đầu — trang bìa

Navigation thường trên nền kem: wordmark chữ `flamee`, ba liên kết Kỷ niệm / Kết nối / Câu hỏi, nút Khám phá. Chưa có logo vector chính thức nên không sáng tác biểu tượng thay thế.

Trang giấy trắng ấm đứng giữa, bắt đầu khoảng 112px từ đầu trang, rộng khoảng 760px ở viewport 1440px; tỷ lệ gợi trang bìa 5:7, phần dưới tiếp tục qua fold. Đây là khoảnh khắc căn giữa duy nhất trên trang.

H1, chủ động ngắt hai dòng:

> CHUYỆN MÌNH,  
> GIỮ Ở ĐÂY.

Mô tả:

> Flamee là ứng dụng dành cho cặp đôi, giúp kết nối và lưu lại kỷ niệm của hai bạn.

CTA: **Khám phá Flamee**, dẫn tới mục xem trước `#ky-niem`. Ảnh lịch tháng 10 nằm ngay bên dưới CTA, đủ lớn để nhận biết các thumbnail ảnh. Cắt thanh trạng thái hệ điều hành, khoảng trống và thanh tab dưới nếu không cần; không sửa nội dung lịch. Chữ, mô tả và nút phải thấy được ngay ở màn hình laptop; không dùng chiều cao viewport bắt buộc nếu gây mất nội dung.

### Kỷ niệm — trang ảnh có thể lật

H2: **Ngày nhỏ, nhớ lâu.**

> Một tấm ảnh, vài dòng kể lại. Lưu khoảnh khắc trên dòng thời gian và tìm lại theo ngày trên lịch kỷ niệm.

Bố cục từ blueprint Square plate: một vùng ảnh lớn ở trái, tiêu đề và mô tả ở phải. Crop ảnh thành một trang lịch có thể đọc được; không ép toàn bộ ảnh dọc vào hình vuông rồi làm chữ quá nhỏ.

Tương tác thật duy nhất: hai nút **Tháng 9** / **Tháng 10** đổi ảnh lịch tương ứng bằng crossfade ngắn, không thay đổi dữ liệu. Ảnh tháng 10 hiển thị mặc định; có mô tả ảnh và trạng thái chọn cho bàn phím/screen reader. Không tự động đổi ảnh khi người xem đang đọc.

Quan sát tài nguyên: `dòng thời gian.jpg` là lịch tháng 10; `dòng thời gian callendar.jpg` là lịch tháng 9. Chưa có ảnh feed bài đăng, vì vậy không tạo tab Dòng thời gian giả. Nội dung mô tả khả năng feed vẫn dựa vào tài liệu tính năng.

### Kết nối — lời mời mở đầu

H2: **Bắt đầu từ hai người.**

> Tạo tài khoản, gửi mã mời và cùng bắt đầu lưu lại chuyện của hai bạn.

Blueprint Itinerary on a slip: tiêu đề và ảnh `kết-nối.png` ở trái; mảnh giấy lời mời ở phải, liệt kê luồng theo trật tự bằng các nhãn:

- **Tạo tài khoản:** Đăng ký bằng email và mật khẩu.
- **Gửi lời mời:** Tạo mã mời trong ứng dụng và gửi cho người yêu.
- **Kết nối:** Người còn lại nhập mã và chấp nhận lời mời.

Dòng kết trên nền nâu: **Sẵn sàng lưu kỷ niệm cùng nhau.** Không thêm số phút, mã mời giả đang hoạt động hay ô nhập tương tác. Ảnh trạng thái đã kết nối không được trình bày như màn nhập mã.

### Trang đang viết tiếp — tính năng phát triển

H2: **Những trang tiếp theo.**

> Flamee đang tiếp tục hoàn thiện những cách để hai bạn quan tâm đến nhau mỗi ngày.

Một trang giấy dọc theo blueprint Capabilities as a menu, mở đầu bằng một hàng ảnh crop cảm xúc và ghi chú; dưới là hai mục chữ đầy đủ, không biến thành hai feature cards.

**Check-in cảm xúc — Đang hoàn thiện.** Khám phá giao diện ghi nhận cảm xúc và ghi chú. Việc lưu và chia sẻ cảm xúc đang được hoàn thiện.

**Tiny Mission — Bản xem trước.** Xem ý tưởng về nhiệm vụ nhỏ và đổi quà cho hai người. Điểm, nhiệm vụ và quà hiện là nội dung minh họa.

Ảnh tương ứng `mood checkin.jpg`, `note.jpg`, `tiny-mission.jpg` chỉ minh họa các mục có trạng thái rõ ràng. Không dùng điểm trong ảnh làm số liệu marketing. Không quảng bá Smart Nudge như một chức năng đang hoạt động.

### Câu hỏi — ghi chú cuối sổ

H2: **Bạn muốn biết thêm?**

Tiêu đề ở cột trái, các câu hỏi/đáp luôn mở ở hai cột phải, không accordion. Sáu câu hỏi đủ nội dung hiện có; không kéo dài để đủ số mục của mẫu.

**Flamee dành cho ai?** Những cặp đôi muốn có một nơi để lưu lại kỷ niệm và kết nối với nhau.

**Kết nối với người yêu thế nào?** Một người tạo mã mời trong app, người còn lại nhập mã và chấp nhận lời mời.

**Có thể lưu những gì?** Bạn có thể tạo kỷ niệm bằng nội dung và ảnh, xem lại trên dòng thời gian hoặc lịch.

**Check-in cảm xúc đã dùng được chưa?** Giao diện đã có; việc tích hợp lưu và chia sẻ cảm xúc đang được hoàn thiện.

**Tiny Mission có đổi quà thật không?** Chưa. Phần nhiệm vụ, điểm và quà hiện là bản xem trước.

**Có thể tải Flamee ở đâu?** Trang hiện giới thiệu giao diện và các tính năng của Flamee. Liên kết tải sẽ được bổ sung khi có thông tin phát hành.

### Lời mời cuối — quay về cuốn nhật ký

H2: **Giữ lại ngày hôm nay.**

> Xem những kỷ niệm có thể được lưu lại cùng Flamee.

Blueprint Reply card: trên nền nâu, ảnh lịch crop lớn ở trái, một mảnh giấy trắng ấm ở phải với câu trên và nút **Xem giao diện Flamee**, dẫn về `#ky-niem`. Không có form email khi chưa có nơi tiếp nhận đăng ký. Bản triển khai không dùng xoay giấy nếu làm giảm độ rõ.

### Footer — mặt sau của trang giấy

Một vùng trắng ấm gọn, wordmark Flamee và ba liên kết nội trang. Có nút Về đầu trang. Không dựng các cột email, địa chỉ, chính sách hoặc mạng xã hội khi chưa có nội dung thực. Không ép footer cao một màn hình.

## Mobile 390px và tablet

- Navigation một hàng: wordmark và nút Khám phá. Ba liên kết chuyển xuống footer; không cần menu ẩn cho chỉ ba anchor.
- Trang bìa rộng 350px, padding khoảng 20px; headline hai dòng, mô tả 16px, CTA cao ít nhất 48px. Ảnh xuất hiện ngay sau nút, không đặt một vùng trống dài.
- Mục kỷ niệm: heading, mô tả, nút tháng, rồi ảnh; vùng điều khiển gần nhau, không tràn ngang.
- Kết nối: lời dẫn trước, mảnh giấy ba bước tiếp theo; ảnh trạng thái kết nối rút gọn bên dưới.
- Trang tính năng đang phát triển: trạng thái hiển thị cạnh tên hoặc ngay dưới tên trước ảnh; không ẩn chú thích.
- FAQ một cột, nội dung luôn hiển thị. CTA cuối và footer theo chiều dọc.
- Tablet dùng cột đôi chỉ khi ảnh và chữ còn đọc được, nếu không chuyển một cột.

## Chuyển động và khả năng tiếp cận

Crossfade khi người xem chọn tháng là chuyển động nhận diện. Lời dẫn, tiêu đề và ảnh từng mục xuất hiện lần lượt bằng translate/opacity nhỏ; nội dung có sẵn nếu JavaScript không chạy. Các nút có hover/focus/press; không dùng autoplay, parallax mạnh hoặc sticky giữ người đọc nhiều màn hình.

Reduced motion bỏ travel và crossfade. Ảnh tháng 10 vẫn hiển thị khi không có JS. Focus rõ, vùng chạm tối thiểu 44px, tab controls dùng button và trạng thái được công bố; mọi anchor có đích thật. Không thêm dòng hướng dẫn kỹ thuật vào nội dung sản phẩm.

## Quyết định triển khai đề xuất, chưa thực hiện

Dự án hiện chỉ có docs/public, không có framework hay Git. Đề xuất HTML/CSS/JavaScript thuần, phục vụ local, tái sử dụng ảnh trong public, không thêm framework cho trang nội dung và một bộ đổi ảnh. Đây là quyết định do người thiết kế đề xuất, chưa phải yêu cầu stack từ người dùng. Không xuất bản hoặc tạo tài nguyên hosting trong bước thiết kế.

Khi thiết kế được duyệt: lập kế hoạch ngắn, triển khai, rồi kiểm tra liên kết/nút tháng, keyboard, giảm chuyển động và trình bày tại 1440/768/390px bằng taste lint/inspect; xem ảnh chụp và sửa lỗi. Chưa chạy kiểm tra website vì chưa có website.

## Điều chỉnh so với lần rút direction đầu tiên

- Hero rút lại hai lần: Striped card beside room rồi Card over dim room đều đòi ảnh căn phòng/bối cảnh không có và không chứng minh sản phẩm. Kết quả Invitation card cropped phù hợp trang bìa nhật ký, không cần ảnh stock.
- Features đổi Stacking colour sheets thành Capabilities as menu: chỉ có hai nhóm tính năng sắp tới; tránh dựng 3–5 tờ sticky gây hiểu nhầm về mức độ hoàn thiện.
- CTA đổi Sentence with blank thành Reply card: chưa có backend form, email liên hệ hay liên kết store đã xác nhận.
- Footer đổi Columns then wordmark thành Back of card: không có địa chỉ, giờ mở cửa hoặc mạng xã hội để điền các cột.
- Dòng máy tự sinh “không có screenshot” trong direction sheet không phản ánh dự án: dùng ảnh thật đã có trong public. Không tái dựng dashboard giả hoặc dùng bộ ảnh kiến trúc được gợi ý.
- Không dùng các điểm trang trí hoặc hairline được nhắc trong blueprint khi xung đột house rules. Hình dạng trang giấy đủ mang concept.

## Cần duyệt

Phê duyệt bước thiết kế gồm bố cục trang giấy, typography đậm/condensed, nội dung và thứ tự mục, bản desktop/mobile, CTA khám phá thay vì tải app khi chưa có link. Người dùng có thể chỉnh các điểm này trước khi cho phép triển khai.

Ảnh xem trước hero: `docs/design/flamee-desktop-v1.png` và `docs/design/flamee-mobile-v1.png`, tạo bằng công cụ imagegen tích hợp. Đây là ảnh ý tưởng cho phần mở đầu, không phải screenshot toàn trang đã code. Toàn bộ phần dưới được mô tả trong tài liệu này. Một vài chi tiết ảnh AI như bo nút, ánh sáng nền và ảnh app được vẽ lại chỉ mang tính minh họa; quy tắc màu phẳng, nút chữ nhật và ảnh app gốc trong spec được ưu tiên khi triển khai.

Builder check độc lập đã đọc tài liệu và phản hồi “nothing important left”. Chưa chạy taste inspect, lint hoặc chấm điểm giao diện website vì chưa có mã sản phẩm; đánh giá hiện tại chỉ là thiết kế.

## Nguồn

- `docs/QUY_DINH_MAU_SAC.md`, `docs/TINH_NANG_HIEN_CO.md` và ảnh `public/`.
- Metadata bộ ký tự: https://github.com/google/fonts/blob/main/ofl/bigshoulders/METADATA.pb và https://github.com/google/fonts/blob/main/ofl/publicsans/METADATA.pb.
- Các ảnh mockup AI dùng để duyệt bố cục, không phải ảnh chụp website đã triển khai. Kích thước chữ và nội dung chính xác theo tài liệu này; khi code dùng ảnh app gốc, không dùng bản app bị mô hình vẽ lại.
