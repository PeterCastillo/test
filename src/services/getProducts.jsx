import { useState } from "react"
import { useEffect } from "react"

export const getProducts = (id=0) => {

    const [ productos , setProductos ] = useState([])

    const getData = async() =>{
        const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id >= 1 ? id : ""}`)
        const res = await data.json()
        setProductos(res)
    }

    useEffect(()=> {
        getData()
    },[])

    return { productos }
}