import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,::after,::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }
  :root{
    --secondary: #ffff;
    --font-color: #000;
    --primary: #fafafa;
    --detail-color: #7e7e7e;
    --option: #eeeeee;
    --not-exist: #d30303;
    --shadow: 0 0 5px 0px #0000005e;
  }
  .dark-mode{
    --borders-button: #7e7e7e;
    --option: #7c7b7b;
    --secondary: #2b3844;
    --font-color: #ffff;
    --primary: #202c36;
    
  }
  body{
    background-color: var(--primary);
    transition: background-color .2s;
    height: 100svh;
    height: 100vh;
  }
`