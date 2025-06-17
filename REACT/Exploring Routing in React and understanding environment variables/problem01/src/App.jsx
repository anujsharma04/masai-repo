import "./App.css";
import Home from "./component/home";
import Login from "./component/login";
import User from "./component/User";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  const allcomponent = [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/User",
      element:<User/>
    }
  ]


  return <>

  <nav className="navbar_container">
    <Link to="/" >Home</Link>
    <Link to="/login" >Login</Link>
    <Link to="/user" >User</Link>
  </nav>


    {/* <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/User"  element={<User/>} />
    </Routes> */}
    <Routes>
      {allcomponent.map((ele)=> { return(<Route path={ele.path} element={ele.element} />)})}
    </Routes>
    
  </>;
}

export default App;
