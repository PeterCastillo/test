import styled from "styled-components";

export const ProductosContainer = styled.div`
    Display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem,1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: auto;
`

export const ProductoStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: royalblue;
    align-items: center;
    color: white;
    padding: 0.2rem;
    border-radius: 0.5rem;
`
export const ProductoImg = styled.div`
    width: 100%;
    height: 8rem;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`

export const ProductoInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`