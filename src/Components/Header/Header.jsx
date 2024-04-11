import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope,faBars } from '@fortawesome/free-solid-svg-icons'
import '../../../public/fi-cnsuxl-nodejs.png';
export default function Header(){

return(


<div id="header-body">
<div id="burger-menu">
    <a><FontAwesomeIcon icon={faBars} /></a>
</div>
 <div id="tittle"> 
    <h1>Osvaldo Matias Corneli Nassif</h1>
    <h2>Full Stack Developer</h2>
    <img src='../../../public/fi-cnsuxl-nodejs.png' alt="" />
</div>
<div id="icons">
    <ul>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>
    </ul> 
</div>  


</div>



)



}