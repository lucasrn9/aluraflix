import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin-top: 9.23rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0.87rem;
  border-top: 2px solid ${({ theme }) => theme.colors.primaryMedium};
`
export const StyledLogoContainer = styled.div`
  margin-bottom: 1.25rem;
  width: 120px;
`
export const StyledLogo = styled.img`
  width: 100%;
  height: 28.515px;
`
export const StyledParagraph = styled.p`
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
export const StyledStrong = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grayLight};
`
export const StyledLink = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.primaryMedium};
`