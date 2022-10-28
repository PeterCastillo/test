import { useState } from "react"
import { useParams } from "react-router"
import { userAuth } from "../hooks/userAuth"
import { getProducts } from "../services/getProducts"
import { BtnAtras, CategoryContainer, Catergory, Descripcion, ImgProducto, ImgProductoCategory, Nombre, ProductInfoContainer, ProductoDetails, ProductoDetailsInfo, ProductoPrincipalImg, ProductoSecondaryImgs, ProductosImgs, SecondaryImg } from "../style/productoInfo"

const ProductoInfo = () => {

    let params = useParams()
    const { productos } = getProducts(params.id)
    const [ imgIndex , setImgIndex ] = useState(0)
    userAuth()

    const handleImg = (index) => {
        setImgIndex(index)
    }

    return (
        <>
            {
                productos.hasOwnProperty("id") 
                ?<ProductInfoContainer>
                    <BtnAtras to={"/home"}> ← Atras</BtnAtras>
                    <ProductoDetails>
                        <ProductosImgs>
                            <ProductoPrincipalImg><ImgProducto src={productos.images[imgIndex]} alt="" /></ProductoPrincipalImg>
                            <ProductoSecondaryImgs>
                                {
                                    productos.images.map((item,index) =>(
                                        <SecondaryImg key={index}><ImgProducto onClick={()=>handleImg(index)} state={index == imgIndex} src={item} alt="" /></SecondaryImg>
                                    ))
                                }
                            </ProductoSecondaryImgs>
                        </ProductosImgs>
                        <ProductoDetailsInfo>
                            <Nombre><strong>Nombre:</strong> {productos.title}</Nombre>
                            <Descripcion><strong>Descripcion:</strong> {productos.description}</Descripcion>
                            <CategoryContainer>
                                <Catergory><strong>Categoria:</strong> {productos.category.name}</Catergory><ImgProductoCategory src={productos.category.image} alt="" />
                            </CategoryContainer>
                            <span><strong>Precio:</strong> ${productos.price}</span>
                        </ProductoDetailsInfo>
                    </ProductoDetails>
                </ProductInfoContainer>
                :<></>
            }
        </>
    )
}

export default ProductoInfo