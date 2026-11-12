# Flamee — QA giao diện triển khai

Tài liệu lịch sử của bản split-stage. Kết quả mới nhất sau redesign Magic UI Mobile nằm trong `docs/QA_MAGIC_UI.md`.

## Hướng cuối cùng

Người dùng chọn lại **Một bên bạn, một bên mình**, bỏ qua mockup, yêu cầu one-page scroll và duyệt React/Vite/Tailwind cùng các thư viện hỗ trợ trải nghiệm. Hero dùng `public/mobile-image/flamee-couple-phone-mockup.png`. Các thiết kế nhật ký v1 và lifestyle v2 trước đó không phải thiết kế triển khai.

Taste direction: `split-stage`, seed `320661171`. Giữ palette thương hiệu và bộ chữ Lora/Be Vietnam Pro đã thống nhất. Điều chỉnh blueprint theo yêu cầu trực tiếp: dùng ảnh hero hiện có, không dùng bộ ảnh kiến trúc, không đặt wordmark đè qua hình ảnh hay headline. Luồng ghép đôi dùng nội dung chữ vì không có API demo. Footer gọn với anchor nội trang.

Trên trang này, hai nhịp sống của cặp đôi trở thành hai vùng đồng hành khi đọc và cuộn. Tương tác thực: gallery lịch kéo/vuốt và chọn tháng, xem ảnh lớn trong dialog, bộ chọn cảm xúc đổi mascot. Các tương tác không ghi dữ liệu lên server.

## Bằng chứng kiểm tra cuối

- `npm run build`: TypeScript và Vite production build thành công; không còn cảnh báo chunk quá 500 KB.
- `npm test`: **8 passed**, chạy trên production preview cổng 4173.
- `taste lint src`: **0 FAIL, 0 WARN**.
- `taste inspect http://127.0.0.1:4173 --allow palette-cream`: **0 FAIL, 3 WARN**, tại 1440/768/390px.
- Tất cả headline được inspector đo tối đa hai dòng. Font thực tải: Lora và Be Vietnam Pro.
- Đã mở cả bảy ảnh fold/page desktop, tablet, mobile trong `.taste-skill/inspect` của bản cuối.
- Rà soát độc lập đã xác nhận hai lỗi quan trọng được sửa: nền đứng yên khi cuộn overlay dialog; SplitText được dọn khi chuyển sang reduced motion, không chạy callback đã bị hủy.

## Các kiểm thử

1. Hero đúng ảnh và thông điệp sản phẩm.
2. Chọn tháng đồng bộ ảnh, trạng thái truy cập và ảnh dialog; Escape trả focus; wheel trên overlay không cuộn nền.
3. Menu mobile mở bằng nút, cập nhật trạng thái và đóng sau khi chọn anchor.
4. Reduced motion ở 1440/768/390: không tràn ngang hoặc ảnh hỏng.
5. Cuộn native liên tiếp trong lúc Lenis hoạt động không kéo trang về vị trí cũ.
6. Tab cảm xúc dùng phím mũi tên, đổi mascot và giữ chú thích bản xem trước.
7. Chuyển reduced motion dọn SplitText, giữ title đọc được khi resize.
8. axe-core không phát hiện lỗi accessibility serious/critical. Kiểm tra tự động không thay thế đánh giá accessibility đầy đủ.

## Cảnh báo được xem xét

- `palette-cream`: dùng allowance vì `#FFFCF8` là màu thương hiệu được người dùng yêu cầu trong docs, không phải palette phát sinh.
- `no-footage`: hiện không có footage sản phẩm thật; hero và mascot dùng ảnh được cung cấp, chuyển động bằng transform. Không tải video stock để chỉ lấp chỉ tiêu.
- `off-centre`: bộ đo lấy mép chữ của liên kết phải, bỏ qua icon mũi tên 26px phía sau; mép thực của header và nội dung dùng cùng gutter 32px ở desktop.
- `pinned-over-picture`: bộ đo tính hình học của cả slide Embla ngoài vùng nhìn; ảnh đó đã bị clip và aria-hidden. Ảnh lịch đang nhìn thấy ở cột phải, tiêu đề ở cột trái; đã kiểm tra ảnh chụp, không có chữ phủ lên ảnh hiển thị.

## Critique

ROUND 1
Seen in one second: hình cặp đôi và headline hai dòng.
Idea (one sentence): hai nửa của câu chuyện đồng hành khi cuộn.
Live thing: chọn tháng, xem lịch và đổi cảm xúc minh họa.
Layout words by section: hero=split / intro=narrow-columns / memories=interactive-split / pairing=reading-list / emotion=reverse-split / faq=disclosure-list / close=band.
Scores: design 6.5 · usability 6 · creativity 7 · content 8 → overall 6.6
Caps applied: lỗi tương phản CTA và ba thẻ bước lặp lại.
Top three problems:
1. Nút trắng cuối trang chữ trắng: sửa cascade màu link (desktop cuối trang).
2. Các bước kết nối thành ba thẻ cùng dạng: chuyển sang danh sách chữ có khoảng cách (pairing).
3. Lenis chống lại cuộn native khiến contact sheet lặp lại: đồng bộ lệnh cuộn ngoài, thêm regression test (các page sheets).

ROUND 2
Seen in one second: hình app rõ và typography êm hơn bản mockup bị từ chối.
Idea (one sentence): một bên kể chuyện, một bên minh họa.
Live thing: gallery kéo/vuốt và mascot cảm xúc.
Layout words by section: hero=split / intro=narrow-columns / memories=interactive-split / pairing=reading-list / emotion=reverse-split / faq=disclosure-list / close=band.
Scores: design 7.2 · usability 7.6 · creativity 7 · content 8.4 → overall 7.4
Caps applied: creativity giới hạn 7 vì cấu trúc split vẫn có thể áp dụng cho ứng dụng cặp đôi khác.
Top three problems:
1. Hero tablet crop mất phần điện thoại: tạo composition tablet riêng (tablet-fold).
2. Logo icon có nền đen: dùng wordmark transparent được cung cấp (mọi fold).
3. Dải cỡ chữ quá nhiều: rút về sáu kích cỡ chính ở desktop (mọi page sheet).

ROUND 3 — final, sau sửa responsive và kiểm tra lại
Seen in one second: cặp đôi Flamee cạnh thông điệp Một bên bạn, một bên mình.
Idea (one sentence): hai nhịp sống gặp nhau trong một câu chuyện chung.
Live thing: hai tháng kỷ niệm kéo/vuốt, dialog và ba cảm xúc mascot.
Layout words by section: hero=split / intro=narrow-columns / memories=interactive-split / pairing=reading-list / emotion=reverse-split / faq=disclosure-list / close=band.
Scores: design 7.6 · usability 8.2 · creativity 7 · content 8.4 → overall 7.7
Caps applied: creativity giới hạn 7 như trên; không có FAIL inspector.
Top three remaining limitations:
1. Hình hero là illustration có sẵn, chưa có footage app thật; chuyển động chủ yếu là typography và ảnh (desktop-fold).
2. Nửa dưới dùng nhiều nội dung chữ để giữ đúng phạm vi tính năng, chưa có nội dung thương hiệu dài hạn (desktop-page-02).
3. CTA chỉ khám phá giao diện; chưa có link phát hành để hoàn thành chuyển đổi tải app (closing).

Các điểm là tự đánh giá thiết kế, không phải điểm của một ban giám khảo độc lập.

## Tài nguyên và hiệu năng

Toàn bộ hình dùng trên trang do người dùng cung cấp: ảnh hero, hai ảnh lịch, logo Flamee và mascot. Không có hình stock cần gán credit, không có lời chứng thực hoặc số liệu người dùng mẫu. Câu bên mascot là nội dung minh họa của landing page.

Hero được build WebP ở bốn kích thước, 15–107 KB thay cho PNG nguồn khoảng 2.15 MB. React và scroll runtime thành chunk riêng; Motion features được lazy load. Chưa công bố điểm Lighthouse/Core Web Vitals ngoài thực tế; `web-vitals` chỉ đo cục bộ, chưa tích hợp dịch vụ thu thập.

Preview local: http://127.0.0.1:4173/. Chưa deploy hoặc thay đổi quyền truy cập hosting.
