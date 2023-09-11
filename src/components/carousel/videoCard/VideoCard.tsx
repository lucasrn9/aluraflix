import styled from 'styled-components'

const StyledVideoCard = styled.div<{ $borderColor: string }>`
  width: 291px;
  height: 172.264px;
  border-radius: 4px;
  border: 2px solid ${({ theme, $borderColor }) => theme.colors[$borderColor]};
  @media (min-width: 768px) {
    width: 432px;
    height: 260.85px;
  }
`
const StyledVideoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface videoCardProps {
  imgSrc: string
  imgAlt: string
  borderColor: string
}

const VideoCard = ({ imgSrc, imgAlt, borderColor }: videoCardProps) => {
  return (
      <StyledVideoCard $borderColor={borderColor}>
        <StyledVideoImg src={imgSrc} alt={imgAlt} />
      </StyledVideoCard>
  )
}

export default VideoCard
