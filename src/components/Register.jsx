
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Perfil from './Perfil';
import SignIn from './SignIn';
import SingUp from './SignUp';
import Home from '../pages/Home';


const Register = () => {
    const {isAuthenticated} = useAuth0();
   
    return (



        <div className="style_login-bg"> 


{isAuthenticated ? <>


<Perfil/>
<SingUp/> 
<Home/>

</> : <SignIn/>   
       

}


</div>





    )

}

export default Register