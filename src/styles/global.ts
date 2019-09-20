import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  button.btn {
    padding: 0 15px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;
  }

  button.btn--primary {
    background: ${colors.primary};

    &:hover {
      background: ${darken(0.03, colors.primary)};
    }
  }
`;
