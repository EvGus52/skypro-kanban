import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    background-color: #f1f1f1;
  }

  .center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
  }

  /* Hover эффекты */
  ._hover01:hover {
    background-color: #33399b;
  }

  ._hover02:hover,
  .header__user:hover {
    color: #33399b;
  }

  ._hover02:hover::after,
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }

  ._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  ._hover03:hover a {
    color: #ffffff;
  }



  ._active-category {
    opacity: 1 !important;
  }
`;
