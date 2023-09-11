import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderSlick from 'react-slick'
import './slider.css'

interface sliderProps {
  children: JSX.Element[] | JSX.Element
}

const Slider = ({ children }: sliderProps) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }
  return <SliderSlick {...settings}>{children}</SliderSlick>
}

export default Slider
