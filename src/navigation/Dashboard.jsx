import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";



const Dashboard = () => {


    return(
        <div>

<BrowserRouter>
<Navbar/>

<Routes>
  
  <Route path="/home" element={<Home/>} />
  <Route path="/login" element={<Login/>}/>
  <Route path="/about" element={<About/>}/>

  
</Routes>

</BrowserRouter>



        </div>
    )
}

export default Dashboard


