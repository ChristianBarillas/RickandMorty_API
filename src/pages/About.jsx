import React from 'react'
import christian from '../media/img2.webp'
import jared from '../media/img5.jpg'





const About = () =>{

    return(

        <div>

        
                    <div className ="container-about">
         
         <div align = "center">
        
            <header id="header-contact"> 
        
                <h4> <strong>PokeSearch</strong> was created for </h4> 
        
        <div className='flex-container'>
            <div className='flex-item'>
            <img src= {christian} alt="JavascriptIcon" height="50px" width= "75px" />
            <caption> Christian</caption>
            </div>
            
            <div className='flex-item'>  
        <img src = {jared} alt ="pythonIcon" height="50px" width ="55px"/>
        <caption>Jared</caption>
        
         </div>
      
      

        </div>
         
            
                    
            </header>
        
        
            <div >
        
        <h5>Extra</h5>
        
        <p>Agradecimientos.</p>

        
        
        </div>
        
        
    
        

       
        
            </div>
        
        
   
        
        
        </div>
        
                </div>
    )
}


export default About
