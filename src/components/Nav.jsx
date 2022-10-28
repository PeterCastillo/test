import { useGeneralViewContext } from "../context/UserContext"

const Nav = () => {
    const { generalViewContextValue } = useGeneralViewContext()

    return (
        <div>
            <span>{generalViewContextValue.userLogged}</span>
        </div>
    )
}

export default Nav