import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import About from "../pages/About";

import Login from "../pages/Login";
import Register from "../pages/Register";




const Dashboard = () => {


    return(
        <div>

<BrowserRouter>
<Navbar/>

<Routes>
  

  <Route path="/login" element={<Login/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path = '/register' element = {<Register/>}/>


  
</Routes>

</BrowserRouter>



        </div>
    )
}

export default Dashboard


