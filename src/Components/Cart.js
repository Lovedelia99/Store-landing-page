import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Store/cartState";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ShippingModal from "../Modal/shippingModal";

function TotalPrice() {
  const [showModal, setShowModal] = useState("");

  // using redux
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addItem(item));
  };

  const removeCart = (item) => {
    dispatch(removeItem(item));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  // so that modal is able to close
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <br />
      <h2>Total price: R{totalPrice.toFixed(2)}</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {/* map through items to get price and title */}
            {cartItems.map((item, index) => (
              <ul key={index}>
                {item.title} - R{item.price}
                {/* adding a remove button */}
                <button
                  style={{
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontWeight: "500",
                  }}
                  onClick={() => removeCart(item)}
                >
                  Remove
                </button>
              </ul>
            ))}
          </ul>
        </div>
      ) : (
        // shows when nothing is in cart
        <p>No items in cart</p>
      )}
      <hr />

      <Container>
        <p>Choose a method of shipment:</p>
        <Row>
          <Col></Col>
          <Col>
            {/* can also add 50 to total price */}
            <Button
              variant="secondary"
              onClick={() => alert("You have chosen premium shipping")}
            >
              Premium Shipping
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              onClick={() => alert("You have chosen original shipping")}
            >
              Original Shipping
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <p
            style={{ textDecoration: "underline" }}
            onClick={() => setShowModal(true)}
          >
            Help
          </p>
        </Row>
      </Container>
      {/* using modal */}
      <ShippingModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default TotalPrice;
