import styled from 'styled-components'

export const StyledEditCategoryForm = styled.form<{ $visibility: boolean }>`
  width: 100%;
  max-width: 960px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: ${({ theme }) => theme.colors.blackMedium};
  padding-top: 3rem;
  padding-bottom: 2.2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 4px;
  box-shadow: #00000099 1px 1px 8px 1px;
  display: ${({ $visibility }) => ($visibility ? 'block' : 'none')};
`

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 2px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1rem;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`
export const StyledCloseBtnIcon = styled.img`
  width: 24px;
  height: 24px;
`