import { useState } from "react"
import { Btn, ImageProduct, Img, NewImg, ProductDetail, ProductName, ProductoImg, ProductoInfo, ProductoStyle } from "../style/producto"

const Producto = ({info}) => {
    const [ img , setImg ] = useState(0)

    const handleImg = (imgIndex) => {
        setImg(imgIndex)
    }

    return (
        <ProductoStyle>
            <ProductoImg>
                <Img src={info.images[img]} alt="" />
                <ImageProduct>
                {
                    info.images.map((item,index)  => (
                        <NewImg onClick={()=> handleImg(index)} key={info.images.indexOf(item)}></NewImg>
                    ))
                }
                </ImageProduct>
            </ProductoImg>
            <ProductoInfo>
                <ProductName>{info.title}</ProductName>
                <ProductDetail>Category: <strong>{info.category.name}</strong></ProductDetail>
                <ProductDetail>Precio: <strong>${info.price}</strong></ProductDetail>
                <Btn to={`/home/productoDetalles/${info.id}`}>Mas informacion</Btn>
            </ProductoInfo>
        </ProductoStyle>
    )
}

export default Producto