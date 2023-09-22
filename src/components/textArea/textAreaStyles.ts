import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.58rem 0.1rem;
  height: 119.519px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  resize: none;
  margin-bottom: 2.45rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${({ theme }) => theme.colors.grayDark};
  }
  @media (min-width: 768px) {
    padding: 0.58rem 0.5rem;
  }
`