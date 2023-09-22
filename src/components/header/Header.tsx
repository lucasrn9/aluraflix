import Container from '../container/Container'
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLink,
  StyledLogo,
  StyledLogoContainer,
  StyledNewVideoBtn,
} from './headerStyles'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <StyledLogoContainer>
            <StyledLogo src="../../../public/imgs/logo--big.png" />
          </StyledLogoContainer>
          <StyledLink to="/video">
            <StyledNewVideoBtn variant="white--outlined">
              Novo Video
            </StyledNewVideoBtn>
          </StyledLink>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
