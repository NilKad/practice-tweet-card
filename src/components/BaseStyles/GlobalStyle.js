import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body, html, #root {
height: 100%;
}

body{
margin: 0;
font-family: 'Montserrat', sans-serif;
line-height: 1.2;
}

h1,h2,h3,h4,h5,h6,p{
padding: 0;
margin: 0;
}

ul{
padding: 0;
margin: 0;
list-style: none;
}

img{
display:block;
max-width: 100%;
height: auto;
}

a{
text-decoration: none;
color: inherit;
}
`;
