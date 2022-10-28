import { useNavigate } from "react-router"
import { useGeneralViewContext } from "../context/UserContext"
import { useForm } from "../hooks/useForm"
import { LoginBtn, LoginContainer, LoginFont, LoginInput, LoginStyle } from "../style/login"

const users = [
    {
        user: "peter",
        password: "castillo"
    }
]

const Login = () => {

    const { setGeneralViewContextValue } = useGeneralViewContext()
    const Navigate = useNavigate()

    const [ inputs , handleChange ] = useForm({
        user: "",
        password: ""
    })

    const { user , password } = inputs



    const SearchUser = () => {
        const user = users.find(item => item.user == inputs.user && item.password==inputs.password)
        if(!user){
            return 
        } else {
            setUser()
        }
    }

    const setUser = () => {
            setGeneralViewContextValue((old)=>(
                {
                    ...old,
                    userLogged: user,
                    passwordLogged: password
                }
            ))
        Navigate("/home")
    }

    const handleLogin = () => {
        if(user != "" && password != ""){
            SearchUser()
        }
    }

    return (
        <LoginContainer>
            <LoginFont>
                <LoginStyle>
                    <LoginInput>
                        <label>Usuario:</label>
                        <input 
                            type="text" 
                            value={user}
                            name="user"
                            onChange={handleChange}
                            placeholder="Ingrese su usuario"
                            required
                        />
                    </LoginInput>
                    <LoginInput>
                        <label>Constraseña:</label>
                        <input 
                            type="password" 
                            value={password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </LoginInput>
                    <LoginBtn onClick={handleLogin}>Ingresar</LoginBtn>
                </LoginStyle>
            </LoginFont>
        </LoginContainer>
    )
}

export default Login