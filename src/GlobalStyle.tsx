import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
    min-width:320px ;
    background-color:${({ theme }) => theme.colors.blackDark} ;
}

* {
  box-sizing: border-box;
}
`
export default GlobalStyle
