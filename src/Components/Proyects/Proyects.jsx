import React from "react";
import data from "../../data/proyectos.json"
import CardsProyects from "../CardProyects/CardsProyects";
import creva from "../../../public/Proyectos/Creva.png"
import pi from "../../../public/Proyectos/PIdrivers.png"
import ltdm from "../../../public/Proyectos/LaTiendaDeMaria.png"
import rym from "../../../public/Proyectos/RyckandMorty.png"
import pffe from "../../../public/Proyectos/Entregafrontend.png"
import portfolio from "../../../public/Proyectos/Portfolio.png"
import "./proyects.css"

export default function Proyects(){


return(

    <div id="proyects-body">
        
            <CardsProyects info={data[0]} img={portfolio}/>
            <CardsProyects info={data[1]} img={ltdm}/>
            <CardsProyects info={data[2]} img={creva}/>
            <CardsProyects info={data[3]} img={pi}/>
            <CardsProyects info={data[4]} img={rym}/>
            <CardsProyects info={data[5]} img={pffe}/>

    </div>



)





}