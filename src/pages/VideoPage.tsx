import DefaultPage from '../components/defaultPage/DefaultPage'
import NewVideoForm from '../components/newVideoForm/NewVideoForm'
import PageTitle from '../components/pageTitle/PageTitle'
import Layout from '../components/layout/Layout'
import Container from '../components/container/Container'

const VideoPage = () => {
  return (
    <DefaultPage>
      <Container>
        <Layout>
          <PageTitle>Novo vídeo</PageTitle>
          <NewVideoForm />
        </Layout>
      </Container>
    </DefaultPage>
  )
}

export default VideoPage
