import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(

        <div>
<header className="nav_main">
    <nav className="nav">


<ul className="nav-menu nav-menu_visible">

<li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/bienvenida'>Principal</Link></li>
<li className="nav-menu-item"> <Link className="nav-menu-link nav-link" to="/register">Buscador de pokemon </Link> </li> 
    <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/about'>Conoce mas sobre los creadores</Link></li>
    
   

</ul>



    </nav>

    </header>


        </div>
    )
}

 export default Navbar
