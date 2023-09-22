import { useEffect, useState } from 'react'
import Banner from '../components/banner/Banner'
import Carousel from '../components/carousel/carousel/Carousel'
import VideoCard from '../components/carousel/videoCard/VideoCard'
import DefaultPage from '../components/defaultPage/DefaultPage'
import NewVideoBtn from '../components/newVideoBtn/NewVideoBtn'
import VideosSection from '../components/videosSection/VideosSection'
import { getCategories } from '../services/categories/categories'
import { getVideos } from '../services/videos/videos'

const HomePage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryName: '',
      categoryDescription: '',
      color: '',
    },
  ])
  const [videos, setVideos] = useState([
    {
      id: 1,
      category: '',
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
  return (
    <DefaultPage noFooter={true}>
      <Banner />
      <VideosSection>
        {categories.map((category) => {
          const categoryVideos = videos.filter(
            (video) => video.category === category.categoryName
          )
          const isBannerActive = category.categoryName === 'Front End'
          return (
            <Carousel
              key={category.id}
              bannerActive={isBannerActive}
              category={category.categoryName}
              description={category.categoryDescription}
              color={category.color}
            >
              {categoryVideos.map((categoryVideo) => (
                <VideoCard
                  key={categoryVideo.id}
                  borderColor={category.color}
                  imgSrc={categoryVideo.imgSrc}
                  imgAlt={`${categoryVideo.category} video`}
                  videoSrc={categoryVideo.videoSrc}
                />
              ))}
            </Carousel>
          )
        })}
      </VideosSection>
      <NewVideoBtn to="/video">Novo vídeo</NewVideoBtn>
    </DefaultPage>
  )
}

export default HomePage
