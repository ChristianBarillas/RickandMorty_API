
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Perfil from '../components/Perfil';
import SignIn from '../components/SignIn';
import SingUp from '../components/SignUp';
import Home from './Home';


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