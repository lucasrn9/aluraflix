import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{
  $variant?: string
}>`
  width: 140px;
  border-radius: 0.25rem;
  text-align: center;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  border: none;
  padding: 0.67rem 0;
  margin-right: 1.19rem;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'gray':
        return css`
          color: ${theme.colors.blackDark};
          background-color: ${theme.colors.blackLighter};
        `
      case 'white':
        return css`
          color: ${theme.colors.blackDark};
          background-color: white;
          font-weight: 300;
          font-family: 'Roboto', sans-serif;
          width: unset;
          padding: 0.3rem 1.5rem;
        `
      case 'white--outlined':
        return css`
          color: white;
          background-color: transparent;
          border: 1px solid white;
          width: 180px;
          min-height: 54px;
          padding: 0.67rem 2rem;
        `
      default:
        return css`
          color: white;
          background-color: ${theme.colors.primaryMedium};
        `
    }
  }};
  @media (min-width: 768px) {
    margin-right: 2.5rem;
  }
`