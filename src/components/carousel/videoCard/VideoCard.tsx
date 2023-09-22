import {
  StyledVideoCard,
  StyledVideoImg,
  StyledVideoLink,
} from './videoCardStyles'

interface videoCardProps {
  imgSrc: string
  imgAlt: string
  borderColor: string
  videoSrc: string
}

const VideoCard = ({
  imgSrc,
  imgAlt,
  borderColor,
  videoSrc,
}: videoCardProps) => {
  return (
    <StyledVideoCard $borderColor={borderColor}>
      <StyledVideoLink href={videoSrc} target="_blank">
        <StyledVideoImg src={imgSrc} alt={imgAlt} />
      </StyledVideoLink>
    </StyledVideoCard>
  )
}

export default VideoCard
