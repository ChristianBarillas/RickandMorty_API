import React from 'react'
import christian from '../assets/media/images/Christian.png'
import jared from '../assets/media/images/Jared.png'
import julissa from '../assets/media/images/Julissa.png'






const About = () =>{

    return(

        <div>

<section id="title">
        <h1>
            Academia Kodigo <br/>
            Grupo #3
        </h1>



    </section>

    <div class="info-container">
        <div class="row">
            <div class="col-lg-4">
                <img src={christian}/>
                <h2 id="nombre"> Christian Barillas </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12 </p>
            </div>
            <div class="col-lg-4">
                <img src={jared}/>
                <h2 id="nombre"> Jared Ramos </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12 </p>
            </div>
            <div class="col-lg-4">
                <img src={julissa}/>
                <h2 id="nombre"> Julissa Escalante </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12</p>



            </div>


        </div>
    </div>

    <footer id="about-footer">
        <p>© Copyright Grupo#3</p>

       
    </footer>

                </div>
    )
}


export default About
