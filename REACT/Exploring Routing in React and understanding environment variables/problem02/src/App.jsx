import Home from './component/home'
import Product from './component/product'
import About from './component/about'
import Contact from './component/contact'
import Pagenotfound from './component/pagenotfound'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'

function App() {


  const allcomponent = [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/*",
      element:<Pagenotfound/>
    },
  ]


  return (
    <>
    <nav style={{display:"flex", justifyContent:"space-around", padding:"10px", backgroundColor:"aqua"}}>
      <Link to="/" >Home</Link>
      <Link to="/product" >Product</Link>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
     
    </nav>
     <Routes>
      {
        allcomponent.map((ele)=>{return(<Route path={ele.path} element={ele.element} />)})
      }
     </Routes>
    </>
  )
}

export default App
