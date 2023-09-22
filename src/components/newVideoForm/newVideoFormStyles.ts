import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

export const StyledNewVideoForm = styled.form`
  margin-top: 3.42rem;
`

export const StyledFormActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: unset;
  }
`

export const NewCategoryButton = styled(Button)`
  display: none;
  width: unset;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: 768px) {
    display: unset;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`