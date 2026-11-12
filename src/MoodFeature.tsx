import { FeatureSection } from './FeatureSection'

export function MoodFeature() {
  return <FeatureSection
    id="cam-xuc"
    badge="Mood Check-in"
    reversed
    quote={['Gọi tên cảm xúc,', 'hiểu nhau hơn.']}
    description="Mỗi người ghi lại tâm trạng và điều đang ảnh hưởng đến mình. Khi được chia sẻ, người kia có thể thấy trạng thái đó."
    screen="/mobile-image/mood checkin.jpg"
    screenAlt="Giao diện Mood Check-in của Flamee: tâm trạng trong tuần và chia sẻ cảm xúc của hai người"
    mascot={{ still: '/sticker_images_v2/happy.png', animated: '/gif_sticker_emote/happy.gif', stillContentHeight: .76953125, animatedContentHeight: .919921875 }}
  />
}
