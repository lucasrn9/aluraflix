import styled from 'styled-components'

const PageTitle = styled.h1`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.colors.grayLight};
`

export default PageTitle
