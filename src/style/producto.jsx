import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductosContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    Display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem,1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
`

export const ProductoStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: royalblue;
    align-items: center;
    color: white;
    padding: 0.2rem;
    border-radius: 0.5rem;
    animation: position 1200ms ease;
    @keyframes position {
        0%{
            transform: translateY(10px);
            opacity: 0.2;
        }
    }
`
export const ProductoImg = styled.div`
    width: 100%;
    height: 8rem;
    position: relative;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    animation: apper 1s ease;
    @keyframes apper {
        0%{
            opacity: 0;
        }
    }
`

export const ProductoInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0rem 0rem 0rem;
    justify-content: space-between;
    height: 8rem;
`

export const Btn  = styled(Link)`
    width: 100%;
    cursor: pointer;
    padding: 0.2rem 0rem;
    background-color: white;
    text-align: center;
    text-decoration: none;
    color: royalblue;
    border-radius: 0.5rem;
    font-weight: bold;
`

export const ProductName = styled.span`
    align-self: center;
    font-weight: bold;
    text-align: center;
`
export const ProductDetail = styled.span`
    padding-left: 0.5rem;
`

export const ImageProduct = styled.div`
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    position: absolute;
    bottom: 0.5rem;
    justify-content: center;
    gap: 0.3rem;
`

export const NewImg = styled.div`
    width: 0.7rem;
    height: 0.7rem;
    background: linear-gradient(rgba(5, 7, 12, 0.4),rgba(5, 7, 12, 0.4));
    border-radius: 50%;
    transition: 200ms ease;
    &:hover {
        width: 1rem;
        height: 1rem;
    }
`