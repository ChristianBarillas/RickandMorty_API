import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'virtual:windi.css'



import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

<Auth0Provider domain='dev-76c84dvsac7hjyd3.us.auth0.com' clientId='lwfmGSJDfvWvtOPTLrfde9GIe1hlStba' redirectUri= {window.location.origin}>
    <App /> 
    </Auth0Provider>
  
  </React.StrictMode>,
)
