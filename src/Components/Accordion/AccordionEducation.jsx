import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'
import './AccordionEducation.css'
import codigoFacilito from "../../../public/Logos-educacion/CodigoFacilito.jpg"
import desafioLatam from "../../../public/Logos-educacion/DesafioLatam.png"
import ticmas from "../../../public/Logos-educacion/Ticmas.jpg"
import linkedIn from "../../../public/Logos-educacion/LinkedIn.png"
function AccordionEducation() {
  return (
    <Accordion defaultActiveKey={['']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><img src={codigoFacilito} alt="" /> Codigo Facilito</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Curso de JavaScript y el DOM</li>
            <li>Curso profesional de Git</li>
            <li>Curso profesional de Typescript</li>
            <li>Curso de fundamentos de UX para programadores</li>
            <li>Curso profesional Vue 3</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><img src={desafioLatam} alt="" /> Desafio Latam</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Bases de GIT,GITHUB</li>
            <li>CSS Avanzado</li>
            <li>English for Developers & IT Professionals</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><img src={ticmas} alt="" /> Argentina Programa 4.0 / Ticmas</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Procesamiento de datos con Python</li>
            <li>Primeros pasos del desarrollo FrontEnd</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><img src={linkedIn} alt="" /> LinkedIn</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Fundamentos Esenciales de la programacion</li>
            <li>Introduccion a las habilidades profesionales en el desarrollo de software</li>
            <li>Fundamentos profesionales del desarrollo de software, por Microsoft y LinkedIn</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionEducation;