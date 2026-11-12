# Flamee — Editorial Journal

Landing page tiếng Việt cho ứng dụng cặp đôi Flamee. Hero theo mockup nhật ký đã duyệt: serif nghiêng nét mảnh và CTA bên trái, cuốn nhật ký bên phải; nền Warm Linen, ánh sáng nhẹ và header chuyển sang nền kính khi cuộn.

## Chạy frontend

Node.js 22.12+ hoặc Node.js 24:

```sh
npm install
npm run dev
```

Mở URL Vite hiển thị, thường là http://127.0.0.1:5173/.

```sh
npm run build
npm run preview
```

Kiểm thử bản build:

```sh
npm run build
npm test
```

Playwright hiện dùng Chrome tại `C:/Program Files/Google/Chrome/Application/chrome.exe`; đổi `launchOptions.executablePath` trong `playwright.config.ts` khi dùng máy khác. Test tự khởi động hoặc dùng lại preview cổng 4173.

## Magic UI thực sự được sử dụng

Đã tải source miễn phí từ registry chính thức và tích hợp trực tiếp:

| Component | Vị trí sử dụng |
| --- | --- |
| `Iphone` | Source giữ lại từ phiên bản trước, hiện không dùng trong hero |
| `BlurFade` | Xuất hiện nội dung theo cuộn và chuyển động mở đầu |
| `AnimatedBeam` | Sơ đồ Bạn → Flamee ← Người ấy |
| `Marquee` | Dải mascot có nút tạm dừng và hỗ trợ reduced motion |
| `BorderBeam` | Điểm nhấn gói Flamee Plus |
| `LightRays` | Ánh sáng nền đầu trang |

File triển khai: `src/components/magicui/`. Registry gốc, nguồn và giấy phép MIT: `docs/vendor/magicui/`.

Mobile là template Pro. Dự án chỉ tham chiếu bố cục qua bản preview công khai và dùng các component miễn phí; không tải hoặc sao chép source template trả phí. Toàn bộ nội dung, assets thương hiệu và phần ghép trang được viết cho Flamee.

## Stack

React + TypeScript + Vite; Tailwind CSS v4; Be Vietnam Pro và Cormorant Garamond Light Italic từ Fontsource. Motion dùng trực tiếp theo source Magic UI. GSAP/ScrollTrigger điều khiển chuyển động nhẹ của nhật ký; Lenis quản lý smooth scroll và có hỗ trợ reduced motion gốc. Native media-query listener chỉ tắt/bật tween hero, tránh global refresh làm nhảy nền khi dialog mở.

Embla cho lịch kéo/vuốt, Radix cho dialog và tab cảm xúc; Lucide cho icon. CVA, clsx, tailwind-merge cho component utility. vite-imagetools tạo các kích thước WebP của hero. web-vitals ghi số đo cục bộ vào `window.flameeVitals`, chưa gửi dữ liệu tới dịch vụ analytics.

## Các file chính

- `src/App.tsx`: các section và tương tác landing page.
- `src/Hero.tsx`: hero editorial với ảnh nhật ký gốc của mockup 02. Text/CTA là HTML, ảnh nhật ký build thành responsive WebP. Hiệu ứng lá phong 3D vẫn được giữ.
- `src/AutumnBackground.tsx`: nền chiều thu với ảnh giấy sáng và bóng tán lá. Ảnh nguồn: `src/assets/autumn-afternoon.png`; prompt: `docs/autumn-background-asset.json`.
- `src/AutumnLeaves.tsx` + `src/lib/autumnScene.ts`: Three.js tải riêng, mật độ vừa phải (10 lá desktop / 6 lá mobile), 3 tầng phối cảnh, mesh cong và texture lá phong thật, nguồn sáng ấm, độ nét khác nhau theo tầng và chuyển động gió/xoay. DPR giới hạn 1.5 desktop / 1 mobile; tự giảm khi chậm kéo dài. Tạm dừng khi khuất/tab ẩn, hủy WebGL khi giảm chuyển động, giữ nền tĩnh nếu WebGL không khả dụng. Prompt texture: `docs/maple-atlas-asset.json`.
- `src/Header.tsx`: header cố định, bố cục logo trái và điều hướng phải; giữ nguyên kích thước và vị trí nội dung, chuyển dần sang nền pill kính trong 0,85 giây khi cuộn qua 64px, giữ menu mobile và hỗ trợ giảm chuyển động.
- `src/Membership.tsx`: mock gói Cơ bản / Flamee Plus; chọn tháng/năm và dialog xem trước, dùng Magic UI BlurFade / BorderBeam. Giá và quyền lợi là dữ liệu minh họa theo yêu cầu, chưa có thanh toán.
- `src/usePageMotion.ts`: vòng đời cuộn, giảm chuyển động, khóa nền dialog.
- `src/components.tsx`: CTA và logo.
- `src/components/magicui/`: năm component chính thức đã tải, có các điều chỉnh accessibility và màu thương hiệu.
- `src/lib/utils.ts`: helper `cn` dùng bởi component Magic UI.
- `src/styles.css`: theme, layout Mobile, responsive và keyframes Marquee.
- `src/assets/flamee-journal.png`: asset nhật ký trong suốt tạo bằng ImageGen từ mockup 02; WebP được build ở các độ rộng 480–1536px, khoảng 40–226 KB.
- `tests/landing.spec.ts`: kiểm thử luồng thao tác, responsive, a11y và hồi quy reduced motion/modal.

## Phạm vi sản phẩm

CTA dẫn tới phần khám phá app. Chưa có link cửa hàng ứng dụng, backend biểu mẫu hoặc API app trong trang này. Check-in ghi rõ đang hoàn thiện; Tiny Mission là bản xem trước. Lựa chọn cảm xúc chỉ thay mascot minh họa, không lưu hoặc chia sẻ dữ liệu. Không có số người dùng, lời chứng thực hay giá bán giả.

Logo, screenshot và mascot gốc do người dùng cung cấp. Minh họa nhật ký và ảnh cặp đôi bên trong được tạo bằng ImageGen theo mockup đã được duyệt. Các mockup và prompt nằm trong `public/mockups/hero/`.

## Kiểm tra thiết kế

Xem `docs/QA_MAGIC_UI.md` cho kết quả mới nhất. Tài liệu `docs/QA_LANDING_PAGE.md` ghi nhận phiên bản split-stage trước khi redesign.
