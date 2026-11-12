import { FeatureSection } from './FeatureSection'

export function NudgeFeature() {
  return <FeatureSection
    id="goi-y-quan-tam"
    badge="Gợi ý quan tâm"
    quote={['Quan tâm đúng lúc,', 'gần nhau hơn.']}
    description="Một gợi ý hỏi thăm khi người ấy cần được quan tâm. Xem lời nhắn gợi ý, chỉnh lại theo cách của mình và chọn lúc phù hợp để chia sẻ."
    screen="/mobile-image/nudge-screen-mockup.png"
    screenAlt="Giao diện Gợi ý quan tâm của Flamee với lời hỏi thăm gợi ý và các lựa chọn gửi, chỉnh sửa, để sau hoặc bỏ qua"
    screenCrop={{ x: 46, y: 44, width: 796, height: 1624, imageWidth: 920, imageHeight: 1710 }}
    mascot={{ still: '/sticker_images_v2/care-nudge.png', animated: '/gif_sticker_emote/care-nudge.gif', stillContentHeight: 0.828125, animatedContentHeight: 0.8307291666666666 }}
  />
}
