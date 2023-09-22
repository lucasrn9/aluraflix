import styled from 'styled-components'
import Button from '../button/Button'
import Carousel from '../carousel/carousel/Carousel'

export const StyledBanner = styled.section`
  width: 100%;
  margin-top: 0.37rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.9rem;
  @media (min-width: 968px) {
    margin-bottom: -140px;
  }
`
export const StyledBannerWrapper = styled.div`
  height: 179px;
  width: 100%;
  max-width: 340px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../../public/imgs/player--big.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(40%);
  }
  @media (min-width: 768px) {
    max-width: 1440px;
    height: 868px;
    padding: 0 2.69rem 0 2.94rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: unset;
    justify-content: space-between;
  }
`
export const StyledBannerContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(51%);
  bottom: 0;
  @media (min-width: 768px) {
    transform: translateX(0) translateY(0);
    position: static;
    width: 100%;
    max-width: 661px;
    margin-top: 2rem;
  }
  @media (min-width: 1100px) {
    margin-top: 12rem;
    margin-right: 1rem;
  }
`
export const StyledVideoTitle = styled.h2`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.9rem;
  color: ${({ theme }) => theme.colors.grayLight};
  @media (min-width: 768px) {
    text-align: unset;
    font-size: 2.875rem;
    margin: 2.5rem 0 0.56rem 0;
  }
`
export const StyledVideoDescription = styled.p`
  display: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grayLight};
  @media (min-width: 768px) {
    display: block;
  }
`

export const StyledWatchButton = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledPlayerWrapper = styled.div`
  display: none;
  position: relative;
  width: 100%;
  margin-top: 10.56rem;
  max-width: 646px;
  height: 333.582px;
  border-radius: 4px;
  border: 4px solid ${({ theme }) => theme.colors.frontEnd};
  @media (min-width: 768px) {
    display: block;
    margin-top: 2rem;
  }
  @media (min-width: 1100px) {
    margin-top: 10.56rem;
  }
`
export const StyledPlayerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StyledPlayerVideoLink = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const StyledBannerCarousel = styled(Carousel)`
  padding-left: 2.87rem;
  transform: translateY(-150px);
  display: none;
  @media (min-width: 968px) {
    display: block;
  }
`
