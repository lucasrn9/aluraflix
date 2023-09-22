import styled from 'styled-components'

export const StyledTable = styled.table`
  display: none;
  margin-top: 1.94rem;
  width: 100%;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: 4px solid ${({ theme }) => theme.colors.primaryMedium};
  border-collapse: collapse;
  @media (min-width: 1440px) {
    display: table;
  }
`
export const StyledTableHeading = styled.th`
  text-align: start;
  padding: 0 0.4rem;
  color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 4px solid ${({ theme }) => theme.colors.primaryMedium};
  border-collapse: collapse;
`
export const StyledTr = styled.tr``

export const StyledTd = styled.td<{ $center?: boolean; $clickable?: boolean }>`
  padding: 0.2rem 0.4rem;
  text-align: ${({ $center }) => ($center ? 'center' : 'start')};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'text')};
`