import { createGlobalStyle } from "styled-components";
import RobotoWoff from "./roboto-v20-latin-regular.woff";
import RobotoWoff2 from "./roboto-v20-latin-regular.woff2";
import RobotoRegular from "./Roboto-Regular.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), local('Roboto'),
        url(${RobotoWoff2}) format('woff2'),
        url(${RobotoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
  }
`;
