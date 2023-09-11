import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import VideosSection from './components/videos/VideosSection'
import Carousel from './components/carousel/carousel/Carousel'
import VideoCard from './components/carousel/videoCard/VideoCard'
import TextField from './components/textField/TextField'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <VideosSection>
        <Carousel
          category="Front End"
          description="Formação Front End da Alura"
          color="frontEnd"
        >
          <VideoCard
            imgSrc="../../../public/imgs/frontend--1.jpg"
            imgAlt="test"
            borderColor="frontEnd"
          />
          <VideoCard
            imgSrc="../../../public/imgs/frontend--1.jpg"
            imgAlt="test"
            borderColor="frontEnd"
          />
          <VideoCard
            imgSrc="../../../public/imgs/frontend--1.jpg"
            imgAlt="test"
            borderColor="frontEnd"
          />
          <VideoCard
            imgSrc="../../../public/imgs/frontend--1.jpg"
            imgAlt="test"
            borderColor="frontEnd"
          />
          <VideoCard
            imgSrc="../../../public/imgs/frontend--1.jpg"
            imgAlt="test"
            borderColor="frontEnd"
          />
        </Carousel>
      </VideosSection>
      <Footer />
    </>
  )
}

export default App
