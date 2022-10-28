import styled from "styled-components";

export const NavContainer = styled.div`
    background-color:royalblue;
    animation: nv 1200ms ease;
    font-family: 'Poppins', sans-serif;
    @keyframes nv {
        0%{
            transform: translateY(-10px);
            opacity: 0.2;
        }
    }
`

export const NavContent = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
`
export const  NavStyle = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0.8rem 1rem;
`