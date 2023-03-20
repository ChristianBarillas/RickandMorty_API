import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(

        <div>
<header className="nav_main">
    <nav className="nav">


<ul className="nav-menu nav-menu_visible">

    <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/home'>Home</Link></li>
    <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/login'>Login</Link></li>
    <li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/about'>About</Link></li>

</ul>



    </nav>

    </header>


        </div>
    )
}

 export default Navbar
