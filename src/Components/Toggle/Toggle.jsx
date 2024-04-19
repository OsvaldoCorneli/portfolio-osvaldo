import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./toggle.css";


function Toggle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  window.addEventListener("orientationchange", function() {     
    const widthScreen = window.innerHeight

    if (window.orientation == 0) {
        if(widthScreen >= 760){
          handleClose()
        }
    } else{
      if(widthScreen >= 760){
        handleClose()
      }
    }
  });
    

  function onClickMenu(id){
    const cerrar = document.querySelector(".btn-close")
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
  cerrar.click()
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Osvaldo Matias Corneli Nassif</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
        <a onClick={() => onClickMenu(1)}><li>Sobre mi</li></a>
        <a onClick={() => onClickMenu(4)}><li>Proyectos</li></a>
        <a onClick={() => onClickMenu(3)}><li>Educacion</li></a>
        <a onClick={() => onClickMenu(2)}><li>Habilidades</li></a>
        <a onClick={() => onClickMenu(5)}><li>Contacto</li></a>   
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Toggle;
