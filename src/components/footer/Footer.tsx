import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 9.23rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0.87rem;
  border-top: 2px solid ${({ theme }) => theme.colors.primaryMedium};
`
const StyledLogoContainer = styled.div`
  margin-bottom: 1.25rem;
  width: 120px;
`
const StyledLogo = styled.img`
  width: 100%;
  height: 28.515px;
`
const StyledParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grayLight};
  @media (min-width: 1100px) {
    display: none;
  }
`
const StyledStrong = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grayLight};
`
const StyledLink = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.primaryMedium};
`
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <StyledLogo src="../../../public/imgs/logo--big.png" />
      </StyledLogoContainer>
      <StyledParagraph>
        Site feito na <StyledStrong>#ImersãoReact</StyledStrong> da
        <StyledLink> Alura</StyledLink>
      </StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
