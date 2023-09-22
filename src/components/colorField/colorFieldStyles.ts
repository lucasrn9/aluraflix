import styled from 'styled-components'

export const StyledColorField = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 0.25rem;
  margin-bottom: 2.45rem;
  color: ${({ theme }) => theme.colors.grayDark};
  background-color: ${({ theme }) => theme.colors.grayMedium};
  @media (min-width: 768px) {
    padding: 0rem 0.5rem;
  }
`
export const StyledColorLabel = styled.label`
  margin-left: 0.1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
export const StyledColorInput = styled.input.attrs({ type: 'color' })`
  width: 100%;
  height: 1.3rem;
  border: none;
  background-color: transparent;
  padding-top: 0;
  &::-webkit-color-swatch-wrapper {
    border-radius: 0.25rem;
    padding: 0;
    margin: 0;
  }
  &::-webkit-color-swatch {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0.25rem;
  }
`