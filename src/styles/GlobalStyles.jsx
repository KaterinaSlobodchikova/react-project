import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    button {
        padding: 10px;
    }

    @font-face {
        font-family: Inter;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    }
`;

export default GlobalStyles;