import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
    }

    #root {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
`;
