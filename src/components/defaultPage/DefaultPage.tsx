import Footer from '../footer/Footer'
import Header from '../header/Header'

interface defaultPageProps {
  children: JSX.Element | JSX.Element[]
  noFooter?: boolean
}

const DefaultPage = ({ children, noFooter = false }: defaultPageProps) => {
  return (
    <>
      <Header />
      {children}
      {noFooter || <Footer />}
    </>
  )
}

export default DefaultPage
