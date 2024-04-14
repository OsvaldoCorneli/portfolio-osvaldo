import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardProyects.css'

function CardsProyects({info, img}) {
    
  return (
    <Card >
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title><b>{info.tittle}</b></Card.Title>
        <div id="textBoton">
        <Card.Text>
          {info.description}
          <br />
          {info && info.deploy ? <a href={info.deploy}>Ir al sitio</a> : ""}
        </Card.Text>
        <Button href={info.URL} variant="primary" target="_blank">Repositorio</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardsProyects;