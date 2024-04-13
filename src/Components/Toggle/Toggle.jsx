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

  function onClickMenu(id){
    const cerrar = document.querySelector(".btn-close")
    switch(id){
        case 1:
            window.location.href = "#aboutMe"
            cerrar.click()
        break;

        case 2:
            window.location.href = "#skills"
            cerrar.click()
        break;

        case 3:
            window.location.href = "#education"
            cerrar.click()
        break;

        case 4:
            window.location.href = "#projects"
            cerrar.click()
        break;

        case 5:
            console.log("5")
        break

        default:
        break;

        
    }
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
        <li><a onClick={() => onClickMenu(1)}>Sobre mi</a></li>
        <li><a onClick={() => onClickMenu(2)}>Habilidades</a></li>
        <li><a onClick={() => onClickMenu(3)}>Educacion</a></li>
        <li><a onClick={() => onClickMenu(4)}>Proyectos</a></li>
        <li><a onClick={() => onClickMenu(5)}>Contacto</a></li>   
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Toggle;
