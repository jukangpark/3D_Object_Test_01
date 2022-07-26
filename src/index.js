import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
