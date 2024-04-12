import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./modals.css"


function Modals({imagen, info}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <img src={imagen} onClick={() => setShow(true)}/>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <b>{info.tittle}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {info.description}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;