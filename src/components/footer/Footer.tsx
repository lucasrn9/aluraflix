import {
  StyledFooter,
  StyledLink,
  StyledLogo,
  StyledLogoContainer,
  StyledParagraph,
  StyledStrong,
} from './footesStyles'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <StyledLogo src="../imgs/logo--big.png" />
      </StyledLogoContainer>
      <StyledParagraph>
        Site feito na <StyledStrong>#ImersãoReact</StyledStrong> da
        <StyledLink> Alura</StyledLink>
      </StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
