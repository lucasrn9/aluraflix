import styled from 'styled-components'
import Slider from '../slider/Slider'
import Category from '../../category/Category'

const StyledCarousel = styled.div`
  width: 100%;
`
const StyledCarouselHeaders = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.31rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`
const StyledDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.31rem;
  color: ${({ theme }) => theme.colors.grayLight};
  @media (min-width: 768px) {
    margin-left: 0.68rem;
    font-size: 1.125rem;
  }
`

interface carouselProps {
  category?: string
  description?: string
  color: string
  children: JSX.Element | JSX.Element[]
}

const Carousel = ({
  category,
  description = '',
  color,
  children,
}: carouselProps) => {
  const headers = (
    <StyledCarouselHeaders>
      <Category size="sm" color={color}>
        {category!}
      </Category>
      <StyledDescription>{description}</StyledDescription>
    </StyledCarouselHeaders>
  )
  return (
    <StyledCarousel>
      {category && headers}
      <Slider>{children}</Slider>
    </StyledCarousel>
  )
}

export default Carousel
