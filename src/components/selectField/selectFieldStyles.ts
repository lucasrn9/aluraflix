import styled from 'styled-components'

export const StyledSelect = styled.select`
  width: 100%;
  height: 38px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 0.25rem;
  border: none;
  margin-bottom: 2.45rem;
  color: ${({ theme }) => theme.colors.grayDark};
  background-color: ${({ theme }) => theme.colors.grayMedium};
`
export const StyledOption = styled.option`
  &:first-child {
    display: none;
  }
`