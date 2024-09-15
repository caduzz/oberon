import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    -webkit-user-select: none;
    user-select: none;
    outline: none;

    ::-webkit-scrollbar {
      width: 7px;
      height: 6px;
      background-color: rgba(255,255,255,.2);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255,255,255,.3);
    }

  }
  
  body {
    width: 100%;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button {
    :focus {
      outline: .01rem solid #ddd;
    }
  }

  #root {
    height: 100vh;
  }
`;
