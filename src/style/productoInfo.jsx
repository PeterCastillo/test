import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductInfoContainer = styled.div`
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
    gap: 2rem;
    animation: load 600ms ease;
    max-width: 1200px;
    margin: auto;
    margin-top: 2rem;
    @keyframes load {
        0%{
            opacity: 0.2;
            transform: translateY(30px);
        }
    }
`

export const BtnAtras = styled(Link)`
    background-color: royalblue;
    border-radius: 1rem;
    max-width: 10rem;
    padding: 0.8rem 1.8rem;
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
`

export const ProductoDetails = styled.div`
    max-width: 1200px;
    display: flex;
    background-color: #f2f2f4;
    margin: auto;
    font-size: 1.2rem;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
`

export const ProductosImgs = styled.div`
    flex: 1 1 30rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const ProductoDetailsInfo = styled.div`
    flex: 1 1 30rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Nombre = styled.span`
    
`
export const Descripcion = styled.span`
    
`

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Catergory = styled.span`
`
export const ImgProducto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    filter:${props => props.state ? "grayscale(1)": ""};
`
export const ImgProductoCategory = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`
export const ProductoPrincipalImg = styled.div`
    max-width: 100%;
    max-height: 20rem;
`
export const ProductoSecondaryImgs = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
`
export const SecondaryImg = styled.div`
    flex: 1 1 20rem;
    height: 6rem;
`