import QuantityProvider from "./context/QuantityContext"

import Header from "./components/header/Header"
import Product from "./components/product/Product"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <QuantityProvider>
        <Header />
        <Product />
      </QuantityProvider>
    </div>
  )
}

export default App
