import { FeatureSection } from './FeatureSection'

export function TinyMissionFeature() {
  return <FeatureSection
    id="nhiem-vu"
    badge="Tiny Mission"
    reversed
    quote={['Cùng làm điều nhỏ,', 'gần nhau mỗi ngày.']}
    description="Những nhiệm vụ nhỏ để cùng làm mỗi ngày: gửi một tấm ảnh, nhắn lời động viên hay lên kế hoạch cuối tuần. Mỗi việc nhỏ là thêm một lần quan tâm."
    screen="/mobile-image/tiny-mission.jpg"
    screenAlt="Giao diện Tiny Mission của Flamee: nhiệm vụ hôm nay, tiến độ, thành tựu và đổi quà trong bản xem trước"
    mascot={{ still: '/sticker_images_v2/tiny-mission.png', animated: '/gif_sticker_emote/tiny-mission.gif', stillContentHeight: 0.8567708333333334, animatedContentHeight: 0.859375 }}
  />
}
