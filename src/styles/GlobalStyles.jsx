import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		-webkit-box-sizing: inherit;
		-moz-box-sizing: inherit;
		box-sizing: inherit;
	}

    body {
		font-family: Inter, sans-serif;
	}

	button {
		border: none;
		cursor: pointer;
	}
`;

export default GlobalStyles;
