import styled from 'styled-components'

export const StyledVideoCard = styled.div<{ $borderColor: string }>`
  width: 291px;
  height: 172.264px;
  border-radius: 4px;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  @media (min-width: 768px) {
    width: 432px;
    height: 260.85px;
  }
`
export const StyledVideoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StyledVideoLink = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
`
