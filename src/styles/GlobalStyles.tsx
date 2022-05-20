import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

    body {
		font-family: Inter, sans-serif;
		margin: 0;
	}

	button {
		border: none;
		cursor: pointer;
	}
`;
