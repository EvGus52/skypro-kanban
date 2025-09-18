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
    color: ${(props) => props.theme.colors.link};
  }

  button a,
  button a:visited {
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
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
    font-family: ${(props) => props.theme.fonts.family};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    
    /* Предотвращаем нежелательное поведение touch только во время drag */
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Предотвращаем выделение текста только во время drag and drop */
  .dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
  }
  
  /* Разрешаем выделение текста в инпутах и текстовых областях */
  input, textarea, [contenteditable] {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.background};
    position: relative;
    top: 0;
    left: 0;
  }

  .container {
    max-width: ${(props) => props.theme.sizes.maxWidth};
    width: 100%;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.sizes.padding};
  }

  .center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
  }

  /* Hover эффекты */

  ._hover02:hover,
  .header__user:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  ._hover02:hover::after,
  .header__user:hover::after {
    border-left-color: ${(props) => props.theme.colors.hoverPrimary};
    border-bottom-color: ${(props) => props.theme.colors.hoverPrimary};
  }

  ._hover03:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.hoverSecondary};
  }

  ._hover03:hover a {
    color: #FFFFFF;
  }

  ._active-category:active {
    opacity: 1;
  }


  ._light {
    display: ${(props) => props.theme.colors.logoDisplay};
  }

  ._dark {
    display: ${(props) => props.theme.colors.logoDarkDisplay};
  }







`;
