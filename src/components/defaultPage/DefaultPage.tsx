import Footer from '../footer/Footer'
import Header from '../header/Header'

interface defaultPageProps {
  children: JSX.Element | JSX.Element[]
}

const DefaultPage = ({ children }: defaultPageProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultPage
