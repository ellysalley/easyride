import reset from "styled-reset";
import { injectGlobal } from "./typed-components";

// tslint:disable-next-line
injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration:none;
  }
  input,
  button{
    &:focus,
    &:active{outline:none}
  }
`;