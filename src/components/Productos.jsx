import { getProducts } from "../services/getProducts"
import Producto from "../components/Producto"
import { useInfiniteSrcoller } from "../hooks/useInfiniteSrcoller"
import { useState } from "react"
import { ProductosContainer } from "../style/producto"

const Productos = () => {
    const [ page , setPage ] = useState(1)
    useInfiniteSrcoller(page , setPage)
    const { productos } = getProducts()

    return (
        <ProductosContainer>
            {
                productos.length > 1 
                ?productos.map(item => (
                    <Producto key={item.id} info={item}/>
                    )).slice(0,page*20)
                : <></>
            }
        </ProductosContainer>
    )
}

export default Productos