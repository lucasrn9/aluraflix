import styled, { css } from 'styled-components'

const StyledTextField = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.grayDark};
  background-color: ${({ theme }) => theme.colors.grayMedium};
`
const StyledLabel = styled.label`
  margin-left: 0.1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
const StyledInput = styled.input<{ $withPlaceholder: boolean }>`
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
          padding: 0.58rem 0.1rem;
          height: unset;
        `
      : css``
  }}
`

interface textFieldProps {
  id?: string
  placeholder?: string
  label?: string
}

const TextField = ({
  id = '',
  placeholder = '',
  label = '',
}: textFieldProps) => {
  return (
    <StyledTextField>
      <StyledLabel htmlFor="">{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        $withPlaceholder={!!placeholder}
      />
    </StyledTextField>
  )
}

export default TextField
