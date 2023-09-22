import Category from '../category/Category'
import VideoCard from '../carousel/videoCard/VideoCard'
import { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories/categories'
import { getVideos } from '../../services/videos/videos'
import {
  StyledBanner,
  StyledBannerCarousel,
  StyledBannerContent,
  StyledBannerWrapper,
  StyledPlayerImg,
  StyledPlayerVideoLink,
  StyledPlayerWrapper,
  StyledVideoDescription,
  StyledVideoTitle,
  StyledWatchButton,
} from './bannerStyles'

const Banner = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryName: 'Front End',
      categoryDescription: '',
      color: '',
    },
  ])
  const [videos, setVideos] = useState([
    {
      id: 1,
      category: 'Front End',
      imgSrc: '',
      videoSrc: '',
      title: '',
      description: '',
      user: '',
    },
  ])
  useEffect(() => {
    const fetchData = async () => {
      const resCategories = await getCategories()
      const resVideos = await getVideos()
      setCategories(resCategories)
      setVideos(resVideos)
    }
    fetchData()
  }, [])
  const frontendCategory = categories.filter(
    (category) => category.categoryName === 'Front End'
  )[0]
  const frontendVideos = videos.filter(
    (video) => video.category === frontendCategory.categoryName
  )
  return (
    <StyledBanner>
      <StyledBannerWrapper>
        <StyledBannerContent>
          <Category color={frontendCategory.color} size="big">
            {frontendCategory.categoryName}
          </Category>
          <StyledVideoTitle>SEO com React</StyledVideoTitle>
          <StyledVideoDescription>
            Esse desafio é uma forma de aprendizado. É um mecanismo onde você
            pode se engajar na resolução de um problema para poder aplicar todo
            o conhecimento adquirido na Formação React.
          </StyledVideoDescription>
          <StyledWatchButton variant="white">Assistir</StyledWatchButton>
        </StyledBannerContent>
        <StyledPlayerWrapper>
          <StyledPlayerVideoLink
            href={frontendVideos[0].videoSrc}
            target="_blank"
          >
            <StyledPlayerImg
              src="../../../public/imgs/player.jpg"
              alt="video da alura de SEO com React"
            />
          </StyledPlayerVideoLink>
        </StyledPlayerWrapper>
      </StyledBannerWrapper>
      <StyledBannerCarousel>
        {frontendVideos.map((frontendVideo) => (
          <VideoCard
            key={frontendVideo.id}
            borderColor={frontendCategory.color}
            imgSrc={frontendVideo.imgSrc}
            imgAlt={`${frontendVideo.category} video`}
            videoSrc={frontendVideo.videoSrc}
          />
        ))}
      </StyledBannerCarousel>
    </StyledBanner>
  )
}

export default Banner
