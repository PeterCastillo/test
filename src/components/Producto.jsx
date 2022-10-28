import { Img, ProductoImg, ProductoInfo, ProductoStyle } from "../style/producto"

const Producto = ({info}) => {
    return (
        <ProductoStyle>
            <ProductoImg><Img src={info.images[0]} alt="" /></ProductoImg>
            <ProductoInfo>
                <span>{info.title}</span>
                <span>{info.category.name}</span>
                <span>${info.price}</span>
            </ProductoInfo>
        </ProductoStyle>
    )
}

export default Producto