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
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background-image: url("https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg");
        background-size: cover;
        @media all and (min-width: 320px) and (max-width: 500px) {
            font-size: 1rem;
        }        
    }
`;

export default GlobalStyle;
