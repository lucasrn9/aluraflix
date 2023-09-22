import styled from 'styled-components'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryMedium};
  background-color: ${({ theme }) => theme.colors.blackDark};
  @media (min-width: 768px) {
    padding: 1.25rem 2.5rem;
  }
`
export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`
export const StyledLogoContainer = styled.div`
  width: 105.208px;
  @media (min-width: 768px) {
    width: 168.45px;
  }
`
export const StyledLogo = styled.img`
  width: 100%;
  min-height: 25px;
  @media (min-width: 768px) {
    min-height: 40px;
  }
`
export const StyledNewVideoBtn = styled(Button)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`