import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
import { rem } from "../utilities/functions";
import { Link } from "react-router-dom";

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const GlobalStyles = createGlobalStyle`
    html{
        font-size:100%;
    }
    *,*::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    } 

    body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: "hato sans", sans-serif;
    }

    #root {
        width: 100%;
        min-height: 100vh;
        background-color: #ffffff;
    }

    main{
        ${flex}
        width: 100%;
        height: 100vh;
    }
    p{
        font-weight: 400;
        line-height: ${rem(21.79)};
        color: #333333;
        letter-spacing: 0.8px;
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f80ed;
`;
