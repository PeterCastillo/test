import { useGeneralViewContext } from "../context/UserContext"
import { NavContainer, NavContent, NavStyle } from "../style/nav"

const Nav = () => {
    const { generalViewContextValue } = useGeneralViewContext()
    return (
        <NavContainer>
            <NavStyle>
                <NavContent>Usuario: <strong>{generalViewContextValue.userLogged}</strong></NavContent>
            </NavStyle>
        </NavContainer>
    )
}

export default Nav