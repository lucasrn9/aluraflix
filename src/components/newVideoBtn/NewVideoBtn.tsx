import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewVideoBtn = styled(Link)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  height: 3.375rem;
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primaryMedium};
  @media (min-width: 768px) {
    display: none;
  }
`

export default NewVideoBtn
