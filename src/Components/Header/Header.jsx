import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import logoNode from "../../../public/img/fi-cnsuxl-nodejs.png"
import Toggle from "../Toggle/Toggle";
export default function Header(){


    

return(


<div id="header-body">
<div id="burger-menu">
    <Toggle/>
</div>
 <div id="tittle"> 
    <h1>Osvaldo Matias Corneli Nassif</h1>
    <h2>Full Stack Developer</h2>
    <img src={logoNode} alt="" />
</div>
<div id="icons">
    <ul>
        <li><a href="https://www.linkedin.com/in/osvaldo-corneli-nassif-822728268/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://github.com/OsvaldoCorneli" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>
    </ul> 
</div>  


</div>



)



}