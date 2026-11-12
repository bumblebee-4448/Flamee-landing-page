import { FeatureSection } from './FeatureSection'

export function ConnectionFeature() {
  return <FeatureSection
    id="ket-noi"
    badge="Kết nối cảm xúc"
    quote={['Một lời mời,', 'hai người có nhau.']}
    description="Tạo lời mời và chia sẻ cho người ấy, hoặc nhập mã mời để kết nối. Người nhận xác nhận lời mời; sau đó cả hai vào không gian chung."
    screen="/mobile-image/kết-nối.png"
    screenAlt="Màn hình tài khoản và kết nối Flamee với hồ sơ của hai người đã ghép đôi"
    screenCrop={{ x: 160, y: 64, width: 704, height: 1408, imageWidth: 1024, imageHeight: 1536 }}
    mascot={{ still: '/sticker_images_v2/connection-pair.png', animated: '/gif_sticker_emote/connection-pair.gif', stillContentHeight: .6822916666666666, animatedContentHeight: .6901041666666666 }}
  />
}
