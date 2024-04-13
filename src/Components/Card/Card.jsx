import React from "react";
import "./card.css"
export default function Card({info, imagen}){

return(
    <div id="card-body">
     <div>
        <h2>{info.name}</h2>
        <h4>{info.curso}</h4>
        <h6>{info.time}</h6>
    </div>
        <img src={imagen}alt="" />
    </div>
)

}