import { useState } from 'react'
import Intro from "./components/intro/intro"
import About from './components/about/About'
import ProductList from './components/product/ProductList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Intro />
   <About />
   <ProductList />
   </>
  )
}

export default App
