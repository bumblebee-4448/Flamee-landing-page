import { Check } from 'lucide-react'
import { PillBadge } from './components'
import { BlurFade } from './components/magicui/blur-fade'
import './membership.css'
import { ShimmerButton } from './components/magicui/shimmer-button'

const plans = [
  {
    "id": "free",
    "buttonBackground": "#F2E8DC",
    "buttonShimmer": "#FFFFFF",
    "buttonInk": "#513C30",
    "name": "Cơ bản",
    "price": "0",
    "description": "Bắt đầu cùng nhau, hoàn toàn miễn phí.",
    "includes": "",
    "mascot": "happy",
    "action": "Khám phá miễn phí",
    "note": "Free · Không cần thanh toán",
    "features": [
      "Kết nối với một người bằng lời mời hoặc mã kết nối",
      "Xem trạng thái kết nối của hai người",
      "Tạo và xem kỷ niệm chung",
      "Đăng ảnh và nội dung cho kỷ niệm",
      "Xem dòng thời gian kỷ niệm",
      "Xem lịch kỷ niệm theo tháng",
      "Chỉnh sửa hồ sơ cá nhân",
      "Nhận các cập nhật cơ bản của ứng dụng"
    ]
  },
  {
    "id": "together",
    "buttonBackground": "#975336",
    "buttonShimmer": "#F8D7AD",
    "buttonInk": "#FFFCF8",
    "name": "Gắn kết",
    "price": "79.000",
    "description": "Thêm không gian cho những điều chung.",
    "includes": "Bao gồm mọi quyền lợi Cơ bản, cộng thêm:",
    "mascot": "connection-pair",
    "action": "Khám phá Gắn kết",
    "note": "Dành cho nhịp sống của hai người",
    "features": [
      "Tăng dung lượng lưu ảnh và kỷ niệm",
      "Đăng nhiều ảnh hơn cho mỗi kỷ niệm",
      "Lưu thêm khoảnh khắc vào dòng thời gian",
      "Tùy chỉnh ảnh đại diện của không gian chung",
      "Chọn giao diện hoặc chủ đề cho không gian của hai người",
      "Thêm ngày kỷ niệm và sự kiện riêng",
      "Nhận nhắc nhở cho ngày kỷ niệm",
      "Xem lại kỷ niệm theo mốc thời gian thuận tiện hơn"
    ]
  },
  {
    "id": "complete",
    "buttonBackground": "#EBD0A8",
    "buttonShimmer": "#FFF7E6",
    "buttonInk": "#4D382F",
    "name": "Trọn vẹn",
    "price": "129.000",
    "description": "Cá nhân hóa trọn vẹn chuyện hai mình.",
    "includes": "Bao gồm mọi quyền lợi Gắn kết, cộng thêm:",
    "mascot": "care-nudge",
    "action": "Khám phá Trọn vẹn",
    "note": "Không gian mang dấu ấn của hai mình",
    "features": [
      "Dung lượng lưu trữ cao hơn",
      "Tùy chỉnh không gian chung với nhiều chủ đề hơn",
      "Cá nhân hóa cách nhận gợi ý quan tâm",
      "Nhận gợi ý hoạt động dành cho hai người",
      "Xem tổng kết hoạt động và kỷ niệm theo tuần hoặc tháng",
      "Tạo bộ sưu tập kỷ niệm theo dịp hoặc chủ đề",
      "Ưu tiên trải nghiệm các tính năng mới dành cho cặp đôi"
    ]
  }
] as const

export function Membership() {
  return <section id="goi-thanh-vien" className="membership-section shell section-space" aria-labelledby="membership-title">
    <div className="membership-intro">
      <BlurFade inView blur="0px"><PillBadge className="mood-feature-label">Gói thành viên</PillBadge><h2 id="membership-title">Chọn cách mình<br />đồng hành.</h2><p className="membership-subtitle">Bắt đầu miễn phí, chọn gói phù hợp với hai mình.</p></BlurFade>
    </div>

      <div className="membership-tickets">
        {plans.map((plan, index) => <BlurFade inView blur="0px" delay={index * .08} key={plan.id} className={`membership-ticket ticket-${plan.id}`}>
          <article aria-labelledby={`plan-${plan.id}`}>
            <div className="ticket-cover"><div className="ticket-top"><div><h3 id={`plan-${plan.id}`}>{plan.name}</h3></div><img className="ticket-mascot" src={`/sticker_images_v2/${plan.mascot}.png`} alt="" aria-hidden="true" width="512" height="512" loading="lazy" /></div>
            <p className="ticket-description">{plan.description}</p>
            <div className="ticket-price"><span>{plan.price}<small>đ</small></span><p>{plan.id === 'free' ? 'miễn phí' : '/ tháng'}</p></div>
            <div className="ticket-perforation" aria-hidden="true"><span /></div></div>
            <div id={`benefits-${plan.id}`} className="ticket-body">
            <p className="ticket-includes">{plan.includes}</p><ul className="ticket-features">{plan.features.map(feature => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
            <div className="ticket-bottom"><ShimmerButton className="ticket-action" background={plan.buttonBackground} shimmerColor={plan.buttonShimmer} style={{ color: plan.buttonInk }} shimmerDuration="5s" shimmerSize="1px" type="button"><span className="ticket-action-label">{plan.action}</span></ShimmerButton><p>{plan.note}</p></div>
            </div>
          </article>
        </BlurFade>)}
      </div>
  </section>
}
