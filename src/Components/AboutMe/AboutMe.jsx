import React from "react";
import "./AboutMe.css";
import avatar from "../../../public/Perfil/Avatar.jpg"


export default function AboutMe(){


    return(
        <div id="aboutme-body">
            <div id="contenedor1">
                <div id="imagen">
                    <img src={avatar} alt="Avatar Perfil" />
                </div>
                <div id="text">
                     <p>
                    ¡Hola! Soy Osvaldo Matías Corneli Nassif, 
            un desarrollador full stack junior con experiencia en 
            proyectos grupales e individuales. Mi enfoque principal es
             JavaScript, tanto en el front-end como en el back-end,
              con Node.js y Express.js. Destaco por mi capacidad para 
              encontrar soluciones creativas y mi experiencia con
               metodologías ágiles como GitFlow y Scrum. Me encanta
                aprender y mantenerme actualizado con las últimas 
                tendencias. Fuera del trabajo, disfruto viajar, 
                salir a comer y hacer actividades al aire libre. 
                ¡Emocionado por contribuir a proyectos innovadores!
                <br /><br />


            ¡Gracias por visitar mi portfolio!
            </p>
            </div>
            </div>
        </div>
    )
}