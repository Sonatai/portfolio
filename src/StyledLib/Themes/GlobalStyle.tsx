import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, button, input {
    
}

html {
  font-size:'16px';
}

*,
*:before,
*:after {
    
}

html, body {
 
}

body {
    background-color:${(p) => p.theme.colors.background.main};
    color:${(p) => p.theme.colors.fonts.main}
}

header {
    
}

a {
   
}

ul {
    
}
`;

export default GlobalStyle;
