import { Routes, Route, Link } from "react-router-dom";
import Privateroutes from "./components/privateroutes";
import { AuthProvider } from "./authcontext";

import Home from "./page/home";
import About from "./page/about";
import Login from "./page/login";
import Product from "./page/product";
import Contact from "./page/contact";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            backgroundColor: "navajowhite",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product"
            element={
              <Privateroutes>
                <Product />
              </Privateroutes>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
