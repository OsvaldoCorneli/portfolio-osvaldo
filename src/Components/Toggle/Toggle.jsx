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
    switch(id){
        case 1:
            window.location.href = "#aboutMe"
            cerrar.click()
            deleteRouteLink()
        break;

        case 2:
            window.location.href = "#skills"
            cerrar.click()
            deleteRouteLink()
        break;

        case 3:
            window.location.href = "#education"
            cerrar.click()
            deleteRouteLink()
        break;

        case 4:
            window.location.href = "#projects"
            cerrar.click()
            deleteRouteLink()
        break;

        case 5:
        window.location.href = "#contact"
        cerrar.click()
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
        <a onClick={() => onClickMenu(2)}><li>Habilidades</li></a>
        <a onClick={() => onClickMenu(3)}><li>Educacion</li></a>
        <a onClick={() => onClickMenu(4)}><li>Proyectos</li></a>
        <a onClick={() => onClickMenu(5)}><li>Contacto</li></a>   
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Toggle;
