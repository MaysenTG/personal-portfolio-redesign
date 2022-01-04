import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormModal(props) {
    return (
      <>
        <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Thanks for getting in touch with me!</Modal.Title>
          </Modal.Header>
          <Modal.Body>I'll get back to you ASAP!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default FormModal;