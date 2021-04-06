import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --background: #FFFFFF;
    --asideBackground: #EDF1FA;
    
    --currentBalance: #607FCF;
    --income: #0AC683;
    --outcome: #FD7369;
  }
  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased; // Browsers que usam webkit, as fonts ficam mais nitidas
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;