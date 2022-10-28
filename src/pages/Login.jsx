import { useNavigate } from "react-router"
import { useGeneralViewContext } from "../context/UserContext"
import { useForm } from "../hooks/useForm"

const Login = () => {

    const { setGeneralViewContextValue } = useGeneralViewContext()
    const Navigate = useNavigate()

    const [ inputs , handleChange ] = useForm({
        user: "",
        password: ""
    })

    const { user , password } = inputs

    const handleLogin = () => {
        setGeneralViewContextValue((old)=>(
            {
                ...old,
                userLogged: user,
                passwordLogged: password
            }
        ))
        Navigate("/ProductosUser")
    }

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    value={user}
                    name="user"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                 <button onClick={handleLogin}>Logear</button>
            </div>
        </div>
    )
}

export default Login