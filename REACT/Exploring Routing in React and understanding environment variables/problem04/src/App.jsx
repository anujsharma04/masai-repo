import { useState } from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Home from "./page/home";
import Product from "./page/product";
import ProductDetail from "./page/productdetail";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <BrowserRouter>
  
<nav style={{display:"flex", justifyContent:"space-around" , padding:"10px", backgroundColor:"aquamarine"}}>
  <Link to="/">Home</Link>
  <Link to="/product">Product</Link>
  <Link to="/productdetail">Product Detail</Link>
</nav>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productdetail" element={<ProductDetail/>}/>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
