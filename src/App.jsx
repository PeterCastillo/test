import Login from "./pages/Login"
import { getProducts } from "./services/getProducts"

function App() {

  getProducts()

  return (
    <Login/>
  )
}

export default App
