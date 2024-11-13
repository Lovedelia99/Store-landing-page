import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

// modal for when help is needed for the shipping options
function ShippingModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shipping Information</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "gray", color: "white" }}>
        <p>
          Premium shipping: This shipping option costs R50 more, but your
          package is delivered within 1 business day.
        </p>
        <p>
          Original shipping: This is our standard free shipping option. Your
          package will be delivered within 5-7 business days.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShippingModal;
