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

  html, body {
    height: auto;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
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

  .btn {
    padding: 0 15px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;
  }

  .btn--primary {
    background: ${colors.primary};

    &:hover {
      background: ${darken(0.03, colors.primary)};
    }
  }

  .btn--secondary {
    background: ${colors.secondary};

    &:hover {
      background: ${darken(0.03, colors.secondary)};
    }
  }

  .btn--icon {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      max-width: 100%;
      padding-top: 15px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
