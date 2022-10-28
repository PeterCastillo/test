import { useGeneralViewContext } from "../context/UserContext"
import { NavContainer, NavContent } from "../style/nav"

const Nav = () => {
    const { generalViewContextValue } = useGeneralViewContext()

    return (
        <NavContainer>
            <NavContent>{generalViewContextValue.userLogged}</NavContent>
        </NavContainer>
    )
}

export default Nav