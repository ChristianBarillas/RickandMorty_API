import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const SignIn = ()=> {
    
    const {loginWithRedirect} = useAuth0();
    
    return (
        
        
        
        
        <div className="style_login">
    
    <button onClick={() => { loginWithRedirect() }} class="btn btn-success btn-lg "> <i class="fas fa-user-alt"></i>Iniciar sesion </button>
    <p>Debes iniciar sesion para realizar busquedas de pokemones!</p>


 



</div>

    







    )


}


export default SignIn