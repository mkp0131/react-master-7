import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  img,
  svg {
    width: 100%;
    vertical-align: top;
  }
  img {
    pointer-events: none;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button {
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    cursor: pointer;
  }
  input {
    -webkit-appearance: none; // 안쪽으로 생기는 그림자 제거
    -webkit-border-radius: 0; // 둥근 모서리 제거
    border: 1px solid #000;
    outline: none;
    height: 100%;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
