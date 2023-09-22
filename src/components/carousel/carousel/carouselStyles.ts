import styled, { css } from "styled-components"

export const StyledCarousel = styled.div<{ $bannerActive: boolean }>`
  width: 100%;
  margin-bottom: 1.55rem;
  ${({ $bannerActive }) =>
    $bannerActive
      ? css`
          @media (min-width: 968px) {
            display: none;
          }
        `
      : css``}
`
export const StyledCarouselHeaders = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.31rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`
export const StyledDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.31rem;
  color: ${({ theme }) => theme.colors.grayLight};
  @media (min-width: 768px) {
    margin-left: 0.68rem;
    font-size: 1.125rem;
  }
`