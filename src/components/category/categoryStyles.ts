import styled, { css } from 'styled-components'

export const StyledCategory = styled.div<{ $size: string; $color: string }>`
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: normal;
  display: flex;
  ${({ $size }) => {
    switch ($size) {
      case 'big':
        return css`
          display: none;
          font-size: 3.75rem;
          font-weight: 400;
          padding: 0 1.5rem;
          height: 52px;
          @media (min-width: 768px) {
            display: flex;
            font-size: 2rem;
          }
          @media (min-width: 1100px) {
            height: 92px;
            font-size: 3.75rem;
          }
        `
      case 'sm':
        return css`
          font-size: 1rem;
          font-weight: 300;
          padding: 0 0.7rem;
          height: 33px;

          @media (min-width: 768px) {
            font-size: 2.1875rem;
            font-weight: 400;
            padding: 1.4rem 0.8rem;
          }
        `
    }
  }}
  color: ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ $color }) => $color};
`