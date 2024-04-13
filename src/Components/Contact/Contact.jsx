import React from "react";
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
 

export default function Contact(){



return(
    <div id="contact-body">

        <h5>¿Tienes un proyecto en mente?</h5>
        <h5>¡Construyamos algo juntos!</h5>
        <h6>Contactame</h6>

        <div id="icons-contact">
    <ul>
        <li><a href="https://www.linkedin.com/in/osvaldo-corneli-nassif-822728268/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>
    </ul> 

    <a href="../../../public/CVs/CorneliOsvaldoCV.pdf" download="CorneliOsvaldoCV.pdf" className="buttonCv">Descargar Currículum en Español</a><br />
    <a href="../../../public/CVs/OsvaldoCorneliResume.pdf" download="OsvaldoCorneliResume.pdf" className="buttonCv">Download English Resume</a>
</div>  

</div>
)



}