import styled from "styled-components";

export const LoginContainer = styled.div`
  background: #667db6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoginFont = styled.div`
    background-color: white;
    padding: 0.15rem;
    border-radius: 0.5rem;
    display: flex;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    box-shadow: 0px 0px 5x 0px rgba(255,255,255,1);
`

export const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    justify-content: center;
    color: white;
    background-color: royalblue;
    max-height: 13rem;
    border-radius: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
`
export const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label{
        font-weight: bold;
    }
    input {
        padding: 0.3rem;
    }
`

export const LoginBtn = styled.button`
    color: royalblue;
    font-weight: bold;
    padding: 0.3rem;
    background-color: white;
    border: none;
    cursor: pointer;
`