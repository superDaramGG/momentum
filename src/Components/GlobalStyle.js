import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 1rem;
        color:#fff;
        font-size: 3rem;
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background-image: url("https://cdn.pixabay.com/photo/2018/02/04/17/11/venice-3130323_1280.jpg");
        background-size: cover;
    }
`;

export default GlobalStyle;
