import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useGeneralViewContext } from "../context/UserContext"

export const userAuth = () => {
    let Navigate = useNavigate()
    const { generalViewContextValue } = useGeneralViewContext()

    useEffect(()=>{
        if(generalViewContextValue.userLogged == "" | generalViewContextValue.passwordLogged == ""){
            Navigate("/")
        }
    },[])

}