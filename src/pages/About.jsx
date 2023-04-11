import React from 'react'
import christian from '../media/img2.webp'
import jared from '../media/img5.jpg'





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
                <img src="/src/media/images/Christian.png"/>
                <h2 id="nombre"> Christian Barillas </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12 </p>
            </div>
            <div class="col-lg-4">
                <img src="/src/media/images/Jared.png"/>
                <h2 id="nombre"> Jared Ramos </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12 </p>
            </div>
            <div class="col-lg-4">
                <img src="/src/media/images/Julissa.png"/>
                <h2 id="nombre"> Julissa Escalante </h2>
                <p>Estudiante del Bootcamp Full Stack Junior 12</p>



            </div>


        </div>
    </div>

    <footer id="about-footer">
        <p>© Copyright Grupo#3</p>
        <i class="fab fa-facebook icon"></i>
        <i class="fab fa-twitter icon"></i>
        <i class="fab fa-linkedin icon"></i>
    </footer>

                </div>
    )
}


export default About
