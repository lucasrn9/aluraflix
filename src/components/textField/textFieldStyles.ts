import styled, { css } from 'styled-components'

export const StyledTextField = styled.div`
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
`
export const StyledLabel = styled.label<{ $withPlaceholder?: boolean }>`
  margin-left: 0.1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  ${({ $withPlaceholder }) =>
    $withPlaceholder
      ? css`
          display: none;
        `
      : css``}
  @media (min-width: 768px) {
    padding: 0 0.5rem;
  }
`
export const StyledInput = styled.input<{ $withPlaceholder: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
  background-color: transparent;
  border: none;
  height: 18px;
  resize: none;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${({ theme }) => theme.colors.grayDark};
    background-color: ${({ theme }) => theme.colors.grayMedium};
  }
  ${({ $withPlaceholder }) => {
    return $withPlaceholder
      ? css`
          padding: 0.78rem 0.1rem;
          height: unset;
          @media (min-width: 768px) {
            padding: 0.78rem 0.5rem;
          }
        `
      : css``
  }}
`