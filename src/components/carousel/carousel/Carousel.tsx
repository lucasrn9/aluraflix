import Slider from '../slider/Slider'
import Category from '../../category/Category'
import { StyledCarousel, StyledCarouselHeaders, StyledDescription } from './carouselStyles'



interface carouselProps {
  category?: string
  description?: string
  color?: string
  bannerActive?: boolean
  children: JSX.Element | JSX.Element[]
  className?: string
}

const Carousel = ({
  className,
  category,
  description = '',
  color,
  bannerActive = false,
  children,
}: carouselProps) => {
  const headers = (
    <StyledCarouselHeaders>
      <Category size="sm" color={color!}>
        {category!}
      </Category>
      <StyledDescription>{description}</StyledDescription>
    </StyledCarouselHeaders>
  )
  return (
    <StyledCarousel className={className} $bannerActive={bannerActive!}>
      {category && headers}
      <Slider>{children}</Slider>
    </StyledCarousel>
  )
}

export default Carousel
