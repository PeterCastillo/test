import { getProducts } from "../services/getProducts"
import Producto from "../components/Producto"

const Productos = () => {
    const { productos } = getProducts()
    console.log(productos)

    return (
        <div>
            {
                productos.length > 1 
                ?productos.map(item => (
                    <Producto info={item}/>
                    ))
                : <></>
            }
        </div>
    )
}

export default Productos