import React from "react";
import Card from "../Card/Card";
import "./education.css"
import data from "../../data/education.json"
import digital from '../../../public/Logos-educacion/DH.png'
import henry from '../../../public/Logos-educacion/descarga.jpg'
import CaC from '../../../public/Logos-educacion/CodoaCodo.png'
import AP from '../../../public/Logos-educacion/Argentinaprograma.png'
import AccordionEducation from "../Accordion/AccordionEducation";

export default function Education(){


    return(
        <div id="education-body">
            <div id="contenedor1-Educationbody">
            <h5>Bootcamps</h5>
            <div id="cartas-educacion">
            <Card info={data[0]} imagen={CaC}/>
            <Card info={data[1]} imagen={digital}/>
            <Card info={data[2]} imagen={henry}/>
            <Card info={data[3]} imagen={AP}/>
            </div>
            </div>
            <div id="contenedor2-Educationbody">
            <h5>Cursos cortos</h5>
            <div id="acordion">
             <AccordionEducation/>
            </div>
            </div>
           
             
           
        </div>
    )




}