import React from "react";
import "./navbar.css"




export default function Navbar(){

    function navegar(id){

        switch(id){
            case 1:
                window.location.href = "#aboutMe"
                deleteRouteLink()
            break;
    
            case 2:
                window.location.href = "#skills"
                deleteRouteLink()
            break;
    
            case 3:
                window.location.href = "#education"
                deleteRouteLink()
            break;
    
            case 4:
                window.location.href = "#projects"
                deleteRouteLink()
            break;
    
            case 5:
                window.location.href = "#contact"
                deleteRouteLink()
            break
    
            default:
            break;
    
            
        }
      }
      function deleteRouteLink(){
      if (window.location.hash) {
        history.replaceState({}, document.title, window.location.href.split('#')[0]);
    }}

return(

    <div id="navbar-body">

        <ul>
            <a onClick={()=>{navegar(1)}}><li>Sobre mi</li></a>
            <a onClick={()=>{navegar(4)}}><li>Proyectos</li></a>
            <a onClick={()=>{navegar(3)}}><li>Educacion</li></a>
            <a id="botonSkills" onClick={()=>{navegar(2)}}><li>Habilidades</li></a>
            <a onClick={()=>{navegar(5)}}><li>Contacto</li></a>  
        </ul>



    </div>
    
    

)

} 