import styled from 'styled-components'
import Button from '../button/Button'

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryMedium};
  background-color: ${({ theme }) => theme.colors.blackDark};
  @media (min-width: 768px) {
    padding: 1.25rem 2.5rem;
  }
`
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`
const StyledLogoContainer = styled.div`
  width: 105.208px;
  @media (min-width: 768px) {
    width: 168.45px;
  }
`
const StyledLogo = styled.img`
  width: 100%;
  min-height: 25px;
  @media (min-width: 768px) {
    min-height: 40px;
  }
`
const StyledNewVideoBtn = styled(Button)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledLogoContainer>
          <StyledLogo src="../../../public/imgs/logo--big.png" />
        </StyledLogoContainer>
        <StyledNewVideoBtn $variant="white--outlined">
          Novo Video
        </StyledNewVideoBtn>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

export default Header
