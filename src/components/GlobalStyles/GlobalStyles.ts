import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    
    * {
        box-sizing: border-box;
    }
    
    :root {
        font-family: 'Inconsolata', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
    
        color-scheme: light dark;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    
    body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
        line-height: 1.6;
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 15px;
        line-height: 1.25;
    }
    
    p {
        margin: 0 0 10px;
    }
    
    a {
        color: #007bff;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
`;

export default GlobalStyles;
