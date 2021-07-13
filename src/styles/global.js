import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Dosis", sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 50px white inset;
  -webkit-text-fill-color: #333;
}
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 50px white inset;
  -webkit-text-fill-color: #333;
}
`;
