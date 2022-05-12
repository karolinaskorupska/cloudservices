import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&family=Quicksand:wght@300;400&family=Zen+Maru+Gothic:wght@300&display=swap');

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
}

button, a {
    font-family: 'Arial', sans-serif;
}
`;
