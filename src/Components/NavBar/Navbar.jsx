import React from "react";
import "./navbar.css"




export default function Navbar(){

    function navegar(id){
        let destino = 0;
        switch(id){
            case 1:
                destino = document.getElementById("aboutMe").offsetTop;    
            break;
    
            case 2:
                destino = document.getElementById("skills").offsetTop;
            break;
    
            case 3:
                destino = document.getElementById("education").offsetTop;
            break;
    
            case 4:
              destino = document.getElementById("projects").offsetTop;            
            break;
    
            case 5:      
                destino = document.getElementById("contact").offsetTop;         
            break
    
            default:
            break;
    
            
        }
        window.scrollTo({
            top: destino,
            behavior: 'smooth'
        });

      }

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