import { StyledContainer, StyledWrapper } from './containerStyles'

interface containerProps {
  children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: containerProps) => {
  return (
    <StyledContainer>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  )
}

export default Container
